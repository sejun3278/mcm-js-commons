import React from "react";
import PropTypes from "prop-types";

import _Image from "../../../../src/units/image";
import { ImageUnitTypes } from "../../../../src/types/units";

export default function SB_Image({ className, styles, src }: ImageUnitTypes) {
  return <_Image className={className} styles={styles} src={src} />;
}

SB_Image.propTypes = {
  className: PropTypes.string,
  styles: PropTypes.shape({}),
  src: PropTypes.string.isRequired,
};

SB_Image.defaultProps = {
  className: "",
  styles: {},
  src: "https://www.costco.co.kr/medias/sys_master/images/h9d/h20/121246995578910.jpg",
};
