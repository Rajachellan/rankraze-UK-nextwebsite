"use client";

import { useRef, useState, useCallback } from "react";
import { CheckCircle2 } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import CountStateSection from "./CountStateSection";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

import ily      from "../../../../public/upload/portfolio/ILY RANKRAZE.jpeg";
import clearone from "../../../../public/upload/portfolio/CLEARONE RANKRAZE.jpeg";
import irclass  from "../../../../public/upload/portfolio/IRCLASS RANKRAZE.jpeg";
import irqs     from "../../../../public/upload/portfolio/IRQS RANKRAZE.jpeg";
import Eroupe   from "../../../../public/upload/portfolio/EUROPE STUDY.jpeg";
import tt_group from "../../../../public/upload/portfolio/TT GROUP RANKRAZE.jpeg";

interface Metrics { [key: string]: string; }
interface CaseStudy {
  id: number;
  name: string;
  img: StaticImageData;
  title: string;
  industry: string;
  metrics: Metrics;
  results: string[];
  caseStudyLink: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    name: "TT Group",
    img: tt_group,
    title: "TT-group",
    industry: "Logistics",
    metrics: { revenue: "₹2.6Cr+", adSpend: "₹2.5L", ROAS: "10x+" },
    results: [
      "300+ high-quality leads every month",
      "₹2.6Cr revenue within 6 months",
      "Positioned TT Group as a leading General Agent",
    ],
    caseStudyLink: "/tt-group",
  },
  {
    id: 2,
    name: "IRQS",
    img: irqs,
    title: "IRQS",
    industry: "ISO Certification",
    metrics: { revenue: "₹1Cr+", adSpend: "Campaign", ROAS: "ROI" },
    results: [
      "1000+ qualified leads within 10 days",
      "Improved UX, traffic & conversions",
      "₹1Cr+ revenue through PPC campaigns",
    ],
    caseStudyLink: "/irqs-case-study-2",
  },
  {
    id: 3,
    name: "Europe Study Centre",
    img: Eroupe,
    title: "Eroupe Study Center",
    industry: "Education",
    metrics: { revenue: "₹4Cr+", adSpend: "₹16.81L", ROAS: "24x" },
    results: [
      "₹4Cr+ revenue in 18 months",
      "21,000+ student & parent leads",
      "Scaled Chennai branch successfully",
    ],
    caseStudyLink: "/europe-study-centre",
  },
  {
    id: 4,
    name: "ClearOne",
    img: clearone,
    title: "ClearOne",
    industry: "Conferencing",
    metrics: { revenue: "₹2.6Cr+", adSpend: "Budget", ROAS: "ROI" },
    results: [
      "58.6% growth through social media campaigns",
      "Improved CTR from 0.208% to 0.221%",
      "Increased direct website visitors by 39.37%",
    ],
    caseStudyLink: "/clearone",
  },
  {
    id: 5,
    name: "IRClass",
    img: irclass,
    title: "IRClass",
    industry: "Training Services",
    metrics: { revenue: "₹1.02Cr", adSpend: "₹14.6L", ROAS: "ROI" },
    results: [
      "8,064 total leads within 3 months",
      "₹1.02Cr through digital campaigns",
      "23 keywords in Top 10 SERPs",
    ],
    caseStudyLink: "/irclass-case-study",
  },
  {
    id: 6,
    name: "ILY Flour",
    img: ily,
    title: "ILY",
    industry: "Food & FMCG",
    metrics: { appInstalls: "3k/M", videoViews: "2M+", reach: "Aware" },
    results: [
      "3000+ app installations within one month",
      "2,00,000 views through bilingual video ads",
      "Retargeted customers to drive repeat engagement",
    ],
    caseStudyLink: "/ily",
  },
];

