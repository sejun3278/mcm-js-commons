"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var input_styles_1 = require("./input.styles");
var close_1 = __importDefault(require("../button/close"));
var hooks_1 = require("../../hooks");
function _InputUIPage(props) {
    var className = props.className, styles = props.styles, _onChangeEvent = props._onChangeEvent, onSubmitEvent = props.onSubmitEvent, resetEvent = props.resetEvent, _inputRef = props._inputRef, defaultValue = props.defaultValue, placeHolder = props.placeHolder, maxLength = props.maxLength, text = props.text, isTextArea = props.isTextArea;
    return (<input_styles_1.Wrapper className="mcm-input-unit-wrapper">
      <input_styles_1.Fieldset>
        <legend>Input</legend>
      </input_styles_1.Fieldset>
      <input_styles_1.Items>
        {!isTextArea ? (<input_styles_1.Input className={(0, hooks_1.getAllComponentsClassName)("mcm-input-unit", className)} style={styles} type="text" placeholder={placeHolder || "텍스트를 입력해주세요."} maxLength={maxLength || 40} onChange={_onChangeEvent} ref={_inputRef} defaultValue={defaultValue}/>) : (<input_styles_1.TextArea className={(0, hooks_1.getAllComponentsClassName)("mcm-input-unit", className)} style={styles} placeholder={placeHolder || "텍스트를 입력해주세요."} maxLength={maxLength || 200} onChange={_onChangeEvent} ref={_inputRef} hasText={text}></input_styles_1.TextArea>)}
        <input_styles_1.BtnWrapper hasText={text} isTextArea={isTextArea} hasSubmitEvent={onSubmitEvent !== undefined}>
          <input_styles_1.BtnItems hasText={text} isTextArea={isTextArea} hasSubmitEvent={onSubmitEvent !== undefined}>
            {onSubmitEvent && (<input_styles_1.SubmitBtn className="mcm-input-submit-button" onClick={onSubmitEvent} type="button"/>)}
            <close_1.default onClickEvent={resetEvent} buttonType="button"/>
          </input_styles_1.BtnItems>
        </input_styles_1.BtnWrapper>
      </input_styles_1.Items>
    </input_styles_1.Wrapper>);
}
exports.default = _InputUIPage;
