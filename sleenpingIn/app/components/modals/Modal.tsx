'use client'

import { useState, useEffect, useCallback } from "react";
import CloseIcon from "../icons/CloseIcon";

interface ModalProps {
  label: string;
  close: () => void;
  content: React.ReactNode;
  isOpen: boolean;
}

const Modal: React.FC<ModalProps> = ({
  label,
  close,
  content,
  isOpen,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    setShowModal(false);
    setTimeout(() => {
      close();
    }, 600);
  }, [close]);

  if (!showModal) return null;

  return (
    <div className="flex items-center justify-center fixed inset-0 bg-black/60 z-50">
      <div className="relative w-[90%] md:w-[80%] lg:w-[700px] my-6 mx-auto rounded-xl h-auto">
        <div className={`translate duration-600 h-full ${showModal ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-10'}`}>
            <div className="w-full h-auto rounded-xl flex flex-col bg-white relative">
              <header className="h-[60px] flex items-center p-6 rounded-t justify-center relative border-b">
                <div
                  onClick={handleClose}
                  className="p-2 absolute left-3 hover:bg-gray-300 rounded-full cursor-pointer">
                  <CloseIcon/>
                </div>
                <h2 className="text-lg font-semibold">
                  {label}
                </h2>
              </header>
              <section className="p-6">
                {content}
              </section>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
