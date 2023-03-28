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
exports.SpanText = exports.PText = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_1 = __importDefault(require("@emotion/styled"));
var p_1 = __importDefault(require("./p"));
var span_1 = __importDefault(require("./span"));
// p 또는 span 태그를 출력하는 컴포넌트
function _Text(props) {
    var type = props.type, children = props.children;
    return type === "p" ? ((0, jsx_runtime_1.jsx)(p_1.default, __assign({}, props, { children: children }))) : ((0, jsx_runtime_1.jsx)(span_1.default, __assign({}, props, { children: children })));
}
exports.default = _Text;
// P 텍스트 스타일
exports.PText = styled_1.default.p(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin: 0px;\n\n  ", "\n"], ["\n  margin: 0px;\n\n  ", "\n"])), function (props) {
    return props.isError && {
        color: "#B46060",
        fontWeight: "700",
    };
});
// Span 텍스트 스타일
exports.SpanText = styled_1.default.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    return props.isError && {
        color: "#B46060",
        fontWeight: "700",
    };
});
var templateObject_1, templateObject_2;
