"use client"
import React, { useState } from "react";
import { modalData } from "./modalData";
import { cn } from "@/app/lib/utils";
import { IoClose } from "react-icons/io5";

export interface ModalData {
  modalName: string;
  trigger: React.ReactNode;
  buttonClassname?: string;
  modalClassname?: string;
}

const Modal = ({
  modalName,
  trigger,
  buttonClassname,
  modalClassname,
  ...props
}: ModalData) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const selectedModal = modalData.find(
    (modal) => modal.modalName === modalName
  );

  const ModalComponent = selectedModal?.component as React.ComponentType<
    { closeModal: () => void } & typeof props
  >;
  if (!ModalComponent) {
    return <>{trigger}</>;
  }

  return (
    <>
      <button
        className={cn("cursor-pointer", buttonClassname)}
        onClick={handleButtonClick}
      >
        {trigger}
      </button>
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity ${
          isOpen
            ? "animate-frameIn pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className="fixed inset-0 bg-black bg-opacity-40 transition-opacity"
          onClick={handleCloseModal}
        ></div>
        <div
          className={cn(
            "relative rounded-lg bg-white p-8 shadow-2xl",
            modalClassname
          )}
        >
          <span
            className="absolute right-2 top-2 flex h-5 w-5 cursor-pointer items-center justify-center rounded-full text-xl transition-all hover:bg-red-600 hover:text-white"
            onClick={handleCloseModal}
          >
            <IoClose />
          </span>
          {ModalComponent && (
            <ModalComponent closeModal={handleCloseModal} {...props} />
          )}
        </div>
      </div>
    </>
  );
};

export default Modal;
