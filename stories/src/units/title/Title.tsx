import React from "react";
import PropTypes from "prop-types";

import _Title from "../../../../src/units/title";
import { TitleUnitTypes } from "../../../../src/types/units";

export default function SB_Title({
  children,
  styles,
  className,
  titleLevel,
}: TitleUnitTypes) {
  return (
    <_Title className={className} styles={styles} titleLevel={titleLevel}>
      {children}
    </_Title>
  );
}

SB_Title.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  styles: PropTypes.shape({}),
  titleLevel: PropTypes.string,
};

SB_Title.defaultProps = {
  children: "텍스트 페이지 입니다.",
  className: "",
  styles: {},
  titleLevel: "h1",
};
