import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TextInput } from "./input";

export default {
  title: "TextInput",
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (props) => (
  <TextInput {...props}></TextInput>
);

export const Default = Template.bind({});
Default.args = {
  label: "Label",
  value: "",
};

export const WithID = Template.bind({});
WithID.args = {
  label: "Label",
  id: "123xyz",
  value: "",
};

export const Date = Template.bind({});
Date.args = {
  label: "Date",
  type: "date",
};
