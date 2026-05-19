"use client";

import { useEffect, useRef, useState } from "react";
import {
  BarChart2,
  Target,
  Lightbulb,
  Rocket,
  Star,
  Trophy,
  Globe,
  Cpu,
} from "lucide-react";

// ─── Count-up hook ─────────────────────────────────────────────
function useCountUp(target: number, started: boolean, duration = 1600) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    const step = 16;
    const steps = duration / step;
    const inc = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += inc;
      if (current >= target) { current = target; clearInterval(interval); }
      setCount(Math.round(current));
    }, step);
    return () => clearInterval(interval);
  }, [started, target, duration]);
  return count;
}

// ─── Stat item ────────────────────────────────────────────────
function StatItem({ target, suffix, label, started }: {
  target: number; suffix: string; label: string; started: boolean;
}) {
  const count = useCountUp(target, started);
  const display = target >= 1000
    ? (Math.round(count / 10) * 10).toLocaleString()
    : count;
  return (
    <div className="wc-stat px-6 py-7 text-center relative">
      <div className={`font-['Sora'] text-lg md:text-[36px] font-extrabold text-[#3cba99] leading-none mb-2 transition-opacity duration-[400ms] ${started ? "opacity-100" : "opacity-0"}`}>
        {display}{suffix}
      </div>
      <div className="text-[13px] text-[#7ab8ac] font-medium leading-[1.4]">{label}</div>
    </div>
  );
}

