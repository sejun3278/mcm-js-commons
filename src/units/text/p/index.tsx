import { PText } from "..";

import CommonsHooksComponents from "../../../hooks";
import { TextUnitTypes } from "../../../types/units";

// p 태그를 출력하는 컴포넌트
export default function _PText(props: TextUnitTypes) {
  const { getAllComponentsClassName } = CommonsHooksComponents();
  const { styles, className, children, isError } = props;

  return (
    <PText
      style={styles}
      className={getAllComponentsClassName("mcm-p-unit", className)}
      isError={isError}
    >
      {children}
    </PText>
  );
}
