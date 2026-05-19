"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import {
  Zap,
  Crosshair,
  BarChart2,
  RefreshCw,
  Rocket,
  TrendingUp,
  Search,
  Globe,
  Trophy,
  ArrowUpRight,
  Users,
  Target,
  LineChart,
  Medal,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────
interface StatItem { value: string; label: string; }
interface FeatureItem { icon: React.ReactNode; title: string; metric: string; }
interface BarData { month: string; height: number; highlight?: boolean; }
interface MetricItem { value: string; suffix: string; label: string; }
interface KeywordRow { rank: number; keyword: string; change: number; rankBg: string; rankColor: string; }

// ─────────────────────────────────────────────────────────────
// Static data
// ─────────────────────────────────────────────────────────────
const AI_STATS: StatItem[] = [
  { value: "340%", label: "Avg. ROI Boost" },
  { value: "2K+", label: "Brands Powered" },
  { value: "24/7", label: "AI Active" },
];

const FEATURES: FeatureItem[] = [
  { icon: <Zap size={16} strokeWidth={2} />, title: "Smart Campaigns", metric: "10× faster setup" },
  { icon: <Crosshair size={16} strokeWidth={2} />, title: "Precision Targeting", metric: "98% accuracy" },
  { icon: <BarChart2 size={16} strokeWidth={2} />, title: "Live Analytics", metric: "Real-time data" },
  { icon: <RefreshCw size={16} strokeWidth={2} />, title: "Auto Optimize", metric: "24/7 active" },
];

// Ticker items — each has a Lucide icon + label text (no emoji)
interface TickerItem { icon: React.ReactNode; text: string; }

const TICKER_ITEMS: TickerItem[] = [
  { icon: <ArrowUpRight size={12} strokeWidth={2.5} />, text: "Campaign ROI +340%" },
  { icon: <Users size={12} strokeWidth={2.5} />, text: "2,000+ Brands Powered" },
  { icon: <Target size={12} strokeWidth={2.5} />, text: "AI Ad Optimisation" },
  { icon: <LineChart size={12} strokeWidth={2.5} />, text: "Organic Traffic +280%" },
  { icon: <Medal size={12} strokeWidth={2.5} />, text: "#1 Agency Texas" },
];

const BARS: BarData[] = [
  { month: "Jan", height: 38 },
  { month: "Feb", height: 48 },
  { month: "Mar", height: 43 },
  { month: "Apr", height: 56 },
  { month: "May", height: 62 },
  { month: "Jun", height: 70 },
  { month: "Jul", height: 76 },
  { month: "Aug", height: 95, highlight: true },
];

const METRICS: MetricItem[] = [
  { value: "3", suffix: "X", label: "Revenue Growth" },
  { value: "+480", suffix: "%", label: "Brand Reach" },
  { value: "2000", suffix: "+", label: "Happy Brands" },
];

const KEYWORDS: KeywordRow[] = [
  { rank: 1, keyword: "Digital Marketing Agency Texas", change: 47, rankBg: "bg-amber-100", rankColor: "text-amber-600" },
  { rank: 2, keyword: "SEO Company Dallas", change: 33, rankBg: "bg-blue-100", rankColor: "text-blue-500" },
  { rank: 3, keyword: "Social Media Marketing Dallas", change: 29, rankBg: "bg-green-100", rankColor: "text-green-600" },
  { rank: 4, keyword: "Best PPC Advertising Agency", change: 18, rankBg: "bg-teal-100", rankColor: "text-teal-700" },
];

const SLIDE_DURATION = 3000;
const TOTAL_SLIDES = 3;

