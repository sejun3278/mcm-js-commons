import styled from "@emotion/styled";
import { TextUnitTypes, TextUnitAddTypes } from "../../types/units";

import _PText from "./p";
import _SpanText from "./span";

// p 또는 span 태그를 출력하는 컴포넌트
export default function _Text(props: TextUnitTypes & TextUnitAddTypes) {
  const { type, children } = props;

  return type === "p" ? (
    <_PText {...props}>{children}</_PText>
  ) : (
    <_SpanText {...props}>{children}</_SpanText>
  );
}

export interface StyleTypes {
  isError?: boolean;
}

// P 텍스트 스타일
export const PText = styled.p`
  margin: 0px;

  ${(props: StyleTypes) =>
    props.isError && {
      color: "#B46060",
      fontWeight: "700",
    }}
`;

// Span 텍스트 스타일
export const SpanText = styled.span`
  ${(props: StyleTypes) =>
    props.isError && {
      color: "#B46060",
      fontWeight: "700",
    }}
`;
