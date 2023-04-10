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
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import styled from "@emotion/styled";
import { v4 as uuidv4 } from "uuid";
import _Title from "../title";
// 필수 props가 전달되지 않은 모듈의 에러메세지를 반환하는 페이지
export default function _Error(_a) {
    var _b;
    var propsList = _a.propsList, requiredList = _a.requiredList, children = _a.children, mouduleName = _a.mouduleName;
    // 필수 데이터가 모두 있는지를 확인
    var isAble = (requiredList === null || requiredList === void 0 ? void 0 : requiredList.every(function (el) { return propsList[el] !== undefined; })) || false;
    return isAble ? (children) : (_jsxs(ErrorWrapper, __assign({ className: "mcm-error-unit" }, { children: [_jsxs(_Title, __assign({ titleLevel: "h3" }, { children: ["\uD83D\uDE45 ", mouduleName ? mouduleName + " 모듈을" : "모듈을", " \uC2E4\uD589\uD558\uAE30 \uC704\uD574\uC11C\uB294 \uC544\uB798\uC758 props\uAC00 \uD544\uC694\uD569\uB2C8\uB2E4."] })), _jsx(RequiredList, { children: (_b = requiredList === null || requiredList === void 0 ? void 0 : requiredList.filter(function (el) { return propsList[el] === undefined; })) === null || _b === void 0 ? void 0 : _b.map(function (el) { return (_jsx("li", { children: el }, uuidv4())); }) })] })));
}
export var ErrorWrapper = styled.article(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 0rem 1.5rem;\n  border: double 2px black;\n  border-radius: 10px;\n  display: inline-block;\n  margin: 1rem;\n\n  .mcm-title-unit {\n    display: inline-block;\n  }\n"], ["\n  padding: 0rem 1.5rem;\n  border: double 2px black;\n  border-radius: 10px;\n  display: inline-block;\n  margin: 1rem;\n\n  .mcm-title-unit {\n    display: inline-block;\n  }\n"])));
export var RequiredList = styled.ul(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-top: 0px;\n\n  li {\n    color: #d14d72;\n    margin: 10px 0px;\n  }\n"], ["\n  margin-top: 0px;\n\n  li {\n    color: #d14d72;\n    margin: 10px 0px;\n  }\n"])));
var templateObject_1, templateObject_2;
