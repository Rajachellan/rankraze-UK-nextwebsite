import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { BriefcaseBusiness, UserStar } from 'lucide-react';
import ContactForm from "@/app/components/UI/AllServicePageContactForm";

export const metadata:Metadata = {
    title: "Online Reputation Management Services | ORM Company in Chennai",
    description: "Rankraze, enhance the value and trust of your brand with our ORM Services. We are the best Online Reputation Management Company in Chennai. Contact us now!",
    
    keywords: [
    "online reputation management company",
    "online reputation management company in Chennai",
    "online reputation management services",
    "ORM agency",
    "ORM company in Chennai",
    "ORM services",
    "ORM services in Chennai"
    ],
                
    alternates: {
        canonical: "https://rankraze.com/online-reputation-management-services-chennai",
    },

    openGraph: {
        title: "Online Reputation Management Services | ORM Company in Chennai",
        description: "Rankraze, enhance the value and trust of your brand with our ORM Services. We are the best Online Reputation Management Company in Chennai. Contact us now!",
        url: "https://rankraze.com/online-reputation-management-services-chennai",
        siteName: "Rankraze",
        images: [
        {
            url: "upload/Our-Online-Reputation-Management-Services.webp",
            width: 700,
            height: 501,
            alt: "Online-reputation-management.webp",
            type: "image/webp"
        },
        ],
        locale: "en_US",
        type: "article",
    },
}

