import { SpanText } from "..";

import { getAllComponentsClassName } from "../../../hooks";
import { TextUnitTypes } from "../../../types/units";
import { SpanTagRefType } from "../../../types/commons.type";

// span 태그를 출력하는 컴포넌트
export default function _SpanText(props: TextUnitTypes & SpanTagRefType) {
  const { styles, className, id, children, isError, _ref } = props;

  return (
    <SpanText
      style={styles}
      className={getAllComponentsClassName("mcm-span-unit", className)}
      id={id}
      isError={isError}
      ref={_ref}
    >
      {children}
    </SpanText>
  );
}
