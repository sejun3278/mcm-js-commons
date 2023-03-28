import React from "react";
import PropTypes from "prop-types";

import _SpanTextWithHTML from "../../../../../../src/units/text/span/html";
import { TextHTMLUnitTypes } from "../../../../../../src/types/units";

export default function SB_SpanTextWithHTML({
  styles,
  className,
  isError,
  dangerouslySetInnerHTML,
}: TextHTMLUnitTypes) {
  return (
    <_SpanTextWithHTML
      className={className}
      styles={styles}
      isError={isError}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
    />
  );
}

SB_SpanTextWithHTML.propTypes = {
  className: PropTypes.string,
  styles: PropTypes.shape({}),
  isError: PropTypes.bool,
  dangerouslySetInnerHTML: PropTypes.string.isRequired,
};

SB_SpanTextWithHTML.defaultProps = {
  dangerouslySetInnerHTML: "p 태그 + HTML 형태의 텍스트입니다.",
  className: "",
  styles: {},
  isError: false,
};
