import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Dialog } from "./dialog";
import { Button } from "./button";

export default {
  title: "Dialog",
  component: Dialog,
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open</Button>
      <Dialog open={open}>
        <p>Content</p>
        <button onClick={() => setOpen(false)}>Close</button>
      </Dialog>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
