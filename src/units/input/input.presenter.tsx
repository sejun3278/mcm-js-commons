import {
  Wrapper,
  Fieldset,
  Input,
  TextArea,
  Items,
  BtnWrapper,
  BtnItems,
  SubmitBtn,
  ResetWrapper,
  ResetButtonWrapper,
} from "./input.styles";
import _CloseButton from "../button/close";
import _Title from "../title";
import _Button from "../button";

import { getAllComponentsClassName } from "../../hooks";
import { InputTypes } from "../../types/units";
import { InputIProps } from "./input.container";

import { Modal } from "mcm-js";

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
    isOpen,
    toggleIsOpen,
  } = props;

  return (
    <Wrapper className="mcm-input-unit-wrapper">
      <Modal
        show={isOpen}
        onCloseModal={toggleIsOpen(false)}
        showBGAnimation
        showModalOpenAnimation
        modalSize={{ height: "200px" }}
        mobileModalSize={{ height: "140px", width: "50%" }}
      >
        <ResetWrapper>
          <_Title titleLevel="h2">작성된 내용을 삭제 하시겠습니까?</_Title>
          <ResetButtonWrapper>
            <_Button onClickEvent={resetEvent} buttonType="button">
              삭제
            </_Button>
            <_Button onClickEvent={toggleIsOpen(false)} buttonType="button">
              취소
            </_Button>
          </ResetButtonWrapper>
        </ResetWrapper>
      </Modal>
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
            <_CloseButton
              onClickEvent={toggleIsOpen(true)}
              buttonType="button"
            />
          </BtnItems>
        </BtnWrapper>
      </Items>
    </Wrapper>
  );
}
