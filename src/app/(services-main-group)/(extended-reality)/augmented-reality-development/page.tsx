import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import ContactForm from "@/app/components/UI/AllServicePageContactForm";
import { Gamepad2, Swords, ShoppingCart, Gpu, Cpu, University, Drone, Presentation } from 'lucide-react';

export const metadata:Metadata = {
    title: "AR Development | Augmented Reality Development Company in Chennai, India - Rankraze",
    description: "Rankraze AR development companies in Chennai, India - We offer services in developing augmented reality applications for various industries, including gaming, education, healthcare, marketing, and more",
    
    keywords: [
    "augmented reality development company",
    "augmented reality app development company",
    "augmented reality app developer",
    "ar app development company",
    "ar companies in chennai",
    "augmented reality companies in chennai",
    "augmented reality developers india",
    "augmented reality software development company",
    "augmented reality development services",
    "top augmented reality app development company"
    ],

    alternates: {
        canonical: "https://rankraze.com/augmented-reality-development",
    },

    openGraph: {
        title: "AR Development | Augmented Reality Development Company in Chennai, India - Rankraze",
        description: "Rankraze AR development companies in Chennai, India - We offer services in developing augmented reality applications for various industries, including gaming, education, healthcare, marketing, and more",
        url: "https://rankraze.com/augmented-reality-development",
        siteName: "Rankraze",
        images: [
        {
            url: "/upload/AR-technology.webp",
            width: 600,
            height: 400,
            alt: "augmented-reality-development.webp",
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
            <div className="w-full min-h-[75vh] grid place-items-center px-3 md:px-5 lg:px-8 xl:px-12 2xl:px-14 py-20 overflow-hidden relative rounded-md md:rounded-lg lg:rounded-xl xl:rounded-2xl 2xl:rounded-4xl shadow-xs dark:shadow-white">
                <div className="w-full max-w-7xl flex flex-col md:flex-row items-stretch justify-between gap-3.5 md:gap-0">
                    <div className="w-full flex flex-col items-center justify-center gap-4 pl-2.5">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-[42px] font-semibold text-center capitalize text-white pr-4">
                            Augmented Reality Development
                        </h1>
                        <p className="text-sm md:text-sm lg:text-base xl:text-base text-gray-300 text-center pr-4 max-w-3xl">
                            Rankraze AR development company in Chennai, india – We offer services in developing augmented reality applications for various industries, including gaming, education, healthcare, marketing, and more
                        </p>
                        <Link href={"https://crm.skalelit.com/lead-form/1f920a2abc3394d259281285252cbb52?styled=1&with_logo=1"} target="_blank" className="overflow-hidden capitalize text-sm text-white px-6 py-2.5 relative bg-linear-to-br from-[#3DBC9C] to-[#36aaf1] rounded-lg">request quote</Link>
                    </div>
                </div>
                <div className="absolute flex items-end justify-start w-full h-full top-0 left-0 -z-20 opacity-100 dark:opacity-75 bg-no-repeat bg-cover bg-bottom">
                    <video 
                        src="/videos/AR_Final.webm"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover"
                    ></video>
                </div>
                <div className="absolute w-full h-full top-0 left-0 -z-10 bg-gray-800 opacity-40"></div>
            </div>
        </section>
        <section className="w-full grid place-items-center mt-20 px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 relative">
            <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-around">
                <div className="w-full md:w-1/2 flex flex-col items-start justify-center gap-3 md:gap-3.5 p-2.5">
                    <h2 className="text-4xl xl:text-[42px] font-semibold text-center md:text-left capitalize dark:text-gray-200 pr-4">
                        Feel the digital immersion in the physical environment
                    </h2>
                    <p className="text-gray-400 leading-relaxed text-justify text-sm md:text-base">
                        Augmented Reality(AR). It is a technology that overlays digital content and information onto the real world, creating a mixed-reality (MR) experience. With AR, users can see and interact with the real world, while digital content is seamlessly integrated into their view.
                    </p>
                    <ol className="pl-8 list-decimal text-gray-500 dark:text-gray-300 leading-relaxed">
                        <li>Gaming</li>
                        <li> Education</li>
                        <li>Retail</li>
                        <li>Medical</li>
                    </ol>
                </div>
                <div className="w-full md:w-1/2 overflow-hidden px-4 md:px-6 lg:px-10 xl:px-14 pt-5 rounded-md">
                    <Image 
                        src={"/upload/AR-technology.webp"}
                        alt="video marketing services in chennai"
                        width={800} height={600} layout="responsive"
                        objectFit="cover"          
                        className="rounded-xl dark:grayscale-25"                                 
                    />
                </div>
            </div>
        </section>
        <section className="w-full grid place-items-center text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 rounded-xl md:rounded-4xl bg-[#F7F9FB] relative overflow-hidden">
            <div className="w-full max-w-7xl flex flex-col items-center justify-center gap-6 px-4 md:px-6 lg:px-10 my-20 z-10">
                <h2 className="text-2xl lg:text-4xl font-semibold text-center lg:text-left">
                    Augumented Reality: Where reality ends and imagination begins
                </h2>
                <div className="w-full grid max-w-7xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2.5 gap-5 mt-3.5 2xl:mt-8 ">
                    <div className="bg-white flex items-center hover:border-[var(--primary-green)] justify-center gap-2.5 p-4 border border-gray-200 rounded-md shadow-md dark:shadow-gray-600">
                        <Gamepad2
                        strokeWidth={2}
                        className="w-10 h-10 md:w-12 md:h-12 bg-[var(--primary-blue)] rounded-full p-2 text-white m-3"
                        />

                        <div className="w-full flex flex-col  hover:border-[var(--primary-green)] items-start justify-center gap-4">
                            <h3 className="capitalize md:text-lg text-gray-700 hover:text-[var(--primary-green)]">Entertainment and Gaming</h3>
                            <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm md:text-sm">
                                Augmented reality (AR) emerges as a potent asset in the realm of entertainment and gaming, presenting novel avenues for immersive experiences and interactive gameplay.
                            </p>
                        </div>
                    </div>
                    <div className="bg-white flex hover:border-[var(--primary-green)] items-center justify-center gap-2.5 p-4 border border-gray-200 rounded-md shadow-md dark:shadow-gray-600">
                        < Presentation strokeWidth={2}className="w-10 h-10 md:w-12 md:h-12 bg-[var(--primary-blue)] rounded-full p-2 text-white m-3" />
                        <div className="w-full flex flex-col items-start justify-center gap-4">
                            <h3 className="capitalize md:text-lg text-gray-700 hover:text-[var(--primary-green)]">Education and Training</h3>
                            <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm md:text-sm">
                                Our AR training applications serve as invaluable educational tools, offering guidance and tutorials to novices across various domains.
                            </p>
                        </div>
                    </div>
                    <div className="bg-white flex items-center hover:border-[var(--primary-green)] justify-center gap-2.5 p-4 border border-gray-200 rounded-md shadow-md dark:shadow-gray-600">
                        < Gpu strokeWidth={2}className="w-10 h-10 md:w-12 md:h-12 bg-[var(--primary-blue)] rounded-full p-2 text-white m-3" />
                        <div className="w-full flex flex-col items-start justify-center gap-4">
                            <h3 className="capitalize md:text-lg text-gray-700 hover:text-[var(--primary-green)]">Therapy and Rehabilitation</h3>
                            <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm md:text-sm">
                                Our commitment extends to the healthcare sector, where AR applications aid medical practitioners in tasks like injections and surgeries.
                            </p>
                        </div>
                    </div>
                    <div className="bg-white flex items-center hover:border-[var(--primary-green)] justify-center gap-2.5 p-4 border border-gray-200 rounded-md shadow-md dark:shadow-gray-600">
                        < ShoppingCart strokeWidth={2}className="w-10 h-10 md:w-12 md:h-12 bg-[var(--primary-blue)] rounded-full p-2 text-white m-3" />
                        <div className="w-full flex flex-col items-start justify-center gap-4">
                            <h3 className="capitalize md:text-lg text-gray-700 hover:text-[var(--primary-green)]">Retail and Ecommerce</h3>
                            <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm md:text-sm">
                                For businesses engaged in commerce, AR presents a transformative potential. From clothing to automobiles, AR infuses an element of excitement into the shopping experience.
                            </p>
                        </div>
                    </div>
                    <div className="bg-white flex items-center hover:border-[var(--primary-green)] justify-center gap-2.5 p-4 border border-gray-200 rounded-md shadow-md dark:shadow-gray-600">
                        < Drone strokeWidth={2}className="w-10 h-10 md:w-12 md:h-12 bg-[var(--primary-blue)] rounded-full p-2 text-white m-3" />
                        <div className="w-full flex flex-col items-start justify-center gap-4">
                            <h3 className="capitalize md:text-lg text-gray-700 hover:text-[var(--primary-green)]">Advertising AR</h3>
                            <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm md:text-sm">
                                AR lends a touch of sophistication to advertising endeavours. By blending real-world components with digital elements, AR ads captivate viewers with interactive content.
                            </p>
                        </div>
                    </div>
                    <div className="bg-white flex items-center  hover:border-[var(--primary-green)] justify-center gap-2.5 p-4 border border-gray-200 rounded-md shadow-md dark:shadow-gray-600">
                        < Cpu strokeWidth={2}className="w-10 h-10 md:w-12 md:h-12 bg-[var(--primary-blue)] rounded-full p-2 text-white m-3" />
                        <div className="w-full flex flex-col items-start justify-center gap-4">
                            <h3 className="capitalize md:text-lg text-gray-700 hover:text-[var(--primary-green)]">Tourism and Culture AR Apps</h3>
                            <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm md:text-sm">
                                Tourists benefit from AR as well, as it offers guided tours of attractions, historical insights, and interactive enhancements within museums and galleries, elevating the tourism experience.
                            </p>
                        </div>
                    </div>
                    <div className="bg-white flex items-center hover:border-[var(--primary-green)] justify-center gap-2.5 p-4 border border-gray-200 rounded-md shadow-md dark:shadow-gray-600">
                        < Swords strokeWidth={2}className="w-10 h-10 md:w-12 md:h-12 bg-[var(--primary-blue)] rounded-full p-2 text-white m-3" />
                        <div className="w-full flex flex-col items-start justify-center gap-4">
                            <h3 className="capitalize md:text-lg text-gray-700 hover:text-[var(--primary-green)]">AR Office Walkthrough</h3>
                            <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm md:text-sm">
                                Picture touring an office space without physically being there. Our AR solutions make this feasible, catering to businesses looking to showcase their premises to clients, investors, or prospective employees.
                            </p>
                        </div>
                    </div>
                    <div className="bg-white flex items-center hover:border-[var(--primary-green)] justify-center gap-2.5 p-4 border border-gray-200 rounded-md shadow-md dark:shadow-gray-600">
                        < University strokeWidth={2}className="w-10 h-10 md:w-12 md:h-12 bg-[var(--primary-blue)] rounded-full p-2 text-white m-3" />
                        <div className="w-full flex flex-col items-start justify-center gap-4">
                            <h3 className="capitalize md:text-lg text-gray-700 hover:text-[var(--primary-green)]">Architecture AR</h3>
                            <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm md:text-sm">
                                In the realm of real estate, AR proves instrumental. It can transform vacant properties into inviting, furnished spaces, assisting potential buyers in making informed decisions..
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="w-full grid place-items-center mt-20 px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 relative">
            <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-around">
                <div className="w-full md:w-1/2 flex flex-col items-start justify-center gap-3 md:gap-3.5 p-2.5">
                    <h2 className="text-4xl xl:text-[42px] font-semibold text-center md:text-left capitalize dark:text-gray-200 pr-4">
                        What We Use
                    </h2>
                    <ul className="text-sm md:text-base pl-1 flex flex-col gap-1 list-disc marker:text-[var(--primary-green)] dark:text-gray-300 text-gray-500">
                        <li className="flex items-start gap-2">
                            <i className="ri-star-line text-lg text-[var(--primary-green)]"></i>
                            <span>
                                Virtual Reality
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <i className="ri-star-line text-lg text-[var(--primary-green)]"></i>
                            <span>
                                WebXR/MR
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <i className="ri-star-line text-lg text-[var(--primary-green)]"></i>
                            <span>
                                AI/ML
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <i className="ri-star-line text-lg text-[var(--primary-green)]"></i>
                            <span>
                                Cloud
                            </span>
                        </li>
                    </ul>
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
                                src="https://www.youtube.com/embed/tUNGRFMjq0I?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&modestbranding=1&wmode=transparent&playsinline=1&enablejsapi=1&playlist=tUNGRFMjq0I" 
                                title="Macbook video" 
                                frameBorder="0" 
                                allow="autoplay; fullscreen" 
                                allowFullScreen 
                                className="w-full h-full">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-start justify-start dark:bg-none mt-10 text-[var(--text-black)] gap-4 w-full max-w-5xl px-6 py-10 md:px-8 md:py-12 lg:px-12 lg:py-20 mb-2.5 bg-[#000] rounded-2xl relative overflow-hidden">
                <div className="w-full md:w-2/3 flex flex-col items-start justify-start z-10 gap-2.5  before:content-[''] before:w-full before:h-full before:absolute before:bg-[url('/upload/background-style.webp')] before:bg-cover before:bg-no-repeat before:opacity-45 before:rounded-2xl before:bg-center before:z-0 before:top-0 before:left-0">
                    <h3 className="text-2xl md:text-3xl text-white text-center md:text-left font-bold z-10">
                        Let&apos;s begin this journey and enjoy the new world of Augmented Reality.
                    </h3>
                    <p className="text-[10px] md:text-sm lg:text-sm text-white text-center md:text-left tracking-tight md:tracking-tight">
                        Our mission is to introduce you to the captivating world of Augmented Reality, offering an innovative approach to experiencing entertainment.
                    </p>
                    <Link href="/contact-us" className="text-sm md:text-sm text-white font-semibold px-3.5 py-2.5 rounded-md relative before:content-[''] before:absolute before:w-full before:h-full before:bg-linear-to-br before:from-[#3DBC9C] before:to-[#37A8F9] before:top-0 before:left-0 before:rounded-md hover:before: before:-z-10 hover:before:from-[#37A8F9] hover:before:to-[#3DBC9C]">
                        Start Your Journey
                    </Link>
                </div>
                <div className="absolute w-1/2 h-full top-0 right-0 z-0 before:content-[''] before:w-full before:h-full before:absolute before:bg-[url('/upload/vr-footer.webp')] before:bg-cover before:bg-no-repeat">
                </div>
            </div>
        </section>
        <section className="w-full grid place-items-center px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 relative">
            <div className="w-full grid place-items-center px-3 md:px-5 lg:px-8 xl:px-12 2xl:px-14 pt-10 md:pt-20 overflow-hidden relative rounded-md md:rounded-lg lg:rounded-xl xl:rounded-2xl 2xl:rounded-4xl">
                <div className="w-full max-w-7xl flex flex-col md:flex-row items-stretch justify-between gap-3.5 md:gap-0">
                    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center gap-4 pl-2.5">
                        <h3 className="text-4xl xl:text-[42px] font-semibold text-center md:text-left dark:text-gray-200 pr-4">
                            Request a Free Quote
                        </h3>
                        <p className="text-sm md:text-sm text-gray-700 dark:text-gray-300 text-center md:text-left pr-4">
                            Let’s connect to discuss our services and how we can work together. 
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col items-center justify-center py-2.5 drop-shadow-lg">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}