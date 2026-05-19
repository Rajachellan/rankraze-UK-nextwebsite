import { Metadata } from "next";
import Image from "next/image";
import AboutUsYoutubeVideo from "../components/AboutUsYoutubeVideo";
import { Telescope, Crosshair, ChartNoAxesCombined } from "lucide-react";
import LatestBogs from "../components/LatestBlogs";
export const metadata:Metadata = {
    title: "About Us - Rankraze",
    description: "We are proving to our clients through result oriented digital marketing services. Believe in that Building brands along with making relationships. We mostly concentrate on building the relationship instead of building links through latest digital technologies and tools.",
    keywords: [
        "top digital marketing companies in Chennai", 
        "business needs enquiry", 
        "passionate digital media experts", 
        "ad fil makers",
        "Online marketers", 
        "Website Design Chennai", 
        "web development company in chennai", 
        "Website Design India", 
        "Web Designing Chennai", 
        "Chennai Companies", 
        "Chennai IT Companies", 
        "Internet Marketing Chennai", 
        "SEO Services Chennai", 
        "SEO Company Chennai", 
        "Logo Designers Chennai"
    ],
                
    alternates: {
        canonical: "https://rankraze.com/about-us",
    },

    openGraph: {
        title: "About Us - Rankraze",
        description: "We are proving to our clients through result oriented digital marketing services. Believe in that Building brands along with making relationships. We mostly concentrate on building the relationship instead of building links through latest digital technologies and tools.",
        url: "https://rankraze.com/about-us",
        siteName: "Rankraze",
        images: [
        {
            url: "/upload/about-us.webp",
            width: 1160,
            height: 1352,
            alt: "about-us.webp",
            type: "image/webp"
        },
        ],
        locale: "en_US",
        type: "article",
    },
}

