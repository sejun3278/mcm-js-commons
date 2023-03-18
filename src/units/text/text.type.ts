import { CSSProperties } from "react";

export interface TextPropsTypes {
  children: React.ReactNode; // p태그 안에 출력될 내용
  styles?: CSSProperties; // p태그에 적용될 스타일
  className?: string; // 함께 적용할 className
}

export interface TextAddType {
  type?: "p" | "span"; // 출력할 태그명, p를 입력하면 p태그로 출력 (default : span)
}