function CaseStudyCard({ item }: { item: CaseStudy }) {
  return (
    <div className="group relative bg-[var(--card)] rounded-2xl border border-[var(--border)] shadow-md hover:shadow-xl transition-all duration-300 ease-out hover:scale-[1.02] overflow-hidden flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={item.img}
          alt={item.title}
          fill
          className="object-cover transition-[transform,filter] duration-500 group-hover:scale-105 dark:grayscale"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
          quality={75}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent dark:from-black/45" />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-4 gap-2">
          <h3 className="text-base font-bold text-[var(--card-foreground)] leading-tight">{item.name}</h3>
          <span className="text-[10.5px] bg-[var(--muted)] px-2.5 py-1 rounded-md text-[var(--primary-blue)] dark:text-[#7dd3fc] dark:bg-white/10 font-medium whitespace-nowrap ml-2 shrink-0">
            {item.industry}
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2 text-center bg-[var(--muted)] p-3 rounded-xl mb-4 border border-transparent dark:border-white/5">
          {Object.entries(item.metrics).map(([key, value]) => (
            <div key={key} className="flex flex-col gap-0.5">
              <p className="font-extrabold text-sm text-[var(--primary-green)] dark:text-[var(--prim-dark-glow)] leading-none">{value}</p>
              <p className="text-[9.5px] uppercase text-[var(--text-gray)] dark:text-gray-400 font-medium tracking-wide">{key}</p>
            </div>
          ))}
        </div>
        <ul className="space-y-1.5 text-[12.5px] text-[var(--text-gray)] dark:text-gray-200 mb-5 flex-grow">
          {item.results.map((res, i) => (
            <li key={i} className="flex items-start gap-1.5">
              <CheckCircle2 size={13} strokeWidth={2.5} className="text-teal-500 dark:text-[var(--prim-dark-glow)] flex-shrink-0 mt-0.5" />
              <span className="leading-snug">{res}</span>
            </li>
          ))}
        </ul>
        <div className="grid mt-auto">
          <Link
            href={item.caseStudyLink}
            className="text-center border border-[var(--primary-blue)] text-[var(--primary-blue)] dark:border-[#5EEAD4]/60 dark:text-[#5EEAD4] px-3 py-2 rounded-md text-sm font-semibold transition-all duration-200 hover:bg-gradient-to-r items-center hover:from-teal-500 hover:to-blue-400 hover:text-white hover:border-transparent"
          >
            View Case Study
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function SuccessStoriesSlider() {
  const swiperRef = useRef<SwiperType | null>(null);
  const total = caseStudies.length;
  const [current, setCurrent] = useState(1);

  const handlePrev = useCallback(() => swiperRef.current?.slidePrev(), []);
  const handleNext = useCallback(() => swiperRef.current?.slideNext(), []);

  return (
    <>
      {/* ── Header ── */}
      <div className="w-full grid place-items-center px-3 md:px-5 lg:px-8 xl:px-12 2xl:px-14 pt-10 md:pt-15 overflow-hidden">
        <ScrollAnimationWrapper delay={0.1}>
          <div className="inline-flex items-center gap-2 my-5 bg-white dark:bg-[rgba(60,186,153,0.08)] border-[1.5px] border-[#3cba99] text-[#0f6e56] dark:text-[#3CBA99] font-['Sora'] text-[11px] font-bold tracking-[0.08em] uppercase px-4 py-2 rounded-full shadow-[0_0_0_4px_rgba(60,186,153,0.07)] leading-none">
            <span className="w-[7px] h-[7px] bg-[#3cba99] rounded-full flex-shrink-0 inline-block" />
            Case study
          </div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper delay={0.2}>
          <h2 className="text-3xl md:text-4xl xl:text-[42px] font-bold text-center capitalize dark:text-[#E2EEFF]">
            Case Studies
          </h2>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper delay={0.3}>
          <p className="text-[var(--text-gray)] dark:text-gray-300 text-center py-3">
            Team up with rankraze - the next amazing case study could be yours!
          </p>
        </ScrollAnimationWrapper>

        <CountStateSection />

        <ScrollAnimationWrapper delay={0.4} className="text-center mb-14">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--primary-blue)] dark:text-gray-100">
              Real Results. Real Revenue. Real Rankings.
            </h2>
            <p className="mt-4 text-[var(--text-gray)] dark:text-gray-300">
              Businesses that transformed with measurable growth
            </p>
          </div>
        </ScrollAnimationWrapper>
      </div>

      {/* ── Slider ── */}
      <ScrollAnimationWrapper delay={0.5} className="w-full">
        <section className="bg-[var(--background)] py-5">
          <div className="max-w-7xl mx-auto px-4">

            {/* Swiper */}
            <div
              onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
              onMouseLeave={() => swiperRef.current?.autoplay?.start()}
            >
              <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                onSwiper={(swiper) => { swiperRef.current = swiper; }}
                onSlideChange={(swiper) => setCurrent((swiper.realIndex % total) + 1)}
                slidesPerView={1}
                spaceBetween={24}
                breakpoints={{
                  640:  { slidesPerView: 1.2, spaceBetween: 16 },
                  768:  { slidesPerView: 2,   spaceBetween: 20 },
                  1024: { slidesPerView: 3,   spaceBetween: 24 },
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: false,
                }}
                loop={true}
                pagination={{
                  clickable: true,
                  dynamicBullets: false,
                  el: ".ss-dots",
                }}
                grabCursor={true}
              >
                {caseStudies.map((item) => (
                  <SwiperSlide key={item.id} className="h-auto">
                    <div className="h-full pb-1">
                      <CaseStudyCard item={item} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* ✅ Custom Pagination UI — always centered, no Swiper positioning */}
            <div className="ss-pagination-bar">

              {/* Prev Arrow */}
              <button
                onClick={handlePrev}
                aria-label="Previous"
                className="ss-arrow"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {/* Dots injected by Swiper */}
              <div className="ss-dots" />

              {/* Next Arrow */}
              <button
                onClick={handleNext}
                aria-label="Next"
                className="ss-arrow"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

            </div>

            {/* Progress bar + counter */}
            <div className="ss-progress-wrap">
              <div className="ss-progress-track">
                <div
                  className="ss-progress-fill"
                  style={{
                    transform: `scaleX(${current / total})`,
                    transformOrigin: 'left center',
                    willChange: 'transform',
                  }}
                />
              </div>
              <p className="ss-counter">{current} / {total}</p>
            </div>

          </div>
        </section>
      </ScrollAnimationWrapper>

      <style>{`
        /* ── Pagination bar: arrow + dots + arrow, perfectly centered ── */
        .ss-pagination-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-top: 28px;
          width: 100%;
        }

        /* Arrow buttons */
        .ss-arrow {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1.5px solid #e2e8f0;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #94a3b8;
          cursor: pointer;
          flex-shrink: 0;
          transition: border-color 0.2s, color 0.2s;
        }
        .ss-arrow:hover {
          border-color: #2dd4bf;
          color: #2dd4bf;
        }

        /* Dots container — Swiper injects bullets here */
        .ss-dots {
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          position: static !important;
          width: auto !important;
          bottom: auto !important;
          left: auto !important;
          gap: 6px !important;
          flex-wrap: nowrap !important;
        }

        /* Bullets */
        .ss-dots .swiper-pagination-bullet {
          width: 8px !important;
          height: 8px !important;
          border-radius: 9999px !important;
          background: #cbd5e1 !important;
          opacity: 1 !important;
          margin: 0 !important;
          flex-shrink: 0 !important;
          transition: all 0.3s ease !important;
          display: inline-flex !important;
        }
        .ss-dots .swiper-pagination-bullet-active {
          width: 24px !important;
          height: 8px !important;
          background: #2dd4bf !important;
          border-radius: 9999px !important;
          opacity: 1 !important;
        }

        /* ── Progress bar + counter ── */
        .ss-progress-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          margin-top: 14px;
        }
        .ss-progress-track {
          width: 160px;
          height: 3px;
          background: #e2e8f0;
          border-radius: 9999px;
          overflow: hidden;
        }
        .ss-progress-fill {
          height: 100%;
          width: 100%;
          border-radius: 9999px;
          background: linear-gradient(90deg, #2dd4bf, #60a5fa);
          transform: scaleX(0);
          transform-origin: left center;
          will-change: transform;
          transition: transform 0.4s ease;
        }
        .ss-counter {
          font-size: 12px;
          color: #94a3b8;
          font-weight: 500;
          letter-spacing: 0.04em;
        }

        /* ── Dark mode overrides ── */
        .dark .ss-arrow {
          border-color: rgba(255,255,255,0.1);
          background: #0A1628;
          color: #94B4D4;
        }
        .dark .ss-arrow:hover {
          border-color: #3cba99;
          color: #3cba99;
        }
        .dark .ss-progress-track {
          background: rgba(255,255,255,0.08);
        }
        .dark .ss-dots .swiper-pagination-bullet {
          background: rgba(255,255,255,0.18) !important;
        }
        .dark .ss-counter {
          color: #6A8FA8;
        }
      `}</style>
    </>
  );
}