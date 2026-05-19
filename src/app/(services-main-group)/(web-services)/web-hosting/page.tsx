import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import ContactForm from "@/app/components/UI/AllServicePageContactForm";

export const metadata:Metadata = {
    title: "Best Web Hosting in Chennai - Fast & Secure Service",
    description: "Are you looking for the Best web hosting service in Chennai? Our reliable services ensure a fast, secure, and user-friendly experience. Get started today! Call us!",
    
    keywords: [
        "best web hosting in Chennai",
        "cPanel hosting India",
        "Linux hosting",
        "Linux hosting company",
        "Linux hosting India",
        "Linux web hosting",
        "web hosting Chennai",
        "web hosting company",
        "web hosting company in Chennai",
        "web hosting service providers in India",
        "web hosting services",
        "web hosting services in Chennai",
        "website hosting Chennai"
    ],
                
    alternates: {
        canonical: "https://rankraze.com/web-hosting-company-service-in-chennai",
    },

    openGraph: {
        title: "Web Hosting Company Service in Chennai",
        description: "Are you looking for the Best web hosting service in Chennai? Our reliable services ensure a fast, secure, and user-friendly experience. Get started today! Call us!",
        url: "https://rankraze.com/web-hosting-company-service-in-chennai",
        siteName: "Rankraze",
        images: [
        {
            url: "/upload/web-hostinger-1.webp",
            width: 1024,
            height: 1024,
            alt: "web-hosting-company.webp",
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
                            Web Hosting Service 
                        </h1>
                        <p className="text-sm md:text-sm text-gray-700 dark:text-gray-300 text-center md:text-left pr-4">
                            We bring together the best in creative designing and user interaction, and that is why hundreds of businesses from around the world trust us to design their web front interfaces.
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
                <div className="w-full md:w-1/2 flex flex-col items-start justify-center gap-3 md:gap-3.5 p-2.5 lg:p-4">
                    <h2 className="text-4xl xl:text-[42px] font-semibold text-center md:text-left capitalize dark:text-gray-200 pr-4">
                        Web Hosting Service Company in Chennai
                    </h2>
                    <ul className="pl-8 flex flex-col gap-1.5 md:gap-2 list-disc marker:text-[var(--primary-green)] text-gray-700 dark:text-gray-300 leading-relaxed">
                        <li className="flex items-start gap-2">
                            <i className="ri-check-double-line text-lg text-[var(--primary-green)]"></i>
                            <span className="">
                                DATABASES & INFRASTRUCTURE
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <i className="ri-check-double-line text-lg text-[var(--primary-green)]"></i>
                            <span className="">
                                DOMAINS & EMAIL 
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <i className="ri-check-double-line text-lg text-[var(--primary-green)]"></i>
                            <span className="">
                                GREAT 24/7 SUPPORT
                            </span>
                        </li>
                    </ul>
                    <Link href="" className="overflow-hidden capitalize text-sm text-white px-6 py-2.5 relative bg-linear-to-br from-[#3DBC9C] to-[#36aaf1] rounded-lg">request quote</Link>
                </div>
                <div className="w-full md:w-1/2 overflow-hidden flex items-center justify-center px-4 py-2.5 rounded-md">
                    <Image 
                    src={"/upload/web-hostinger-1.webp"}
                    alt="Web Hosting services in chennai"
                    width={800} height={600} layout="responsive"
                    objectFit="cover"          
                    className="rounded-xl dark:grayscale-25 px-1.5 md:px-4 lg:px-8 xl:px-14"                                 
                    />
                </div>
            </div>
            <div className="w-full max-w-7xl flex flex-col items-center justify-center gap-6 px-4 md:px-6 lg:px-10 my-5 z-10">
                <h2 className="text-2xl lg:text-4xl dark:text-gray-200 font-semibold text-center lg:text-left">
                    Our Best Services
                </h2>
                <p className="dark:text-gray-400 text-sm md:text-sm text-center tracking-tight md:tracking-normal max-w-md">
                    Share processes an data on a need-to-know basis without the need Our prices are clear and straight forward
                </p>
                <div className="w-full grid max-w-7xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2.5 gap-5 mt-3.5 2xl:mt-8">
                    <div className="flex flex-col items-center justify-center gap-5 px-12 py-8 group overflow-hidden rounded-2xl -z-10 border border-gray-200">
                        <div className="w-full h-full flex flex-col items-start justify-start gap-5 relative transform transition-[width,height,top,left] duration-500">
                            <div className="w-8 h-8 md:w-8 md:h-8 lg:w-[48px] lg:h-[48px] rounded-full bg-linear-to-tr from-[#4EABF4] to-[#52B9A9] absolute -z-10 left-0 top-0 -translate-x-2 -translate-y-2 onhover-scale opacity-85"></div>
                            <div className="w-full flex flex-col items-start center-start gap-2.5">
                                <p className="capitalize font-semibold text-xl text-gray-700 dark:text-gray-300">Shared Hosting</p>
                                <p className="text-gray-500 dark:text-gray-400 text-justify md:text-left leading-snug md:leading-relaxed tracking-wide text-sm">
                                    Our preeminent WordPress solution adorned with a contagion of virality, ushering in an aura of unparalleled prominence for your website in London,UK.
                                </p>
                            </div>
                        </div> 
                    </div>
                    <div className="flex flex-col items-center justify-center gap-5 px-12 py-8 group overflow-hidden rounded-2xl -z-10 border border-gray-200">
                        <div className="w-full h-full flex flex-col items-start justify-start gap-5 relative transform transition-[width,height,top,left] duration-500">
                            <div className="w-8 h-8 md:w-8 md:h-8 lg:w-[48px] lg:h-[48px] rounded-full bg-linear-to-tr from-[#4EABF4] to-[#52B9A9] absolute -z-10 left-0 top-0 -translate-x-2 -translate-y-2 onhover-scale opacity-85"></div>
                            <div className="w-full flex flex-col items-start center-start gap-2.5">
                                <p className="capitalize font-semibold text-xl text-gray-700 dark:text-gray-300">Reseller Hosting</p>
                                <p className="text-gray-500 dark:text-gray-400 text-justify md:text-left leading-snug md:leading-relaxed tracking-wide text-sm">
                                    We offer a premium WordPress solution that boasts an allure of virality, perfect for London entrepreneurs.
                                </p>
                            </div>
                        </div> 
                    </div>
                    <div className="flex flex-col items-center justify-center gap-5 px-12 py-8 group overflow-hidden rounded-2xl -z-10 border border-gray-200">
                        <div className="w-full h-full flex flex-col items-start justify-start gap-5 relative transform transition-[width,height,top,left] duration-500">
                            <div className="w-8 h-8 md:w-8 md:h-8 lg:w-[48px] lg:h-[48px] rounded-full bg-linear-to-tr from-[#4EABF4] to-[#52B9A9] absolute -z-10 left-0 top-0 -translate-x-2 -translate-y-2 onhover-scale opacity-85"></div>
                            <div className="w-full flex flex-col items-start center-start gap-2.5">
                                <p className="capitalize font-semibold text-xl text-gray-700 dark:text-gray-300">VPS Hosting</p>
                                <p className="text-gray-500 dark:text-gray-400 text-justify md:text-left leading-snug md:leading-relaxed tracking-wide text-sm">
                                    A formidable colossus of virtual prowess, our best-in-class WordPress solution orchestrates a symphony of virality, ensuring reliability for Chennai.
                                </p>
                            </div>
                        </div> 
                    </div>
                    <div className="flex flex-col items-center justify-center gap-5 px-12 py-8 group overflow-hidden rounded-2xl -z-10 border border-gray-200">
                        <div className="w-full h-full flex flex-col items-start justify-start gap-5 relative transform transition-[width,height,top,left] duration-500">
                            <div className="w-8 h-8 md:w-8 md:h-8 lg:w-[48px] lg:h-[48px] rounded-full bg-linear-to-tr from-[#4EABF4] to-[#52B9A9] absolute -z-10 left-0 top-0 -translate-x-2 -translate-y-2 onhover-scale opacity-85"></div>
                            <div className="w-full flex flex-col items-start center-start gap-2.5">
                                <p className="capitalize font-semibold text-xl text-gray-700 dark:text-gray-300">Cloud Hosting</p>
                                <p className="text-gray-500 dark:text-gray-400 text-justify md:text-left leading-snug md:leading-relaxed tracking-wide text-sm">
                                    Our best-in-class WordPress solution creates a cascade of virality that perfectly suits Chennai, like a cascade of digital wonders.
                                </p>
                            </div>
                        </div> 
                    </div>
                    <div className="flex flex-col items-center justify-center gap-5 px-12 py-8 group overflow-hidden rounded-2xl -z-10 border border-gray-200">
                        <div className="w-full h-full flex flex-col items-start justify-start gap-5 relative transform transition-[width,height,top,left] duration-500">
                            <div className="w-8 h-8 md:w-8 md:h-8 lg:w-[48px] lg:h-[48px] rounded-full bg-linear-to-tr from-[#4EABF4] to-[#52B9A9] absolute -z-10 left-0 top-0 -translate-x-2 -translate-y-2 onhover-scale opacity-85"></div>
                            <div className="w-full flex flex-col items-start center-start gap-2.5">
                                <p className="capitalize font-semibold text-xl text-gray-700 dark:text-gray-300">Dedicated Hosting</p>
                                <p className="text-gray-500 dark:text-gray-400 text-justify md:text-left leading-snug md:leading-relaxed tracking-wide text-sm">
                                    we provide an exceptional WordPress solution with a mesmerizing harmony of virality.
                                </p>
                            </div>
                        </div> 
                    </div>
                    <div className="flex flex-col items-center justify-center gap-5 px-12 py-8 group overflow-hidden rounded-2xl -z-10 border border-gray-200">
                        <div className="w-full h-full flex flex-col items-start justify-start gap-5 relative transform transition-[width,height,top,left] duration-500">
                            <div className="w-8 h-8 md:w-8 md:h-8 lg:w-[48px] lg:h-[48px] rounded-full bg-linear-to-tr from-[#4EABF4] to-[#52B9A9] absolute -z-10 left-0 top-0 -translate-x-2 -translate-y-2 onhover-scale opacity-85"></div>
                            <div className="w-full flex flex-col items-start center-start gap-2.5">
                                <p className="capitalize font-semibold text-xl text-gray-700 dark:text-gray-300">Domain Name</p>
                                <p className="text-gray-500 dark:text-gray-400 text-justify md:text-left leading-snug md:leading-relaxed tracking-wide text-sm">
                                    Our peerless WordPress solution is beautifully adorned with a majestic insignia, evoking an irresistible sense of virality ideal for branding your website.
                                </p>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}