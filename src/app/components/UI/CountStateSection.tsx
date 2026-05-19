"use client";

import { useRef, useState, useEffect } from "react";
import CountUp from "./CountUp";

// 🔹 Animation function
const fadeUp = (
  vis: boolean,
  delay: number = 0.1
): React.CSSProperties => ({
  opacity: vis ? 1 : 0,
  transform: vis
    ? "translate3d(0,0,0)"
    : "translate3d(0,36px,0)",
  transition: `opacity .85s cubic-bezier(.22,.61,.36,1) ${delay}s, transform .85s cubic-bezier(.22,.61,.36,1) ${delay}s`,
});

// 🔹 Hook
const useInView = (threshold = 0) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold });

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible] as const;
};
export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
const [ref, visIn] = useInView();


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // ── stop observing after first trigger
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="grid grid-cols-1 max-w-7xl animate-fade-up mx-auto my-10 md:grid-cols-2 lg:grid-cols-4 gap-8"
    >
      <div className="text-center">
        <h3 className="text-[var(--primary-blue)] dark:text-[var(--prim-dark-glow)] font-bold text-4xl">
          {isVisible && <CountUp end={127} suffix="+" />}
        </h3>
        <p className="text-[var(--primary-green)] dark:text-[#6EE7D8] font-semibold text-xl">
          Chennai Business Ranked #1
        </p>
      </div>

      <div className="text-center">
        <h3 className="text-[var(--primary-blue)] dark:text-[var(--prim-dark-glow)] font-bold text-4xl">
          {isVisible && <CountUp end={4} suffix="Cr+" />}
        </h3>
        <p className="text-[var(--primary-green)] dark:text-[#6EE7D8] font-semibold text-xl">
          Client Revenue Generated
        </p>
      </div>

      <div className="text-center">
        <h3 className="text-[var(--primary-blue)] dark:text-[var(--prim-dark-glow)] font-bold text-4xl">
          {isVisible && <CountUp end={4.2} suffix="M+" />}
        </h3>
        <p className="text-[var(--primary-green)] dark:text-[#6EE7D8] font-semibold text-xl">
          Organic Leads Delivered
        </p>
      </div>

      <div className="text-center">
        <h3 className="text-[var(--primary-blue)] dark:text-[var(--prim-dark-glow)] font-bold text-4xl">
          {isVisible && <CountUp end={347} suffix="%" />}
        </h3>
        <p className="text-[var(--primary-green)] dark:text-[#6EE7D8] font-semibold text-xl">
          Average Traffic Growth
        </p>
      </div>
    </div>
  );
}