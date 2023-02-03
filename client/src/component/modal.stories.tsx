import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Modal } from "./modal";
import { Button } from "./button";

export default {
  title: "Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open</Button>
      <Modal isOpen={open} title={"Title"}>
        <div>Content</div>
        <Button onClick={() => setOpen(false)}>Close</Button>
      </Modal>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
