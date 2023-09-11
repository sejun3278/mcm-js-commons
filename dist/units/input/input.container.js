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
    var _a = props, defaultValue = _a.defaultValue, onChangeEvent = _a.onChangeEvent, delay = _a.delay, onResetConfirm = _a.onResetConfirm, value = _a.value, inputRef = _a.inputRef, readOnly = _a.readOnly;
    var _inputRef = inputRef ||
        (0, react_1.useRef)();
    var _itemsRef = (0, react_1.useRef)();
    // value와 defaultValue가 있다면, value가 우선적용
    (0, react_1.useEffect)(function () {
        if (value || defaultValue) {
            toggleShowEvent(value || defaultValue || "");
            onChangeEvent(value || defaultValue || "");
        }
        if (_inputRef === null || _inputRef === void 0 ? void 0 : _inputRef.current) {
            // 초기 value 값 설정 - 디바운싱 적용에 사용
            _inputRef.current.value = value || defaultValue || "";
            toggleShowEvent(value || defaultValue || "");
            onChangeEvent(value || defaultValue || "");
        }
    }, [value, defaultValue]);
    // change 이벤트 실행시 디바운싱 적용하기
    var _onChangeEvent = function (e) {
        var text = e.target.value;
        window.clearTimeout(_debounce);
        // 디바운싱 적용하기
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
        var _reset = function () {
            onChangeEvent("");
            if (_inputRef.current) {
                _inputRef.current.value = "";
                toggleShowEvent("");
            }
        };
        window.clearTimeout(_debounce);
        if (onResetConfirm) {
            if (onResetConfirm())
                _reset();
        }
        else {
            _reset();
        }
    };
    var _props = __assign(__assign({}, props), { _onChangeEvent: _onChangeEvent, 
        // text,
        resetEvent: resetEvent, _inputRef: _inputRef, _itemsRef: _itemsRef });
    var requiredList = ["onChangeEvent"];
    if (readOnly)
        requiredList = [];
    return ((0, jsx_runtime_1.jsx)(error_1.default, { propsList: __assign({}, props), requiredList: requiredList, mouduleName: "Input", children: (0, jsx_runtime_1.jsx)(input_presenter_1.default, __assign({}, _props)) }));
}
exports.default = _Input;
