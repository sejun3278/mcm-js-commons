"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var styled_1 = __importDefault(require("@emotion/styled"));
var hooks_1 = __importDefault(require("../../hooks"));
// button 태그로 렌더하는 컴포넌트
function _Button(_a) {
    var children = _a.children, className = _a.className, onClickEvent = _a.onClickEvent, styles = _a.styles, isDisable = _a.isDisable;
    var getAllComponentsClassName = (0, hooks_1.default)().getAllComponentsClassName;
    return (
    // (children && (
    <exports.Button className={getAllComponentsClassName("cmm-button-unit", className)} onClick={(!isDisable && onClickEvent) || undefined} role="button_click_event" style={styles} isDisable={isDisable}>
      {children}
    </exports.Button>
    // )) || <_SpanText isError={true}>* children props가 필요합니다.</_SpanText>
    );
}
exports.default = _Button;
exports.Button = styled_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  cursor: pointer;\n  ", "\n"], ["\n  cursor: pointer;\n  ", "\n"])), function (props) {
    return props.isDisable && {
        cursor: "not-allowed",
        backgroundColor: "#bbbbbb",
        color: "#999999",
    };
});
var templateObject_1;
