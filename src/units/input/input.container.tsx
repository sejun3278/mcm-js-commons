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
  isOpen: boolean;
  toggleIsOpen: (bool: boolean) => () => void;
}

// 디바운싱 저장 변수
let _debounce: ReturnType<typeof setTimeout> | number;
export default function _Input(props: InputTypes) {
  const _inputRef = useRef() as MutableRefObject<
    HTMLInputElement & HTMLTextAreaElement
  >;
  const { defaultValue, onChangeEvent, delay } = props;
  const [text, setText] = useState<string>(defaultValue || "");
  // 모달 오픈 여부
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // 모달 toggle
  const toggleIsOpen = (bool: boolean) => () => {
    setIsOpen(bool);
  };

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
    window.clearTimeout(_debounce);

    setText("");
    onChangeEvent("");

    if (_inputRef.current) {
      _inputRef.current.value = "";
    }

    if (isOpen) setIsOpen(false);
  };

  const _props: InputTypes & InputIProps = {
    ...props,
    _onChangeEvent,
    text,
    resetEvent,
    _inputRef,
    isOpen,
    toggleIsOpen,
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