// ─── Card ─────────────────────────────────────────────────────
function Card({ num, icon: Icon, title, body, tags, delay, visible }: {
  num: string;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
  title: string; body: string; tags: string[]; delay: number; visible: boolean;
}) {
  return (
    <div
      className="wc-card group relative bg-white dark:bg-[#0A1628] border-[1.5px] border-[#c8ede4] dark:border-[rgba(255,255,255,0.08)] rounded-[20px] p-9 pb-8 overflow-hidden cursor-default transition-[box-shadow,border-color] duration-[280ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] hover:-translate-y-1.5 hover:shadow-[0_20px_48px_rgba(60,186,153,0.16)] hover:border-[#3cba99]"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s cubic-bezier(0.22,0.61,0.36,1) ${delay}ms, transform 0.6s cubic-bezier(0.22,0.61,0.36,1) ${delay}ms, box-shadow 0.28s, border-color 0.28s`,
      }}
    >
      {/* Top shimmer bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-[280ms] overflow-hidden rounded-t-[20px]">
        <div className="w-full h-full bg-gradient-to-r from-[#3cba99] via-[#9ae3cc] to-[#3cba99] [background-size:200%_100%] animate-[shimmerBar_3s_linear_infinite]" />
      </div>

      {/* Background glow */}
      <div className="absolute -bottom-16 -right-16 w-[180px] h-[180px] rounded-full bg-[radial-gradient(circle,rgba(60,186,153,0.09)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-[280ms] pointer-events-none" />

      {/* Number badge */}
      <span className="absolute top-7 right-8 font-['Sora'] text-[52px] font-extrabold text-[rgba(60,186,153,0.08)] leading-none select-none pointer-events-none group-hover:text-[rgba(60,186,153,0.14)] transition-colors duration-[280ms]">
        {num}
      </span>

      {/* Icon */}
      <div className="relative z-10 w-[52px] h-[52px] bg-[#edf9f6] dark:bg-[rgba(60,186,153,0.1)] border-[1.5px] border-[#c8ede4] dark:border-[rgba(60,186,153,0.2)] rounded-[14px] flex items-center justify-center mb-5 transition-all duration-[250ms] group-hover:bg-[#3cba99] group-hover:border-[#3cba99] group-hover:scale-110 group-hover:-rotate-[4deg]">
        <Icon size={22} strokeWidth={2} className="text-[#3cba99] group-hover:text-white transition-colors duration-[250ms]" />
      </div>

      {/* Title */}
      <h3 className="relative z-10 font-['Sora'] text-[18px] font-bold text-[#0a2218] dark:text-[#E2EEFF] leading-[1.28] mb-3">{title}</h3>

      {/* Body */}
      <p className="relative z-10 text-[14.5px] text-[#3a5550] dark:text-[#94B4D4] leading-[1.78]">{body}</p>

      {/* Tags */}
      <div className="relative z-10 flex flex-wrap gap-[7px] mt-[18px]">
        {tags.map((t) => (
          <span key={t} className="text-[11.5px] font-semibold text-[#0f6e56] dark:text-[#3CBA99] bg-[#edf9f6] dark:bg-[rgba(60,186,153,0.08)] border border-[rgba(60,186,153,0.28)] rounded-full px-3 py-1 transition-all duration-[180ms] group-hover:bg-[rgba(60,186,153,0.12)] group-hover:border-[rgba(60,186,153,0.4)]">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Trust badge ──────────────────────────────────────────────
function TrustBadge({ icon: Icon, iconBg, iconColor, title, sub, delay, visible }: {
  icon: React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
  iconBg: string; iconColor: string; title: string; sub: string; delay: number; visible: boolean;
}) {
  return (
    <div
      className="flex items-center gap-[14px] bg-white dark:bg-[#0A1628] border-[1.5px] border-[#c8ede4] dark:border-[rgba(255,255,255,0.08)] rounded-[14px] px-5 py-[18px] transition-all duration-[220ms] hover:border-[#3cba99] hover:shadow-[0_8px_24px_rgba(60,186,153,0.12)] hover:-translate-y-[3px]"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: `opacity 0.5s cubic-bezier(0.22,0.61,0.36,1) ${delay}ms, transform 0.5s cubic-bezier(0.22,0.61,0.36,1) ${delay}ms, box-shadow 0.22s, border-color 0.22s`,
      }}
    >
      <div className={`w-11 h-11 min-w-[44px] rounded-[12px] flex items-center justify-center flex-shrink-0 ${iconBg}`}>
        <Icon size={20} strokeWidth={1.8} className={iconColor} />
      </div>
      <div>
        <div className="font-['Sora'] text-[13px] font-bold text-[#0a2218] dark:text-[#E2EEFF] leading-[1.25] mb-[3px]">{title}</div>
        <div className="text-[12px] text-[#7ab8ac] dark:text-[#6A8FA8] leading-[1.3]">{sub}</div>
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────
export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const [fired, setFired] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);
  const [missionVisible, setMissionVisible] = useState(false);
  const [badgesVisible, setBadgesVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !fired) {
          setFired(true);
          setHeaderVisible(true);
          setTimeout(() => setStatsVisible(true), 100);
          setTimeout(() => setCardsVisible(true), 200);
          setTimeout(() => setMissionVisible(true), 700);
          setTimeout(() => setBadgesVisible(true), 800);
          io.disconnect();
        }
      },
      { threshold: 0.04 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [fired]);

  const cards = [
    {
      num: "01",
      icon: BarChart2,
      title: "Data-Driven Marketing Strategy",
      body: "We believe successful digital marketing starts with data. By analyzing user behavior, search trends, and competitive insights, we build marketing strategies that maximize visibility, improve engagement, and deliver measurable ROI.",
      tags: ["Data-Driven Strategy", "Analytics", "ROI Focused"],
    },
    {
      num: "02",
      icon: Target,
      title: "Customized Digital Growth Solutions",
      body: "Every business is unique, and so are its growth challenges. Our team develops tailored digital marketing strategies that align with your business goals, ensuring your brand reaches the right audience at the right time.",
      tags: ["Custom Strategy", "Digital Growth", "Audience Targeting"],
    },
    {
      num: "03",
      icon: Lightbulb,
      title: "Industry Expertise & Innovation",
      body: "Our digital marketing experts stay ahead of industry trends, search engine updates, and emerging technologies. This allows us to implement innovative strategies that keep your brand competitive in an ever-evolving digital landscape.",
      tags: ["SEO Experts", "Innovation", "Industry Leaders"],
    },
    {
      num: "04",
      icon: Rocket,
      title: "Results-Driven Execution",
      body: "At Rankraze, we focus on outcomes that matter. From increasing organic traffic and improving search rankings to generating qualified leads, every campaign we run is designed to drive real business growth.",
      tags: ["Performance Marketing", "Lead Generation", "Growth"],
    },
  ];

  const badges = [
    {
      icon: Star,
      iconBg: "bg-[#fff8e8] dark:bg-[rgba(245,154,35,0.1)] border border-[#f5e0a0] dark:border-[rgba(245,154,35,0.2)]",
      iconColor: "text-[#f59a23]",
      title: "Google Partner",
      sub: "Recognized by Google",
    },
    {
      icon: Trophy,
      iconBg: "bg-[#edf9f6] dark:bg-[rgba(60,186,153,0.1)] border border-[#c8ede4] dark:border-[rgba(60,186,153,0.2)]",
      iconColor: "text-[#3cba99]",
      title: "Best Digital Marketing Agency",
      sub: "Hindustan Times Award",
    },
    {
      icon: Globe,
      iconBg: "bg-[#e8f0f8] dark:bg-[rgba(59,130,246,0.1)] border border-[#b5d4f4] dark:border-[rgba(59,130,246,0.2)]",
      iconColor: "text-[#3b82f6]",
      title: "Global Presence",
      sub: "USA · UK · UAE & more",
    },
    {
      icon: Cpu,
      iconBg: "bg-[#eeedfe] dark:bg-[rgba(124,58,237,0.1)] border border-[#cecbf6] dark:border-[rgba(124,58,237,0.2)]",
      iconColor: "text-[#7c3aed]",
      title: "AI-Powered RankAnalytics",
      sub: "Proprietary AI Platform",
    },
  ];

  return (
    <>
      <style>{`


        @keyframes shimmerBar {
          0%   { background-position: 100% 0 }
          100% { background-position: -100% 0 }
        }
        @keyframes wcDot {
          0%,100% { transform: scale(1);   opacity: 1 }
          50%      { transform: scale(1.5); opacity: .5 }
        }

        .wc-dot { animation: wcDot 2.2s ease-in-out infinite; }

        .wc-stat + .wc-stat::before {
          content: '';
          position: absolute;
          left: 0; top: 20%; bottom: 20%;
          width: 1px;
          background: #ddf0ea;
        }
        .dark .wc-stat + .wc-stat::before {
          background: rgba(255,255,255,0.08);
        }
      `}</style>

      <section
        ref={sectionRef}
        className="bg-white dark:bg-[#050D1A] relative overflow-hidden px-5 sm:px-8 md:px-12 pt-24 pb-10 font-['DM_Sans',sans-serif]"
      >
        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none z-0 opacity-35"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(60,186,153,0.14) 1.5px, transparent 1.5px)",
            backgroundSize: "36px 36px",
          }}
        />
        {/* Top-right arc */}
        <div className="absolute -top-[200px] -right-[200px] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(60,186,153,0.07)_0%,transparent_65%)] pointer-events-none z-0" />

        <div className="max-w-[1120px] mx-auto relative z-10">

          {/* ── HEADER ── */}
          <div
            className="text-center max-w-[780px] mx-auto mb-16"
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? "translateY(0)" : "translateY(28px)",
              transition: "opacity 0.82s cubic-bezier(0.22,0.61,0.36,1), transform 0.82s cubic-bezier(0.22,0.61,0.36,1)",
            }}
          >
            <div className="inline-flex items-center gap-2 bg-white dark:bg-[rgba(60,186,153,0.08)] border-[1.5px] border-[#3cba99] text-[#0f6e56] dark:text-[#3CBA99] font-['Sora'] text-[11px] font-bold tracking-[0.09em] uppercase px-[18px] py-1.5 rounded-full mb-6 shadow-[0_0_0_5px_rgba(60,186,153,0.07)]">
              <span className="wc-dot w-[7px] h-[7px] bg-[#3cba99] rounded-full flex-shrink-0 inline-block" />
              Why Choose Rankraze
            </div>
            <h2 className="font-['Sora'] text-4xl font-extrabold text-[#0a2218] dark:text-[#E2EEFF] leading-[1.16] tracking-[-0.032em] mb-5">
              Why Businesses Choose{" "}
              <em className="not-italic text-[#3cba99]">Rankraze</em>
              <br className="hidden sm:block" /> for Digital Growth
            </h2>
            <p className="text-[15.5px] text-[#3a5550] dark:text-[#94B4D4] leading-[1.82] max-w-[700px] mx-auto">
              At Rankraze, we combine strategy, technology, and performance-driven marketing to help businesses
              build a strong and scalable online presence. As a leading digital marketing agency in Texas, our
              team focuses on understanding your business model, target audience, and competitive landscape before
              developing a growth strategy.
            </p>
          </div>

          {/* ── STATS ROW ── */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 border-[1.5px] border-[#c8ede4] dark:border-[rgba(255,255,255,0.08)] rounded-2xl bg-white dark:bg-[#0A1628] mb-[52px] overflow-hidden shadow-[0_4px_24px_rgba(60,186,153,0.08)]"
            style={{
              opacity: statsVisible ? 1 : 0,
              transform: statsVisible ? "translateY(0)" : "translateY(28px)",
              transition: "opacity 0.82s cubic-bezier(0.22,0.61,0.36,1) 0.1s, transform 0.82s cubic-bezier(0.22,0.61,0.36,1) 0.1s",
            }}
          >
            <StatItem target={233}  suffix="K+"     label="Leads Delivered"      started={statsVisible} />
            <StatItem target={2000} suffix="+"      label="Trusted Brands"       started={statsVisible} />
            <StatItem target={9}   suffix="+ Yrs"  label="Industry Expertise"   started={statsVisible} />
            <StatItem target={98}   suffix="%"      label="Client Retention Rate" started={statsVisible} />
          </div>

          {/* ── CARDS 2×2 ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
            {cards.map((c, i) => (
              <Card
                key={c.num}
                num={c.num}
                icon={c.icon}
                title={c.title}
                body={c.body}
                tags={c.tags}
                delay={200 + i * 130}
                visible={cardsVisible}
              />
            ))}
          </div>

          {/* ── MISSION BANNER ── */}
          <div
            className="text-center bg-[#edf9f6] dark:bg-[#071528] border-[1.5px] border-[#c8ede4] dark:border-[rgba(60,186,153,0.2)] rounded-2xl px-6 sm:px-12 py-9 mb-12 relative overflow-hidden"
            style={{
              opacity: missionVisible ? 1 : 0,
              transform: missionVisible ? "translateY(0)" : "translateY(28px)",
              transition: "opacity 0.82s cubic-bezier(0.22,0.61,0.36,1) 0.18s, transform 0.82s cubic-bezier(0.22,0.61,0.36,1) 0.18s",
            }}
          >
            <span className="absolute -top-5 left-8 font-['Sora'] text-[120px] font-extrabold text-[rgba(60,186,153,0.12)] leading-none pointer-events-none select-none">&ldquo;</span>
            <p className="relative font-['Sora'] text-lg sm:text-[22px] font-bold text-[#0a2218] dark:text-[#E2EEFF] leading-[1.45] tracking-[-0.018em] max-w-[740px] mx-auto">
              Our mission is simple &mdash; help brands grow{" "}
              <em className="not-italic text-[#3cba99]">faster, smarter,</em>{" "}
              and more sustainably in the digital ecosystem.
            </p>
          </div>

          {/* ── TRUST BADGES ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {badges.map((b, i) => (
              <TrustBadge
                key={b.title}
                icon={b.icon}
                iconBg={b.iconBg}
                iconColor={b.iconColor}
                title={b.title}
                sub={b.sub}
                delay={800 + i * 120}
                visible={badgesVisible}
              />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}