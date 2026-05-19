"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";

type ColorKey = "green"|"blue"|"amber"|"purple"|"coral"|"teal"|"pink"|"indigo";
interface Tile { color: ColorKey; name: string; desc: string; href: string; icon: React.ReactNode; }

const stripeGradient: Record<ColorKey,string> = {
  green:"linear-gradient(90deg,#3cba99,#9ae3cc)",  blue:"linear-gradient(90deg,#185fa5,#60abe0)",
  amber:"linear-gradient(90deg,#c47a0c,#f0a830)",  purple:"linear-gradient(90deg,#534ab7,#8f87e0)",
  coral:"linear-gradient(90deg,#b03a1a,#e05d35)",  teal:"linear-gradient(90deg,#0f6e56,#3cba99)",
  pink:"linear-gradient(90deg,#a02d55,#d95a80)",   indigo:"linear-gradient(90deg,#3c3489,#6560cc)",
};
const icoHoverBg:     Record<ColorKey,string> = { green:"#edf9f6",blue:"#e5f0fb",amber:"#faecd8",purple:"#eeecfe",coral:"#faebe6",teal:"#edf9f6",pink:"#fbe9ef",indigo:"#eeecfe" };
const icoHoverBorder: Record<ColorKey,string> = { green:"#c8ede4",blue:"#b0cdf4",amber:"#e8d5ac",purple:"#cac7f5",coral:"#f2bfad",teal:"#c8ede4",pink:"#f3bdcf",indigo:"#cac7f5" };
const icoHoverStroke: Record<ColorKey,string> = { green:"#3cba99",blue:"#185fa5",amber:"#c47a0c",purple:"#534ab7",coral:"#b03a1a",teal:"#0f6e56",pink:"#a02d55",indigo:"#3c3489" };

const S = (path: React.ReactNode) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
    style={{ width:24, height:24, stroke:"inherit" }}>{path}</svg>
);

