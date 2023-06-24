"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var __1 = require("..");
var hooks_1 = require("../../../hooks");
// p 태그를 출력하는 컴포넌트
function _PText(props) {
    var styles = props.styles, className = props.className, id = props.id, children = props.children, isError = props.isError, _ref = props._ref;
    return ((0, jsx_runtime_1.jsx)(__1.PText, __assign({ style: styles, className: (0, hooks_1.getAllComponentsClassName)("mcm-p-unit", className), id: id, isError: isError, ref: _ref }, { children: children })));
}
exports.default = _PText;
