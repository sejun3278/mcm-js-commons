import React from "react";

import { Example } from "./Example";

export default {
  title: "Example/Example",
  component: Example,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

const Template = (args) => <Example {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: "Jane Doe",
  },
};

// export const LoggedOut = Template.bind({});
// LoggedOut.args = {};
