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
var styled_1 = __importDefault(require("@emotion/styled"));
var hooks_1 = require("../../../hooks");
var error_1 = __importDefault(require("../../error"));
// a태그를 사용해 타 웹 사이트 이동
function _Anchor(props) {
    var children = props.children, className = props.className, notTarget = props.notTarget;
    var _props = __assign({}, props);
    _props.className = (0, hooks_1.getAllComponentsClassName)("mcm-anchor-unit", className);
    return ((0, jsx_runtime_1.jsx)(error_1.default, __assign({ propsList: __assign({}, props), requiredList: ["href"], mouduleName: "_Anchor" }, { children: (0, jsx_runtime_1.jsx)(Anchor, __assign({ target: notTarget ? "_self" : "_blank", rel: "noreferrer" }, _props, { children: children })) })));
}
exports.default = _Anchor;
var Anchor = styled_1.default.a(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: blue;\n  text-decoration: underline;\n"], ["\n  color: blue;\n  text-decoration: underline;\n"])));
var templateObject_1;
