import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import ContactForm from "@/app/components/UI/AllServicePageContactForm";
import { Mail, TrendingUp, Target, CheckCircle ,ArrowRight} from "lucide-react";
import Email_marketing from "../../../../../public/upload/services/email-marketing.jpg"
import { BriefcaseBusiness, UserStar } from "lucide-react";
import mailchimp from "../../../../../public/upload/services/email-marketing/Mailchimp.png"
import hubspot from "../../../../../public/upload/services/email-marketing/HubSpot.png"
import activecampaign from "../../../../../public/upload/services/email-marketing/ActiveCampaign.png"
import zohocampaigns from "../../../../../public/upload/services/email-marketing/Zoho Campaigns.png"
import brevo from "../../../../../public/upload/services/email-marketing/Brevo (Sendinblue).png"
import ContactFormModalButtonOne from "../../../../app/components/UI/ContactFormModalButtonOne"
export const metadata: Metadata = {
  title: "Email Marketing Agency in Chennai | Email marketing company ",
  description:
    "Rankraze is a trusted email marketing company in Chennai delivering high-ROI campaigns, automation, and conversion-focused email strategies. ",

  keywords: [],

  alternates: {
    canonical: "https://rankraze.com/email-marketing",
  },

  openGraph: {
    title: "Email Marketing Agency in Chennai | Email marketing company ",
    description:
      "Rankraze is a trusted email marketing company in Chennai delivering high-ROI campaigns, automation, and conversion-focused email strategies. ",
    url: "https://rankraze.com/email-marketing",
    siteName: "Rankraze",
    images: [
      {
        url: "/upload/web-analytics-services.webp",
        width: 900,
        height: 506,
        alt: "Email automation process for businesses ",
        type: "image/webp",
      },
    ],
    locale: "en_US",
    type: "article",
  },
};

