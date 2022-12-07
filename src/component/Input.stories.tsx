import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Input } from "./input";

export default {
  title: "Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (props) => (
  <Input {...props}></Input>
);

export const Default = Template.bind({});
Default.args = {
  label: "Label",
  placeholder: "",
  value: "",
};
