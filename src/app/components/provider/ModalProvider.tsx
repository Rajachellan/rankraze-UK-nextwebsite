"use client";

import { createContext, useContext, useState } from "react";
import ContactFormModal from "../forms/ContactFormModal";

type ModalContextType = {
  openModal: () => void;
  closeModal: () => void;
};

const ModalContext = createContext<ModalContextType | null>(null);

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModal must be used inside ModalProvider");
  return ctx;
}

export default function ModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        openModal: () => setIsOpen(true),
        closeModal: () => setIsOpen(false),
      }}
    >
      {children}

      {/* SINGLE modal instance */}
      <ContactFormModal isOpen={isOpen} onClose={() => setIsOpen(false)} defaultMessage={"Select Service"} />
    </ModalContext.Provider>
  );
}
