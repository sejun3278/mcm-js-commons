"use strict";
// 공용으로 사용되는 함수들이 저장되는 컴포넌트입니다.
Object.defineProperty(exports, "__esModule", { value: true });
function CommonsHooksComponents() {
    // 컴포넌트 클래스 네임 완성
    var getAllComponentsClassName = function (defaultClass, className) {
        // defaultClass : 디폴트로 무조건 적용되는 클래스 이름
        // className : 새로 추가될 클래스 이름
        var _className = "".concat(defaultClass).concat(className ? " ".concat(className) : "");
        return _className;
    };
    return {
        getAllComponentsClassName: getAllComponentsClassName,
    };
}
exports.default = CommonsHooksComponents;
