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
var input_styles_1 = require("./input.styles");
var close_1 = __importDefault(require("../button/close"));
var title_1 = __importDefault(require("../title"));
var button_1 = __importDefault(require("../button"));
var hooks_1 = require("../../hooks");
var mcm_js_1 = require("mcm-js");
function _InputUIPage(props) {
    var className = props.className, styles = props.styles, _onChangeEvent = props._onChangeEvent, onSubmitEvent = props.onSubmitEvent, resetEvent = props.resetEvent, _inputRef = props._inputRef, defaultValue = props.defaultValue, placeHolder = props.placeHolder, maxLength = props.maxLength, text = props.text, isTextArea = props.isTextArea, isOpen = props.isOpen, toggleIsOpen = props.toggleIsOpen;
    return ((0, jsx_runtime_1.jsxs)(input_styles_1.Wrapper, __assign({ className: "mcm-input-unit-wrapper" }, { children: [(0, jsx_runtime_1.jsx)(mcm_js_1.Modal, __assign({ show: isOpen, onCloseModal: toggleIsOpen(false), showBGAnimation: true, showModalOpenAnimation: true, modalSize: { height: "180px" }, mobileModalSize: { height: "140px", width: "50%" } }, { children: (0, jsx_runtime_1.jsxs)(input_styles_1.ResetWrapper, { children: [(0, jsx_runtime_1.jsx)(title_1.default, __assign({ titleLevel: "h3" }, { children: "\uC791\uC131\uB41C \uB0B4\uC6A9\uC744 \uC0AD\uC81C \uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?" })), (0, jsx_runtime_1.jsxs)(input_styles_1.ResetButtonWrapper, { children: [(0, jsx_runtime_1.jsx)(button_1.default, __assign({ onClickEvent: resetEvent, buttonType: "button" }, { children: "\uC0AD\uC81C" })), (0, jsx_runtime_1.jsx)(button_1.default, __assign({ onClickEvent: toggleIsOpen(false), buttonType: "button" }, { children: "\uCDE8\uC18C" }))] })] }) })), (0, jsx_runtime_1.jsx)(input_styles_1.Fieldset, { children: (0, jsx_runtime_1.jsx)("legend", { children: "Input & TextArea" }) }), (0, jsx_runtime_1.jsxs)(input_styles_1.Items, { children: [!isTextArea ? ((0, jsx_runtime_1.jsx)(input_styles_1.Input, { className: (0, hooks_1.getAllComponentsClassName)("mcm-input-unit", className), style: styles, type: "text", placeholder: placeHolder || "텍스트를 입력해주세요.", maxLength: maxLength || 40, onChange: _onChangeEvent, ref: _inputRef, defaultValue: defaultValue })) : ((0, jsx_runtime_1.jsx)(input_styles_1.TextArea, { className: (0, hooks_1.getAllComponentsClassName)("mcm-input-unit", className), style: styles, placeholder: placeHolder || "텍스트를 입력해주세요.", maxLength: maxLength || 200, onChange: _onChangeEvent, ref: _inputRef })), (0, jsx_runtime_1.jsx)(input_styles_1.BtnWrapper, __assign({ hasText: text, isTextArea: isTextArea, hasSubmitEvent: onSubmitEvent !== undefined }, { children: (0, jsx_runtime_1.jsxs)(input_styles_1.BtnItems, __assign({ hasText: text, isTextArea: isTextArea, hasSubmitEvent: onSubmitEvent !== undefined }, { children: [onSubmitEvent && ((0, jsx_runtime_1.jsx)(input_styles_1.SubmitBtn, __assign({ className: "mcm-input-submit-button", onClick: onSubmitEvent, type: "button" }, { children: "\u2714\uFE0F" }))), (0, jsx_runtime_1.jsx)(close_1.default, { onClickEvent: toggleIsOpen(true), buttonType: "button" })] })) }))] })] })));
}
exports.default = _InputUIPage;
