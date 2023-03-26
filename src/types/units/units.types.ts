import { CommonsTypes, ChildrenType } from "../commons.type";

// 버튼 컴포넌트 타입
export type ButtonUnitTypes = {
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

// p, span text 컴포넌트에 전달되는 타입
export interface TextUnitDefaultType {
  dangerouslySetInnerHTML?: string; // dangerouslySetInnerHTML 기능 사용을 위한 문자열
  isError?: boolean; // 에러 상태를 표현합니다.
}

// p, span 텍스트 태그 컴포넌트 타입
export type TextUnitTypes = TextUnitDefaultType & CommonsTypes & ChildrenType;

// 타이틀 태그 컴포넌트 타입
export type TitleUnitTypes = {
  titleLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"; // 태그 레벨 선택 (h1이 디폴트 값)
} & CommonsTypes &
  ChildrenType;

// anchor 태그 컴포넌트 타입
export type AnchorUnitTypes = {
  href: string; // 실행할 웹 페이지의 경로
  notTarget?: boolean; // target의 _blank값을 사용하지 않을 것인지 (default : false)
} & CommonsTypes &
  ChildrenType;

// Link 태그 컴포넌트 타입
export type LinkUnitTypes = {
  href: string; // 이동할 페이지
} & CommonsTypes &
  ChildrenType;

// CloseButton 태그 컴포넌트 타입
export type CloseButtonTypes = {
  onClickEvent: () => void; // 클릭 이벤트
  buttonSize?: string; // 버튼 사이즈 (width, height에 적용) (default : 15px)
  buttonWeight?: string; // 버튼의 굵기 조절 (default : 1px)
  disable?: boolean; // 닫기 비활성화 (default : false)
} & CommonsTypes;
