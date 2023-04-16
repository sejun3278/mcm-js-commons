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

export default function _InputUIPage(props: InputTypes & InputIProps) {
  const {
    className,
    styles,
    _onChangeEvent,
    onSubmitEvent,
    resetEvent,
    _inputRef,
    defaultValue,
    placeHolder,
    maxLength,
    text,
    isTextArea,
  } = props;

  return (
    <Wrapper className="mcm-input-unit-wrapper">
      <Fieldset>
        <legend>Input & TextArea</legend>
      </Fieldset>
      <Items>
        {!isTextArea ? (
          <Input
            className={getAllComponentsClassName("mcm-input-unit", className)}
            style={styles}
            type="text"
            placeholder={placeHolder || "텍스트를 입력해주세요."}
            maxLength={maxLength || 40}
            onChange={_onChangeEvent}
            ref={_inputRef}
            defaultValue={defaultValue}
          />
        ) : (
          <TextArea
            className={getAllComponentsClassName("mcm-input-unit", className)}
            style={styles}
            placeholder={placeHolder || "텍스트를 입력해주세요."}
            maxLength={maxLength || 200}
            onChange={_onChangeEvent}
            ref={_inputRef}
          ></TextArea>
        )}
        <BtnWrapper
          hasText={text}
          isTextArea={isTextArea}
          hasSubmitEvent={onSubmitEvent !== undefined}
        >
          <BtnItems
            hasText={text}
            isTextArea={isTextArea}
            hasSubmitEvent={onSubmitEvent !== undefined}
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