export default function page () {
    return (
        <>
        <section className="w-full grid place-items-center mt-24 px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 relative">
            <div className="w-full grid place-items-center px-3 md:px-5 lg:px-8 xl:px-12 2xl:px-14 py-10 md:py-20 overflow-hidden relative rounded-md md:rounded-lg lg:rounded-xl xl:rounded-2xl 2xl:rounded-4xl before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:[background-image:linear-gradient(to_bottom,#ffffff44,#ffffffbb,white),linear-gradient(to_right,#DAF2EC,#D0EBFB)] before:-z-10 dark:before:invert shadow-xs dark:shadow-white">
                <div className="w-full max-w-7xl flex flex-col md:flex-row items-stretch justify-between gap-3.5 md:gap-0">
                    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center gap-4 pl-2.5">
                        <h1 className="text-4xl xl:text-[42px] font-semibold text-center md:text-left capitalize dark:text-gray-200 pr-4">
                            Online Reputation Management
                        </h1>
                        <p className="text-sm md:text-sm text-gray-700 dark:text-gray-300 text-center md:text-left pr-4">
                            Online Reputation Management service is an integral part of Digital Promotion. Online reputation management is managing how your customers view you and your business in the digital space.
                        </p>
                        <Link href={"https://crm.skalelit.com/lead-form/1f920a2abc3394d259281285252cbb52?styled=1&with_logo=1"} target="_blank" className="overflow-hidden capitalize text-sm text-white px-6 py-2.5 relative bg-linear-to-br from-[#3DBC9C] to-[#36aaf1] rounded-lg">request quote</Link>
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
                <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-3 md:gap-3.5 p-2.5">
                    <h2 className="text-4xl xl:text-[42px] font-semibold text-center md:text-left capitalize dark:text-gray-200 pr-4">
                        Our Online Reputation Management Services in Chennai
                    </h2>
                    <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-justify text-sm md:text-base">
                        Online Reputation Management service is an integral part of Digital Promotion. Online reputation management is managing how your customers view you and your business in the digital space. Most people form an impression of a company or products by the Google search results. They also use social media to check out what other customers are saying. With the help of ORM services India, the positive responses get promoted and negative or irrelevant ones can get suppressed, which improves one’s image in general.
                    </p>
                </div>
                <div className="w-full md:w-1/2 overflow-hidden flex items-center justify-center px-4 py-2.5 rounded-md">
                    <Image 
                    src={"/upload/Our-Online-Reputation-Management-Services.webp"}
                    alt="Reputation Management Services in chennai"
                    width={800} height={600} layout="responsive"
                    objectFit="cover"          
                    className="rounded-xl"                                 
                    />
                </div>
            </div>
        </section>
        <section className="w-full grid place-items-center mt-20 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 rounded-xl md:rounded-4xl bg-[url('/upload/PPC-banner-scaled.webp')] bg-no-repeat bg-cover bg-center relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#00000090] overflow-hidden">
            <div className="w-full max-w-7xl flex flex-col items-center justify-center gap-6 px-4 md:px-6 lg:px-10 my-20 z-10">
                <h2 className="text-2xl lg:text-4xl text-white font-semibold text-center lg:text-left">
                    Our Online Reputation Management Services
                </h2>
                <div className="w-full grid max-w-7xl grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-2.5 gap-5 mt-3.5 2xl:mt-8">
                    <div className="bg-white flex flex-col items-center justify-center gap-5 px-12 py-8 group overflow-hidden rounded-2xl -z-10">
                        <div className="w-full h-full flex flex-col items-start justify-start gap-5 relative transform transition-[width,height,top,left] duration-500">
                            <div className="w-5 h-5 md:w-8 md:h-8 lg:w-[48px] lg:h-[48px] rounded-full bg-linear-to-tr from-[#4EABF4] to-[#52B9A9] absolute -z-10 left-0 top-0 -translate-x-2 -translate-y-2 onhover-scale opacity-85"></div>
                            <div className="w-full flex flex-col items-start center-start gap-2.5">
                                <i className="ri-rocket-line text-2xl md:text-4xl lg:text-5xl"></i>
                                <p className="capitalize md:text-lg text-gray-700">Our ORM Services</p>
                                <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm md:text-sm">
                                    Building a strong corporate brand requires an even stronger reputation. Protect, enhance and strengthen your brand with a customized corporate reputation solution.
                                </p>
                            </div>
                        </div> 
                    </div>
                    <div className="bg-white flex flex-col items-center justify-center gap-5 px-12 py-8 group overflow-hidden rounded-2xl -z-10">
                        <div className="w-full h-full flex flex-col items-start justify-start gap-5 relative transform transition-[width,height,top,left] duration-500">
                            <div className="w-5 h-5 md:w-8 md:h-8 lg:w-[48px] lg:h-[48px] rounded-full bg-linear-to-tr from-[#4EABF4] to-[#52B9A9] absolute -z-10 left-0 top-0 -translate-x-2 -translate-y-2 onhover-scale opacity-85"></div>
                            <div className="w-full flex flex-col items-start center-start gap-2.5">
                                <i className="ri-stackshare-line text-2xl md:text-4xl lg:text-5xl"></i>
                                <p className="capitalize md:text-lg text-gray-700">Celebrity Reputation</p>
                                <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm md:text-sm">
                                    We place relevant content on lifestyle blogs and news websites. Protect your privacy, boost positive content, refute rumors, or increase visibility, we will work with your communication goals.
                                </p>
                            </div>
                        </div> 
                    </div>
                    <div className="bg-white flex flex-col items-center justify-center gap-5 px-12 py-8 group overflow-hidden rounded-2xl -z-10">
                        <div className="w-full h-full flex flex-col items-start justify-start gap-5 relative transform transition-[width,height,top,left] duration-500">
                            <div className="w-5 h-5 md:w-8 md:h-8 lg:w-[48px] lg:h-[48px] rounded-full bg-linear-to-tr from-[#4EABF4] to-[#52B9A9] absolute -z-10 left-0 top-0 -translate-x-2 -translate-y-2 onhover-scale opacity-85"></div>
                            <div className="w-full flex flex-col items-start center-start gap-2.5">
                                < BriefcaseBusiness className="w-6 h-6 md:h-9 md:w-9 lg:w-12 lg:h-12" />
                                <p className="capitalize md:text-lg text-gray-700">Personal Reputation</p>
                                <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm md:text-sm">
                                    Don’t let other people define you, create a strong, durable online reputation that resists attacks, negatives, and misleading information.
                                </p>
                            </div>
                        </div> 
                    </div>
                    <div className="bg-white flex flex-col items-center justify-center gap-5 px-12 py-8 group overflow-hidden rounded-2xl -z-10">
                        <div className="w-full h-full flex flex-col items-start justify-start gap-5 relative transform transition-[width,height,top,left] duration-500">
                            <div className="w-5 h-5 md:w-8 md:h-8 lg:w-[48px] lg:h-[48px] rounded-full bg-linear-to-tr from-[#4EABF4] to-[#52B9A9] absolute -z-10 left-0 top-0 -translate-x-2 -translate-y-2 onhover-scale opacity-85"></div>
                            <div className="w-full flex flex-col items-start center-start gap-2.5">
                                < UserStar className="w-6 h-6 md:h-9 md:w-9 lg:w-12 lg:h-12" />
                                <p className="capitalize md:text-lg text-gray-700">Remove Bad Reviews</p>
                                <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm md:text-sm">
                                    We will help you to remove the impact which negatively affects your business reputation. Our highly professional teams will much concerned about the growing facts
                                </p>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </section>
        <section className="w-full grid place-items-center mt-20 px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 relative">
            <div className="w-full max-w-6xl flex flex-col items-stretch justify-center">
                <div className="w-full flex flex-col items-center justify-center gap-3 md:gap-3.5 p-2.5">
                    <h2 className="text-4xl xl:text-[42px] font-semibold text-center md:text-left capitalize dark:text-gray-200 pr-4">
                        Software tools we use
                    </h2>
                </div>
                <div className="w-full grid max-w-7xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-2.5 gap-5 mt-3.5 2xl:mt-8">
                    <div className="w-full rounded-md p-3 md:p-4 lg:p-8 flex flex-col items-center justify-center gap-2.5 border border-gray-200 shadow-[0px_4px_8px_rgba(0,0,0,0.08),0px_-4px_8px_rgba(0,0,0,0.05)] dark:shadow-[0px_4px_8px_rgba(255,255,255,0.08),0px_-4px_8px_rgba(255,255,255,0.05)]">
                        <span className="md:text-lg font-medium lg:font-bold dark:text-gray-200">
                            Talkwalker
                        </span>
                    </div>
                    <div className="w-full rounded-md p-3 md:p-4 lg:p-8 flex flex-col items-center justify-center gap-2.5 border border-gray-200 shadow-[0px_4px_8px_rgba(0,0,0,0.08),0px_-4px_8px_rgba(0,0,0,0.05)] dark:shadow-[0px_4px_8px_rgba(255,255,255,0.08),0px_-4px_8px_rgba(255,255,255,0.05)]">
                        <span className="md:text-lg font-medium lg:font-bold dark:text-gray-200">
                            Naymz
                        </span>
                    </div>
                    <div className="w-full rounded-md p-3 md:p-4 lg:p-8 flex flex-col items-center justify-center gap-2.5 border border-gray-200 shadow-[0px_4px_8px_rgba(0,0,0,0.08),0px_-4px_8px_rgba(0,0,0,0.05)] dark:shadow-[0px_4px_8px_rgba(255,255,255,0.08),0px_-4px_8px_rgba(255,255,255,0.05)]">
                        <span className="md:text-lg font-medium lg:font-bold dark:text-gray-200">
                            SocialMention
                        </span>
                    </div>
                    <div className="w-full rounded-md p-3 md:p-4 lg:p-8 flex flex-col items-center justify-center gap-2.5 border border-gray-200 shadow-[0px_4px_8px_rgba(0,0,0,0.08),0px_-4px_8px_rgba(0,0,0,0.05)] dark:shadow-[0px_4px_8px_rgba(255,255,255,0.08),0px_-4px_8px_rgba(255,255,255,0.05)]">
                        <span className="md:text-lg font-medium lg:font-bold dark:text-gray-200">
                            Social Mention​
                        </span>
                    </div>
                    <div className="w-full rounded-md p-3 md:p-4 lg:p-8 flex flex-col items-center justify-center gap-2.5 border border-gray-200 shadow-[0px_4px_8px_rgba(0,0,0,0.08),0px_-4px_8px_rgba(0,0,0,0.05)] dark:shadow-[0px_4px_8px_rgba(255,255,255,0.08),0px_-4px_8px_rgba(255,255,255,0.05)]">
                        <span className="md:text-lg font-medium lg:font-bold dark:text-gray-200">
                            Review Trackers​
                        </span>
                    </div>
                    <div className="w-full rounded-md p-3 md:p-4 lg:p-8 flex flex-col items-center justify-center gap-2.5 border border-gray-200 shadow-[0px_4px_8px_rgba(0,0,0,0.08),0px_-4px_8px_rgba(0,0,0,0.05)] dark:shadow-[0px_4px_8px_rgba(255,255,255,0.08),0px_-4px_8px_rgba(255,255,255,0.05)]">
                        <span className="md:text-lg font-medium lg:font-bold dark:text-gray-200">
                            Trackur
                        </span>
                    </div>
                    <div className="w-full rounded-md p-3 md:p-4 lg:p-8 flex flex-col items-center justify-center gap-2.5 border border-gray-200 shadow-[0px_4px_8px_rgba(0,0,0,0.08),0px_-4px_8px_rgba(0,0,0,0.05)] dark:shadow-[0px_4px_8px_rgba(255,255,255,0.08),0px_-4px_8px_rgba(255,255,255,0.05)]">
                        <span className="md:text-lg font-medium lg:font-bold dark:text-gray-200">
                            Brandseye
                        </span>
                    </div>
                    <div className="w-full rounded-md p-3 md:p-4 lg:p-8 flex flex-col items-center justify-center gap-2.5 border border-gray-200 shadow-[0px_4px_8px_rgba(0,0,0,0.08),0px_-4px_8px_rgba(0,0,0,0.05)] dark:shadow-[0px_4px_8px_rgba(255,255,255,0.08),0px_-4px_8px_rgba(255,255,255,0.05)]">
                        <span className="md:text-lg font-medium lg:font-bold dark:text-gray-200">
                            Google Alerts
                        </span>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}