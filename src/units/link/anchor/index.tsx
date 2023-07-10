import styled from "@emotion/styled";

import { AnchorUnitTypes } from "../../../types/units";
import { getAllComponentsClassName } from "../../../hooks";
import _Error from "../../error";

// a태그를 사용해 타 웹 사이트 이동
export default function _Anchor(props: AnchorUnitTypes) {
  const { children, className, notTarget } = props;

  const _props: AnchorUnitTypes = { ...props };
  _props.className = getAllComponentsClassName("mcm-anchor-unit", className);

  return (
    <_Error
      propsList={{ ...props }}
      requiredList={["href"]}
      mouduleName="_Anchor"
    >
      <Anchor
        target={notTarget ? "_self" : "_blank"}
        rel="noreferrer"
        {..._props}
      >
        {children}
      </Anchor>
    </_Error>
  );
}

const Anchor = styled.a`
  color: blue;
  text-decoration: underline;
`;
