import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import ContactForm from "@/app/components/UI/AllServicePageContactForm";

export const metadata:Metadata = {
    title: "Best video content marketing company in Texas | Rankraze",
    description: "Rankraze is a video marketing partner in Texas and Dallas—story-driven content, paid distribution, and brand campaigns that scale.",
    
    keywords: [
    "video content marketing company in Texas",
    "Best video content marketing company Texas",
    "video marketing firm in Dallas",
    "top video marketing firm in Texas",
    "b2b video production",
    "digital marketing videos",
    "digital video agency",
    "video ad agency",
    "video marketing",
    "video marketing company",
    "video marketing services",
    "video promotion company",
    "YouTube advertising company",
    "YouTube marketing company in Bangalore",
    "YouTube video promotion"
    ],

    alternates: {
        canonical: "https://rankraze.us/video-marketing",
    },

    openGraph: {
        title: "Best video content marketing in Texas | Rankraze",
        description: "Video marketing, production support, and distribution strategy for US brands from Rankraze.",
        url: "https://rankraze.us/video-marketing",
        siteName: "Rankraze",
        images: [
        {
            url: "/upload/Video-Marketing-Services.webp",
            width: 600,
            height: 400,
            alt: "Video-Marketing-Services.webp",
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
                            video marketing company Texas, USA
                        </h1>
                        <p className="text-sm md:text-sm text-gray-700 dark:text-gray-300 text-center md:text-left pr-4">
                            In a fast-paced world, it is difficult to come up with new unique ideas to make your business stand out.
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
            <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-around">
                <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-3 md:gap-3.5 p-2.5">
                    <h2 className="text-4xl xl:text-[42px] font-semibold text-center md:text-left capitalize dark:text-gray-200 pr-4">
                        video marketing services in Dallas
                    </h2>
                    <p className="text-gray-400 leading-relaxed text-justify text-sm md:text-base">
                        Videos have been in the field of marketing since the start of television commercials in the early 1960s. However, in recent times, video marketing has become a huge asset for digital marketers around the world.
                    </p>
                    <p className="text-gray-400 leading-relaxed text-justify text-sm md:text-base">
                        If you’re wondering how video marketing will benefit your business or how Rankraze can help you, continue reading. Properly structured video content has great SEO value. Google gives more importance to the value provided to its users. If you have valuable content uploaded on YouTube, that increases your chance of ranking higher than your competitors.
                    </p>
                </div>
                <div className="w-full md:w-1/2 overflow-hidden px-4 py-2.5 rounded-md">
                    <Image 
                    src={"/upload/Video-Marketing-Services.webp"}
                    alt="video marketing services in Dallas"
                    width={800} height={600} layout="responsive"
                    objectFit="cover"          
                    className="rounded-xl dark:grayscale-75"                                 
                    />
                </div>
            </div>
        </section>
        <section className="w-full grid place-items-center mt-20 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 rounded-xl md:rounded-4xl bg-[url('/upload/SEO-image3-scaled.webp')] bg-no-repeat bg-cover bg-center relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#00000090] overflow-hidden">
            <div className="w-full max-w-7xl flex flex-col items-center justify-center gap-6 px-4 md:px-6 lg:px-10 my-20 z-10">
                <h2 className="text-2xl lg:text-4xl text-white font-semibold text-center lg:text-left">
                    Importance of Video Marketing
                </h2>
                <p className="text-white text-sm md:text-sm text-center tracking-tight md:tracking-normal">
                    Here we have listed a few great benefits of video marketing and why you should do it for your business.
                </p>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-3 lg:gap-4 xl:gap-5 max-w-sm md:max-w-none">
                    <div className="w-full flex flex-col items-start justify-start px-5 py-6 bg-white rounded-xl gap-5">
                        <div className="w-full flex items-center justify-center gap-2">
                            <Image 
                            src={"/icons/seo-video.png"}
                            alt="seo and video marketing icon"
                            width={100} height={100}
                            className="w-1/5"
                            />
                            <div className="w-4/5 flex items-center justify-center">
                                <p className="text-base md:text-lg xl:text-xl font-medium leading-tight w-fit pl-2">Videos increase your SEO ranking</p>
                            </div>
                        </div>
                        <p className="text-sm md:text-sm font-medium text-justify px-2.5 md:px-3.5 pb-3.5 text-gray-700">
                            Properly structured video content has great SEO value. Google gives more importance to the value provided to its users. If you have valuable content uploaded on YouTube, that increases your chance of ranking higher than your competitors.
                        </p>
                    </div>
                    <div className="w-full flex flex-col items-start justify-start px-5 py-6 bg-white rounded-xl gap-5">
                        <div className="w-full flex items-center justify-center gap-2">
                            <Image 
                            src={"/icons/trust-video.png"}
                            alt="seo and video marketing icon"
                            width={100} height={100}
                            className="w-1/5"
                            />
                            <div className="w-4/5 flex items-center justify-center">
                                <p className="text-base md:text-lg xl:text-xl font-medium leading-tight w-fit pl-2">Video builds trust and credibility</p>
                            </div>
                        </div>
                        <p className="text-sm md:text-sm font-medium text-justify px-2.5 md:px-3.5 pb-3.5 text-gray-700">
                            Video is the best way to create a personality for your company and your brand. It helps to connect with your customers and gain their trust. The more videos you have to help educate them about the product, the more you will earn their trust. When people trust you and your product, it will automatically start to convert.
                        </p>
                    </div>
                    <div className="w-full flex flex-col items-start justify-start px-5 py-6 bg-white rounded-xl gap-5">
                        <div className="w-full flex items-center justify-center gap-2">
                            <Image 
                            src={"/icons/ROI-video.png"}
                            alt="seo and video marketing icon"
                            width={100} height={100}
                            className="w-1/5"
                            />
                            <div className="w-4/5 flex items-center justify-center">
                                <p className="text-base md:text-lg xl:text-xl font-medium leading-tight w-fit pl-2">Video marketing has a high ROI</p>
                            </div>
                        </div>
                        <p className="text-sm md:text-sm font-medium text-justify px-2.5 md:px-3.5 pb-3.5 text-gray-700">
                            Creating a video, recording, editing, etc., requires a lot of effort and sometimes it costs more than the other types of marketing. Even though, video marketing has been proven to have a high Return On Investment.
                        </p>
                    </div>
                    <div className="w-full flex flex-col items-start justify-start px-5 py-6 bg-white rounded-xl gap-5">
                        <div className="w-full flex items-center justify-center gap-2">
                            <Image 
                            src={"/icons/social-shares.png"}
                            alt="seo and video marketing icon"
                            width={100} height={100}
                            className="w-1/5"
                            />
                            <div className="w-4/5 flex items-center justify-center">
                                <p className="text-base md:text-lg xl:text-xl font-medium leading-tight w-fit pl-2">The video encourages social shares</p>
                            </div>
                        </div>
                        <p className="text-sm md:text-sm font-medium text-justify px-2.5 md:px-3.5 pb-3.5 text-gray-700">
                            92% of mobile users who watch a video on any platform share it with others. Social shares help in branding and establishing you as an authority in the subject.
                        </p>
                    </div>
                    <div className="w-full flex flex-col items-start justify-start px-5 py-6 bg-white rounded-xl gap-5">
                        <div className="w-full flex items-center justify-center gap-2">
                            <Image 
                            src={"/icons/mobile-users.png"}
                            alt="seo and video marketing icon"
                            width={100} height={100}
                            className="w-1/5"
                            />
                            <div className="w-4/5 flex items-center justify-center">
                                <p className="text-base md:text-lg xl:text-xl font-medium leading-tight w-fit pl-2">Video appeals to mobile users</p>
                            </div>
                        </div>
                        <p className="text-sm md:text-sm font-medium text-justify px-2.5 md:px-3.5 pb-3.5 text-gray-700">
                            90% of people watch videos from their mobile phones. People like to watch videos online when they’re traveling or relaxing. This has highly increased the number of smartphone users over the past few years.
                        </p>
                    </div>
                    <div className="w-full flex flex-col items-start justify-start px-5 py-6 bg-white rounded-xl gap-5">
                        <div className="w-full flex items-center justify-center gap-2">
                            <Image 
                            src={"/icons/sales-and-rates-video.png"}
                            alt="seo and video marketing icon"
                            width={100} height={100}
                            className="w-1/5"
                            />
                            <div className="w-4/5 flex items-center justify-center">
                                <p className="text-base md:text-lg xl:text-xl font-medium leading-tight w-fit pl-2">Video boosts conversion rates and sales</p>
                            </div>
                        </div>
                        <p className="text-sm md:text-sm font-medium text-justify px-2.5 md:px-3.5 pb-3.5 text-gray-700">
                            Videos have a great way of influencing the audience into customers. Including a product video on your landing page can increase your conversion rates by 80%
                        </p>
                    </div>
                    <div className="w-full flex flex-col items-start justify-start px-5 py-6 bg-white rounded-xl gap-5">
                        <div className="w-full flex items-center justify-center gap-2">
                            <Image 
                            src={"/icons/email-marketing-video.png"}
                            alt="seo and video marketing icon"
                            width={100} height={100}
                            className="w-1/5"
                            />
                            <div className="w-4/5 flex items-center justify-center">
                                <p className="text-base md:text-lg xl:text-xl font-medium leading-tight w-fit pl-2">Video is a great addition to your email marketing campaigns</p>
                            </div>
                        </div>
                        <p className="text-sm md:text-sm font-medium text-justify px-2.5 md:px-3.5 pb-3.5 text-gray-700">
                            Email headlines with the word video have a high number of click-throughs compared with text-only email marketing copy.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section className="w-full grid place-items-center mt-10 md:mt-20 px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 relative">
            <div className="w-full max-w-7xl flex flex-col items-center justify-center gap-6 px-4 md:px-6 lg:px-10 mt-10 lg:mt-20 z-10">
                <h2 className="text-2xl lg:text-4xl font-semibold text-center lg:text-left dark:text-gray-200">
                    Web video for website production leads the way
                </h2>
                <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-3.5">
                    <div className="w-full flex flex-col items-center justify-start px-2 py-3.5 md:px-5 md:py-6 gap-3.5">
                        <h3 className="text-3xl md:4xl lg:text-5xl font-semibold text-center text-[var(--primary-green)]">
                            53%
                        </h3>
                        <p className="text-sm md:text-sm font-medium px-2.5 dark:text-gray-300 text-gray-500 text-center leading-tight">
                            of marketers say video gives them the best ROI.
                        </p>
                    </div>
                    <div className="w-full flex flex-col items-center justify-start px-2 py-3.5 md:px-5 md:py-6 gap-3.5">
                        <h3 className="text-3xl md:4xl lg:text-5xl font-semibold text-center text-[var(--primary-green)]">
                            65%
                        </h3>
                        <p className="text-sm md:text-sm font-medium px-2.5 dark:text-gray-300 text-gray-500 text-center leading-tight">
                            of marketers say video gives them the best ROI.
                        </p>
                    </div>
                    <div className="w-full flex flex-col items-center justify-start px-2 py-3.5 md:px-5 md:py-6 gap-3.5">
                        <h3 className="text-3xl md:4xl lg:text-5xl font-semibold text-center text-[var(--primary-green)]">
                            77%
                        </h3>
                        <p className="text-sm md:text-sm font-medium px-2.5 dark:text-gray-300 text-gray-500 text-center leading-tight">
                            of marketers say video gives them the best ROI.
                        </p>
                    </div>
                    <div className="w-full flex flex-col items-center justify-start px-2 py-3.5 md:px-5 md:py-6 gap-3.5">
                        <h3 className="text-3xl md:4xl lg:text-5xl font-semibold text-center text-[var(--primary-green)]">
                            87%
                        </h3>
                        <p className="text-sm md:text-sm font-medium px-2.5 dark:text-gray-300 text-gray-500 text-center leading-tight">
                            of marketers say video gives them the best ROI.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-7xl flex flex-col items-center justify-center gap-6 px-4 md:px-6 lg:px-10 mt-10 lg:mt-20 z-10">
                <h2 className="text-2xl lg:text-4xl dark:text-gray-200 font-semibold text-center lg:text-left">
                    Our video marketing services
                </h2>
                <p className="dark:text-gray-400 text-sm md:text-sm text-justify md:text-center tracking-tight md:tracking-normal px-5">
                    Rankraze is one of the leading video marketing agencies serving Texas. We offer complete assistance in video production, post-production, animated video creation, promotion, CRM flows, and more. Some of our top video marketing services include:
                </p>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-3 lg:gap-4 xl:gap-5 max-w-sm md:max-w-none">
                    <div className="w-full flex flex-col items-start justify-start px-5 py-6 bg-white dark:bg-transparent rounded-xl gap-5 border border-gray-200 dark:border-gray-300 shadow-lg shadow-gray-100 dark:shadow-gray-700 transform transition-transform duration-200 hover:shadow-2xl hover:shadow-gray-200 hover:dark:shadow-gray-500 hover:-translate-y-1.5">
                        <div className="w-full flex items-center justify-center gap-2">
                            <i className="ri-youtube-line text-4xl xl:text-5xl text-[var(--primary-green)]"></i>
                            <div className="w-4/5 flex items-center justify-start">
                                <h3 className="text-base md:text-lg xl:text-xl font-medium leading-tight w-fit pl-2 dark:text-gray-200">YouTube Marketing Services</h3>
                            </div>
                        </div>
                        <p className="text-sm md:text-sm font-medium text-justify px-2.5 md:px-3.5 pb-3.5 text-gray-700 dark:text-gray-400">
                            We offer complete marketing services on YouTube. We focus on promoting your video organically across all social media platforms, optimizing your video for search engines, running ad campaigns to drive visitors, etc.
                        </p>
                    </div>
                    <div className="w-full flex flex-col items-start justify-start px-5 py-6 bg-white dark:bg-transparent rounded-xl gap-5 border border-gray-200 dark:border-gray-300 shadow-lg shadow-gray-100 dark:shadow-gray-700 transform transition-transform duration-200 hover:shadow-2xl hover:shadow-gray-200 hover:dark:shadow-gray-500 hover:-translate-y-1.5">
                        <div className="w-full flex items-center justify-center gap-2">
                            <i className="ri-vidicon-line text-4xl xl:text-5xl text-[var(--primary-green)]"></i>
                            <div className="w-4/5 flex items-center justify-start">
                                <h3 className="text-base md:text-lg xl:text-xl font-medium leading-tight w-fit pl-2 dark:text-gray-200">Video production</h3>
                            </div>
                        </div>
                        <p className="text-sm md:text-sm font-medium text-justify px-2.5 md:px-3.5 pb-3.5 text-gray-700 dark:text-gray-400">
                            Complete guidance and assistance in coming up with a creative idea for your product, video production, audio-video recording, and editing. We produce the perfect video for your business, brand, services, and products.
                        </p>
                    </div>
                    <div className="w-full flex flex-col items-start justify-start px-5 py-6 bg-white dark:bg-transparent rounded-xl gap-5 border border-gray-200 dark:border-gray-300 shadow-lg shadow-gray-100 dark:shadow-gray-700 transform transition-transform duration-200 hover:shadow-2xl hover:shadow-gray-200 hover:dark:shadow-gray-500 hover:-translate-y-1.5">
                        <div className="w-full flex items-center justify-center gap-2">
                            <i className="ri-film-line text-4xl xl:text-5xl text-[var(--primary-green)]"></i>
                            <div className="w-4/5 flex items-center justify-start">
                                <h3 className="text-base md:text-lg xl:text-xl font-medium leading-tight w-fit pl-2 dark:text-gray-200">Video Promotion across all platforms</h3>
                            </div>
                        </div>
                        <p className="text-sm md:text-sm font-medium text-justify px-2.5 md:px-3.5 pb-3.5 text-gray-700 dark:text-gray-400">
                            Promote your YouTube video can be as tricky as creating the video. Creating a great video and going unnoticed is the same as not creating one. We will take care of the complete marketing services to make the video reach a huge potential audience.
                        </p>
                    </div>
                    <div className="w-full flex flex-col items-start justify-start px-5 py-6 bg-white dark:bg-transparent rounded-xl gap-5 border border-gray-200 dark:border-gray-300 shadow-lg shadow-gray-100 dark:shadow-gray-700 transform transition-transform duration-200 hover:shadow-2xl hover:shadow-gray-200 hover:dark:shadow-gray-500 hover:-translate-y-1.5">
                        <div className="w-full flex items-center justify-center gap-2">
                            <i className="ri-youtube-fill text-4xl xl:text-5xl text-[var(--primary-green)]"></i>
                            <div className="w-4/5 flex items-center justify-start">
                                <h3 className="text-base md:text-lg xl:text-xl font-medium leading-tight w-fit pl-2 dark:text-gray-200">Customized YouTube channel art</h3>
                            </div>
                        </div>
                        <p className="text-sm md:text-sm font-medium text-justify px-2.5 md:px-3.5 pb-3.5 text-gray-700 dark:text-gray-400">
                            YouTube channel art is the banner image in your YouTube account. It should reflect your business’ personality, the design should be simple, and also convey what your page is about. We will create customized channel art for your account that reflects your business.
                        </p>
                    </div>
                    <div className="w-full flex flex-col items-start justify-start px-5 py-6 bg-white dark:bg-transparent rounded-xl gap-5 border border-gray-200 dark:border-gray-300 shadow-lg shadow-gray-100 dark:shadow-gray-700 transform transition-transform duration-200 hover:shadow-2xl hover:shadow-gray-200 hover:dark:shadow-gray-500 hover:-translate-y-1.5">
                        <div className="w-full flex items-center justify-center gap-2">
                           <i className="ri-youtube-line text-4xl xl:text-5xl text-[var(--primary-green)]"></i>
                            <div className="w-4/5 flex items-center justify-start">
                                <h3 className="text-base md:text-lg xl:text-xl font-medium leading-tight w-fit pl-2 dark:text-gray-200">YouTube Video optimization</h3>
                            </div>
                        </div>
                        <p className="text-sm md:text-sm font-medium text-justify px-2.5 md:px-3.5 pb-3.5 text-gray-700 dark:text-gray-400">
                            Just like how optimizing your website content will make you rank higher in search engines organically, YouTube works on Video Optimization. Our marketing team of experts will make sure your content is perfectly optimized to reach google’s ranking factors. This will increase your video traffic, and in turn, will increase your website traffic organically too.
                        </p>
                    </div>
                    <div className="w-full flex flex-col items-start justify-start px-5 py-6 bg-white dark:bg-transparent rounded-xl gap-5 border border-gray-200 dark:border-gray-300 shadow-lg shadow-gray-100 dark:shadow-gray-700 transform transition-transform duration-200 hover:shadow-2xl hover:shadow-gray-200 hover:dark:shadow-gray-500 hover:-translate-y-1.5">
                        <div className="w-full flex items-center justify-center gap-2">
                           <i className="ri-google-line text-4xl xl:text-5xl text-[var(--primary-green)]"></i>
                            <div className="w-4/5 flex items-center justify-start">
                                <h3 className="text-base md:text-lg xl:text-xl font-medium leading-tight w-fit pl-2 dark:text-gray-200">Video Integration with Google Analytics</h3>
                            </div>
                        </div>
                        <p className="text-sm md:text-sm font-medium text-justify px-2.5 md:px-3.5 pb-3.5 text-gray-700 dark:text-gray-400">
                            We have years of experience in digital marketing. If we’ve learned one thing from all these years of experience, that is to track our growth, engagement, traffic sources to see what works best for us. We will integrate your YouTube account to Google Analytics to track your video marketing traffic and conversions. This way, you can understand what video content works better for you and your business and experiment more.
                        </p>
                    </div>
                    <div className="w-full flex flex-col items-start justify-start px-5 py-6 bg-white dark:bg-transparent rounded-xl gap-5 border border-gray-200 dark:border-gray-300 shadow-lg shadow-gray-100 dark:shadow-gray-700 transform transition-transform duration-200 hover:shadow-2xl hover:shadow-gray-200 hover:dark:shadow-gray-500 hover:-translate-y-1.5">
                        <div className="w-full flex items-center justify-center gap-2">
                           <i className="ri-file-chart-line text-4xl xl:text-5xl text-[var(--primary-green)]"></i>
                            <div className="w-4/5 flex items-center justify-start">
                                <h3 className="text-base md:text-lg xl:text-xl font-medium leading-tight w-fit pl-2 dark:text-gray-200">SEO for Videos</h3>
                            </div>
                        </div>
                        <p className="text-sm md:text-sm font-medium text-justify px-2.5 md:px-3.5 pb-3.5 text-gray-700 dark:text-gray-400">
                            You may not have come across the term Search Engine Optimization for YouTube. But, it is one of the important factors of video marketing on YouTube. Optimizing the video and Search Engine Optimization for Videos are different. Worry not. We will take care of complete SEO for your video to help your video rank in Google and other search engines and drive website traffic too.
                        </p>
                    </div>
                    <div className="w-full flex flex-col items-start justify-start px-5 py-6 bg-white dark:bg-transparent rounded-xl gap-5 border border-gray-200 dark:border-gray-300 shadow-lg shadow-gray-100 dark:shadow-gray-700 transform transition-transform duration-200 hover:shadow-2xl hover:shadow-gray-200 hover:dark:shadow-gray-500 hover:-translate-y-1.5">
                        <div className="w-full flex items-center justify-center gap-2">
                           <i className="ri-youtube-fill text-4xl xl:text-5xl text-[var(--primary-green)]"></i>
                            <div className="w-4/5 flex items-center justify-start">
                                <h3 className="text-base md:text-lg xl:text-xl font-medium leading-tight w-fit pl-2 dark:text-gray-200">YouTube Community Management</h3>
                            </div>
                        </div>
                        <p className="text-sm md:text-sm font-medium text-justify px-2.5 md:px-3.5 pb-3.5 text-gray-700 dark:text-gray-400">
                            When you’ve built a good number of YouTube audiences, managing the community is very important. Showing the people that you care and addressing any negative comments positively can be crucial but it is essential for customer retention. This is why our community management team will take care of maintaining a healthy relationship between your business and its customers.
                        </p>
                    </div>
                    <div className="w-full flex flex-col items-start justify-start px-5 py-6 bg-white dark:bg-transparent rounded-xl gap-5 border border-gray-200 dark:border-gray-300 shadow-lg shadow-gray-100 dark:shadow-gray-700 transform transition-transform duration-200 hover:shadow-2xl hover:shadow-gray-200 hover:dark:shadow-gray-500 hover:-translate-y-1.5">
                        <div className="w-full flex items-center justify-center gap-2">
                           <i className="ri-youtube-line text-4xl xl:text-5xl text-[var(--primary-green)]"></i>
                            <div className="w-4/5 flex items-center justify-start">
                                <h3 className="text-base md:text-lg xl:text-xl font-medium leading-tight w-fit pl-2 dark:text-gray-200">YouTube Reputation Management</h3>
                            </div>
                        </div>
                        <p className="text-sm md:text-sm font-medium text-justify px-2.5 md:px-3.5 pb-3.5 text-gray-700 dark:text-gray-400">
                            Representing a brand or business on a social media platform should be professional and friendly. You are accountable for all your actions because you holed a reputation. We have a reputation management team that will focus on maintaining that as we’ve done for all our 100+ clients.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section className="w-full grid place-items-center mt-10 md:mt-20 px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 relative">
            <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-center gap-6 px-4 md:px-6 lg:px-10 mt-8 md:mt-10">
                <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-5 pl-2.5">
                    <h2 className="text-2xl lg:text-4xl dark:text-gray-200 font-semibold text-center lg:text-left">
                        Types of Video Marketing Content for Business
                    </h2>
                    <p className="text-sm md:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        Here, we’ve classified the different types of video marketing content a business can use to establish trust and authority. Video marketing content for businesses is generally categorized into three topics
                    </p>
                    <div className="w-full flex items-stretch justify-center pt-3.5">
                        <div className="w-1/2 flex flex-col items-start justify-start gap-2.5 pl-2.5 text-sm md:text-sm">
                            <p className="text-[var(--primary-green)] font-bold">
                                Awareness
                            </p>
                            <ul className="pl-8 list-disc marker:text-[var(--primary-green)] text-gray-700 dark:text-gray-300 leading-relaxed">
                                <li>Lists Videos</li>
                                <li>Company Culture</li>
                                <li>Behind the scenes</li>
                                <li>Interview</li>
                            </ul>
                            <p className="text-[var(--primary-green)] font-bold">
                                Engagement
                            </p>
                            <ul className="pl-8 list-disc marker:text-[var(--primary-green)] text-gray-700 dark:text-gray-300 leading-relaxed">
                                <li>Vlog</li>
                                <li>Video emails</li>
                                <li>Videos with funny context</li>
                            </ul>
                        </div>
                        <div className="w-1/2 flex flex-col items-start justify-start gap-2.5 pl-2.5 text-sm md:text-sm">
                            <p className="text-[var(--primary-green)] font-bold">
                                Education
                            </p>
                            <ul className="pl-8 list-disc marker:text-[var(--primary-green)] text-gray-700 dark:text-gray-300 leading-relaxed">
                                <li>How-to videos</li>
                                <li>Product reviews</li>
                                <li>Q & A</li>
                                <li>Announcement video</li>
                                <li>Case study</li>
                                <li>Testimonial</li>
                                <li>Product tour</li>
                                <li>Feature explainer</li>
                                <li>Live talks/ Presentations</li>
                                <li>Tutorials, etc.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 px-2.5 md:px-4 lg:px-6 2xl:px-8">
                    <Image 
                    src={"/upload/video-marketing-img.webp"}
                    alt="video-markeing-image"
                    width={1200}
                    height={800}
                    className="w-full rounded-md md:rounded-lg"
                    />
                </div>
            </div>
            <div className="w-full max-w-7xl flex flex-col md:flex-row-reverse items-center justify-center gap-6 px-4 md:px-6 lg:px-10 mt-8 md:mt-10">
                <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-5 pl-2.5">
                    <h2 className="text-2xl lg:text-4xl dark:text-gray-200 font-semibold text-center lg:text-left">
                        Why choose Rankraze for Video Marketing
                    </h2>
                    <p className="text-sm md:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        Rankraze is one of the leading video marketing companies in the United States. Our experience across digital channels helps brands ship successful video content and media plans. Some of the key points on why you should choose us to get the best video marketing services are:
                    </p>
                    <ul className="pl-8 list-disc marker:text-[var(--primary-green)] text-gray-700 dark:text-gray-300 leading-relaxed">
                        <li>One-stop solution for complete digital marketing</li>
                        <li>Produce video marketing in the most cost-effective way</li>
                        <li>Drive high Return On Investment</li>
                        <li>Attract customers with great content</li>
                        <li>Promote video across all social platforms and websites</li>
                        <li>Integrate YouTube videos in social media content to drive traffic</li>
                        <li>Build a strong customer base with high conversions</li>
                        <li>Increase viewers and Gain brand exposure</li>
                        <li>Creating and managing videos</li>
                        <li>Managing customer relationships and reputation</li>
                        <li>Optimize your videos to drive traffic</li>
                        <li>Optimize your content for search engines</li>
                    </ul>
                    <p className="text-sm md:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        We have a team full of creatives who are always on the lookout for ideas, innovations and marketing strategies. We aim to spread your business’s online presence across huge potential audiences.
                    </p>
                </div>
                <div className="w-full md:w-1/2 px-2.5 md:px-4 lg:px-6 2xl:px-8">
                    <Image 
                    src={"/upload/Videos-increase-your-SEO-ranking.webp"}
                    alt="video-markeing-image"
                    width={1200}
                    height={1400}
                    className="w-full rounded-md md:rounded-lg"
                    />
                </div>
            </div>
            <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-center gap-6 px-4 md:px-6 lg:px-10 mt-8 md:mt-10">
                <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-5 pl-2.5">
                    <h2 className="text-2xl lg:text-4xl dark:text-gray-200 font-semibold text-center lg:text-left">
                        Our other Digital Marketing Services
                    </h2>
                    <p className="text-sm md:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        Rankraze has helped over 160 businesses succeed in digital marketing by offering various services like,
                    </p>
                    <ul className="pl-8 list-disc marker:text-[var(--primary-green)] text-gray-700 dark:text-gray-300 leading-relaxed">
                        <li>Search Engine Optimization (SEO)</li>
                        <li>Search Engine Marketing (SEM)</li>
                        <li>Pay Per Click Marketing (PPC)</li>
                        <li>Social Media Marketing (Organic & Paid)</li>
                        <li>Online Reputation Management (ORM)</li>
                        <li>Content Marketing</li>
                        <li>Website Hosting</li>
                        <li>Web Analytics</li>
                        <li>Video Marketing</li>
                        <li>App Development</li>
                    </ul>
                </div>
                <div className="w-full md:w-1/2 px-2.5 md:px-4 lg:px-6 2xl:px-8">
                    <Image 
                    src={"/upload/video-marketing-img.webp"}
                    alt="video-markeing-image"
                    width={1200}
                    height={800}
                    className="w-full rounded-md md:rounded-lg"
                    />
                </div>
            </div>
        </section>
        </>
    )
}