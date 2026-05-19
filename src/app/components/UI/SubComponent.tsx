"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { BadgeCheck, Clock, Star, ArrowRight } from "lucide-react";

import google from "../../../../public/upload/google_original-removebg-preview.png";
import semrush from "../../../../public/upload/semrush-removebg-preview.png";
import linkedin from "../../../../public/upload/linkedin_original-removebg-preview.png";

const partners = [
  { name: "Google", type: "Search & Ads", logo: google },
  {
    name: "Meta",
    type: "Social Advertising",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/1280px-Meta_Platforms_Inc._logo.svg.png",
  },
  {
    name: "Shopify",
    type: "E-Commerce",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/1280px-Shopify_logo_2018.svg.png",
  },
  { name: "LinkedIn", type: "B2B Marketing", logo: linkedin },
  {
    name: "HubSpot",
    type: "CRM & Inbound",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg",
  },
  { name: "Semrush", type: "SEO & Analytics", logo: semrush },
];

export default function PartnersSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(false);

  // 🔥 Scroll trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect(); // animate once
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="bg-white dark:bg-[#050D1A] px-6 md:px-16 relative overflow-hidden"
    >
      {/* Decorative glow */}
      <div className="pointer-events-none absolute -top-40 -right-24 w-[480px] h-[480px] rounded-full bg-[radial-gradient(circle,rgba(249,115,22,0.06)_0%,transparent_65%)]" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* ── Header ── */}
        <div
          className={`flex flex-wrap items-end justify-between gap-6 mb-14 transition-all duration-700 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-2xl mx-auto text-center">

            {/* Pill */}
            <div className="inline-flex items-center gap-2 bg-teal-50 dark:bg-[rgba(60,186,153,0.08)] border mt-10 border-teal-200 dark:border-[rgba(60,186,153,0.2)] rounded-full px-[18px] py-2 text-sm font-medium text-teal-800 dark:text-[#3CBA99]">
              <span className="w-[7px] h-[7px] rounded-full bg-[var(--primary-green)] animate-pulse block" />
              6 Official Partnerships
            </div>

            {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold dark:text-[#E2EEFF] my-2 capitalize text-center">
  Integrated with the world’s 
  <em className="not-italic text-[var(--primary-green)] ml-2">
    leading platforms
  </em>
</h2>

            {/* Description */}
            <p className="mt-6 text-[15px] font-light text-slate-600 dark:text-[#94B4D4] leading-[1.75] max-w-[500px] mx-auto">
              Working alongside the world's most powerful platforms to deliver
              better outcomes for your brand.
            </p>
          </div>
        </div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-3 md:grid-cols-6 border border-slate-200 dark:border-[rgba(255,255,255,0.08)] rounded-2xl overflow-hidden">
          {partners.map((p, i) => (
            <div
              key={p.name}
              className={`group relative flex flex-col items-center justify-center gap-3.5 px-4 py-10 bg-white dark:bg-[#0A1628] overflow-hidden transition-all duration-700 hover:bg-teal-50 dark:hover:bg-[#0D1E35]
              ${i !== partners.length - 1 ? "border-r border-slate-200 dark:border-[rgba(255,255,255,0.08)]" : ""}
              ${i < 3 ? "border-b border-slate-200 dark:border-[rgba(255,255,255,0.08)] md:border-b-0" : ""}
              ${
                show
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }} // 🔥 stagger
            >
              {/* Bottom bar */}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-9 h-[3px] rounded-t bg-[var(--primary-green)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

              {/* Logo: dark mode uses brightness+invert so dark/black marks read on navy (grayscale alone stayed too dark). */}
              <div className="md:w-26 md:h-26 h-20 w-20 rounded-full bg-teal-50 dark:bg-white/12 border border-teal-200 dark:border-white/20 flex items-center justify-center p-3 overflow-hidden transition-all duration-200 group-hover:shadow-[0_0_0_4px_#dbfff7] dark:group-hover:border-[#5EEAD4]/40">
                <Image
                  src={p.logo}
                  alt={p.name}
                  width={40}
                  height={40}
                  className="object-contain w-full h-full transition-[filter,opacity] duration-300 dark:brightness-0 dark:invert dark:opacity-95 dark:group-hover:brightness-100 dark:group-hover:invert-0 dark:group-hover:opacity-100"
                  unoptimized
                />
              </div>

              <p className="text-[13px] font-bold text-[var(--primary-blue)] dark:text-gray-100 text-center">
                {p.name}
              </p>

              <p className="text-[10.5px] text-slate-400 dark:text-gray-400 text-center -mt-2">
                {p.type}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}