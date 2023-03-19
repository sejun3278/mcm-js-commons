import React from "react";
import PropTypes from "prop-types";

import _Text from "../../../../src/units/text";
import { TextUnitTypes, TextUnitAddTypes } from "../../../../src/types/units";

export default function SB_Text({
  children,
  styles,
  className,
  type,
}: TextUnitTypes & TextUnitAddTypes) {
  return (
    <_Text className={className} styles={styles} type={type}>
      {children}
    </_Text>
  );
}

SB_Text.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  styles: PropTypes.shape({}),
  type: PropTypes.string,
};

SB_Text.defaultProps = {
  children: "텍스트 페이지 입니다.",
  className: "",
  styles: {},
  type: "span",
};
