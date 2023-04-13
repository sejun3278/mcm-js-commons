"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequiredList = exports.ErrorWrapper = void 0;
var styled_1 = __importDefault(require("@emotion/styled"));
var uuid_1 = require("uuid");
var title_1 = __importDefault(require("../title"));
// 필수 props가 전달되지 않은 모듈의 에러메세지를 반환하는 페이지
function _Error(_a) {
    var _b;
    var propsList = _a.propsList, requiredList = _a.requiredList, children = _a.children, mouduleName = _a.mouduleName;
    // 필수 데이터가 모두 있는지를 확인
    var isAble = (requiredList === null || requiredList === void 0 ? void 0 : requiredList.every(function (el) { return propsList[el] !== undefined; })) || false;
    return isAble ? (children) : (<exports.ErrorWrapper className="mcm-error-unit">
      <title_1.default titleLevel="h3">
        🙅 {mouduleName ? mouduleName + " 모듈을" : "모듈을"} 실행하기 위해서는
        아래의 props가 필요합니다.
      </title_1.default>
      <exports.RequiredList>
        {(_b = requiredList === null || requiredList === void 0 ? void 0 : requiredList.filter(function (el) { return propsList[el] === undefined; })) === null || _b === void 0 ? void 0 : _b.map(function (el) { return (<li key={(0, uuid_1.v4)()}>{el}</li>); })}
      </exports.RequiredList>
    </exports.ErrorWrapper>);
}
exports.default = _Error;
exports.ErrorWrapper = styled_1.default.article(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 1.5rem !important;\n  border: double 2px black;\n  border-radius: 10px;\n  display: inline-block;\n  margin: 1rem;\n\n  .mcm-title-unit {\n    display: inline-block;\n    margin: 0 !important;\n  }\n"], ["\n  padding: 1.5rem !important;\n  border: double 2px black;\n  border-radius: 10px;\n  display: inline-block;\n  margin: 1rem;\n\n  .mcm-title-unit {\n    display: inline-block;\n    margin: 0 !important;\n  }\n"])));
exports.RequiredList = styled_1.default.ul(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-top: 20px !important;\n  margin-bottom: 0px !important;\n  display: flex;\n  flex-direction: column;\n  gap: 10px 0px;\n\n  li {\n    color: #d14d72;\n  }\n"], ["\n  margin-top: 20px !important;\n  margin-bottom: 0px !important;\n  display: flex;\n  flex-direction: column;\n  gap: 10px 0px;\n\n  li {\n    color: #d14d72;\n  }\n"])));
var templateObject_1, templateObject_2;
