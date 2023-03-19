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
    // CamelCase 적용된 문자열을 기존의 하이픈 문법으로 변경하기
    var getOriginTemplate = function (str) {
        return Array.from(str).reduce(function (acc, cur, i) {
            var code = cur.charCodeAt(0);
            if (i > 0 && code >= 65 && code <= 90) {
                // 0번째 인덱스 제외하고 대문자일 경우
                cur = "-".concat(cur.toLowerCase());
            }
            return acc + cur;
        }, "");
    };
    return {
        getAllComponentsClassName: getAllComponentsClassName,
        getOriginTemplate: getOriginTemplate,
    };
}
exports.default = CommonsHooksComponents;
