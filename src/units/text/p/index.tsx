import styled from "@emotion/styled";

import CommonsHooksComponents from "../../../hooks";
import { TextUnitTypes } from "../../../types/units";
import { TextStyleTypes } from "..";

// p 태그를 출력하는 컴포넌트
export default function _PText(props: TextUnitTypes) {
  const { getAllComponentsClassName } = CommonsHooksComponents();
  const { styles, className, children, dangerouslySetInnerHTML, isError } =
    props;

  return (
    <PText
      style={styles}
      className={getAllComponentsClassName("mcm-p-unit", className)}
      dangerouslySetInnerHTML={
        dangerouslySetInnerHTML
          ? { __html: dangerouslySetInnerHTML || "" }
          : undefined
      }
      isError={isError}
    >
      {(!dangerouslySetInnerHTML && children) || undefined}
    </PText>
  );
}

const PText = styled.p`
  margin: 0px;

  ${(props: TextStyleTypes) =>
    props.isError && {
      color: "#B46060",
      fontWeight: "700",
    }}
`;
