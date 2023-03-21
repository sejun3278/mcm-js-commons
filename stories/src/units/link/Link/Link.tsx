import React from "react";
import PropTypes from "prop-types";

import _Link from "../../../../../src/units/link/Link";
import { LinkUnitTypes } from "../../../../../src/types/units";

export default function SB_Anchor({
  children,
  styles,
  className,
  href,
}: LinkUnitTypes) {
  return (
    <_Link href={href} className={className} styles={styles}>
      {children}
    </_Link>
  );
}

SB_Anchor.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  styles: PropTypes.shape({}),
  href: PropTypes.string.isRequired,
};

SB_Anchor.defaultProps = {
  children: "링크(Link) 페이지 입니다.",
  className: "",
  styles: {},
  href: "https://mcm-js.site/modules/modal",
};
