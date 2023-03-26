"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var p_1 = __importDefault(require("./p"));
var span_1 = __importDefault(require("./span"));
// p 또는 span 태그를 출력하는 컴포넌트
function _Text(props) {
    var type = props.type, children = props.children;
    return type === "p" ? (<p_1.default {...props}>{children}</p_1.default>) : (<span_1.default {...props}>{children}</span_1.default>);
}
exports.default = _Text;
