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
var react_1 = require("react");
var __1 = require("../..");
var dompurify_1 = __importDefault(require("dompurify"));
var hooks_1 = require("../../../../hooks");
// dangerouslySetInnerHTML 속성을 사용할 수 있는 Span Text Component
function _SpanTextWithHtml(props) {
    var _a = (0, react_1.useState)(false), render = _a[0], setRender = _a[1];
    var styles = props.styles, className = props.className, id = props.id, isError = props.isError, dangerouslySetInnerHTML = props.dangerouslySetInnerHTML, _ref = props._ref;
    (0, react_1.useEffect)(function () {
        // window 객체가 있을 때만 해당 컴포넌트 렌더하기
        setRender(true);
    }, []);
    var getRender = function () {
        return !dangerouslySetInnerHTML ? ((0, jsx_runtime_1.jsx)(__1.SpanText, __assign({ isError: true, ref: _ref }, { children: "<_SpanTextWithHtml /> : * dangerouslySetInnerHTML props\uAC00 \uD544\uC694\uD569\uB2C8\uB2E4." }))) : ((0, jsx_runtime_1.jsx)(__1.SpanText, { style: styles, className: (0, hooks_1.getAllComponentsClassName)("mcm-span-unit", className), id: id, isError: isError, ref: _ref, dangerouslySetInnerHTML: {
                __html: dompurify_1.default.sanitize(dangerouslySetInnerHTML || ""),
            } }));
    };
    return (render && getRender()) || (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {});
}
exports.default = _SpanTextWithHtml;
