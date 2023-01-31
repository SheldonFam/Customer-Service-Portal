import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Modal } from "./modal";
import { Button } from "./button";

export default {
  title: "Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open</Button>
      <Modal isOpen={isOpen} title={"Title"}>
        <div>Content</div>
        <Button onClick={() => setIsOpen(false)}>Close</Button>
      </Modal>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
