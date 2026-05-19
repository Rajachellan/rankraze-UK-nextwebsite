"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────
const faqs = [
  {
    num: "01", cat: ["services"],
    q: "What does a digital marketing agency in Chennai do?",
    catLabel: "Services",
    a: "A digital marketing agency improves your visibility on search engines, social media, and advertising channels — providing SEO, PPC, content marketing, social media, and website development to attract the right customers and generate qualified leads.",
  },
  {
    num: "02", cat: ["services"],
    q: "How can digital marketing help my business grow?",
    catLabel: "Services",
    a: "Digital marketing connects you with people actively searching for what you offer — on Google, social platforms, and advertising networks. The right strategy turns those touchpoints into qualified leads and sustainable revenue growth.",
  },
  {
    num: "03", cat: ["seo"],
    q: "Why is SEO important for businesses in Chennai?",
    catLabel: "SEO",
    a: "SEO puts your business in front of customers the moment they search for your product or service. Strong rankings generate consistent organic traffic and leads — without the recurring cost of paid ads.",
  },
  {
    num: "04", cat: ["seo", "results"],
    q: "How long does SEO take to show results?",
    catLabel: "SEO · Results",
    a: "Most businesses see meaningful ranking and traffic improvements within 3–6 months. Unlike paid ads that stop the moment you pause spend, SEO results compound significantly the longer you invest in it.",
  },
  {
    num: "05", cat: ["pricing"],
    q: "How much does digital marketing cost in Chennai?",
    catLabel: "Pricing",
    a: "Costs are shaped by your services, industry competition, and goals. We build strategies around your budget — not the other way around. No bloated packages or services you don't need.",
  },
  {
    num: "06", cat: ["services", "pricing"],
    q: "Which services are best for small businesses?",
    catLabel: "Services · Pricing",
    a: "For small businesses, local SEO, Google Ads, and social media marketing deliver the highest return on limited budgets — building visibility and capturing local demand without requiring enterprise-level spend.",
  },
  {
    num: "07", cat: ["services"],
    q: "What industries does Rankraze work with?",
    catLabel: "Services",
    a: "We serve real estate, healthcare, ecommerce, education, hospitality, startups, B2B, and finance — building sector-specific strategies because every industry has a different audience, buying journey, and competitive landscape.",
  },
  {
    num: "08", cat: ["services"],
    q: "Do you provide customized marketing strategies?",
    catLabel: "Services",
    a: "Always. We start with a thorough audit of your business, competitors, and target audience — then build a strategy that's entirely specific to your goals. We don't recycle templates.",
  },
  {
    num: "09", cat: ["results"],
    q: "How do you measure digital marketing success?",
    catLabel: "Results",
    a: "We track website traffic, keyword rankings, lead volume, conversion rates, and ROI. Every report is transparent — showing exactly what moved, what improved, and what we're optimising next.",
  },
  {
    num: "10", cat: ["services", "seo"],
    q: "Can you handle both SEO and paid advertising?",
    catLabel: "Services · SEO",
    a: "Yes — and we do it better as an integrated whole. SEO builds long-term organic authority while PPC captures immediate demand. Together they cover every stage of the customer journey under one roof.",
  },
  {
    num: "11", cat: ["services", "results"],
    q: "Why choose Rankraze as your marketing partner?",
    catLabel: "Services · Results",
    a: "We combine data-driven strategy, AI-powered insights, and hands-on execution focused entirely on measurable outcomes — not vanity metrics. We focus on traffic, leads, and revenue that actually grows your business.",
  },
  {
    num: "12", cat: ["pricing", "services"],
    q: "How do I get started with Rankraze?",
    catLabel: "Pricing · Services",
    a: "Request a free strategy consultation. Our experts will review your current online presence, analyse your competitors, and recommend the most effective marketing approach — with no commitment required.",
  },
];

const filters = [
  { key: "all",      label: "All",      count: 12 },
  { key: "seo",      label: "SEO",      count: 3  },
  { key: "services", label: "Services", count: 6  },
  { key: "pricing",  label: "Pricing",  count: 3  },
  { key: "results",  label: "Results",  count: 4  },
];

// Split into two columns
const leftFaqs  = faqs.slice(0, 6);
const rightFaqs = faqs.slice(6, 12);

