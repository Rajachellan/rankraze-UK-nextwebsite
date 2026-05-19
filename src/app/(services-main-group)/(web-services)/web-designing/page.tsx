import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { ShieldCheck, Lightbulb, Users } from 'lucide-react';
import ContactForm from "@/app/components/UI/AllServicePageContactForm";

export const metadata:Metadata = {
    title: "Web Design & Development in Dallas, Texas | Rankraze",
    description: "Rankraze designs fast, secure, conversion-focused websites for Texas businesses. UX, WordPress, React, and custom builds tailored to your brand.",
    
    keywords: [
        "web design company Dallas",
        "web development company Texas",
        "website design Dallas",
        "custom website development Texas",
        "responsive web design Dallas",
        "WordPress development Texas",
        "business website design Dallas",
        "Rankraze web design",
    ],
                
    alternates: {
        canonical: "https://rankraze.us/web-designing",
    },

    openGraph: {
        title: "Web Design & Development | Rankraze Dallas",
        description: "Creative web design and development that helps Texas brands convert visitors into customers.",
        url: "https://rankraze.us/web-designing",
        siteName: "Rankraze",
        images: [
        {
            url: "/upload/website-1.webp",
            width: 890,
            height: 722,
            alt: "Web design and development",
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
                            Web Development
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
                <div className="w-full md:w-1/2 flex flex-col items-start justify-center gap-3 md:gap-3.5 p-2.5">
                    <h2 className="text-4xl xl:text-[42px] font-semibold text-center md:text-left capitalize dark:text-gray-200 pr-4">
                        We Build Better Websites For Businesses That Bring In More Customers!
                    </h2>
                    <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-justify text-sm md:text-base">
                        Do you want to create a stunning website for your business/brand? Are you looking for a creative team of website designers to redesign, develop, and optimize your website for better performance and user experience?
                    </p>
                    <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-justify text-sm md:text-base">
                        You are in the right place. Rankraze is one of the leading website design agencies serving Dallas and Texas with clients from various fields across the US and globally. We are here to help you develop your business’s online presence via intriguing web development.
                    </p>
                    <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-justify text-sm md:text-base">
                        If your business is online (which it should be), your website is your business’s core. Your website is your official platform to tell people what you do and how you can help them.Driving people to your website is the ultimate key to gain leads, sales, and conversions. To make this happen, you need to have an appealing website that expresses your business values in everything.
                    </p>
                    {/* <Link href="" className="overflow-hidden capitalize text-sm text-white px-6 py-2.5 relative bg-linear-to-br from-[#3DBC9C] to-[#36aaf1] rounded-lg">learn more</Link> */}
                </div>
                <div className="w-full md:w-1/2 overflow-hidden flex items-center justify-center px-4 py-2.5 rounded-md">
                    <Image 
                    src={"/upload/website-1.webp"}
                    alt="Web Development Services in Dallas"
                    width={800} height={600} layout="responsive"
                    objectFit="cover"          
                    className="rounded-xl dark:grayscale-25"                                 
                    />
                </div>
            </div>
            <div className="w-full max-w-7xl flex flex-col items-center justify-center gap-6 px-4 md:px-6 lg:px-10 my-5 md:my-20 z-10">
                <h3 className="text-2xl lg:text-4xl dark:text-gray-200 font-semibold text-center lg:text-left">
                    Web Development Services
                </h3>
                <p className="dark:text-gray-400 text-sm md:text-sm text-center tracking-tight md:tracking-normal">
                    Our website designing services include:
                </p>
                <div className="w-full grid max-w-7xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2.5 gap-5 mt-3.5 2xl:mt-8">
                    <div className="flex flex-col items-center justify-center gap-5 px-12 py-8 group overflow-hidden rounded-2xl -z-10 border border-gray-200">
                        <div className="w-full h-full flex flex-col items-start justify-start gap-5 relative transform transition-[width,height,top,left] duration-500">
                            <div className="w-8 h-8 md:w-8 md:h-8 lg:w-[48px] lg:h-[48px] rounded-full bg-linear-to-tr from-[#4EABF4] to-[#52B9A9] absolute -z-10 left-0 top-0 -translate-x-2 -translate-y-2 onhover-scale opacity-85"></div>
                            <div className="w-full flex flex-col items-start center-start gap-2.5">
                                <i className="ri-terminal-line text-3xl md:text-4xl lg:text-5xl dark:text-gray-200"></i>
                                <p className="capitalize font-bold text-xl text-gray-700 dark:text-gray-300">Customized Design</p>
                                <p className="text-gray-500 dark:text-gray-400 text-justify md:text-left leading-snug md:leading-relaxed tracking-wide text-sm">
                                    We craft tailor-made website designs that align with your brand identity and business goals. Every element is uniquely created to reflect your vision, ensuring a standout digital presence that resonates with your target audience.
                                </p>
                            </div>
                        </div> 
                    </div>
                    <div className="flex flex-col items-center justify-center gap-5 px-12 py-8 group overflow-hidden rounded-2xl -z-10 border border-gray-200">
                        <div className="w-full h-full flex flex-col items-start justify-start gap-5 relative transform transition-[width,height,top,left] duration-500">
                            <div className="w-8 h-8 md:w-8 md:h-8 lg:w-[48px] lg:h-[48px] rounded-full bg-linear-to-tr from-[#4EABF4] to-[#52B9A9] absolute -z-10 left-0 top-0 -translate-x-2 -translate-y-2 onhover-scale opacity-85"></div>
                            <div className="w-full flex flex-col items-start center-start gap-2.5">
                                <i className="ri-wordpress-fill text-3xl md:text-4xl lg:text-5xl dark:text-gray-200"></i>
                                <p className="capitalize font-bold text-xl text-gray-700 dark:text-gray-300">WordPress Website</p>
                                <p className="text-gray-500 dark:text-gray-400 text-justify md:text-left leading-snug md:leading-relaxed tracking-wide text-sm">
                                    We specialize in designing custom WordPress websites that are easy to manage and scalable. With intuitive layouts, plugin integrations, and responsive themes, we create websites that put you in control.
                                </p>
                            </div>
                        </div> 
                    </div>
                    <div className="flex flex-col items-center justify-center gap-5 px-12 py-8 group overflow-hidden rounded-2xl -z-10 border border-gray-200">
                        <div className="w-full h-full flex flex-col items-start justify-start gap-5 relative transform transition-[width,height,top,left] duration-500">
                            <div className="w-8 h-8 md:w-8 md:h-8 lg:w-[48px] lg:h-[48px] rounded-full bg-linear-to-tr from-[#4EABF4] to-[#52B9A9] absolute -z-10 left-0 top-0 -translate-x-2 -translate-y-2 onhover-scale opacity-85"></div>
                            <div className="w-full flex flex-col items-start center-start gap-2.5">
                                <i className="ri-shopping-cart-2-line text-3xl md:text-4xl lg:text-5xl dark:text-gray-200"></i>
                                <p className="capitalize font-bold text-xl text-gray-700 dark:text-gray-300">Ecommerce Website</p>
                                <p className="text-gray-500 dark:text-gray-400 text-justify md:text-left leading-snug md:leading-relaxed tracking-wide text-sm">
                                    Launch and grow your online store with our ecommerce website development services. We build secure, user-friendly, and conversion-optimized ecommerce sites with features like payment integration, product management, and mobile responsiveness.
                                </p>
                            </div>
                        </div> 
                    </div>
                    <div className="flex flex-col items-center justify-center gap-5 px-12 py-8 group overflow-hidden rounded-2xl -z-10 border border-gray-200">
                        <div className="w-full h-full flex flex-col items-start justify-start gap-5 relative transform transition-[width,height,top,left] duration-500">
                            <div className="w-8 h-8 md:w-8 md:h-8 lg:w-[48px] lg:h-[48px] rounded-full bg-linear-to-tr from-[#4EABF4] to-[#52B9A9] absolute -z-10 left-0 top-0 -translate-x-2 -translate-y-2 onhover-scale opacity-85"></div>
                            <div className="w-full flex flex-col items-start center-start gap-2.5">
                                <i className="ri-line-chart-line text-3xl md:text-4xl lg:text-5xl dark:text-gray-200"></i>
                                <p className="capitalize font-bold text-xl text-gray-700 dark:text-gray-300">Search Engine Optimized Design Structure</p>
                                <p className="text-gray-500 dark:text-gray-400 text-justify md:text-left leading-snug md:leading-relaxed tracking-wide text-sm">
                                    Our websites are built with SEO best practices in mind. From clean code to keyword-friendly layouts and fast load times, we ensure your site is optimized for visibility and performance in search engines from day one.
                                </p>
                            </div>
                        </div> 
                    </div>
                    <div className="flex flex-col items-center justify-center gap-5 px-12 py-8 group overflow-hidden rounded-2xl -z-10 border border-gray-200">
                        <div className="w-full h-full flex flex-col items-start justify-start gap-5 relative transform transition-[width,height,top,left] duration-500">
                            <div className="w-8 h-8 md:w-8 md:h-8 lg:w-[48px] lg:h-[48px] rounded-full bg-linear-to-tr from-[#4EABF4] to-[#52B9A9] absolute -z-10 left-0 top-0 -translate-x-2 -translate-y-2 onhover-scale opacity-85"></div>
                            <div className="w-full flex flex-col items-start center-start gap-2.5">
                                <i className="ri-smartphone-line text-3xl md:text-4xl lg:text-5xl dark:text-gray-200"></i>
                                <p className="capitalize font-bold text-xl text-gray-700 dark:text-gray-300">Responsive Optimized Website development</p>
                                <p className="text-gray-500 dark:text-gray-400 text-justify md:text-left leading-snug md:leading-relaxed tracking-wide text-sm">
                                    We develop fully responsive websites that provide an optimal viewing experience across all devices. Whether on desktop, tablet, or smartphone, your site will load fast, function flawlessly, and look great everywhere.
                                </p>
                            </div>
                        </div> 
                    </div>
                    <div className="flex flex-col items-center justify-center gap-5 px-12 py-8 group overflow-hidden rounded-2xl -z-10 border border-gray-200">
                        <div className="w-full h-full flex flex-col items-start justify-start gap-5 relative transform transition-[width,height,top,left] duration-500">
                            <div className="w-8 h-8 md:w-8 md:h-8 lg:w-[48px] lg:h-[48px] rounded-full bg-linear-to-tr from-[#4EABF4] to-[#52B9A9] absolute -z-10 left-0 top-0 -translate-x-2 -translate-y-2 onhover-scale opacity-85"></div>
                            <div className="w-full flex flex-col items-start center-start gap-2.5">
                                <i className="ri-file-line text-3xl md:text-4xl lg:text-5xl dark:text-gray-200"></i>
                                <p className="capitalize font-bold text-xl text-gray-700 dark:text-gray-300">Website Design & Development from Scratch</p>
                                <p className="text-gray-500 dark:text-gray-400 text-justify md:text-left leading-snug md:leading-relaxed tracking-wide text-sm">
                                    From concept to launch, we build websites from the ground up. Our team handles everything—planning, UI/UX design, coding, and deployment—to deliver a seamless, functional, and visually engaging website tailored to your needs.
                                </p>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </section>
        <section className="w-full grid place-items-center mt-10 md:mt-20 px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 relative">
            <div className="flex flex-col md:flex-row items-center justify-center dark:bg-none mt-10 text-[var(--text-black)] gap-4 w-full max-w-5xl p-6 md:p-8 lg:p-10 mb-2.5 bg-[#dffff1] rounded-2xl relative before:content-[''] before:w-full before:h-full before:absolute before:bg-[url('/upload/background-style.webp')] before:bg-cover before:bg-no-repeat before:opacity-45 before:rounded-2xl before:bg-center before:z-0">
                <div className="w-full md:w-2/3 flex flex-col z-10 gap-2.5">
                <h4 className="text-2xl md:text-4xl text-gray-800 text-center md:text-left font-bold z-10">
                    Explore Our Portfolio
                </h4>
                <p className="text-[10px] md:text-sm lg:text-sm text-gray-600 text-center md:text-left tracking-tight md:tracking-tight">
                    See how we’ve helped businesses like yours succeed.
                </p>
                </div>
                <div className="w-full md:w-1/3 flex items-center justify-center z-10">
                <Link href="/web-designing-portfolio" className="text-sm md:text-sm xl:text-base text-white font-semibold px-3.5 py-2.5 rounded-md relative before:content-[''] before:absolute before:w-full before:h-full before:bg-linear-to-br before:from-[#3DBC9C] before:to-[#37A8F9] before:top-0 before:left-0 before:rounded-md hover:before: before:-z-10 hover:before:from-[#37A8F9] hover:before:to-[#3DBC9C]">
                    view portfolio
                </Link>
                </div>
            </div>
            <div className="w-full max-w-7xl flex flex-col md:flex-row items-stretch justify-center">
                <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-3 md:gap-3.5 p-2.5">
                    <h2 className="text-2xl md:text-4xl xl:text-[42px] font-semibold text-center md:text-left capitalize dark:text-gray-200 pr-4">
                        Why choose us for website development services?
                    </h2>
                    <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-justify text-sm md:text-base">
                        Rankraze is one of the leading website design companies in Dallas and Texas. We have helped over 160 businesses establish their online presence.
                    </p>
                </div>
                <div className="w-full md:w-1/2 overflow-hidden flex flex-col items-center justify-center px-6 py-2.5 rounded-md gap-3.5">
                    <div className="w-full flex items-center justify-center gap-2.5 p-4 border border-gray-200 rounded-md shadow-md dark:shadow-gray-600">
                        < ShieldCheck strokeWidth={1} className="w-8 md:w-10 h-8 md:h-10 text-[var(--primary-green)] m-3" />
                        <div className="w-full flex flex-col items-start justify-center gap-4">
                            <span className="text-lg md:text-2xl dark:text-gray-200 uppercase">
                                one-stop Solution
                            </span>
                            <span className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-snug">
                                Rankraze is a top digital marketing agency in Texas with clientele across the US and internationally. As a leading website design company in Dallas, we offer complete digital services including website design, landing pages, and portfolio experiences.
                            </span>
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-center gap-2.5 p-4 border border-gray-200 rounded-md shadow-md dark:shadow-gray-600">
                        < Lightbulb strokeWidth={1} className="w-8 md:w-10 h-8 md:h-10 text-[var(--primary-green)] m-3" />
                        <div className="w-full flex flex-col items-start justify-center gap-4">
                            <span className="text-lg md:text-2xl dark:text-gray-200 uppercase">
                                creative idea
                            </span>
                            <span className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-snug">
                                Our team is a creative bunch of people who never run out of ideas and are always ready to brainstorm amazing ideas. Our web designers design creative websites customized for your business that make you stand out.
                            </span>
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-center gap-2.5 p-4 border border-gray-200 rounded-md shadow-md dark:shadow-gray-600">
                        < Users strokeWidth={1} className="w-8 md:w-10 h-8 md:h-10 text-[var(--primary-green)] m-3" />
                        <div className="w-full flex flex-col items-start justify-center gap-4">
                            <span className="text-lg md:text-2xl dark:text-gray-200 uppercase">
                                professional team
                            </span>
                            <span className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-snug">
                                We have a passionate team who are specialized experts in their fields. Together, we’ve made business online so easy for many clients. We believe in simplicity and elegancy than complexity. So, we aim at providing the simplest most efficient solution.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center mt-10 text-[var(--text-black)] gap-4 w-full max-w-7xl p-6 md:p-8 lg:p-10 mb-2.5 bg-linear-to-r from-[#cfffea] to-[#b1f3ff] rounded-2xl relative">
                <div className="w-full md:w-2/3 flex flex-col gap-2.5 px-2 border-r-0 md:border-r border-[#00d176]">
                    <p className="text-[10px] md:text-sm lg:text-base text-gray-800 text-center md:text-left font-medium">
                        Rankraze is a leading digital marketing company serving SMEs across Texas. Our team focuses on practical SEO, paid media, and web experiences that drive measurable growth.
                    </p>
                </div>
                <div className="w-full md:w-1/3 flex items-center justify-around px-2 gap-1.5">
                    <Image
                        src={"/icons/google.webp"}
                        alt="google icon"
                        width={"600"}
                        height={"600"}
                        className="w-1/2 max-w-16 md:max-w-30"
                     />
                     <Image
                        src={"/icons/meta-1.webp"}
                        alt="meta icon"
                        width={"600"}
                        height={"600"}
                        className="w-1/2 max-w-16 md:max-w-30"
                     />
                </div>
            </div>
            <div className="w-full max-w-7xl flex flex-col md:flex-row items-stretch justify-center">
                <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-3 md:gap-3.5 p-2.5">
                    <h2 className="text-4xl xl:text-[42px] font-semibold text-center md:text-left capitalize dark:text-gray-200 pr-4">
                        Results-Driven Website Designs
                    </h2>
                    <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-justify text-sm md:text-base">
                        We bring together the best in creative designing and user interaction, and that is why hundreds of businesses from around the world trust us to design their web front interfaces. We take immense pride in the team of website developers and designers that work with Rankraze. The combined expertise of our professionals makes every project unique, and highly successful.
                    </p>
                    <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-justify text-sm md:text-base">
                        Rankraze has worked with clients from all over the globe across different verticals.
                    </p>
                </div>
                <div className="w-full md:w-1/2 overflow-hidden flex items-center justify-center px-4 py-2.5 rounded-md">
                    <Image 
                    src={"/upload/web-develop-1024x683.webp"}
                    alt="Web design and development in Dallas"
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