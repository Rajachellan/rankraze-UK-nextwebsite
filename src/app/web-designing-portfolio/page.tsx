import PortfolioSlider from "./PortfolioSlider.client";
import { portfolioSections } from "@/content/website-portfolio";
import { Metadata } from "next";
import type { ReactNode } from "react";

/* ── Stat SVG icons ── */
const IconCheck = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);
const IconLayers = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);
const IconSmile = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M8 13s1.5 2 4 2 4-2 4-2" />
    <line x1="9" y1="9" x2="9.01" y2="9" />
    <line x1="15" y1="9" x2="15.01" y2="9" />
  </svg>
);
const IconStar = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);
const IconArrowDown = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19" />
    <polyline points="19 12 12 19 5 12" />
  </svg>
);

export const metadata: Metadata = {
  title: "Website Portfolio - Rankraze",
  description:
    "Explore RankRaze website portfolio featuring modern, user-friendly web design projects built to drive results and brand trust.",
  keywords: [
    "web design portfolio",
    "rankraze portfolio",
    "website design",
    "ui ux portfolio",
    "responsive website design",
  ],
  alternates: {
    canonical: "https://rankraze.us/web-designing-portfolio",
  },
  openGraph: {
    title: "Website Portfolio - Rankraze",
    description:
      "Explore a curated portfolio that highlights our passion, creativity, and dedication.",
    url: "https://rankraze.us/web-designing-portfolio",
    siteName: "Rankraze",
    images: [{ url: "", width: 700, height: 501, alt: "", type: "image/webp" }],
    locale: "en_US",
    type: "article",
  },
};

type Stat = { value: string; label: string; Icon: () => ReactNode };

const STATS: Stat[] = [
  { value: "50+",  label: "Projects Delivered", Icon: IconCheck  },
  { value: "3",    label: "Industry Verticals",  Icon: IconLayers },
  { value: "100%", label: "Client Satisfaction", Icon: IconSmile  },
  { value: "4.8",  label: "Average Rating",      Icon: IconStar   },
];

