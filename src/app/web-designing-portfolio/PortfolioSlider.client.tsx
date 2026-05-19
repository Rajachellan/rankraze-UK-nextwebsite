"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";

/* ══════════════ SVG Icon components ══════════════ */
const IcMonitor = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);
const IcCart = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
);
const IcTrend = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);
const IcGrid = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
  </svg>
);
const IcImage = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <polyline points="21 15 16 10 5 21" />
  </svg>
);
const IcGlobe = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);
const IcClose = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

/* ─────────────────── Types ─────────────────── */
type PortfolioItem = {
  id: string | number;
  image: string;
  title: string;
  description?: string;
  liveUrl?: string;
};

type Section = {
  heading: string;
  subHeading?: string;
  portfolios: PortfolioItem[];
};

/* ─────────── Section meta (brand colours) ─────────── */
const SECTION_META = [
  { Icon: IcMonitor, textColor: "text-[#3CBA99]", bgColor: "bg-[#DAF8F1]", border: "border-[#b2ede0]" },
  { Icon: IcCart,    textColor: "text-[#0ea5e9]", bgColor: "bg-[#e0f2fe]", border: "border-[#bae6fd]" },
  { Icon: IcTrend,   textColor: "text-[#113B5C]", bgColor: "bg-[#dbeafe]", border: "border-[#bfdbfe]" },
];

