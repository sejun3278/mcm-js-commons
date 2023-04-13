"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonWrapper = void 0;
var styled_1 = __importDefault(require("@emotion/styled"));
var error_1 = __importDefault(require("../../error"));
var hooks_1 = require("../../../hooks");
// 닫기 형태로 사용하는 버튼 컴포넌트
function _CloseButton(props) {
    var className = props.className, buttonSize = props.buttonSize, // 버튼 사이즈
    buttonWeight = props.buttonWeight, // 버튼 굵기 조절
    buttonColor = props.buttonColor, isDisable = props.isDisable, // 닫기 비활성화
    onClickEvent = props.onClickEvent, styles = props.styles, buttonType = props.buttonType;
    return (<error_1.default propsList={__assign({}, props)} requiredList={["onClickEvent"]} mouduleName="_CloseButton">
      <exports.ButtonWrapper className={(0, hooks_1.getAllComponentsClassName)("mcm-close-button-unit", className)} buttonSize={(0, hooks_1.getPXForm)(buttonSize || "15px", "15px")} buttonWeight={(0, hooks_1.getPXForm)(buttonWeight || "1px", "1px")} buttonColor={buttonColor || "black"} onClick={(!isDisable && onClickEvent) || undefined} disable={isDisable} style={styles} type={buttonType || "submit"}/>
    </error_1.default>);
}
exports.default = _CloseButton;
exports.ButtonWrapper = styled_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border: unset;\n  background-color: unset;\n  cursor: pointer;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n\n  ", ";\n\n  ", ";\n\n  ::after,\n  ::before {\n    content: \"\";\n    position: absolute;\n    width: 100%;\n    background-color: black;\n\n    ", "\n\n    ", "\n\n    ", "\n  }\n\n  ::before {\n    transform: rotate(45deg);\n  }\n\n  ::after {\n    transform: rotate(-45deg);\n  }\n"], ["\n  border: unset;\n  background-color: unset;\n  cursor: pointer;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n\n  ", ";\n\n  ", ";\n\n  ::after,\n  ::before {\n    content: \"\";\n    position: absolute;\n    width: 100%;\n    background-color: black;\n\n    ", "\n\n    ", "\n\n    ", "\n  }\n\n  ::before {\n    transform: rotate(45deg);\n  }\n\n  ::after {\n    transform: rotate(-45deg);\n  }\n"])), function (props) {
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
