import React from "react";

import PropTypes from "prop-types";
import _CloseButton from "../../../../../src/units/button/close";
import { CloseButtonTypes } from "../../../../../src/types/units";

export default function SB_CloseButton({
  className,
  styles,
  buttonSize,
  buttonWeight,
  onClickEvent,
  disable,
}: CloseButtonTypes) {
  return (
    <_CloseButton
      className={className}
      styles={styles}
      buttonSize={buttonSize}
      buttonWeight={buttonWeight}
      disable={disable}
      onClickEvent={onClickEvent}
    />
  );
}

SB_CloseButton.propTypes = {
  className: PropTypes.string,
  buttonSize: PropTypes.string,
  buttonWeight: PropTypes.string,
  disable: PropTypes.bool,
  onClickEvent: PropTypes.func.isRequired,
};

SB_CloseButton.defaultProps = {
  className: "",
  buttonSize: "15px",
  buttonWeight: "1px",
  isDisable: false,
};
