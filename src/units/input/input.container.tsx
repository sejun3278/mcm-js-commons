import _InputUIPage from "./input.presenter";

import {
  ChangeEvent,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { InputTypes } from "../../types/units";

import _Error from "../error";

export interface InputIProps {
  // text: string;
  _onChangeEvent: (
    e: ChangeEvent<HTMLInputElement & HTMLTextAreaElement>
  ) => void;
  resetEvent: () => void;
  _inputRef: MutableRefObject<HTMLInputElement & HTMLTextAreaElement>;
  _itemsRef: MutableRefObject<HTMLDivElement>;
}

// 디바운싱 저장 변수
let _debounce: ReturnType<typeof setTimeout> | number;
export default function _Input(props: InputTypes) {
  const _inputRef = useRef() as MutableRefObject<
    HTMLInputElement & HTMLTextAreaElement
  >;
  const _itemsRef = useRef() as MutableRefObject<HTMLDivElement>;

  const { defaultValue, onChangeEvent, delay, onResetEvent } = props;

  useEffect(() => {
    if (defaultValue) {
      toggleShowEvent(defaultValue || "");
      onChangeEvent(defaultValue);
    }
  }, [defaultValue]);

  // change 이벤트 실행시 디바운싱 적용하기
  const _onChangeEvent = (
    e: ChangeEvent<HTMLInputElement & HTMLTextAreaElement>
  ) => {
    const text = e.target.value.trim();

    window.clearTimeout(_debounce);
    if (onChangeEvent) {
      _debounce = window.setTimeout(() => {
        toggleShowEvent(text);

        onChangeEvent(text);
      }, delay || -1);
    }
  };

  // submit 태그 on/off toggle
  const toggleShowEvent = (text: string) => {
    if (_itemsRef?.current) {
      if (text) {
        if (!_itemsRef.current.classList.contains("show-submit-buttons"))
          _itemsRef.current.classList.add("show-submit-buttons");
      } else {
        if (_itemsRef.current.classList.contains("show-submit-buttons"))
          _itemsRef.current.classList.remove("show-submit-buttons");
      }
    }
  };

  // text 값 초기화
  const resetEvent = () => {
    // if ((props.onResetEvent && props.onResetEvent()) || !props.onResetEvent) {
    window.clearTimeout(_debounce);
    if (onResetEvent) onResetEvent();

    onChangeEvent("");
    if (_inputRef.current) {
      _inputRef.current.value = "";
      toggleShowEvent("");
    }
    // }
  };

  const _props: InputTypes & InputIProps = {
    ...props,
    _onChangeEvent,
    // text,
    resetEvent,
    _inputRef,
    _itemsRef,
  };

  return (
    <_Error
      propsList={{ ...props }}
      requiredList={["onChangeEvent"]}
      mouduleName="Input"
      children={<_InputUIPage {..._props} />}
    />
  );
}
