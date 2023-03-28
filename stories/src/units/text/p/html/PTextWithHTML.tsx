import React from "react";
import PropTypes from "prop-types";

import _PTextWithHTML from "../../../../../../src/units/text/p/html";
import { TextHTMLUnitTypes } from "../../../../../../src/types/units";

export default function SB_PTextWithHTML({
  styles,
  className,
  isError,
  dangerouslySetInnerHTML,
}: TextHTMLUnitTypes) {
  return (
    <_PTextWithHTML
      className={className}
      styles={styles}
      isError={isError}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
    />
  );
}

SB_PTextWithHTML.propTypes = {
  className: PropTypes.string,
  styles: PropTypes.shape({}),
  isError: PropTypes.bool,
  dangerouslySetInnerHTML: PropTypes.string.isRequired,
};

SB_PTextWithHTML.defaultProps = {
  dangerouslySetInnerHTML: "p 태그 + HTML 형태의 텍스트입니다.",
  className: "",
  styles: {},
  isError: false,
};
