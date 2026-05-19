import dynamic from "next/dynamic";
import BannerScrollBar from "./components/UI/BannerScrollBar";
import { Suspense } from "react";
import TypingAnimationClient from "./components/TypingAnimationClient";
import Link from "next/link";
import ContactFormModalButtonOne from "./components/UI/ContactFormModalButtonOne";
import ScrollAnimationWrapper from "./components/UI/ScrollAnimationWrapper";
import type { Metadata } from "next";

// --- Named export (scroll-velocity marquee) ---
const ScrollVelocityImages = dynamic(
  () => import("./components/animation/ClientLogoSlider").then((m) => ({ default: m.ScrollVelocityImages })),
  { loading: () => <div className="min-h-[120px] w-full" /> }
);

// --- Below-fold content sections ---
const WhyDigitalMarketing = dynamic(() => import("./components/UI/WhyDigitalMarketing"), {
  loading: () => <div className="min-h-[300px]" />,
});
const AboutRankraze = dynamic(() => import("./components/UI/AboutRankraze"), {
  loading: () => <div className="min-h-[400px]" />,
});
const IndustriesSection = dynamic(() => import("./components/UI/IndustriesSection"), {
  loading: () => <div className="min-h-[400px]" />,
});
const SuccessStoriesSlider = dynamic(() => import("./components/UI/SuccessStorySlider"), {
  loading: () => <div className="min-h-[400px]" />,
});
const LatestBogs = dynamic(() => import("./components/LatestBlogs"), {
  loading: () => <div className="min-h-[400px]" />,
});
const SubComponent = dynamic(() => import("./components/UI/SubComponent"), {
  loading: () => <div className="min-h-[200px]" />,
});
const ServiceSection = dynamic(() => import("./components/UI/ServiceSection"), {
  loading: () => <div className="min-h-[500px]" />,
});
const WhyChooseUs = dynamic(() => import("./components/UI/WhyChooseUs"), {
  loading: () => <div className="min-h-[500px]" />,
});
const AiPowereddSection = dynamic(() => import("./components/UI/AiPoweredSection"), {
  loading: () => <div className="min-h-[500px]" />,
});
const OurProcess = dynamic(() => import("./components/UI/OurProcess"), {
  loading: () => <div className="min-h-[500px]" />,
});
const FAQ = dynamic(() => import("./components/UI/FAQ"), {
  loading: () => <div className="min-h-[500px]" />,
});

export const revalidate = 3600; // revalidate at most every hour

