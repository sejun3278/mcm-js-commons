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
var jsx_runtime_1 = require("react/jsx-runtime");
var hooks_1 = __importDefault(require("../../../hooks"));
var styled_1 = __importDefault(require("@emotion/styled"));
// p 태그를 출력하는 컴포넌트
function _PText(props) {
    var getAllComponentsClassName = (0, hooks_1.default)().getAllComponentsClassName;
    var styles = props.styles, className = props.className, children = props.children, dangerouslySetInnerHTML = props.dangerouslySetInnerHTML;
    return ((0, jsx_runtime_1.jsx)(P, __assign({ style: styles, className: getAllComponentsClassName("mcm-p-unit", className), dangerouslySetInnerHTML: dangerouslySetInnerHTML
            ? { __html: dangerouslySetInnerHTML || "" }
            : undefined }, { children: (!dangerouslySetInnerHTML && children) || undefined })));
}
exports.default = _PText;
var P = styled_1.default.p(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin: 0px;\n"], ["\n  margin: 0px;\n"])));
var templateObject_1;
