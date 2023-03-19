import React from "react";
import SB_Image from "./Image";

export default {
  title: "Example/Units/Image",
  component: SB_Image,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

const Template = (args) => <SB_Image {...args} />;

// 클래스 네임 적용
export const getClassname = Template.bind({});
getClassname.args = {
  className: "_sb_image_",
};

// 스타일 적용
export const getStyles = Template.bind({});
getStyles.args = {
  styles: {
    width: "300px",
    height: "300px",
  },
};

// 이미지 적용
export const getOtherImage = Template.bind({});
getOtherImage.args = {
  src: "http://www.nongsaro.go.kr/cms_contents/976/20151215141317605.gif",
  styles: {
    width: "300px",
  },
};
