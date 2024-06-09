import { ReactNode } from "react";

type ModalProps = {
    isOpen: boolean;
     onClose: () => void;
      children: ReactNode; 
}

export const Modal = ({ isOpen, onClose, children }:ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded shadow-lg">
        <button className="absolute top-2 right-2" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};
