import { SpanText } from "..";

import { getAllComponentsClassName } from "../../../hooks";
import { TextUnitTypes } from "../../../types/units";

// span 태그를 출력하는 컴포넌트
export default function _SpanText(props: TextUnitTypes) {
  const { styles, className, children, isError } = props;

  return (
    <SpanText
      style={styles}
      className={getAllComponentsClassName("mcm-span-unit", className)}
      isError={isError}
    >
      {children}
    </SpanText>
  );
}
