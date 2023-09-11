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
exports.Label = exports.Input = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_1 = __importDefault(require("@emotion/styled"));
var react_1 = require("react");
var error_1 = __importDefault(require("../error"));
var hooks_1 = require("../../hooks");
function _Checkbox(props) {
    var inputId = props.inputId, labelId = props.labelId, onChangeEvent = props.onChangeEvent, isChecked = props.isChecked, classNames = props.classNames, mainColor = props.mainColor, readOnly = props.readOnly;
    var _a = (0, react_1.useState)(false), checked = _a[0], setChecked = _a[1];
    // 체크 토글하기
    var toggleChekced = function () {
        if (readOnly)
            return;
        setChecked(function (prev) { return !prev; });
        if (onChangeEvent)
            onChangeEvent();
    };
    (0, react_1.useEffect)(function () {
        setChecked(isChecked || false);
    }, [isChecked]);
    return ((0, jsx_runtime_1.jsx)(error_1.default, __assign({ propsList: props, requiredList: ["inputId", "onChangeEvent"] }, { children: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(exports.Input, { className: (0, hooks_1.getAllComponentsClassName)("mcm-checkox-unit-input", classNames === null || classNames === void 0 ? void 0 : classNames.input), id: inputId, type: "checkbox", onChange: toggleChekced }), (0, jsx_runtime_1.jsx)(exports.Label, { className: (0, hooks_1.getAllComponentsClassName)("mcm-checkbox-unit-label", classNames === null || classNames === void 0 ? void 0 : classNames.label), id: labelId, htmlFor: inputId, isChecked: checked, mainColor: mainColor || "#00c4ff", readOnly: readOnly })] }) })));
}
exports.default = _Checkbox;
exports.Input = styled_1.default.input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: none;\n  transition: all 0.25s ease;\n"], ["\n  display: none;\n  transition: all 0.25s ease;\n"])));
exports.Label = styled_1.default.label(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: inline-block;\n  min-width: 20px;\n  min-height: 20px;\n  border: 2px solid #bcbcbc;\n  border-color: ", ";\n  border-radius: 100%;\n  cursor: ", ";\n  transition: all 0.25s ease;\n  position: relative;\n\n  ::after,\n  ::before {\n    position: absolute;\n    content: \"\";\n    width: 10px;\n    height: 2px;\n    background-color: ", ";\n    opacity: ", ";\n  }\n\n  ::after {\n    transform: rotate(45deg);\n    width: 5px;\n    top: 9px;\n    left: 2.5px;\n    border-radius: 50%;\n  }\n\n  ::before {\n    transform: rotate(-45deg);\n    left: 4.5px;\n    top: 7.5px;\n    border-radius: 50%;\n  }\n"], ["\n  display: inline-block;\n  min-width: 20px;\n  min-height: 20px;\n  border: 2px solid #bcbcbc;\n  border-color: ", ";\n  border-radius: 100%;\n  cursor: ", ";\n  transition: all 0.25s ease;\n  position: relative;\n\n  ::after,\n  ::before {\n    position: absolute;\n    content: \"\";\n    width: 10px;\n    height: 2px;\n    background-color: ", ";\n    opacity: ", ";\n  }\n\n  ::after {\n    transform: rotate(45deg);\n    width: 5px;\n    top: 9px;\n    left: 2.5px;\n    border-radius: 50%;\n  }\n\n  ::before {\n    transform: rotate(-45deg);\n    left: 4.5px;\n    top: 7.5px;\n    border-radius: 50%;\n  }\n"])), function (props) { return props.isChecked && props.mainColor; }, function (props) { return (props.readOnly ? "default" : "pointer"); }, function (props) { return props.mainColor; }, function (props) { return Number(props.isChecked); });
var templateObject_1, templateObject_2;
