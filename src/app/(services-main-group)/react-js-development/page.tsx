import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import ContactForm from "@/app/components/UI/AllServicePageContactForm";
import Bannerimage from "../../.././../public/upload/bannerimage-ReactJS.webp"
import { ShoppingCart, HeartPulse,Landmark,BookOpen,Route,Home,} from "lucide-react";
import react from "../../.././../public/upload/tools/React-icon.svg.webp"
import redux from "../../.././../public/upload/tools/redux-1024x984.webp"
import nextjs from "../../.././../public/upload/tools/Nextjs-logo-1024x208.webp"
import tailwind from "../../.././../public/upload/tools/Tailwind-CSS.webp"
import tailwindcss from "../../.././../public/upload/tools/Tailwind_CSS_logo.svg.webp"
import node from "../../.././../public/upload/tools/node-js_logo.webp"
import express from "../../.././../public/upload/tools/Express.js-1024x280.webp"
import aws from "../../.././../public/upload/tools/Amazon_Web_Services_Logo.svg.webp"
import mongodb from "../../.././../public/upload/tools/mango-db.webp"
import firebase from "../../.././../public/upload/tools/firebase-logo.webp"
import Testimonials from "../../components/UI/Testimonials" 
const techLogos = [
  { src: react, alt: "React" },
  { src: redux, alt: "Redux" },
  { src: nextjs, alt: "Next.js" },
  { src: tailwind, alt: "Tailwind CSS" },
  { src: tailwindcss, alt: "Tailwind CSS" },
  { src: node, alt: "Node.js" },
  { src: express, alt: "Express.js" },
  { src: aws, alt: "AWS" },
  { src: mongodb, alt: "MongoDB" },
  { src: firebase, alt: "Firebase" },
];
const industries = [
  { icon: ShoppingCart, title: "E-commerce & Retail" },
  { icon: HeartPulse, title: "Healthcare" },
  { icon: Landmark, title: "Fintech" },
  { icon: BookOpen, title: "EdTech" },
  { icon: Route, title: "Travel & Hospitality" },
  { icon: Home, title: "Real Estate" },
];
export const metadata:Metadata = {
    title: "React JS Development Company in India | Rankraze",
    description: "Rankraze is a top React JS Development Company in India offering fast, scalable apps. Hire expert React JS developers for custom solutions today.",
    
    keywords: [
    "react development company",
    "react development services",
    "react js development",
    "react js development company",
    "react js development company in dallas",
    "react js development company in india",
    "react js development services",
    "reactjs development companies in india",
    "reactjs development company in dallas",
    "reactjs development company in india",
    "reactjs development company india"
    ],

    alternates: {
        canonical: "https://rankraze.us/react-js-development",
    },

    openGraph: {
        title: "React JS Development Company in India | Rankraze",
        description: "Rankraze is a top React JS Development Company in India offering fast, scalable apps. Hire expert React JS developers for custom solutions today.",
        url: "https://rankraze.us/react-js-development",
        siteName: "Rankraze",
        images: [
        {
            url: "/upload//the_future_of_web_development_reactjs-1024x576.webp",
            width: 1060,
            height: 596,
            alt: "augmented-reality-development.webp",
            type: "image/webp"
        },
        ],
        locale: "en_US",
        type: "article",
    },
}

