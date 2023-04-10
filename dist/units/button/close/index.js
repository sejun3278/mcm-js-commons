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
import _Error from "../../error";
import CommonsHooksComponents from "../../../hooks";
// 닫기 형태로 사용하는 버튼 컴포넌트
export default function _CloseButton(props) {
    var _a = CommonsHooksComponents(), getAllComponentsClassName = _a.getAllComponentsClassName, getPXForm = _a.getPXForm;
    var className = props.className, buttonSize = props.buttonSize, // 버튼 사이즈
    buttonWeight = props.buttonWeight, // 버튼 굵기 조절
    buttonColor = props.buttonColor, disable = props.disable, // 닫기 비활성화
    onClickEvent = props.onClickEvent, styles = props.styles;
    return (_jsx(_Error, __assign({ propsList: __assign({}, props), requiredList: ["onClickEvent"], mouduleName: "_CloseButton" }, { children: _jsx(ButtonWrapper, { className: getAllComponentsClassName("mcm-close-button-unit", className), buttonSize: getPXForm(buttonSize || "15px", "15px"), buttonWeight: getPXForm(buttonWeight || "1px", "1px"), buttonColor: buttonColor || "black", onClick: (!disable && onClickEvent) || undefined, disable: disable, style: styles }) })));
}
export var ButtonWrapper = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border: unset;\n  background-color: unset;\n  cursor: pointer;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n\n  ", ";\n\n  ", ";\n\n  :after,\n  :before {\n    content: \"\";\n    position: absolute;\n    width: 100%;\n    background-color: black;\n\n    ", "\n\n    ", "\n\n    ", "\n  }\n\n  :before {\n    transform: rotate(45deg);\n  }\n\n  :after {\n    transform: rotate(-45deg);\n  }\n"], ["\n  border: unset;\n  background-color: unset;\n  cursor: pointer;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n\n  ", ";\n\n  ", ";\n\n  :after,\n  :before {\n    content: \"\";\n    position: absolute;\n    width: 100%;\n    background-color: black;\n\n    ", "\n\n    ", "\n\n    ", "\n  }\n\n  :before {\n    transform: rotate(45deg);\n  }\n\n  :after {\n    transform: rotate(-45deg);\n  }\n"])), function (props) {
    return props.buttonSize && {
        width: props.buttonSize,
        height: props.buttonSize,
    };
}, function (props) {
    return props.disable && {
        cursor: "not-allowed",
    };
}, function (props) {
    return props.buttonWeight && {
        height: props.buttonWeight,
    };
}, function (props) {
    return props.disable && {
        cursor: "not-allowed",
        backgroundColor: "#666666",
    };
}, function (props) {
    return props.buttonColor && {
        backgroundColor: props.buttonColor,
    };
});
var templateObject_1;
