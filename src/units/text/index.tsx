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
