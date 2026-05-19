import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import ContactForm from "@/app/components/UI/AllServicePageContactForm";

export const metadata:Metadata = {
    title: "Content Writing Agency in Chennai | SEO Copy Writing | Website Copy Writing Agency in Chennai",
    description: "Rankraze, is a content marketing agency in Chennai that offers only good quality content writing services, social media marketing, SEO Content writing, Website content writing etc..",
    keywords: [
        "best content writing companies in Chennai",
        "best content writing company",
        "best content writing services",
        "content development service",
        "content services India",
        "content writers in Chennai",
        "content writing agency",
        "content writing agency in Chennai",
        "content writing agency India",
        "content writing companies in Chennai",
        "content writing company",
        "content writing company India",
        "content writing service in Chennai",
        "content writing service provider",
        "content writing service",
        "content writing services India",
        "freelance content writers in Chennai",
        "professional content writing services",
        "SEO copy writing",
        "website content writing services"
    ],
                
    alternates: {
        canonical: "https://rankraze.com/content-writing-agency-chennai",
    },

    openGraph: {
        title: "Content Writing Agency in Chennai | SEO Copy Writing | Website Copy Writing Agency in Chennai",
        description: "Rankraze, is a content marketing agency in Chennai that offers only good quality content writing services, social media marketing, SEO Content writing, Website content writing etc..",
        url: "https://rankraze.com/content-writing-agency-chennai",
        siteName: "Rankraze",
        images: [
        {
            url: "/upload/Content-Marketing-image1.webp",
            width: 600,
            height: 500,
            alt: "Content-Marketing.webp",
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
                            Content Marketing Company in Chennai
                        </h1>
                        <p className="text-sm md:text-sm text-gray-700 dark:text-gray-300 text-center md:text-left pr-4">
                            Your next-generation marketing solution
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
                        What is Content Marketing?
                    </h2>
                    <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-justify text-sm md:text-base">
                        If you have any idea about digital marketing, this definitely won’t be your first time hearing the term Content Marketing. Don’t worry if you’re still a bit confused about it. We’re here to help you.
                    </p>
                    <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-justify text-sm md:text-base">
                        Content Marketing is a marketing strategy focused on creating and distributing <span className="font-semibold">valuable, relevant,</span>  and <span className="font-semibold">consistent</span> content to attract and refine your target audience.
                    </p>
                    <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-justify text-sm md:text-base">
                        A decade back, marketing was so expensive and involved more physical work. Thanks to Digital Marketing. We can now market our products and services to our target audience just by the click of a fingertip.
                    </p>
                </div>
                <div className="w-full md:w-1/2 overflow-hidden flex items-center justify-center px-4 py-2.5 rounded-md">
                    <Image 
                    src={"/upload/Content-Marketing-image1.webp"}
                    alt="Content Marketing services in chennai"
                    width={800} height={600} layout="responsive"
                    objectFit="cover"          
                    className="rounded-xl dark:grayscale-25"                                 
                    />
                </div>
            </div>
            <div className="w-full max-w-7xl flex flex-col md:flex-row-reverse items-stretch justify-center">
                <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-3 md:gap-3.5 p-2.5">
                    <h2 className="text-4xl xl:text-[42px] font-semibold text-center md:text-left capitalize dark:text-gray-200 pr-4">
                        What is Content Marketing?
                    </h2>
                    <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-justify text-sm md:text-base">
                        The ultimate purpose of Content Marketing is to provide value to your audience.
                    </p>
                    <div className="w-full px-2.5 md:px-4 lg:px-6 2xl:px-8">
                        <ul className="pl-1 flex flex-col gap-1.5 md:gap-2 list-disc marker:text-[var(--primary-green)] text-gray-700 dark:text-gray-300 leading-relaxed">
                            <li className="flex items-start gap-2">
                                <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                                <span className="">
                                    No matter what type of content you put out to your audience, make sure you provide immense value. Providing valuable content for free is a trick that most marketers and influencers use these days to gain traffic and customers.
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                                <span className="">
                                    Having a perfect niche and target audience is essential to create valuable, relatable content.
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                                <span className="">
                                    Creating relatable content for your audience establishes you as an authority in the subject and gains more potential customers.
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                                <span className="">
                                    Being consistent is as important as creating valuable & relatable content.
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                                <span className="">
                                    The often you post, the more present you are in front of your audience. Search Engines pay attention to all these factors to rank you higher too.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-full md:w-1/2 overflow-hidden flex items-center justify-center px-4 py-2.5 rounded-md">
                    <Image 
                    src={"/upload/Purpose-of-Content-Marketing.webp"}
                    alt="what is content marketing"
                    width={800} height={600} layout="responsive"
                    objectFit="cover"          
                    className="rounded-xl dark:grayscale-25"                                 
                    />
                </div>
            </div>
            <div className="w-full max-w-6xl flex flex-col items-stretch justify-center">
                <div className="w-full flex flex-col items-center justify-center gap-3 md:gap-3.5 p-2.5">
                    <h2 className="text-4xl xl:text-[42px] font-semibold text-center md:text-left capitalize dark:text-gray-200 pr-4">
                        Why is Content Marketing Necessary?
                    </h2>
                    <p className="max-w-4xl text-gray-500 dark:text-gray-300 leading-relaxed text-justify md:text-center text-sm md:text-base px-2.5">
                        I’m sure you would have come across the sentence: Content is the King. This can’t be truer in digital marketing.
                    </p>
                    <p className="max-w-4xl text-gray-500 dark:text-gray-300 leading-relaxed text-justify md:text-center text-sm md:text-base px-2.5">
                        Content Marketing is the core of all online marketing. You can have a perfectly designed website and a completely optimized social profile, but if your content is not useful to your audience, you’re out of the market.
                    </p>
                    <p className="max-w-4xl text-gray-500 dark:text-gray-300 leading-relaxed text-justify md:text-center text-sm md:text-base px-2.5">
                        To ensure that your audiences receive valuable content, make sure all of your content falls into one of the following categories.
                    </p>
                </div>
                <div className="w-full grid max-w-7xl grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-2.5 gap-5 mt-3.5 2xl:mt-8">
                    <div className="w-full rounded-md p-3 md:p-4 lg:p-8 flex items-start justify-center border border-gray-200 shadow-[0px_4px_8px_rgba(0,0,0,0.08),0px_-4px_8px_rgba(0,0,0,0.05)] dark:shadow-[0px_4px_8px_rgba(255,255,255,0.08),0px_-4px_8px_rgba(255,255,255,0.05)]">
                        <span className="md:text-lg font-medium lg:font-semibold dark:text-gray-200">
                            Landing Page Writing
                        </span>
                    </div>
                    <div className="w-full rounded-md p-3 md:p-4 lg:p-8 flex items-start justify-center border border-gray-200 shadow-[0px_4px_8px_rgba(0,0,0,0.08),0px_-4px_8px_rgba(0,0,0,0.05)] dark:shadow-[0px_4px_8px_rgba(255,255,255,0.08),0px_-4px_8px_rgba(255,255,255,0.05)]">
                        <span className="md:text-lg font-medium lg:font-semibold text-center dark:text-gray-200">
                            Travel Writing Services
                        </span>
                    </div>
                    <div className="w-full rounded-md p-3 md:p-4 lg:p-8 flex items-start justify-center border border-gray-200 shadow-[0px_4px_8px_rgba(0,0,0,0.08),0px_-4px_8px_rgba(0,0,0,0.05)] dark:shadow-[0px_4px_8px_rgba(255,255,255,0.08),0px_-4px_8px_rgba(255,255,255,0.05)]">
                        <span className="md:text-lg font-medium lg:font-semibold text-center dark:text-gray-200">
                            Website Content Writing Services
                        </span>
                    </div>
                    <div className="w-full rounded-md p-3 md:p-4 lg:p-8 flex items-start justify-center border border-gray-200 shadow-[0px_4px_8px_rgba(0,0,0,0.08),0px_-4px_8px_rgba(0,0,0,0.05)] dark:shadow-[0px_4px_8px_rgba(255,255,255,0.08),0px_-4px_8px_rgba(255,255,255,0.05)]">
                        <span className="md:text-lg font-medium lg:font-semibold text-center dark:text-gray-200">
                            Product Description Writing
                        </span>
                    </div>
                    <div className="w-full rounded-md p-3 md:p-4 lg:p-8 flex items-start justify-center border border-gray-200 shadow-[0px_4px_8px_rgba(0,0,0,0.08),0px_-4px_8px_rgba(0,0,0,0.05)] dark:shadow-[0px_4px_8px_rgba(255,255,255,0.08),0px_-4px_8px_rgba(255,255,255,0.05)]">
                        <span className="md:text-lg font-medium lg:font-semibold text-center dark:text-gray-200">
                            Guest Posting
                        </span>
                    </div>
                    <div className="w-full rounded-md p-3 md:p-4 lg:p-8 flex items-start justify-center border border-gray-200 shadow-[0px_4px_8px_rgba(0,0,0,0.08),0px_-4px_8px_rgba(0,0,0,0.05)] dark:shadow-[0px_4px_8px_rgba(255,255,255,0.08),0px_-4px_8px_rgba(255,255,255,0.05)]">
                        <span className="md:text-lg font-medium lg:font-semibold text-center dark:text-gray-200">
                            Social Media Writing
                        </span>
                    </div>
                    <div className="w-full rounded-md p-3 md:p-4 lg:p-8 flex items-start justify-center border border-gray-200 shadow-[0px_4px_8px_rgba(0,0,0,0.08),0px_-4px_8px_rgba(0,0,0,0.05)] dark:shadow-[0px_4px_8px_rgba(255,255,255,0.08),0px_-4px_8px_rgba(255,255,255,0.05)]">
                        <span className="md:text-lg font-medium lg:font-semibold text-center dark:text-gray-200">
                            Article Writing
                        </span>
                    </div>
                    <div className="w-full rounded-md p-3 md:p-4 lg:p-8 flex items-start justify-center border border-gray-200 shadow-[0px_4px_8px_rgba(0,0,0,0.08),0px_-4px_8px_rgba(0,0,0,0.05)] dark:shadow-[0px_4px_8px_rgba(255,255,255,0.08),0px_-4px_8px_rgba(255,255,255,0.05)]">
                        <span className="md:text-lg font-medium lg:font-semibold text-center dark:text-gray-200">
                            Blog Writing
                        </span>
                    </div>
                    <div className="w-full rounded-md p-3 md:p-4 lg:p-8 flex items-start justify-center border border-gray-200 shadow-[0px_4px_8px_rgba(0,0,0,0.08),0px_-4px_8px_rgba(0,0,0,0.05)] dark:shadow-[0px_4px_8px_rgba(255,255,255,0.08),0px_-4px_8px_rgba(255,255,255,0.05)]">
                        <span className="md:text-lg font-medium lg:font-semibold text-center dark:text-gray-200">
                            E-commerce Content Writing
                        </span>
                    </div>
                    <div className="w-full rounded-md p-3 md:p-4 lg:p-8 flex items-start justify-center border border-gray-200 shadow-[0px_4px_8px_rgba(0,0,0,0.08),0px_-4px_8px_rgba(0,0,0,0.05)] dark:shadow-[0px_4px_8px_rgba(255,255,255,0.08),0px_-4px_8px_rgba(255,255,255,0.05)]">
                        <span className="md:text-lg font-medium lg:font-semibold text-center dark:text-gray-200">
                            SEO Content Writing Services
                        </span>
                    </div>
                    <div className="w-full rounded-md p-3 md:p-4 lg:p-8 flex items-start justify-center border border-gray-200 shadow-[0px_4px_8px_rgba(0,0,0,0.08),0px_-4px_8px_rgba(0,0,0,0.05)] dark:shadow-[0px_4px_8px_rgba(255,255,255,0.08),0px_-4px_8px_rgba(255,255,255,0.05)]">
                        <span className="md:text-lg font-medium lg:font-semibold text-center dark:text-gray-200">
                            Information Portals
                        </span>
                    </div>
                    <div className="w-full rounded-md p-3 md:p-4 lg:p-8 flex items-start justify-center border border-gray-200 shadow-[0px_4px_8px_rgba(0,0,0,0.08),0px_-4px_8px_rgba(0,0,0,0.05)] dark:shadow-[0px_4px_8px_rgba(255,255,255,0.08),0px_-4px_8px_rgba(255,255,255,0.05)]">
                        <span className="md:text-lg font-medium lg:font-semibold text-center dark:text-gray-200">
                            Video & Audio Content
                        </span>
                    </div>
                </div>
            </div>
        </section>
        <section className="w-full grid place-items-center mt-20 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 rounded-xl md:rounded-4xl bg-[url('/upload/PPC-banner-scaled.webp')] bg-no-repeat bg-cover bg-center relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#00000090] overflow-hidden">
            <div className="w-full max-w-7xl flex flex-col items-center justify-center gap-6 px-4 md:px-6 lg:px-10 my-20 z-10">
                <h2 className="text-2xl md:text-4xl lg:text-4xl text-white font-semibold text-center lg:text-left">
                    Types of Content Marketing social presence?
                </h2>
                <p className="text-white text-sm md:text-sm text-center tracking-tight md:tracking-normal px-20 md:p-none">
                    If you have any idea about digital marketing, this definitely won’t be your first time hearing the term Content Marketing. Don’t worry if you’re still a bit confused about it. We’re here to help you. Content Marketing is a marketing strategy focused on creating and distributing valuable, relevant, and consistent content to attract and refine your target audience.
                </p>
                <p className="text-white text-sm md:text-sm text-center tracking-tight md:tracking-normal px-20 md:p-none">
                    A decade back, marketing was so expensive and involved more physical work. Thanks to Digital Marketing. We can now market our products and services to our target audience just by the click of a fingertip.
                </p>
                <div className="w-full grid max-w-7xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2.5 gap-5 mt-3.5 2xl:mt-8">
                    <div className="bg-white flex flex-col items-center justify-center gap-5 px-12 py-8 group overflow-hidden rounded-2xl -z-10">
                        <div className="w-full h-full flex flex-col items-start justify-start gap-5 relative transform transition-[width,height,top,left] duration-500">
                            <div className="w-5 h-5 md:w-8 md:h-8 lg:w-[48px] lg:h-[48px] rounded-full bg-linear-to-tr from-[#4EABF4] to-[#52B9A9] absolute -z-10 left-0 top-0 -translate-x-2 -translate-y-2 onhover-scale opacity-85"></div>
                            <div className="w-full flex flex-col items-start center-start gap-2.5">
                                <p className="capitalize font-bold text-xl text-gray-700">Social Media Posts</p>
                                <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm">
                                    Though most of the types of content we discussed above are online-based, giving out downloadable freebies is a huge perk of gaining more email subscribers on your list. Adding lead magnets on your website and giving out content like this via mail is one proven way to increase your costumers and website visits. Some of the popular document formats are:
                                </p>
                                <ul className="text-sm md:text-sm pl-1 flex flex-col gap-1 list-disc marker:text-[var(--primary-green)] text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                                        <span className="">
                                            PDFs
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                                        <span className="">
                                            Presentations
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                                        <span className="">
                                            White Papers
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                                        <span className="">
                                            Checklists
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                                        <span className="">
                                            Ebooks
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div> 
                    </div>
                    <div className="bg-white flex flex-col items-center justify-center gap-5 px-12 py-8 group overflow-hidden rounded-2xl -z-10">
                        <div className="w-full h-full flex flex-col items-start justify-start gap-5 relative transform transition-[width,height,top,left] duration-500">
                            <div className="w-5 h-5 md:w-8 md:h-8 lg:w-[48px] lg:h-[48px] rounded-full bg-linear-to-tr from-[#4EABF4] to-[#52B9A9] absolute -z-10 left-0 top-0 -translate-x-2 -translate-y-2 onhover-scale opacity-85"></div>
                            <div className="w-full flex flex-col items-start center-start gap-2.5">
                                <p className="capitalize font-bold text-xl text-gray-700">Blogs</p>
                                <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm">
                                    Blogging is an amazing way to give out informational content on your website.
                                </p>
                                <ul className="text-sm md:text-sm pl-1 flex flex-col gap-1 list-disc marker:text-[var(--primary-green)] text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <i className="ri-sparkling-2-line text-lg text-[var(--primary-green)]"></i>
                                        <span className="">
                                            Blogs are less formal and more relatable.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <i className="ri-sparkling-2-line text-lg text-[var(--primary-green)]"></i>
                                        <span className="">
                                            It increases your website’s time on page.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <i className="ri-sparkling-2-line text-lg text-[var(--primary-green)]"></i>
                                        <span className="">
                                            Adding internal links connecting to your other blog posts makes the visitor stay on your site for a longer time.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <i className="ri-sparkling-2-line text-lg text-[var(--primary-green)]"></i>
                                        <span className="">
                                            The more they read your valuable content, the more likely they are to signup for your newsletters, etc.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div> 
                    </div>
                    <div className="bg-white flex flex-col items-center justify-center gap-5 px-12 py-8 group overflow-hidden rounded-2xl -z-10">
                        <div className="w-full h-full flex flex-col items-start justify-start gap-5 relative transform transition-[width,height,top,left] duration-500">
                            <div className="w-5 h-5 md:w-8 md:h-8 lg:w-[48px] lg:h-[48px] rounded-full bg-linear-to-tr from-[#4EABF4] to-[#52B9A9] absolute -z-10 left-0 top-0 -translate-x-2 -translate-y-2 onhover-scale opacity-85"></div>
                            <div className="w-full flex flex-col items-start center-start gap-2.5">
                                <p className="capitalize font-bold text-xl text-gray-700">Infographics</p>
                                <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm">
                                    Visuals always have a greater impact than just words. Infographics and other image contents add great value to any viewer.
                                </p>
                                <ul className="text-sm md:text-sm pl-1 flex flex-col gap-1 list-disc marker:text-[var(--primary-green)] text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <i className="ri-sparkling-2-line text-lg text-[var(--primary-green)]"></i>
                                        <span className="">
                                            In a study, they found out that in a blog post, 90% of the people see the images. 100% pay attention to the headline.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <i className="ri-sparkling-2-line text-lg text-[var(--primary-green)]"></i>
                                        <span className="">
                                            Infographics are a great way to share information with graphs, statistics, etc.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <i className="ri-sparkling-2-line text-lg text-[var(--primary-green)]"></i>
                                        <span className="">
                                            Infographics help the reader to understand better without having to go through the whole passage.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div> 
                    </div>
                    <div className="bg-white flex flex-col items-center justify-center gap-5 px-12 py-8 group overflow-hidden rounded-2xl -z-10">
                        <div className="w-full h-full flex flex-col items-start justify-start gap-5 relative transform transition-[width,height,top,left] duration-500">
                            <div className="w-5 h-5 md:w-8 md:h-8 lg:w-[48px] lg:h-[48px] rounded-full bg-linear-to-tr from-[#4EABF4] to-[#52B9A9] absolute -z-10 left-0 top-0 -translate-x-2 -translate-y-2 onhover-scale opacity-85"></div>
                            <div className="w-full flex flex-col items-start center-start gap-2.5">
                                <p className="capitalize font-bold text-xl text-gray-700">Videos</p>
                                <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm">
                                    Video Marketing is the present and the future of marketing. Video content can have twice the impact than of an image or audio content.
                                </p>
                                <ul className="text-sm md:text-sm pl-1 flex flex-col gap-1 list-disc marker:text-[var(--primary-green)] text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <i className="ri-sparkling-2-line text-lg text-[var(--primary-green)]"></i>
                                        <span className="">
                                            There are a lot of options available to create videos in a budget-friendly way.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <i className="ri-sparkling-2-line text-lg text-[var(--primary-green)]"></i>
                                        <span className="">
                                            Videos have a huge impact and video content gives a better understanding of your brand and your product.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <i className="ri-sparkling-2-line text-lg text-[var(--primary-green)]"></i>
                                        <span className="">
                                            Videos are a significant way of creating audience engaging content.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div> 
                    </div>
                    <div className="bg-white flex flex-col items-center justify-center gap-5 px-12 py-8 group overflow-hidden rounded-2xl -z-10">
                        <div className="w-full h-full flex flex-col items-start justify-start gap-5 relative transform transition-[width,height,top,left] duration-500">
                            <div className="w-5 h-5 md:w-8 md:h-8 lg:w-[48px] lg:h-[48px] rounded-full bg-linear-to-tr from-[#4EABF4] to-[#52B9A9] absolute -z-10 left-0 top-0 -translate-x-2 -translate-y-2 onhover-scale opacity-85"></div>
                            <div className="w-full flex flex-col items-start center-start gap-2.5">
                                <p className="capitalize font-bold text-xl text-gray-700">Courses & Webinars</p>
                                <ul className="text-sm md:text-sm pl-1 flex flex-col gap-1 list-disc marker:text-[var(--primary-green)] text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <i className="ri-sparkling-2-line text-lg text-[var(--primary-green)]"></i>
                                        <span className="">
                                            Many experts from different fields are now creating courses and webinars for their audience’s benefits.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <i className="ri-sparkling-2-line text-lg text-[var(--primary-green)]"></i>
                                        <span className="">
                                            These type of content are easy to create and it provides great insight for your audience.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <i className="ri-sparkling-2-line text-lg text-[var(--primary-green)]"></i>
                                        <span className="">
                                            When people believe that you know what you’re talking about, your authority in the subject and your trust factor increases.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <i className="ri-sparkling-2-line text-lg text-[var(--primary-green)]"></i>
                                        <span className="">
                                            This makes it easier to get people to buy your courses and attend your webinars.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div> 
                    </div>
                    <div className="bg-white flex flex-col items-center justify-center gap-5 px-12 py-8 group overflow-hidden rounded-2xl -z-10">
                        <div className="w-full h-full flex flex-col items-start justify-start gap-5 relative transform transition-[width,height,top,left] duration-500">
                            <div className="w-5 h-5 md:w-8 md:h-8 lg:w-[48px] lg:h-[48px] rounded-full bg-linear-to-tr from-[#4EABF4] to-[#52B9A9] absolute -z-10 left-0 top-0 -translate-x-2 -translate-y-2 onhover-scale opacity-85"></div>
                            <div className="w-full flex flex-col items-start center-start gap-2.5">
                                <p className="capitalize font-bold text-xl text-gray-700">Podcasts & Audio Books</p>
                                <ul className="text-sm md:text-sm pl-1 flex flex-col gap-1 list-disc marker:text-[var(--primary-green)] text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <i className="ri-sparkling-2-line text-lg text-[var(--primary-green)]"></i>
                                        <span className="">
                                            Podcasts and Audiobooks are a boon of this generation.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <i className="ri-sparkling-2-line text-lg text-[var(--primary-green)]"></i>
                                        <span className="">
                                            People are so used to multitasking that they’re always doing many things at once.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <i className="ri-sparkling-2-line text-lg text-[var(--primary-green)]"></i>
                                        <span className="">
                                            This is why marketers and other businesses & entrepreneurs need to focus on creating podcasts and audiobooks.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <i className="ri-sparkling-2-line text-lg text-[var(--primary-green)]"></i>
                                        <span className="">
                                            Many people these days listen to a podcast or an audiobook when they’re driving, cooking, cleaning or even taking a bath.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <i className="ri-sparkling-2-line text-lg text-[var(--primary-green)]"></i>
                                        <span className="">
                                            These audio contentsare more welcomed now more than ever.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </section>
        <section className="w-full grid place-items-center mt-20 px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 relative">
            <div className="w-full max-w-7xl flex flex-col md:flex-row-reverse items-stretch justify-center">
                <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-3 md:gap-3.5 p-2.5">
                    <h2 className="text-4xl xl:text-[42px] font-semibold text-center md:text-left capitalize dark:text-gray-200 pr-4">
                        Why Rankraze is the Best Content Marketing Agency
                    </h2>
                    <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-justify text-sm md:text-base">
                        Reading about all the different types of content marketing can be a little overwhelming. And we completely understand that.
                    </p>
                    <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-justify text-sm md:text-base">
                        You don’t have to struggle to do all this on your own, we are here to help you.
                    </p>
                    <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-justify text-sm md:text-base">
                        Rankraze offers the most extraordinary content marketing services in Chennai. We are here to guide you, create content for you and promote that to your perfect target audience!
                    </p>
                </div>
                <div className="w-full md:w-1/2 overflow-hidden flex items-center justify-center px-4 py-2.5 rounded-md">
                    <Image 
                    src={"/upload/Why-is-Content-Marketing-necessary.webp"}
                    alt="Why rankraze is the beat"
                    width={800} height={600} layout="responsive"
                    objectFit="cover"          
                    className="rounded-xl dark:grayscale-25"                                 
                    />
                </div>
            </div>
            <div className="w-full max-w-7xl flex flex-col md:flex-row items-stretch justify-center">
                <div className="w-full md:w-1/2 flex flex-col items-left justify-center gap-3 md:gap-3.5 p-2.5">
                    <h2 className="text-4xl xl:text-[42px] font-semibold text-center md:text-left capitalize dark:text-gray-200 pr-4">
                        Our End-to-End Content Marketing Services for Online Growth
                    </h2>
                    <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-justify text-sm md:text-base">
                        Being one of the top digital marketing agencies in Chennai, we’ve helped a lot of businesses and brands create content.
                    </p>
                    <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-justify text-sm md:text-base">
                        Some of our key services in content marketing include
                    </p>
                    <div className="w-full px-2.5 md:px-4 lg:px-6 2xl:px-8">
                        <ul className="pl-1 flex flex-col gap-1 md:gap-1.5 list-disc marker:text-[var(--primary-green)] text-gray-700 dark:text-gray-300 leading-relaxed">
                            <li className="flex items-start gap-2">
                                <i className="ri-lightbulb-line text-lg text-[var(--primary-green)]"></i>
                                <span>Article Writing</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <i className="ri-lightbulb-line text-lg text-[var(--primary-green)]"></i>
                                <span>Blog Writing</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <i className="ri-lightbulb-line text-lg text-[var(--primary-green)]"></i>
                                <span>E-commerce Content Writing</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <i className="ri-lightbulb-line text-lg text-[var(--primary-green)]"></i>
                                <span>SEO Content Writing Services</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <i className="ri-lightbulb-line text-lg text-[var(--primary-green)]"></i>
                                <span>Information Portals</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <i className="ri-lightbulb-line text-lg text-[var(--primary-green)]"></i>
                                <span>Landing Page Writing</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <i className="ri-lightbulb-line text-lg text-[var(--primary-green)]"></i>
                                    <span>Travel Writing Services</span>
                                </li>
                            <li className="flex items-start gap-2">
                                <i className="ri-lightbulb-line text-lg text-[var(--primary-green)]"></i>
                                <span>Website Content Writing Services</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <i className="ri-lightbulb-line text-lg text-[var(--primary-green)]"></i>
                                <span>Product Description Writing</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <i className="ri-lightbulb-line text-lg text-[var(--primary-green)]"></i>
                                <span>Guest Posting</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <i className="ri-lightbulb-line text-lg text-[var(--primary-green)]"></i>
                                <span>Video & Audio Content</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <i className="ri-lightbulb-line text-lg text-[var(--primary-green)]"></i>
                                <span>Social Media Writing</span>
                            </li>

                        </ul>
                    </div>
                    <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-justify text-sm md:text-base">
                        Our expertise content marketing team will work with you on your every step and fulfill all your content needs.
                    </p>
                    <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-justify text-sm md:text-base">
                        We have clients from different states and countries. This doesn’t stop us from providing the best support and assistance in their work.
                    </p>
                </div>
                <div className="w-full md:w-1/2 overflow-hidden flex items-center justify-center px-4 py-2.5 rounded-md">
                    <Image 
                    src={"/upload/Rankraze-is-the-Best-Content-Marketing-Agency.webp"}
                    alt="Marketing Services for Online Growth"
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