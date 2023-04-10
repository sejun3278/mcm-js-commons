import styled from "@emotion/styled";

import CommonsHooksComponents from "../../hooks";
import { ImageUnitTypes } from "../../types/units";
import _Error from "../error";

// img 태그를 이용한 이미지 컴포넌트, 오른쪽 버튼 비활성화 기능
export default function _Image(props: ImageUnitTypes) {
  const { getAllComponentsClassName } = CommonsHooksComponents();
  const { src, styles, className } = props;

  return (
    <_Error
      propsList={{ ...props }}
      requiredList={["src"]}
      mouduleName="_Image"
    >
      <Img
        className={getAllComponentsClassName("mcm-image-unit", className)}
        src={src}
        style={styles}
      />
    </_Error>
  );
}

const Img = styled.img`
  width: 100%;
  pointer-events: none; // PC 이미지 다운로드 금지
  -webkit-touch-callout: none; // 아이폰 다운로드 금지
  -webkit-user-select: none; // 드래그 방지
  -moz-user-select: none;
  -ms-use-select: none;
  user-select: none;
`;
