import { FormEvent, MutableRefObject } from "react";
import { CommonsTypes, ChildrenType } from "../commons.type";

// 버튼 컴포넌트 타입
export type ButtonUnitTypes = {
  onClickEvent: () => void; // 실행할 클릭 이벤트
  isDisable?: boolean; // 비활성화 여부, true일 경우 비활성화 (default : false)
  buttonType?: "button" | "submit" | "reset"; // 버튼의 type 속성 지정 (default : submit)
  buttonRef?: MutableRefObject<HTMLButtonElement>;
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

// 에러 표시용 타입
export interface TextErrorType {
  isError?: boolean; // 에러 상태를 표현합니다.
}

// p, span 텍스트 태그 컴포넌트 타입
export type TextUnitTypes = TextErrorType & CommonsTypes & ChildrenType;

// p, span + html 컴포넌트 타입
export type TextHTMLUnitTypes = {
  dangerouslySetInnerHTML: string; // dangerouslySetInnerHTML 속성에 전달될 html 문자열
} & TextErrorType &
  CommonsTypes;

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
  buttonSize?: string; // 버튼 사이즈 (width, height에 적용) (default : 15px)
  buttonWeight?: string; // 버튼의 굵기 조절 (default : 1px)
  buttonColor?: string; // 버튼의 색상 조절 (default : black)
} & ButtonUnitTypes &
  CommonsTypes;

// Input 태그 컴포넌트 타입
export type InputTypes = {
  onChangeEvent: (text: string) => void; // onChange 이벤트
  onSubmitEvent?: (e?: FormEvent) => void; // submit 이벤트
  onResetConfirm?: () => boolean; // 입력된 값을 초기화할 때 실행되는 선택문, boolean 타입 리턴
  value?: string; // value 속성에 사용될 문자열
  defaultValue?: string; // 초기값으로 사용할 문자열 (default : "")
  placeHolder?: string; // placeHolder 속성 (default : "텍스트를 입력해주세요.")
  maxLength?: number; // maxLength 속성 (default : 20)
  isTextArea?: boolean; // textArea 태그로 대체 여부 (default : false)
  delay?: number; // 디바운싱 시간을 조절, 단위는 ms로 전달 (default : 300 = 0.3초)
  inputRef?: MutableRefObject<HTMLInputElement | HTMLTextAreaElement>; // ref 설정
  inputType?: "text" | "password"; // input(TextArea 사용 불가)에서의 타입 속성 지정
  name?: string; // name 속성 지정
  readOnly?: boolean; // readOnly 속성 사용 여부
  inputClassName?: string; // input 또는 textArea에 지정될 className
} & CommonsTypes;
