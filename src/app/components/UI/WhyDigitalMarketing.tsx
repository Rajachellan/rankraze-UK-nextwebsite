"use client";
import ContactFormModalButtonOne from "./ContactFormModalButtonOne";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
} from "lucide-react";
const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3cba99" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
    ),
    title: "Be Visible Where Customers Search",
    desc: "Appear on Google and social platforms when potential customers look for your services.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3cba99" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Reach the Right Audience with Data",
    desc: "We analyze your business, competitors, and customer behavior to target high-intent users.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3cba99" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Stay Competitive in the US Market",
    desc: "With more businesses investing in digital marketing, having the right strategy is essential to stay ahead.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3cba99" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: "Generate Consistent, Qualified Leads",
    desc: "Attract customers who are actively searching for your products or services.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3cba99" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="20" x2="12" y2="10" />
        <line x1="18" y1="20" x2="18" y2="4" />
        <line x1="6" y1="20" x2="6" y2="16" />
      </svg>
    ),
    title: "Optimize Campaigns for Better ROI",
    desc: "Track performance and continuously improve strategies using data insights.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3cba99" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        <line x1="12" y1="2" x2="12" y2="4" />
      </svg>
    ),
    title: "Build Long-Term Digital Growth",
    desc: "Create a strong online presence that drives sustainable business success.",
  },
];

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#3cba99">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
);

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export default function WhyDigitalMarketing() {
  const { ref: gridRef, inView: gridInView } = useInView(0.1);
  const { ref: ctaRef, inView: ctaInView } = useInView(0.2);
  const { ref: headerRef, inView: headerInView } = useInView(0.2);

  return (
    <section className="relative bg-white dark:bg-[#050D1A] overflow-hidden py-20 px-6 md:py-10 md:mt-10 md:px-8 lg:px-12">

      {/* subtle background dot pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(#3cba99 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto max-w-6xl">

        {/* ── Header ── */}
        <div
          ref={headerRef}
          className="text-center mb-14 md:mb-16"
          style={{
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 0.65s ease, transform 0.65s ease",
          }}
        >
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#edf9f6] dark:bg-[rgba(60,186,153,0.08)] text-[#2a9a7f] dark:text-[#3CBA99] border border-[#3cba99]/20 dark:border-[rgba(60,186,153,0.2)]">
            Why Digital Marketing
          </span>
          <h2 className="text-[1.75rem] sm:text-3xl md:text-4xl lg:text-[2.6rem] font-extrabold text-[#1a1a2e] dark:text-[#E2EEFF] leading-tight tracking-tight mb-6">
            Why Businesses in the US Need <br className="hidden sm:block" />
            Digital Marketing Today
          </h2>
          <p className="mx-auto max-w-3xl text-sm md:text-[15.5px] text-justify md:text-center leading-[1.85] text-[#4a4a68] dark:text-[#94B4D4]">
           
         
            In today's competitive digital landscape, businesses can no longer rely on traditional marketing methods to grow. Rankraze, a trusted    <strong className="text-[#1a1a2e] dark:text-[#E2EEFF] font-semibold">
              digital marketing agency in Dallas, Texas
            </strong>{" "}, helps brands improve visibility, attract the right audience, and generate consistent leads through data-driven strategies. At Rankraze, we combine SEO, paid advertising, and content-driven marketing to help businesses scale efficiently and stay ahead in Texas's fast-growing online market.
 
          </p>
        </div>

        {/* ── Cards Grid ── */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-14 md:mb-16"
        >
          {features.map((f, i) => (
            <FeatureCard key={i} feature={f} index={i} inView={gridInView} />
          ))}
        </div>

        {/* ── CTA ── */}
         <div
            className="relative text-center mt-20 px-6 sm:px-10 py-[52px] bg-[#edf9f6] dark:bg-[#071528] border-[1.5px] border-[#c8ede4] dark:border-[rgba(60,186,153,0.2)] rounded-[20px] overflow-hidden"
            style={{
              transition: "opacity .8s cubic-bezier(.22,.61,.36,1) .2s, transform .8s cubic-bezier(.22,.61,.36,1) .2s",
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
             <ContactFormModalButtonOne
                                  Button={"Get Free Marketing Strategy"}
                                  Dark={true}
                                />
            {/* <Link
              href="/contact"
              className="relative inline-flex items-center gap-2 bg-[#3cba99] text-white font-['Sora'] text-[14.5px] font-bold px-[34px] py-4 rounded-[10px] transition-all duration-[180ms] hover:bg-[#2ea882] hover:-translate-y-[2px] hover:shadow-[0_12px_32px_rgba(60,186,153,0.28)] group w-full sm:w-auto justify-center"
            >
              Get Your Free Marketing Strategy
              <ArrowRight
                size={16}
                strokeWidth={2.5}
                className="transition-transform duration-[180ms] group-hover:translate-x-[5px]"
              />
            </Link> */}
          </div>
        </div>
    </section>
  );
}

/* ── Individual card ── */
function FeatureCard({
  feature,
  index,
  inView,
}: {
  feature: (typeof features)[0];
  index: number;
  inView: boolean;
}) {
  const delay = `${0.08 + index * 0.07}s`;

  return (
    <div
      className="group relative bg-[#edf9f6] dark:bg-[#0A1628] rounded-2xl p-6 md:p-7 flex gap-5 items-start border border-transparent dark:border-[rgba(255,255,255,0.05)] cursor-default transition-all duration-300 hover:border-[rgba(60,186,153,0.22)] hover:shadow-[0_12px_32px_rgba(60,186,153,0.13)]"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.55s ease ${delay}, transform 0.55s ease ${delay}, box-shadow 0.3s ease, border-color 0.3s ease`,
        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
      }}
    >
      {/* icon */}
      <div
        className="shrink-0 w-12 h-12 rounded-xl bg-white dark:bg-[#0D1E35] flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.08]"
        style={{
          boxShadow: "0 4px 12px rgba(60,186,153,0.12)",
        }}
      >
        {feature.icon}
      </div>

      {/* text */}
      <div className="flex-1 min-w-0">
        <h3 className="text-[1.02rem] font-bold text-[#1a1a2e] dark:text-[#E2EEFF] mb-2 leading-snug">
          {feature.title}
        </h3>
        <p className="text-[0.93rem] text-[#4a4a68] dark:text-[#94B4D4] leading-relaxed m-0">
          {feature.desc}
        </p>
      </div>

      {/* check badge — top-right, fades on hover */}
      <div
        className="absolute top-4 right-4 transition-all duration-300 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100"
      >
        <CheckIcon />
      </div>
    </div>
  );
}