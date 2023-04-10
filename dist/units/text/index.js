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
import _PText from "./p";
import _SpanText from "./span";
// p 또는 span 태그를 출력하는 컴포넌트
export default function _Text(props) {
    var type = props.type, children = props.children;
    return type === "p" ? (_jsx(_PText, __assign({}, props, { children: children }))) : (_jsx(_SpanText, __assign({}, props, { children: children })));
}
// P 텍스트 스타일
export var PText = styled.p(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin: 0px;\n\n  ", "\n"], ["\n  margin: 0px;\n\n  ", "\n"])), function (props) {
    return props.isError && {
        color: "#d14d72",
        fontWeight: "700",
    };
});
// Span 텍스트 스타일
export var SpanText = styled.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    return props.isError && {
        color: "#d14d72",
        fontWeight: "700",
    };
});
var templateObject_1, templateObject_2;
