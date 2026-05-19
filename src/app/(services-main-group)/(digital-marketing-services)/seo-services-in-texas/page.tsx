import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import Button from "@/app/components/button/seo-company-chennai/Buttons";
import { Link as LinkSvg, Earth, ChartBar, FileKey, FileText } from 'lucide-react';
import SeoAndSentimentComponent from "@/app/components/UI/SeoAndSentimentComponent";
import ContactForm from "@/app/components/UI/AllServicePageContactForm";

export const metadata:Metadata = {
    title: "Best SEO Company in Chennai | SEO Agency in Chennai | Rankraze",
    description: "Rankraze is one of the best SEO company in Chennai providing services at an affordable cost for the specific needs of clients. Call us now 97100 79798",
    keywords: [
        "SEO agency in Chennai",
        "SEO agency near me",
        "SEO company in Chennai",
        "SEO in Chennai",
        "SEO services in Chennai",
        "best SEO agency in Chennai",
        "best SEO company in Chennai",
        "best SEO services in Chennai",
        "No 1 SEO company in Chennai",
        "search engine optimization Chennai",
        "search engine optimization services in Chennai",
        "SEO company in Chennai",
        "SEO in Chennai",
        "top 10 SEO companies in Chennai",
        "top SEO company in Chennai"

    ],
                
    alternates: {
        canonical: "https://rankraze.com/seo-company-chennai",
    },

    openGraph: {
        title: "SEO Company Chennai",
        description: "Rankraze is one of the best SEO company in Chennai providing services at an affordable cost for the specific needs of clients. Call us now 97100 79798",
        url: "https://rankraze.com/seo-company-chennai",
        siteName: "Rankraze",
        images: [
        {
            url: "/upload/rankraze-1.webp",
            width: 1120,
            height: 550,
            alt: "business-consultant-mobile.webp",
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
                            Best SEO Agency In Chennai, India
                        </h1>
                        <p className="text-sm md:text-sm text-gray-700 dark:text-gray-300 text-center md:text-left pr-4">
                            Search engines have become a one-stop solution for everything. Even when search engines like Google, Yahoo, and Bing offer millions of results for each search, no one has the time to look at all that
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
                        Are you looking for Best SEO Company In Chennai,India?
                    </h2>
                    <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-justify text-sm md:text-base">
                        In today’s fast-paced world, people seek instant solutions for their every need. Search engines have grown into the standard tool. From the simple queries like “how to make toast” to complex ones like “how to invest in the share market,” people turn to <span className="font-bold">search engines</span> for answers.
                    </p>
                    <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-justify text-sm md:text-base">
                        Search engines, such as Google, Yahoo, and Bing, offer millions of results for every search, but no one has the time to sift through them all. Approximately 95% of web traffic is directed to websites featured on the first page of search engine results, leaving the remaining 5% to vie for attention.
                    </p>
                    <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-justify text-sm md:text-base">
                        Enter <span className="font-bold">Rankraze</span>, your trusted <span className="font-bold">SEO services company in Chennai</span>, India. We are more than just a digital <span className="font-bold">SEO agency in Chennai</span>; we are your strategic partner in the digital marketing landscape. Our expert team excels in optimizing your online presence to ensure your business secures and maintains a coveted position on search engine results pages.
                    </p>
                    <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-justify text-sm md:text-base">
                        At Rankraze, we offer a comprehensive suite of digital marketing services in india, designed to elevate your online visibility and drive organic traffic. With a tailored approach and careful content curation, we specialize in propelling your business towards digital success.
                    </p>
                    <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-justify text-sm md:text-base">
                        Choose Rankraze, your preferred <Link href={"/digital-marketing-services-in-chennai"} className="font-bold text-[var(--primary-blue)]"></Link> digital marketing company in Chennai, and let us steer your online presence towards the pinnacle of search engine rankings. Discover the difference that our SEO expertise can make for your business.
                    </p>
                </div>
                <div className="w-full md:w-1/2 overflow-hidden flex items-center justify-center px-4 py-2.5 rounded-md">
                    <Image 
                    src={"/upload/SEO-Consultancy-Services-In-Chennai.webp"}
                    alt="video marketing services in chennai"
                    width={800} height={600} layout="responsive"
                    objectFit="cover"          
                    className="rounded-xl dark:grayscale-25"                                 
                    />
                </div>
            </div>
        </section>
        <section className="w-full grid place-items-center mt-20 px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 relative">
            <div className="w-full max-w-7xl flex flex-col md:flex-row-reverse items-stretch justify-center">
                <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-3 md:gap-3.5 p-2.5">
                    <h2 className="text-4xl xl:text-[42px] font-semibold text-center md:text-left capitalize dark:text-gray-200 pr-4">
                        What we aim for?
                    </h2>
                    <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-justify text-sm md:text-base">
                        Being one of the leading <span className="font-bold">SEO agencies in Chennai, India</span>, we aim at providing you the best search engine optimization. We know how important SEO is for every business and brand. We value every client and put in diligent efforts to make sure they stay on the top of the SERP.
                    </p>
                    <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-justify text-sm md:text-base">
                        Every niche has its specific high-ranking keywords, competitors, etc. We research and analyze your market to decide which strategies will be the best for you and your business.
                    </p>
                    <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-justify text-sm md:text-base">
                        We know the value of the money you spend. We, being a B2B business, aim to offer you the best value for your money by providing the best economically beneficial solutions.
                    </p>
                </div>
                <div className="w-full md:w-1/2 overflow-hidden flex items-center justify-center px-4 py-2.5 rounded-md">
                    <Image 
                    src={"/upload/SEO-services.webp"}
                    alt="video marketing services in chennai"
                    width={800} height={600} layout="responsive"
                    objectFit="cover"          
                    className="rounded-xl dark:grayscale-55"                                 
                    />
                </div>
            </div>
        </section>
        <section className="w-full grid place-items-center mt-20 px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 relative">
            <div className="w-full max-w-5xl flex flex-col items-stretch justify-center">
                <SeoAndSentimentComponent />
                <div className="w-full overflow-hidden flex items-center justify-center px-4 md:px-10 lg:px-14 xl:px-16 py-5 rounded-md">
                    <Image 
                    src={"/upload/check-seo-banner-art-1.webp"}
                    alt="video marketing services in chennai"
                    width={800} height={600} layout="responsive"
                    objectFit="cover"          
                    className="rounded-xl dark:grayscale-55"                                 
                    />
                </div>
            </div>
        </section>
        <section className="w-full grid place-items-center mt-20 px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 bg-[var(--primary-blue)] relative">
            <div className="w-full max-w-7xl flex flex-col md:flex-row-reverse items-stretch justify-center gap-2.5">
                <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-3 md:gap-3.5 p-2.5">
                    <h2 className="text-4xl xl:text-[42px] font-semibold text-center md:text-left capitalize text-gray-100 pr-4">
                        Guaranteed SEO Service
                    </h2>
                    <p className="text-gray-100 leading-relaxed text-justify text-sm md:text-base">
                        Rankraze, being one of the top SEO agencies in Chennai, India,  provides you with complete guidance, assistance and guarantees our service satisfaction.
                    </p>
                    <p className="text-gray-100 leading-relaxed text-justify text-sm md:text-base">
                        True to our mission statement, “If we can do it for us, we can do it for you”, our team works passionately to deliver the best results. Most of our clients rank in the first three positions of SERP and the rest of them rank on the first page of the search engine results.
                    </p>
                    <p className="text-gray-100 leading-relaxed text-justify text-sm md:text-base">
                        With this, we guarantee that you will have guaranteed satisfaction with our SEO services and other digital marketing services.
                    </p>
                </div>
                <div className="w-full md:w-1/2 overflow-hidden flex items-center justify-center px-4 py-2.5 md:py-24 rounded-md">
                    <Image 
                    src={"/upload/Guaranteed-SEO-Service-1.webp"}
                    alt="video marketing services in chennai"
                    width={800} height={600} layout="responsive"
                    objectFit="cover"          
                    className="rounded-xl dark:grayscale-25"                                 
                    />
                </div>
            </div>
        </section>
        <section className="w-full grid place-items-center mt-10 md:mt-20 px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16">
            <div className="w-full max-w-7xl flex flex-col items-center justify-center gap-6 px-4 md:px-6 lg:px-10 mt-10 lg:mt-20 z-10">
                <h2 className="text-2xl lg:text-4xl font-semibold text-center lg:text-left dark:text-gray-200">
                    Our SEO services
                </h2>
                <p className="text-gray-700 dark:text-gray-100 leading-relaxed text-justify md:text-center text-sm md:text-base max-w-5xl">
                    We provide custom-made search engine optimization for your industry and make you top in your particular niche & drive more traffic that converts. As a leading SEO agency, we know how important the different aspects of SEO are.
                </p>
                <p className="text-gray-700 dark:text-gray-100 leading-relaxed text-justify md:text-center text-sm md:text-base max-w-5xl">
                    That is why, We take On-page SEO, Off-page SEO, and Technical SEO aspects into account and provide intensive care to your website to succeed in all the aspects of search engine optimization.
                </p>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-3 lg:gap-4 xl:gap-5 max-w-sm md:max-w-none">
                    <div className="w-full flex flex-col items-start justify-start px-5 py-6 rounded-xl gap-5 border border-gray-200 dark:border-gray-300 shadow-lg shadow-gray-100 dark:shadow-gray-700 transform transition-transform duration-200 hover:shadow-2xl hover:shadow-gray-200 hover:dark:shadow-gray-500 hover:-translate-y-1.5">
                        <div className="w-full flex flex-col items-start justify-start gap-5 pl-2.5 relative before:content-[''] before:absolute before:w-11 before:h-11 before:top-0 before:left-0 before:bg-linear-to-bl before:from-[var(--primary-green)] before:to-[#37a8fa] before:rounded-full before:-z-10">
                            <ChartBar strokeWidth={1.5} className="w-8 h-8 md:w-10 md:h-10 text-gray-700 dark:text-gray-200" />
                            <div className="w-4/5 flex items-center justify-start">
                                <p className="text-base md:text-lg xl:text-xl font-medium leading-tight w-fit pl-2 dark:text-gray-200">SEO Consultancy Services</p>
                            </div>
                        </div>
                        <p className="text-sm md:text-base font-medium text-justify px-2.5 md:px-3.5 pb-3.5 text-gray-700 dark:text-gray-400">
                            Most businesses struggle due to the lack of online presence. Establishing your business online is the...<Button buttonName="button1" />
                        </p>
                    </div>
                    <div className="w-full flex flex-col items-start justify-start px-5 py-6 rounded-xl gap-5 border border-gray-200 dark:border-gray-300 shadow-lg shadow-gray-100 dark:shadow-gray-700 transform transition-transform duration-200 hover:shadow-2xl hover:shadow-gray-200 hover:dark:shadow-gray-500 hover:-translate-y-1.5">
                        <div className="w-full flex flex-col items-start justify-start gap-5 pl-2.5 relative before:content-[''] before:absolute before:w-11 before:h-11 before:top-0 before:left-0 before:bg-linear-to-bl before:from-[var(--primary-green)] before:to-[#37a8fa] before:rounded-full before:-z-10">
                            <FileText strokeWidth={1.5} className="w-8 h-8 md:w-10 md:h-10 text-gray-700 dark:text-gray-200" />
                            <div className="w-4/5 flex items-center justify-start">
                                <p className="text-base md:text-lg xl:text-xl font-medium leading-tight w-fit pl-2 dark:text-gray-200">Local SEO Services</p>
                            </div>
                        </div>
                        <p className="text-sm md:text-base font-medium text-justify px-2.5 md:px-3.5 pb-3.5 text-gray-700 dark:text-gray-400">
                            If you own a business or service that has a physical location and focuses on a particular region or area geographically,...<Button buttonName="button2" />
                        </p>
                    </div>
                    <div className="w-full flex flex-col items-start justify-start px-5 py-6 rounded-xl gap-5 border border-gray-200 dark:border-gray-300 shadow-lg shadow-gray-100 dark:shadow-gray-700 transform transition-transform duration-200 hover:shadow-2xl hover:shadow-gray-200 hover:dark:shadow-gray-500 hover:-translate-y-1.5">
                        <div className="w-full flex flex-col items-start justify-start gap-5 pl-2.5 relative before:content-[''] before:absolute before:w-11 before:h-11 before:top-0 before:left-0 before:bg-linear-to-bl before:from-[var(--primary-green)] before:to-[#37a8fa] before:rounded-full before:-z-10">
                            <Earth strokeWidth={1.5} className="w-8 h-8 md:w-10 md:h-10 text-gray-700 dark:text-gray-200" />
                            <div className="w-4/5 flex items-center justify-start">
                                <p className="text-base md:text-lg xl:text-xl font-medium leading-tight w-fit pl-2 dark:text-gray-200">Global SEO Services</p>
                            </div>
                        </div>
                        <p className="text-sm md:text-base font-medium text-justify px-2.5 md:px-3.5 pb-3.5 text-gray-700 dark:text-gray-400">
                            Being one of the leading SEO agencies that have clients from around the globe, we know what it takes to build and,...<Button buttonName="button3" />
                        </p>
                    </div>
                    <div className="w-full flex flex-col items-start justify-start px-5 py-6 rounded-xl gap-5 border border-gray-200 dark:border-gray-300 shadow-lg shadow-gray-100 dark:shadow-gray-700 transform transition-transform duration-200 hover:shadow-2xl hover:shadow-gray-200 hover:dark:shadow-gray-500 hover:-translate-y-1.5">
                        <div className="w-full flex flex-col items-start justify-start gap-5 pl-2.5 relative before:content-[''] before:absolute before:w-11 before:h-11 before:top-0 before:left-0 before:bg-linear-to-bl before:from-[var(--primary-green)] before:to-[#37a8fa] before:rounded-full before:-z-10">
                            <FileKey strokeWidth={1.5} className="w-8 h-8 md:w-10 md:h-10 text-gray-700 dark:text-gray-200" />
                            <div className="w-4/5 flex items-center justify-start">
                                <p className="text-base md:text-lg xl:text-xl font-medium leading-tight w-fit pl-2 dark:text-gray-200">Keyword Research Analysis</p>
                            </div>
                        </div>
                        <p className="text-sm md:text-base font-medium text-justify px-2.5 md:px-3.5 pb-3.5 text-gray-700 dark:text-gray-400">
                            Keywords are Everything in SEO. To make a website or any content of the site like a,...<Button buttonName="button4" />
                        </p>
                    </div>
                    <div className="w-full flex flex-col items-start justify-start px-5 py-6 rounded-xl gap-5 border border-gray-200 dark:border-gray-300 shadow-lg shadow-gray-100 dark:shadow-gray-700 transform transition-transform duration-200 hover:shadow-2xl hover:shadow-gray-200 hover:dark:shadow-gray-500 hover:-translate-y-1.5">
                        <div className="w-full flex flex-col items-start justify-start gap-5 pl-2.5 relative before:content-[''] before:absolute before:w-11 before:h-11 before:top-0 before:left-0 before:bg-linear-to-bl before:from-[var(--primary-green)] before:to-[#37a8fa] before:rounded-full before:-z-10">
                           <LinkSvg strokeWidth={1.5} className="w-8 h-8 md:w-10 md:h-10 text-gray-700 dark:text-gray-200" />
                            <div className="w-4/5 flex items-center justify-start">
                                <p className="text-base md:text-lg xl:text-xl font-medium leading-tight w-fit pl-2 dark:text-gray-200">Effective Link Building Services</p>
                            </div>
                        </div>
                        <p className="text-sm md:text-base font-medium text-justify px-2.5 md:px-3.5 pb-3.5 text-gray-700 dark:text-gray-400">
                            Link Building is the factor that is equally important as Keyword Research in Search Engine Optimization,...<Button buttonName="button5" />
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section className="w-full grid place-items-center mt-10 md:mt-20 px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 relative">
            <div className="w-full max-w-7xl flex flex-col md:flex-row-reverse items-center justify-center gap-6 px-4 md:px-6 lg:px-10 mt-8 md:mt-10">
                <div className="w-full md:w-1/2 flex flex-col items-start justify-center gap-5 pl-2.5">
                    <h2 className="text-2xl lg:text-4xl dark:text-gray-200 font-semibold text-center lg:text-left">
                        Some of the key factors stating why we are the best SEO company in Chennai, India are,
                    </h2>
                    <ul className="pl-8 flex flex-col gap-1.5 md:gap-2 list-disc marker:text-[var(--primary-green)] text-gray-700 dark:text-gray-300 leading-relaxed">
                        <li className="flex items-start gap-2">
                            <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                            <span className="">We help you build Organic Traffic</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                            <span className="">
                                We strictly adhere to White-Hat Techniques and an Anti-Spam Policy.
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                            <span className="">
                                We provide the best SEO results in a Cost-effective relationship.
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                            <span className="">
                                We provide you an SEO Audit Report of your site with information to keep you updated about the steps taken from our side and the positive impact it has on your website.
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                            <span className="">
                                We have your back 24/7. Our support team is always there to help you with any issues.
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                            <span className="">
                                What We Say Is What We Do. We are true to our words.
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                            <span className="">
                                We focus on the long-term goal and take every step towards achieving it.
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                            <span className="">
                                We assure a satisfaction guarantee and offer peace of mind concerning your business.
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="w-full md:w-1/2 px-2.5 md:px-4 lg:px-6 2xl:px-8">
                    <Image 
                    src={"/upload/SEO-image3-2-1024x567.webp"}
                    alt="SEO-image1"
                    width={1200}
                    height={800}
                    className="w-full rounded-md md:rounded-lg dark:grayscale-25"
                    />
                </div>
            </div>
            <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-center gap-6 px-4 md:px-6 lg:px-10 mt-8 md:mt-10">
                <div className="w-full md:w-1/2 flex flex-col items-start justify-center gap-5 pl-2.5">
                    <h2 className="text-2xl lg:text-4xl dark:text-gray-200 font-semibold text-center lg:text-left">
                        Our SEO Global Service Process Includes
                    </h2>
                    <ul className="flex flex-col gap-1.5 md:gap-2 pl-8 list-disc marker:text-[var(--primary-green)] text-gray-700 dark:text-gray-300 leading-relaxed">
                        <li>Rankraze one of the leading SEO company in Chennai, India. Our Marketing expert will analyze the Market research for your business to see how your customers are searching for your business.</li>
                        <li>After the general search analysis will make keyword research and analysis for those keywords which are the most searched by the consumer and which can be ranked for easiest to your Business.</li>
                        <li>Our SEO expert will analyze the business website and do all the SEO strategies which will help to do it easily.</li>
                        <li>Keep on tracking the results, discuss the analytics and will regularly follow the SEO reporting to our clients.</li>
                        <li>Keep updated the business content with SEO strategies and verify the ranking factors.</li>
                        <li>Since we are the best SEO experts in Chennai, India, Eventually will always work hard to find the ways to get leads for your business.</li>
                    </ul>
                </div>
                <div className="w-full md:w-1/2 px-2.5 md:px-4 lg:px-6 2xl:px-8">
                    <Image 
                    src={"/upload/Seo-Strategy-scaled-1.webp"}
                    alt="video-markeing-image"
                    width={1200}
                    height={800}
                    className="w-full rounded-md md:rounded-lg"
                    />
                </div>
            </div>
        </section>

        <section className="w-full grid place-items-center mt-10 md:mt-20 px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 relative bg-gray-100 py-20 dark:bg-[var(--secondary)]">
              <div className="text-center py-3">
             <h2 className="lg:text-4xl md:text-3xl tetx-xl font-semibold py-3 dark:text-[var(--card-foreground)]">Our SEO Strategies</h2>
             </div>
               <div className="w-full flex flex-col md:flex-row items-stretch justify-center gap-3.5 md:gap-5 lg:gap-8 max-w-7xl  ">
               <div className="w-full md:w-1/3 flex flex-col items-center justify-start gap-4 dark:border-gray-50 rounded-md cursor-pointer bg-white ">
  <p className="text-sm leading-relaxed text-gray-500 p-5 dark:text-gray-400 tracking-wide text-center">
    Rankraze one of the leading SEO company in Chennai , India. Our Marketing expert will analyze the Market research for your business to see how your customers are searching for your business.
  </p>
</div>

                <div className="w-full md:w-1/3 flex flex-col items-center bg-white justify-start p-5 md:p-6 lg:p-7 gap-4 rounded-md cursor-pointer">
                    <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400 tracking-wide text-center">After the general search analysis will make keyword research and analysis for those keywords which are the most searched by the consumer and which can be ranked for easiest to your Business.</p>
                </div>
                <div className="w-full md:w-1/3 flex flex-col items-center  bg-white justify-start p-5 md:p-6 lg:p-7 gap-4 rounded-md cursor-pointer">
                    <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400 tracking-wide text-center">Our SEO expert will analyze the business website and do all the SEO strategies which will help to do it easily.</p>
                </div>
                <div className="w-full md:w-1/3 flex flex-col  bg-white items-center justify-start p-5 md:p-6 lg:p-7 gap-4  cursor-pointer">
                    
                    <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400 tracking-wide text-center">Keep on tracking the results, discuss the analytics and will regularly follow the SEO reporting to our clients.</p>
                </div>
                <div className="w-full md:w-1/3 flex  bg-white flex-col items-center justify-start p-5 md:p-6 lg:p-7 gap-4  cursor-pointer">
                    
                    <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400 tracking-wide text-center">Keep on tracking the results, discuss the analytics and will regularly follow the SEO reporting to our clients.</p>
                </div>
            </div>
        </section>

        <section className="w-full grid place-items-center mt-10 md:mt-20 px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 relative">
            <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-6 lg:px-10 mt-8 md:mt-10">

            </div>
            <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-6 lg:px-10 mt-8 md:mt-10">
                <iframe
                    className="w-full aspect-video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="SEO Company in Chennai | RANKRAZE | Search engine optimization"
                    width="640"
                    height="360"
                    src="https://www.youtube.com/embed/jARDxCqzWXk?controls=1&rel=0&playsinline=0&cc_load_policy=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fwww.rankraze.com&widgetid=1&forigin=https%3A%2F%2Fwww.rankraze.com%2Fseo-company-chennai%2F&aoriginsup=1&gporigin=https%3A%2F%2Fwww.rankraze.com%2Fsocial-media-marketing-company-chennai%2F&vf=1"
                    id="widget2"
                    allowFullScreen
                    loading="lazy"
                />
                <iframe
                    className="w-full aspect-video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="Search Engine Optimization (SEO) Services in Chennai | Digital Marketing Agency Chennai | Rankraze"
                    width="640"
                    height="360"
                    src="https://www.youtube.com/embed/QJPevnISm8g?controls=1&rel=0&playsinline=0&cc_load_policy=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fwww.rankraze.com&widgetid=3&forigin=https%3A%2F%2Fwww.rankraze.com%2Fseo-company-chennai%2F&aoriginsup=1&gporigin=https%3A%2F%2Fwww.rankraze.com%2Fsocial-media-marketing-company-chennai%2F&vf=1"
                    id="widget4"
                    allowFullScreen
                    loading="lazy"
                />
            </div>
        </section>

        <section className="section-padding dark:bg-[var(--popover)] p-10 bg-white">
            <div className="container-custom">
                <div className="max-w-4xl mx-auto">
                <div className="mb-16">
                
                    <h2 className="heading-medium text-center text-2xl md:text-3xl lg:text-4xl font-bold">Most Popular Questions</h2>
                </div>

                <div className="space-y-4">

                {/* Accordion Item 1 */}
            <div className="bg-gray-50 rou overflow-hidden shadow
            ">
            <input type="radio" name="accordion" id="acc1" className="peer hidden" defaultChecked />
            <label
                htmlFor="acc1"
                className="flex justify-between p-5 cursor-pointer bg-white  transition-all duration-300 peer-checked:bg-gradient-to-br peer-checked:from-[#3DBC9C] peer-checked:to-[#36aaf1]"
            >
                <span className="text-sm font-bold text-black peer-checked:text-white">
                Where can you work for us as an animator?
                </span>
            </label>
            <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96 p-0 peer-checked:p-5 text-gray-600 text-sm">
                SEO is the factor that decides which website should appear on the top of the search results. Websites that appear on the first page of search results tend to have more visibility and click-through rate.

            Using strategies like link building, keyword research, we can help your website reach the top of search results which in turn drives a lot of traffic that converts organically.
            </div>
            </div>

            {/* Accordion Item 2 */}
            <div className="bg-gray-50 rou overflow-hidden shadow">
            <input type="radio" name="accordion" id="acc2" className="peer hidden" />
            <label
                htmlFor="acc2"
                className="flex justify-between p-5 cursor-pointer bg-white   peer-checked:bg-gradient-to-br peer-checked:from-[#3DBC9C] peer-checked:to-[#36aaf1]">
                <span className="text-sm font-bold text-black peer-checked:text-white">
                Is SEO necessary for my website?
                </span>
            </label>
            <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96 p-0 peer-checked:p-5 text-gray-600 text-sm">
                When you search for something over the internet, you tend to click on the first 5 links more because you believe they’ll offer you the most value. Some other website on the second page of search results might actually have more value than the ones on the first page. But it will go unnoticed because of the lack of SEO.
            To avoid this, and rank higher on results to drive more people to your website and guide them to your business, you need to have a well-optimized website
            </div>
            </div>
                    {/* Accordion Item 3 */}
                    <div className="bg-gray-50 rounded overflow-hidden shadow">
                    <input type="radio" name="accordion" id="acc3" className="peer hidden" />
                    <label htmlFor="acc3" className="flex justify-between p-5 cursor-pointer  bg-white  transition-all duration-300 peer-checked:bg-gradient-to-br peer-checked:from-[#3DBC9C] peer-checked:to-[#36aaf1]">
                        <span className="text-sm font-bold text-black"> How will SEO benefit my business?</span>     
                    </label>
                    <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96 p-0 peer-checked:p-5 text-gray-600 text-sm">
            SEO benefits your business in building trust, branding & visibility.

            Optimizing your website for search engines is a necessary step for your business because SEO helps you gain more visibility and creates branding organically. Appearing on the first page of search results also establishes trust in you and your product/services. 
                    </div>
                    </div>

                    {/* Accordion Item 4 */}
                    <div className="bg-gray-50 rounded overflow-hidden shadow">
                    <input type="radio" name="accordion" id="acc4" className="peer hidden" />
                    <label htmlFor="acc4" className="flex justify-between p-5 cursor-pointer bg-white  transition-all duration-300 peer-checked:bg-gradient-to-br peer-checked:from-[#3DBC9C] peer-checked:to-[#36aaf1]">
                        <span className="text-sm font-bold text-black">How long does it take to rank on Google?
                        </span>  
                    </label>
                    <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96 p-0 peer-checked:p-5 text-gray-600 text-sm">
                    Depending on the competitiveness of your niche and the popularity of the keywords you’ve used, making your business/brand appear on the top of the search engine results may vary from a few weeks to months. Ranking in the No.1 position is difficult but definitely doable when the right strategies are used.
                    </div>
                    </div>
                    {/* Accordion Item 5 */}
                    <div className="bg-gray-50 rounded overflow-hidden shadow">
                    <input type="radio" name="accordion" id="acc5" className="peer hidden" />
                    <label htmlFor="acc5" className="flex justify-between p-5 cursor-pointer  bg-white  transition-all duration-300 peer-checked:bg-gradient-to-br peer-checked:from-[#3DBC9C] peer-checked:to-[#36aaf1]">
                        <span className="text-sm font-bold text-black">Is Local SEO necessary for businesses? </span>
                    </label>
                    <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96 p-0 peer-checked:p-5 text-gray-600 text-sm">
                    If you are a business with a physical address, local SEO is very important.

            If you own a wedding catering services business in Chennai, it will be more useful for people in Chennai than for people in Delhi. Targeting people in your business location using local SEO is very effective.

            Another advantage is that people who search for local businesses are ready to take action. When you appear on the top of search results, there’s a high possibility of them choosing your services.
                    </div>
                    </div>
            {/* Accordion Item 6 */}
                    <div className="bg-gray-50 rounded overflow-hidden shadow
                    ">
                    <input type="radio" name="accordion" id="acc6" className="peer hidden" />
                    <label htmlFor="acc6" className="flex justify-between p-5 cursor-pointer  bg-white  transition-all duration-300 peer-checked:bg-gradient-to-br peer-checked:from-[#3DBC9C] peer-checked:to-[#36aaf1]">
                        <span className="text-sm font-bold text-black">What will happen if I stop doing SEO after ranking higher?

            </span>
                        
                    </label>
                    <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96 p-0 peer-checked:p-5 text-gray-600 text-sm">
                    Once you rank on the top of the search engine results page, it is important to maintain that position by consistent optimization.

            If you stop doing SEO to your website content after you ranked once, other websites in your niche or websites with similar keywords can easily take over your position.

            This will affect your search engine ranking and traffic.
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>

    </>
    )
}