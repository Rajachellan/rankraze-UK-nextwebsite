'use client';

import { useEffect, useRef, useState } from 'react';

type Testimonial = {
  text: string;
  author: string;
};

const testimonials: Testimonial[] = [
  {
    text: 'Wonderful team with great creative energy—had a nice experience working with Rankraze. Looking forward to handling our promotional work with them!',
    author: 'Shafeeq K Mohammed',
  },
  {
    text: 'Friendly atmosphere, highly professional and knowledgeable people to work with. I had a great experience collaborating with a web development team! Recommending their services speaks volumes about the quality of their work.',
    author: 'Kaviya Priya S',
  },
  {
    text: 'Had a good experience in working with their team for my needs in digital marketing services. Their staffs were professional and client relationship was good. Worth the money we spend.',
    author: 'Karthi',
  },
  {
    text: 'Had a really good experience working with Rankraze team. They understood our business requirements clearly and guided us in the right direction for digital marketing. Looking forward to continuing our work with them.',
    author: 'Arun Kumar',
  },
  {
    text: 'Professional team with good knowledge in SEO and online marketing. They explained everything in a simple way and helped us improve our online presence step by step.',
    author: 'Pradeep S',
  },
  {
    text: 'Nice experience working with Rankraze. The team is very supportive and responsive. They gave practical suggestions for our marketing and helped us understand how things work.',
    author: 'Divya R',
  },
  {
    text: 'We worked with Rankraze for our website and digital marketing. The team was friendly and handled everything smoothly. Overall a good experience.',
    author: 'Vignesh Kumar',
  },
  {
    text: 'Good team to work with. They are clear in communication and focus on delivering results. Happy with the way they handled our digital marketing requirements.',
    author: 'Manoj Kumar',
  },
  {
    text: 'Rankraze team is very professional and easy to work with. They understood our needs and provided the right solutions without overcomplicating things.',
    author: 'Keerthana S',
  },
  {
    text: 'It was a smooth and positive experience working with Rankraze. The team is knowledgeable and always ready to help. Would definitely recommend their services.',
    author: 'Rakesh M',
  },
];

const TOTAL = testimonials.length;

// Left chevron SVG
function ChevronLeft({ active }: { active: boolean }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="w-3 h-3 transition-colors duration-300"
      style={{ stroke: active ? '#37a7ff' : '#c0c0c0' }}
    >
      <path d="M10 3L5 8l5 5" />
    </svg>
  );
}

// Right chevron SVG
function ChevronRight({ active }: { active: boolean }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="w-3 h-3 transition-colors duration-300"
      style={{ stroke: active ? '#37a7ff' : '#c0c0c0' }}
    >
      <path d="M6 3l5 5-5 5" />
    </svg>
  );
}

export default function ClientTestimonialSlider({ vertical = false }) {
  const [index, setIndex] = useState(0);
  const [pause, setPause] = useState(false);
  const touchStart = useRef<number>(0);

  const goTo = (i: number) => setIndex((i + TOTAL) % TOTAL);
  const prev = () => goTo(index - 1);
  const next = () => goTo(index + 1);

  // Auto-slide every 4 seconds
  useEffect(() => {
    if (pause) return;
    const interval = setInterval(() => {
      setIndex((p) => (p + 1) % TOTAL);
    }, 4000);
    return () => clearInterval(interval);
  }, [pause]);

  // Touch swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = vertical ? e.touches[0].clientY : e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const end = vertical ? e.changedTouches[0].clientY : e.changedTouches[0].clientX;
    const delta = end - touchStart.current;
    if (Math.abs(delta) < 50) return;
    delta > 0 ? prev() : next();
  };

  const translateStyle = vertical
    ? `translateY(-${index * 100}%)`
    : `translateX(-${index * (100 / TOTAL)}%)`;

  return (
    <div className="flex flex-col items-center w-full">
      {/* Slide track */}
      <div
        className="w-full max-w-[700px] overflow-hidden nunito relative"
        onMouseEnter={() => setPause(true)}
        onMouseLeave={() => setPause(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className={`flex transition-transform duration-700 ease-in-out ${
            vertical ? 'flex-col h-[300px]' : ''
          }`}
          style={{
            width: vertical ? '100%' : `${TOTAL * 100}%`,
            transform: translateStyle,
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center gap-2.5 p-2 md:p-4"
              style={{ width: vertical ? '100%' : `${100 / TOTAL}%`, flexShrink: 0 }}
            >
              {/* quote mark */}
              <span
                className="text-4xl leading-none mb-1 select-none"
                style={{ color: '#37a7ff', opacity: 0.35, fontFamily: 'Georgia, serif' }}
              >
                "
              </span>
              <p className="text-[13px] md:text-[15px] text-center text-[#6a6a6acd] dark:text-[#94B4D4] font-medium max-w-[600px]">
                {t.text}
              </p>
              <p className="text-sm text-[#464646] dark:text-[#E2EEFF] font-bold capitalize text-center max-w-[600px] mt-1">
                — {t.author}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Nav: prev arrow · dots · next arrow */}
      <div className="mt-5 flex items-center gap-3">
        {/* Prev button */}
        <button
          onClick={prev}
          aria-label="Previous testimonial"
          className="w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-200 hover:scale-110 active:scale-95"
          style={{
            borderColor: '#e5e7eb',
            background: 'transparent',
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLButtonElement).style.borderColor = '#37a7ff')
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLButtonElement).style.borderColor = '#e5e7eb')
          }
        >
          <ChevronLeft active={false} />
        </button>

        {/* Dot indicators */}
        <div className="flex items-center gap-[7px]">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className="relative flex items-center justify-center transition-all duration-500 ease-in-out focus:outline-none"
              style={{ width: index === i ? 22 : 8, height: 8 }}
            >
              <span
                className="block rounded-full transition-all duration-500 ease-in-out"
                style={{
                  width: '100%',
                  height: index === i ? 8 : 8,
                  background:
                    index === i
                      ? 'linear-gradient(90deg,#37a7ff,#6bffe4)'
                      : '#d1d5db',
                  boxShadow:
                    index === i ? '0 0 6px rgba(55,167,255,0.45)' : 'none',
                }}
              />
              {/* ping ring on active */}
              {index === i && (
                <span
                  className="absolute inset-0 rounded-full animate-ping"
                  style={{
                    background: 'rgba(55,167,255,0.25)',
                    animationDuration: '1.4s',
                  }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Next button */}
        <button
          onClick={next}
          aria-label="Next testimonial"
          className="w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-200 hover:scale-110 active:scale-95"
          style={{
            borderColor: '#e5e7eb',
            background: 'transparent',
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLButtonElement).style.borderColor = '#37a7ff')
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLButtonElement).style.borderColor = '#e5e7eb')
          }
        >
          <ChevronRight active={false} />
        </button>
      </div>

      {/* Progress bar */}
      <div
        className="mt-3 h-[2px] rounded-full overflow-hidden"
        style={{ width: 120, background: '#f0f0f0' }}
      >
        <div
          className="h-full rounded-full transition-all duration-300 ease-linear"
          style={{
            width: `${((index + 1) / TOTAL) * 100}%`,
            background: 'linear-gradient(90deg,#37a7ff,#6bffe4)',
          }}
        />
      </div>
      <p className="mt-1 text-[11px] text-gray-400 tabular-nums">
        {index + 1} / {TOTAL}
      </p>
    </div>
  );
}