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
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { SpanText } from "../..";
import DOMPurify from "dompurify";
import CommonsHooksComponents from "../../../../hooks";
// dangerouslySetInnerHTML 속성을 사용할 수 있는 Span Text Component
export default function _SpanTextWithHtml(props) {
    var _a = useState(false), render = _a[0], setRender = _a[1];
    var getAllComponentsClassName = CommonsHooksComponents().getAllComponentsClassName;
    var styles = props.styles, className = props.className, isError = props.isError, dangerouslySetInnerHTML = props.dangerouslySetInnerHTML;
    useEffect(function () {
        // window 객체가 있을 때만 해당 컴포넌트 렌더하기
        setRender(true);
    }, []);
    var getRender = function () {
        return !dangerouslySetInnerHTML ? (_jsx(SpanText, __assign({ isError: true }, { children: "<_SpanTextWithHtml /> : * dangerouslySetInnerHTML props\uAC00 \uD544\uC694\uD569\uB2C8\uB2E4." }))) : (_jsx(SpanText, { style: styles, className: getAllComponentsClassName("mcm-span-unit", className), isError: isError, dangerouslySetInnerHTML: {
                __html: DOMPurify.sanitize(dangerouslySetInnerHTML || ""),
            } }));
    };
    return (render && getRender()) || _jsx(_Fragment, {});
}
