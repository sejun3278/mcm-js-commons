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
  onResetConfirm,
  onSubmitEvent,
  value,
  defaultValue,
  placeHolder,
  maxLength,
  isTextArea,
  delay,
  inputType,
  readOnly,
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

  return (
    <_Input
      className={className}
      styles={styles}
      // @ts-ignore
      onChangeEvent={onChangeEvent === undefined ? undefined : changeText}
      onSubmitEvent={submitText}
      onResetConfirm={onResetConfirm}
      value={value || ""}
      defaultValue={defaultValue || ""}
      placeHolder={placeHolder}
      maxLength={maxLength}
      isTextArea={isTextArea}
      delay={delay}
      inputType={inputType || "text"}
      readOnly={readOnly}
    />
  );
}

SB_Input.propTypes = {
  className: PropTypes.string,
  styles: PropTypes.shape({}),
  onChangeEvent: PropTypes.func.isRequired,
  onSubmitEvent: PropTypes.func,
  onResetEvent: PropTypes.func,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  placeHolder: PropTypes.string,
  maxLength: PropTypes.number,
  isTextArea: PropTypes.bool,
  delay: PropTypes.number,
  inputType: PropTypes.string,
  readOnly: PropTypes.bool,
};

// @ts-ignore
SB_Input.defaultProps = {
  className: "",
  styles: {},
  // onChangeEvent: () => {},
  onResetEvent: () => {},
  onSubmitEvent: () => {},
  value: "",
  defaultValue: "",
  placeHolder: "",
  maxLength: 10,
  isTextArea: false,
  delay: -1,
  inputType: "text",
  readOnly: false,
} as InputTypes;
