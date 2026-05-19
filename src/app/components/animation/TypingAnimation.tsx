'use client';

import { useState, useEffect } from 'react';

const words = ['result', 'data', 'AI', 'ROI'];

export default function TypingAnimation() {
  const [wordIndex, setWordIndex] = useState(0);
  const [animateClass, setAnimateClass] = useState<'flip-in' | 'flip-out'>('flip-in');

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimateClass('flip-out');

      const timeout = setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % words.length);
        setAnimateClass('flip-in');
      }, 500);

      return () => clearTimeout(timeout);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`inline-block text-[#123C5D] ${animateClass}`}>
      {words[wordIndex]}
    </span>
  );
}
