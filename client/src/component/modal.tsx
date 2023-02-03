import * as React from "react";
import ReactModal from "react-modal";

interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
  title?: string;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, children, title }) => {
  return (
    <ReactModal
      className="fixed inset-0 bg-gray-500 opacity-95"
      isOpen={isOpen}
      ariaHideApp={false}
    >
      <div className="fixed bg-white p-6 rounded shadow top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 w-11/12 max-w-[450px] max-h-screen">
        <div className="mb-4 font-bold">
          <h1>{title}</h1>
        </div>
        <div>{children}</div>
      </div>
    </ReactModal>
  );
};
