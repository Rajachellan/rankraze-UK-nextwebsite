"use client";

import { useEffect, useState } from "react";

export default function WhatsAppButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 1000); // 20 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <a
      href="https://wa.me/919962262210?text=Hello%20I%20want%20to%20know%20about%20your%20services"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Get in touch with top digital marketing agency"
      className="fixed bottom-3 md:bottom-6 left-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-xl hover:bg-green-600 transition animate-bounce"
    >
      <i className="ri-whatsapp-line text-4xl"></i>
       <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-40 animate-ping"></span>
    </a>
  );
}