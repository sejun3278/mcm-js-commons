"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var link_1 = __importDefault(require("next/link"));
var styled_1 = __importDefault(require("@emotion/styled"));
var hooks_1 = __importDefault(require("../../../hooks"));
// router 이동 관련 컴포넌트
function _Link(_a) {
    var href = _a.href, children = _a.children, className = _a.className, styles = _a.styles;
    var getAllComponentsClassName = (0, hooks_1.default)().getAllComponentsClassName;
    return (<LinkComponent passHref={true} href={href} className={getAllComponentsClassName("mcm-link-unit", className)} style={styles}>
      {children}
    </LinkComponent>);
}
exports.default = _Link;
var LinkComponent = (0, styled_1.default)(link_1.default)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  cursor: pointer;\n"], ["\n  cursor: pointer;\n"])));
var templateObject_1;
