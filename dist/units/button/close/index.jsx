"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonWrapper = void 0;
var styled_1 = __importDefault(require("@emotion/styled"));
var hooks_1 = __importDefault(require("../../../hooks"));
// 닫기 형태로 사용하는 버튼 컴포넌트
function _CloseButton(_a) {
    var className = _a.className, buttonSize = _a.buttonSize, // 버튼 사이즈
    buttonWeight = _a.buttonWeight, // 버튼 굵기 조절
    disable = _a.disable, // 닫기 비활성화
    onClickEvent = _a.onClickEvent;
    var _b = (0, hooks_1.default)(), getAllComponentsClassName = _b.getAllComponentsClassName, getPXForm = _b.getPXForm;
    return (<exports.ButtonWrapper className={getAllComponentsClassName("mcm-close-button-unit", className)} buttonSize={getPXForm(buttonSize || "15px", "15px")} buttonWeight={getPXForm(buttonWeight || "1px", "1px")} onClick={(!disable && onClickEvent) || undefined} disable={disable}/>);
}
exports.default = _CloseButton;
exports.ButtonWrapper = styled_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border: unset;\n  background-color: unset;\n  cursor: pointer;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n\n  ", "\n\n  ", "\n\n  :after,\n  :before {\n    content: \"\";\n    position: absolute;\n    width: 100%;\n    background-color: black;\n\n    ", "\n\n    ", "\n  }\n\n  :before {\n    transform: rotate(45deg);\n  }\n\n  :after {\n    transform: rotate(-45deg);\n  }\n"], ["\n  border: unset;\n  background-color: unset;\n  cursor: pointer;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n\n  ", "\n\n  ", "\n\n  :after,\n  :before {\n    content: \"\";\n    position: absolute;\n    width: 100%;\n    background-color: black;\n\n    ", "\n\n    ", "\n  }\n\n  :before {\n    transform: rotate(45deg);\n  }\n\n  :after {\n    transform: rotate(-45deg);\n  }\n"])), function (props) {
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
});
var templateObject_1;
