import React from "react";
import SB_SpanText from "./SpanText";

import { TextUnitTypes } from "../../../../../src/types/units";

export default {
  title: "Example/Units/Text/Span",
  component: SB_SpanText,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

const Template = (args: TextUnitTypes) => <SB_SpanText {...args} />;

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
    <b>
      <u>
        <i>span 태그입니다.</i>
      </u>
    </b>
  ),
};
