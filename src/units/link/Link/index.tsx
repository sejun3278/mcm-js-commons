import Link from "next/link";
import styled from "@emotion/styled";
import { getAllComponentsClassName } from "../../../hooks";

import { LinkUnitTypes } from "../../../types/units";
import _Error from "../../error";

// router 이동 관련 컴포넌트
export default function _Link(props: LinkUnitTypes) {
  const { href, children, className, id, styles, replace } = props;

  return (
    <_Error
      propsList={{ ...props }}
      requiredList={["href"]}
      mouduleName="_Link"
    >
      <LinkComponent
        passHref={true}
        href={href}
        className={getAllComponentsClassName("mcm-link-unit", className)}
        id={id}
        style={styles}
        replace={replace || false}
      >
        {children}
      </LinkComponent>
    </_Error>
  );
}

const LinkComponent = styled(Link)`
  cursor: pointer;
`;
