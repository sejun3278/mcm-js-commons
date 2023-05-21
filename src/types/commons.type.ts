import { CSSProperties, MutableRefObject } from "react";
// 공통으로 자주 사용되는 타입 모음

// className, styles 타입 저장
export interface CommonsTypes {
  className?: string; // 클래스 이름
  styles?: CSSProperties; // 적용될 스타일
}

// children 타입 저장
export interface ChildrenType {
  children?: React.ReactNode;
}

// ref 속성 사용
export interface RefType {
  _ref?: MutableRefObject<HTMLElement & HTMLSpanElement & HTMLParagraphElement>;
}
