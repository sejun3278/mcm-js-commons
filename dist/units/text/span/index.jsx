"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("..");
var hooks_1 = require("../../../hooks");
// span 태그를 출력하는 컴포넌트
function _SpanText(props) {
    var styles = props.styles, className = props.className, children = props.children, isError = props.isError;
    return (<__1.SpanText style={styles} className={(0, hooks_1.getAllComponentsClassName)("mcm-span-unit", className)} isError={isError}>
      {children}
    </__1.SpanText>);
}
exports.default = _SpanText;
