import { PText } from "..";

import { getAllComponentsClassName } from "../../../hooks";
import { TextUnitTypes } from "../../../types/units";
import { PTagRefType } from "../../../types/commons.type";

// p 태그를 출력하는 컴포넌트
export default function _PText(props: TextUnitTypes & PTagRefType) {
  const { styles, className, id, children, isError, _ref } = props;

  return (
    <PText
      style={styles}
      className={getAllComponentsClassName("mcm-p-unit", className)}
      id={id}
      isError={isError}
      ref={_ref}
    >
      {children}
    </PText>
  );
}
