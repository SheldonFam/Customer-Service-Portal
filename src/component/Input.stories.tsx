import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Input } from "./inputfield";

export default {
  title: "Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (props) => (
  <Input {...props}>Button</Input>
);

export const Default = Template.bind({});
Default.args = {
  name: "",
  label: "",
  value: "",
  placeholder: "",
};
