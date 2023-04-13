import styled from "@emotion/styled";
import _Button from "..";
import _Error from "../../error";

import { getAllComponentsClassName, getPXForm } from "../../../hooks";
import { CloseButtonTypes } from "../../../types/units";

// 닫기 형태로 사용하는 버튼 컴포넌트
export default function _CloseButton(props: CloseButtonTypes) {
  const {
    className,
    buttonSize, // 버튼 사이즈
    buttonWeight, // 버튼 굵기 조절
    buttonColor,
    isDisable, // 닫기 비활성화
    onClickEvent,
    styles,
    buttonType,
  } = props;

  return (
    <_Error
      propsList={{ ...props }}
      requiredList={["onClickEvent"]}
      mouduleName="_CloseButton"
    >
      <ButtonWrapper
        className={getAllComponentsClassName(
          "mcm-close-button-unit",
          className
        )}
        buttonSize={getPXForm(buttonSize || "15px", "15px")}
        buttonWeight={getPXForm(buttonWeight || "1px", "1px")}
        buttonColor={buttonColor || "black"}
        onClick={(!isDisable && onClickEvent) || undefined}
        disable={isDisable}
        style={styles}
        type={buttonType || "submit"}
      />
    </_Error>
  );
}

interface StyleTypes {
  buttonSize?: string;
  buttonWeight?: string;
  disable?: boolean;
  buttonColor?: string;
}

export const ButtonWrapper = styled.button`
  border: unset;
  background-color: unset;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;

  ${(props: StyleTypes) =>
    props.buttonSize && {
      width: props.buttonSize,
      height: props.buttonSize,
    }};

  ${(props) =>
    props.disable && {
      cursor: "not-allowed",
    }};

  ::after,
  ::before {
    content: "";
    position: absolute;
    width: 100%;
    background-color: black;

    ${(props) =>
      props.buttonWeight && {
        height: props.buttonWeight,
      }}

    ${(props) =>
      props.disable && {
        cursor: "not-allowed",
        backgroundColor: "#666666",
      }}

    ${(props) =>
      props.buttonColor && {
        backgroundColor: props.buttonColor,
      }}
  }

  ::before {
    transform: rotate(45deg);
  }

  ::after {
    transform: rotate(-45deg);
  }
`;
