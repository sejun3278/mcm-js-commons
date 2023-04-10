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
import _Error from "../error";
import CommonsHooksComponents from "../../hooks";
// button 태그로 렌더하는 컴포넌트
export default function _Button(props) {
    var getAllComponentsClassName = CommonsHooksComponents().getAllComponentsClassName;
    var children = props.children, className = props.className, onClickEvent = props.onClickEvent, styles = props.styles, isDisable = props.isDisable;
    return (_jsx(_Error, __assign({ propsList: __assign({}, props), requiredList: ["onClickEvent"], mouduleName: "_Button" }, { children: _jsx(Button, __assign({ className: getAllComponentsClassName("cmm-button-unit", className), onClick: (!isDisable && onClickEvent) || undefined, role: "button_click_event", style: styles, isDisable: isDisable }, { children: children })) })));
}
export var Button = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  cursor: pointer;\n  ", "\n"], ["\n  cursor: pointer;\n  ", "\n"])), function (props) {
    return props.isDisable && {
        cursor: "not-allowed",
        backgroundColor: "#bbbbbb",
        color: "#999999",
    };
});
var templateObject_1;
