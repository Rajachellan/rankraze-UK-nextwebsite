"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollAnimationWrapperProps {
  children: React.ReactNode;
  className?: string;
  animationClass?: string;
  threshold?: number;
  delay?: number;
}

export default function ScrollAnimationWrapper({ 
  children, 
  className = "",
  animationClass = "opacity-100 translate-y-0",
  threshold = 0.1,
  delay = 0
}: ScrollAnimationWrapperProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}s` }}
      className={`transition-all duration-700 ease-out transform will-change-[opacity,transform] ${
        isVisible ? animationClass : "opacity-0 translate-y-8"
      } ${className}`} >
      {children}
    </div>
  );
}
