import {
  Wrapper,
  Fieldset,
  Input,
  TextArea,
  Items,
  BtnWrapper,
  BtnItems,
} from "./input.styles";
import _CloseButton from "../button/close";

import { getAllComponentsClassName } from "../../hooks";
import { InputTypes } from "../../types/units";
import { InputIProps } from "./input.container";

export default function _InputUIPage(props: InputTypes & InputIProps) {
  const {
    className,
    styles,
    _onChangeEvent,
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
        <legend>Input</legend>
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
            hasText={text}
          ></TextArea>
        )}
        <BtnWrapper hasText={text}>
          {/* <BtnItems> */}
          <_CloseButton onClickEvent={resetEvent} />
          {/* </BtnItems> */}
          {/* <BtnItems> */}
          <_CloseButton onClickEvent={resetEvent} />
          {/* </BtnItems> */}
        </BtnWrapper>
      </Items>
    </Wrapper>
  );
}
