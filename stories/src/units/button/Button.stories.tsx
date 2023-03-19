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

// 클래스 네임 적용
export const getClassname = Template.bind({});
getClassname.args = {
  children: <span>Button with className</span>,
  className: "_sb_btn_",
};

// 스타일 적용
export const getStyles = Template.bind({});
getStyles.args = {
  children: <span>Button with styles</span>,
  styles: {
    backgroundColor: "pink",
  },
};

// disable 적용
export const getDisable = Template.bind({});
getDisable.args = {
  children: <span>Button with disable</span>,
  isDisable: true,
};

// onClickEvent 적용
export const getClickEvent = Template.bind({});
getClickEvent.args = {
  children: <span>Button with onClickEvent</span>,
  onClickEvent: () => {
    alert(`버튼 이벤트가 작동됩니다.`);
  },
};