export default function EmailMarketing () {
      const images = [
        mailchimp,
        hubspot,
        activecampaign,
        zohocampaigns,
        brevo,
      ];
      const industries = [
        "SaaS & IT Companies",
        "E-commerce Brands",
        "Healthcare & Education Providers",
        "Real Estate & Service-Based Businesses",
        "B2B & SME Brands",
      ];
        const points = [
          "Strategy-first approach (not template-based)",
          "Strong focus on conversions & ROI",
          "Expertise in automation & CRM integration",
          "Transparent reporting & insights",
          "Compliance-aware and deliverability-focused execution",
        ];
    return (
      <>
        <section className="w-full grid place-items-center mt-24 px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 relative">
          <div className="w-full grid place-items-center px-3 md:px-5 lg:px-8 xl:px-12 2xl:px-14 py-10 md:py-20 overflow-hidden relative rounded-md md:rounded-lg lg:rounded-xl xl:rounded-2xl 2xl:rounded-4xl before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:[background-image:linear-gradient(to_bottom,#ffffff44,#ffffffbb,white),linear-gradient(to_right,#DAF2EC,#D0EBFB)] before:-z-10 dark:before:invert shadow-xs dark:shadow-white">
            <div className="w-full max-w-7xl flex flex-col md:flex-row items-stretch justify-between gap-3.5 md:gap-0">
              <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center gap-4 pl-2.5">
                <h1 className="text-4xl xl:text-[42px] font-semibold text-center md:text-left capitalize dark:text-gray-200 pr-4">
                  Email Marketing Agency in Chennai
                </h1>
                <p className="text-sm md:text-sm text-gray-700 dark:text-gray-300 text-center md:text-left pr-4">
                  That Drives Engagement, Leads & Revenue
                </p>
                <div className="flex justify-center">
                  <ContactFormModalButtonOne
                    Button="Talk to an Email Marketing Expert"
                    Dark={true}
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 flex flex-col items-center justify-center py-2.5">
                <ContactForm />
              </div>
            </div>
            <div className="absolute flex items-end justify-start w-full h-full bottom-0 left-0 -z-10 opacity-100 dark:opacity-75 bg-[url('/upload/wave-image.png')] bg-no-repeat bg-cover bg-bottom"></div>
          </div>
        </section>
        <section className="w-full mt-16 md:mt-20 px-4 py-6 md:px-6 lg:px-10">
          <div className="max-w-7xl mx-auto text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--primary-blue)] dark:text-gray-200 leading-tight">
              Email Marketing
            </h2>
            <p className="mt-6 text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Email marketing remains one of the highest ROI digital channels
              when done right. As a trusted
              <span className="font-semibold text-[var(--primary-blue)] dark:text-gray-200">
                email marketing agency in Chennai,
              </span>
              Rankraze helps businesses build meaningful customer relationships
              through strategic, data-driven email campaigns. From lead
              nurturing and customer retention to automated workflows and
              personalized newsletters, we design email marketing solutions that
              deliver measurable business growth — not just open rates.
            </p>
          </div>
        </section>

        <section className=" py-20 bg-[var(--background)] font-[var(--font-dm-sans)]">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-blue)] dark:text-gray-200 leading-snug">
                Why Email Marketing Still Delivers the Highest ROI
              </h2>

              <div className="w-20 h-1 bg-[var(--primary-green)] mt-4 mb-6 rounded-full"></div>
              <p className="text-[var(--text-gray)] leading-relaxed mb-10 dark:text-gray-400">
                Email marketing allows brands to communicate directly with their
                audience in a personalized, cost-effective, and measurable way.
                Unlike social media or paid ads, email gives you full ownership
                of your audience and consistent engagement across every stage of
                the customer journey.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex gap-4 bg-gray-500/10 p-4 rounded-lg">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--primary-green)]/10">
                    <Mail className="text-[var(--primary-green)]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--primary-blue)] dark:text-gray-200">
                      Direct Communication
                    </h4>
                    <p className="text-sm text-[var(--text-gray)] dark:text-gray-400">
                      Reach high-intent users directly in their inbox.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4  bg-gray-500/10 p-4 rounded-lg">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--primary-green)]/10">
                    <TrendingUp
                      className="text-[var(--primary-green)]"
                      size={20}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--primary-blue)] dark:text-gray-200">
                      Better Conversions
                    </h4>
                    <p className="text-sm text-[var(--text-gray)] dark:text-gray-200">
                      Higher ROI compared to social and paid ads.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 sm:col-span-2  bg-gray-500/10 p-4 rounded-lg">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--primary-green)]/10">
                    <Target className="text-[var(--primary-green)]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--primary-blue)] dark:text-gray-200">
                      Full Control & Retention
                    </h4>
                    <p className="text-sm text-[var(--text-gray)] dark:text-gray-200">
                      Control timing, messaging and nurture long-term
                      relationships.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[var(--primary-green)]/10 rounded-full blur-2xl"></div>

              <Image
                src={Email_marketing}
                alt="Email Marketing Strategy"
                width={500}
                height={500}
                className="rounded-2xl shadow-xl object-cover"
              />
            </div>
          </div>
        </section>
        <section className="w-full grid place-items-center mt-20 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 rounded-xl md:rounded-4xl bg-[url('/upload/PPC-banner-scaled.webp')] bg-no-repeat bg-cover bg-center relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#00000090] overflow-hidden">
          <div className="w-full max-w-7xl flex flex-col items-center justify-center gap-6 px-4 md:px-6 lg:px-10 my-20 z-10">
            <h2 className="text-2xl lg:text-4xl text-white font-semibold text-center lg:text-left">
              Our Email Marketing Services in Chennai
            </h2>
            <div className="w-full grid max-w-7xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2.5 gap-5 mt-3.5 2xl:mt-8">
              <div className="bg-white flex flex-col items-center justify-center gap-5 px-12 py-8 group overflow-hidden rounded-2xl -z-10">
                <div className="w-full h-full flex flex-col items-start justify-start gap-5 relative transform transition-[width,height,top,left] duration-500">
                  <div className="w-5 h-5 md:w-8 md:h-8 lg:w-[48px] lg:h-[48px] rounded-full bg-linear-to-tr from-[#4EABF4] to-[#52B9A9] absolute -z-10 left-0 top-0 -translate-x-2 -translate-y-2 onhover-scale opacity-85"></div>
                  <div className="w-full flex flex-col items-start center-start gap-2.5">
                    <i className="ri-rocket-line text-2xl md:text-4xl lg:text-5xl"></i>
                    <p className="capitalize md:text-lg text-gray-700 font-bold">
                      Email Campaign Strategy & Planning
                    </p>
                    <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm md:text-sm">
                      We analyze your business goals, audience segments, and
                      funnel stages to create a clear email marketing roadmap
                      aligned with conversions and long-term engagement.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white flex flex-col items-center justify-center gap-5 px-12 py-8 group overflow-hidden rounded-2xl -z-10">
                <div className="w-full h-full flex flex-col items-start justify-start gap-5 relative transform transition-[width,height,top,left] duration-500">
                  <div className="w-5 h-5 md:w-8 md:h-8 lg:w-[48px] lg:h-[48px] rounded-full bg-linear-to-tr from-[#4EABF4] to-[#52B9A9] absolute -z-10 left-0 top-0 -translate-x-2 -translate-y-2 onhover-scale opacity-85"></div>
                  <div className="w-full flex flex-col items-start center-start gap-2.5">
                    <i className="ri-stackshare-line text-2xl md:text-4xl lg:text-5xl"></i>
                    <p className="capitalize md:text-lg text-gray-700 font-bold">
                      Email Automation & Workflow Setup
                    </p>
                    <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm md:text-sm">
                      From welcome sequences to abandoned cart emails and
                      re-engagement flows, we build automated workflows that
                      work continuously to convert and retain users.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white flex flex-col items-center justify-center gap-5 px-12 py-8 group overflow-hidden rounded-2xl -z-10">
                <div className="w-full h-full flex flex-col items-start justify-start gap-5 relative transform transition-[width,height,top,left] duration-500">
                  <div className="w-5 h-5 md:w-8 md:h-8 lg:w-[48px] lg:h-[48px] rounded-full bg-linear-to-tr from-[#4EABF4] to-[#52B9A9] absolute -z-10 left-0 top-0 -translate-x-2 -translate-y-2 onhover-scale opacity-85"></div>
                  <div className="w-full flex flex-col items-start center-start gap-2.5">
                    <BriefcaseBusiness className="w-6 h-6 md:h-9 md:w-9 lg:w-12 lg:h-12" />
                    <p className="capitalize md:text-lg text-gray-700 font-bold">
                      Newsletter & Content Emails
                    </p>
                    <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm md:text-sm">
                      We design value-driven newsletters that keep your brand
                      top-of-mind while driving clicks, traffic, and trust over
                      time.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white flex flex-col items-center justify-center gap-5 px-12 py-8 group overflow-hidden rounded-2xl -z-10">
                <div className="w-full h-full flex flex-col items-start justify-start gap-5 relative transform transition-[width,height,top,left] duration-500">
                  <div className="w-5 h-5 md:w-8 md:h-8 lg:w-[48px] lg:h-[48px] rounded-full bg-linear-to-tr from-[#4EABF4] to-[#52B9A9] absolute -z-10 left-0 top-0 -translate-x-2 -translate-y-2 onhover-scale opacity-85"></div>
                  <div className="w-full flex flex-col items-start center-start gap-2.5">
                    <UserStar className="w-6 h-6 md:h-9 md:w-9 lg:w-12 lg:h-12" />
                    <p className="capitalize md:text-lg text-gray-700 font-bold">
                      Promotional & Transactional Emails
                    </p>
                    <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm md:text-sm">
                      High-impact promotional campaigns and essential
                      transactional emails optimized for deliverability,
                      clarity, and user experience.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white flex flex-col items-center justify-center gap-5 px-12 py-8 group overflow-hidden rounded-2xl -z-10">
                <div className="w-full h-full flex flex-col items-start justify-start gap-5 relative transform transition-[width,height,top,left] duration-500">
                  <div className="w-5 h-5 md:w-8 md:h-8 lg:w-[48px] lg:h-[48px] rounded-full bg-linear-to-tr from-[#4EABF4] to-[#52B9A9] absolute -z-10 left-0 top-0 -translate-x-2 -translate-y-2 onhover-scale opacity-85"></div>
                  <div className="w-full flex flex-col items-start center-start gap-2.5">
                    <UserStar className="w-6 h-6 md:h-9 md:w-9 lg:w-12 lg:h-12" />
                    <p className="capitalize md:text-lg text-gray-700 font-bold">
                      Email Design & Copywriting
                    </p>
                    <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm md:text-sm">
                      Conversion-focused email design and copy crafted to
                      improve open rates, click-through rates, and user
                      engagement.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white flex flex-col items-center justify-center gap-5 px-12 py-8 group overflow-hidden rounded-2xl -z-10">
                <div className="w-full h-full flex flex-col items-start justify-start gap-5 relative transform transition-[width,height,top,left] duration-500">
                  <div className="w-5 h-5 md:w-8 md:h-8 lg:w-[48px] lg:h-[48px] rounded-full bg-linear-to-tr from-[#4EABF4] to-[#52B9A9] absolute -z-10 left-0 top-0 -translate-x-2 -translate-y-2 onhover-scale opacity-85"></div>
                  <div className="w-full flex flex-col items-start center-start gap-2.5">
                    <UserStar className="w-6 h-6 md:h-9 md:w-9 lg:w-12 lg:h-12" />
                    <p className="capitalize md:text-lg text-gray-700 font-bold">
                      Analytics, Testing & Optimization
                    </p>
                    <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm md:text-sm">
                      Continuous A/B testing, performance tracking, and
                      optimization to improve results with every campaign.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-5 grid place-items-center mt-20 px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 relative">
          <div className="w-full max-w-6xl flex flex-col items-stretch justify-center">
            <div className="w-full flex flex-col items-center justify-center gap-3 md:gap-3.5 p-2.5">
              <h2 className="text-4xl xl:text-[42px] font-semibold text-center md:text-left capitalize dark:text-gray-200 pr-4">
                Our Email Marketing Process
              </h2>
            </div>
            <div className="w-full grid max-w-7xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 p-2.5 gap-5 mt-3.5 2xl:mt-8">
              <div className="w-full rounded-md p-3 md:p-4 lg:p-8 flex flex-col items-center justify-center gap-2.5 border border-gray-200 shadow-[0px_4px_8px_rgba(0,0,0,0.08),0px_-4px_8px_rgba(0,0,0,0.05)] dark:shadow-[0px_4px_8px_rgba(255,255,255,0.08),0px_-4px_8px_rgba(255,255,255,0.05)]">
                <span className="md:text-lg font-medium lg:font-bold dark:text-gray-200">
                  Business & Audience Analysis
                </span>
              </div>
              <div className="w-full rounded-md p-3 md:p-4 lg:p-8 flex flex-col items-center justify-center gap-2.5 border border-gray-200 shadow-[0px_4px_8px_rgba(0,0,0,0.08),0px_-4px_8px_rgba(0,0,0,0.05)] dark:shadow-[0px_4px_8px_rgba(255,255,255,0.08),0px_-4px_8px_rgba(255,255,255,0.05)]">
                <span className="md:text-lg font-medium lg:font-bold dark:text-gray-200">
                  Campaign Strategy & Funnel Mapping
                </span>
              </div>
              <div className="w-full rounded-md p-3 md:p-4 lg:p-8 flex flex-col items-center justify-center gap-2.5 border border-gray-200 shadow-[0px_4px_8px_rgba(0,0,0,0.08),0px_-4px_8px_rgba(0,0,0,0.05)] dark:shadow-[0px_4px_8px_rgba(255,255,255,0.08),0px_-4px_8px_rgba(255,255,255,0.05)]">
                <span className="md:text-lg font-medium lg:font-bold dark:text-gray-200">
                  Email Design & Copy Development
                </span>
              </div>
              <div className="w-full rounded-md p-3 md:p-4 lg:p-8 flex flex-col items-center justify-center gap-2.5 border border-gray-200 shadow-[0px_4px_8px_rgba(0,0,0,0.08),0px_-4px_8px_rgba(0,0,0,0.05)] dark:shadow-[0px_4px_8px_rgba(255,255,255,0.08),0px_-4px_8px_rgba(255,255,255,0.05)]">
                <span className="md:text-lg font-medium lg:font-bold dark:text-gray-200">
                  Automation & Tool Integration
                </span>
              </div>
              <div className="w-full rounded-md p-3 md:p-4 lg:p-8 flex flex-col items-center justify-center gap-2.5 border border-gray-200 shadow-[0px_4px_8px_rgba(0,0,0,0.08),0px_-4px_8px_rgba(0,0,0,0.05)] dark:shadow-[0px_4px_8px_rgba(255,255,255,0.08),0px_-4px_8px_rgba(255,255,255,0.05)]">
                <span className="md:text-lg font-medium lg:font-bold dark:text-gray-200">
                  Testing, Launch & Monitoring
                </span>
              </div>
              <div className="w-full rounded-md p-3 md:p-4 lg:p-8 flex flex-col items-center justify-center gap-2.5 border border-gray-200 shadow-[0px_4px_8px_rgba(0,0,0,0.08),0px_-4px_8px_rgba(0,0,0,0.05)] dark:shadow-[0px_4px_8px_rgba(255,255,255,0.08),0px_-4px_8px_rgba(255,255,255,0.05)]">
                <span className="md:text-lg font-medium lg:font-bold dark:text-gray-200">
                  Optimization & Reporting
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-20 bg-[var(--background)] font-[var(--font-dm-sans)] ">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-blue)] dark:text-gray-200">
              Who Can Benefit from Our Email Marketing Services?
            </h2>

            <div className="w-24 h-1 bg-[var(--primary-green)] mx-auto mt-4 rounded-full"></div>
            <p className="mt-6 text-[var(--text-gray)] max-w-3xl mx-auto leading-relaxed dark:text-gray-400">
              Our strategies adapt based on industry behavior, audience
              maturity, and business goals.
            </p>

            {/* Chips */}
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              {industries.map((industry, index) => (
                <span
                  key={index}
                  className="px-6 py-3 text-sm md:text-base font-medium rounded-full dark:text-gray-400 dark:border-gray-300
              bg-[var(--primary-green)]/10 
              text-[var(--primary-blue)]
              border border-[var(--primary-green)]/30
              hover:bg-[var(--primary-green)]
              hover:text-white
              transition-all duration-300 cursor-pointer"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-20 bg-white font-[var(--font-dm-sans)]">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* LEFT SIDE */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-blue)] leading-snug">
                Why Choose Rankraze as Your Email Marketing Company in Chennai
              </h2>

              <div className="w-24 h-1 bg-[var(--primary-green)] mt-4 mb-8 rounded-full"></div>

              <div className="space-y-6">
                {points.map((point, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle
                      className="text-[var(--primary-green)] mt-1"
                      size={22}
                    />
                    <p className="text-[var(--text-gray)] text-base leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[var(--primary-blue)] text-white rounded-2xl p-10 shadow-xl relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[var(--primary-green)]/20 rounded-full blur-3xl"></div>
              <h3 className="text-2xl font-semibold mb-6">
                We Don’t Just Send Emails —
              </h3>

              <p className="text-lg leading-relaxed text-white/90">
                We build systems that convert. Our structured,
                performance-driven approach ensures measurable growth, scalable
                automation, and long-term customer retention.
              </p>

              <div className="mt-8 border-t border-white/20 pt-6">
                <p className="text-sm text-white/80">
                  Trusted by businesses across Chennai for ROI-focused email
                  marketing execution.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-20 bg-[var(--background)] font-[var(--font-dm-sans)]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-blue)] dark:text-gray-200">
                Tools & Platforms We Work With (Authority Signal)
              </h2>
              <div className="w-24 h-1 bg-[var(--primary-green)] mx-auto mt-4 rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {images.map((src, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition duration-300 group"
                >
                  <Image
                    src={src}
                    alt={`Gallery Image ${index + 1}`}
                    width={800}
                    height={600}
                    className="w-full md:h-30 h-auto group-hover:scale-105 transition duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-20 bg-white font-[var(--font-dm-sans)]">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-blue)]">
              Email Marketing vs Other Digital Channels
            </h2>
            <div className="w-24 h-1 bg-[var(--primary-green)] mx-auto mt-4 rounded-full"></div>
            <p className="mt-6 text-[var(--text-gray)] max-w-3xl mx-auto">
              A strategic comparison of ownership, cost efficiency, and
              conversion potential across major digital marketing channels.
            </p>
            <div className="hidden md:block mt-12">
              <div className="overflow-hidden rounded-xl shadow-lg border border-[var(--border)]">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[var(--primary-blue)] text-white text-left">
                      <th className="px-6 py-4 text-sm font-semibold">
                        Channel
                      </th>
                      <th className="px-6 py-4 text-sm font-semibold">
                        Ownership
                      </th>
                      <th className="px-6 py-4 text-sm font-semibold">
                        Cost Efficiency
                      </th>
                      <th className="px-6 py-4 text-sm font-semibold">
                        Conversion Potential
                      </th>
                    </tr>
                  </thead>

                  <tbody className="text-[var(--text-gray)] text-left">
                    <tr className="bg-[var(--primary-green)]/5 border-b">
                      <td className="px-6 py-4 font-semibold text-[var(--primary-blue)]">
                        Email Marketing
                      </td>
                      <td className="px-6 py-4 text-green-600 font-medium">
                        High
                      </td>
                      <td className="px-6 py-4 text-green-600 font-medium">
                        Very High
                      </td>
                      <td className="px-6 py-4 text-green-600 font-medium">
                        High
                      </td>
                    </tr>

                    <tr className="border-b">
                      <td className="px-6 py-4 font-semibold">Social Media</td>
                      <td className="px-6 py-4">Low</td>
                      <td className="px-6 py-4">Medium</td>
                      <td className="px-6 py-4">Medium</td>
                    </tr>

                    <tr className="border-b">
                      <td className="px-6 py-4 font-semibold">Paid Ads</td>
                      <td className="px-6 py-4 text-red-500">None</td>
                      <td className="px-6 py-4 text-red-500">Low</td>
                      <td className="px-6 py-4">High (Short-term)</td>
                    </tr>

                    <tr>
                      <td className="px-6 py-4 font-semibold">SEO</td>
                      <td className="px-6 py-4">Medium</td>
                      <td className="px-6 py-4 text-green-600">High</td>
                      <td className="px-6 py-4">Long-term</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="md:hidden mt-12 space-y-6 text-left">
              <div className="bg-[var(--primary-green)]/5 p-6 rounded-xl shadow border border-[var(--border)]">
                <h3 className="font-semibold text-[var(--primary-blue)] mb-3">
                  Email Marketing
                </h3>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-medium">Ownership:</span> High
                  </p>
                  <p>
                    <span className="font-medium">Cost Efficiency:</span> Very
                    High
                  </p>
                  <p>
                    <span className="font-medium">Conversion:</span> High
                  </p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow border border-[var(--border)]">
                <h3 className="font-semibold mb-3">Social Media</h3>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-medium">Ownership:</span> Low
                  </p>
                  <p>
                    <span className="font-medium">Cost Efficiency:</span> Medium
                  </p>
                  <p>
                    <span className="font-medium">Conversion:</span> Medium
                  </p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow border border-[var(--border)]">
                <h3 className="font-semibold mb-3">Paid Ads</h3>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-medium">Ownership:</span> None
                  </p>
                  <p>
                    <span className="font-medium">Cost Efficiency:</span> Low
                  </p>
                  <p>
                    <span className="font-medium">Conversion:</span> High
                    (Short-term)
                  </p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow border border-[var(--border)]">
                <h3 className="font-semibold mb-3">SEO</h3>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-medium">Ownership:</span> Medium
                  </p>
                  <p>
                    <span className="font-medium">Cost Efficiency:</span> High
                  </p>
                  <p>
                    <span className="font-medium">Conversion:</span> Long-term
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-20 font-[var(--font-dm-sans)]">
          <div className="max-w-6xl mx-auto px-6">
            <div
              className="relative overflow-hidden rounded-3xl px-8 py-16 text-center text-white shadow-2xl
          bg-[var(--primary-blue)]"
            >
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
              <h2 className="text-3xl md:text-4xl font-bold leading-snug max-w-3xl mx-auto">
                Get Started with a Results-Driven Email Marketing Strategy
              </h2>
              <p className="mt-6 text-white/90 max-w-2xl mx-auto text-lg leading-relaxed">
                Whether you want to increase engagement, nurture leads, or
                improve customer retention, our team can help you build a
                high-performing email marketing system tailored to your business
                goals.
              </p>
              <div className="mt-10">
                <div className="flex justify-center">
                  <ContactFormModalButtonOne
                    Button="Talk to an Email Marketing Expert"
                    Dark={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-padding dark:bg-[var(--popover)] p-10 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="mb-16">
                <h2 className="heading-medium text-center text-2xl md:text-3xl lg:text-4xl font-bold">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-4">
                {/* Accordion Item 1 */}
                <div className="bg-gray-50 rounded-md overflow-hidden shadow ">
                  <input
                    type="radio"
                    name="accordion"
                    id="acc1"
                    className="peer hidden"
                    defaultChecked
                  />
                  <label
                    htmlFor="acc1"
                    className="flex justify-between p-5 cursor-pointer bg-white  transition-all duration-300 peer-checked:bg-gradient-to-br peer-checked:from-[#3DBC9C] peer-checked:to-[#36aaf1]"
                  >
                    <span className="text-sm font-bold text-black peer-checked:text-white">
                      How often should businesses send marketing emails?
                    </span>
                  </label>
                  <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96 p-0 peer-checked:p-5 text-gray-600 text-sm">
                    It depends on your audience, industry, and campaign goal. We
                    usually recommend 2–4 value-driven emails per month for most
                    businesses.
                  </div>
                </div>

                {/* Accordion Item 2 */}
                <div className="bg-gray-50 rounded-md overflow-hidden shadow">
                  <input
                    type="radio"
                    name="accordion"
                    id="acc2"
                    className="peer hidden"
                  />
                  <label
                    htmlFor="acc2"
                    className="flex justify-between p-5 cursor-pointer bg-white   peer-checked:bg-gradient-to-br peer-checked:from-[#3DBC9C] peer-checked:to-[#36aaf1]"
                  >
                    <span className="text-sm font-bold text-black peer-checked:text-white">
                      Is email marketing suitable for small businesses?
                    </span>
                  </label>
                  <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96 p-0 peer-checked:p-5 text-gray-600 text-sm">
                    Yes. Email marketing is cost-effective and ideal for SMEs
                    looking to build long-term customer relationships.
                  </div>
                </div>

                {/* Accordion Item 3 */}
                <div
                  className="bg-gray-50 rounded-md overflow-hidden shadow
          "
                >
                  <input
                    type="radio"
                    name="accordion"
                    id="acc3"
                    className="peer hidden"
                  />
                  <label
                    htmlFor="acc3"
                    className="flex justify-between p-5 cursor-pointer  bg-white  transition-all duration-300 peer-checked:bg-gradient-to-br peer-checked:from-[#3DBC9C] peer-checked:to-[#36aaf1]"
                  >
                    <span className="text-sm font-bold text-black">
                      Will email marketing help generate leads?
                    </span>
                  </label>
                  <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96 p-0 peer-checked:p-5 text-gray-600 text-sm">
                    When combined with proper segmentation and automation, email
                    marketing is one of the most effective lead-nurturing
                    channels.
                  </div>
                </div>

                {/* Accordion Item 4 */}
                <div
                  className="bg-gray-50 rounded-md overflow-hidden shadow
          "
                >
                  <input
                    type="radio"
                    name="accordion"
                    id="acc4"
                    className="peer hidden"
                  />
                  <label
                    htmlFor="acc4"
                    className="flex justify-between p-5 cursor-pointer bg-white  transition-all duration-300 peer-checked:bg-gradient-to-br peer-checked:from-[#3DBC9C] peer-checked:to-[#36aaf1]"
                  >
                    <span className="text-sm font-bold text-black">
                      Do you provide email automation services?
                    </span>
                  </label>
                  <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96 p-0 peer-checked:p-5 text-gray-600 text-sm">
                    Yes. Automation is a core part of our email marketing
                    strategy.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}