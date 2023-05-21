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
exports.Button = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_1 = __importDefault(require("@emotion/styled"));
var error_1 = __importDefault(require("../error"));
var hooks_1 = require("../../hooks");
// button 태그로 렌더하는 컴포넌트
function _Button(props) {
    var children = props.children, className = props.className, onClickEvent = props.onClickEvent, styles = props.styles, isDisable = props.isDisable, buttonType = props.buttonType;
    return ((0, jsx_runtime_1.jsx)(error_1.default, __assign({ propsList: __assign({}, props), requiredList: ["onClickEvent"], mouduleName: "_Button" }, { children: (0, jsx_runtime_1.jsx)(exports.Button, __assign({ className: (0, hooks_1.getAllComponentsClassName)("cmm-button-unit", className), onClick: (!isDisable && onClickEvent) || undefined, role: "button_click_event", style: styles, isDisable: isDisable, type: buttonType || "submit" }, { children: children })) })));
}
exports.default = _Button;
exports.Button = styled_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  cursor: pointer;\n  ", "\n"], ["\n  cursor: pointer;\n  ", "\n"])), function (props) {
    return props.isDisable && {
        cursor: "not-allowed",
        backgroundColor: "#bbbbbb",
        color: "#999999",
    };
});
var templateObject_1;
