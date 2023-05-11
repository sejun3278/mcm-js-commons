import React from "react";
import SB_Input from "./Input";
import { InputTypes } from "../../../../src/types/units";

export default {
  title: "Example/Units/Input",
  component: SB_Input,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

const Template = (args: InputTypes) => (
  <form
    onSubmit={(e) => {
      e.preventDefault();
      args.onSubmitEvent;
    }}
  >
    <SB_Input {...args} />
  </form>
);

// 클래스 네임 적용
export const Error = Template.bind({});
// @ts-ignore
Error.args = {} as InputTypes;

// 클래스 네임 적용
export const setClassname = Template.bind({});
setClassname.args = {
  onChangeEvent: () => {},
  className: "sb-input",
} as InputTypes;

// 스타일 적용
export const setStyles = Template.bind({});
setStyles.args = {
  onChangeEvent: () => {},
  styles: {
    width: "300px",
  },
} as InputTypes;

// onSubmitEvent & onResetEvent
export const submitEvent = Template.bind({});
submitEvent.args = {
  onChangeEvent: () => {},
  onSubmitEvent: () => {
    alert("작성 완료!");
  },
  onResetEvent: () => {
    alert("삭제 완료!");
  },
} as InputTypes;

// placeHolder 설정
export const placeHolder = Template.bind({});
placeHolder.args = {
  onChangeEvent: () => {},
  placeHolder: "10글자 이내의 텍스트를 입력하세요.",
} as InputTypes;

// placeHolder & maxLength 설정
export const maxLength = Template.bind({});
maxLength.args = {
  onChangeEvent: () => {},
  placeHolder: "50글자 이내의 텍스트를 입력하세요.",
  maxLength: 50,
} as InputTypes;

// value 설정
export const useValue = Template.bind({});
useValue.args = {
  onChangeEvent: () => {},
  value: "텍스트입니다.",
} as InputTypes;

// password 속성 설정
export const passwordType = Template.bind({});
passwordType.args = {
  onChangeEvent: () => {},
  value: "111",
  inputType: "password",
} as InputTypes;

// debouncing 적용
export const debouncing = Template.bind({});
debouncing.args = {
  onChangeEvent: () => {},
  placeHolder: "글자가 변경되면 1초 후에 반영됩니다.",
  maxLength: 100,
  delay: 1000,
} as InputTypes;

// TextArea 적용
export const textarea = Template.bind({});
textarea.args = {
  onChangeEvent: () => {},
  isTextArea: true,
  defaultValue: "TextArea 태그가 사용됐습니다.",
  styles: {
    height: "300px",
  },
  maxLength: 100,
} as InputTypes;