export default function page () {
     const steps = [
    { title: "Requirement\nGathering &\nAnalysis", position: "top" },
    { title: "Planning and\nDesigning", position: "bottom" },
    { title: "Development &\nIntegration", position: "top" },
    { title: "Testing and\nQuality\nAssurance", position: "bottom" },
    { title: "Deployment &\nDelivery", position: "top" },
    { title: "Support &\nMaintenance", position: "bottom" },
  ];
    return (
        <>
        <section className="w-full grid place-items-center mt-24 px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 relative">
            <div className="w-full grid place-items-center px-3 md:px-5 lg:px-8 xl:px-12 2xl:px-14 py-10 md:py-20 overflow-hidden relative rounded-md md:rounded-lg lg:rounded-xl xl:rounded-2xl 2xl:rounded-4xl before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:[background-image:linear-gradient(to_bottom,#ffffff44,#ffffffbb,white),linear-gradient(to_right,#DAF2EC,#D0EBFB)] before:-z-10 dark:before:invert shadow-xs dark:shadow-white">
                <div className="w-full max-w-7xl flex flex-col md:flex-row items-stretch justify-between gap-3.5 md:gap-0">
                    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center gap-4 pl-2.5">
                        <h1 className="xl:text-lg font-semibold text-center md:text-left capitalize dark:text-gray-200 pr-4">
                            High Performance React Applications | Trusted by Global Clients
                        </h1>
                        <h2 className="text-4xl xl:text-[42px] font-semibold text-center md:text-left capitalize dark:text-gray-200 pr-4">
                            Expert React JS Development Company – Rankraze
                        </h2>
                        <h2 className="text-sm xl:text-base font-semibold text-center md:text-left capitalize dark:text-gray-200 pr-4">
                            Highlights
                        </h2>
                        <ul className="text-sm md:text-base pl-1 flex flex-col gap-1 md:gap-1.5 lg:gap-2 xl:gap-2.5 list-disc marker:text-[var(--primary-green)] text-gray-500 dark:text-gray-400">
                            <li className="flex items-start gap-2">
                                <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                                <span>Experienced React JS Developers</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                                <span>Tailored React JS Solutions for Businesses</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                                <span>Tailored React JS Solutions for Businesses</span>
                            </li>
                        </ul>
                        <Link href={"https://crm.skalelit.com/lead-form/1f920a2abc3394d259281285252cbb52?styled=1&with_logo=1"} target="_blank" className="overflow-hidden capitalize text-sm text-white px-6 py-2.5 relative bg-linear-to-br from-[#3DBC9C] to-[#36aaf1] rounded-lg">schedule free consultation</Link>
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col items-center justify-center py-2.5">
                        <ContactForm />
                    </div>
                </div>
                <div className="absolute flex items-end justify-start w-full h-full bottom-0 left-0 -z-10 opacity-100 dark:opacity-75 bg-[url('/upload/wave-image.png')] bg-no-repeat bg-cover bg-bottom">
                </div>
            </div>
        </section>
        <section className="w-full grid place-items-center mt-20 px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 relative">
            <div className="w-full max-w-7xl flex flex-col md:flex-row items-stretch justify-center">
                <div className="w-full md:w-1/2 flex flex-col items-start justify-center gap-3 md:gap-3.5 p-2.5">
                    <h3 className="text-2xl md:text-3xl font-semibold text-center md:text-left capitalize dark:text-gray-200 pr-4">
                        About Us – Why Partner with Rankraze for React JS Development?
                    </h3>
                    <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-justify text-sm md:text-base">
                        Rankraze is a <span className="font-black">Top ReactJS Development Company in India</span>, known for delivering high-quality, end-to-end <span className="font-black">ReactJS development services</span>. With a dedicated team of developers, we craft custom, SEO-optimized, scalable, and high-performing <span className="font-black">React applications</span> to fuel your business growth.
                    </p>
                    <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-justify text-sm md:text-base">
                        We are one of the <span className="font-black">Top ReactJS Development Company in India</span> trusted by startups and enterprises for our expertise and agile delivery model
                    </p>
                </div>
                <div className="w-full md:w-1/2 overflow-hidden flex items-center justify-center px-4 py-2.5 rounded-md">
                    <Image 
                    src={"/upload/the_future_of_web_development_reactjs-1024x576.webp"}
                    alt="ReactJs Development Company in Dallas, Texas"
                    width={800} height={600} layout="responsive"
                    objectFit="cover"          
                    className="rounded-xl dark:grayscale-25"                                 
                    />
                </div>
            </div>
            <div className="w-full max-w-7xl flex flex-col md:flex-row-reverse items-stretch justify-center">
                <div className="w-full md:w-1/2 flex flex-col items-start justify-center gap-3 md:gap-3.5 p-2.5 lg:p-5">
                    <h3 className="text-2xl md:text-3xl font-semibold text-center md:text-left capitalize dark:text-gray-200 pr-4">
                        Why Choose Rankraze?
                    </h3>
                    <ul className="text-sm md:text-base pl-1 flex flex-col gap-1 md:gap-1.5 lg:gap-2 xl:gap-2.5 list-disc text-gray-500 dark:text-gray-400">
                        <li>
                            8+ Years of Experience
                        </li>
                        <li>
                            100+ Successful ReactJS Development Projects
                        </li>
                        <li>
                            Agile Development Process
                        </li>
                        <li>
                            Hire React JS & React Native Developers in India
                        </li>
                        <li>
                            Transparent Communication & Timely Delivery
                        </li>
                    </ul>
                </div>
                <div className="w-full md:w-1/2 overflow-hidden flex items-center justify-center px-4 py-2.5 rounded-md">
                    <Image 
                    src={"/upload/certificate-Why-Choose-r7tvexo4dxquj00wr6xhagdbqchvwufglylx0pmvg8.webp"}
                    alt="ReactJs Development Company in Dallas, Texas"
                    width={800} height={600} layout="responsive"
                    objectFit="cover"          
                    className="rounded-xl dark:grayscale-25"                                 
                    />
                </div>
            </div>
        </section>
        <section className="w-full grid place-items-center mt-20 px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 relative">
            <div className="w-full max-w-7xl flex flex-col md:flex-row items-stretch justify-center">
                <div className="w-full flex flex-col items-center justify-center gap-3 md:gap-3.5 p-2.5">
                    <h2 className="text-xl md:text-3xl font-semibold text-center capitalize dark:text-gray-200 pr-4">
                        Our Specialized React JS Development Services
                    </h2>
                    <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-center text-sm md:text-base max-w-4xl">
                        As a full-service ReactJS development company, we provide a wide range of ReactJS development services in India tailored to your unique needs:
                    </p>
                    <div className="w-full grid max-w-7xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-2.5 gap-5 mt-3.5 2xl:mt-8">
                        <div className="w-full bg-white flex flex-col items-center justify-center gap-5 px-12 py-8 group overflow-hidden rounded-2xl -z-10 border border-gray-200">
                            <div className="w-full h-full flex flex-col items-center justify-start gap-5 relative transform transition-[width,height,top,left] duration-500">
                                <Image 
                                    src={"/icons/react-js/Custom-React-JS-Web-App-Development.webp"}
                                    alt="Custom-React-JS"
                                    width={1024}
                                    height={1024}
                                    className="w-16 h-16 md:w-20 md:h-20"
                                />
                                <div className="w-full flex flex-col items-start center-start gap-2.5">
                                    <h3 className="capitalize font-bold text-lg text-gray-700 text-justify">Custom React JS Web App Development</h3>
                                    <p className="text-gray-500 text-justify leading-relaxed tracking-wide text-sm">
                                        Build scalable and custom ReactJS applications using reusable components that deliver exceptional performance.
                                    </p>
                                </div>
                            </div> 
                        </div>
                        <div className="w-full bg-white flex flex-col items-center justify-center gap-5 px-12 py-8 group overflow-hidden rounded-2xl -z-10 border border-gray-200">
                            <div className="w-full h-full flex flex-col items-center justify-start gap-5 relative transform transition-[width,height,top,left] duration-500">
                                <Image 
                                    src={"/icons/react-js/React-Native-App-Development.webp"}
                                    alt="React-Native-App"
                                    width={1024}
                                    height={1024}
                                    className="w-16 h-16 md:w-20 md:h-20"
                                />
                                <div className="w-full flex flex-col items-start center-start gap-2.5">
                                    <h3 className="capitalize font-bold text-lg text-gray-700 text-justify">React Native App Development</h3>
                                    <p className="text-gray-500 text-justify leading-relaxed tracking-wide text-sm">
                                        Hire our expert React Native developers in India to create cross-platform mobile apps for Android and iOS with a single codebase.
                                    </p>
                                </div>
                            </div> 
                        </div>
                        <div className="w-full bg-white flex flex-col items-center justify-center gap-5 px-12 py-8 group overflow-hidden rounded-2xl -z-10 border border-gray-200">
                            <div className="w-full h-full flex flex-col items-center justify-start gap-5 relative transform transition-[width,height,top,left] duration-500">
                                <Image 
                                    src={"/icons/react-js/React-JS-Front-End-Development.webp"}
                                    alt="API Intefration"
                                    width={1024}
                                    height={1024}
                                    className="w-16 h-16 md:w-20 md:h-20"
                                />
                                <div className="w-full flex flex-col items-start center-start gap-2.5">
                                    <h3 className="capitalize font-bold text-lg text-gray-700 text-justify">React JS Front-End Development</h3>
                                    <p className="text-gray-500 text-justify leading-relaxed tracking-wide text-sm">
                                        Build interactive UIs using React, Redux, and Next.js, ensuring better performance and user experience.
                                    </p>
                                </div>
                            </div> 
                        </div>
                        <div className="w-full bg-white flex flex-col items-center justify-center gap-5 px-12 py-8 group overflow-hidden rounded-2xl -z-10 border border-gray-200">
                            <div className="w-full h-full flex flex-col items-center justify-start gap-5 relative transform transition-[width,height,top,left] duration-500">
                                <Image 
                                    src={"/icons/react-js/Migration-to-React-JS.webp"}
                                    alt="API Intefration"
                                    width={1024}
                                    height={1024}
                                    className="w-16 h-16 md:w-20 md:h-20"
                                />
                                <div className="w-full flex flex-col items-start center-start gap-2.5">
                                    <h3 className="capitalize font-bold text-lg text-gray-700 text-justify">Migration to React JS</h3>
                                    <p className="text-gray-500 text-justify leading-relaxed tracking-wide text-sm">
                                        Seamlessly migrate legacy systems to modern, SEO-friendly React applications with zero data loss.
                                    </p>
                                </div>
                            </div> 
                        </div>
                        <div className="w-full bg-white flex flex-col items-center justify-center gap-5 px-12 py-8 group overflow-hidden rounded-2xl -z-10 border border-gray-200">
                            <div className="w-full h-full flex flex-col items-center justify-start gap-5 relative transform transition-[width,height,top,left] duration-500">
                                <Image 
                                    src={"/icons/react-js/API-Integration-with-React.webp"}
                                    alt="API Integration"
                                    width={1024}
                                    height={1024}
                                    className="w-16 h-16 md:w-20 md:h-20"
                                />
                                <div className="w-full flex flex-col items-start center-start gap-2.5">
                                    <h3 className="capitalize font-bold text-lg text-gray-700 text-justify">API Integration with React</h3>
                                    <p className="text-gray-500 text-justify leading-relaxed tracking-wide text-sm">
                                        Connect your app to any third-party service or backend using secure and scalable API integration.
                                    </p>
                                </div>
                            </div> 
                        </div>
                        <div className="w-full bg-white flex flex-col items-center justify-center gap-5 px-12 py-8 group overflow-hidden rounded-2xl -z-10 border border-gray-200">
                            <div className="w-full h-full flex flex-col items-center justify-start gap-5 relative transform transition-[width,height,top,left] duration-500">
                                <Image 
                                    src={"/icons/react-js/React-JS-Support-Maintenance.webp"}
                                    alt="React-JS-Support-Maintenance"
                                    width={1024}
                                    height={1024}
                                    className="w-16 h-16 md:w-20 md:h-20"
                                />
                                <div className="w-full flex flex-col items-start center-start gap-2.5">
                                    <h3 className="capitalize font-bold text-lg text-gray-700 text-justify">React JS Support & Maintenance</h3>
                                    <p className="text-gray-500 text-justify leading-relaxed tracking-wide text-sm">
                                        Get complete support for version upgrades, performance monitoring, and proactive troubleshooting.
                                    </p>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
       <section className="py-20 bg-white px-20">
<h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
         Our ReactJS Development Process
        </h2>
        <p className="mt-4 text-gray-600 max-w-4xl mx-auto py-5">
          At Rankraze, our proven methodology ensures smooth and successful delivery of <span className="font-bold">ReactJS development projects</span>.
        </p>
<div className="hidden md:block relative">
  <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gray-400" />
  <div className="grid grid-cols-6 gap-10">
    {steps.map((step, index) => {
      const isTop = index % 2 === 0;
      return (
        <div key={index} className="relative h-[260px] flex justify-center">
          <div className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-white border-2 border-gray-400 rounded-full z-20" />
          <div
            className={`absolute ${
              isTop ? "top-0" : "bottom-0"
            } bg-[#0f3557] text-white text-center px-6 py-6
            rounded-xl w-[230px] font-semibold leading-snug`}
          >
            {step.title}
            <span
              className={`absolute left-1/2 -translate-x-1/2 ${
                isTop
                  ? "-bottom-[10px] border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-[#0f3557]"
                  : "-top-[10px] border-l-[10px] border-r-[10px] border-b-[10px] border-l-transparent border-r-transparent border-b-[#0f3557]"
              }`}
            />
          </div>
        </div>
      );
    })}
  </div>
</div>
{/* mobile view */}
<div className="md:hidden mt-16 relative">
  <div className="absolute left-[9px] top-0 bottom-0 w-[2px] bg-gray-300" />
  <div className="space-y-10">
    {steps.map((step, index) => (
      <div key={index} className="relative flex gap-6">
        <div className="relative z-10">
          <div className="w-4 h-4 bg-white border-2 border-gray-400 rounded-full" />
        </div>
        <div className="bg-[#0f3557] text-white px-6 py-5 rounded-xl font-semibold w-full">
          {step.title}
        </div>
      </div>
    ))}
  </div>
</div>

</section>

        <section className="w-full grid place-items-center mt-20 px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 relative">
            <div className="w-full max-w-7xl flex flex-col md:flex-row items-stretch justify-center">
                <div className="w-full md:w-1/2 flex flex-col items-start justify-center gap-3 md:gap-3.5 p-2.5">
                    <h3 className="text-2xl md:text-3xl font-semibold my-5 text-center md:text-left capitalize dark:text-gray-200 pr-4">
                     Why Choose React JS for Web Development?

                    </h3>
                    <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-justify text-sm md:text-base">
                        React JS is one of the most powerful JavaScript libraries for developing high-performance apps. It is widely used by leading brands and <span className="font-bold"> ReactJS development companies</span> globally.
                    </p>
                  <ul className="pl-8 list-disc marker:text-[var(--primary-green)] text-gray-500 dark:text-gray-300 leading-relaxed">
                        <li>Fast Rendering with Virtual DOM</li>
                        <li>Reusable Components for Modular Development</li>
                        <li>Strong Community Support</li>
                        <li>SEO-Friendly with Server-Side Rendering (Next.js)</li>
                        <li>Rich Ecosystem (Redux, Tailwind CSS, React Router)</li>
                       
                    </ul>
                </div>
                <div className="w-full md:w-1/2 overflow-hidden flex items-center justify-center px-10 py-4 rounded-md">
                    <Image 
                    src={Bannerimage}
                    alt="ReactJs Development Company in Dallas, Texas"
                    width={830} height={850} layout="responsive"
                    objectFit="cover"          
                    className="rounded-xl dark:grayscale-25"                                 
                    />
                </div>
            </div>
        </section>
        <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Why Choose React JS for Web Development?
        </h2>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          We are a <span className="font-semibold">ReactJS Development Services Company</span>{" "}
          trusted by global clients from various sectors:
        </p>
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10">
          {industries.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 group"
            >
              <item.icon
                className="w-10 h-10 text-[#0f3557] group-hover:scale-110 transition"
                strokeWidth={1.6}
              />
              <p className="text-gray-900 font-medium text-lg text-center">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
     <section className="bg-white py-5">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Tech Stack We Use
        </h2>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
         We build robust and scalable solutions with modern tools and frameworks
        </p>
        <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-5 gap-x-14 gap-y-12 my-10 place-items-center">
          {techLogos.map((logo, index) => (
            <Image
              key={index}
              src={logo.src}
              alt={logo.alt}
              width={110}
              height={50}
              className="object-contain  transition"
            />
          ))}
        </div>
      </div>
      </div>
    </section>
    <Testimonials/>
      <section className="w-full grid place-items-center mt-20 px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 relative">
            <div className="w-full max-w-7xl flex flex-col md:flex-row items-stretch justify-center">
                <div className="w-full md:w-1/2 flex flex-col items-start justify-center gap-3 md:gap-3.5 p-2.5">
                    <h3 className="text-2xl md:text-4xl font-bold my-5 text-center md:text-left capitalize dark:text-gray-200 pr-4">
                    Why Rankraze Stands Out as a React JS Development Company

                    </h3>
    
                </div>
                <div className="w-full md:w-1/2 overflow-hidden flex items-center justify-center px-10 py-4 rounded-md">
                     <ul className="pl-8 list-disc marker:text-gray-500 text-gray-500 dark:text-gray-300 leading-relaxed">
                        <li>Top React JS Development Company in IndiaDedicated & Skilled React JS Developers</li>
                        <li>Full-Cycle React JS Development Services</li>
                        <li> SEO & Speed Optimization</li>
                        <li> NDA & Full Source Code Ownership</li>
                        <li>On-Time Delivery with Agile Approach</li>
                       
                    </ul>
                </div>
            </div>
        </section>
        </>
    )
}