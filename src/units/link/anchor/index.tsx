import styled from "@emotion/styled";

import { AnchorUnitTypes } from "../../../types/units";
import CommonsHooksComponents from "../../../hooks";

// a태그를 사용해 타 웹 사이트 이동
export default function _Anchor({
  children,
  styles,
  href,
  notTarget,
  className,
}: AnchorUnitTypes) {
  const { getAllComponentsClassName } = CommonsHooksComponents();

  return (
    <Anchor
      style={styles}
      href={href}
      target={notTarget ? "_self" : "_blank"}
      rel="noreferrer"
      className={getAllComponentsClassName("mcm-anchor-unit", className)}
    >
      {children}
    </Anchor>
  );
}

const Anchor = styled.a`
  color: blue;
  text-decoration: underline;
`;
