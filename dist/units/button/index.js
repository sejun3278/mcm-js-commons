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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var hooks_1 = __importDefault(require("../../hooks"));
// 버튼 컴포넌트
function _Button(_a) {
    var children = _a.children, className = _a.className, onClickEvent = _a.onClickEvent;
    var getAllComponentsClassName = (0, hooks_1.default)().getAllComponentsClassName;
    return ((0, jsx_runtime_1.jsx)("button", __assign({ className: getAllComponentsClassName("cmm-button", className), onClick: onClickEvent, role: "button_click_event" }, { children: children })));
}
exports.default = _Button;
