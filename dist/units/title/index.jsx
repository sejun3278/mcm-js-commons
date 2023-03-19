"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var hooks_1 = __importDefault(require("../../hooks"));
var filter = Array.from(new Array(5), function (_, i) { return "h".concat(i + 2); });
// h1 ~ h6로 표현되는 타이틀 컴포넌트
function _Title(_a) {
    var children = _a.children, styles = _a.styles, className = _a.className, titleLevel = _a.titleLevel;
    var renderRef = (0, react_1.useRef)();
    var _b = (0, hooks_1.default)(), getAllComponentsClassName = _b.getAllComponentsClassName, getOriginTemplate = _b.getOriginTemplate;
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
    return (<TitleTag className={_className} style={_styles}>
      {children}
    </TitleTag>);
}
exports.default = _Title;
