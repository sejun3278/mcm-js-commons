"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hooks_1 = require("../../hooks");
var filter = Array.from(new Array(5), function (_, i) { return "h".concat(i + 2); });
// h1 ~ h6로 표현되는 타이틀 컴포넌트
function _Title(_a) {
    var children = _a.children, styles = _a.styles, className = _a.className, titleLevel = _a.titleLevel;
    // 렌더할 태그명
    var TitleTag = (filter.includes(titleLevel || "h1") ? titleLevel : "h1") || "h1";
    // 추가할 클래스 네임
    var _className = (0, hooks_1.getAllComponentsClassName)("mcm-title-unit", className);
    // 추가할 스타일 정보
    var _styles = {};
    if (styles) {
        _styles = Object.entries(styles).reduce(function (acc, cur) {
            acc[(0, hooks_1.getOriginTemplate)(cur[0])] = (0, hooks_1.getOriginTemplate)(cur[1]);
            return acc;
        }, {});
    }
    return (<TitleTag className={_className} style={_styles}>
      {children}
    </TitleTag>);
}
exports.default = _Title;