export default function AboutUs () {
    return (
        <>
        <section className="w-full grid place-items-center dark:bg-[var(--prim-dark-bg)] mt-20 px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-9 md:gap-12 lg:gap-14 xl:gap-16 transition-colors duration-300">
            <div className="w-full flex items-center justify-center relative before:content-[''] before:absolute before:w-full before:h-full before:bg-linear-to-b before:from-[#DAF8F1] before:to-transparent dark:before:from-[#0D2244] dark:before:to-transparent before:rounded-t-4xl before:-z-10 transition-colors duration-300">
                <div className="w-full flex flex-col items-center justify-center gap-2.5 md:gap-3.t xl:gap-4 py-8 md:py-12 xl:py-20 2xl:py-24 max-w-2xl">
                    <h1 className="text-2xl xl:text-4xl capitalize font-bold text-gray-800 dark:text-gray-100">
                        about us
                    </h1>
                    <h2 className="text-base xl:text-lg text-center text-gray-700 dark:text-gray-300 font-semibold leading-none px-7">
                        We’ve driven over 233,524 leads for clients through digital marketing services
                    </h2>
                </div>
            </div>
            <div className="w-full flex flex-col md:flex-row items-center justify-center gap-3.5 md:gap-5 lg:gap-8 max-w-7xl mt-2.5 md:mt-6">
                <div className="w-full md:w-1/2 px-8 md:px-10 lg:px-16 xl:px-24">
                    <Image 
                    src="/upload/about-us.webp"
                    alt="business-consultant-mobile.webp"
                    width={846} height={822}
                    className="rounded-xl shadow-2xs"
                    />
                </div>
                <div className="w-full md:w-1/2 flex flex-col items justify-center p-2.5 gap-3 md:gap-4 xl:gap-5">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl capitalize font-bold text-gray-800 dark:text-gray-200">
                        About Rankraze: Chennai&apos;s #1 Digital Marketing Agency
                    </h2>
                    <p className="text-sm leading-relaxed text-justify text-gray-700 dark:text-gray-200 tracking-wide xl:pr-12 2xl:pr-20 font-semibold">
                        233K+ Leads Delivered | 2,000+ Trusted Brands | 15+ Years Expertise | 4.8/5 Client Rating
                    </p>
                    <p className="text-sm leading-relaxed text-justify text-gray-500 dark:text-gray-400 tracking-wide xl:pr-12 2xl:pr-20">
                        Rankraze – top digital marketing company in Chennai – was born in June 2016 from founder Raja Chellan&apos;s entrepreneurial struggles. After cracking data-driven digital marketing, we built a HubSpot & Google-certified expert team delivering SEO services Chennai, Google Ads , social media marketing, influencer campaigns, web development, and ORM for Chennai SMEs across Healthcare, Education, Real Estate, Ecommerce, IT, and Logistics.
                    </p>
                    <p className="text-sm leading-relaxed text-justify text-gray-500 dark:text-gray-400 tracking-wide xl:pr-12 2xl:pr-20">
                        Rankraze is one of the top digital marketing companies in Chennai, India. Since our journey started in June 2016, we&apos;ve served hundreds of clients and helped them establish powerful digital presence. Our small but passionate team brings years of experience as certified digital marketing experts. We believe in Data-Driven Digital Marketing and strictly adhere to White-Hat Techniques with a firm Anti-spam policy.
                    </p>
                    {/* <Link href={"/contact-us"} className="w-fit text-sm lg:text-base font-semibold capitalize px-5 py-2.5 text-white bg-linear-to-br from-[#3dbc9b] to-[#37a7ff] rounded-md">contact Us</Link> */}
                </div>
            </div>
            <div className="w-full flex flex-col md:flex-row items-stretch justify-center gap-3.5 md:gap-5 lg:gap-8 max-w-7xl mt-2.5 md:mt-6 lg:mt-9 xl:mt-12">
                <div className="w-full md:w-1/3 flex flex-col items-center justify-start p-5 md:p-6 lg:p-7 gap-4 border border-gray-200 dark:border-gray-50 rounded-md shadow-[0px_3px_6px_rgba(0,0,0,0.07),0px_-3px_6px_rgba(0,0,0,0.07)] dark:shadow-[0px_3px_6px_rgba(255,255,255,0.15),0px_-3px_6px_rgba(255,255,255,0.15)] hover:-translate-y-4 hover:shadow-[0px_5px_10px_rgba(0,0,0,0.07),0px_-5px_10px_rgba(0,0,0,0.07)] transform transition-transform duration-300 cursor-pointer">
                    <Telescope  size={52} color="#3DBC9B" strokeWidth={1.5} />
                    <span className="text-base font-semibold text-gray-700 dark:text-gray-300 capitalize text-center">
                        our vision
                    </span>
                    <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400 tracking-wide text-justify">To establish as one of the top Global brands. Leveraging cutting edge technologies to provide world class business solutions. and to Create opportunities for everyone associated with us to rise high.</p>
                </div>
                <div className="w-full md:w-1/3 flex flex-col items-center justify-start p-5 md:p-6 lg:p-7 gap-4 border border-gray-200 rounded-md shadow-[0px_3px_6px_rgba(0,0,0,0.07),0px_-3px_6px_rgba(0,0,0,0.07)] hover:-translate-y-4 hover:shadow-[0px_5px_10px_rgba(0,0,0,0.07),0px_-5px_10px_rgba(0,0,0,0.07)] dark:shadow-[0px_3px_6px_rgba(255,255,255,0.15),0px_-3px_6px_rgba(255,255,255,0.15)] transform transition-transform duration-300 cursor-pointer">
                    <Crosshair  size={48} color="#3DBC9B" strokeWidth={1.5} />
                    <span className="text-base font-semibold text-gray-700 dark:text-gray-300 capitalize text-center">
                        our mission
                    </span>
                    <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400 tracking-wide text-justify">Our mission is to help all business by empowering their online presence globally. In this digital world, if your business is not on the internet, your business will be out of business. we are here to make a change for all small, medium, and large enterprises by taking their business to a global audience.</p>
                </div>
                <div className="w-full md:w-1/3 flex flex-col items-center justify-start p-5 md:p-6 lg:p-7 gap-4 border border-gray-200 rounded-md shadow-[0px_3px_6px_rgba(0,0,0,0.07),0px_-3px_6px_rgba(0,0,0,0.07)] hover:-translate-y-4 hover:shadow-[0px_5px_10px_rgba(0,0,0,0.07),0px_-5px_10px_rgba(0,0,0,0.07)] dark:shadow-[0px_3px_6px_rgba(255,255,255,0.15),0px_-3px_6px_rgba(255,255,255,0.15)] transform transition-transform duration-300 cursor-pointer">
                    <ChartNoAxesCombined size={52} color="#3DBC9B" strokeWidth={1.5} />
                    <span className="text-base font-semibold text-gray-700 dark:text-gray-300 capitalize text-center">
                        our motto
                    </span>
                    <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400 tracking-wide text-justify">Being the top ranking digital marketing company in Chennai, india. our motto is, “If we can do it for us, we can do it for you too”. If we have succeeded in digital marketing and rank in the number one position in SERP, then we can do the same for you and help you with your business’ online success.</p>
                </div>
            </div>
            <div className="w-full flex flex-col md:flex-row items-stretch justify-center gap-3.5 md:gap-5 lg:gap-8  max-w-7xl mt-10 md:mt-14 lg:mt-16 xl:mt-20">
                <div className="w-full md:w-1/2 flex flex-col items-start justify-start p-5">
                    <h2 className="text-2xl md:text-4xl font-bold capitalize dark:text-gray-200">
                        why &quot;rankraze&quot;?
                    </h2>
                    <div className="w-full mt-3.5 xl:mt-5">
                        <ul role="list" className="w-full list-disc text-gray-500 dark:text-gray-400 marker:text-[var(--primary-blue)] dark:marker:text-[var(--primary-green)]">
                            <li className="leading-loose text-[15px]">
                                In this digital race, Rankraze helps its clients to rank better than their competitors.
                            </li>
                            <li className="leading-loose text-[15px]">
                                Our logo has three triangles: The first one, being us, and the other two representing our clients.
                            </li>
                            <li className="leading-loose text-[15px]">
                                The two arcs above the triangles represent how we help our customers broadcast their brand worldwide.
                            </li>
                            <li className="leading-loose text-[15px]">
                                The triangles and arcs also represent double R, representing our brand name RankRaze.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col items-start justify-start p-5">
                    <h2 className="text-2xl md:text-4xl font-bold capitalize dark:text-gray-200">
                        why was rankraze started?
                    </h2>
                    <div className="w-full mt-3.5 xl:mt-5">
                        <ul role="list" className="w-full list-disc text-gray-500 dark:text-gray-400 marker:text-[var(--primary-blue)] dark:marker:text-[var(--primary-green)]">
                            <li className="leading-loose text-[15px]">
                                Our founder & CEO Mr. Raja Chellan started his career as an entrepreneur. But, he couldn’t get the desired results, no matter how hard he tried.
                            </li>
                            <li className="leading-loose text-[15px]">
                                That’s when he realized the importance of digital marketing and started experimenting with all the different platforms, techniques, and marketing strategies.
                            </li>
                            <li className="leading-loose text-[15px]">
                                When he cracked the code to successful digital marketing, he wanted to help people, start-ups, and businesses that are facing the same problems that he once did.
                            </li>
                            <li className="leading-loose text-[15px]">
                                This mission to create a change for other entrepreneurs and businesses is the reason why Rankraze was born.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <section className="w-full grid place-items-center dark:bg-[var(--prim-dark-bg)] mt-20 px-4 md:px-6 lg:px-10 py-6 md:py-10 xl:py-12 2xl:py-16 text-[var(--text-black)] gap-9 md:gap-12 lg:gap-14 xl:gap-16 relative before:content-[''] before:absolute before:w-full before:h-full before:bg-linear-to-b before:from-[#3DBB9E] before:to-[#37A8FC] dark:before:from-[#0D2244] dark:before:to-[#050D1A] before:rounded-t-lg before:md:rounded-t-xl before:lg:rounded-t-2xl before:xl:rounded-t-4xl before:2xl:rounded-t-[42px] before:-z-10 transition-colors duration-300">
            <div className="w-full max-w-7xl flex flex-col items-center justify-center gap-3.5 md:gap-5 xl:gap-7 2xl:gap-9 py-6">
                <h2 className="text-2xl md:text-4xl font-bold capitalize text-white text-center">
                    outstanding digital experience
                </h2>
                <p className="text-sm md:text-sm xl:text-base text-white text-justify max-w-4xl leading-relaxed tracking-wide">
                    <span className="inline-block">Our team of experts is here to guide you on your journey into the online world. We understand that to succeed online, you need not just a well-designed and well-developed website but also the perfect marketing strategy. It’s like having a bright spotlight on your business the Best Digital Marketing Company in Chennai, india.</span>
                    <span className="inline-block mt-4">At Rankraze, we’re like digital wizards. We know all the secrets to make your website or business shine online. Here’s what we do: First, we get to know your business, your website, the people you want to reach, and your goals. Based on all that, we have a best plan just for you. It’s like creating a treasure map to boost your website’s presence all over the internet.</span>
                </p>
            </div>
            <div className="w-full flex flex-col md:flex-row items-stretch justify-center gap-3.5 md:gap-5 lg:gap-8 max-w-7xl mt-2.5 md:mt-6">
                <div className="w-full md:w-1/3 flex flex-col items-center justify-start p-5 md:p-6 lg:p-7 xl:p-9 2xl:p-12 gap-4 border border-gray-200 rounded-md bg-white shadow-[0px_3px_6px_rgba(0,0,0,0.07),0px_-3px_6px_rgba(0,0,0,0.07)] hover:-translate-y-4 hover:shadow-[0px_5px_10px_rgba(0,0,0,0.07),0px_-5px_10px_rgba(0,0,0,0.07)] dark:shadow-[0px_3px_6px_rgba(255,255,255,0.15),0px_-3px_6px_rgba(255,255,255,0.15)] transform transition-transform duration-300 cursor-pointer">
                    <span className="text-base xl:text-lg font-semibold text-gray-700 capitalize text-center">
                        customized solutions
                    </span>
                    <p className="text-sm leading-relaxed text-gray-500 tracking-wide text-justify">We understand that every business is unique, and we tailor our strategies to match your specific needs and challenges.</p>
                </div>
                <div className="w-full md:w-1/3 flex flex-col items-center justify-start p-5 md:p-6 lg:p-7 xl:p-9 2xl:p-12 gap-4 border border-gray-200 rounded-md bg-white shadow-[0px_3px_6px_rgba(0,0,0,0.07),0px_-3px_6px_rgba(0,0,0,0.07)] hover:-translate-y-4 hover:shadow-[0px_5px_10px_rgba(0,0,0,0.07),0px_-5px_10px_rgba(0,0,0,0.07)] dark:shadow-[0px_3px_6px_rgba(255,255,255,0.15),0px_-3px_6px_rgba(255,255,255,0.15)] transform transition-transform duration-300 cursor-pointer">
                    <span className="text-base xl:text-lg font-semibold text-gray-700 capitalize text-center">
                        industry expertise
                    </span>
                    <p className="text-sm leading-relaxed text-gray-500 tracking-wide text-justify">Our digital marketing agency team comprises experienced professionals who stay up to date with the latest trends and best practices in digital marketing services.</p>
                </div>
                <div className="w-full md:w-1/3 flex flex-col items-center justify-start p-5 md:p-6 lg:p-7 xl:p-9 2xl:p-12 gap-4 border border-gray-200 rounded-md bg-white shadow-[0px_3px_6px_rgba(0,0,0,0.07),0px_-3px_6px_rgba(0,0,0,0.07)] hover:-translate-y-4 hover:shadow-[0px_5px_10px_rgba(0,0,0,0.07),0px_-5px_10px_rgba(0,0,0,0.07)] dark:shadow-[0px_3px_6px_rgba(255,255,255,0.15),0px_-3px_6px_rgba(255,255,255,0.15)] transform transition-transform duration-300 cursor-pointer">
                    <span className="text-base xl:text-lg font-semibold text-gray-700 capitalize text-center">
                        results-driven approach
                    </span>
                    <p className="text-sm leading-relaxed text-gray-500 tracking-wide text-justify">We are committed to delivering best digital marketing services growth for your business.</p>
                </div>
            </div>
        </section>
        <section className="w-full grid place-items-center dark:bg-none px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-9 md:gap-12 lg:gap-14 xl:gap-16 relative overflow-hidden z-10">
            <div className="absolute w-svw h-svh top-0 left-0 bg-black bg-[url(/upload/our-team.webp)] bg-fixed bg-center bg-no-repeat bg-[length:100%_auto] -z-20"></div>
            <div className="w-full bg-transparent flex flex-col items-center justify-center pt-24 pb-32 relative ">
                <div className="absolute w-full min-w-svw h-full bg-black opacity-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"></div>
                <div className="w-full max-w-5xl flex flex-col items-center justify-center gap-3.5 md:gap-4 xl:gap-6 2xl:gap-9 p-3.5">
                    <div className="w-full grid place-items-center px-1.5 md:px-3 xl:px-4">
                        <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-gray-200 font-semibold text-center">
                            Why Rankraze is the Best Digital Marketing Company in Chennai, India
                        </p>
                    </div>
                    <div className="w-full grid place-items-center">
                        <p className="text-sm lg:text-sm text-gray-200 text-center capitalize">
                            lets listen to CEO of rankraze
                        </p>
                    </div>
                    <div className="w-full grid place-items-center">
                        <AboutUsYoutubeVideo />
                    </div>
                </div>
            </div>
        </section>
        <section className="w-full h-fit grid place-items-center dark:bg-none px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-9 md:gap-12 lg:gap-14 xl:gap-16 relative pb-3.5">
            <div className="w-4/5 max-w-7xl md:w-4/6 grid grid-cols-2 md:grid-cols-4 grid-rows-1 gap-2.5 md:gap-0 p-4 md:p-6 xl:p-9 2xl:p-12 rounded-md bg-white dark:bg-[#0A1628] border border-gray-100 dark:border-[rgba(255,255,255,0.08)] shadow-[0px_4px_8px_rgba(255,255,255,0.09),0px_-4px_8px_rgba(255,255,255,0.09)] dark:shadow-none absolute z-30 top-0 -translate-y-1/2 transition-colors duration-300">
                <div className="flex flex-col items-center justify-center gap-1 md:gap-1.5 xl:gap-2">
                <p className="text-2xl md:text-5xl font-semibold text-[var(--primary-blue)]">
                    41k+
                    </p> 
                    <p className="text-sm md:text-lg text-gray-800 capitalize">
                    happy client
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center gap-1 md:gap-1.5 xl:gap-2">
                <p className="text-2xl md:text-5xl font-semibold text-[var(--primary-blue)]">
                    76k+
                    </p> 
                    <p className="text-sm md:text-lg text-gray-800 capitalize">
                        project done
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center gap-1 md:gap-1.5 xl:gap-2">
                <p className="text-2xl md:text-5xl font-semibold text-[var(--primary-blue)]">
                    4.7
                    </p> 
                    <p className="text-sm md:text-lg text-gray-800 capitalize">
                    client ratings
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center gap-1 md:gap-1.5 xl:gap-2">
                <p className="text-2xl md:text-5xl font-semibold text-[var(--primary-blue)]">
                    15+
                    </p> 
                    <p className="text-sm md:text-lg text-gray-800 capitalize">
                    years experience
                    </p>
                </div>
            </div>
            <div className="w-full max-w-7xl flex flex-col md:flex-row items-center md:items-stretch justify-center mt-12 md:mt-18 lg:mt-24 xl:mt-40 py-12 gap-3.5">
                <div className="w-full md:w-1/2 p-3.5 grid place-items-center">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-[40px] capitalize text-center md:text-left font-bold px-2.5 md:px-10 leading-tight dark:text-gray-200">
                        trusted by 2,000+ world-class brands and organizations of all sizes
                    </h2>
                </div>
                <div className="w-full md:w-1/2 overflow-hidden max-h-[30vh]  relative before:absolute before:content-[''] before:w-full before:h-5 before:left-0 before:bottom-0 before:z-10 before:bg-gradient-to-t before:from-[#ffffff] dark:before:from-[#292639] before:to-transparent after:absolute after:content-[''] after:h-5 after:w-full after:right-0 after:top-0 after:bottom-0 after:z-10 after:bg-gradient-to-t after:from-transparent after:to-[#ffffff] dark:after:to-[#292639]">
                    <div className="w-full h-[1536px] grid grid-cols-4 auto-rows-[100px] gap-2.5 p-1.5 slide-y-loop dark:grayscale-100 dark:invert dark:brightness-100">
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/Anna-University-1-1.webp"}
                            alt="client-logo-1"
                            width={100}
                            height={100}
                            className="w-full p-1"
                             />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/appolo.webp"}
                            alt="client-logo-2"
                            width={100}
                            height={100}
                            className="h-full px-1 py-6"
                             />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/Bajaj_Finserv_logo.webp"}
                            alt="client-logo-3"
                            width={100}
                            height={50}
                            className="h-full px-1 py-9"
                             />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/Cars-india.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            className="h-full px-1 py-9"
                             />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/Clearone-1-1.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            className="w-full px-5 py-9"
                             />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/europe-1.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            className="w-full px-5"
                             />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/IIT_Madras.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            className="h-full px-0.5 py-8"
                             />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/irqs-2-1.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            className="h-full px-0.5 py-6"
                             />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/Johnson-Lifts-LOGO.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            className="h-full px-0.5 py-6"
                             />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/k-link.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            className="h-full px-0.5 py-6"
                             />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/motilal-oswal-logo.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            className="w-full px-4"
                             />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/mp-developers-1-1.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            className="h-full px-0.5 py-5"
                             />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/murugappa.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            className="h-full px-0.5 py-6"
                             />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/arunexcello.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            className="h-full px-5 py-6"
                             />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/NDTV-2.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            className="h-full px-0.5 py-6"
                             />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/omkar-share-banner.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            className="h-full px-4 py-6"
                             />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/pizza-hut.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            className="h-full px-0.5 py-7"
                             />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/puruvankara-1.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            className="h-full px-0.5 py-7"
                             />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/renault-nissan.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            className="h-full px-0.5 py-6"
                             />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/shizen-energy.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            className="h-full px-5 py-7"
                             />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/shriram-finance-logo.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            className="h-full px-0.5 py-7"
                             />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/silkway.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            className="h-full px-0.5 py-8"
                             />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/TAFE-Logo.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            className="h-full px-0.5 py-8"
                             />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/tradeachievers_official-1.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            className="h-full px-0.5 py-4"
                             />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/ttgroup_logo.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            className="w-full px-3.5 py-8"
                             />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/virginia-tech.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            className="w-full px-6"
                             />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/yagen-logo.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            className="w-full px-7"
                             />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/mv_logo_full.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            className="w-full px-7"
                             />
                        </div>

                        {/* second copy */}
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/Anna-University-1-1.webp"}
                            alt="client-logo-1"
                            width={100}
                            height={100}
                            className="w-full p-1"
                             />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/appolo.webp"}
                            alt="client-logo-2"
                            width={100}
                            height={100}
                            className="h-full px-1 py-6"
                             />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/Bajaj_Finserv_logo.webp"}
                            alt="client-logo-3"
                            width={100}
                            height={50}
                            className="h-full px-1 py-9"
                             />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/Cars-india.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            className="h-full px-1 py-9"
                             />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/Clearone-1-1.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            className="w-full px-5 py-9"
                             />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/europe-1.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            className="w-full px-5"
                             />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/IIT_Madras.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            className="h-full px-0.5 py-8"
                             />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/irqs-2-1.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            className="h-full px-0.5 py-6"
                             />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/Johnson-Lifts-LOGO.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            className="h-full px-0.5 py-6"
                             />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/k-link.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            className="h-full px-0.5 py-6"
                             />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/motilal-oswal-logo.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            className="w-full px-4"
                             />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/mp-developers-1-1.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            className="h-full px-0.5 py-5"
                             />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/murugappa.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            className="h-full px-0.5 py-6"
                             />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/arunexcello.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            className="h-full px-5 py-6"
                             />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/NDTV-2.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            className="h-full px-0.5 py-6"
                             />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/omkar-share-banner.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            className="h-full px-4 py-6"
                             />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/pizza-hut.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            className="h-full px-0.5 py-7"
                             />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/puruvankara-1.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            className="h-full px-0.5 py-7"
                             />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/renault-nissan.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            className="h-full px-0.5 py-6"
                             />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/shizen-energy.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            className="h-full px-5 py-7"
                             />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/shriram-finance-logo.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            className="h-full px-0.5 py-7"
                             />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/silkway.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            className="h-full px-0.5 py-8"
                             />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/TAFE-Logo.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            className="h-full px-0.5 py-8"
                             />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/tradeachievers_official-1.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            className="h-full px-0.5 py-4"
                             />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/ttgroup_logo.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            className="w-full px-3.5 py-8"
                             />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/virginia-tech.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            className="w-full px-6"
                             />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/yagen-logo.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            className="w-full px-7"
                             />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/mv_logo_full.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            className="w-full px-7"
                             />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-7xl flex flex-col items-center justify-center mt-12 md:mt-14 xl:mt-16 2xl:mt-20 gap-4 md:gap-6 xl:gap-10 2xl:gap-14">
                <h2 className="text-2xl lg:text-4xl font-bold capitalize block md:flex flex-col items-center justify-center text-center dark:text-gray-200">
                    <span className="inline md:inline-block pr-1 md:pr-0">a blog is a online journal which is</span>
                    <span className="inline md:inline-block">deeply detailed on open topics</span> 
                </h2>
                <div className="w-full flex flex-col md:flex-row items-stretch justify-center gap-1.5">
                    <div className="w-full md:w-1/3 flex flex-col items-center justify-center border border-gray-200 p-2.5 rounded-md group">
                        <div className="w-full overflow-hidden rounded-md">
                            <Image 
                                src={"/upload/Google-Algorithm-Updates-scaled.webp"}
                                alt="blog-image"
                                width={1400}
                                height={750}
                                className="w-full h-full object-cover group-hover:scale-110 transition ease-in duration-300"
                            />
                        </div>n
                        <div className="w-full flex flex-col justify-center items-start p-7 gap-2.5">
                            <h3 className="text-lg font-bold capitalize text-gray-600 dark:text-gray-300">Ways a Digital Marketing Company Helps Businesses Navigate Google Changes</h3> 
                            <div className="flex gap-2 items-center justify-start">
                            <div className="flex gap-1 items-center justify-center">
                                <i className="ri-calendar-2-line text-gray-500"></i>
                                <span className="text-sm text-gray-500">
                                July 8, 2025
                                </span>
                            </div>
                            <div className="flex gap-1 items-center justify-center">
                                <i className="ri-menu-2-line text-gray-500"></i>
                                <span className="text-sm text-gray-500">
                                Blog, Digital Marketing
                                </span>
                            </div>
                            </div>
                            <p className="text-sm font-normal text-gray-700 dark:text-gray-400 text-left">
                                In the dynamic realm of digital marketing, Google changes, particularly Google Algorithm Updates, can significantly impact a business’s online visibility and search …
                            </p>  
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 flex flex-col items-center justify-center border border-gray-200 p-2.5 rounded-md group">
                        <div className="w-full overflow-hidden rounded-md">
                            <Image 
                                src={"/upload/Social-Media-Marketing-for-Brand-Awareness-.webp"}
                                alt="blog-image"
                                width={1400}
                                height={750}
                                className="w-full h-full object-cover hover:scale-110 transition ease-in duration-300"
                            />
                        </div>
                        <div className="w-full flex flex-col justify-center items-start p-7 gap-2.5">
                            <h3 className="text-lg font-bold capitalize text-gray-600 dark:text-gray-300">Ways a Digital Marketing Company Helps Businesses Navigate Google Changes</h3> 
                            <div className="flex gap-2 items-center justify-start">
                            <div className="flex gap-1 items-center justify-center">
                                <i className="ri-calendar-2-line text-gray-500"></i>
                                <span className="text-sm text-gray-500">
                                July 8, 2025
                                </span>
                            </div>
                            <div className="flex gap-1 items-center justify-center">
                                <i className="ri-menu-2-line text-gray-500"></i>
                                <span className="text-sm text-gray-500">
                                Blog, Digital Marketing
                                </span>
                            </div>
                            </div>
                            <p className="text-sm font-normal text-gray-700 dark:text-gray-400 text-left">
                                In the dynamic realm of digital marketing, Google changes, particularly Google Algorithm Updates, can significantly impact a business’s online visibility and search …
                            </p>  
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 flex flex-col items-center justify-center border border-gray-200 p-2.5 rounded-md group">
                        <div className="w-full overflow-hidden rounded-md">
                            <Image 
                                src={"/upload/strategies-for-business-growth.webp"}
                                alt="blog-image"
                                width={1400}
                                height={750}
                                className="w-full h-full object-cover hover:scale-110 transition ease-in duration-300"
                            />
                        </div>
                        <div className="w-full flex flex-col justify-center items-start p-7 gap-2.5">
                            <h3 className="text-lg font-bold capitalize text-gray-600 dark:text-gray-300">Ways a Digital Marketing Company Helps Businesses Navigate Google Changes</h3> 
                            <div className="flex gap-2 items-center justify-start">
                            <div className="flex gap-1 items-center justify-center">
                                <i className="ri-calendar-2-line text-gray-500"></i>
                                <span className="text-sm text-gray-500">
                                July 8, 2025
                                </span>
                            </div>
                            <div className="flex gap-1 items-center justify-center">
                                <i className="ri-menu-2-line text-gray-500"></i>
                                <span className="text-sm text-gray-500">
                                Blog, Digital Marketing
                                </span>
                            </div>
                            </div>
                            <p className="text-sm font-normal text-gray-700 dark:text-gray-400 text-left">
                                In the dynamic realm of digital marketing, Google changes, particularly Google Algorithm Updates, can significantly impact a business’s online visibility and search …
                            </p>  
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="flex items-center justify-center flex-col dark:bg-none my-12 md:my-14 xl:my-24 text-[var(--text-black)] gap-6 w-full px-6 md:px-8 lg:px-10">
            <div className="w-full max-w-5xl flex flex-col items-center justify-center gap-3.5 p-3">
                <div className="w-full flex flex-col items-center justify-center">
                <h4 className="uppercase text-sm font-medium text-[var(--primary-blue)] dark:text-[#6bffe4]">need more help?</h4>
                <h3 className="text-4xl font-bold text-gray-900 dark:text-gray-200 text-center max-w-xl capitalize mt-2">our friendly support team is here to help.</h3>
                </div>
                <div className="w-full flex flex-col md:flex-row items-center md:items-stretch justify-around gap-3 mt-4">
                    <div className="w-full md:w-1/3 px-4 py-8 flex flex-col items-center justify-center shadow-[0px_3px_12px_rgba(0,0,0,0.07),0px_-3px_12px_rgba(0,0,0,0.07)] dark:shadow-[0px_3px_12px_rgba(225,225,225,0.06),0px_-3px_12px_rgba(225,225,225,0.06)] dark:border dark:border-gray-400 rounded-lg">
                        <p className="text-xl text-semibold text-gray-900 dark:text-gray-300">Address</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 p-1.5 text-center">2nd Floor, Karuna Conclave, AD 42 & 45, 4th Ave, Shanthi Colony, Anna Nagar, Chennai, Tamil Nadu 600040</p>
                    </div>
                    <div className="w-full md:w-1/3 px-4 py-8 flex flex-col items-center justify-center shadow-[0px_3px_12px_rgba(0,0,0,0.07),0px_-3px_12px_rgba(0,0,0,0.07)] dark:shadow-[0px_3px_12px_rgba(225,225,225,0.06),0px_-3px_12px_rgba(225,225,225,0.06)] dark:border dark:border-gray-400 rounded-lg">
                        <p className="text-xl text-semibold text-gray-900 dark:text-gray-300">Email</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 p-1.5 text-center">info@rankraze.com</p>
                    </div>
                    <div className="w-full md:w-1/3 px-4 py-8 flex flex-col items-center justify-center shadow-[0px_3px_12px_rgba(0,0,0,0.07),0px_-3px_12px_rgba(0,0,0,0.07)] dark:shadow-[0px_3px_12px_rgba(225,225,225,0.06),0px_-3px_12px_rgba(225,225,225,0.06)] dark:border dark:border-gray-400 rounded-lg">
                        <p className="text-xl text-semibold text-gray-900 dark:text-gray-300">Call Us</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 p-1.5 text-center">+91 99622 62210</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}