import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { RectangleGoggles, Star, Brain, Cloud } from "lucide-react"
import ContactForm from "@/app/components/UI/AllServicePageContactForm";

export const metadata:Metadata = {
    title: "Virtual Reality Development Company in Dallas, Texas",
    description: "Rankraze is the Best VR development company in Dallas, Texas - We offer services in developing virtual reality applications for various industries, including gaming, education, healthcare, real estate, and more",
    
    keywords: [
    "virtual reality development company",
    "virtual reality companies in India",
    "vr companies in India",
    "vr development companies",
    "vr app development company",
    "virtual reality game development company",
    "virtual reality companies in Dallas",
    "vr game development company",
    "virtual reality app development company",
    "top virtual reality companies in India"
    ],

    alternates: {
        canonical: "https://rankraze.us/virtual-reality-development-company-dallas",
    },

    openGraph: {
        title: "Virtual Reality Development Company in Dallas, Texas",
        description: "Rankraze is the Best VR development company in Dallas, Texas - We offer services in developing virtual reality applications for various industries, including gaming, education, healthcare, real estate, and more",
        url: "https://rankraze.us/virtual-reality-development-company-dallas",
        siteName: "Rankraze",
        images: [
        {
            url: "/upload/macbookair.svg",
            width: 600,
            height: 600,
            alt: "Virtual Reality.webp",
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
            <div className="w-full min-h-[55vh] grid place-items-center px-3 md:px-5 lg:px-8 xl:px-12 2xl:px-14 py-20 overflow-hidden relative rounded-md md:rounded-lg lg:rounded-xl xl:rounded-2xl 2xl:rounded-4xl shadow-xs dark:shadow-white">
                <div className="w-full max-w-7xl flex flex-col md:flex-row items-stretch justify-between gap-3.5 md:gap-0">
                    <div className="w-full flex flex-col items-center justify-center gap-4 pl-2.5">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-[42px] font-semibold text-center capitalize text-white pr-4">
                            Virtual Reality Development
                        </h1>
                        <p className="text-sm md:text-sm text-white text-center pr-4 max-w-3xl">
                            Search engines are like all-in-one tools nowadays. Even though search engines like Google, Yahoo, and Bing give a lot of results for each search, no one has time to check all of them.
                        </p>
                        <Link href={"https://crm.skalelit.com/lead-form/1f920a2abc3394d259281285252cbb52?styled=1&with_logo=1"} target="_blank" className="overflow-hidden capitalize text-sm text-white px-6 py-2.5 relative bg-linear-to-br from-[#3DBC9C] to-[#36aaf1] rounded-lg">request quote</Link>
                    </div>
                </div>
                <div className="absolute flex items-end justify-start w-full h-full top-0 left-0 -z-20 opacity-100 dark:opacity-75 bg-no-repeat bg-cover bg-bottom">
                    <video 
                        src="/videos/VR_Final.webm"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover"
                    ></video>
                </div>
                <div className="absolute w-full h-full top-0 left-0 -z-10 bg-black opacity-45"></div>
            </div>
        </section>
        <section className="w-full grid place-items-center mt-20 px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 relative">
            <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-around">
                <div className="w-full md:w-1/2 flex flex-col items-start justify-center gap-3 md:gap-3.5 p-2.5">
                    <h2 className="text-4xl xl:text-[42px] font-semibold text-center md:text-left capitalize dark:text-gray-200 pr-4">
                        Feel Like You’re in a Digital World
                    </h2>
                    <p className="text-gray-400 leading-relaxed text-justify text-sm md:text-base dark:text-gray-100">
                        Virtual Reality tech lets you experience a fake, three-dimensional world on a computer. With VR, you can play around in this digital world and feel like you’re really there.
                    </p>
                    <p className="text-gray-400 leading-relaxed text-justify text-sm md:text-base dark:text-gray-100">
                        Virtual reality is like a fake world made by a computer to feel and look like a real experience. You need a special headset to use it. The headset blocks out what you see and hear from the real world and tracks your movements. This lets you explore and interact with the fake world, making it feel like you’re actually there.
                    </p>
                    {/* <Link href="" className="overflow-hidden capitalize text-sm text-white px-6 py-2.5 relative bg-linear-to-br from-[#3DBC9C] to-[#36aaf1] rounded-lg">learn more</Link> */}
                </div>
                <div className="w-full md:w-1/2 overflow-hidden px-4 py-2.5 rounded-md">
                    <div className="w-full relative">
                        <Image 
                            src={"/upload/macbookair.svg"}
                            alt="VR development services in Dallas"
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
        <section className="w-full grid place-items-center mt-20 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 rounded-xl md:rounded-4xl bg-[url('/upload/SEO-image3-scaled.webp')] bg-no-repeat bg-cover bg-center relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#00000090] overflow-hidden">
            <div className="w-full max-w-7xl flex flex-col items-center justify-center gap-6 px-4 md:px-6 lg:px-10 my-20 z-10">
                <p className="text-white text-center max-w-5xl leading-relaxed tracking-wide text-sm md:text-sm">
                    What We Do
                </p>
                <h2 className="text-2xl lg:text-4xl text-white font-semibold text-center lg:text-left">
                    VIRTUAL REALITY: WHERE REALITY BECOMES IMAGINATION.
                </h2>
                <div className="w-full grid max-w-7xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-2.5 gap-5 mt-3.5 2xl:mt-8">
                    <div className="bg-white flex flex-col items-center justify-center gap-5 px-12 py-8 group overflow-hidden rounded-2xl -z-10">
                        <div className="w-full h-full flex flex-col items-start justify-start gap-5 relative transform transition-[width,height,top,left] duration-500">
                            <div className="w-5 h-5 md:w-8 md:h-8 lg:w-[48px] lg:h-[48px] rounded-full bg-linear-to-tr from-[#4EABF4] to-[#52B9A9] absolute -z-10 left-0 top-0 -translate-x-2 -translate-y-2 onhover-scale opacity-85"></div>
                            <div className="w-full flex flex-col items-start center-start gap-2.5">
                                <p className="capitalize md:text-lg text-gray-700">Fun and Games</p>
                                <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm md:text-sm">
                                    Virtual reality is super cool for gaming. You can pretend to be your favorite game character and play in a whole new way. You can fight monsters or explore magical worlds.
                                </p>
                            </div>
                        </div> 
                    </div>
                    <div className="bg-white flex flex-col items-center justify-center gap-5 px-12 py-8 group overflow-hidden rounded-2xl -z-10">
                        <div className="w-full h-full flex flex-col items-start justify-start gap-5 relative transform transition-[width,height,top,left] duration-500">
                            <div className="w-5 h-5 md:w-8 md:h-8 lg:w-[48px] lg:h-[48px] rounded-full bg-linear-to-tr from-[#4EABF4] to-[#52B9A9] absolute -z-10 left-0 top-0 -translate-x-2 -translate-y-2 onhover-scale opacity-85"></div>
                            <div className="w-full flex flex-col items-start center-start gap-2.5">
                                <p className="capitalize md:text-lg text-gray-700">Learning and Training</p>
                                <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm md:text-sm">
                                    Virtual reality can change a lot of things, like medicine and school. It can help people not be scared, help doctors learn, and let students see history and new places without any danger.
                                </p>
                            </div>
                        </div> 
                    </div>
                    <div className="bg-white flex flex-col items-center justify-center gap-5 px-12 py-8 group overflow-hidden rounded-2xl -z-10">
                        <div className="w-full h-full flex flex-col items-start justify-start gap-5 relative transform transition-[width,height,top,left] duration-500">
                            <div className="w-5 h-5 md:w-8 md:h-8 lg:w-[48px] lg:h-[48px] rounded-full bg-linear-to-tr from-[#4EABF4] to-[#52B9A9] absolute -z-10 left-0 top-0 -translate-x-2 -translate-y-2 onhover-scale opacity-85"></div>
                            <div className="w-full flex flex-col items-start center-start gap-2.5">
                                <p className="capitalize md:text-lg text-gray-700">Therapy and Healing</p>
                                <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm md:text-sm">
                                    Virtual reality can help people who are hurt or scared. It can help them get better by showing them things that bother them slowly and safely.
                                </p>
                            </div>
                        </div> 
                    </div>
                    <div className="bg-white flex flex-col items-center justify-center gap-5 px-12 py-8 group overflow-hidden rounded-2xl -z-10">
                        <div className="w-full h-full flex flex-col items-start justify-start gap-5 relative transform transition-[width,height,top,left] duration-500">
                            <div className="w-5 h-5 md:w-8 md:h-8 lg:w-[48px] lg:h-[48px] rounded-full bg-linear-to-tr from-[#4EABF4] to-[#52B9A9] absolute -z-10 left-0 top-0 -translate-x-2 -translate-y-2 onhover-scale opacity-85"></div>
                            <div className="w-full flex flex-col items-start center-start gap-2.5">
                                <p className="capitalize md:text-lg text-gray-700">Meetings and Conferences</p>
                                <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm md:text-sm">
                                    Virtual reality can be used for meetings and talks. People can meet and chat in a fake place from anywhere. It’s also good for practice and showing off places..
                                </p>
                            </div>
                        </div> 
                    </div>
                    <div className="bg-white flex flex-col items-center justify-center gap-5 px-12 py-8 group overflow-hidden rounded-2xl -z-10">
                        <div className="w-full h-full flex flex-col items-start justify-start gap-5 relative transform transition-[width,height,top,left] duration-500">
                            <div className="w-5 h-5 md:w-8 md:h-8 lg:w-[48px] lg:h-[48px] rounded-full bg-linear-to-tr from-[#4EABF4] to-[#52B9A9] absolute -z-10 left-0 top-0 -translate-x-2 -translate-y-2 onhover-scale opacity-85"></div>
                            <div className="w-full flex flex-col items-start center-start gap-2.5">
                                <p className="capitalize md:text-lg text-gray-700">Research and Inventions</p>
                                <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm md:text-sm">
                                    Virtual reality can help in research and inventions, like building things or learning about medicine. It can help make stuff, show data, and let people work together, even if they’re far apart.
                                </p>
                            </div>
                        </div> 
                    </div>
                    <div className="bg-white flex flex-col items-center justify-center gap-5 px-12 py-8 group overflow-hidden rounded-2xl -z-10">
                        <div className="w-full h-full flex flex-col items-start justify-start gap-5 relative transform transition-[width,height,top,left] duration-500">
                            <div className="w-5 h-5 md:w-8 md:h-8 lg:w-[48px] lg:h-[48px] rounded-full bg-linear-to-tr from-[#4EABF4] to-[#52B9A9] absolute -z-10 left-0 top-0 -translate-x-2 -translate-y-2 onhover-scale opacity-85"></div>
                            <div className="w-full flex flex-col items-start center-start gap-2.5">
                                <p className="capitalize md:text-lg text-gray-700">Virtual Reality Trips</p>
                                <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm md:text-sm">
                                    To make a website or any content of the site like a blog or page rank higher on search engines, the keyword is the first and foremost factor.
                                </p>
                            </div>
                        </div> 
                    </div>
                    <div className="bg-white flex flex-col items-center justify-center gap-5 px-12 py-8 group overflow-hidden rounded-2xl -z-10">
                        <div className="w-full h-full flex flex-col items-start justify-start gap-5 relative transform transition-[width,height,top,left] duration-500">
                            <div className="w-5 h-5 md:w-8 md:h-8 lg:w-[48px] lg:h-[48px] rounded-full bg-linear-to-tr from-[#4EABF4] to-[#52B9A9] absolute -z-10 left-0 top-0 -translate-x-2 -translate-y-2 onhover-scale opacity-85"></div>
                            <div className="w-full flex flex-col items-start center-start gap-2.5">
                                <p className="capitalize md:text-lg text-gray-700">Virtual Reality Business</p>
                                <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm md:text-sm">
                                    Virtual reality can help businesses, like stores and real estate. You can see things before they’re real or learn how to do stuff.
                                </p>
                            </div>
                        </div> 
                    </div>
                    <div className="bg-white flex flex-col items-center justify-center gap-5 px-12 py-8 group overflow-hidden rounded-2xl -z-10">
                        <div className="w-full h-full flex flex-col items-start justify-start gap-5 relative transform transition-[width,height,top,left] duration-500">
                            <div className="w-5 h-5 md:w-8 md:h-8 lg:w-[48px] lg:h-[48px] rounded-full bg-linear-to-tr from-[#4EABF4] to-[#52B9A9] absolute -z-10 left-0 top-0 -translate-x-2 -translate-y-2 onhover-scale opacity-85"></div>
                            <div className="w-full flex flex-col items-start center-start gap-2.5">
                                <p className="capitalize md:text-lg text-gray-700">Building Teams and Companies</p>
                                <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm md:text-sm">
                                    Virtual reality can help people work together and make companies better. You can play games or practice together, even if you’re not in the same place.
                                </p>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>


        </section>
         <section className="w-full grid place-items-center mt-20 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14">
            <div className="w-full max-w-7xl flex flex-col items-center justify-center gap-6 px-4 md:px-6 lg:px-10 my-20 z-10">
                <p className="text-black dark:text-gray-300 text-center max-w-5xl leading-relaxed tracking-wide text-sm md:text-sm">
                  What we can do
                </p>
                <h2 className="text-2xl lg:text-4xl text-black dark:text-gray-300 font-semibold text-center lg:text-left">
                    What We Use
                </h2>
               <div className="grid grid-cols-1 max-w-7xl sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    <div className="bg-white p-6 rounded-lg place-items-center">
                        <RectangleGoggles size={40} color="#3DBC9B" strokeWidth={1.5} />
                        <p className="text-2xl font-bold py-3">Virtual Reality</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg place-items-center">
                        <Star size={40} color="#3DBC9B" strokeWidth={1.5} />
                        <p className="text-2xl font-bold py-3">WebXR/MR</p>

                    </div>
                    <div className="bg-white p-6 rounded-lg place-items-center">
                        <Brain size={40} color="#3DBC9B" strokeWidth={1.5} />
                        <p className="text-2xl font-bold py-3">AL/ML</p>

                    </div>
                    <div className="bg-white p-6 rounded-lg place-items-center">
                        <Cloud size={40} color="#3DBC9B" strokeWidth={1.5} />
                        <p className="text-2xl font-bold py-3">Cloud</p>

                    </div>
                </div>
            </div>
        </section>
        <section className="w-full grid place-items-center mb-10  px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 relative">
            <div className="w-full grid place-items-center px-3 md:px-5 lg:px-8 xl:px-12 2xl:px-14 py-10 md:py-20 overflow-hidden ">
                <div className="w-full max-w-7xl flex flex-col md:flex-row items-stretch justify-between gap-3.5 md:gap-0">
                    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center gap-4 pl-2.5">
                        <h2 className="text-4xl xl:text-[42px] font-semibold text-center md:text-left capitalize dark:text-gray-200 pr-4">
                            Request a Free Quote
                        </h2>
                        <p className="text-sm md:text-sm text-gray-700 dark:text-gray-300 text-center md:text-left pr-4">
                            Let’s connect to discuss our services and how we can work together. 
                        </p>
                        
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col items-center justify-center py-2.5">
                        <ContactForm />
                    </div>
                </div>
                <div className="absolute flex items-end justify-start w-full h-full bottom-0 left-0 -z-10 opacity-100 dark:opacity-75 bg-[url('/upload/wave-image.png')] bg-no-repeat bg-cover bg-bottom">
                </div>
            </div>
        </section>
        </>
    )
}