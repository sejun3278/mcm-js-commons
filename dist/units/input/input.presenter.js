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
var hooks_1 = require("../../hooks");
function _InputUIPage(props) {
    var className = props.className, id = props.id, inputClassName = props.inputClassName, styles = props.styles, _onChangeEvent = props._onChangeEvent, onSubmitEvent = props.onSubmitEvent, resetEvent = props.resetEvent, _inputRef = props._inputRef, _itemsRef = props._itemsRef, value = props.value, defaultValue = props.defaultValue, placeHolder = props.placeHolder, maxLength = props.maxLength, isTextArea = props.isTextArea, inputType = props.inputType, name = props.name, readOnly = props.readOnly;
    // input에 부여될 클래스
    var _inputClass = (0, hooks_1.getAllComponentsClassName)(isTextArea ? "mcm-textArea-unit" : "mcm-input-unit", inputClassName);
    return ((0, jsx_runtime_1.jsxs)(input_styles_1.Wrapper, __assign({ className: (0, hooks_1.getAllComponentsClassName)("mcm-input-unit-wrapper", className), id: id, hasSubmitEvent: onSubmitEvent !== undefined, isTextArea: isTextArea, style: styles }, { children: [(0, jsx_runtime_1.jsx)(input_styles_1.Fieldset, { children: (0, jsx_runtime_1.jsx)("legend", { children: "Input & TextArea" }) }), (0, jsx_runtime_1.jsxs)(input_styles_1.Items, __assign({ ref: _itemsRef, className: "mcm-input-unit-items", readOnly: readOnly }, { children: [!isTextArea ? ((0, jsx_runtime_1.jsx)(input_styles_1.Input, { className: _inputClass, type: inputType || "text", placeholder: placeHolder ||
                            (inputType === "password"
                                ? "비밀번호를 입력해주세요."
                                : "텍스트를 입력해주세요."), maxLength: maxLength || 40, onChange: _onChangeEvent, ref: _inputRef, defaultValue: value || defaultValue, autoComplete: "off", name: name, readOnly: readOnly || false })) : ((0, jsx_runtime_1.jsx)(input_styles_1.TextArea, { className: _inputClass, placeholder: placeHolder || "텍스트를 입력해주세요.", maxLength: maxLength || 200, onChange: _onChangeEvent, ref: _inputRef, defaultValue: value || defaultValue, name: name, readOnly: readOnly || false })), !readOnly && ((0, jsx_runtime_1.jsx)(input_styles_1.BtnWrapper, __assign({ className: "mcm-input-submit-button-wrapper" }, { children: (0, jsx_runtime_1.jsxs)(input_styles_1.BtnItems
                        // hasText={text}
                        , __assign({ 
                            // hasText={text}
                            isTextArea: isTextArea, hasSubmitEvent: onSubmitEvent !== undefined, className: "mcm-input-submit-button-items" }, { children: [onSubmitEvent && ((0, jsx_runtime_1.jsx)(input_styles_1.SubmitBtn, __assign({ className: "mcm-input-submit-button", onClick: onSubmitEvent, type: "button" }, { children: "\u2714\uFE0F" }))), (0, jsx_runtime_1.jsx)(close_1.default, { onClickEvent: resetEvent, buttonType: "button" })] })) })))] }))] })));
}
exports.default = _InputUIPage;
