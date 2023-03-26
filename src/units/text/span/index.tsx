import styled from "@emotion/styled";

import CommonsHooksComponents from "../../../hooks";
import { TextUnitTypes } from "../../../types/units";
import { TextStyleTypes } from "..";

// span 태그를 출력하는 컴포넌트
export default function _SpanText(props: TextUnitTypes) {
  const { getAllComponentsClassName } = CommonsHooksComponents();
  const { styles, className, children, dangerouslySetInnerHTML, isError } =
    props;

  return (
    <SpanText
      style={styles}
      className={getAllComponentsClassName("mcm-span-unit", className)}
      dangerouslySetInnerHTML={
        dangerouslySetInnerHTML
          ? { __html: dangerouslySetInnerHTML || "" }
          : undefined
      }
      isError={isError}
    >
      {(!dangerouslySetInnerHTML && children) || undefined}
    </SpanText>
  );
}

const SpanText = styled.span`
  ${(props: TextStyleTypes) =>
    props.isError && {
      color: "#B46060",
      fontWeight: "700",
    }}
`;
