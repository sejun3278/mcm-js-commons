import Link from "next/link";
import styled from "@emotion/styled";
import { getAllComponentsClassName } from "../../../hooks";

import { LinkUnitTypes } from "../../../types/units";
import _Error from "../../error";

// router 이동 관련 컴포넌트
export default function _Link(props: LinkUnitTypes) {
  const { children, className, replace } = props;

  const _props: LinkUnitTypes = { ...props };
  // className 지정
  _props.className = getAllComponentsClassName("mcm-link-unit", className);
  _props.replace = replace ? true : false;

  return (
    <_Error
      propsList={{ ...props }}
      requiredList={["href"]}
      mouduleName="_Link"
    >
      <LinkComponent passHref={true} {..._props}>
        {children}
      </LinkComponent>
    </_Error>
  );
}

const LinkComponent = styled(Link)`
  cursor: pointer;
`;
