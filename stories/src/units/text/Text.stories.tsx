import React from "react";
import SB_Text from "./Text";

import { TextUnitTypes, TextUnitAddTypes } from "../../../../src/types/units";

export default {
  title: "Example/Units/Text",
  component: SB_Text,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

const Template = (args: TextUnitTypes & TextUnitAddTypes) => (
  <SB_Text {...args} />
);

// 클래스 네임 적용
export const setClassname = Template.bind({});
setClassname.args = {
  className: "_sb_text_",
};

// 스타일 적용
export const setStyles = Template.bind({});
setStyles.args = {
  styles: {
    fontSize: "50px",
    color: "blue",
  },
};

// p 태그 적용
export const setPTagType = Template.bind({});
setPTagType.args = {
  type: "p",
  children: "p 태그가 적용된 페이지입니다.",
};
