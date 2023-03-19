import styled from "@emotion/styled";

import CommonsHooksComponents from "../../hooks";
import { ButtonUnitTypes } from "../../types/units";

// button 태그로 렌더하는 컴포넌트
export default function _Button({
  children,
  className,
  onClickEvent,
  styles,
  isDisable,
}: ButtonUnitTypes) {
  const { getAllComponentsClassName } = CommonsHooksComponents();

  return (
    <Button
      className={getAllComponentsClassName("cmm-button-unit", className)}
      onClick={(!isDisable && onClickEvent) || undefined}
      role="button_click_event"
      style={styles}
      isDisable={isDisable}
    >
      {children}
    </Button>
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
