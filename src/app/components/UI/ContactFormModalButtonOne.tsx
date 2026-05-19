// components/OpenFormButton.tsx
"use client";

import { ReactNode } from "react";
import { useModal } from "../provider/ModalProvider";

export interface ButtonNameProps {
  Button: ReactNode
  Dark: Boolean
}

export default function ContactFormModalButtonOne({ Button, Dark }: ButtonNameProps) {
  const { openModal } = useModal();

  return <button
    onClick={openModal}
    className={`capitalize ${Dark ?? 'dark:invert dark:text-black'} cursor-pointer bg-[linear-gradient(132deg,_#3dbc9b_0%,_#37a7ff_100%)] rounded-sm px-6 py-2.5 text-sm font-medium text-white`}
  >
    {Button}
  </button>;
}
