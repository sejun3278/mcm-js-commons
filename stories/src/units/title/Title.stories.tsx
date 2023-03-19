import React from "react";
import SB_Title from "./Title";

import { TitleUnitTypes } from "../../../../src/types/units";

export default {
  title: "Example/Units/Title",
  component: SB_Title,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

const Template = (args: TitleUnitTypes) => <SB_Title {...args} />;

// 클래스 네임 적용
export const setClassname = Template.bind({});
setClassname.args = {
  className: "_sb_title_",
};

// 스타일 적용
export const setStyles = Template.bind({});
setStyles.args = {
  styles: {
    fontSize: "50px",
    color: "blue",
  },
};

// h2 태그 적용
export const setTag_h2 = Template.bind({});
setTag_h2.args = {
  titleLevel: "h2",
};

// 잘못된 태그 적용시, h1 기본 적용
export const setWrongTag = Template.bind({});
setWrongTag.args = {
  titleLevel: "a",
};
