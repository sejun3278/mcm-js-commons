import Link from "next/link";
import styled from "@emotion/styled";
import CommonsHooksComponents from "../../../hooks";
import { LinkUnitTypes } from "../../../types/units";

// router 이동 관련 컴포넌트
export default function _Link({
  href,
  children,
  className,
  styles,
}: LinkUnitTypes) {
  const { getAllComponentsClassName } = CommonsHooksComponents();

  return (
    <LinkComponent
      passHref={true}
      href={href}
      className={getAllComponentsClassName("mcm-link-unit", className)}
      style={styles}
    >
      {children}
    </LinkComponent>
  );
}

const LinkComponent = styled(Link)`
  cursor: pointer;
`;
