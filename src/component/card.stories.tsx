import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Card } from "./card";

export default {
  title: "Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (props) => (
  <Card {...props}></Card>
);

export const Simple = Template.bind({});
Simple.args = {};