export default function PortfolioSection() {
  return (
    <>
      {/* ══════════ HERO ══════════ */}
      <section className="relative overflow-hidden flex flex-col items-center justify-center text-center pt-28 pb-24 px-6 bg-gradient-to-b from-[#DAF8F1] via-[#DAF8F1]/40 to-white dark:from-[#3CBA99]/10 dark:via-[#3CBA99]/4 dark:to-[#292639]">

        {/* dot-grid overlay */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none opacity-50"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(60,186,153,0.2) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* blobs */}
        <div
          aria-hidden
          className="absolute w-[420px] h-[420px] rounded-full blur-[72px] bg-[#3CBA99] opacity-30 -top-32 right-[10%] animate-[blobDrift_9s_ease-in-out_infinite_alternate] pointer-events-none"
        />
        <div
          aria-hidden
          className="absolute w-[280px] h-[280px] rounded-full blur-[72px] bg-[#fafdff] opacity-25 -bottom-16 left-[8%] animate-[blobDrift_9s_ease-in-out_3s_infinite_alternate] pointer-events-none"
        />

        {/* eyebrow badge */}
        <span className="relative z-10 inline-flex items-center gap-2 bg-[#3CBA99]/15 border border-[#3CBA99]/35 text-[#113B5C] dark:text-[#7eecd4] rounded-full px-5 py-1.5 text-[11px] font-bold tracking-[1.4px] uppercase mb-6 font-[var(--font-dm-sans)] animate-[fadeUp_0.6s_ease_both]">
          <span className="w-2 h-2 rounded-full bg-[#3CBA99] animate-[dotPulse_2s_ease_infinite] flex-shrink-0" />
          Our Work
        </span>

        {/* H1 */}
        <h1 className="relative z-10 font-[var(--font-bricolage)] text-[clamp(30px,5.5vw,66px)] font-extrabold leading-tight tracking-[-1.5px] text-[#113B5C] dark:text-[#f0fdf9] mb-5 animate-[fadeUp_0.6s_0.1s_ease_both]">
          Websites That{" "}
          <em className="not-italic text-[#3CBA99]">Inspire</em>
          <br />& Drive Results
        </h1>

        {/* subtitle */}
        <p className="relative z-10 max-w-[540px] mb-11 text-base text-[#4a6072] dark:text-[#94a3b8] leading-[1.8] font-[var(--font-dm-sans)] animate-[fadeUp_0.6s_0.2s_ease_both]">
          A curated showcase of our finest digital experiences — from
          pixel-perfect landing pages to full e-commerce powerhouses. Click
          any project to explore it up close.
        </p>

        {/* Stats cards */}
        <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 bg-white dark:bg-white/5 border border-[#3CBA99]/20 dark:border-[#3CBA99]/12 rounded-2xl overflow-hidden max-w-[720px] w-full shadow-[0_8px_40px_rgba(60,186,153,0.12)] animate-[fadeUp_0.6s_0.3s_ease_both]">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className="group relative flex flex-col items-center py-7 px-4 border-r border-b sm:border-b-0 border-[#3CBA99]/12 last:border-r-0 hover:bg-[#f0fdf9] dark:hover:bg-[#3CBA99]/6 transition-colors duration-200"
            >
              {/* hover top accent bar */}
              <div className="absolute top-0 left-8 right-8 h-[2px] rounded-b-full bg-gradient-to-r from-transparent via-[#3CBA99] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* icon bubble */}
              <div className="w-11 h-11 rounded-xl bg-[#DAF8F1] dark:bg-[#3CBA99]/12 flex items-center justify-center mb-3 text-[#3CBA99] group-hover:bg-[#3CBA99] group-hover:text-white transition-all duration-300 shadow-[0_2px_8px_rgba(60,186,153,0.15)]">
                <s.Icon />
              </div>
              {/* value */}
              <div className="font-[var(--font-sora)] text-[28px] font-extrabold text-[#113B5C] dark:text-[#f0fdf9] leading-none">
                {s.value}
              </div>
              {/* label */}
              <div className="text-[10px] text-[#7a8fa0] dark:text-[#64748b] font-semibold tracking-[0.9px] uppercase mt-2 font-[var(--font-dm-sans)] text-center leading-tight">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#7a8fa0] text-[10px] tracking-[1.2px] uppercase font-[var(--font-dm-sans)]">
          <span className="animate-[scrollBounce_2.2s_ease_infinite]">
            <IconArrowDown />
          </span>
          <span>Explore</span>
        </div>
      </section>

      {/* ══════════ PORTFOLIO GRID ══════════ */}
      <div className="bg-[#f8fffe] dark:bg-[var(--prim-dark-bg)] py-20 px-6 transition-colors duration-300">
        <div className="max-w-[1280px] mx-auto">
          <PortfolioSlider sections={portfolioSections} />

          {/* ══════════ BOTTOM CTA ══════════ */}
          <div className="relative mt-24 px-8 py-16 text-center rounded-3xl bg-gradient-to-br from-[#113B5C] to-[#1a4f7a] overflow-hidden">
            {/* radial glow */}
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 70% 30%, rgba(60,186,153,0.22) 0%, transparent 60%)",
              }}
            />
            <h2 className="relative font-[var(--font-bricolage)] text-[clamp(22px,3.5vw,36px)] font-extrabold text-white mb-3">
              Ready to Build Your Dream Website?
            </h2>
            <p className="relative text-white/70 text-[15px] max-w-[440px] mx-auto mb-7 leading-[1.7] font-[var(--font-dm-sans)]">
              Let&apos;s craft a stunning, high-performance website that drives
              real results for your business.
            </p>
            <a
              href="/contact-us"
              className="relative inline-flex items-center gap-2 bg-[#3CBA99] hover:bg-[#2da882] text-white px-9 py-3.5 rounded-full text-[15px] font-bold font-[var(--font-dm-sans)] shadow-[0_6px_28px_rgba(60,186,153,0.4)] hover:shadow-[0_12px_36px_rgba(60,186,153,0.5)] hover:-translate-y-0.5 transition-all duration-200"
            >
              Start Your Project →
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
