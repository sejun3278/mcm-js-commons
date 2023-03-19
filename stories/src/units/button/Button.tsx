import React from "react";

import PropTypes from "prop-types";
import _Button from "../../../../src/units/button";
import { ButtonUnitTypes } from "../../../../src/types/units";

export default function SB_Button({
  children,
  className,
  styles,
  isDisable,
  onClickEvent,
}: ButtonUnitTypes) {
  return (
    <_Button
      className={className}
      styles={styles}
      isDisable={isDisable}
      onClickEvent={onClickEvent}
    >
      {children}
    </_Button>
  );
}

SB_Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  styles: PropTypes.shape({}),
  isDisable: PropTypes.bool,
  onClickEvent: PropTypes.func.isRequired,
};

SB_Button.defaultProps = {
  className: "",
  styles: {},
  children: <span>Button StoryBook</span>,
  isDisable: false,
  onClickEvent: () => {
    alert("버튼을 클릭했습니다.");
  },
};
