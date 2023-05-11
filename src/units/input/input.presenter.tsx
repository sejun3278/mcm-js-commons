import {
  Wrapper,
  Fieldset,
  Input,
  TextArea,
  Items,
  BtnWrapper,
  BtnItems,
  SubmitBtn,
} from "./input.styles";
import _CloseButton from "../button/close";
import _Title from "../title";
import _Button from "../button";

import { getAllComponentsClassName } from "../../hooks";
import { InputTypes } from "../../types/units";
import { InputIProps } from "./input.container";
import { MutableRefObject } from "react";

export default function _InputUIPage(props: InputTypes & InputIProps) {
  const {
    className,
    styles,
    _onChangeEvent,
    onSubmitEvent,
    resetEvent,
    _inputRef,
    _itemsRef,
    value,
    defaultValue,
    placeHolder,
    maxLength,
    isTextArea,
    inputType,
  } = props;

  return (
    <Wrapper
      className="mcm-input-unit-wrapper"
      hasSubmitEvent={onSubmitEvent !== undefined}
      isTextArea={isTextArea}
      style={styles}
    >
      <Fieldset>
        <legend>Input & TextArea</legend>
      </Fieldset>
      <Items ref={_itemsRef} className="mcm-input-unit-items">
        {!isTextArea ? (
          <Input
            className={getAllComponentsClassName("mcm-input-unit", className)}
            type={inputType || "text"}
            placeholder={
              placeHolder ||
              (inputType === "password"
                ? "비밀번호를 입력해주세요."
                : "텍스트를 입력해주세요.")
            }
            maxLength={maxLength || 40}
            onChange={_onChangeEvent}
            ref={_inputRef as MutableRefObject<HTMLInputElement>}
            defaultValue={value || defaultValue}
          />
        ) : (
          <TextArea
            className={getAllComponentsClassName("mcm-input-unit", className)}
            placeholder={placeHolder || "텍스트를 입력해주세요."}
            maxLength={maxLength || 200}
            onChange={_onChangeEvent}
            ref={_inputRef as MutableRefObject<HTMLTextAreaElement>}
            defaultValue={value || defaultValue}
          ></TextArea>
        )}
        <BtnWrapper className="mcm-input-submit-button-wrapper">
          <BtnItems
            // hasText={text}
            isTextArea={isTextArea}
            hasSubmitEvent={onSubmitEvent !== undefined}
            className="mcm-input-submit-button-items"
          >
            {onSubmitEvent && (
              <SubmitBtn
                className="mcm-input-submit-button"
                onClick={onSubmitEvent}
                type="button"
              >
                ✔️
              </SubmitBtn>
            )}
            <_CloseButton onClickEvent={resetEvent} buttonType="button" />
          </BtnItems>
        </BtnWrapper>
      </Items>
    </Wrapper>
  );
}
