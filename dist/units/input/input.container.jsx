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
var input_presenter_1 = __importDefault(require("./input.presenter"));
var react_1 = require("react");
var error_1 = __importDefault(require("../error"));
// 디바운싱 저장 변수
var _debounce;
function _Input(props) {
    var _inputRef = (0, react_1.useRef)();
    var defaultValue = props.defaultValue, onChangeEvent = props.onChangeEvent, delay = props.delay;
    var _a = (0, react_1.useState)(defaultValue || ""), text = _a[0], setText = _a[1];
    // change 이벤트 실행시 디바운싱 적용하기
    var _onChangeEvent = function (e) {
        var text = e.target.value.trim();
        window.clearTimeout(_debounce);
        if (onChangeEvent) {
            _debounce = window.setTimeout(function () {
                setText(text);
                onChangeEvent(text);
            }, delay || 300);
        }
    };
    // text 값 초기화
    var resetEvent = function () {
        window.clearTimeout(_debounce);
        setText("");
        onChangeEvent("");
        if (_inputRef.current) {
            _inputRef.current.value = "";
        }
    };
    var _props = __assign(__assign({}, props), { _onChangeEvent: _onChangeEvent, text: text, resetEvent: resetEvent, _inputRef: _inputRef });
    return (<error_1.default propsList={__assign({}, props)} requiredList={["onChangeEvent"]} mouduleName="Input" children={<input_presenter_1.default {..._props}/>}/>);
}
exports.default = _Input;
