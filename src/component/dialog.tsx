// import * as React from "react";
// import * as Dialog from "@radix-ui/react-dialog";
// import { Button } from "./button";
// import { CloseButton } from "./close-button";

// // export interface DialogProps extends React.ComponentPropsWithoutRef<"dialog"> {}

// export const DialogDemo = () => (
//   <Dialog.Root>
//     <Dialog.Trigger asChild>
//       <Button>Open</Button>
//     </Dialog.Trigger>
//     <Dialog.Portal>
//       <Dialog.Overlay className="fixed inset-0 bg-gray-500 opacity-70" />
//       <Dialog.Content className="fixed bg-white p-6 rounded shadow top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 w-11/12 max-w-[450px] max-h-screen">
//         <Dialog.Title className="text-lg font-medium pb-2 border-b border-gray-200">
//           Title
//         </Dialog.Title>
//         <fieldset className="Fieldset">
//           <p>Content</p>
//         </fieldset>
//         <fieldset className="Fieldset">
//           <input></input>
//         </fieldset>
//         <Dialog.Close asChild>
//           <div className="mt-6 flex gap-2 justify-end">
//             <Button>Cancel</Button>
//             <Button variant="primary">Save</Button>
//           </div>
//         </Dialog.Close>
//         <Dialog.Close asChild>
//           <div className="absolute top-6 right-5 p-1 rounded-full text-gray-500 hover:text-gray-600 focus:outline-none focus-visible:ring focus-visible:ring-primary-200">
//             <CloseButton className="w-5 h-5" />
//           </div>
//         </Dialog.Close>
//       </Dialog.Content>
//     </Dialog.Portal>
//   </Dialog.Root>
// );

import * as React from "react";
import { CloseButton } from "./close-button";

export interface DialogProps extends React.ComponentPropsWithoutRef<"div"> {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

export const Dialog = React.forwardRef<HTMLDivElement, DialogProps>(
  function Dialog({ open, children, ...props }, forwardRef) {
    if (!open) return null;
    return (
      <div
        className="fixed inset-0 bg-gray-500 opacity-70"
        {...props}
        ref={forwardRef}
      >
        <div className="fixed bg-white p-6 rounded shadow top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 w-11/12 max-w-[450px] max-h-screen">
          {children}
          <div className="absolute top-2 right-2 p-1 rounded-full text-gray-500 hover:text-gray-600 focus:outline-none focus-visible:ring focus-visible:ring-primary-200">
            <CloseButton />
          </div>
        </div>
      </div>
    );
  }
);
