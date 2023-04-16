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
exports.Wrapper = styled_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  min-height: 36px;\n\n  .mcm-modal-contents {\n    /* background-color: #aa5656; */\n    /* color: white; */\n    border: double 5px #aa5656;\n    border-radius: 10px;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  min-height: 36px;\n\n  .mcm-modal-contents {\n    /* background-color: #aa5656; */\n    /* color: white; */\n    border: double 5px #aa5656;\n    border-radius: 10px;\n  }\n"])));
exports.Fieldset = styled_1.default.fieldset(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: none;\n  border: unset;\n  padding: 0px;\n  height: 100%;\n  margin: 0;\n\n  legend {\n    display: none;\n  }\n"], ["\n  display: none;\n  border: unset;\n  padding: 0px;\n  height: 100%;\n  margin: 0;\n\n  legend {\n    display: none;\n  }\n"])));
exports.Items = styled_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  overflow: hidden;\n  border: solid 1px black;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  overflow: hidden;\n  border: solid 1px black;\n"])));
exports.Input = styled_1.default.input(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  height: 100%;\n  width: 100%;\n  border: unset;\n  font-size: 16px;\n  border-radius: 0px;\n  transition: all 0.3s;\n  padding: 8px;\n"], ["\n  height: 100%;\n  width: 100%;\n  border: unset;\n  font-size: 16px;\n  border-radius: 0px;\n  transition: all 0.3s;\n  padding: 8px;\n"])));
exports.TextArea = styled_1.default.textarea(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  width: 100%;\n  min-height: 80px;\n  max-height: 400px;\n  border: unset;\n  resize: vertical;\n  padding: 8px;\n  transition: border-right-width 0.3s ease;\n"], ["\n  width: 100%;\n  min-height: 80px;\n  max-height: 400px;\n  border: unset;\n  resize: vertical;\n  padding: 8px;\n  transition: border-right-width 0.3s ease;\n"])));
exports.BtnWrapper = styled_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  height: 100%;\n  width: 0px;\n  transition: all 0.3s;\n  opacity: 0;\n\n  ", ";\n"], ["\n  height: 100%;\n  width: 0px;\n  transition: all 0.3s;\n  opacity: 0;\n\n  ", ";\n"])), function (props) {
    var styles = {};
    if (props.isTextArea)
        styles.position = "unset";
    // 텍스트가 있을 경우 기본 오픈
    if (props.hasText) {
        styles.opacity = 1;
        styles.width = "25px";
        if (props.hasSubmitEvent && !props.isTextArea)
            styles.width = "50px";
    }
    return styles;
});
exports.BtnItems = styled_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  position: absolute;\n  width: 0px;\n  height: 100%;\n  top: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  transition: all 0.3s;\n  opacity: 0;\n  border-left: dotted 2px gray;\n\n  ", "\n\n  button {\n    width: 100%;\n    height: 100%;\n    white-space: pre;\n  }\n\n  .mcm-close-button-unit {\n    ", "\n\n    ", ";\n\n    ::before,\n    ::after {\n      width: 15px;\n    }\n  }\n"], ["\n  position: absolute;\n  width: 0px;\n  height: 100%;\n  top: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  transition: all 0.3s;\n  opacity: 0;\n  border-left: dotted 2px gray;\n\n  ", "\n\n  button {\n    width: 100%;\n    height: 100%;\n    white-space: pre;\n  }\n\n  .mcm-close-button-unit {\n    ", "\n\n    ", ";\n\n    ::before,\n    ::after {\n      width: 15px;\n    }\n  }\n"])), function (props) {
    var styles = {};
    if (props.isTextArea)
        styles.flexDirection = "column";
    // 텍스트가 있을 경우 기본 오픈
    if (props.hasText) {
        styles.opacity = 1;
        styles.width = "25px";
        if (props.hasSubmitEvent)
            styles.width = "50px";
        if (props.isTextArea) {
            styles.width = "25px";
        }
        // 텍스트가 빈 문자열일 경우
    }
    else {
        // textArea 태그를 사용한다면
        if (props.isTextArea)
            styles.width = "0px";
    }
    return styles;
}, function (props) {
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
// export const ResetWrapper = styled.section`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-around;
//   width: 100%;
//   height: 100%;
//   .mcm-title-unit {
//     margin: 0px;
//     letter-spacing: -0.8px;
//     font-size: 24px;
//   }
//   @media ${breakPoints.mobile} {
//     .mcm-title-unit {
//       font-size: 18px;
//       margin: 10px 0px;
//     }
//   }
// `;
// export const ResetButtonWrapper = styled.div`
//   display: flex;
//   justify-content: space-around;
//   width: 100%;
//   button {
//     font-size: 16px;
//     padding: 0.5rem;
//     border-radius: 10px;
//     color: #999999;
//     font-weight: 700;
//     transition: all 0.3s;
//     :hover {
//       color: #aa5656;
//     }
//   }
// `;
