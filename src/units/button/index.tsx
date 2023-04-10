import styled from "@emotion/styled";

import _SpanText from "../text/span";
import _Error from "../error";

import { getAllComponentsClassName } from "../../hooks";
import { ButtonUnitTypes } from "../../types/units";

// button 태그로 렌더하는 컴포넌트
export default function _Button(props: ButtonUnitTypes) {
  const { children, className, onClickEvent, styles, isDisable } = props;

  return (
    <_Error
      propsList={{ ...props }}
      requiredList={["onClickEvent"]}
      mouduleName="_Button"
    >
      <Button
        className={getAllComponentsClassName("cmm-button-unit", className)}
        onClick={(!isDisable && onClickEvent) || undefined}
        role="button_click_event"
        style={styles}
        isDisable={isDisable}
      >
        {children}
      </Button>
    </_Error>
  );
}

interface StylesTypes {
  isDisable?: boolean;
}

export const Button = styled.button`
  cursor: pointer;
  ${(props: StylesTypes) =>
    props.isDisable && {
      cursor: "not-allowed",
      backgroundColor: "#bbbbbb",
      color: "#999999",
    }}
`;
