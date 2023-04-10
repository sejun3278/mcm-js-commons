// 공용으로 사용되는 함수들이 저장되는 컴포넌트입니다.
export default function CommonsHooksComponents() {
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
    // 스타일 적용을 위한 px 설정
    var getPXForm = function (data, minimun) {
        // data : px를 적용시킬 데이터, 숫자와 문자 타입으로 받는다.
        // minimum : px로 적용했을 때 제일 작은 단위의 수, 해당 값보다 작을 경우 minimum으로 최종 리턴
        var num = Number(String(data).split("px")[0]);
        if (minimun) {
            var _minimun = Number(minimun.split("px")[0]);
            if (_minimun > num) {
                num = _minimun;
            }
        }
        return "".concat(num, "px");
    };
    // router 객체 리턴하기
    var getRouter = function () { return function () {
        var useRouter = require("next/router").useRouter;
        var router = useRouter;
        return router;
    }; };
    // 주소 query 끝 제이든 케이스 리턴하기
    var getModuleNamewithJadenCase = function () {
        var _a;
        var useRouter = require("next/router").useRouter;
        var router = useRouter;
        var moduleName = (_a = router === null || router === void 0 ? void 0 : router.pathname) === null || _a === void 0 ? void 0 : _a.split("/").at(-1);
        if (moduleName) {
            moduleName = moduleName[0].toUpperCase() + moduleName.substring(1);
            return moduleName;
        }
        return "";
    };
    return {
        getAllComponentsClassName: getAllComponentsClassName,
        getOriginTemplate: getOriginTemplate,
        getPXForm: getPXForm,
        getRouter: getRouter,
        getModuleNamewithJadenCase: getModuleNamewithJadenCase,
    };
}
