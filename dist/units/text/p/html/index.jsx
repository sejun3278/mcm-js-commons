"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("../..");
var dompurify_1 = __importDefault(require("dompurify"));
var hooks_1 = require("../../../../hooks");
var react_1 = require("react");
// dangerouslySetInnerHTML 속성을 사용할 수 있는 P Text Component
function _PTextWithHtml(props) {
    var _a = (0, react_1.useState)(false), render = _a[0], setRender = _a[1];
    var styles = props.styles, className = props.className, isError = props.isError, dangerouslySetInnerHTML = props.dangerouslySetInnerHTML;
    (0, react_1.useEffect)(function () {
        // window 객체가 있을 때만 해당 컴포넌트 렌더하기
        setRender(true);
    }, []);
    var getRender = function () {
        return !dangerouslySetInnerHTML ? (<__1.PText isError={true}>
        {"<_PTextWithHtml /> : * dangerouslySetInnerHTML props\uAC00 \uD544\uC694\uD569\uB2C8\uB2E4."}
      </__1.PText>) : (<__1.PText style={styles} className={(0, hooks_1.getAllComponentsClassName)("mcm-p-unit", className)} isError={isError} dangerouslySetInnerHTML={{
                __html: dompurify_1.default.sanitize(dangerouslySetInnerHTML || ""),
            }}/>);
    };
    return (render && getRender()) || <></>;
}
exports.default = _PTextWithHtml;
