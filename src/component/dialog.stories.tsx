// import React from "react";
// import { ComponentStory, ComponentMeta } from "@storybook/react";
// import { DialogDemo } from "./dialog";

// export default {
//   title: "Dialog",
//   component: DialogDemo,
// } as ComponentMeta<typeof DialogDemo>;

// const Template: ComponentStory<typeof DialogDemo> = () => (
//   <DialogDemo></DialogDemo>
// );

// export const Default = Template.bind({});
// Default.args = {};

import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Dialog } from "./dialog";
import { Button } from "./button";
import { CloseButton } from "./close-button";
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
        <CloseButton />
      </Dialog>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
