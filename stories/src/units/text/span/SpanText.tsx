import React from "react";
import PropTypes from "prop-types";

import _SpanText from "../../../../../src/units/text/span";
import { TextUnitTypes } from "../../../../../src/types/units";

export default function SB_SpanText({
  children,
  styles,
  className,
}: TextUnitTypes) {
  return (
    <_SpanText className={className} styles={styles}>
      {children}
    </_SpanText>
  );
}

SB_SpanText.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  styles: PropTypes.shape({}),
};

SB_SpanText.defaultProps = {
  children: "span 태그 텍스트 페이지 입니다.",
  className: "",
  styles: {},
};
