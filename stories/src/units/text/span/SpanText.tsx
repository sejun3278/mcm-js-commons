import React from "react";
import PropTypes from "prop-types";

import _SpanText from "../../../../../src/units/text/span";
import { TextUnitTypes } from "../../../../../src/types/units";

export default function SB_SpanText({
  children,
  styles,
  className,
  isError,
}: TextUnitTypes) {
  return (
    <_SpanText className={className} styles={styles} isError={isError}>
      {children}
    </_SpanText>
  );
}

SB_SpanText.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  styles: PropTypes.shape({}),
  isError: PropTypes.bool,
};

SB_SpanText.defaultProps = {
  children: "span 태그 텍스트 페이지 입니다.",
  className: "",
  styles: {},
  isError: false,
};
