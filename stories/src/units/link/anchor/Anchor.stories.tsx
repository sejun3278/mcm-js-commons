import React from "react";
import SB_Anchor from "./Anchor";

import { AnchorUnitTypes } from "../../../../../src/types/units";

export default {
  title: "Example/Units/link/anchor",
  component: SB_Anchor,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

const Template = (args: AnchorUnitTypes) => <SB_Anchor {...args} />;

// 필수 props가 undefined일 경우
export const Error = Template.bind({});
Error.args = {
  className: "sb-anchor",
};

// 클래스 네임 적용
export const setClassname = Template.bind({});
setClassname.args = {
  className: "sb-anchor",
  href: "https://mcm-js.site/",
};

// 스타일 적용
export const setStyles = Template.bind({});
setStyles.args = {
  styles: {
    fontSize: "50px",
    letterSpacing: "5px",
  },
  href: "https://mcm-js.site/",
};

// 네이버 링크 연결
export const setOtherLink = Template.bind({});
setOtherLink.args = {
  href: "https://www.naver.com/",
  children: "네이버 페이지로 이동합니다.",
  styles: {
    color: "black",
  },
};

// target을 사용하지 않음 (= 새창을 띄우지 않음)
export const setNoneTarget = Template.bind({});
setNoneTarget.args = {
  children: "새창을 띄우지 않습니다.",
  notTarget: true,
  href: "https://mcm-js.site/",
};
