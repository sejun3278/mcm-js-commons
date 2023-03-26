"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_1 = __importDefault(require("@emotion/styled"));
var hooks_1 = __importDefault(require("../../../hooks"));
// span 태그를 출력하는 컴포넌트
function _SpanText(props) {
    var getAllComponentsClassName = (0, hooks_1.default)().getAllComponentsClassName;
    var styles = props.styles, className = props.className, children = props.children, dangerouslySetInnerHTML = props.dangerouslySetInnerHTML, isError = props.isError;
    return (<SpanText style={styles} className={getAllComponentsClassName("mcm-span-unit", className)} dangerouslySetInnerHTML={dangerouslySetInnerHTML
            ? { __html: dangerouslySetInnerHTML || "" }
            : undefined} isError={isError}>
      {(!dangerouslySetInnerHTML && children) || undefined}
    </SpanText>);
}
exports.default = _SpanText;
var SpanText = styled_1.default.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    return props.isError && {
        color: "#B46060",
        fontWeight: "700",
    };
});
var templateObject_1;
