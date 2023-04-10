import React from "react";
import SB_Button from "./Button";
import { ButtonUnitTypes } from "../../../../src/types/units";

export default {
  title: "Example/Units/Button",
  component: SB_Button,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

const Template = (args: ButtonUnitTypes) => <SB_Button {...args} />;

// 필수 props가 undefined일 경우
export const Error = Template.bind({});
Error.args = {
  children: <span>Button with className</span>,
  className: "sb-btn",
  onClickEvent: undefined,
};

// 클래스 네임 적용
export const setClassname = Template.bind({});
setClassname.args = {
  children: <span>Button with className</span>,
  className: "sb-btn",
  onClickEvent: () => {
    alert(`버튼 이벤트가 작동됩니다.`);
  },
};

// 스타일 적용
export const setStyles = Template.bind({});
setStyles.args = {
  children: <span>Button with styles</span>,
  styles: {
    backgroundColor: "pink",
  },
  onClickEvent: () => {
    alert(`버튼 이벤트가 작동됩니다.`);
  },
};

// disable 적용
export const setDisable = Template.bind({});
setDisable.args = {
  children: <span>Button with disable</span>,
  isDisable: true,
  onClickEvent: () => {
    alert(`버튼 이벤트가 작동됩니다.`);
  },
};
