import _InputUIPage from "./input.presenter";

import { ChangeEvent, MutableRefObject, useRef, useState } from "react";
import { InputTypes } from "../../types/units";

import _Error from "../error";

export interface InputIProps {
  text: string;
  _onChangeEvent: (
    e: ChangeEvent<HTMLInputElement & HTMLTextAreaElement>
  ) => void;
  resetEvent: () => void;
  _inputRef: MutableRefObject<HTMLInputElement & HTMLTextAreaElement>;
}

// 디바운싱 저장 변수
let _debounce: ReturnType<typeof setTimeout> | number;
export default function _Input(props: InputTypes) {
  const _inputRef = useRef() as MutableRefObject<
    HTMLInputElement & HTMLTextAreaElement
  >;
  const { defaultValue, onChangeEvent, delay } = props;
  const [text, setText] = useState<string>(defaultValue || "");

  // change 이벤트 실행시 디바운싱 적용하기
  const _onChangeEvent = (
    e: ChangeEvent<HTMLInputElement & HTMLTextAreaElement>
  ) => {
    const text = e.target.value.trim();

    window.clearTimeout(_debounce);
    if (onChangeEvent) {
      _debounce = window.setTimeout(() => {
        setText(text);
        onChangeEvent(text);
      }, delay || 300);
    }
  };

  // text 값 초기화
  const resetEvent = () => {
    if ((props.onResetEvent && props.onResetEvent()) || !props.onResetEvent) {
      window.clearTimeout(_debounce);

      setText("");
      onChangeEvent("");

      if (_inputRef.current) {
        _inputRef.current.value = "";
      }
    }
  };

  const _props: InputTypes & InputIProps = {
    ...props,
    _onChangeEvent,
    text,
    resetEvent,
    _inputRef,
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
