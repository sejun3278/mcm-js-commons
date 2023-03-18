import CommonsHooksComponents from "../../../hooks";
import styled from "@emotion/styled";
import { TextPropsTypes } from "../text.type";

// p 태그를 출력하는 컴포넌트
export default function _PText(props: TextPropsTypes) {
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
