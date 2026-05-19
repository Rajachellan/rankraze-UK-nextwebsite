import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import ContactForm from "@/app/components/UI/AllServicePageContactForm";

export const metadata:Metadata = {
    title: "Mobile Application Development Company in Chennai - Android | iPad",
    description: "Rankraze is a top-notch Mobile App Development Company in Chennai. Get your business mobile application at Best price in Chennai.",
    
    keywords: [
    "android app development company in Chennai",
    "android app development company in India",
    "android application developers in Chennai",
    "android application development company in Chennai",
    "app development companies",
    "app development services",
    "mobile app developer",
    "mobile app developers",
    "mobile app development company",
    "mobile app development company India",
    "mobile app development in Chennai",
    "mobile app development services",
    "mobile app development solutions",
    "mobile application development company in Chennai"
    ],
                
    alternates: {
        canonical: "https://rankraze.com/mobile-app-development-company-chennai",
    },

    openGraph: {
        title: "Mobile App Development Company Chennai",
        description: "Rankraze is a top-notch Mobile App Development Company in Chennai. Get your business mobile application at affordable price in Chennai.",
        url: "https://rankraze.com/mobile-app-development-company-chennai",
        siteName: "Rankraze",
        images: [
        {
            url: "/upload/mobile3.webp",
            width: 918,
            height: 1000,
            alt: "App-Development.webp",
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
                            Taking Your Mobile App Development to New Heights
                        </h1>
                        <p className="text-sm md:text-sm text-gray-700 dark:text-gray-300 text-center md:text-left pr-4">
                            Join our 10,000+ community – share and know what products are really worth buying!
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
                <div className="w-full md:w-1/2 flex flex-col items-start justify-center gap-3 md:gap-3.5 p-2.5">
                    <h2 className="text-4xl xl:text-[42px] font-semibold text-center md:text-left capitalize dark:text-gray-200 pr-4">
                        We are the #1 mobile development company
                    </h2>
                    <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-justify text-sm md:text-base">
                        Ranking among the topmost flutter development company in India, Rankraze has been instrumental in providing best-in-class mobile app development services to a global clientele. We use flutter development frame to help our clients reach their business goals. Owing to our skilled developer’s enriched industry experience and a pool of dexterous professionals, the company has been able to deliver top-notch mobile applications across various industry verticals. Right from ideation, designing, development, testing to deployment, the company takes care of each and every minute detail to offer a bug-free and high-performance end product to the clients.
                    </p>
                    <Link href="" className="overflow-hidden capitalize text-sm text-white px-6 py-2.5 relative bg-linear-to-br from-[#3DBC9C] to-[#36aaf1] rounded-lg">learn more</Link>
                </div>
                <div className="w-full md:w-1/2 overflow-hidden flex items-center justify-center px-4 py-2.5 rounded-md">
                    <Image 
                    src={"/upload/mobile3.webp"}
                    alt="Mobile Application services in chennai"
                    width={800} height={600} layout="responsive"
                    objectFit="cover"          
                    className="rounded-xl dark:grayscale-25"                                 
                    />
                </div>
            </div>
        </section>
        <section className="w-full grid place-items-center mt-10 md:mt-20 px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 relative">
            <div className="w-full max-w-7xl flex flex-col md:flex-row-reverse items-stretch justify-center">
                <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-3 md:gap-3.5 p-2.5">
                    <h3 className="text-4xl xl:text-[42px] font-semibold text-center md:text-left capitalize dark:text-gray-200 pr-4">
                        We are the Partnering with the best mobile app development framework – Flutter
                    </h3>
                    <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-justify text-sm md:text-base">
                        Flutter is framework for developing cross-platform mobile apps with a single codebase. It is incredibly fast, has a simple and efficient programming language, and provides a set of tools that make development process easy.
                    </p>
                    <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-justify text-sm md:text-base">
                        That is why Rankraze has chosen to use Flutter for mobile app development. With Flutter, we can develop high-quality apps quickly and efficiently. We believe that Flutter is the best mobile app development framework available today, and we are excited to use it to develop our next generation of mobile apps ensuring they remain up-to-date with the latest platform features.
                    </p>
                </div>
                <div className="w-full md:w-1/2 overflow-hidden flex items-center justify-center px-4 py-2.5 rounded-md">
                    <Image 
                    src={"/upload/New-Project-1-1024x1024.webp"}
                    alt="mobile app development framework – Flutter"
                    width={800} height={600} layout="responsive"
                    objectFit="cover"          
                    className="rounded-xl dark:grayscale-25"                                 
                    />
                </div>
            </div>
        </section>
        <section className="w-full grid place-items-center mt-10 md:mt-20 px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 relative">
            <div className="w-full max-w-7xl flex items-stretch justify-around">
                <div className="w-1/3 flex flex-col items-center justify-center gap-2.5 md:gap-3">
                    <span className="text-[var(--primary-green)] text-4xl md:text-5xl lg:text-7xl font-bold text-center">
                        15+
                    </span>
                    <p className="text-gray-500 dark:text-gray-300 font-medium text-sm md:text-base lg:text-lg text-center">
                        Experiences
                    </p>
                </div>
                <div className="w-1/3 flex flex-col items-center justify-center gap-2.5 md:gap-3">
                    <span className="text-[var(--primary-green)] text-4xl md:text-5xl lg:text-7xl font-bold text-center">
                        10k+
                    </span>
                    <p className="text-gray-500 dark:text-gray-300 font-medium text-sm md:text-base lg:text-lg text-center">
                        Satisfied Customers
                    </p>
                </div>
                <div className="w-1/3 flex flex-col items-center justify-center gap-2.5 md:gap-3">
                    <span className="text-[var(--primary-green)] text-4xl md:text-5xl lg:text-7xl font-bold text-center">
                        100+
                    </span>
                    <p className="text-gray-500 dark:text-gray-300 font-medium text-sm md:text-base lg:text-lg text-center">
                        Team Member
                    </p>
                </div>
            </div>
            <div className="w-full max-w-7xl flex flex-col items-center justify-center gap-6 px-4 md:px-6 lg:px-10 mt-5 md:mt-20 z-10">
                <h3 className="text-2xl md:text-4xl dark:text-gray-200 font-bold text-center lg:text-left">
                    We Transform Your App Goals into a Tangible Success
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base text-center tracking-tight md:tracking-normal max-w-5xl">
                    We provide end-to-end mobile app development solutions for enterprises and startups. Our team of experienced developers can build high-quality native and cross-platform apps for Android, iOS, and Windows.
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base text-center tracking-tight md:tracking-normal">
                    Some of the services and solutions we offer include:
                </p>
            </div>
            <div className="w-full max-w-7xl flex flex-col items-center justify-center gap-6 px-4 md:px-6 lg:px-10 my-5 z-10">
                <div className="flex items-stretch justify-center p-2.5 gap-2.5 md:gap-4 lg:gap-5">
                    <ul className="w-1/3 flex items-left justify-around gap-2 md:text-lg pl-1 flex-col list-disc marker:text-[var(--primary-green)] text-gray-500 dark:text-gray-400">
                        <li className="flex items-start gap-2">
                            <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                            <span className="">
                                Custom mobile app development
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                            <span className="">
                                Mobile app design
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                            <span className="">
                                iOS app development
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                            <span className="">
                                Android app development
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                            <span className="">
                                Cross-platform app development
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                            <span className="">
                                Enterprise app development
                            </span>
                        </li>
                    </ul>
                    <div className="w-1/3">
                        <Image 
                            src={"/upload/New-Project-1177x1536.webp"}
                            alt="mobile app development framework – Flutter"
                            width={700} height={900} layout="responsive"
                            objectFit="cover"          
                            className="rounded-xl dark:grayscale-25"                                 
                        />
                    </div>
                    <ul className="w-1/3 flex items-left justify-around gap-2 md:text-lg pl-1 flex-col list-disc marker:text-[var(--primary-green)] text-gray-500 dark:text-gray-400">
                        <li className="flex items-start gap-2">
                            <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                            <span className="">
                                eCommerce app developmen
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                            <span className="">
                                AR/VR app development
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                            <span className="">
                                IoT app development
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                            <span className="">
                                App development consulting
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                            <span className="">
                                App development project management
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                            <span className="">
                                Quality assurance (QA)
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <section className="w-full grid place-items-center mt-10 md:mt-20 px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 relative">
            <div className="w-full max-w-7xl flex flex-col md:flex-row-reverse items-stretch justify-center">
                <div className="w-full md:w-1/2 flex flex-col items-start justify-center gap-3 md:gap-3.5 p-2.5">
                    <h2 className="text-4xl xl:text-[42px] font-semibold text-center md:text-left capitalize dark:text-gray-200 pr-4">
                        Flutter is taking the mobile app development world by storm into a Tangible Success
                    </h2>
                    <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-justify text-sm md:text-base">
                        Flutter is built on top of the Dart programming language and uses the same development tools and techniques as other mobile app development platforms such as Android and iOS. Flutter is quickly becoming the go-to mobile development platform. Here are some reasons why:
                    </p>
                    <ul className="text-sm md:text-sm pl-1 flex flex-col gap-1 dark:text-gray-200 list-disc marker:text-[var(--primary-green)] text-gray-700">
                        <li className="flex items-start gap-2">
                            <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                            <span>Flutter is simple and easy to use.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                            <span>It is fast and efficient.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                            <span>Flutter supports both native and third-party applications.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                            <span>It has a growing user base.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                            <span>It has a well-developed ecosystem.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                            <span>It is affordable.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                            <span>It has a growing user base.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                            <span>It has a well-developed ecosystem.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                            <span>It has a strong developer community.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                            <span>It has a long history of success.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                            <span>It is future-proof.</span>
                        </li>
                    </ul>
                </div>
                <div className="w-full md:w-1/2 overflow-hidden flex items-center justify-center px-4 py-2.5 rounded-md">
                    <Image 
                    src={"/upload/mobile4-1.webp"}
                    alt="mobile app development framework – Flutter"
                    width={1200} height={1600} layout="responsive"
                    objectFit="cover"          
                    className="rounded-xl dark:grayscale-25"                                 
                    />
                </div>
            </div>
            <div className="w-full max-w-7xl flex flex-col md:flex-row items-stretch justify-center">
                <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-3 md:gap-3.5 p-2.5">
                    <h3 className="text-2xl md:text-3xl font-semibold text-center md:text-left capitalize dark:text-gray-200 pr-4">
                        We take your app from good to great
                    </h3>
                    <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-justify text-sm md:text-base">
                        As a mobile app development company, we love seeing apps that our clients have created turn into great successes. From the initial conception of the app to the final stages of launching it, we take your app from good to great.
                    </p>
                    <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-justify text-sm md:text-base">
                        No matter how good your app is, there’s always room for improvement. That’s where we come in. We specialize in taking great apps and making them even better. We understand that a great mobile app is not just about excellent design and functionality, but also about how it’s marketed and promoted to reach the right audience.
                    </p>
                    <p className="text-[var(--primary-green)] leading-relaxed text-justify text-sm md:text-base font-semibold">
                        Here are a few things we do to help turn a mobile app into a success:
                    </p>
                    <ul className="text-sm md:text-sm pl-1 flex flex-col gap-1 list-disc dark:text-gray-300 marker:text-[var(--primary-green)] text-gray-700">
                        <li className="flex items-start gap-2">
                            <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                            <span>We develop your app using the latest mobile app development technologies and frameworks. We use industry-leading development tools, such as Adobe Dreamweaver, Appcelerator Titanium, and React Native, to create apps that are both visually appealing and functionally robust.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                            <span>We work closely with you throughout the app development process to ensure that you are 100% satisfied with the end result. We take the time to understand your app and its intended audience, and tailor our design and development approach accordingly.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                            <span>We ensure that your app is available on all the major app stores and make sure it is promoted effectively.</span>
                        </li>
                    </ul>
                </div>
                <div className="w-full md:w-1/2 overflow-hidden flex items-center justify-center px-4 py-2.5 rounded-md">
                    <Image 
                    src={"/upload/mobile-app-image5.webp"}
                    alt="mobile app development framework – Flutter"
                    width={800} height={600} layout="responsive"
                    objectFit="cover"          
                    className="rounded-xl dark:grayscale-25"                                 
                    />
                </div>
            </div>
            <div className="w-full max-w-7xl flex flex-col md:flex-row-reverse items-stretch justify-center">
                <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-3 md:gap-3.5 p-2.5">
                    <h3 className="text-2xl md:text-3xl font-semibold text-center md:text-left capitalize dark:text-gray-200 pr-4">
                        We create innovative and user-friendly mobile solutions
                    </h3>
                    <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-justify text-sm md:text-base">
                        We can help you develop a well-optimized, innovative & successful mobile app for your business. Contact us today to get started!
                    </p>
                    <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-justify text-sm md:text-base">
                        ur team of experienced app developers are well-versed in the latest mobile app development technologies & trends. We’re always up-to-date on the latest industry trends so that we can provide our clients with the best possible products. Whether you’re looking for a team to develop a new app or you need someone to update an existing one, we’re here to help.
                    </p>
                </div>
                <div className="w-full md:w-1/2 overflow-hidden flex items-center justify-center px-4 py-2.5 rounded-md">
                    <Image 
                    src={"/upload/keep-network-mobile-app.gif"}
                    alt="mobile app development framework – Flutter"
                    width={800} height={600} layout="responsive"
                    objectFit="cover"          
                    className="rounded-xl dark:grayscale-25"                                 
                    />
                </div>
            </div>
        </section>
        </>
    )
}