export const metadata: Metadata = {
  metadataBase: new URL("https://rankraze.us"),
  title: "Digital Marketing Agency in Texas | 2000+ Brands, 233K+ Leads — Rankraze",
  description: "Trusted by top brands across the US. We deliver SEO, PPC & social media that generates qualified leads. 340% avg ROI. Free strategy call today.",
  keywords: ["digital marketing agency in Texas",
    "digital marketing company in Texas",
    "Texas digital marketing services",
    "best digital marketing agency Texas",
    "top digital marketing company Texas",
    "online marketing services Texas",
    "SEO company in Texas",
    "social media marketing Texas",
    "Texas digital marketing experts",
    "internet marketing agency Texas"],

  alternates: {
    canonical: "https://rankraze.us/",
  },

  openGraph: {
    title: "Digital Marketing Agency in Texas | Digital Marketing Company",
    description: "Rankraze Is a Digital Marketing Company in Texas. Our Passionate Team Is Working Towards Finding the Best Digital Marketing Services for SME Business.",
    url: "https://rankraze.us/",
    siteName: "Rankraze",
    images: [
      {
        url: "/business-consultant-mobile.webp",
        width: 846,
        height: 822,
        alt: "business-consultant-mobile.webp",
        type: "image/webp"
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Agency in Texas | Digital Marketing Company",
    description: "Rankraze Is a Digital Marketing Company in Texas. Our Passionate Team Is Working Towards Finding the Best Digital Marketing Services for SME Business.",
    site: "@YourTwitterHandle",
    creator: "@YourTwitterHandle",
    images: ["/business-consultant-mobile.webp"],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },

};

const MapAndLocationMatch = dynamic(
  () => import("./components/UI/MapAndLocationMatch"),
  { loading: () => <div /> },
);
const ClientTestimonialSlider = dynamic(
  () => import("./components/UI/ClientTestimonialSlider"),
  { loading: () => <div /> },
);

export default function Home() {
  return (
    <>
      <section className="grid justify-items-center dark:bg-[var(--prim-dark-bg)] mt-20 px-4 md:px-6 overflow-hidden lg:px-10 text-[var(--text-black)] transition-colors duration-300">
        <div className="flex flex-col items-center justify-center w-full min-h-dvh">
          <div className="w-full h-2/3 flex flex-col items-center justify-center relative before:content-[''] before:absolute before:w-full before:h-full before:rounded-t-4xl before:rounded-bl-4xl before:bg-[linear-gradient(135deg,_#e8f5f2_0%,_#f5fffd_100%)] dark:before:bg-[linear-gradient(75deg,_#0D2244_5%,_#050d1a_25%,_#0D2244_100%)] dark:before:invert-0 before:-z-10">
            <div className="w-full h-full max-w-[1700px] flex flex-col md:flex-row items-center xl:px-24 2xl:px-36 relative">
              <div className="flex items-center justify-end w-full md:w-1/2 h-full max-w-xl py-9 md:py-0">
                <div className="flex flex-col items-start justify-center gap-2.5 md:gap-3 lg:gap-3.5 xl:gap-4 px-9">
                  <h3 className="capitalize dark:bg-[linear-gradient(132deg,_#3dbc9b_0%,_#37a7ff_100%)] dark:text-gray-50 text-xs text-gray-900 bg-[var(--primary-green)] py-1.5 px-2 rounded-lg">
                    #1 digital marketing company
                  </h3>
                  <h2 className="capitalize font-black text-xl text-left dark:text-gray-100">
                    a <TypingAnimationClient /> driven
                  </h2>
                  <h1 className="capitalize text-xl xl:text-4xl font-black dark:text-gray-100 inline">
                    digital marketing agency in Texas That Drives Real Business Growth
                  </h1>
                  <p className="text-sm text-gray-400 first-letter:uppercase  font-medium  ">
                  SEO, Paid Ads & CRO strategies designed to generate qualified  leads and measurable  business growth.
                  </p>
                  <div className="flex items-center  justify-center gap-4">
                    <ContactFormModalButtonOne
                      Button={"get free consultation"}
                      Dark={true}
                    />
                    <Link
                      href="/case-study"
                      rel="preload"
                      className="capitalize cursor-pointer outline-1 outline-[var(--primary-green)] rounded-sm px-2 text-center py-2.5 text-sm  hover:bg-[var(--primary-green)] font-medium hover:text-white dark:text-white"
                    >
                      Our Case Study
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex items-end justify-center 2xl:justify-start max-w-full w-full md:w-1/2 h-full z-10 pl-3 md:pl-6 xl:pl-12 2xl:pl-16 relative">
                <BannerScrollBar/>
                <div className="hidden md:block absolute left-0 bottom-1/4">
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-1/3 flex items-center justify-center mt-20 md:mt-16">
            <div className="flex flex-col h-full items-center justify-center w-full max-w-7xl">
              <h2 className="text-xl font-bold whitespace-normal max-w-96 text-center dark:text-gray-100">
                Trusted by{" "}
                <span className="relative z-0 text-white dark:text-[#050D1A] after:content-[''] after:absolute after:w-[calc(100%+8px)] after:h-[calc(100%+4px)] after:-skew-3 after:bg-[var(--primary-green)] dark:after:bg-gradient-to-r dark:after:from-[#22D3EE] dark:after:to-[#5EEAD4] after:-z-10 after:-top-0.5 after:-left-1">
                  2,000+
                </span>{" "}
                world-class brands and organizations of all sizes
              </h2>
              <div className="flex flex-col w-full max-w-[calc(100vw-34px)] h-full min-h-60 overflow-x-hidden mt-2.5 relative before:absolute before:content-[''] before:w-5 before:h-full before:left-0 before:top-0 before:z-10 before:bg-gradient-to-r before:from-[#ffffff] dark:before:from-[var(--prim-dark-bg)] before:to-transparent after:absolute after:content-[''] after:h-full after:w-5 after:right-0 after:top-0 after:z-10 after:bg-gradient-to-r after:from-transparent after:to-[#ffffff] dark:after:to-[var(--prim-dark-bg)]">
                <ScrollVelocityImages
                  images={[
                    [
                      "/brand-logo/Anna-University-1-1.webp",
                      "/brand-logo/appolo.webp",
                      "/brand-logo/Bajaj_Finserv_logo.webp",
                      "/brand-logo/Cars-india.webp",
                      "/brand-logo/Clearone-1-1.webp",
                      "/brand-logo/europe-1.webp",
                      "/brand-logo/IIT_Madras.webp",
                      "/brand-logo/irqs-2-1.webp",
                      "/brand-logo/Johnson-Lifts-LOGO.webp",
                      "/brand-logo/k-link.webp",
                      "/brand-logo/motilal-oswal-logo.webp",
                      "/brand-logo/mp-developers-1-1.webp",
                      "/brand-logo/murugappa.webp",
                      "/brand-logo/arunexcello.webp",
                    ],
                    [
                      "/brand-logo/NDTV-2.webp",
                      "/brand-logo/omkar-share-banner.webp",
                      "/brand-logo/pizza-hut.webp",
                      "/brand-logo/puruvankara-1.webp",
                      "/brand-logo/renault-nissan.webp",
                      "/brand-logo/shizen-energy.webp",
                      "/brand-logo/shriram-finance-logo.webp",
                      "/brand-logo/silkway.webp",
                      "/brand-logo/TAFE-Logo.webp",
                      "/brand-logo/tradeachievers_official-1.webp",
                      "/brand-logo/ttgroup_logo.webp",
                      "/brand-logo/virginia-tech.webp",
                      "/brand-logo/yagen-logo.webp",
                      "/brand-logo/mv_logo_full.webp",
                    ],
                  ]}
                  velocity={80}
                  numCopies={2}
                  imageSizes="108px"
                  imageQuality={55}
                  className="custom-scroll-text"
                />
              </div>
            </div>
          </div>
        </div>
        <WhyDigitalMarketing/>
      </section>
      <ScrollAnimationWrapper className="grid justify-items-center dark:bg-none  px-4 md:px-6 overflow-hidden lg:px-10 text-[var(--text-black)]">
        <div className="w-full mt-15 flex items-center justify-center">
          <div
            id="services"
            className="w-full max-w-7xl flex flex-col items-center justify-center gap-1.5 mb-10"
          >
            <div className="inline-flex items-center gap-2 bg-white border-[1.5px] my-5 border-[#3cba99] text-[#0f6e56] font-['Sora'] text-[11px] font-bold tracking-[0.08em] uppercase px-4 py-2 rounded-full shadow-[0_0_0_4px_rgba(60,186,153,0.07)] leading-none">
              <span className="ai-dot w-[7px] h-[7px] bg-[#3cba99] rounded-full flex-shrink-0 inline-block" />
              Our Services
            </div>
            <div className="md:text-4xl text-3xl font-bold dark:text-gray-300 capitalize text-center md:text-left">
              our specialized Digital Marketing Services
            </div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 pt-3 leading-loose max-w-2xl text-left md:text-center">
              We take pride in offering a wide array of specialized digital
              marketing services to cater to the unique needs of our clients.
              Some of our key services include:
            </p>
          </div>
        </div>
      </ScrollAnimationWrapper>
      <ServiceSection />
      <SubComponent />

      <AiPowereddSection />
      <WhyChooseUs />
      <SuccessStoriesSlider />
      <OurProcess />
      <IndustriesSection/>
      <AboutRankraze />
      <section className="flex items-center justify-center flex-col dark:bg-none mt-10 text-[var(--text-black)] gap-6 w-full px-6 md:px-8 lg:px-10">
        <ScrollAnimationWrapper className="flex flex-col items-center justify-center gap-6 w-full">
          <div className="inline-flex items-center gap-2 bg-white border-[1.5px] border-[#3cba99] text-[#0f6e56] font-['Sora'] text-[11px] font-bold tracking-[0.08em] uppercase px-4 py-2 rounded-full shadow-[0_0_0_4px_rgba(60,186,153,0.07)] leading-none">
            <span className="ai-dot w-[7px] h-[7px] bg-[#3cba99] rounded-full flex-shrink-0 inline-block" />
            Our Success stories
          </div>
          <div className="w-full max-w-[700px] flex flex-col items-center justify-center gap-2.5 md:gap-5 mt-3.5 ">
            <h2 className="text-3xl md:text-[40px] font-bold capitalize text-gray-900 dark:text-gray-200 text-center leading-tight">
              client success stories: hear what our clients have to say
            </h2>
          </div>
        </ScrollAnimationWrapper>
        <ClientTestimonialSlider />
      </section>
      <FAQ />
      <section className="flex items-center justify-center flex-col dark:bg-none mt-20 text-[var(--text-black)] gap-6 w-full px-6 md:px-8 lg:px-10">
        <Suspense fallback={<div className="w-full max-w-7xl h-96 animate-pulse bg-gray-100 dark:bg-gray-800 rounded-lg mt-20" />}>
          <LatestBogs />
        </Suspense>
      </section>
      <section className="flex items-center justify-center flex-col dark:bg-none mt-30  text-[var(--text-black)] gap-6 w-full px-6 md:px-8 lg:px-10">
        <div className="w-full max-w-5xl flex flex-col items-center justify-center gap-3.5 p-3">
          <div className="w-full flex flex-col items-center justify-center">
            <h2 className="uppercase text-sm font-medium text-[var(--primary-blue)] dark:text-[#6bffe4]">
              need more help?
            </h2>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-gray-200 text-center max-w-xl capitalize mt-2">
              our friendly support team is here to help.
            </h2>
          </div>
          <div className="w-full flex flex-col md:flex-row items-stretch justify-around gap-3 mt-4">
            <div className="w-full md:w-1/3 max-w-sm md:max-w-none px-4 py-8 flex flex-col items-center justify-center shadow-[0px_3px_12px_rgba(0,0,0,0.07),0px_-3px_12px_rgba(0,0,0,0.07)] dark:shadow-[0px_3px_12px_rgba(225,225,225,0.06),0px_-3px_12px_rgba(225,225,225,0.06)] dark:border dark:border-gray-400 rounded-lg">
              <p className="text-xl text-semibold text-gray-900 dark:text-gray-300">
                Address
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 p-1.5 text-center">
                2801 W, Royal Lane, Apt # 1905, Irving, TX - 75063
              </p>
            </div>
            <div className="w-full md:w-1/3 max-w-sm md:max-w-none px-4 py-8 flex flex-col items-center justify-center shadow-[0px_3px_12px_rgba(0,0,0,0.07),0px_-3px_12px_rgba(0,0,0,0.07)] dark:shadow-[0px_3px_12px_rgba(225,225,225,0.06),0px_-3px_12px_rgba(225,225,225,0.06)] dark:border dark:border-gray-400 rounded-lg">
              <p className="text-xl text-semibold text-gray-900 dark:text-gray-300">
                Email
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 p-1.5 text-center">
                info@rankraze.us
              </p>
            </div>
            <div className="w-full md:w-1/3 max-w-sm md:max-w-none px-4 py-8 flex flex-col items-center justify-center shadow-[0px_3px_12px_rgba(0,0,0,0.07),0px_-3px_12px_rgba(0,0,0,0.07)] dark:shadow-[0px_3px_12px_rgba(225,225,225,0.06),0px_-3px_12px_rgba(225,225,225,0.06)] dark:border dark:border-gray-400 rounded-lg">
              <p className="text-xl text-semibold text-gray-900 dark:text-gray-300">
                Call Us
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 p-1.5 text-center">
                +1 (919) 455-1241
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center flex-col dark:bg-none mt-20 text-[var(--text-black)] gap-6 w-full px-6 md:px-8 lg:px-10">
        <MapAndLocationMatch />
      </section>
    </>
  );
}
