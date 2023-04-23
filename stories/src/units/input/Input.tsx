import React, { useState } from "react";
import PropTypes from "prop-types";

import { _Input } from "../../../../src";
import { InputTypes } from "../../../../src/types/units";

// import _Image from "../../../../src/units/image";
// import { ImageUnitTypes } from "../../../../src/types/units";

export default function SB_Input({
  className,
  styles,
  onChangeEvent,
  onResetEvent,
  onSubmitEvent,
  defaultValue,
  placeHolder,
  maxLength,
  isTextArea,
  delay,
}: InputTypes) {
  const [text, setText] = useState("");

  const changeText = (text: string) => {
    setText(text);
    if (onChangeEvent) onChangeEvent(text);
  };

  const submitText = () => {
    alert("작성 된 글 : " + text);
    if (onSubmitEvent) onSubmitEvent();
  };

  console.log(onChangeEvent);
  return (
    <_Input
      className={className}
      styles={styles}
      // @ts-ignore
      onChangeEvent={onChangeEvent === undefined ? undefined : changeText}
      onSubmitEvent={submitText}
      onResetEvent={onResetEvent}
      defaultValue={defaultValue || ""}
      placeHolder={placeHolder}
      maxLength={maxLength}
      isTextArea={isTextArea}
      delay={delay}
    />
  );
}

SB_Input.propTypes = {
  className: PropTypes.string,
  styles: PropTypes.shape({}),
  onChangeEvent: PropTypes.func.isRequired,
  onSubmitEvent: PropTypes.func,
  onResetEvent: PropTypes.func,
  defaultValue: PropTypes.string,
  placeHolder: PropTypes.string,
  maxLength: PropTypes.number,
  isTextArea: PropTypes.bool,
  delay: PropTypes.number,
};

SB_Input.defaultProps = {
  className: "",
  styles: {},
  // onChangeEvent: () => {},
  onResetEvent: () => {},
  onSubmitEvent: () => {},
  defaultValue: "",
  placeHolder: "",
  maxLength: 10,
  isTextArea: false,
  delay: -1,
} as InputTypes;
