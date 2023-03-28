import React from "react";
import SB_PText from "./PTextWithHtml";

import { TextUnitTypes } from "../../../../../src/types/units";

export default {
  title: "Example/Units/Text/P",
  component: SB_PText,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

const Template = (args: TextUnitTypes) => <SB_PText {...args} />;

// 클래스 네임 적용
export const setClassname = Template.bind({});
setClassname.args = {
  className: "_sb_pText_",
};

// 스타일 적용
export const setStyles = Template.bind({});
setStyles.args = {
  styles: {
    fontSize: "50px",
    color: "blue",
  },
};

// children 적용
export const setChildren = Template.bind({});
setChildren.args = {
  children: (
    <span className="_span_in_p_">p태그 안에 추가된 span태그 입니다.</span>
  ),
};

// error 메세지 적용
export const setError = Template.bind({});
setError.args = {
  isError: true,
  children: <span>에러 메세지입니다.</span>,
};
