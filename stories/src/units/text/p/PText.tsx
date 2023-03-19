import React from "react";
import PropTypes from "prop-types";

import _PText from "../../../../../src/units/text/p";
import { TextUnitTypes } from "../../../../../src/types/units";

export default function SB_PText({
  children,
  styles,
  className,
}: TextUnitTypes) {
  return (
    <_PText className={className} styles={styles}>
      {children}
    </_PText>
  );
}

SB_PText.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  styles: PropTypes.shape({}),
};

SB_PText.defaultProps = {
  children: "p 태그 텍스트 페이지 입니다.",
  className: "",
  styles: {},
};
