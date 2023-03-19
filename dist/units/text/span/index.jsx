"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var hooks_1 = __importDefault(require("../../../hooks"));
// span 태그를 출력하는 컴포넌트
function _SpanText(props) {
    var getAllComponentsClassName = (0, hooks_1.default)().getAllComponentsClassName;
    var styles = props.styles, className = props.className, children = props.children;
    return (<span style={styles} className={getAllComponentsClassName("mcm-span-unit", className)}>
      {children}
    </span>);
}
exports.default = _SpanText;
