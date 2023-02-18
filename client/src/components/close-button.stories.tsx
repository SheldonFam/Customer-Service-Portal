import * as React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CloseButton } from "./close-button";

export default {
  title: "CloseButton",
  component: CloseButton,
} as ComponentMeta<typeof CloseButton>;

const Template: ComponentStory<typeof CloseButton> = (props) => (
  <CloseButton {...props}>CloseButton</CloseButton>
);

export const NormalButton = Template.bind({});
NormalButton.args = {};
