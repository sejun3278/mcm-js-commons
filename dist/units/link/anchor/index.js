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
import styled from "@emotion/styled";
import CommonsHooksComponents from "../../../hooks";
import _Error from "../../error";
// a태그를 사용해 타 웹 사이트 이동
export default function _Anchor(props) {
    var getAllComponentsClassName = CommonsHooksComponents().getAllComponentsClassName;
    var children = props.children, href = props.href, className = props.className, notTarget = props.notTarget, styles = props.styles;
    return (_jsx(_Error, __assign({ propsList: __assign({}, props), requiredList: ["href"], mouduleName: "_Anchor" }, { children: _jsx(Anchor, __assign({ style: styles, href: href, target: notTarget ? "_self" : "_blank", rel: "noreferrer", className: getAllComponentsClassName("mcm-anchor-unit", className) }, { children: children })) })));
}
var Anchor = styled.a(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: blue;\n  text-decoration: underline;\n"], ["\n  color: blue;\n  text-decoration: underline;\n"])));
var templateObject_1;
