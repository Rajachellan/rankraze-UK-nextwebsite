"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Search,
  Brain,
  Monitor,
  Rocket,
  BarChart2,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

// ─── Step data ────────────────────────────────────────────────
const steps = [
  {
    num: "01",
    tag: "Step 01",
    title: "Business & Market Research",
    body: "We study your business model, target audience, and competitors to map demand, uncover gaps, and build a data-backed marketing foundation.",
    icon: Search,
    nodeDelay: 200,
    cardDelay: 150,
    side: "left" as const,
  },
  {
    num: "02",
    tag: "Step 02",
    title: "Strategy & Campaign Planning",
    body: "We design a customised digital growth strategy — selecting the right channels (SEO, PPC, social, content) and setting clear, measurable goals.",
    icon: Brain,
    nodeDelay: 420,
    cardDelay: 450,
    side: "right" as const,
  },
  {
    num: "03",
    tag: "Step 03",
    title: "Website & Funnel Optimisation",
    body: "Before any campaign launches, we audit and optimise your site for speed, UX, and conversion — so every visitor has a clear path to becoming a lead.",
    icon: Monitor,
    nodeDelay: 650,
    cardDelay: 700,
    side: "left" as const,
  },
  {
    num: "04",
    tag: "Step 04",
    title: "Campaign Execution",
    body: "Our specialists deploy campaigns across search engines, social platforms, and ad networks — driving targeted, high-intent traffic to your business.",
    icon: Rocket,
    nodeDelay: 880,
    cardDelay: 920,
    side: "right" as const,
  },
  {
    num: "05",
    tag: "Step 05",
    title: "Tracking & Performance Analysis",
    body: "We continuously monitor traffic, user behaviour, conversions, and ROI using advanced analytics — giving you full visibility into what's working.",
    icon: BarChart2,
    nodeDelay: 1050,
    cardDelay: 1100,
    side: "left" as const,
  },
  {
    num: "06",
    tag: "Step 06",
    title: "Optimisation & Growth Scaling",
    body: "Real-time insights drive ongoing optimisation. We double down on what works and scale campaigns to deliver consistent, compounding business growth.",
    icon: TrendingUp,
    nodeDelay: 1280,
    cardDelay: 1320,
    side: "right" as const,
  },
];

