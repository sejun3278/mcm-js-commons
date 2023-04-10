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
import { jsx as _jsx } from "react/jsx-runtime";
import { PText } from "..";
import CommonsHooksComponents from "../../../hooks";
// p 태그를 출력하는 컴포넌트
export default function _PText(props) {
    var getAllComponentsClassName = CommonsHooksComponents().getAllComponentsClassName;
    var styles = props.styles, className = props.className, children = props.children, isError = props.isError;
    return (_jsx(PText, __assign({ style: styles, className: getAllComponentsClassName("mcm-p-unit", className), isError: isError }, { children: children })));
}
