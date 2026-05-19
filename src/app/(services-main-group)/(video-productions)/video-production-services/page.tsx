import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { FilePlay, PackageSearch, LibraryBig, Clapperboard, Volume2 } from 'lucide-react';
import ContactForm from "@/app/components/UI/AllServicePageContactForm";

export const metadata:Metadata = {
    title: "Best corporate video production company Chennai, Bangalore, India - Rankraze Technologies",
    description: "Rankraze is one of the best firms for corporate video creation in Chennai. We are passionate about creating distinctive and unique videos to improve your site visibility. Get in touch with our experts to know more!",
    
    keywords: [
    "animation video",
    "corporate film maker",
    "corporate video company in Chennai",
    "corporate video makers",
    "corporate video makers Chennai",
    "corporate video production company",
    "corporate video production company in Chennai",
    "corporate video production services",
    "infographics video",
    "motion graphics video",
    "post production",
    "product explainer video",
    "production house",
    "video production Chennai",
    "video production company",
    "video production company Chennai",
    "video production company in Chennai",
    "video production services in Chennai"
    ],

    alternates: {
        canonical: "https://rankraze.com/video-production-services",
    },

    openGraph: {
        title: "Video Production Services",
        description: "Rankraze is one of the best firms for corporate video creation in Chennai. We are passionate about creating distinctive and unique videos to improve your site visibility. Get in touch with our experts to know more!",
        url: "https://rankraze.com/video-production-services",
        siteName: "Rankraze",
        images: [
        {
            url: "/upload/video-production.webp",
            width: 600,
            height: 600,
            alt: "video-production.webp",
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
            <div className="w-full grid place-items-center px-3 md:px-5 lg:px-8 xl:px-12 2xl:px-14  py-20 overflow-hidden relative rounded-md md:rounded-lg lg:rounded-xl xl:rounded-2xl 2xl:rounded-4xl before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:[background-image:linear-gradient(to_bottom,#ffffff44,#ffffffbb,white),linear-gradient(to_right,#DAF2EC,#D0EBFB)] before:-z-10 dark:before:invert shadow-xs dark:shadow-white">
                <div className="w-full max-w-7xl flex flex-col md:flex-row items-stretch justify-between gap-3.5 md:gap-0">
                    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center gap-4 pl-2.5">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-[42px] font-semibold text-center md:text-left capitalize dark:text-gray-200 pr-4">
                            video production services
                        </h1>
                        <p className="text-sm md:text-sm text-gray-700 dark:text-gray-300 text-center md:text-left pr-4">
                            In this 21st century, things are growing digitally in a vigorous manner.
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
                        Marketing videos over Everything!
                    </h2>
                    <p className="text-gray-400 leading-relaxed text-justify text-sm md:text-base">
                        In this 21st century, things are growing digitally in a vigorous manner.Traditional marketing is dying and businesses are using Digital Marketing to scale their business to great heights. Rankraze, One of the leading Digital Marketing Agency in chennai, has a team of marketing experts who analyse your business, competitors,right audience,products, and digital things to give the perfect analytics of your business.
                    </p>
                </div>
                <div className="w-full md:w-1/2 overflow-hidden px-4 py-2.5 rounded-md">
                    <div className="w-full relative">
                        <Image 
                            src={"/upload/macbookair.svg"}
                            alt="video marketing services in chennai"
                            width={800} height={600} layout="responsive"
                            objectFit="cover"          
                            className="rounded-xl dark:grayscale-75"                                 
                        />
                        <div className="absolute"
                            style={{
                            top: '6.8%',     // Adjust based on actual screen position
                            left: '14.25%',  // Adjust based on actual screen position
                            width: '71.4%', // Width of screen relative to image
                            height: '76.5%',  // Height of screen relative to image
                            }}
                        >
                            <iframe
                                src="https://www.youtube.com/embed/YE7VzlLtp-4?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&modestbranding=1&wmode=transparent&playsinline=1&enablejsapi=1&playlist=YE7VzlLtp-4"
                                title="Macbook video"
                                frameBorder="0"
                                allow="autoplay; fullscreen"
                                allowFullScreen
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="w-full grid place-items-center mt-20 px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 relative before:content-[''] before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-linear-to-r before:from-[#3CBB9E] before:to-[#37A8FA] before:-z-10">
            <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-around gap-2.5 md:gap-0 z-10 py-8 md:py-14 lg:py-16 xl:py-20">
                <div className="w-full md:w-1/2 flex flex-col items-start justify-start gap-5 md:gap-3.5 p-2.5">
                    <h2 className="text-4xl xl:text-[42px] font-semibold text-center md:text-left capitalize text-white pr-4">
                        2D – Animation
                    </h2>
                    <p className="text-white leading-relaxed text-justify text-sm md:text-base">
                        2D animation is the skill of creating movements of a character in two-dimensional spaces. The activities are created through basic outline drawing; the storyboard creates a rough sketch that describes, every action carried out by the character. Things are not done with rough-drawing; our talented team performs clean-up, color mine, composting, and final edit for every single 2D animation design. We make designs as per our clients’ requirements, right from storyboard to execution we love to deliver the best.
                    </p>
                </div>
                <div className="w-full md:w-1/2 overflow-hidden px-4 py-2.5 rounded-md">
                    <Image 
                        src={"/upload/jornada-marketing-video.webp"}
                        alt="video marketing services in chennai"
                        width={1200} height={1000} layout="responsive"
                        objectFit="cover"          
                        className="w-full rounded-xl dark:grayscale-25"                                 
                    />
                </div>
            </div>
        </section>
        <section className="w-full grid place-items-center mt-20 px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 relative">
            <div className="w-full max-w-7xl flex flex-col md:flex-row-reverse items-center justify-around gap-2.5 md:gap-0 py-8 md:py-14 lg:py-16 xl:py-20">
                <div className="w-full md:w-1/2 flex flex-col items-start justify-start gap-5 md:gap-3.5 p-2.5">
                    <h2 className="text-4xl xl:text-[42px] font-semibold text-center md:text-left capitalize dark:text-gray-200 pr-4">
                        3D - Animation
                    </h2>
                    <p className="text-gray-400 leading-relaxed text-justify text-sm md:text-base">
                        The animation is the craft of bringing the characters into life, making computer-generated objects to move, walk, sing, dance, etc. in three-dimensional spaces. The concept of animation seems magical to ordinary people. The process of creating three-dimensional spaces is fully systemized right from story to compositing it is generated through the computer. We, in Rankraze, bestow outstanding creation of realistic 3D animation which leads to magnify the brand image and growth. Areas we focus on are Video animation, Website animation, and Advertisement.
                    </p>
                </div>
                <div className="w-full md:w-1/2 overflow-hidden px-4 md:px-10 xl:px-14 py-2.5 rounded-md">
                    <Image 
                        src={"/upload/Production-animation.webp"}
                        alt="video marketing services in chennai"
                        width={1200} height={1000} layout="responsive"
                        objectFit="cover"          
                        className="w-full rounded-xl dark:grayscale-25"                                 
                    />
                </div>
            </div>
            <div className="w-full max-w-7xl flex flex-col items-center justify-around gap-8 md:gap-12 xl:gap-16 py-4 md:py-7 lg:py-8 xl:py-10">
                <h2 className="text-4xl xl:text-[42px] font-semibold text-center md:text-left capitalize dark:text-gray-200 pr-4">
                    our capabilities
                </h2>
                <div className="w-full grid grid-cols-5 gap-3.5 md:gap-8 lg:gap-12 xl:gap-16">
                    <div className="w-full flex flex-col items-center justify-center gap-2.5">
                        < FilePlay size={42} strokeWidth={1} color="#3CBA99" />
                        <h3 className="text-lg lg:text-xl font-bold text-center dark:text-gray-200">
                            Explainer Videos
                        </h3>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center  gap-2.5">
                        < PackageSearch size={42} strokeWidth={1} color="#3CBA99" />
                        <h3 className="text-lg lg:text-xl font-bold text-center dark:text-gray-200">
                            Product Demo
                        </h3>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center gap-2.5">
                        < LibraryBig size={42} strokeWidth={1} color="#3CBA99" />
                        <h3 className="text-lg lg:text-xl font-bold text-center dark:text-gray-200">
                            Case Studies
                        </h3>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center gap-2.5">
                        < Clapperboard size={42} strokeWidth={1} color="#3CBA99" />
                        <h3 className="text-lg lg:text-xl font-bold text-center dark:text-gray-200">
                            Promotional videos
                        </h3>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center gap-2.5">
                        < Volume2 size={42} strokeWidth={1} color="#3CBA99" />
                        <h3 className="text-lg lg:text-xl font-bold text-center dark:text-gray-200">
                            Explainer Videos
                        </h3>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}