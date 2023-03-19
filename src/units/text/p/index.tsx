import CommonsHooksComponents from "../../../hooks";
import styled from "@emotion/styled";
import { TextUnitTypes } from "../../../types/units";

// p 태그를 출력하는 컴포넌트
export default function _PText(props: TextUnitTypes) {
  const { getAllComponentsClassName } = CommonsHooksComponents();
  const { styles, className, children } = props;

  return (
    <P
      style={styles}
      className={getAllComponentsClassName("mcm-p-unit", className)}
    >
      {children}
    </P>
  );
}

const P = styled.p`
  margin: 0px;
`;
