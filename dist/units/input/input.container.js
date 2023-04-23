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
    var _itemsRef = (0, react_1.useRef)();
    var defaultValue = props.defaultValue, onChangeEvent = props.onChangeEvent, delay = props.delay, onResetEvent = props.onResetEvent;
    (0, react_1.useEffect)(function () {
        if (defaultValue) {
            toggleShowEvent(defaultValue || "");
            onChangeEvent(defaultValue);
        }
    }, [defaultValue]);
    // change 이벤트 실행시 디바운싱 적용하기
    var _onChangeEvent = function (e) {
        var text = e.target.value.trim();
        window.clearTimeout(_debounce);
        if (onChangeEvent) {
            _debounce = window.setTimeout(function () {
                toggleShowEvent(text);
                onChangeEvent(text);
            }, delay || -1);
        }
    };
    // submit 태그 on/off toggle
    var toggleShowEvent = function (text) {
        if (_itemsRef === null || _itemsRef === void 0 ? void 0 : _itemsRef.current) {
            if (text) {
                if (!_itemsRef.current.classList.contains("show-submit-buttons"))
                    _itemsRef.current.classList.add("show-submit-buttons");
            }
            else {
                if (_itemsRef.current.classList.contains("show-submit-buttons"))
                    _itemsRef.current.classList.remove("show-submit-buttons");
            }
        }
    };
    // text 값 초기화
    var resetEvent = function () {
        // if ((props.onResetEvent && props.onResetEvent()) || !props.onResetEvent) {
        window.clearTimeout(_debounce);
        if (onResetEvent)
            onResetEvent();
        onChangeEvent("");
        if (_inputRef.current) {
            _inputRef.current.value = "";
            toggleShowEvent("");
        }
        // }
    };
    var _props = __assign(__assign({}, props), { _onChangeEvent: _onChangeEvent, 
        // text,
        resetEvent: resetEvent, _inputRef: _inputRef, _itemsRef: _itemsRef });
    return ((0, jsx_runtime_1.jsx)(error_1.default, { propsList: __assign({}, props), requiredList: ["onChangeEvent"], mouduleName: "Input", children: (0, jsx_runtime_1.jsx)(input_presenter_1.default, __assign({}, _props)) }));
}
exports.default = _Input;
