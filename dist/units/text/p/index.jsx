"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var hooks_1 = __importDefault(require("../../../hooks"));
var styled_1 = __importDefault(require("@emotion/styled"));
// p 태그를 출력하는 컴포넌트
function _PText(props) {
    var getAllComponentsClassName = (0, hooks_1.default)().getAllComponentsClassName;
    var styles = props.styles, className = props.className, children = props.children;
    return (<P style={styles} className={getAllComponentsClassName("mcm-p-unit", className)}>
      {children}
    </P>);
}
exports.default = _PText;
var P = styled_1.default.p(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin: 0px;\n"], ["\n  margin: 0px;\n"])));
var templateObject_1;
