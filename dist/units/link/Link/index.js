var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import Link from "next/link";
import styled from "@emotion/styled";
import CommonsHooksComponents from "../../../hooks";
import _Error from "../../error";
// router 이동 관련 컴포넌트
export default function _Link(props) {
    var getAllComponentsClassName = CommonsHooksComponents().getAllComponentsClassName;
    var href = props.href, children = props.children, className = props.className, styles = props.styles;
    return (_jsx(_Error, __assign({ propsList: __assign({}, props), requiredList: ["href"], mouduleName: "_Link" }, { children: _jsx(LinkComponent, __assign({ passHref: true, href: href, className: getAllComponentsClassName("mcm-link-unit", className), style: styles }, { children: children })) })));
}
var LinkComponent = styled(Link)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  cursor: pointer;\n"], ["\n  cursor: pointer;\n"])));
var templateObject_1;