// ─────────────────────────────────────────────────────────────
// LiveDot
// ─────────────────────────────────────────────────────────────
function LiveDot({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-block rounded-full flex-shrink-0 ${className}`}
      style={{ animation: "rkBlink 1.2s ease-in-out infinite" }}
    />
  );
}

// ─────────────────────────────────────────────────────────────
// ProgressBar — driven purely by CSS animations for high performance
// ─────────────────────────────────────────────────────────────
function ProgressBar({ active, duration }: { active: boolean; duration: number }) {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-black/5 rounded-b-3xl overflow-hidden">
      <div
        className={`h-full w-full rounded-b-3xl bg-gradient-to-r from-teal-400 to-teal-600 origin-left will-change-transform ${
          active ? "animate-progress-grow" : ""
        }`}
        style={{
          animationDuration: `${duration}ms`,
          animationTimingFunction: "linear",
          animationFillMode: "forwards",
        }}
      />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// SLIDE 1 — AI-Powered Marketing
// ─────────────────────────────────────────────────────────────
function Slide1({ active }: { active: boolean }) {
  return (
    <div className="flex flex-col h-full w-full relative overflow-hidden rounded-3xl bg-white dark:bg-[#161B22]/95 dark:backdrop-blur-md border-[1.5px] dark:border-[1px] border-[var(--prim-dark-glow)] dark:border-[#5EEAD4]/30 shadow-[0_20px_60px_rgba(27,200,160,0.16),0_6px_24px_rgba(11,26,46,0.08)] dark:shadow-[0_0_30px_rgba(94,234,212,0.1),inset_0_0_20px_rgba(0,0,0,0.5)] transition-colors duration-300">

      {/* ── Decorative mesh glows ── */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none bg-[radial-gradient(circle_at_60%_40%,rgba(27,200,160,.16)_0%,rgba(27,200,160,.03)_55%,transparent_70%)] dark:bg-[radial-gradient(circle_at_60%_40%,rgba(94,234,212,.15)_0%,rgba(34,211,238,.05)_55%,transparent_70%)] transition-colors duration-300"
        style={{ animation: "rkMesh 4s ease-in-out infinite" }} />
      <div className="absolute -bottom-14 -left-10 w-44 h-44 rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(27,200,160,.10)_0%,transparent_70%)] dark:bg-[radial-gradient(circle,rgba(94,234,212,.10)_0%,transparent_70%)] transition-colors duration-300"
        style={{ animation: "rkMesh 5s ease-in-out infinite reverse" }} />

      {/* ── Card body: justify-between spreads 4 rows across full height ── */}
      <div className="relative z-10 flex flex-col flex-1 px-4 pt-5 pb-4 sm:px-5 sm:pt-5 sm:pb-5 justify-between">

        {/* ROW 1 — Chip + LIVE */}
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 bg-teal-50 dark:bg-[#0B0E11] border border-[var(--prim-dark-glow)] dark:border-[#5EEAD4]/40 rounded-full px-3 py-1 text-[10px] sm:text-[10.5px] font-bold uppercase tracking-wider text-teal-700 dark:text-[#5EEAD4] transition-colors"
            style={{ animation: "rkFadeDown .5s .05s ease both" }}>
            <LiveDot className="w-1.5 h-1.5 bg-teal-500 dark:bg-[#5EEAD4]" />
            Rankraze
          </span>
          <span className="inline-flex items-center gap-1.5 bg-[var(--prim-dark-glow)] dark:bg-gradient-to-r dark:from-[#22D3EE] dark:to-[#5EEAD4] text-white dark:text-[#0A111F] text-[9.5px] font-bold px-2.5 py-1 rounded-full dark:shadow-[0_0_10px_rgba(94,234,212,0.4)] transition-colors"
            style={{ animation: "rkFadeDown .5s .1s ease both" }}>
            <LiveDot className="w-1.5 h-1.5 bg-white dark:bg-[#0A111F]" />
            LIVE
          </span>
        </div>

        {/* ROW 2 — Left: heading + sub  |  Right: stats cards */}
        <div className="flex items-stretch gap-3">

          {/* Left */}
          <div className="flex-1 min-w-0 flex flex-col justify-center"
            style={{ animation: "rkFadeUp .5s .12s ease both" }}>
            <h2 className="font-extrabold text-slate-900 dark:text-[#F9FAFB] leading-[1.2] mb-2 text-[18px] sm:text-[21px] md:text-[24px] transition-colors"
              style={{ fontFamily: "var(--font-bricolage)" }}>
              AI Powered <br /> Marketing  that <br /><span className="text-teal-700 dark:text-[#5EEAD4] dark:drop-shadow-[0_0_8px_rgba(94,234,212,0.5)] transition-colors">Accelerates Growth</span>
            </h2>
            <p className="text-[10px] sm:text-[15px] font-semibold text-slate-400 dark:text-[#9CA3AF] leading-relaxed transition-colors">
              Advanced AI analytics and automation <br />to optimize campaigns and maximize ROI
            </p>
          </div>

          {/* Right — stat cards stretch to fill heading height */}
          <div className="flex flex-col gap-1.5 flex-shrink-0 justify-between">
            {AI_STATS.map((s, i) => (
              <div key={s.label}
                className="bg-teal-50 dark:bg-[#0B0E11]/60 border border-teal-200 dark:border-[#5EEAD4]/20 rounded-xl px-2.5 text-right w-[80px] sm:w-[90px] flex-1 flex flex-col justify-center py-1.5 dark:backdrop-blur-sm transition-colors"
                style={{ animation: `rkStatIn .45s ${0.15 + i * 0.12}s ease both` }}>
                <p className="font-extrabold text-teal-700 dark:text-[#5EEAD4] leading-none text-[14px] sm:text-[16px] transition-colors"
                  style={{ fontFamily: "var(--font-bricolage)" }}>
                  {s.value}
                </p>
                <p className="text-[8px] sm:text-[9px] text-slate-400 dark:text-[#9CA3AF] font-medium mt-1 whitespace-nowrap transition-colors">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ROW 3 — Feature grid 2×2 */}
        <div className="grid grid-cols-2 gap-2">
          {FEATURES.map((f, i) => (
            <div key={f.title}
              className="flex items-center gap-2.5 bg-teal-50 dark:bg-[#0B0E11]/60 border border-teal-200 dark:border-[#5EEAD4]/20 rounded-xl px-3 py-3 sm:py-3.5 hover:bg-teal-100 dark:hover:bg-[#5EEAD4]/10 hover:border-teal-300 dark:hover:border-[#5EEAD4]/50 hover:-translate-y-0.5 transition-all duration-200 cursor-default dark:backdrop-blur-sm"
              style={{ animation: `rkFeatIn .5s ${0.1 + i * 0.1}s cubic-bezier(.34,1.56,.64,1) both` }}>
              <div className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-br from-teal-400 to-teal-600 dark:from-[#22D3EE] dark:to-[#5EEAD4] flex items-center justify-center text-white dark:text-[#0A111F] dark:shadow-[0_0_10px_rgba(94,234,212,0.3)] transition-colors">
                {f.icon}
              </div>
              <div className="min-w-0">
                <p className="text-[10.5px] sm:text-[11.5px] font-bold text-slate-800 dark:text-[#F9FAFB] transition-colors">{f.title}</p>
                <p className="text-[9.5px] sm:text-[10.5px] font-semibold text-teal-700 dark:text-[#5EEAD4] mt-1 transition-colors">{f.metric}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ROW 4 — Ticker */}
        <div className="flex items-center gap-2 bg-teal-50 dark:bg-[#0B0E11]/60 border border-teal-200 dark:border-[#5EEAD4]/20 rounded-xl px-3 overflow-hidden dark:backdrop-blur-sm transition-colors"
          style={{ animation: "rkFadeUp .5s .45s ease both" }}>
          <LiveDot className="w-2 h-2 bg-[var(--prim-dark-glow)] dark:bg-[#5EEAD4] dark:shadow-[0_0_5px_#5EEAD4] flex-shrink-0 transition-colors" />
          <div className="overflow-hidden flex-1">
            <div
              className="flex items-center gap-0 will-change-transform"
              style={{ display: "inline-flex", whiteSpace: "nowrap", animation: "rkTicker 18s linear infinite" }}
            >
              {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1 text-[9.5px] sm:text-[10.5px] font-semibold text-slate-600 dark:text-[#9CA3AF] transition-colors"
                >
                  <span className="text-teal-600 dark:text-[#5EEAD4] flex-shrink-0 transition-colors">{item.icon}</span>
                  {item.text}
                  <span className="mx-2.5 text-teal-300 dark:text-[#5EEAD4]/50 font-bold text-[11px] transition-colors">•</span>
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
      <ProgressBar active={active} duration={SLIDE_DURATION} />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// SLIDE 2 — Grow Brand
// ─────────────────────────────────────────────────────────────
function Slide2({ active }: { active: boolean }) {
  return (
    <div className="flex flex-col h-full w-full relative overflow-hidden rounded-3xl bg-white dark:bg-[#161B22]/95 dark:backdrop-blur-md border-[1.5px] dark:border-[1px] border-[var(--prim-dark-glow)] dark:border-[#5EEAD4]/30 shadow-[0_20px_60px_rgba(27,200,160,0.16),0_6px_24px_rgba(11,26,46,0.08)] dark:shadow-[0_0_30px_rgba(94,234,212,0.1),inset_0_0_20px_rgba(0,0,0,0.5)] transition-colors duration-300">
      <div className="flex flex-col flex-1 px-4 pt-5 pb-4 sm:px-5 sm:pt-5 sm:pb-5 justify-between">

        {/* Top row */}
        <div className="flex items-center justify-between"
          style={{ animation: "rkFadeDown .5s .05s ease both" }}>
          <span className="inline-flex items-center gap-1.5 bg-teal-50 dark:bg-[#0B0E11] border border-[var(--prim-dark-glow)] dark:border-[#5EEAD4]/40 text-teal-700 dark:text-[#5EEAD4] text-[10px] sm:text-[10.5px] font-bold uppercase tracking-wider px-3 py-1 rounded-full transition-colors">
            <Rocket size={11} strokeWidth={2} />
            Brand Growth
          </span>
          <span className="inline-flex items-center gap-1.5 bg-teal-500 dark:bg-gradient-to-r dark:from-[#22D3EE] dark:to-[#5EEAD4] text-white dark:text-[#0A111F] text-[10px] font-bold px-3 py-1 rounded-full dark:shadow-[0_0_10px_rgba(94,234,212,0.4)] transition-colors">
            <LiveDot className="w-1.5 h-1.5 bg-white dark:bg-[#0A111F]" />
            LIVE
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-extrabold text-slate-900 dark:text-[#F9FAFB] mt-5 leading-[1.25] text-[17px] sm:text-[21px] md:text-[24px] transition-colors"
          style={{ fontFamily: "var(--font-bricolage)", animation: "rkFadeUp .5s .12s ease both" }}>
          Scale Your <br />Business  with   <br />
          <span className="text-teal-700 dark:text-[#5EEAD4] dark:drop-shadow-[0_0_8px_rgba(94,234,212,0.5)] transition-colors">Data Driven  <br /> Digital Marketing</span>
        </h2>
        <p className="text-[10px] sm:text-[15px] font-semibold text-slate-400 dark:text-[#9CA3AF] leading-relaxed py-3 transition-colors">
          Turn Traffic Into Revenue With <br /> Performance Marketing .
        </p>

        {/* Bar Chart */}
        <div className="bg-teal-50 dark:bg-[#0B0E11]/60 rounded-2xl px-3 pt-3  pb-2 flex flex-col justify-end dark:backdrop-blur-sm dark:border dark:border-white/5 transition-colors"
          style={{ flex: "1 1 0", minHeight: 0, animation: "rkFadeUp .5s .2s ease both" }}>
          <div className="flex items-end gap-1 sm:gap-1.5 w-full" style={{ height: "100%", minHeight: "80px", maxHeight: "145px" }}>
            {BARS.map((b, i) => (
              <div key={b.month} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                <div
                  className={`w-full rounded-t-md transition-colors ${
                    b.highlight 
                      ? "bg-gradient-to-t from-[#0fa870] to-[#2dffc0] dark:from-[#22D3EE] dark:to-[#5EEAD4] shadow-[0_-4px_14px_rgba(27,200,160,0.45)] dark:shadow-[0_-4px_14px_rgba(94,234,212,0.45)]" 
                      : "bg-gradient-to-t from-[#13a882] to-[#1bc8a0] dark:from-[#22D3EE]/30 dark:to-[#5EEAD4]/50"
                  }`}
                  style={{
                    height: `${b.height}%`,
                    transformOrigin: "bottom",
                    animation: `rkGrowBar 1.5s ${i * 0.16}s cubic-bezier(.25,.46,.45,.94) both`,
                  }}
                />
                <span className="text-[8px] sm:text-[9px] text-slate-400 dark:text-[#9CA3AF] font-medium transition-colors">{b.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-2 mt-0 sm:mt-3">
          {METRICS.map((m, i) => (
            <div key={m.label}
              className="bg-teal-50 dark:bg-[#0B0E11]/60 border-[1.5px] border-teal-200 dark:border-[#5EEAD4]/20 rounded-xl sm:rounded-2xl p-2.5 sm:p-3 text-center dark:backdrop-blur-sm transition-colors"
              style={{ animation: `rkPopIn .5s ${0.1 + i * 0.12}s cubic-bezier(.34,1.56,.64,1) both` }}>
              <p className="font-extrabold text-slate-900 dark:text-[#F9FAFB] leading-none flex items-baseline justify-center transition-colors"
                style={{ fontFamily: "var(--font-bricolage)" }}>
                <span className="text-[18px] sm:text-[22px] md:text-[26px]">{m.value}</span>
                <span className="text-[16px] sm:text-[20px] md:text-[24px] text-teal-700 dark:text-[#5EEAD4] ml-0.5 transition-colors">{m.suffix}</span>
              </p>
              <p className="text-[9px] sm:text-[10px] text-slate-400 dark:text-[#9CA3AF] font-medium mt-1 transition-colors">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
      <ProgressBar active={active} duration={SLIDE_DURATION} />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// SLIDE 3 — Google Rankings
// ─────────────────────────────────────────────────────────────
function Slide3({ active }: { active: boolean }) {
  return (
    <div className="flex flex-col h-full w-full relative overflow-hidden rounded-3xl bg-white dark:bg-[#161B22]/95 dark:backdrop-blur-md border-[1.5px] dark:border-[1px] border-[var(--prim-dark-glow)] dark:border-[#5EEAD4]/30 shadow-[0_20px_60px_rgba(27,200,160,0.16),0_6px_24px_rgba(11,26,46,0.08)] dark:shadow-[0_0_30px_rgba(94,234,212,0.1),inset_0_0_20px_rgba(0,0,0,0.5)] transition-colors duration-300">
      <div className="flex flex-col flex-1 px-4 pt-5 pb-4 sm:px-5 sm:pt-5 sm:pb-5 justify-between">

        {/* Header */}
        <div className="flex items-center justify-between"
          style={{ animation: "rkFadeDown .5s .05s ease both" }}>
          <span className="font-extrabold tracking-tight text-[20px] sm:text-[24px]"
            style={{ fontFamily: "var(--font-bricolage)" }}>
            <span style={{ color: "#4285F4" }}>G</span>
            <span style={{ color: "#EA4335" }}>o</span>
            <span style={{ color: "#FBBC05" }}>o</span>
            <span style={{ color: "#4285F4" }}>g</span>
            <span style={{ color: "#34A853" }}>l</span>
            <span style={{ color: "#EA4335" }}>e</span>
          </span>
          <span className="inline-flex items-center gap-1.5 bg-teal-50 dark:bg-[#0B0E11] border border-[var(--prim-dark-glow)] dark:border-[#5EEAD4]/40 text-teal-700 dark:text-[#5EEAD4] text-[9.5px] sm:text-[10.5px] font-bold px-2.5 py-1 rounded-full transition-colors">
            <Trophy size={11} strokeWidth={2} />
            Page #1 Rankings
          </span>
        </div>

        {/* SERP Box */}
        <div className="flex items-center gap-2 bg-teal-50 dark:bg-[#0B0E11]/80 border border-[var(--prim-dark-glow)] dark:border-[#5EEAD4]/30 rounded-xl px-3 py-2 dark:backdrop-blur-sm transition-colors"
          style={{ animation: "rkFadeUp .5s .12s ease both" }}>
          <Search size={13} strokeWidth={2} className="text-slate-400 dark:text-[#9CA3AF] flex-shrink-0 transition-colors" />
          <span className="text-[10px] sm:text-[11.5px] font-semibold text-slate-800 dark:text-[#F9FAFB] flex-1 truncate transition-colors">
            digital marketing agency texas
          </span>
          <span className="bg-teal-500 dark:bg-gradient-to-r dark:from-[#22D3EE] dark:to-[#5EEAD4] text-white dark:text-[#0A111F] text-[9px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap dark:shadow-[0_0_8px_rgba(94,234,212,0.4)] transition-colors">
            Ranked #1
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-extrabold text-slate-900 dark:text-[#F9FAFB] leading-[1.28] text-[16px] sm:text-[19px] md:text-[22px] transition-colors"
          style={{ fontFamily: "var(--font-bricolage)", animation: "rkFadeUp .5s .18s ease both" }}>
          Rank Your Keywords<br />
          on <span className="dark:drop-shadow-[0_0_10px_rgba(66,133,244,0.3)] transition-all" style={{ color: "#4285F4" }}>Google Page #1</span>
        </h2>

        {/* Keyword rows */}
        <div className="flex flex-col gap-1.5 sm:gap-2">
          {KEYWORDS.map((kw, i) => (
            <div key={kw.rank}
              className="flex items-center gap-2 sm:gap-2.5 px-2.5 py-2 sm:px-3 sm:py-2.5 bg-teal-50 dark:bg-[#111827]/80 border border-teal-200 dark:border-[#5EEAD4]/20 rounded-xl hover:translate-x-1 hover:shadow-[-3px_0_0_#1bc8a0] dark:hover:shadow-[-3px_0_0_#5EEAD4] dark:hover:bg-[#161B22] transition-all duration-200 cursor-default dark:backdrop-blur-sm"
              style={{ animation: `rkRowIn .5s ${0.1 + i * 0.1}s cubic-bezier(.22,1,.36,1) both` }}>
              
              {/* Dynamic light classes merge with hardcoded dark classes */}
              <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg ${kw.rankBg} ${kw.rankColor} dark:bg-[#0A111F] dark:text-[#5EEAD4] dark:border dark:border-[#5EEAD4]/20 text-[11px] sm:text-[12px] font-extrabold flex items-center justify-center flex-shrink-0 transition-colors`}
                style={{ fontFamily: "var(--font-bricolage)" }}>
                #{kw.rank}
              </div>

              <p className="flex-1 text-[10px] sm:text-[11.5px] font-semibold text-slate-800 dark:text-[#F9FAFB] leading-tight transition-colors">
                {kw.keyword}
              </p>
              
              <span className="flex items-center gap-1 text-[9.5px] sm:text-[11px] font-bold text-green-600 dark:text-[#10B981] bg-green-100 dark:bg-[#10B981]/15 px-2 py-0.5 rounded-full whitespace-nowrap dark:border dark:border-[#10B981]/20 transition-colors">
                <TrendingUp size={10} strokeWidth={2.5} />
                +{kw.change}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom stat strip */}
        <div className="flex items-center justify-between px-3 py-2 bg-teal-50 dark:bg-[#0B0E11]/80 border border-teal-200 dark:border-[#5EEAD4]/30 rounded-xl dark:backdrop-blur-sm transition-colors"
          style={{ animation: "rkFadeUp .5s .5s ease both" }}>
          <div className="flex items-center gap-1.5">
            <Globe size={14} strokeWidth={2} className="text-teal-700 dark:text-[#5EEAD4] transition-colors" />
            <span className="text-[10px] sm:text-[11px] font-semibold text-slate-700 dark:text-[#9CA3AF] transition-colors">Avg. Position Improvement</span>
          </div>
          <span className="font-extrabold text-teal-700 dark:text-[#5EEAD4] text-[14px] sm:text-[16px] dark:drop-shadow-[0_0_5px_rgba(94,234,212,0.4)] transition-colors"
            style={{ fontFamily: "var(--font-bricolage)" }}>
            +31.75
          </span>
        </div>
      </div>
      <ProgressBar active={active} duration={SLIDE_DURATION} />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────────────────────
