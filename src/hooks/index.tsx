// 공용으로 사용되는 함수들이 저장되는 컴포넌트입니다.

export default function CommonsHooksComponents() {
  // 컴포넌트 클래스 네임 완성
  const getAllComponentsClassName = (
    defaultClass: string,
    className?: string
  ) => {
    // defaultClass : 디폴트로 무조건 적용되는 클래스 이름
    // className : 새로 추가될 클래스 이름
    const _className = `${defaultClass}${className ? ` ${className}` : ""}`;
    return _className;
  };

  // CamelCase 적용된 문자열을 기존의 하이픈 문법으로 변경하기
  const getOriginTemplate = (str: string): string => {
    return Array.from(str).reduce((acc, cur, i) => {
      const code = cur.charCodeAt(0);
      if (i > 0 && code >= 65 && code <= 90) {
        // 0번째 인덱스 제외하고 대문자일 경우
        cur = `-${cur.toLowerCase()}`;
      }
      return acc + cur;
    }, "");
  };

  return {
    getAllComponentsClassName,
    getOriginTemplate,
  };
}
