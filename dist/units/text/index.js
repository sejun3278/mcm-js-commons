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
var p_1 = __importDefault(require("./p"));
var span_1 = __importDefault(require("./span"));
// p 또는 span 태그를 출력하는 컴포넌트
function _Text(props) {
    var type = props.type, children = props.children;
    return type === "p" ? ((0, jsx_runtime_1.jsx)(p_1.default, __assign({}, props, { children: children }))) : ((0, jsx_runtime_1.jsx)(span_1.default, __assign({}, props, { children: children })));
}
exports.default = _Text;