export default function ScrollBannerBar() {
  const [current, setCurrent] = useState<number>(0);
  const [exiting, setExiting] = useState<number | null>(null);
  // mountKey forces the incoming slide to fully remount → CSS animations restart from scratch
  const [mountKey, setMountKey] = useState<number>(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(
      () => setCurrent((c) => {
        const next = (c + 1) % TOTAL_SLIDES;
        setExiting(c);
        setMountKey((k) => k + 1);
        setTimeout(() => setExiting(null), 450);
        return next;
      }),
      SLIDE_DURATION
    );
  }, []);

  const goTo = useCallback((idx: number) => {
    setCurrent((c) => {
      if (idx === c) return c;
      setExiting(c);
      setMountKey((k) => k + 1);
      setTimeout(() => setExiting(null), 450);
      return idx;
    });
    startTimer();
  }, [startTimer]);

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [startTimer]);

  // Each slide wrapped with a key derived from mountKey so it remounts on transition
  const slideComponents = [
    <Slide1 key={`s1-${current === 0 ? mountKey : "idle"}`} active={current === 0} />,
    <Slide2 key={`s2-${current === 1 ? mountKey : "idle"}`} active={current === 1} />,
    <Slide3 key={`s3-${current === 2 ? mountKey : "idle"}`} active={current === 2} />,
  ];

  return (
    <>
      {/* ── Global keyframes ── */}
      <style>{`


        /* Continuous */
        @keyframes rkMesh  { 0%,100%{opacity:.6;transform:scale(1)}  50%{opacity:1;transform:scale(1.1)} }
        @keyframes rkBlink { 0%,100%{opacity:1;transform:scale(1)}   50%{opacity:.25;transform:scale(.55)} }
        @keyframes rkTicker{ 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }

        /* Enter — fire once, fill-mode both keeps final state */
        @keyframes rkFadeDown { from{opacity:0;transform:translateY(-10px)} to{opacity:1;transform:translateY(0)} }
        @keyframes rkFadeUp   { from{opacity:0;transform:translateY(12px)}  to{opacity:1;transform:translateY(0)} }
        @keyframes rkStatIn   { from{opacity:0;transform:translateX(12px)}  to{opacity:1;transform:translateX(0)} }
        @keyframes rkFeatIn   { from{opacity:0;transform:translateY(14px) scale(.93)} to{opacity:1;transform:translateY(0) scale(1)} }
        @keyframes rkPopIn    { from{opacity:0;transform:scale(.82)}        to{opacity:1;transform:scale(1)} }
        @keyframes rkRowIn    { from{opacity:0;transform:translateX(-18px)} to{opacity:1;transform:translateX(0)} }
        @keyframes rkGrowBar  { from{transform:scaleY(0)} to{transform:scaleY(1)} }

        /* Slide transitions */
        @keyframes rkSlideUp  { from{opacity:0;transform:translateY(30px) scale(.96)} to{opacity:1;transform:translateY(0) scale(1)} }
        @keyframes rkSlideOut { from{opacity:1;transform:translateY(0) scale(1)} to{opacity:0;transform:translateY(-26px) scale(.96)} }

        .animate-progress-grow {
          animation-name: rkProgressGrow;
        }

        @keyframes rkProgressGrow {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>

      <div className="w-full flex flex-col items-center gap-5 px-3 py-6 sm:px-4 sm:py-8">
        <div
          className="w-full relative"
          style={{ maxWidth: "min(500px,100%)", height: "clamp(500px,72vw,530px)" }}
        >
          {slideComponents.map((slideEl, i) => {
            const isActive = i === current;
            const isExiting = i === exiting;
            const isIdle = !isActive && !isExiting;
            return (
              <div
                key={i}
                className="absolute inset-0 will-change-[transform,opacity]"
                style={{
                  pointerEvents: isActive ? "auto" : "none",
                  opacity: isIdle ? 0 : 1,
                  zIndex: isActive ? 2 : isExiting ? 1 : 0,
                  animation: isActive ? "rkSlideUp  .6s cubic-bezier(.22,1,.36,1) both"
                    : isExiting ? "rkSlideOut .45s ease both"
                      : "none",
                }}
              >
                {slideEl}
              </div>
            );
          })}
        </div>

        {/* Navigation dots */}
        <div className="flex items-center gap-3">
          {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-[7px] rounded-full border-none outline-none cursor-pointer transition-all duration-300 ${
                i === current
                  ? "w-[26px] bg-[#1bc8a0] dark:bg-[#5EEAD4] shadow-none dark:shadow-[0_0_8px_rgba(94,234,212,0.6)]"
                  : "w-[7px] bg-[rgba(11,26,46,.18)] dark:bg-[#5EEAD4]/15 shadow-none"
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
}