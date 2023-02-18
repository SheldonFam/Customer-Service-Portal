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

export const TextInput = Template.bind({});
TextInput.args = {
  label: "Label",
  value: "",
};

export const TextInputWithID = Template.bind({});
TextInputWithID.args = {
  label: "Label",
  id: "123xyz",
  value: "",
};

export const Date = Template.bind({});
Date.args = {
  label: "Date",
  type: "date",
};
