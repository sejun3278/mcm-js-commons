import React from "react";
import SB_Link from "./Link";

import { LinkUnitTypes } from "../../../../../src/types/units";

export default {
  title: "Example/Units/link/Link",
  component: SB_Link,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

const Template = (args: LinkUnitTypes) => <SB_Link {...args} />;

// 클래스 네임 적용
export const Error = Template.bind({});
Error.args = {
  className: "sb-link",
};

// 클래스 네임 적용
export const setClassname = Template.bind({});
setClassname.args = {
  className: "sb-link",
  href: "https://mcm-js.site/modules/modal",
};

// 스타일 적용
export const setStyles = Template.bind({});
setStyles.args = {
  styles: {
    fontSize: "50px",
    letterSpacing: "5px",
  },
  href: "https://mcm-js.site/modules/modal",
};

// 홈 페이지로 이동
export const setOtherLink = Template.bind({});
setOtherLink.args = {
  href: "/",
  children: "홈으로 이동합니다.",
  styles: {
    color: "black",
  },
};
