import React from "react";
import SB_CloseButton from "./CloseButton";
import { CloseButtonTypes } from "../../../../../src/types/units";

export default {
  title: "Example/Units/Button/CloseButton",
  component: SB_CloseButton,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

const Template = (args: CloseButtonTypes) => <SB_CloseButton {...args} />;

// 클래스 네임 적용
export const setClassname = Template.bind({});
setClassname.args = {
  className: "_sb_close-btn_",
};

// 30px 사이즈 적용
export const setButtonSizeTo30px = Template.bind({});
setButtonSizeTo30px.args = {
  buttonSize: "30px",
};

// 버튼 굵기 변경
export const setButtonWeightTo2px = Template.bind({});
setButtonWeightTo2px.args = {
  buttonSize: "30px",
  buttonWeight: "3px",
};

// 클릭 이벤트 적용
export const setButtonOnClickEvent = Template.bind({});
setButtonOnClickEvent.args = {
  buttonSize: "30px",
  buttonWeight: "3px",
  onClickEvent: () => {
    alert("새로운 클릭 이벤트입니다.");
  },
};

// disable 적용
export const setDisable = Template.bind({});
setDisable.args = {
  buttonSize: "30px",
  buttonWeight: "3px",
  disable: true,
};