/* ════════════════════ CARD ════════════════════ */
function PortfolioCard({
  item,
  onClick,
}: {
  item: PortfolioItem;
  onClick: () => void;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = wrapRef.current;
      if (!el) return;
      const { left, top, width, height } = el.getBoundingClientRect();
      const x = ((e.clientX - left) / width - 0.5) * 14;
      const y = -((e.clientY - top) / height - 0.5) * 14;
      setTilt({ x, y });
    },
    []
  );

  return (
    /* perspective wrapper */
    <div
      ref={wrapRef}
      className="cursor-pointer"
      style={{ perspective: "1000px" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setHovered(false); }}
      onClick={onClick}
    >
      {/* tilt + group for child hover variants */}
      <div
        className="group relative rounded-2xl overflow-hidden bg-white dark:bg-[#0A1628] border border-[#3CBA99]/15 dark:border-[rgba(255,255,255,0.08)] shadow-[0_2px_16px_rgba(17,59,92,0.07)] hover:shadow-[0_20px_52px_rgba(17,59,92,0.15)] transition-shadow duration-300"
        style={{
          transformStyle: "preserve-3d",
          transform: hovered
            ? `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`
            : "none",
          transition: "transform 0.15s ease",
        }}
      >
        {/* screenshot */}
        <img
          src={item.image}
          alt={item.title}
          className="w-full aspect-[16/10] object-cover object-top block transition-all duration-500 ease-in-out group-hover:scale-[1.06] group-hover:brightness-50"
        />

        {/* shimmer sweep on hover */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none rounded-2xl group-hover:animate-[shimmerSweep_0.55s_ease]"
          style={{
            background:
              "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.07) 50%, transparent 60%)",
          }}
        />

        {/* always-visible bottom label */}
        <div
          className="absolute bottom-0 left-0 right-0 px-4 py-3 rounded-b-2xl"
          style={{
            background:
              "linear-gradient(to top, rgba(17,59,92,0.92) 0%, transparent 100%)",
          }}
        >
          <p className="text-[15px] font-bold text-white font-[var(--font-sora)]">
            {item.title}
          </p>
          {item.description && (
            <p className="text-[11px] text-white/70 mt-0.5 tracking-[0.5px] font-[var(--font-dm-sans)]">
              {item.description}
            </p>
          )}
        </div>

        {/* hover CTA — hidden by default, shown on group-hover */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-[#3CBA99] hover:bg-[#2da882] text-white border-none px-6 py-2.5 rounded-full text-[13px] font-bold tracking-[0.3px] cursor-pointer shadow-[0_4px_18px_rgba(60,186,153,0.5)] hover:scale-105 hover:shadow-[0_8px_28px_rgba(60,186,153,0.65)] transition-all duration-200 font-[var(--font-dm-sans)]">
            Preview Project →
          </button>
        </div>
      </div>
    </div>
  );
}

/* ════════════════════ LIGHTBOX ════════════════════ */
function Lightbox({
  item,
  onClose,
  onPrev,
  onNext,
}: {
  item: PortfolioItem;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const [tab, setTab] = useState<"screenshot" | "live">("screenshot");

  /* reset to screenshot tab whenever the item changes */
  useEffect(() => { setTab("screenshot"); }, [item]);

  /* keyboard nav */
  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [onClose, onPrev, onNext]);

  /* lock body scroll */
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    /* backdrop */
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-[#113B5C]/80 backdrop-blur-[6px] animate-[lbIn_0.22s_ease]"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* modal box */}
      <div className="bg-white dark:bg-[#0A1628] rounded-[22px] w-full max-w-[960px] max-h-[92vh] flex flex-col overflow-hidden shadow-[0_32px_80px_rgba(17,59,92,0.35)] animate-[lbUp_0.28s_ease]">

        {/* ── header ── */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#3CBA99]/15 flex-shrink-0">
          {/* tabs */}
          <div className="flex gap-1.5 bg-[#f0fdf9] dark:bg-[#3CBA99]/7 rounded-full p-1 border border-[#3CBA99]/20">
            <button
              onClick={() => setTab("screenshot")}
              className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[13px] font-semibold transition-all duration-200 font-[var(--font-dm-sans)] ${tab === "screenshot"
                  ? "bg-[#3CBA99] text-white shadow-[0_3px_12px_rgba(60,186,153,0.4)]"
                  : "bg-transparent text-[#4a6072] dark:text-[#94a3b8] hover:text-[#113B5C] dark:hover:text-[#7eecd4]"
                }`}
            >
              <IcImage /> Screenshot
            </button>
            {item.liveUrl && (
              <button
                onClick={() => setTab("live")}
                className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[13px] font-semibold transition-all duration-200 font-[var(--font-dm-sans)] ${tab === "live"
                    ? "bg-[#3CBA99] text-white shadow-[0_3px_12px_rgba(60,186,153,0.4)]"
                    : "bg-transparent text-[#4a6072] dark:text-[#94a3b8] hover:text-[#113B5C] dark:hover:text-[#7eecd4]"
                  }`}
              >
                <IcGlobe /> Live Preview
              </button>
            )}
          </div>

          {/* close */}
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 dark:bg-white/8 hover:bg-slate-200 dark:hover:bg-white/15 text-[#113B5C] dark:text-[#f0fdf9] transition-colors duration-200"
          >
            <IcClose />
          </button>
        </div>

        {/* ── body ── */}
        {tab === "screenshot" ? (
          <div className="flex-1 min-h-0 flex items-center justify-center bg-[#f8fffe] dark:bg-[#050D1A] overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="max-w-full max-h-[58vh] object-contain"
            />
          </div>
        ) : (
          <div className="flex-1 min-h-0 flex flex-col overflow-hidden">
            {/* browser chrome */}
            <div className="flex items-center gap-2.5 px-4 py-2.5 bg-slate-100 dark:bg-[#1a1729] border-b border-[#3CBA99]/15 flex-shrink-0">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <div className="flex-1 bg-white dark:bg-white/6 border border-slate-200 dark:border-white/8 rounded-md px-3 py-1 text-[12px] text-slate-500 dark:text-[#94a3b8] font-[var(--font-dm-sans)]">
                {item.liveUrl}
              </div>
            </div>
            <iframe
              src={item.liveUrl}
              title={item.title}
              className="w-full h-[55vh] border-none"
              sandbox="allow-scripts allow-same-origin allow-forms"
            />
          </div>
        )}

        {/* ── footer ── */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-[#3CBA99]/15 bg-[#f8fffe] dark:bg-[#0A1628] flex-shrink-0">
          {/* prev / next */}
          <div className="flex gap-2">
            <button
              onClick={onPrev}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#f0fdf9] dark:bg-[#3CBA99]/8 border border-[#3CBA99]/30 text-[#113B5C] dark:text-[#7eecd4] text-[17px] hover:bg-[#3CBA99] hover:text-white hover:border-[#3CBA99] transition-all duration-200"
            >←</button>
            <button
              onClick={onNext}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#f0fdf9] dark:bg-[#3CBA99]/8 border border-[#3CBA99]/30 text-[#113B5C] dark:text-[#7eecd4] text-[17px] hover:bg-[#3CBA99] hover:text-white hover:border-[#3CBA99] transition-all duration-200"
            >→</button>
          </div>

          {/* title + tag */}
          <div className="text-center">
            <p className="font-[var(--font-sora)] text-[17px] font-bold text-[#113B5C] dark:text-[#f0fdf9]">
              {item.title}
            </p>
            {item.description && (
              <p className="text-[12px] font-semibold text-[#3CBA99] mt-0.5 font-[var(--font-dm-sans)]">
                {item.description}
              </p>
            )}
          </div>

          {/* open live or spacer */}
          {item.liveUrl ? (
            <a
              href={item.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#113B5C] hover:bg-[#3CBA99] text-white px-5 py-2.5 rounded-full text-[13px] font-bold font-[var(--font-dm-sans)] shadow-[0_4px_16px_rgba(17,59,92,0.3)] hover:-translate-y-0.5 transition-all duration-200"
            >
              Open Site ↗
            </a>
          ) : (
            <div className="w-24" />
          )}
        </div>
      </div>
    </div>
  );
}

/* ════════════════════ GRID SECTION ════════════════════ */
function PortfolioGrid({
  section,
  sectionIndex,
}: {
  section: Section;
  sectionIndex: number;
}) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const meta = SECTION_META[sectionIndex % SECTION_META.length];

  const total = section.portfolios.length;
  const open = (i: number) => setActiveIdx(i);
  const close = () => setActiveIdx(null);
  const prev = () => setActiveIdx((i) => i === null ? null : (i - 1 + total) % total);
  const next = () => setActiveIdx((i) => i === null ? null : (i + 1) % total);

  return (
    <div>
      {/* section header */}
      <div className="text-center mb-11">
        <span
          className={`inline-flex items-center gap-2 ${meta.bgColor} ${meta.textColor} border ${meta.border} rounded-full px-4 py-[5px] text-[11px] font-bold tracking-[1px] uppercase mb-3.5 font-[var(--font-dm-sans)]`}
        >
          <meta.Icon /> {section.heading}
        </span>
        <h2 className="font-[var(--font-bricolage)] text-[clamp(22px,3.5vw,36px)] font-extrabold text-[#113B5C] dark:text-[#e2f5f0] mb-3">
          {section.heading}
        </h2>
        {section.subHeading && (
          <p className="text-[15px] text-[#5e7a8f] dark:text-[#94a3b8] max-w-[600px] mx-auto leading-[1.75] font-[var(--font-dm-sans)]">
            {section.subHeading}
          </p>
        )}
      </div>

      {/* card grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[22px]">
        {section.portfolios.map((item, i) => (
          <div
            key={item.id}
            className="animate-[fadeUp_0.5s_ease_both]"
            style={{ animationDelay: `${i * 65}ms` }}
          >
            <PortfolioCard item={item} onClick={() => open(i)} />
          </div>
        ))}
      </div>

      {/* lightbox */}
      {activeIdx !== null && (
        <Lightbox
          item={section.portfolios[activeIdx]}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </div>
  );
}

/* ════════════════════ TABS + ROOT ════════════════════ */
const TABS = [
  { label: "All Projects",        Icon: IcGrid    },
  { label: "Responsive & Modern", Icon: IcMonitor },
  { label: "Custom E-Commerce",   Icon: IcCart    },
  { label: "Marketing & Landing", Icon: IcTrend   },
];

export default function PortfolioSlider({ sections }: { sections: Section[] }) {
  const [activeTab, setActiveTab] = useState(0);

  const filtered =
    activeTab === 0 ? sections : [sections[activeTab - 1]].filter(Boolean);

  return (
    <div>
      {/* ── Tab bar ── */}
      <div className="flex flex-wrap gap-2.5 justify-center mb-14">
        {TABS.map((t, i) => (
          <button
            key={t.label}
            onClick={() => setActiveTab(i)}
            className={`inline-flex items-center gap-2 px-[22px] py-2.5 rounded-full text-[13px] font-semibold border transition-all duration-200 font-[var(--font-dm-sans)] ${activeTab === i
                ? "bg-[#3CBA99] border-[#3CBA99] text-white shadow-[0_5px_20px_rgba(60,186,153,0.38)]"
                : "bg-[#f0fdf9] dark:bg-[#3CBA99]/6 border-[#3CBA99]/25 dark:border-[#3CBA99]/15 text-[#4a6072] dark:text-[#94a3b8] hover:border-[#3CBA99] hover:bg-[#DAF8F1] dark:hover:bg-[#3CBA99]/12 hover:text-[#113B5C] dark:hover:text-[#7eecd4]"
              }`}
          >
            <t.Icon />
            <span>{t.label}</span>
          </button>
        ))}
      </div>

      {/* ── Sections ── */}
      <div className="flex flex-col gap-[88px]">
        {filtered.map((section, idx) => {
          const realIdx = activeTab === 0 ? idx : activeTab - 1;
          return (
            <div key={section.heading}>
              <PortfolioGrid section={section} sectionIndex={realIdx} />
              {idx < filtered.length - 1 && (
                <div className="w-full h-px mt-[70px] bg-gradient-to-r from-transparent via-[#3CBA99]/25 to-transparent" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
