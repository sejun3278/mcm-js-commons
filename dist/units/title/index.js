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
import CommonsHooksComponents from "../../hooks";
var filter = Array.from(new Array(5), function (_, i) { return "h".concat(i + 2); });
// h1 ~ h6로 표현되는 타이틀 컴포넌트
export default function _Title(_a) {
    var children = _a.children, styles = _a.styles, className = _a.className, titleLevel = _a.titleLevel;
    var _b = CommonsHooksComponents(), getAllComponentsClassName = _b.getAllComponentsClassName, getOriginTemplate = _b.getOriginTemplate;
    // 렌더할 태그명
    var TitleTag = (filter.includes(titleLevel || "h1") ? titleLevel : "h1") || "h1";
    // 추가할 클래스 네임
    var _className = getAllComponentsClassName("mcm-title-unit", className);
    // 추가할 스타일 정보
    var _styles = {};
    if (styles) {
        _styles = Object.entries(styles).reduce(function (acc, cur) {
            acc[getOriginTemplate(cur[0])] = getOriginTemplate(cur[1]);
            return acc;
        }, {});
    }
    return (_jsx(TitleTag, __assign({ className: _className, style: _styles }, { children: children })));
}
