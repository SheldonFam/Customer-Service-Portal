import * as React from "react";
import ReactModal from "react-modal";
import { CloseButton } from "./close-button";

interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
  title?: string;
  onClose: () => void;
}

export const Modal = ({ isOpen, children, title, onClose }: ModalProps) => {
  return (
    <ReactModal
      className="fixed inset-0 bg-gray-500 opacity-90"
      isOpen={isOpen}
      ariaHideApp={false}
    >
      <div className="fixed bg-white p-6 rounded shadow top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 w-11/12 max-w-[450px] max-h-screen">
        <div className="mb-4 font-bold text-xs md:text-base">
          <h1>{title}</h1>
        </div>
        <div>{children}</div>
        <div className="absolute top-6 right-4 p-1 rounded-full text-gray-500 hover:text-gray-600 focus:outline-none focus-visible:ring focus-visible:ring-primary-200">
          <CloseButton onClick={onClose} />
        </div>
      </div>
    </ReactModal>
  );
};
