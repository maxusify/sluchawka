// Logo.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Logo } from "../components/index";

export default {
  component: Logo,
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  larger: false,
};
