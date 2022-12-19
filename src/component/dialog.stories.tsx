import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DialogDemo } from "./dialog";

export default {
  title: "Dialog",
  component: DialogDemo,
} as ComponentMeta<typeof DialogDemo>;

const Template: ComponentStory<typeof DialogDemo> = () => (
  <DialogDemo></DialogDemo>
);

export const Default = Template.bind({});
Default.args = {};
