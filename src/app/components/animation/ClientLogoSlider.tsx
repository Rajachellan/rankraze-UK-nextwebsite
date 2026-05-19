"use client";

import Image from "next/image";
import React, { useRef, useLayoutEffect, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "motion/react";

interface VelocityMapping {
  input: [number, number];
  output: [number, number];
}

interface VelocityRowProps {
  items: string[];
  baseVelocity: number;
  scrollContainerRef?: React.RefObject<HTMLElement>;
  className?: string;
  damping?: number;
  stiffness?: number;
  numCopies?: number;
  velocityMapping?: VelocityMapping;
  parallaxClassName?: string;
  scrollerClassName?: string;
  parallaxStyle?: React.CSSProperties;
  scrollerStyle?: React.CSSProperties;
  imageSizes?: string;
  imageQuality?: number;
}

interface ScrollVelocityImagesProps {
  scrollContainerRef?: React.RefObject<HTMLElement>;
  images: string[][];
  velocity?: number;
  className?: string;
  damping?: number;
  stiffness?: number;
  numCopies?: number;
  velocityMapping?: VelocityMapping;
  parallaxClassName?: string;
  scrollerClassName?: string;
  parallaxStyle?: React.CSSProperties;
  scrollerStyle?: React.CSSProperties;
  imageSizes?: string;
  imageQuality?: number;
}

function useElementWidth<T extends HTMLElement>(ref: React.RefObject<T | null>): number {
  const [width, setWidth] = useState(0);

  // ResizeObserver fires synchronously on the first observe() call with the element's
  // current size — no getBoundingClientRect or RAF needed, which avoids forced reflows.
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === el) {
          const w = Math.round(entry.contentRect.width);
          setWidth(w);
        }
      }
    });

    ro.observe(el);
    return () => ro.disconnect();
  }, [ref]);

  return width;
}

function VelocityRow({
  items,
  baseVelocity,
  scrollContainerRef,
  className = "",
  damping,
  stiffness,
  numCopies,
  velocityMapping,
  parallaxClassName,
  scrollerClassName,
  parallaxStyle,
  scrollerStyle,
  imageSizes,
  imageQuality,
}: VelocityRowProps) {
  const baseX = useMotionValue(0);
  const scrollOptions = scrollContainerRef ? { container: scrollContainerRef } : {};
  const { scrollY } = useScroll(scrollOptions);
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: damping ?? 50,
    stiffness: stiffness ?? 400,
  });
  const velocityFactor = useTransform(
    smoothVelocity,
    velocityMapping?.input || [0, 1000],
    velocityMapping?.output || [0, 5],
    { clamp: false }
  );

  const copyRef = useRef<HTMLDivElement>(null);
  const copyWidth = useElementWidth(copyRef);
  const copyWidthRef = useRef(0);

  // Sync the latest measured width into a mutable ref to avoid stale closures in useTransform
  React.useEffect(() => {
    copyWidthRef.current = copyWidth;
  }, [copyWidth]);

  function wrap(min: number, max: number, v: number): number {
    const range = max - min;
    const mod = (((v - min) % range) + range) % range;
    return mod + min;
  }

  const x = useTransform(baseX, (v) => {
    const w = copyWidthRef.current;
    if (w === 0) return "0px";
    return `${wrap(-w, 0, v)}px`;
  });

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    // 1. Determine direction BEFORE calculating movement to prevent a 1-frame jitter (flicker)
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    // 2. Calculate base movement with the correct direction
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    // 3. Apply scroll-based speed boost
    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  const copies = [];
  for (let i = 0; i < numCopies!; i++) {
    copies.push(
      <div className="flex-shrink-0 flex gap-20 dark:grayscale-100 dark:invert dark:brightness-100 mr-20" key={i} ref={i === 0 ? copyRef : null}>
        {items.map((src, idx) => (
          <div key={idx} className="flex items-center justify-center w-[120px] h-[90px] px-1.5 py-7">
            <Image
              key={`${i}-${idx}`}
              src={src}
              alt={`client-logo-${idx}`}
              width={120}
              height={120}
              className="custom-scroll-text max-h-fit"
              sizes={imageSizes || "120px"}
              quality={imageQuality || 65}
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`${parallaxClassName} relative overflow-hidden`} style={parallaxStyle}>
      <motion.div
        className={`${scrollerClassName} flex whitespace-nowrap will-change-transform`}
        style={{ x, ...scrollerStyle }}
      >
        {copies}
      </motion.div>
    </div>
  );
}

export const ScrollVelocityImages: React.FC<ScrollVelocityImagesProps> = ({
  scrollContainerRef,
  images = [],
  velocity = 100,
  className = "",
  damping = 50,
  stiffness = 400,
  numCopies = 2,
  velocityMapping = { input: [0, 1000], output: [0, 5] },
  parallaxClassName,
  scrollerClassName,
  parallaxStyle,
  scrollerStyle,

}) => {
  return (
    <section className="flex flex-col gap-8">
      {images.map((rowImages, index) => (
        <VelocityRow
          key={index}
          items={rowImages}
          baseVelocity={index % 2 !== 0 ? -velocity : velocity}
          scrollContainerRef={scrollContainerRef}
          className={className}
          damping={damping}
          stiffness={stiffness}
          numCopies={numCopies}
          velocityMapping={velocityMapping}
          parallaxClassName={parallaxClassName}
          scrollerClassName={scrollerClassName}
          parallaxStyle={parallaxStyle}
          scrollerStyle={scrollerStyle}

        />
      ))}
    </section>
  );
};
