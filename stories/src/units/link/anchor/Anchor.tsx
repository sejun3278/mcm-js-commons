import React from "react";
import PropTypes from "prop-types";

import _Anchor from "../../../../../src/units/link/anchor";
import { AnchorUnitTypes } from "../../../../../src/types/units";

export default function SB_Anchor({
  children,
  styles,
  className,
  href,
  notTarget,
}: AnchorUnitTypes) {
  return (
    <_Anchor
      href={href}
      notTarget={notTarget}
      className={className}
      styles={styles}
    >
      {children}
    </_Anchor>
  );
}

SB_Anchor.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  styles: PropTypes.shape({}),
  href: PropTypes.string.isRequired,
  notTarget: PropTypes.bool,
};

SB_Anchor.defaultProps = {
  children: "링크(Anchor) 페이지 입니다.",
  className: "",
  styles: {},
  href: "https://mcm-js.site/",
  notTarget: false,
};
