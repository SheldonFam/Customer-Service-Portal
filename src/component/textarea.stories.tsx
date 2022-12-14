import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TextArea } from "./textarea";

export default {
  title: "TextArea",
  component: TextArea,
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (props) => (
  <TextArea {...props}></TextArea>
);

export const Default = Template.bind({});
Default.args = {
  label: "Label",
};
