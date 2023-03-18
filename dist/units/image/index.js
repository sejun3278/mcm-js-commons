"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_1 = __importDefault(require("@emotion/styled"));
var hooks_1 = __importDefault(require("../../hooks"));
// img 태그를 이용한 이미지 컴포넌트, 오른쪽 버튼 비활성화 기능
function _Image(_a) {
    var src = _a.src, styles = _a.styles, className = _a.className;
    var getAllComponentsClassName = (0, hooks_1.default)().getAllComponentsClassName;
    return ((0, jsx_runtime_1.jsx)(Img, { className: getAllComponentsClassName("mcm-image-unit", className), src: src, style: styles }));
}
exports.default = _Image;
var Img = styled_1.default.img(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  pointer-events: none; // PC \uC774\uBBF8\uC9C0 \uB2E4\uC6B4\uB85C\uB4DC \uAE08\uC9C0\n  -webkit-touch-callout: none; // \uC544\uC774\uD3F0 \uB2E4\uC6B4\uB85C\uB4DC \uAE08\uC9C0\n  -webkit-user-select: none; // \uB4DC\uB798\uADF8 \uBC29\uC9C0\n  -moz-user-select: none;\n  -ms-use-select: none;\n  user-select: none;\n"], ["\n  width: 100%;\n  pointer-events: none; // PC \uC774\uBBF8\uC9C0 \uB2E4\uC6B4\uB85C\uB4DC \uAE08\uC9C0\n  -webkit-touch-callout: none; // \uC544\uC774\uD3F0 \uB2E4\uC6B4\uB85C\uB4DC \uAE08\uC9C0\n  -webkit-user-select: none; // \uB4DC\uB798\uADF8 \uBC29\uC9C0\n  -moz-user-select: none;\n  -ms-use-select: none;\n  user-select: none;\n"])));
var templateObject_1;
