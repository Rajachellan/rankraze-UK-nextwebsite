'use client';

import dynamic from 'next/dynamic';

const TypingAnimation = dynamic(
  () => import('./animation/TypingAnimation'),
  {
    ssr: false,
    loading: () => <span> Result </span>,
  }
);

export default TypingAnimation;
