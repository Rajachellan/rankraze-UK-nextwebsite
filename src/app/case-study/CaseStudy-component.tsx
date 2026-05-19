"use client";

import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import ContactFormModalButtonOne from "../components/UI/ContactFormModalButtonOne";
import Image from "next/image";
import ily from "../../../public/upload/portfolio/ILY RANKRAZE.jpeg";
import clearone from "../../../public/upload/portfolio/CLEARONE RANKRAZE.jpeg";
import irclass from "../../../public/upload/portfolio/IRCLASS RANKRAZE.jpeg";
import irqs from "../../../public/upload/portfolio/IRQS RANKRAZE.jpeg";
import Eroupe from "../../../public/upload/portfolio/EUROPE STUDY.jpeg";
import tt_group from "../../../public/upload/portfolio/TT GROUP RANKRAZE.jpeg";

import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

const caseStudies = [
  {
    id: 1,
    name: "TT Group",
    img: tt_group,
    title: "TT-group",
    industry: "Logistics ",
    metrics: {
      revenue: "₹2.6Cr+",
      adSpend: "₹2.5L",
      ROAS: "10x+",
    },
    ribbon: "B2B Growth Success",
    results: [
      " 300+ high-quality leads every month",
      " ₹2.6Cr revenue within 6 months",
      "Positioned TT Group as a leading General  Agent",
    ],
    caseStudyLink: "/tt-group",
  },

  {
    id: 2,
    name: "IRQS ",
    img: irqs,
    title: "IRQS",
    industry: "ISO Certification ",
    metrics: {
      revenue: "₹1Cr+",
      adSpend: "Campaign",
      ROAS: " ROI",
    },
    ribbon: "SEO & Lead Generation Success",
    results: [
      "1000+ qualified leads within 10 days",
      "website to improve UX, traffic & conversions",
      "₹1Cr+ revenue through PPC campaigns",
    ],
    caseStudyLink: "/irqs-case-study-2",
  },
  {
    id: 3,
    img: Eroupe,
    title: "Eroupe Study Center",
    name: "Europe Study Centre",
    industry: "Education",
    metrics: {
      revenue: "₹4Cr+",
      adSpend: "₹16.81L",
      ROAS: "24x",
    },
    ribbon: "Featured Success",
    results: [
      "₹4Cr+ revenue in 18 months",
      "21,000+ student & parent leads ",
      "Scaled Chennai branch successfully",
    ],
    caseStudyLink: "/europe-study-centre",
  },

  {
    id: 4,
    name: "ClearOne",
    img: clearone,
    title: "ClearOne",
    industry: "Conferencing ",
    metrics: {
      revenue: "₹2.6Cr+",
      adSpend: "Budget",
      ROAS: " ROI",
    },
    ribbon: "Global B2B Growth",
    results: [
      "58.6% through social media campaigns",
      "Improved CTR from 0.208% to 0.221%",
      "Increased direct website visitors by 39.37%",
    ],
    caseStudyLink: "/clearone",
  },
  {
    id: 5,
    name: "IRClass ",
    img: irclass,
    title: "IRClass",
    industry: " Training Services",
    metrics: {
      revenue: "₹1.02Cr",
      adSpend: "₹14.6L",
      ROAS: " ROI",
    },
    ribbon: "SEO, PPC & Lead Gen Success",
    results: [
      "8,064 total leads within 3 months",
      "₹1.02Cr through digital campaigns",
      " 23 keywords in Top 10 SERPs",
    ],
    caseStudyLink: "/irclass-case-study",
  },
  {
    id: 6,
    name: "ILY Flour",
    img: ily,
    title: "ILY",
    industry: "Food & FMCG",
    metrics: {
      appInstalls: "3k/M",
      videoViews: "2M+",
      reach: "Aware",
    },
    ribbon: "Brand Awareness Success",
    results: [
      "3000+ app installations within one month",
      "2,00,000 views through bilingual video ads",
      "Retargeted potential customers to drive repeat engagement",
    ],
    caseStudyLink: "/ily",
  },
];

export default function SuccessStoriesSection() {
  return (
    <section className="bg-[var(--background)] pt-20">
     
      <div className="max-w-7xl mx-auto px-4">
        {/* HEADER */}

        {/* GRID – 2 ROWS / 3 COLUMNS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.slice(0, 6).map((item, index) => (
            <div key={index} className="p-2">
              {/* CARD */}
              <div
                className="group relative bg-[var(--card)] rounded-2xl
              border border-[var(--border)]
              shadow-md hover:shadow-xl
              transition-transform duration-300 ease-out
              hover:scale-[1.03]
              overflow-hidden flex flex-col h-full"
              >
                {/* IMAGE */}
                <div className="relative h-48 overflow-hidden rounded-lg">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-bold">{item.name}</h3>
                    <span className="text-sm bg-[var(--muted)] px-3 py-1 rounded-md text-[var(--primary-blue)]">
                      {item.industry}
                    </span>
                  </div>

                  {/* METRICS */}
                  <div className="grid grid-cols-3 gap-3 text-center bg-[var(--muted)] p-3 rounded-lg mb-4">
                    {Object.entries(item.metrics).map(([key, value]) => (
                      <div key={key}>
                        <p className="font-bold text-[var(--primary-green)]">
                          {value}
                        </p>
                        <p className="text-sm uppercase text-[var(--text-gray)]">
                          {key}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* RESULTS */}
                  <ul className="space-y-2 text-sm text-[var(--text-gray)] mb-6 flex-grow">
                    {item.results.map((res, i) => (
                      <li key={i}>✔ {res}</li>
                    ))}
                  </ul>

                  {/* ACTIONS */}
                  <div className="grid grid-cols-2 gap-3 mt-auto">
                    <Link
                      href={item.caseStudyLink}
                      className="text-center border border-[var(--primary-blue)]
                    text-[var(--primary-blue)]
                    px-4 py-1.5
                    hover:bg-[linear-gradient(132deg,_#3dbc9b_0%,_#37a7ff_100%)]
                    hover:text-white hover:border-none
                    rounded-md text-sm font-medium transition"
                    >
                      View Case Study
                    </Link>

                    <ContactFormModalButtonOne
                      Button={
                        <span className="flex items-center justify-center gap-1.5 text-sm font-medium">
                          Get Results <ArrowRight size={14} />
                        </span>
                      }
                      Dark
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
