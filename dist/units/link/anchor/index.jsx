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
// a태그를 사용해 타 웹 사이트 이동
function _Anchor(_a) {
    var children = _a.children, styles = _a.styles, href = _a.href, notTarget = _a.notTarget, className = _a.className;
    var getAllComponentsClassName = (0, hooks_1.default)().getAllComponentsClassName;
    return (<Anchor style={styles} href={href} target={notTarget ? "_self" : "_blank"} rel="noreferrer" className={getAllComponentsClassName("mcm-anchor-unit", className)}>
      {children}
    </Anchor>);
}
exports.default = _Anchor;
var Anchor = styled_1.default.a(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: blue;\n  text-decoration: underline;\n"], ["\n  color: blue;\n  text-decoration: underline;\n"])));
var templateObject_1;
