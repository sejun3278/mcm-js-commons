import React from "react";
import SB_SpanTextWithHTML from "./SpanTextWithHTML";

import { TextHTMLUnitTypes } from "../../../../../../src/types/units";

export default {
  title: "Example/Units/Text/Span/HTML",
  component: SB_SpanTextWithHTML,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

const Template = (args: TextHTMLUnitTypes) => <SB_SpanTextWithHTML {...args} />;

// 클래스 네임 적용
export const setClassname = Template.bind({});
setClassname.args = {
  className: "_sb_spanText_",
};

// 스타일 적용
export const setStyles = Template.bind({});
setStyles.args = {
  styles: {
    fontSize: "50px",
    color: "blue",
  },
};

// dangerouslySetInnerHTML 적용
export const setHTML = Template.bind({});
setHTML.args = {
  dangerouslySetInnerHTML:
    "<b>HTML가 적용되었습니다.</b> <br /> <u>줄바꿈 되었습니다.</u>",
};

// error 메세지 적용
export const setError = Template.bind({});
setError.args = {
  isError: true,
  dangerouslySetInnerHTML: "<u>에러 메세지 입니다.</u>",
};
