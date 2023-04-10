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
import { jsx as _jsx } from "react/jsx-runtime";
import styled from "@emotion/styled";
import CommonsHooksComponents from "../../hooks";
import _Error from "../error";
// img 태그를 이용한 이미지 컴포넌트, 오른쪽 버튼 비활성화 기능
export default function _Image(props) {
    var getAllComponentsClassName = CommonsHooksComponents().getAllComponentsClassName;
    var src = props.src, styles = props.styles, className = props.className;
    return (_jsx(_Error, __assign({ propsList: __assign({}, props), requiredList: ["src"], mouduleName: "_Image" }, { children: _jsx(Img, { className: getAllComponentsClassName("mcm-image-unit", className), src: src, style: styles }) })));
}
var Img = styled.img(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  pointer-events: none; // PC \uC774\uBBF8\uC9C0 \uB2E4\uC6B4\uB85C\uB4DC \uAE08\uC9C0\n  -webkit-touch-callout: none; // \uC544\uC774\uD3F0 \uB2E4\uC6B4\uB85C\uB4DC \uAE08\uC9C0\n  -webkit-user-select: none; // \uB4DC\uB798\uADF8 \uBC29\uC9C0\n  -moz-user-select: none;\n  -ms-use-select: none;\n  user-select: none;\n"], ["\n  width: 100%;\n  pointer-events: none; // PC \uC774\uBBF8\uC9C0 \uB2E4\uC6B4\uB85C\uB4DC \uAE08\uC9C0\n  -webkit-touch-callout: none; // \uC544\uC774\uD3F0 \uB2E4\uC6B4\uB85C\uB4DC \uAE08\uC9C0\n  -webkit-user-select: none; // \uB4DC\uB798\uADF8 \uBC29\uC9C0\n  -moz-user-select: none;\n  -ms-use-select: none;\n  user-select: none;\n"])));
var templateObject_1;
