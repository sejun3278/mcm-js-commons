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
var styled_1 = __importDefault(require("@emotion/styled"));
var hooks_1 = require("../../hooks");
var error_1 = __importDefault(require("../error"));
// img 태그를 이용한 이미지 컴포넌트, 오른쪽 버튼 비활성화 기능
function _Image(props) {
    var src = props.src, styles = props.styles, className = props.className;
    return (<error_1.default propsList={__assign({}, props)} requiredList={["src"]} mouduleName="_Image">
      <Img className={(0, hooks_1.getAllComponentsClassName)("mcm-image-unit", className)} src={src} style={styles}/>
    </error_1.default>);
}
exports.default = _Image;
var Img = styled_1.default.img(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  pointer-events: none; // PC \uC774\uBBF8\uC9C0 \uB2E4\uC6B4\uB85C\uB4DC \uAE08\uC9C0\n  -webkit-touch-callout: none; // \uC544\uC774\uD3F0 \uB2E4\uC6B4\uB85C\uB4DC \uAE08\uC9C0\n  -webkit-user-select: none; // \uB4DC\uB798\uADF8 \uBC29\uC9C0\n  -moz-user-select: none;\n  -ms-use-select: none;\n  user-select: none;\n"], ["\n  width: 100%;\n  pointer-events: none; // PC \uC774\uBBF8\uC9C0 \uB2E4\uC6B4\uB85C\uB4DC \uAE08\uC9C0\n  -webkit-touch-callout: none; // \uC544\uC774\uD3F0 \uB2E4\uC6B4\uB85C\uB4DC \uAE08\uC9C0\n  -webkit-user-select: none; // \uB4DC\uB798\uADF8 \uBC29\uC9C0\n  -moz-user-select: none;\n  -ms-use-select: none;\n  user-select: none;\n"])));
var templateObject_1;
