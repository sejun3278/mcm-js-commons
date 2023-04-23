"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubmitBtn = exports.BtnItems = exports.BtnWrapper = exports.TextArea = exports.Input = exports.Items = exports.Fieldset = exports.Wrapper = void 0;
var styled_1 = __importDefault(require("@emotion/styled"));
exports.Wrapper = styled_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  min-height: 36px;\n\n  .mcm-modal-contents {\n    border: double 5px #aa5656;\n    border-radius: 10px;\n  }\n\n  .show-submit-buttons {\n    .mcm-input-submit-button-wrapper,\n    .mcm-input-submit-button-items {\n      ", "\n    }\n  }\n\n  .mcm-input-submit-button-items {\n    ", "\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  min-height: 36px;\n\n  .mcm-modal-contents {\n    border: double 5px #aa5656;\n    border-radius: 10px;\n  }\n\n  .show-submit-buttons {\n    .mcm-input-submit-button-wrapper,\n    .mcm-input-submit-button-items {\n      ", "\n    }\n  }\n\n  .mcm-input-submit-button-items {\n    ", "\n  }\n"])), function (props) {
    var styles = {
        width: "25px",
        visibility: "visible",
        opacity: 1,
    };
    if (props.hasSubmitEvent)
        styles.width = "50px";
    if (props.isTextArea)
        styles.width = "25px";
    return styles;
}, function (props) {
    var styles = {};
    if (props.isTextArea)
        styles.flexDirection = "column";
    return styles;
});
exports.Fieldset = styled_1.default.fieldset(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: none;\n  border: unset;\n  padding: 0px;\n  height: 100%;\n  margin: 0;\n\n  legend {\n    display: none;\n  }\n"], ["\n  display: none;\n  border: unset;\n  padding: 0px;\n  height: 100%;\n  margin: 0;\n\n  legend {\n    display: none;\n  }\n"])));
exports.Items = styled_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  overflow: hidden;\n  border: solid 1px black;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  overflow: hidden;\n  border: solid 1px black;\n"])));
exports.Input = styled_1.default.input(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  height: 100%;\n  width: 100%;\n  border: unset;\n  font-size: 16px;\n  border-radius: 0px;\n  transition: all 0.3s;\n  padding: 8px;\n"], ["\n  height: 100%;\n  width: 100%;\n  border: unset;\n  font-size: 16px;\n  border-radius: 0px;\n  transition: all 0.3s;\n  padding: 8px;\n"])));
exports.TextArea = styled_1.default.textarea(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  min-height: 80px;\n  border: unset;\n  resize: vertical;\n  padding: 8px;\n  transition: border-right-width 0.3s ease;\n"], ["\n  width: 100%;\n  height: 100%;\n  min-height: 80px;\n  border: unset;\n  resize: vertical;\n  padding: 8px;\n  transition: border-right-width 0.3s ease;\n"])));
exports.BtnWrapper = styled_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  height: 100%;\n  width: 0px;\n  transition: all 0.3s;\n  visibility: hidden;\n  opacity: 0;\n  cursor: default;\n"], ["\n  height: 100%;\n  width: 0px;\n  transition: all 0.3s;\n  visibility: hidden;\n  opacity: 0;\n  cursor: default;\n"])));
exports.BtnItems = styled_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  position: absolute;\n  width: 0px;\n  height: 100%;\n  top: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  transition: all 0.3s;\n  opacity: 0;\n  visibility: hidden;\n  border-left: dotted 2px gray;\n\n  button {\n    width: 100%;\n    height: 100%;\n    white-space: pre;\n    background-color: unset;\n    border: unset;\n    cursor: pointer;\n    padding: 0;\n  }\n\n  .mcm-close-button-unit {\n    ", "\n\n    ", ";\n\n    ::before,\n    ::after {\n      width: 15px;\n    }\n  }\n"], ["\n  position: absolute;\n  width: 0px;\n  height: 100%;\n  top: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  transition: all 0.3s;\n  opacity: 0;\n  visibility: hidden;\n  border-left: dotted 2px gray;\n\n  button {\n    width: 100%;\n    height: 100%;\n    white-space: pre;\n    background-color: unset;\n    border: unset;\n    cursor: pointer;\n    padding: 0;\n  }\n\n  .mcm-close-button-unit {\n    ", "\n\n    ", ";\n\n    ::before,\n    ::after {\n      width: 15px;\n    }\n  }\n"])), function (props) {
    return props.hasSubmitEvent && {
        borderLeft: "solid 1px black",
    };
}, function (props) {
    return props.isTextArea && {
        borderLeft: "unset",
        borderTop: "solid 1px black",
    };
});
exports.SubmitBtn = styled_1.default.button(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
