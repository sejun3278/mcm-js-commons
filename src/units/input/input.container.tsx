import _InputUIPage from "./input.presenter";

import { ChangeEvent, MutableRefObject, useEffect, useRef } from "react";
import { InputTypes } from "../../types/units";

import _Error from "../error";

export interface InputIProps {
  // text: string;
  _onChangeEvent: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  resetEvent: () => void;
  _inputRef: MutableRefObject<HTMLInputElement | HTMLTextAreaElement>;
  _itemsRef: MutableRefObject<HTMLDivElement>;
}

// 디바운싱 저장 변수
let _debounce: ReturnType<typeof setTimeout> | number;
export default function _Input(props: InputTypes) {
  const {
    defaultValue,
    onChangeEvent,
    delay,
    onResetConfirm,
    value,
    inputRef,
    name,
  } = props as InputTypes;

  const _inputRef =
    inputRef ||
    (useRef() as MutableRefObject<HTMLInputElement | HTMLTextAreaElement>);
  const _itemsRef = useRef() as MutableRefObject<HTMLDivElement>;

  // value와 defaultValue가 있다면, value가 우선적용
  useEffect(() => {
    if (value || defaultValue) {
      toggleShowEvent(value || defaultValue || "");
      onChangeEvent(value || defaultValue || "");
    }

    if (_inputRef?.current) {
      // 초기 value 값 설정 - 디바운싱 적용에 사용
      _inputRef.current.value = value || defaultValue || "";

      toggleShowEvent(value || defaultValue || "");
      onChangeEvent(value || defaultValue || "");
    }
  }, [value, defaultValue]);

  // change 이벤트 실행시 디바운싱 적용하기
  const _onChangeEvent = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const text = e.target.value.trim();

    window.clearTimeout(_debounce);
    // 디바운싱 적용하기
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
    const _reset = () => {
      onChangeEvent("");
      if (_inputRef.current) {
        _inputRef.current.value = "";
        toggleShowEvent("");
      }
    };

    window.clearTimeout(_debounce);
    if (onResetConfirm) {
      if (onResetConfirm()) _reset();
    } else {
      _reset();
    }
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
