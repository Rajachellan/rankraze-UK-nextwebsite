import Image from "next/image";
import dynamic from "next/dynamic";
import BannerScrollBar from "./components/UI/BannerScrollBar";
import { Suspense } from "react";
import HomePageLeadForm from "./components/UI/HomePageLeadForm";
import TypingAnimationClient from "./components/TypingAnimationClient";
import Link from "next/link";
import ContactFormModalButtonOne from "./components/UI/ContactFormModalButtonOne";
import ScrollAnimationWrapper from "./components/UI/ScrollAnimationWrapper";
import semrush from "../../public/upload/semrush.png";
import type { Metadata } from "next";

// --- Hero section (Statically imported for LCP optimization) ---

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
const CountStateSection = dynamic(() => import("./components/UI/CountStateSection"), {
  loading: () => <div className="min-h-[200px]" />,
});
const IndustriesSection = dynamic(() => import("./components/UI/IndustriesSection"), {
  loading: () => <div className="min-h-[400px]" />,
});
const PortfolioSection = dynamic(() => import("./components/UI/PortfolioSection"), {
  loading: () => <div className="min-h-[400px]" />,
});
const SuccessStoriesSection = dynamic(() => import("./components/UI/SuccessStories"), {
  loading: () => <div className="min-h-[500px]" />,
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

const ContactUsForm = dynamic(() => import("./components/UI/ContactUsForm"), {
  loading: () => <div />,
});
const MapAndLocationMatch = dynamic(
  () => import("./components/UI/MapAndLocationMatch"),
  { loading: () => <div /> },
);
const ClientTestimonialSlider = dynamic(
  () => import("./components/UI/ClientTestimonialSlider"),
  { loading: () => <div /> },
);
const SeoAndSentimentComponent = dynamic(
  () => import("./components/UI/SeoAndSentimentComponent"),
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
                {/* <div className="w-full max-w-lg relative flex items-center justify-center px-2 pt-2 after:content-[''] after:absolute after:w-11/12 after:z-0 after:aspect-square after:rounded-full after:bg-[linear-gradient(132deg,_#3dbc9b_0%,_#37a7ff_100%)] dark:after:invert">
                  <Image
                    src="/business.webp"
                    alt="hero image"
                    width={600}
                    height={640}
                    priority
                    fetchPriority="high"
                    sizes="(max-width: 768px) 100vw, 600px"
                    quality={75}
                    className="w-full z-10"
                    loading="eager"
                  />
                </div> */}
                <BannerScrollBar/>
                <div className="hidden md:block absolute left-0 bottom-1/4">
                  {/* <Image
                    src="/lite-icons1.webp"
                    alt="hero-image"
                    width={96}
                    height={111}
                    className="block md:w-14 dark:invert shake-vertical"
                    priority
                  /> */}
                </div>
                {/* <span className="absolute text-8xl font-bold capitalize right-0 bottom-0 text-center text-[var(--primary-green)] opacity-0 xl:opacity-10 z-10 dark:invert">
                  creative team
                </span> */}
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
        {/* <div className="w-full mt-12 md:mt-20 lg:mt-28 flex items-center justify-center">
          <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-12 xl:gap-16">
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
              <h2 className="text-4xl font-bold dark:text-gray-300">
                Rankraze –Your Trusted Digital Marketing Agency in Chennai
              </h2>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400 pt-3 leading-loose ">
                In today’s fast-paced digital era, businesses can no longer rely
                on traditional marketing methods to grow and compete. This is
                where <span className="font-bold">Rankraze</span>, a
                results-driven{" "}
                <span className="font-bold">
                  digital marketing agency in Chennai
                </span>
                , helps brands scale smarter and faster. As a trusted{" "}
                <span className="font-bold">
                  digital marketing company in Chennai
                </span>
                , Rankraze offers end-to-end services including SEO, Google Ads
                (SEM), Social Media Marketing (SMM), and Web Design &
                Development. Our experienced digital strategists deeply analyze
                your business goals, competitors, target audience, and market
                trends to craft data-backed strategies that deliver measurable
                growth. Whether you are an SME or an established brand, Rankraze
                helps you reach the right audience at the right time with
                high-performance digital solutions. We specialize in empowering
                industries such as Healthcare, Education, Food, Beauty, Real
                Estate, IT, E-commerce, Logistics, and more—helping businesses
                build a strong digital presence, generate quality leads, and
                achieve sustainable success in the competitive online landscape.
                <Link
                  href="/about-us"
                  className="inline-block text-[var(--primary-blue)] dark:text-[var(--primary-green)]"
                >
                  read more...
                </Link>
              </p>
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
              <HomePageLeadForm />
            </div>
          </div>
        </div> */}
      </section>
      {/* <SuccessStoriesSection /> */}
      {/* <PortfolioSection /> */}
      <ScrollAnimationWrapper className="grid justify-items-center dark:bg-none  px-4 md:px-6 overflow-hidden lg:px-10 text-[var(--text-black)]">
        <div className="w-full mt-15 flex items-center justify-center">
          <div
            id="services"
            className="w-full max-w-7xl flex flex-col items-center justify-center gap-1.5 mb-10"
          >
            {/* Pill */}
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
      {/* <section className="grid justify-items-center dark:bg-none  px-4 md:px-6 overflow-hidden lg:px-10 text-[var(--text-black)]">
        <div className="w-full mt-28 flex items-center justify-center">
          <div
            id="services"
            className="w-full max-w-7xl flex flex-col items-center justify-center gap-1.5"
          >
            <h3 className="text-4xl font-bold dark:text-gray-300 capitalize text-center md:text-left">
              our specialized Digital Marketing Services
            </h3>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 pt-3 leading-loose max-w-2xl text-left md:text-center">
              We take pride in offering a wide array of specialized digital
              marketing services to cater to the unique needs of our clients.
              Some of our key services include:
            </p>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-3.5 xl:mt-4">
              <div className="flex flex-col items-center justify-center gap-5 px-12 py-8 group overflow-hidden rounded-2xl dark:border dark:border-gray-100 dark:shadow-sm dark:shadow-gray-200">
                <div className="w-full h-full flex flex-col items-center justify-center gap-5 relative transform transition-[width,height,top,left] duration-500">
                  <div className="w-[60px] h-[60px] rounded-full bg-linear-to-tr from-[#4EABF4] to-[#52B9A9] absolute -z-10 left-0 top-0 -translate-x-2 -translate-y-2 onhover-scale"></div>
                  <div className="w-full flex items-center justify-start">
                    <Image
                      src="/icons/search-engine-optimization.webp"
                      alt="seo"
                      width={60}
                      height={60}
                    />
                  </div>
                  <div className="w-full flex flex-col items-start center-start gap-2.5">
                    <h4 className="capitalize font-bold text-xl text-gray-700 dark:text-gray-100">
                      SEO optimization
                    </h4>
                    <p className="text-gray-500 dark:text-gray-300 text-left leading-relaxed tracking-wide text-sm">
                      Improve your website’s visibility with result-driven SEO
                      strategies. We optimize keywords, content, and technical
                      elements to help businesses rank higher on Google and
                      attract quality organic traffic that converts.{" "}
                    </p>
                  </div>
                  <div className="w-full flex items-center justify-start mt-auto">
                    <Link
                      href={"seo-company-chennai"}
                      className="text-sm text-gray-900 bg-[var(--primary-green)] px-8 py-2.5 rounded-md tracking-wide"
                      aria-label="Learn more about SEO optimization"
                    >
                      Know more
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-5 px-12 py-8 group overflow-hidden rounded-2xl dark:border dark:border-gray-100 dark:shadow-sm dark:shadow-gray-200">
                <div className="w-full h-full flex flex-col items-center justify-center gap-5 relative transform transition-[width,height,top,left] duration-500">
                  <div className="w-[60px] h-[60px] rounded-full bg-linear-to-tr from-[#4EABF4] to-[#52B9A9] absolute -z-10 left-0 top-0 -translate-x-2 -translate-y-2 onhover-scale"></div>
                  <div className="w-full flex items-center justify-start">
                    <Image
                      src="/icons/digital-marketing.webp"
                      alt="social-media-marketing"
                      width={60}
                      height={60}
                    />
                  </div>
                  <div className="w-full flex flex-col items-start center-start gap-2.5">
                    <h4 className="capitalize font-bold text-xl text-gray-700 dark:text-gray-100">
                      social media marketing
                    </h4>
                    <p className="text-gray-500 dark:text-gray-300 text-left leading-relaxed tracking-wide text-sm">
                      Build a strong brand presence across platforms like
                      Instagram, Facebook, and LinkedIn. Our social media
                      strategies focus on engagement, lead generation, and
                      consistent growth through data-backed campaigns.
                    </p>
                  </div>
                  <div className="w-full flex items-center justify-start mt-auto">
                    <Link
                      href={"social-media-marketing-company-chennai"}
                      className="text-sm text-gray-900 bg-[var(--primary-green)] px-8 py-2.5 rounded-md tracking-wide"
                      aria-label="	Learn more about social media marketing"
                    >
                      Know more
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-5 px-12 py-8 group overflow-hidden rounded-2xl dark:border dark:border-gray-100 dark:shadow-sm dark:shadow-gray-200">
                <div className="w-full h-full flex flex-col items-center justify-center gap-5 relative transform transition-[width,height,top,left] duration-500">
                  <div className="w-[60px] h-[60px] rounded-full bg-linear-to-tr from-[#4EABF4] to-[#52B9A9] absolute -z-10 left-0 top-0 -translate-x-2 -translate-y-2 onhover-scale"></div>
                  <div className="w-full flex items-center justify-start">
                    <Image
                      src="/icons/content.webp"
                      alt="content-marketing"
                      width={60}
                      height={60}
                    />
                  </div>
                  <div className="w-full flex flex-col items-start center-start gap-2.5">
                    <h4 className="capitalize font-bold text-xl text-gray-700 dark:text-gray-100">
                      content marketing
                    </h4>
                    <p className="text-gray-500 dark:text-gray-300 text-left leading-relaxed tracking-wide text-sm">
                      Create meaningful content that attracts, engages, and
                      converts. From website content to blogs, our content
                      marketing approach focuses on storytelling, SEO value, and
                      user intent.{" "}
                    </p>
                  </div>
                  <div className="w-full flex items-center justify-start mt-auto">
                    <Link
                      href={"content-writing-agency-chennai"}
                      className="text-sm text-gray-900 bg-[var(--primary-green)] px-8 py-2.5 rounded-md tracking-wide"
                      aria-label="Learn more about content marketing"
                    >
                      Know more
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-5 px-12 py-8 group overflow-hidden rounded-2xl dark:border dark:border-gray-100 dark:shadow-sm dark:shadow-gray-200">
                <div className="w-full h-full flex flex-col items-center justify-center gap-5 relative transform transition-[width,height,top,left] duration-500">
                  <div className="w-[60px] h-[60px] rounded-full bg-linear-to-tr from-[#4EABF4] to-[#52B9A9] absolute -z-10 left-0 top-0 -translate-x-2 -translate-y-2 onhover-scale"></div>
                  <div className="w-full flex items-center justify-start">
                    <Image
                      src="/icons/email-marketing.webp"
                      alt="email-marketing"
                      width={60}
                      height={60}
                    />
                  </div>
                  <div className="w-full flex flex-col items-start center-start gap-2.5">
                    <h4 className="capitalize font-bold text-xl text-gray-700 dark:text-gray-100">
                      influencer-marketing
                    </h4>
                    <p className="text-gray-500 dark:text-gray-300 text-left leading-relaxed tracking-wide text-sm">
                      Collaborate with trusted influencers to amplify brand
                      reach and credibility. We run targeted influencer
                      campaigns that drive authentic engagement and measurable
                      ROI for businesses.{" "}
                    </p>
                  </div>
                  <div className="w-full flex items-center justify-start mt-auto">
                    <Link
                      href={"influencer-marketing"}
                      className="text-sm text-gray-900 bg-[var(--primary-green)] px-8 py-2.5 rounded-md tracking-wide"
                      aria-label="Learn more about email marketing"
                    >
                      Know more
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-5 px-12 py-8 group overflow-hidden rounded-2xl dark:border dark:border-gray-100 dark:shadow-sm dark:shadow-gray-200">
                <div className="w-full h-full flex flex-col items-center justify-center gap-5 relative transform transition-[width,height,top,left] duration-500">
                  <div className="w-[60px] h-[60px] rounded-full bg-linear-to-tr from-[#4EABF4] to-[#52B9A9] absolute -z-10 left-0 top-0 -translate-x-2 -translate-y-2 onhover-scale"></div>
                  <div className="w-full flex items-center justify-start">
                    <Image
                      src="/icons/pay-per-click.webp"
                      alt="pay-per-click"
                      width={60}
                      height={60}
                    />
                  </div>
                  <div className="w-full flex flex-col items-start center-start gap-2.5">
                    <h4 className="capitalize font-bold text-xl text-gray-700 dark:text-gray-100">
                      SEM
                    </h4>
                    <p className="text-gray-500 dark:text-gray-300 text-left leading-relaxed tracking-wide text-sm">
                      Generate instant visibility and qualified leads with
                      high-performing Google Ads campaigns. We focus on smart
                      targeting, ad optimization, and maximizing return on ad
                      spend.{" "}
                    </p>
                  </div>
                  <div className="w-full flex items-center justify-start mt-auto">
                    <Link
                      href={"sem-company-chennai"}
                      className="text-sm text-gray-900 bg-[var(--primary-green)] px-8 py-2.5 rounded-md tracking-wide"
                      aria-label="Learn more about SEM"
                    >
                      Know more
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-5 px-12 py-8 group overflow-hidden rounded-2xl dark:border dark:border-gray-100 dark:shadow-sm dark:shadow-gray-200">
                <div className="w-full h-full flex flex-col items-center justify-center gap-5 relative transform transition-[width,height,top,left] duration-500">
                  <div className="w-[60px] h-[60px] rounded-full bg-linear-to-tr from-[#4EABF4] to-[#52B9A9] absolute -z-10 left-0 top-0 -translate-x-2 -translate-y-2 onhover-scale"></div>
                  <div className="w-full flex items-center justify-start">
                    <Image
                      src="/icons/bar-graph.webp"
                      alt="online-reputaion-management"
                      width={60}
                      height={60}
                    />
                  </div>
                  <div className="w-full flex flex-col items-start center-start gap-2.5">
                    <h4 className="capitalize font-bold text-xl text-gray-700 dark:text-gray-100">
                      online reputation management
                    </h4>
                    <p className="text-gray-500 dark:text-gray-300 text-left leading-relaxed tracking-wide text-sm">
                      Protect and enhance your brand’s online image. Our ORM
                      strategies help manage reviews, monitor mentions, and
                      build long-term trust with your audience.
                    </p>
                  </div>
                  <div className="w-full flex items-center justify-start mt-auto">
                    <Link
                      href={"online-reputation-management-services-chennai"}
                      className="text-sm text-gray-900 bg-[var(--primary-green)] px-8 py-2.5 rounded-md tracking-wide"
                      aria-label="Learn more about online reputation management"
                    >
                      Know more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <SuccessStoriesSlider />
      {/* <section className="flex items-center justify-center flex-col dark:bg-none mt-20 text-[var(--text-black)] w-full h-auto md:h-svh relative">
        <div className="block w-full min-h-svh absolute top-0 left-0 bg-[url(/upload/agency-img15.webp)] bg-no-repeat bg-fixed bg-cover -z-10"></div>
        <div className="w-full flex h-5/12 items-center justify-center px-6 md:px-8 lg:px-10 bg-white dark:bg-[#292639]">
          <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-10 pb-20">
            <div className="w-full md:w-1/2 p-0 md:p-1.5 flex items-center justify-center md:justify-start pl-0 md:pl-4">
              <div className="flex flex-col">
                <h3 className="capitalize text-2xl md:text-4xl font-bold text-center md:text-left leading-tight md:leading-snug dark:text-gray-200">
                  About Rankraze – Leading Digital Marketing Company in Chennai
                </h3>
                <p className="mt-2 text-base md:text-lg text-center md:text-left text-gray-800 dark:text-gray-400">
                  233K+ Leads Delivered · 2,000+ Trusted Brands · 15+ Years
                  Expertise · 4.8/5 Client Rating
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-1.5 flex flex-col items-center justify-center md:justify-start pl-0 md:pl-20 tracking-wide">
              <p className="text-justify md:text-left text-gray-500 py-1.5 tracking-wide dark:text-gray-300 text-sm lg:text-base">
                Rankraze is one of India’s leading digital marketing companies
                based in Chennai. Our passionate team is dedicated to providing
                the best digital marketing solutions for SME businesses, helping
                them grow and succeed in the competitive online landscape.
              </p>
              <div className="w-full h-auto md:h-[90px] flex items-center justify-between gap-6 px-4 dark:invert dark:brightness-0">
      
                <div className="flex-1 grid place-items-center">
                  <Image
                    src="/icons/google.webp"
                    alt="Google"
                    width={220}
                    height={120}
                    className="w-auto max-h-10 md:max-h-14 object-contain"
                  />
                </div>
                <div className="flex-1 grid place-items-center">
                  <Image
                    src="/icons/meta-1.webp"
                    alt="Meta"
                    width={220}
                    height={120}
                    className="w-auto max-h-10 md:max-h-14 object-contain"
                  />
                </div>
                <div className="flex-1 grid place-items-center">
                  <Image
                    src={semrush}
                    alt="Semrush"
                    width={220}
                    height={120}
                    className="w-auto max-h-10 md:max-h-14 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex md:min-h-80 h-3/12 md:h-5/12 items-center justify-center gap-20 relative pb-8 md:pb-28">
          <div className="w-full h-full absolute top-0 left-0 bg-black opacity-50 z-0"></div>
          <div className="flex flex-col items-center justify-center gap-5 py-12 md:py-20 z-10">
            <h3 className="text-white text-2xl md:text-4xl font-bold text-center md:text-left px-1 md:px-0">
              Unlocking a New Era of Progress
            </h3>
            <p className="text-sm md:text-sm text-white max-w-3xl text-center px-1 md:px-0">
              Rankraze is one of India’s leading digital marketing company in
              Chennai, India. Our passionate team is working towards finding the
              Best Digital Marketing services for SME Business.
            </p>
            <div className="flex items-center justify-center gap-4">
                    <ContactFormModalButtonOne
                      Button={"Discover More"}
                      Dark={true}
                    />
                    </div>
          </div>
        </div>
        <div className="w-full h-4/12 md:h-2/12 flex items-center justify-center bg-white dark:bg-[#292639] relative">
          <div className="w-3/4 max-w-7xl grid grid-cols-2 md:flex items-center justify-center p-2 md:p-4 xl:p-6 2xl:p-8 absolute bottom-full translate-y-1/2 bg-white dark:bg-[#292639] rounded-lg shadow-lg dark:shadow-gray-700">
            <div className="w-full md:w-1/4 p-2 md:p-0 lg:p-3.5">
              <div className="w-full flex flex-col items-center justify-center gap-1.5 border-l-0 border-[#497ca232]">
                <span className="text-xl md:text-3xl lg:text-5xl text-[var(--primary-blue)] font-semibold dark:text-gray-100">
                  41k+
                </span>
                <span className="text-sm md:text-sm text-gray-900 dark:text-[var(--primary-green)] font-medium capitalize">
                  happy client
                </span>
              </div>
            </div>
            <div className="w-full md:w-1/4 p-2 md:p-0 lg:p-3.5">
              <div className="w-full flex flex-col items-center justify-center gap-1.5 border-l-[1px] border-[#497ca232]">
                <span className="text-xl md:text-3xl lg:text-5xl text-[var(--primary-blue)] font-semibold dark:text-gray-100">
                  76k+
                </span>
                <span className="text-sm md:text-sm text-gray-900 dark:text-[var(--primary-green)] font-medium capitalize">
                  project done
                </span>
              </div>
            </div>
            <div className="w-full md:w-1/4 p-2 md:p-0 lg:p-3.5">
              <div className="w-full flex flex-col items-center justify-center gap-1.5 border-l-0 md:border-l-[1px] border-[#497ca232]">
                <span className="text-xl md:text-3xl lg:text-5xl text-[var(--primary-blue)] font-semibold dark:text-gray-100">
                  4.8
                </span>
                <span className="text-sm md:text-sm text-gray-900 dark:text-[var(--primary-green)] font-medium capitalize">
                  client ratings
                </span>
              </div>
            </div>
            <div className="w-full md:w-1/4 p-2 md:p-0 lg:p-3.5">
              <div className="w-full flex flex-col items-center justify-center gap-1.5 border-l-[1px] border-[#497ca232]">
                <span className="text-xl md:text-3xl lg:text-5xl text-[var(--primary-blue)] font-semibold dark:text-gray-100">
                  15+
                </span>
                <span className="text-sm md:text-sm text-gray-900 dark:text-[var(--primary-green)] font-medium capitalize">
                  years experience
                </span>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <section className="flex items-center justify-center flex-col dark:bg-none  mt-0 md:mt-10 text-[var(--text-black)] w-full px-6 md:px-8 lg:px-10 bg-white dark:bg-[#292639]">
        <div className="w-full flex flex-col md:flex-row items-stretch md:pb-20 justify-center max-w-7xl">
          <div className="w-full md:w-1/2 p-2.5 flex flex-col items-center md:items-start justify-center gap-2.5">
            <h2 className="text-sm font-bold text-center mt-20 md:mt-3 md:text-left text-[var(--primary-blue)] capitalize dark:text-[var(--primary-green)]">
              why choose us
            </h2>
            <h3 className="text-2xl md:text-4xl text-center md:text-left font-bold capitalize dark:text-gray-300">
              outstanding digital experience
            </h3>
            <p className="font-xs md:text-base text-justify text-gray-600 dark:text-gray-400 leading-normal">
              <span className="mb-1.5 inline-block font-light py-3">
                Our team of digital marketing experts helps businesses build a
                strong and sustainable online presence. We believe success
                online requires more than just a well-designed website—it needs
                a clear strategy, the right tools, and consistent execution. As
                a trusted digital marketing company in Chennai, Rankraze focuses
                on understanding your business, target audience, competitors,
                and growth goals before creating a customized digital roadmap.
                Our approach is designed to improve visibility, attract the
                right users, and drive measurable results. We work with both
                organic and paid marketing channels, including SEO, PPC, and
                digital advertising, to increase reach and engagement. By
                combining data-driven strategies with practical execution, we
                help brands grow online, connect with their audience, and turn
                traffic into real business opportunities.
              </span>
            </p>
          </div>
          <div className="w-full md:w-1/4 p-4 flex items-center justify-center">
            <div className="w-full p-2.5">
              <div className="w-full h-full flex flex-col items-center justify-center p-6 border border-[#b9e0ff] rounded-md shadow-[0px_3px_6px_rgba(0,0,0,0.15),0px_-2px_6px_rgba(0,0,0,0.1)] dark:shadow-[0px_3px_6px_rgba(255,255,255,0.15),0px_-2px_6px_rgba(255,255,255,0.1)]">
                <h4 className="text-xl font-semibold leading-snug text-gray-800 dark:text-gray-100 capitalize text-center py-1.5">
                  <span className="block">customized</span>
                  <span className="block">solutions</span>
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                  We understand that every business is unique, and we tailor our
                  strategies to match your specific needs and challenges
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/4 p-4 flex flex-col items-center justify-center">
            <div className="w-full p-2.5 mb-2.5">
              <div className="w-full h-full flex flex-col items-center justify-center p-6 border border-[#f3ffc4] rounded-md shadow-[0px_3px_6px_rgba(0,0,0,0.15),0px_-2px_6px_rgba(0,0,0,0.1)] dark:shadow-[0px_3px_6px_rgba(255,255,255,0.15),0px_-2px_6px_rgba(255,255,255,0.1)]">
                <h4 className="text-xl font-semibold leading-snug text-gray-800 dark:text-gray-100 capitalize text-center py-1.5">
                  <span className="block">industry</span>
                  <span className="block">expertise</span>
                </h4>
                <p className="text-sm text-gray-600  dark:text-gray-400 text-center">
                  Our digital marketing agency team comprises experienced
                  professionals who stay up to date with the latest trends and
                  best practices in digital marketing services.
                </p>
              </div>
            </div>
            <div className="w-full p-2.5 mt-2.5">
              <div className="w-full h-full flex flex-col items-center justify-center p-6 border border-[#fcd7fd] rounded-md shadow-[0px_3px_6px_rgba(0,0,0,0.15),0px_-2px_6px_rgba(0,0,0,0.1)] dark:shadow-[0px_3px_6px_rgba(255,255,255,0.15),0px_-2px_6px_rgba(255,255,255,0.1)]">
                <h4 className="text-xl font-semibold leading-snug text-gray-800 dark:text-gray-100 capitalize text-center py-1.5">
                  <span className="block">results-driven</span>
                  <span className="block">approach</span>
                </h4>
                <p className="text-sm text-gray-600  dark:text-gray-400 text-center">
                  We are committed to delivering best digital marketing services
                  growth for your business.
                </p>
              </div>
            </div>
          </div>
        </div>
        <SeoAndSentimentComponent />
        <div className="w-full flex flex-col items-center justify-center max-w-7xl gap-6 md:gap-12 mt-16 md:mt-28 ">
          <h3 className="text-2xl md:text-4xl font-bold tracking-wide text-center md:text-left text-gray-900 dark:text-gray-300 capitalize">
            streamlined 3R business solutions under one roof
          </h3>
          <video muted loop playsInline autoPlay preload="auto">
            <source src="/upload/rankrazehomepage.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="w-full flex flex-col items-center justify-center max-w-7xl gap-12 mt-20 2xl:mt-28 mb-16"></div>
      </section> */}
      {/* <section className="flex items-center justify-center flex-col rounded-xl py-20 relative before:content-[''] before:absolute before:w-full before:h-full before:bg-[linear-gradient(135deg,_#3DBC9B_0%,_#37A7FF_100%)] before:-z-10 before:rounded-lg md:before:rounded-2xl lg:before:rounded-4xl">
        <h2 className="text-2xl md:text-[40px] font-bold capitalize text-gray-950 dark:text-gray-50">
          our marketing strategy
        </h2>
        <div className="w-full grid max-w-7xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2.5 gap-5 mt-3.5 2xl:mt-8">
          <div className="w-full px-8 md:px-12 lg:px-8 xl:px-8 py-5 md:py-8 flex flex-col items-center justify-between gap-1.5 md:gap-2.5 bg-white rounded-xl cursor-pointer transform-gpu transition-transform hover:-translate-y-2.5 hover:translate-z-2 duration-300 ease-in-out">
            <i className="ri-earth-line text-[40px] text-[var(--primary-green)]"></i>
            <h3 className="text-lg md:text-2xl leading-tight md:leading-normal font-semibold text-gray-900 text-center pl-2.5">
              Expert Guidance for Online Success
            </h3>
            <p className="text-gray-500 text-center pl-2.5 text-sm md:text-base">
              Rankraze provides expert assistance to help you navigate the
              online world.
            </p>
          </div>
          <div className="w-full px-8 md:px-12 lg:px-8 xl:px-8 py-5 md:py-8 flex flex-col items-center justify-between gap-1.5 md:gap-2.5 bg-white rounded-xl cursor-pointer transform-gpu transition-transform hover:-translate-y-2.5 hover:translate-z-2 duration-300 ease-in-out">
            <i className="ri-group-line text-[40px] text-[var(--primary-green)]"></i>
            <h3 className="text-lg md:text-2xl leading-tight md:leading-normal font-semibold text-gray-900 text-center pl-2.5">
              Tailored Marketing Plans
            </h3>
            <p className="text-gray-500 text-center pl-2.5 text-sm md:text-base">
              The team takes the time to understand your business, goals, and
              audience to create a custom plan for success.
            </p>
          </div>
          <div className="w-full px-8 md:px-12 lg:px-8 xl:px-8 py-5 md:py-8 flex flex-col items-center justify-between gap-1.5 md:gap-2.5 bg-white rounded-xl cursor-pointer transform-gpu transition-transform hover:-translate-y-2.5 hover:translate-z-2 duration-300 ease-in-out">
            <i className="ri-macbook-line text-[40px] text-[var(--primary-green)]"></i>
            <h3 className="text-lg md:text-2xl leading-tight md:leading-normal font-semibold text-gray-900 text-center pl-2.5">
              Beyond Design and Development
            </h3>
            <p className="text-gray-500 text-center pl-2.5 text-sm md:text-base">
              Success online requires both a well-designed website and a perfect
              marketing .
            </p>
          </div>
          <div className="w-full px-8 md:px-12 lg:px-8 xl:px-8 py-5 md:py-8 flex flex-col items-center justify-between gap-1.5 md:gap-2.5 bg-white rounded-xl cursor-pointer transform-gpu transition-transform hover:-translate-y-2.5 hover:translate-z-2 duration-300 ease-in-out">
            <i className="ri-stack-line text-[40px] text-[var(--primary-green)]"></i>
            <h3 className="text-lg md:text-2xl leading-tight md:leading-normal font-semibold text-gray-900 text-center pl-2.5">
              Expert Guidance for Online Success
            </h3>
            <p className="text-gray-500 text-center pl-2.5 text-sm md:text-base">
              Rankraze provides expert assistance to help you navigate the
              online world.
            </p>
          </div>
          <div className="w-full px-8 md:px-12 lg:px-8 xl:px-8 py-5 md:py-8 flex flex-col items-center justify-between gap-1.5 md:gap-2.5 bg-white rounded-xl cursor-pointer transform-gpu transition-transform hover:-translate-y-2.5 hover:translate-z-2 duration-300 ease-in-out">
            <i className="ri-medal-2-line text-[40px] text-[var(--primary-green)]"></i>
            <h3 className="text-lg md:text-2xl leading-tight md:leading-normal font-semibold text-gray-900 text-center pl-2.5">
              Expert Guidance for Online Success
            </h3>
            <p className="text-gray-500 text-center pl-2.5 text-sm md:text-base">
              Rankraze provides expert assistance to help you navigate the
              online world.
            </p>
          </div>
          <div className="w-full px-8 md:px-12 lg:px-8 xl:px-8 py-5 md:py-8 flex flex-col items-center justify-between gap-1.5 md:gap-2.5 bg-white rounded-xl cursor-pointer transform-gpu transition-transform hover:-translate-y-2.5 hover:translate-z-2 duration-300 ease-in-out">
            <i className="ri-line-chart-line text-[40px] text-[var(--primary-green)]"></i>
            <h3 className="text-lg md:text-2xl leading-tight md:leading-normal font-semibold text-gray-900 text-center pl-2.5">
              Expert Guidance for Online Success
            </h3>
            <p className="text-gray-500 text-center pl-2.5 text-sm md:text-base">
              Rankraze provides expert assistance to help you navigate the
              online world.
            </p>
          </div>
        </div>
      </section> */}
      {/* <PortfolioSection /> */}
      <OurProcess />
      <IndustriesSection/>
      <AboutRankraze />
      <section className="flex items-center justify-center flex-col dark:bg-none mt-10 text-[var(--text-black)] gap-6 w-full px-6 md:px-8 lg:px-10">
        <ScrollAnimationWrapper className="flex flex-col items-center justify-center gap-6 w-full">
          {/* Pill */}
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
        {/* <div className="flex flex-col md:flex-row items-center justify-center dark:bg-none mt-10 text-[var(--text-black)] gap-4 w-full max-w-5xl p-6 md:p-8 lg:p-10 mb-2.5 bg-[#dffff1] rounded-2xl relative before:content-[''] before:w-full before:h-full before:absolute before:bg-[url('/upload/background-style.webp')] before:bg-cover before:bg-no-repeat before:opacity-45 before:rounded-2xl before:bg-center before:z-0">
          <div className="w-full md:w-2/3 flex flex-col z-10 gap-2.5">
            <h3 className="text-2xl md:text-4xl text-gray-800 text-center md:text-left font-bold z-10">
              Request a Free Quote
            </h3>
            <p className="text-sm text-gray-600 text-center md:text-left tracking-tight">
              Revolutionize your brand with our award-winning digital marketing
              services!
            </p>
          </div>
          <div className="w-full md:w-1/3 flex items-center justify-center z-10">
            <ContactFormModalButtonOne Button={"Get Quote"} Dark={false} />
          </div>
        </div> */}
        <Suspense fallback={<div className="w-full max-w-7xl h-96 animate-pulse bg-gray-100 dark:bg-gray-800 rounded-lg mt-20" />}>
          <LatestBogs />
        </Suspense>
      </section>
      {/* <section className="w-full mt-24">
        <div className="flex items-center justify-center flex-col dark:bg-none mt-20 text-[var(--text-black)] gap-6 w-full px-6 md:px-8 lg:px-10 relative before:content-[''] before:absolute before:w-full before:h-full before:bg-linear-to-br before:from-[#3DBC9C] before:to-[#37A8F9] before:top-0 before:left-0 before:rounded-md before:-z-10">
          <div className="w-full max-w-5xl flex items-stretch justify-center">
            <div className="hidden w-[45%] md:flex items-center justify-center relative">
              <Image
                src="/upload/license-2.webp"
                alt="image"
                width={500}
                height={500}
                className="absolute left-0 bottom-0 w-full"
              />
            </div>
            <div className="w-ful md:w-[55%] flex flex-col items-center justify-center gap-4 p-9 max-w-lg md:max-w-none">
              <ContactUsForm />
            </div>
          </div>
        </div>
      </section> */}
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


