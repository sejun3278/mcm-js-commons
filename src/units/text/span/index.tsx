import CommonsHooksComponents from "../../../hooks";
import { TextPropsTypes } from "../text.type";

// span 태그를 출력하는 컴포넌트
export default function _SpanText(props: TextPropsTypes) {
  const { getAllComponentsClassName } = CommonsHooksComponents();
  const { styles, className, children } = props;

  return (
    <span
      style={styles}
      className={getAllComponentsClassName("mcm-span-unit", className)}
    >
      {children}
    </span>
  );
}