// ─── Single accordion item ────────────────────────────────────
function FAQItem({
  faq,
  isOpen,
  onToggle,
  visible,
  delay,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onToggle: () => void;
  visible: boolean;
  delay: number;
}) {
  return (
    <div
      className={[
        "fq-item relative border-b border-[#c8ede4] dark:border-[rgba(255,255,255,0.08)] first:border-t",
        isOpen ? "border-[#3cba99]" : "",
      ].join(" ")}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: `opacity 0.52s cubic-bezier(0.22,0.61,0.36,1) ${delay}ms, transform 0.52s cubic-bezier(0.22,0.61,0.36,1) ${delay}ms`,
      }}
      data-cat={faq.cat.join(" ")}
    >
      {/* Left green bar */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#3cba99] to-[#9ae3cc] rounded-r-[2px] origin-top transition-transform duration-[350ms] ease-[cubic-bezier(0.22,0.61,0.36,1)]"
        style={{ transform: isOpen ? "scaleY(1)" : "scaleY(0)" }}
      />

      {/* Question button */}
      <button
        className={[
          "w-full flex items-center gap-[14px] px-4 py-5 text-left transition-colors duration-[220ms] cursor-pointer",
          isOpen ? "bg-[rgba(60,186,153,0.05)]" : "hover:bg-[rgba(60,186,153,0.04)]",
        ].join(" ")}
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        {/* Number badge */}
        <span
          className={[
            "w-[30px] h-[30px] min-w-[30px] rounded-[9px] flex items-center justify-center font-['Sora'] text-[10.5px] font-bold leading-none flex-shrink-0 transition-all duration-[220ms]",
            isOpen
              ? "bg-[#3cba99] text-white border-[1.5px] border-[#3cba99]"
              : "bg-[#edf9f6] dark:bg-[rgba(60,186,153,0.08)] text-[#3cba99] border-[1.5px] border-[rgba(60,186,153,0.25)]",
          ].join(" ")}
        >
          {faq.num}
        </span>

        {/* Question text */}
        <span
          className={[
            "flex-1 font-['Sora'] text-[14.5px] font-bold leading-[1.34] transition-colors duration-[220ms]",
            isOpen ? "text-[#0f6e56]" : "text-[#0a2218] dark:text-[#E2EEFF]",
          ].join(" ")}
        >
          {faq.q}
        </span>

        {/* Chevron */}
        <span
          className={[
            "w-[30px] h-[30px] min-w-[30px] rounded-full border-[1.5px] flex items-center justify-center flex-shrink-0 transition-all duration-[250ms]",
            isOpen
              ? "bg-[#3cba99] border-[#3cba99]"
              : "bg-white dark:bg-[#0A1628] border-[#c8ede4] dark:border-[rgba(255,255,255,0.08)] hover:border-[#3cba99]",
          ].join(" ")}
        >
          <ChevronDown
            size={14}
            strokeWidth={2.2}
            className={[
              "transition-all duration-[350ms] ease-[cubic-bezier(0.22,0.61,0.36,1)]",
              isOpen ? "rotate-180 text-white" : "text-[#3cba99]",
            ].join(" ")}
          />
        </span>
      </button>

      {/* Answer panel — grid-rows animation */}
      <div
        className="grid transition-all duration-[400ms] ease-[cubic-bezier(0.22,0.61,0.36,1)]"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="min-h-0 overflow-hidden">
          {/* Category tag */}
          <span
            className="inline-block font-['Sora'] text-[10px] font-bold tracking-[0.07em] uppercase text-[#0f6e56] dark:text-[#3CBA99] bg-[#edf9f6] dark:bg-[rgba(60,186,153,0.08)] border border-[rgba(60,186,153,0.28)] rounded-full px-[11px] py-[3px] ml-[60px] mt-1 mb-2 transition-opacity duration-[200ms]"
            style={{ opacity: isOpen ? 1 : 0, transitionDelay: isOpen ? "180ms" : "0ms" }}
          >
            {faq.catLabel}
          </span>
          <p
            className="block px-4 pb-[22px] pl-[60px] text-[14px] text-[#3a5550] dark:text-[#94B4D4] leading-[1.80] transition-all duration-[300ms]"
            style={{
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? "translateY(0)" : "translateY(-5px)",
              transitionDelay: isOpen ? "60ms" : "0ms",
            }}
          >
            {faq.a}
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────
export default function FAQSection() {
  const sectionRef  = useRef<HTMLElement>(null);
  const [fired,     setFired]     = useState(false);
  const [hlIn,      setHlIn]      = useState(false);
  const [hrIn,      setHrIn]      = useState(false);
  const [lVis,      setLVis]      = useState<boolean[]>(Array(6).fill(false));
  const [rVis,      setRVis]      = useState<boolean[]>(Array(6).fill(false));
  const [ctaIn,     setCtaIn]     = useState(false);
  const [openIdx,   setOpenIdx]   = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState("all");

  // Filtered faq indices
  const visibleLeft  = leftFaqs.map(f  => activeFilter === "all" || f.cat.includes(activeFilter));
  const visibleRight = rightFaqs.map(f => activeFilter === "all" || f.cat.includes(activeFilter));

  // Scroll reveal
  const trigger = useCallback(() => {
    if (fired) return;
    setFired(true);
    setHlIn(true);
    setHrIn(true);
    setLVis(Array(6).fill(true));
    setRVis(Array(6).fill(true));
    setCtaIn(true);
  }, [fired]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { trigger(); io.disconnect(); }
    }, { threshold: 0 });
    io.observe(el);
    return () => io.disconnect();
  }, [trigger]);

  // Filter change: re-animate items
  const handleFilter = (key: string) => {
    setActiveFilter(key);
    setOpenIdx(null);
    // re-trigger visibility flicker for animation
    setLVis(Array(6).fill(false));
    setRVis(Array(6).fill(false));
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setLVis(Array(6).fill(true));
        setRVis(Array(6).fill(true));
      });
    });
  };

  const toggle = (globalIdx: number) => {
    setOpenIdx(prev => prev === globalIdx ? null : globalIdx);
  };

  return (
    <>
      <style>{`

        @keyframes fqDot {
          0%,100%{ transform:scale(1);   opacity:1  }
          50%    { transform:scale(1.5); opacity:.5 }
        }
        .fq-dot { animation: fqDot 2.2s ease-in-out infinite; }
      `}</style>

      <section
        ref={sectionRef}
        className="relative mt-5 md:mt-10 overflow-hidden bg-white dark:bg-[#050D1A] px-5 sm:px-8 md:px-12 py-24 font-['DM_Sans',sans-serif]"
      >
        {/* Glow orbs */}
        <div className="absolute -top-[160px] -right-[160px] w-[520px] h-[520px] rounded-full bg-[radial-gradient(circle,rgba(60,186,153,0.10)_0%,transparent_62%)] pointer-events-none" />
        <div className="absolute -bottom-[120px] -left-[120px] w-[380px] h-[380px] rounded-full bg-[radial-gradient(circle,rgba(60,186,153,0.07)_0%,transparent_62%)] pointer-events-none" />

        <div className="max-w-[1120px] mx-auto relative z-10">

          {/* ════════════════════════════
              HEADER
          ════════════════════════════ */}
       <div className="flex flex-col items-center text-center gap-8 mb-14 max-w-3xl mx-auto">

  {/* Top: pill + heading */}
  <div
    style={{
      opacity: hlIn ? 1 : 0,
      transform: hlIn ? "translate3d(0,0,0)" : "translate3d(0,20px,0)",
      transition:
        "opacity .8s cubic-bezier(.22,.61,.36,1), transform .8s cubic-bezier(.22,.61,.36,1)",
    }}
    className="flex flex-col items-center"
  >
    {/* Pill */}
    <div className="inline-flex items-center gap-2 bg-white dark:bg-[rgba(60,186,153,0.08)] border-[1.5px] border-[#3cba99] text-[#0f6e56] dark:text-[#3CBA99] font-['Sora'] text-[11px] font-bold tracking-[0.08em] uppercase px-4 py-1.5 rounded-full mb-5 shadow-[0_0_0_4px_rgba(60,186,153,0.07)] leading-none">
      <span className="w-[7px] h-[7px] bg-[#3cba99] rounded-full block" />
      FAQ
    </div>

    {/* Heading */}
    <h2 className="font-['Sora'] text-3xl md:text-4xl font-extrabold text-[#0a2218] dark:text-[#E2EEFF] leading-[1.14] tracking-[-0.032em]">
      Questions we get 
      <span className="not-italic text-[#3cba99] pl-2">asked the most</span>
    </h2>
  </div>

  {/* Bottom: text + filters */}
  <div
    style={{
      opacity: hrIn ? 1 : 0,
      transform: hrIn ? "translate3d(0,0,0)" : "translate3d(0,20px,0)",
      transition:
        "opacity .8s cubic-bezier(.22,.61,.36,1) .15s, transform .8s cubic-bezier(.22,.61,.36,1) .15s",
    }}
    className="flex flex-col items-center gap-6"
  >
    {/* Description */}
    <p className="text-[15px] text-[#3a5550] dark:text-[#94B4D4] leading-[1.80] max-w-[600px]">
      Clear answers about digital marketing, SEO, and how Rankraze helps businesses grow —
      so you can make confident, informed decisions.
    </p>

    {/* Filter pills */}
    <div className="flex flex-wrap justify-center gap-[9px]">
      {filters.map((f) => (
        <button
          key={f.key}
          onClick={() => handleFilter(f.key)}
          className={[
            "inline-flex items-center gap-[6px] px-[18px] py-2 rounded-full border-[1.5px] font-['Sora'] text-[12px] font-semibold cursor-pointer select-none transition-all duration-[200ms]",
            activeFilter === f.key
              ? "bg-[#3cba99] border-[#3cba99] text-white shadow-[0_4px_14px_rgba(60,186,153,0.28)]"
              : "bg-white dark:bg-[#0A1628] border-[#c8ede4] dark:border-[rgba(255,255,255,0.08)] text-[#3a5550] dark:text-[#94B4D4] hover:bg-[#edf9f6] hover:border-[#3cba99] hover:text-[#0f6e56] hover:-translate-y-[1px]",
          ].join(" ")}
        >
          <span className="w-[6px] h-[6px] rounded-full bg-current opacity-70" />
          {f.label}
          <span
            className={[
              "inline-flex items-center justify-center w-[18px] h-[18px] rounded-full text-[10px] font-bold transition-all duration-[200ms]",
              activeFilter === f.key
                ? "bg-[rgba(255,255,255,0.25)] text-white"
                : "bg-[rgba(60,186,153,0.15)] text-[#0f6e56]",
            ].join(" ")}
          >
            {f.count}
          </span>
        </button>
      ))}
    </div>
  </div>

</div>

          {/* ════════════════════════════
              TWO-COLUMN ACCORDION
          ════════════════════════════ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-9 mb-14">

            {/* LEFT col — Q01–Q06 */}
            <div className="flex flex-col">
              {leftFaqs.map((faq, i) => (
                visibleLeft[i] ? (
                  <FAQItem
                    key={faq.num}
                    faq={faq}
                    isOpen={openIdx === i}
                    onToggle={() => toggle(i)}
                    visible={lVis[i]}
                    delay={!fired ? 200 + i * 75 : i * 55}
                  />
                ) : null
              ))}
            </div>

            {/* RIGHT col — Q07–Q12 */}
            <div className="flex flex-col">
              {rightFaqs.map((faq, i) => (
                visibleRight[i] ? (
                  <FAQItem
                    key={faq.num}
                    faq={faq}
                    isOpen={openIdx === i + 6}
                    onToggle={() => toggle(i + 6)}
                    visible={rVis[i]}
                    delay={!fired ? 238 + i * 75 : i * 55 + 28}
                    // On mobile the right column is below left — remove top border on first item
                  />
                ) : null
              ))}
            </div>
          </div>

          {/* ════════════════════════════
              CTA BAR
          ════════════════════════════ */}
          <div
            className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-white dark:bg-[#0A1628] border-[1.5px] border-[#c8ede4] dark:border-[rgba(255,255,255,0.08)] rounded-[18px] px-6 sm:px-10 py-8 overflow-hidden shadow-[0_4px_24px_rgba(60,186,153,0.08)]"
            style={{
              opacity: ctaIn ? 1 : 0,
              transform: ctaIn ? "translateY(0)" : "translateY(24px)",
              transition: "opacity .8s cubic-bezier(.22,.61,.36,1) .2s, transform .8s cubic-bezier(.22,.61,.36,1) .2s",
            }}
          >
            {/* Top gradient line */}
            {/* <div className="absolute top-0 left-[10%] right-[10%] h-[2.5px] bg-gradient-to-r from-transparent via-[#3cba99] to-transparent" /> */}

            <div>
              <p className="font-['Sora'] text-[19px] font-bold text-[#0a2218] dark:text-[#E2EEFF] mb-1 leading-[1.28]">
                Still have questions? Let's talk.
              </p>
              <p className="text-[13.5px] text-[#7ab8ac] dark:text-[#6A8FA8]">
                Get a free consultation and a personalised digital marketing strategy — no obligation.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 bg-[#3cba99] text-white font-['Sora'] text-[14px] font-bold px-[30px] py-[15px] rounded-[10px] whitespace-nowrap flex-shrink-0 transition-all duration-[180ms] hover:bg-[#2ea882] hover:-translate-y-[2px] hover:shadow-[0_10px_28px_rgba(60,186,153,0.28)] group w-full sm:w-auto justify-center"
            >
              Book Your Free Strategy Call
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