// ─── Single step ──────────────────────────────────────────────
function Step({
  step,
  go,
}: {
  step: (typeof steps)[0];
  go: boolean;
}) {
  const Icon = step.icon;
  const isLeft = step.side === "left";

  return (
    // ── DESKTOP: 3-col grid (card | node | spacer) or (spacer | node | card)
    // ── MOBILE:  2-col grid (node | card)
    <div className="ps-step group relative grid grid-cols-[56px_1fr] lg:grid-cols-[1fr_64px_1fr] gap-x-0 items-start pb-12 last:pb-0">

      {/* ── DESKTOP LEFT SPACER (only for right-side steps) ── */}
      {!isLeft && (
        <div className="hidden lg:block lg:col-start-1 lg:row-start-1" />
      )}

      {/* ── NODE ── */}
      <div
        className={[
          "flex flex-col items-center z-10 pt-5",
          // mobile always col-1
          "col-start-1 row-start-1",
          // desktop
          isLeft ? "lg:col-start-2" : "lg:col-start-2",
        ].join(" ")}
      >
        {/* Circle */}
        <div
          className={[
            "w-[52px] h-[52px] rounded-full bg-white dark:bg-[#0A1628] border-[2.5px] border-[#3cba99] flex items-center justify-center",
            "font-['Sora'] text-[15px] font-extrabold text-[#3cba99]",
            "shadow-[0_0_0_6px_rgba(60,186,153,0.10)]",
            "transition-all duration-[250ms]",
            "group-hover:bg-[#3cba99] group-hover:text-white group-hover:shadow-[0_0_0_10px_rgba(60,186,153,0.12)] group-hover:scale-[1.08]",
            go ? "ps-circle-go" : "opacity-0 scale-0",
          ].join(" ")}
          style={go ? ({ "--nd": `${step.nodeDelay}ms` } as React.CSSProperties) : {}}
        >
          {step.num}
        </div>

        {/* Icon below node */}
        {/* <div className="mt-2.5 text-[#3cba99] opacity-70 transition-all duration-[220ms] group-hover:opacity-100 group-hover:scale-[1.15]">
          <Icon size={18} strokeWidth={1.8} />
        </div> */}
      </div>

      {/* ── CARD ── */}
      <div
        className={[
          // mobile: col-2
          "col-start-2 row-start-1 ml-3.5 lg:ml-0",
          // desktop positioning
          isLeft
            ? "lg:col-start-1 lg:row-start-1 lg:justify-self-end"
            : "lg:col-start-3 lg:row-start-1 lg:justify-self-start",
          // sizing
          "w-full lg:max-w-[460px]",
          // base styles
          "relative bg-white dark:bg-[#0A1628] border-[1.5px] border-[#c8ede4] dark:border-[rgba(255,255,255,0.08)] rounded-[18px] px-7 py-7 overflow-hidden",
          "transition-[transform,box-shadow,border-color] duration-[280ms] ease-[cubic-bezier(0.22,0.61,0.36,1)]",
          "group-hover:border-[#3cba99] group-hover:-translate-y-[5px] group-hover:shadow-[0_16px_40px_rgba(60,186,153,0.15)]",
          // reveal
          go ? (isLeft ? "ps-card-left-go" : "ps-card-right-go") : (isLeft ? "opacity-0 -translate-x-7" : "opacity-0 translate-x-7"),
        ].join(" ")}
        style={{ "--cd": go ? `${step.cardDelay}ms` : "0ms" } as React.CSSProperties}
      >
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-[18px] bg-gradient-to-r from-[#3cba99] to-[#9ae3cc] opacity-0 group-hover:opacity-100 transition-opacity duration-[250ms]" />

        <span className="inline-block font-['Sora'] text-[10px] font-bold tracking-[0.09em] uppercase text-[#0f6e56] dark:text-[#3CBA99] bg-[#edf9f6] dark:bg-[rgba(60,186,153,0.08)] border border-[rgba(60,186,153,0.25)] rounded-full px-[11px] py-[3px] mb-2.5">
          {step.tag}
        </span>
        <h3 className="font-['Sora'] text-[16.5px] font-bold text-[#0a2218] dark:text-[#E2EEFF] leading-[1.28] mb-2">{step.title}</h3>
        <p className="text-[13.5px] text-[#3a5550] dark:text-[#94B4D4] leading-[1.72]">{step.body}</p>
      </div>

      {/* ── DESKTOP RIGHT SPACER (only for left-side steps) ── */}
      {isLeft && (
        <div className="hidden lg:block lg:col-start-3 lg:row-start-1" />
      )}
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────
export default function OurProcess() {
  const sectionRef = useRef<HTMLElement>(null);
  const [fired, setFired] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !fired) {
          setFired(true);
          io.disconnect();
        }
      },
      { threshold: 0.04 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [fired]);

  return (
    <>
      <style>{`


        /* ── label dot ── */
        @keyframes psDot {
          0%,100%{ transform:scale(1);   opacity:1  }
          50%    { transform:scale(1.5); opacity:.5 }
        }
        .ps-dot { animation: psDot 2.2s ease-in-out infinite; }

        /* ── node circle pop ── */
        @keyframes nodeIn {
          from { transform:scale(0); opacity:0 }
          to   { transform:scale(1); opacity:1 }
        }
        .ps-circle-go {
          animation: nodeIn .45s cubic-bezier(.34,1.56,.64,1) var(--nd,0ms) both;
        }

        /* ── card slide-in from left ── */
        @keyframes cardInLeft {
          from { opacity:0; transform:translateX(-28px) translateY(8px) }
          to   { opacity:1; transform:translateX(0)     translateY(0)   }
        }
        .ps-card-left-go {
          animation: cardInLeft .58s cubic-bezier(.22,.61,.36,1) var(--cd,.1s) both;
        }

        /* ── card slide-in from right ── */
        @keyframes cardInRight {
          from { opacity:0; transform:translateX(28px) translateY(8px) }
          to   { opacity:1; transform:translateX(0)    translateY(0)   }
        }
        .ps-card-right-go {
          animation: cardInRight .58s cubic-bezier(.22,.61,.36,1) var(--cd,.1s) both;
        }

        /* ── mobile card always from right ── */
        @media(max-width:1023px){
          .ps-card-left-go {
            animation-name: cardInRight;
          }
        }

        /* ── spine fill ── */
        .ps-spine-fill {
          height: 0;
          transition: height 1.8s cubic-bezier(.22,.61,.36,1) .3s;
        }
        .ps-spine-fill.go { height: 100%; }
      `}</style>

      <section
        ref={sectionRef}
        className="bg-white dark:bg-[#050D1A] relative overflow-hidden px-5 sm:px-8 md:px-12 py-24 font-['DM_Sans',sans-serif]"
      >
        {/* Glow orbs */}
        <div className="absolute -top-[180px] -right-[180px] w-[560px] h-[560px] rounded-full bg-[radial-gradient(circle,rgba(60,186,153,0.08)_0%,transparent_62%)] pointer-events-none" />
        <div className="absolute -bottom-[120px] -left-[120px] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(60,186,153,0.06)_0%,transparent_62%)] pointer-events-none" />

        <div className="max-w-[1080px] mx-auto relative z-10">

          {/* ── HEADER ── */}
          <div
            className="text-center max-w-[660px] mx-auto mb-20"
            style={{
              opacity:   fired ? 1 : 0,
              transform: fired ? "translateY(0)" : "translateY(24px)",
              transition: "opacity .8s cubic-bezier(.22,.61,.36,1), transform .8s cubic-bezier(.22,.61,.36,1)",
            }}
          >
            <div className="inline-flex items-center gap-2 bg-white dark:bg-[rgba(60,186,153,0.08)] border-[1.5px] border-[#3cba99] text-[#0f6e56] dark:text-[#3CBA99] font-['Sora'] text-[11px] font-bold tracking-[0.08em] uppercase px-[18px] py-1.5 rounded-full mb-[22px] shadow-[0_0_0_4px_rgba(60,186,153,0.07)]">
              <span className="ps-dot w-[7px] h-[7px] bg-[#3cba99] rounded-full flex-shrink-0 inline-block" />
              Our Process
            </div>
            <h2 className="font-['Sora'] text-3xl md:text-4xl font-extrabold text-[#0a2218] dark:text-[#E2EEFF] leading-[1.18] tracking-[-0.03em] mb-4">
              Our Proven{" "}
              <em className="not-italic text-[#3cba99]">Digital Marketing</em> Process
            </h2>
            <p className="text-[15px] text-[#3a5550] dark:text-[#94B4D4] leading-[1.75]">
              A strategic 6-step framework built to help US businesses grow smarter — with
              data, clarity, and results at every stage.
            </p>
          </div>

          {/* ── TIMELINE ── */}
          <div className="relative pb-2">

            {/* Spine track — desktop centred, mobile left-aligned */}
            <div className="absolute left-[28px] lg:left-1/2 lg:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#ddf0ea] via-[#3cba99] to-[#ddf0ea] rounded pointer-events-none" />

            {/* Animated spine fill */}
            <div
              className={`ps-spine-fill absolute left-[28px] lg:left-1/2 lg:-translate-x-1/2 top-0 w-[2px] bg-[#3cba99] rounded z-[1] pointer-events-none ${fired ? "go" : ""}`}
            />

            {/* Steps */}
            {steps.map((step) => (
              <Step key={step.num} step={step} go={fired} />
            ))}
          </div>

          {/* ── CTA ── */}
          <div
            className="relative text-center mt-20 px-6 sm:px-10 py-[52px] bg-[#edf9f6] dark:bg-[#071528] border-[1.5px] border-[#c8ede4] dark:border-[rgba(60,186,153,0.2)] rounded-[20px] overflow-hidden"
            style={{
              opacity:   fired ? 1 : 0,
              transform: fired ? "translateY(0)" : "translateY(24px)",
              transition: "opacity .8s cubic-bezier(.22,.61,.36,1) 1.6s, transform .8s cubic-bezier(.22,.61,.36,1) 1.6s",
            }}
          >
            {/* Top green line */}
            <div className="absolute top-0 left-[12%] right-[12%] h-[3px] bg-gradient-to-r from-transparent via-[#3cba99] to-transparent" />
            {/* Bottom-right glow */}
            <div className="absolute -bottom-[60px] -right-[60px] w-[220px] h-[220px] rounded-full bg-[radial-gradient(circle,rgba(60,186,153,0.10)_0%,transparent_70%)] pointer-events-none" />

            <p className="relative font-['Sora'] text-2xl sm:text-[26px] font-extrabold text-[#0a2218] dark:text-[#E2EEFF] leading-[1.22] tracking-[-0.022em] mb-2.5">
              Ready to start your{" "}
              <em className="not-italic text-[#3cba99]">growth journey?</em>
            </p>
            <p className="relative text-[14.5px] text-[#7ab8ac] dark:text-[#6A8FA8] mb-8">
              Join 2,000+ brands who trust Rankraze to build and execute their digital strategy.
            </p>
            <Link
              href="/contact"
              className="relative inline-flex items-center gap-2.5 bg-[#3cba99] text-white font-['Sora'] text-[14.5px] font-bold px-[34px] py-4 rounded-[10px] transition-all duration-[180ms] hover:bg-[#2ea882] hover:-translate-y-[2px] hover:shadow-[0_12px_32px_rgba(60,186,153,0.28)] group w-full sm:w-auto justify-center"
            >
              Get Your Free Marketing Strategy
              <ArrowRight
                size={16}
                strokeWidth={2.5}
                className="transition-transform duration-[180ms] group-hover:translate-x-[5px]"
              />
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}