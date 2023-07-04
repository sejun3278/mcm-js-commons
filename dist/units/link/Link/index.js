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
var link_1 = __importDefault(require("next/link"));
var styled_1 = __importDefault(require("@emotion/styled"));
var hooks_1 = require("../../../hooks");
var error_1 = __importDefault(require("../../error"));
// router 이동 관련 컴포넌트
function _Link(props) {
    var href = props.href, children = props.children, className = props.className, id = props.id, styles = props.styles, replace = props.replace;
    return ((0, jsx_runtime_1.jsx)(error_1.default, __assign({ propsList: __assign({}, props), requiredList: ["href"], mouduleName: "_Link" }, { children: (0, jsx_runtime_1.jsx)(LinkComponent, __assign({ passHref: true, href: href, className: (0, hooks_1.getAllComponentsClassName)("mcm-link-unit", className), id: id, style: styles, replace: replace || false }, { children: children })) })));
}
exports.default = _Link;
var LinkComponent = (0, styled_1.default)(link_1.default)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  cursor: pointer;\n"], ["\n  cursor: pointer;\n"])));
var templateObject_1;
