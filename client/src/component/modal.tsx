import * as React from "react";
import { CloseButton } from "./close-button";
import { Button } from "./button";
import ReactModal from "react-modal";
import { useState } from "react";

interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
  title?: string;
  // shouldCloseOnEsc: boolean;
  // ariaHideApp: boolean;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, children, title }) => {
  const [open, setOpen] = useState(false);

  if (!isOpen) return null;

  return (
    <ReactModal className="fixed inset-0 bg-gray-500 opacity-95" isOpen={true}>
      <div className="fixed bg-white p-6 rounded shadow top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 w-11/12 max-w-[450px] max-h-screen">
        <div className="mb-4 font-bold">
          <h1>{title}</h1>
        </div>
        <div>{children}</div>
        <div className="absolute top-6 right-4 p-1 rounded-full text-gray-500 hover:text-gray-600 focus:outline-none focus-visible:ring focus-visible:ring-primary-200">
          <CloseButton onClick={() => setOpen(false)} />
        </div>
      </div>
    </ReactModal>
  );
};
