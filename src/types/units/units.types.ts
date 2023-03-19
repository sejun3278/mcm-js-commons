import { CommonsTypes, ChildrenType } from "../commons.type";

// 버튼 컴포넌트 타입
export type ButtonUnitTypes = {
  children: React.ReactNode;
  onClickEvent: () => void; // 실행할 클릭 이벤트
  isDisable?: boolean; // 비활성화 여부, true일 경우 비활성화 (default : false)
} & CommonsTypes &
  ChildrenType;

// 이미지 컴포넌트 타입
export type ImageUnitTypes = {
  src: string; // 출력될 이미지 경로
} & CommonsTypes;

// text 컴포넌트에 추가로 전달되는 타입들
export interface TextUnitAddTypes {
  type?: "p" | "span"; // 출력할 태그명, p를 입력하면 p태그로 출력 (default : span)
}

// p, span 텍스트 태그 컴포넌트 타입
export type TextUnitTypes = CommonsTypes & ChildrenType;

// 타이틀 태그 컴포넌트 타입
export type TitleUnitTypes = {
  titleLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"; // 태그 레벨 선택 (h1이 디폴트 값)
} & CommonsTypes &
  ChildrenType;
