"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("..");
var hooks_1 = require("../../../hooks");
// p 태그를 출력하는 컴포넌트
function _PText(props) {
    var styles = props.styles, className = props.className, children = props.children, isError = props.isError;
    return (<__1.PText style={styles} className={(0, hooks_1.getAllComponentsClassName)("mcm-p-unit", className)} isError={isError}>
      {children}
    </__1.PText>);
}
exports.default = _PText;