const TILES: Tile[] = [
  { color:"green",  name:"Real Estate",        href:"/contact",
    desc:"Lead generation and local SEO for developers, agents, and consultants to reach active property buyers.",
    icon: S(<><path d="M3 10.5L12 3l9 7.5V21H3V10.5Z"/><path d="M9 21V14h6v7"/></>), },
  { color:"blue",   name:"Healthcare",          href:"/contact",
    desc:"Helping clinics, hospitals, and health brands reach more patients through search, social, and reputation marketing.",
    icon: S(<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>), },
  { color:"amber",  name:"Ecommerce",           href:"/contact",
    desc:"Drive traffic, reduce cart abandonment, and scale revenue through SEO, paid ads, and conversion optimisation.",
    icon: S(<><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></>), },
  { color:"purple", name:"Education",           href:"/contact",
    desc:"Student acquisition strategies for institutions, coaching centers, and online course providers across the US.",
    icon: S(<><path d="M22 10v6M2 10l10-5 10 5-10 5-10-5Z"/><path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5"/></>), },
  { color:"coral",  name:"Startups",            href:"/contact",
    desc:"Early-stage brand visibility and customer acquisition to accelerate your go-to-market and build initial traction.",
    icon: S(<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8Z"/>), },
  { color:"teal",   name:"Hospitality",         href:"/contact",
    desc:"Increase direct bookings and brand awareness for hotels, resorts, restaurants, and travel companies.",
    icon: S(<><path d="M3 7V17a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7"/><path d="M21 7H3"/><path d="M12 7V3"/><path d="M8 3h8"/></>), },
  { color:"pink",   name:"B2B & Manufacturing", href:"/contact",
    desc:"Brand authority and qualified pipeline generation for industrial brands, exporters, and enterprise companies.",
    icon: S(<><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></>), },
  { color:"indigo", name:"Finance & BFSI",      href:"/contact",
    desc:"Compliance-aware digital strategies for fintech, banking, insurance, and financial services brands.",
    icon: S(<><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/><path d="M6 15h2M10 15h4"/></>), },
];

// ─── FIXED useInView — no layout reads, pure IntersectionObserver ─────────────
function useInView(threshold = 0) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // IntersectionObserver never causes reflow — it reads from compositor
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, visible };
}

// ─── TileCard — CSS class hover instead of JS state ──────────────────────────
function TileCard({ tile, visible, delay }: { tile: Tile; visible: boolean; delay: number }) {
  const c = tile.color;
  return (
    <div
      className="rr-tile-card"
      style={{
        // will-change tells the browser to promote to its own layer
        // avoiding reflow on hover entirely
        willChange: "transform, opacity",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(18px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {/* accent stripe — CSS :hover handles this, no JS */}
      <div className="rr-stripe" style={{ background: stripeGradient[c] }}/>

      <div style={{ padding:"28px 28px 26px", display:"flex", flexDirection:"column", flex:1 }}>
        <div
          className="rr-icon-box"
          style={{
            // CSS variables passed down — no JS state needed for hover colors
            ["--ico-bg" as string]:     icoHoverBg[c],
            ["--ico-border" as string]: icoHoverBorder[c],
            ["--ico-stroke" as string]: icoHoverStroke[c],
          }}
        >{tile.icon}</div>

        <div className="rr-tile-name">{tile.name}</div>
        <p className="rr-tile-desc">{tile.desc}</p>

        <Link href={tile.href} className="rr-tile-link">
          Get Strategy
          <svg viewBox="0 0 14 14" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            style={{ width:14, height:14, stroke:"currentColor" }}>
            <path d="M2 7h10M7 2l5 5-5 5"/>
          </svg>
        </Link>
      </div>
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function IndustriesSection() {
  const { ref: secRef, visible: secVis } = useInView(0);
  const { ref: ctaRef, visible: ctaVis } = useInView(0.1);

  return (
    <section ref={secRef} className="relative bg-white dark:bg-[#050D1A] overflow-hidden pt-[50px] md:pt-[50px]">

      <div className="pointer-events-none absolute inset-0 z-0" style={{
        backgroundImage:"repeating-linear-gradient(-45deg,transparent,transparent 52px,rgba(60,186,153,.025) 52px,rgba(60,186,153,.025) 53px)",
      }}/>
      <div className="pointer-events-none absolute z-0 rounded-full" style={{
        top:-160, right:-160, width:520, height:520,
        background:"radial-gradient(circle,rgba(60,186,153,.07) 0%,transparent 62%)",
      }}/>

      <div className="relative z-10 max-w-[1160px] mx-auto px-5 sm:px-8 lg:px-12">

        {/* ── HEADER ── */}
        <div className="items-end mb-14 pb-10 border-b border-[#e8f5f1] dark:border-[rgba(255,255,255,0.07)]">
          <div style={{
            opacity: secVis ? 1 : 0,
            transform: secVis ? "translateX(0)" : "translateX(-28px)",
            // ✅ Use transform + opacity only — these never cause reflow
            transition:"opacity .8s cubic-bezier(.22,.61,.36,1), transform .8s cubic-bezier(.22,.61,.36,1)",
          }}>
            <div className="w-full flex justify-center">
              <div className="inline-flex items-center gap-2 border border-[#3cba99] text-[#0f6e56] dark:text-[#3CBA99] bg-white dark:bg-[rgba(60,186,153,0.08)] px-4 py-1.5 rounded-full mb-5 text-[11px] font-bold tracking-[.08em] uppercase shadow-sm hover:shadow-md transition-all duration-300"
                   style={{ fontFamily:"'Sora',sans-serif" }}>
                <span className="relative flex w-[7px] h-[7px]">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-[#3cba99] opacity-75 animate-ping"></span>
                  <span className="relative inline-flex rounded-full w-[7px] h-[7px] bg-[#3cba99]"></span>
                </span>
                Industries We Serve
              </div>
            </div>
            <h2 className="text-[26px] sm:text-[34px] lg:text-[42px] py-5 font-extrabold leading-[1.12] text-center tracking-[-0.034em] text-[#0a2218] dark:text-[#E2EEFF]"
              style={{ fontFamily:"'Sora',sans-serif" }}>
              Digital Marketing for{" "}
              <em className="not-italic text-[#3cba99]">Every Industry</em> in Texas
            </h2>
          </div>

          <div className="flex flex-col justify-end gap-[22px] py-2" style={{
            opacity: secVis ? 1 : 0,
            transform: secVis ? "translateX(0)" : "translateX(28px)",
            transition:"opacity .8s cubic-bezier(.22,.61,.36,1) .22s, transform .8s cubic-bezier(.22,.61,.36,1) .22s",
          }}>
            <p className="text-[15px] text-[#3a5550] dark:text-[#94B4D4] leading-[1.80] text-justify md:text-center">
              Every industry has a different audience, buying journey, and competitive landscape.
              As a leading{" "}
              <strong className="text-[#0a2218] dark:text-[#E2EEFF] font-medium">digital marketing agency in Texas </strong>,
              {" "}we build sector-specific strategies — not generic templates — so your brand reaches the
              right customers and drives consistent, measurable growth.
            </p>

            {/* <div className="flex justify-center">
              <div className="grid grid-cols-2 gap-3 max-w-xs mx-auto">
                {[
                  { val:"2,000+ Brands", lbl:"Served across industries",
                    icon:<svg viewBox="0 0 18 18" fill="none" stroke="#3cba99" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M9 2l1.8 3.8L15 6.6l-3 3 .7 4.2L9 11.8l-3.7 2 .7-4.2-3-3 4.2-.8z"/></svg> },
                  { val:"15+ Years", lbl:"Industry expertise",
                    icon:<svg viewBox="0 0 18 18" fill="none" stroke="#3cba99" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><rect x="2" y="4" width="14" height="11" rx="2"/><path d="M2 8h14M6 4V2M12 4V2"/></svg> },
                ].map(s => (
                  <div key={s.val} className="flex items-center gap-2 px-2.5 py-2 rounded-lg"
                    style={{ background:"#edf9f6", border:"1px solid #c8ede4" }}>
                    <div className="w-7 h-7 rounded-md flex items-center justify-center bg-white flex-shrink-0"
                      style={{ border:"1px solid #c8ede4" }}>{s.icon}</div>
                    <div>
                      <div className="text-[12px] font-bold text-[#0a2218] leading-none" style={{ fontFamily:"'Sora',sans-serif" }}>{s.val}</div>
                      <div className="text-[10px] text-[#7ab8ac] font-medium mt-0.5 leading-none">{s.lbl}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </div>

        {/* ── TILE GRID ── */}
        <div className="rr-grid border-[1.5px] border-[#e8f5f1] dark:border-[rgba(255,255,255,0.07)] rounded-[20px] overflow-hidden">
          {TILES.map((tile, i) => (
            <div key={tile.name} className="rr-cell">
              <TileCard tile={tile} visible={secVis} delay={(i * 70) + 220} />
            </div>
          ))}
        </div>

      </div>

      {/* ── CTA STRIP ── */}
      <div ref={ctaRef}
        className="relative mt-12 mx-5 sm:mx-8 md:mx-20 lg:mx-40 xl:mx-100 rounded-[16px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 sm:gap-8 px-8 py-8 bg-[#edf9f6] dark:bg-[#071528] border-[1.5px] border-[#c8ede4] dark:border-[rgba(60,186,153,0.2)]"
        style={{
          opacity: ctaVis ? 1 : 0,
          transform: ctaVis ? "translateY(0)" : "translateY(22px)",
          transition:"opacity .8s cubic-bezier(.22,.61,.36,1) .24s, transform .8s cubic-bezier(.22,.61,.36,1) .24s",
        }}
      >
        <div className="absolute top-0 pointer-events-none" style={{
          left:"15%", right:"15%", height:2,
          background:"linear-gradient(90deg,transparent,#3cba99 30%,#3cba99 70%,transparent)",
        }}/>
        <div className="relative z-10">
          <p className="text-[18px] sm:text-[19px] font-extrabold text-[#0a2218] dark:text-[#E2EEFF] leading-snug tracking-[-0.018em] mb-1"
            style={{ fontFamily:"'Sora',sans-serif" }}>
            Looking for digital marketing{" "}
            <em className="not-italic text-[#3cba99]">tailored to your industry?</em>
          </p>
          <p className="text-[13.5px] text-[#7ab8ac] dark:text-[#6A8FA8] font-medium">
            Tell us your sector — we'll build a strategy around your specific goals, audience, and competitive landscape.
          </p>
        </div>
        <Link href="/contact"
          className="rr-cta-btn relative z-10 inline-flex items-center gap-2 text-white font-bold text-[14px] px-3 py-[15px] rounded-[10px] whitespace-nowrap shrink-0"
          style={{ fontFamily:"'Sora',sans-serif", background:"#3cba99", boxShadow:"0 8px 24px rgba(60,186,153,.28)" }}>
          Get Your Custom Marketing Plan
          <span className="rr-arr inline-block">→</span>
        </Link>
      </div>

      {/* ── Scoped styles ── */}
      <style>{`
        @keyframes rrDot { 0%,100%{transform:scale(1);opacity:1} 50%{transform:scale(1.5);opacity:.5} }
        .rr-dot { animation: rrDot 2.2s ease-in-out infinite; }

        /* ✅ Tile card — all hover via CSS, zero JS state reads */
        .rr-tile-card {
          position: relative; overflow: hidden;
          display: flex; flex-direction: column; height: 100%;
          background: #fff;
          transition: opacity .52s cubic-bezier(.22,.61,.36,1),
                      transform .52s cubic-bezier(.22,.61,.36,1),
                      background .26s;
          contain: layout style;
        }
        .rr-tile-card:hover { background: #f7fdf9; }
        .dark .rr-tile-card { background: #0A1628; }
        .dark .rr-tile-card:hover { background: #0D1E35; }

        /* stripe — CSS :hover, no JS */
        .rr-stripe {
          position: absolute; top: 0; left: 0; right: 0; height: 3.5px;
          transform: scaleX(0); transform-origin: left center;
          transition: transform .32s cubic-bezier(.22,.61,.36,1);
        }
        .rr-tile-card:hover .rr-stripe { transform: scaleX(1); }

        /* icon box — uses CSS variables set inline, no JS hover state */
        .rr-icon-box {
          width: 50px; height: 50px; border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 18px; flex-shrink: 0;
          background: #f4fcf9;
          border: 1.5px solid #e8f5f1;
          stroke: #3a5550;
          transition: background .26s, border-color .26s, transform .28s cubic-bezier(.34,1.4,.64,1), stroke .26s;
        }
        .dark .rr-icon-box { background: rgba(60,186,153,0.08); border: 1.5px solid rgba(60,186,153,0.2); stroke: #3cba99; }
        .rr-tile-card:hover .rr-icon-box {
          background: var(--ico-bg);
          border-color: var(--ico-border);
          stroke: var(--ico-stroke);
          transform: scale(1.08) rotate(-5deg);
        }

        /* name */
        .rr-tile-name {
          font-family: 'Sora', sans-serif; font-size: 15.5px; font-weight: 700;
          color: #0a2218; line-height: 1.22; margin-bottom: 8px;
          transition: color .22s;
        }
        .rr-tile-card:hover .rr-tile-name { color: #0f6e56; }
        .dark .rr-tile-name { color: #E2EEFF; }
        .dark .rr-tile-card:hover .rr-tile-name { color: #3cba99; }

        /* desc */
        .rr-tile-desc { font-size: 13px; color: #5a7a75; line-height: 1.70; margin-bottom: 18px; flex: 1; }
        .dark .rr-tile-desc { color: #94B4D4; }

        /* link */
        .rr-tile-link {
          display: inline-flex; align-items: center; gap: 6px;
          font-family: 'Sora', sans-serif; font-size: 12px; font-weight: 700;
          color: #3cba99; text-decoration: none;
          opacity: 0; transform: translateY(4px);
          transition: opacity .22s, transform .22s;
        }
        .rr-tile-card:hover .rr-tile-link { opacity: 1; transform: translateY(0); }

        /* grid */
        .rr-grid { display: grid; grid-template-columns: repeat(4,1fr); }
        .rr-cell  { border-right: 1px solid #e8f5f1; border-bottom: 1px solid #e8f5f1; }
        .rr-cell:nth-child(4n)  { border-right: none; }
        .rr-cell:nth-child(n+5) { border-bottom: none; }
        .dark .rr-cell { border-right: 1px solid rgba(255,255,255,0.07); border-bottom: 1px solid rgba(255,255,255,0.07); }
        .dark .rr-cell:nth-child(4n) { border-right: none; }
        .dark .rr-cell:nth-child(n+5) { border-bottom: none; }

        @media (max-width:1040px) {
          .rr-grid { grid-template-columns: repeat(2,1fr); }
          .rr-cell:nth-child(4n)  { border-right: 1px solid #e8f5f1; }
          .rr-cell:nth-child(2n)  { border-right: none; }
          .rr-cell:nth-child(n+5) { border-bottom: 1px solid #e8f5f1; }
          .rr-cell:nth-child(n+7) { border-bottom: none; }
          .dark .rr-cell:nth-child(4n) { border-right: 1px solid rgba(255,255,255,0.07); }
          .dark .rr-cell:nth-child(n+5) { border-bottom: 1px solid rgba(255,255,255,0.07); }
        }
        @media (max-width:480px) {
          .rr-grid { grid-template-columns: 1fr; }
          .rr-cell              { border-right: none; border-bottom: 1px solid #e8f5f1; }
          .rr-cell:last-child   { border-bottom: none; }
          .dark .rr-cell { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.07); }
        }

        /* CTA button */
        .rr-cta-btn { transition: background .18s, transform .15s, box-shadow .18s; }
        .rr-cta-btn:hover { background: #2ea882 !important; transform: translateY(-2px); box-shadow: 0 10px 28px rgba(60,186,153,.3) !important; }
        .rr-arr { transition: transform .18s; }
        .rr-cta-btn:hover .rr-arr { transform: translateX(5px); }
      `}</style>
    </section>
  );
}