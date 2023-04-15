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
var input_presenter_1 = __importDefault(require("./input.presenter"));
var react_1 = require("react");
var error_1 = __importDefault(require("../error"));
// 디바운싱 저장 변수
var _debounce;
function _Input(props) {
    var _inputRef = (0, react_1.useRef)();
    var defaultValue = props.defaultValue, onChangeEvent = props.onChangeEvent, delay = props.delay;
    var _a = (0, react_1.useState)(defaultValue || ""), text = _a[0], setText = _a[1];
    // 모달 오픈 여부
    var _b = (0, react_1.useState)(false), isOpen = _b[0], setIsOpen = _b[1];
    // 모달 toggle
    var toggleIsOpen = function (bool) { return function () {
        setIsOpen(bool);
    }; };
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
        if (isOpen)
            setIsOpen(false);
    };
    var _props = __assign(__assign({}, props), { _onChangeEvent: _onChangeEvent, text: text, resetEvent: resetEvent, _inputRef: _inputRef, isOpen: isOpen, toggleIsOpen: toggleIsOpen });
    return ((0, jsx_runtime_1.jsx)(error_1.default, { propsList: __assign({}, props), requiredList: ["onChangeEvent"], mouduleName: "Input", children: (0, jsx_runtime_1.jsx)(input_presenter_1.default, __assign({}, _props)) }));
}
exports.default = _Input;