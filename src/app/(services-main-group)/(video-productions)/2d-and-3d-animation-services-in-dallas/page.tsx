import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { UsersRound, Rotate3d, Slack, FileBox, Webhook, HandHeart } from 'lucide-react';
import ContactForm from "@/app/components/UI/AllServicePageContactForm";

export const metadata:Metadata = {
    title: "2D and 3D Animation Services in Dallas, Texas | Rankraze",
    description: "Creative 2D and 3D animation and motion design for Dallas and Texas businesses—explainer videos, product demos, and brand storytelling. Call +1 (919) 455-1241 for a free quote.",
    
    keywords: [
    "2d animation dallas",
    "3d animation dallas",
    "3d animation services texas",
    "animated explainer video",
    "animation studio dallas",
    "motion graphics",
    "logo animation",
    "whiteboard animation",
    "video production dallas",
    "product visualization",
    "training animation",
    ],

    alternates: {
        canonical: "https://rankraze.us/2d-and-3d-animation-services-in-dallas",
    },

    openGraph: {
        title: "2D and 3D Animation Services in Dallas | Rankraze",
        description: "Professional 2D and 3D animation for Texas brands—increase engagement with explainers, ads, and product stories.",
        url: "https://rankraze.us/2d-and-3d-animation-services-in-dallas",
        siteName: "Rankraze",
        images: [
        {
            url: "/upload/video-production.webp",
            width: 600,
            height: 600,
            alt: "2D and 3D video production",
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
                        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-[42px] font-semibold text-center md:text-left dark:text-gray-200 pr-4">
                            2D and 3D Animation
                        </h1>
                        <p className="text-sm md:text-sm text-gray-700 dark:text-gray-300 text-center md:text-left pr-4">
                            RankRaze Animation describes anything the human mind can think of, providing quality that reflects the perfect reality of 3d animation companies in Dallas–Fort Worth and across Texas. We can help you with utmost care in making your videos in a way that can really explain your product in a finer and appealing way using 3D animation.
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
            <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-around gap-2.5 md:gap-0 py-8 md:py-14 lg:py-16 xl:py-20">
                <div className="w-full md:w-1/2 flex flex-col items-start justify-start gap-5 md:gap-3.5 p-2.5">
                    <h2 className="text-2xl md:text-4xl xl:text-[42px] font-semibold text-center md:text-left capitalize dark:text-gray-200 pr-4">
                        We create 3D animation to capture the attention of your company audiences.
                    </h2>
                    <ul className="text-sm md:text-sm pl-8 list-disc marker:text-[var(--primary-green)] text-gray-700 dark:text-gray-300 leading-relaxed">
                        <li>A 3D animation Editing can show your product from various angles, allowing your customers to see every detail of your company product.</li>
                        <li>With our well-versed Editing service, your company products are showcased in a creative way, with a greater impact on your audience across Texas and the US</li>
                    </ul>
                    <p className="text-sm md:text-base text-[var(--primary-green)] font-semibold leading-relaxed">
                        Our Custom 3D Animation Visualization Embodies Remarkable Product Modeling And Logo Design.
                    </p>
                    <p className="text-sm md:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        We are the leading 3D animation video makers, and we can help you increase your brand by telling a unique story that makes your company product more informative and engaging.
                    </p>
                    <Link href="" className="overflow-hidden capitalize text-sm text-white px-6 py-2.5 relative bg-linear-to-br from-[#3DBC9C] to-[#36aaf1] rounded-lg mt-2.5">learn more</Link>
                </div>
                <div className="w-full md:w-1/2 overflow-hidden px-4 md:px-10 xl:px-14 py-2.5 rounded-md">
                    <Image 
                        src={"/upload/2dand3danimation_image2.webp"}
                        alt="video marketing services in Dallas"
                        width={1200} height={1000} layout="responsive"
                        objectFit="cover"          
                        className="w-full rounded-xl dark:grayscale-25"                                 
                    />
                </div>
            </div>
        </section>
        <section className="w-full grid place-items-center mt-2 px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 relative">
            <div className="w-full max-w-7xl flex flex-col items-center justify-around gap-8 md:gap-12 xl:gap-16 py-4 md:py-7 lg:py-8 xl:py-10">
                <div className="w-full grid grid-cols-3 md:grid-cols-6 gap-3.5 md:gap-8 lg:gap-12 xl:gap-16 dark:text-gray-200 place-items-stretch">
                    <div className="w-full flex flex-col items-center justify-center gap-2.5">
                        < UsersRound strokeWidth={1} color="#3CBA99" className="w-8 h-8 md:w-[42px] md:h-[42px]" />
                        <h3 className="text-sm lg:text-xl font-bold text-center">
                           Attention Of Your Company Audiences.
                        </h3>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center gap-2.5">
                        < Rotate3d strokeWidth={1} color="#3CBA99" className="w-8 h-8 md:w-[42px] md:h-[42px]" />
                        <h3 className="text-sm lg:text-xl font-bold text-center">
                           Custom 3D Animation Visualization
                        </h3>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center gap-2.5">
                        < Slack strokeWidth={1} color="#3CBA99" className="w-8 h-8 md:w-[42px] md:h-[42px]" />
                        <h3 className="text-sm lg:text-xl font-bold text-center">
                            Remarkable Product & Logo Design
                        </h3>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center gap-2.5">
                        < FileBox strokeWidth={1} color="#3CBA99" className="w-8 h-8 md:w-[42px] md:h-[42px]" />
                        <h3 className="text-sm lg:text-xl font-bold text-center">
                            3D Animation Product Modeling
                        </h3>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center gap-2.5">
                        < Webhook strokeWidth={1} color="#3CBA99" className="w-8 h-8 md:w-[42px] md:h-[42px]" />
                        <h3 className="text-sm lg:text-xl font-bold text-center">
                           Interactive 3D Animation Modeling
                        </h3>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center gap-2.5">
                        < HandHeart strokeWidth={1} color="#3CBA99" className="w-8 h-8 md:w-[42px] md:h-[42px]" />
                        <h3 className="text-sm lg:text-xl font-bold text-center">
                            Product Visualization In 3D Animation
                        </h3>
                    </div>
                </div>
            </div>
        </section>
        <section className="w-full grid place-items-center mt-20 px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-6 md:gap-8 relative">
            <div className="w-full flex flex-col items-center justify-center gap-4 md:gap-8 max-w-5xl">
                <h2 className="text-2xl md:text-4xl font-bold text-center dark:text-gray-200">
                    Our Custom 3D Animation Visualization Embodies Remarkable Product Modeling And Logo Design
                </h2>
                <p className="text-sx md:text-sm text-gray-600 dark:text-gray-300 text-center font-medium leading-relaxed max-w-3xl">
                    We are the leading 3D animation video makers, and we can help you increase your brand by telling a unique story that makes your company product more informative and engaging
                </p>
            </div>
            <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-around gap-2.5 md:gap-0 py-8">
                <div className="w-full md:w-1/2 flex flex-col items-start justify-start gap-5 md:gap-3.5 p-2.5">
                    <h3 className="text-4xl xl:text-[42px] font-semibold text-center md:text-left capitalize dark:text-gray-200 pr-4">
                        Interactive 3D Animation Modeling
                    </h3>
                    <ul className="text-sm md:text-sm pl-8 list-disc marker:text-[var(--primary-green)] text-gray-700 dark:text-gray-300 leading-relaxed">
                        <li>We provide modernized 3D product modeling services to numerous clients from various industries and business verticals.</li>
                        <li>Our 3D animation teams are equipped with interactive technology, which motivates us to excel in our field.</li>
                        <li>On gaining 3D modeling services and corporate animation from us, The pool of professionals possesses the most advanced technology that provides you</li>
                        <li>with customized solutions for architectural animation and allows you to choose anything according to your interests right from textures, colors, designs, and size.</li>
                        <li>When you present your clients with a wide range of options, they will feel more at ease in making the best purchase decision.</li>
                    </ul>
                </div>
                <div className="w-full md:w-1/2 overflow-hidden px-4 md:px-10 xl:px-14 py-2.5 rounded-md">
                    <Image 
                        src={"/upload/interactive-3d-animation.webp"}
                        alt="video marketing services in Dallas"
                        width={1200} height={1000} layout="responsive"
                        objectFit="cover"          
                        className="w-full rounded-xl dark:grayscale-25"                                 
                    />
                </div>
            </div>
            <div className="w-full max-w-7xl flex flex-col md:flex-row-reverse items-center justify-around gap-2.5 md:gap-0 pt-8 md:pt-14 lg:pt-16">
                <div className="w-full md:w-1/2 flex flex-col items-start justify-start gap-5 md:gap-3.5 p-2.5">
                    <h2 className="text-2xl md:text-4xl xl:text-[42px] font-semibold text-center md:text-left capitalize dark:text-gray-200 pr-4">
                        Product Visualization In 3D Animation
                    </h2>
                    <p className="text-sm md:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        Before we start with our 3D product visualization process of explainer animation and so on. We try to gather all of the clients’ requirements and then begin to create fantastic 3D animation designs that meet all clients’ requirements.
                    </p>
                    <ul className="text-sm md:text-sm pl-8 list-disc marker:text-[var(--primary-green)] text-gray-700 dark:text-gray-300 leading-relaxed">
                        <li>Our inventive rendering can effectively improve the visuals of your company products.</li>
                        <li>Rank Raze’s 3D animation simulation services provide realistic visualizations of your company product, allowing you to market it to a larger audience.</li>
                    </ul>
                </div>
                <div className="w-full md:w-1/2 overflow-hidden px-4 md:px-10 xl:px-14 py-2.5 rounded-md">
                    <Image 
                        src={"/upload/Production-animation.webp"}
                        alt="video marketing services in Dallas"
                        width={1200} height={1000} layout="responsive"
                        objectFit="cover"          
                        className="w-full rounded-xl dark:grayscale-25"                                 
                    />
                </div>
            </div>
            <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-around gap-2.5 md:gap-0 pt-8 md:pt-14 lg:pt-16">
                <div className="w-full md:w-1/2 flex flex-col items-start justify-start gap-5 md:gap-3.5 p-2.5">
                    <h2 className="text-2xl md:text-4xl xl:text-[42px] font-semibold text-center md:text-left capitalize dark:text-gray-200 pr-4">
                        3D Animation Product Modeling
                    </h2>
                    <p className="text-sm md:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        To delight the customers, RankRaze is actively involved in providing high-end 3D product Editing services.
                    </p>
                    <ul className="text-sm md:text-sm pl-8 list-disc marker:text-[var(--primary-green)] text-gray-700 dark:text-gray-300 leading-relaxed">
                        <li>While providing Editing such as marketing animation, we make certain to use a variety of technologies to achieve the desired results for our clients’ projects.</li>
                        <li>All creative 3D animation processes of our medical animation are geared towards providing you with the best 3D product rendering solutions and ensuring your complete satisfaction with our work.</li>
                        <li>We create photorealistic 3D product animation for a variety of branding, marketing, and visualization needs.</li>
                    </ul>
                </div>
                <div className="w-full md:w-1/2 overflow-hidden px-4 md:px-10 xl:px-14 py-2.5 rounded-md">
                    <Image 
                        src={"/upload/2dand3danimation_image4.webp"}
                        alt="video marketing services in Dallas"
                        width={1200} height={1000} layout="responsive"
                        objectFit="cover"          
                        className="w-full rounded-xl dark:grayscale-25"                                 
                    />
                </div>
            </div>
        </section>
        <section className="flex items-center justify-center flex-col rounded-xl mt-20 py-20 relative before:content-[''] before:absolute before:w-full before:h-full before:bg-[linear-gradient(135deg,_#3DBC9B_0%,_#37A7FF_100%)] before:-z-10 before:rounded-lg md:before:rounded-2xl lg:before:rounded-4xl">
            <h2 className="text-2xl md:text-[40px] font-bold capitalize text-white text-center px-2.5">
                2D Animation Service In Dallas
            </h2>
            <p className="text-sm md:text-sm text-white text-justify md:text-center max-w-7xl py-2.5 px-3.5">
                We are among the top creative 2D animation studios serving Dallas, Houston, Austin, and businesses across Texas. We focus on audience-driven storytelling and custom animated videos. If you are looking for specialized 2D animation, you are in the right place.
            </p>
            <p className="text-sm md:text-sm text-white text-justify md:text-center max-w-7xl pb-2.5 px-3.5">
                We produce 2D animation services at competitive rates for Texas brands—including explainers, architecture and design animation, safety and medical animation, promos, and post-production. We also deliver 2D modeling, character work, CGI, and VFX. Contact our team for innovative editing and production support.
            </p>
            <div className="w-full grid max-w-7xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2.5 gap-5 mt-3.5 2xl:mt-8">
                <div className="bg-white flex flex-col items-center justify-center gap-5 px-12 py-8 group overflow-hidden rounded-2xl -z-10">
                    <div className="w-full h-full flex flex-col items-start justify-start gap-5 relative transform transition-[width,height,top,left] duration-500">
                        <div className="w-5 h-5 md:w-8 md:h-8 lg:w-[48px] lg:h-[48px] rounded-full bg-linear-to-tr from-[#4EABF4] to-[#52B9A9] absolute -z-10 left-0 top-0 -translate-x-2 -translate-y-2 onhover-scale opacity-85"></div>
                        <div className="w-full flex flex-col items-start center-start gap-2.5">
                            <p className="capitalize font-bold text-xl text-gray-700">Finest studio for animation and VFX</p>
                            <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm">Our VFX Studio provides excellent post-production editing services such as animation, visual effects, and editing. We generate visually stunning 2D computer graphics.</p>
                        </div>
                    </div> 
                </div>
                <div className="bg-white flex flex-col items-center justify-center gap-5 px-12 py-8 group overflow-hidden rounded-2xl -z-10">
                    <div className="w-full h-full flex flex-col items-start justify-start gap-5 relative transform transition-[width,height,top,left] duration-500">
                        <div className="w-5 h-5 md:w-8 md:h-8 lg:w-[48px] lg:h-[48px] rounded-full bg-linear-to-tr from-[#4EABF4] to-[#52B9A9] absolute -z-10 left-0 top-0 -translate-x-2 -translate-y-2 onhover-scale opacity-85"></div>
                        <div className="w-full flex flex-col items-start center-start gap-2.5">
                            <p className="capitalize font-bold text-xl text-gray-700">Great 2D architectural animation</p>
                            <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm">Builders and construction companies can benefit from our architectural visualization. Simple and effective method of displaying the futuristic elevation.</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white flex flex-col items-center justify-center gap-5 px-12 py-8 group overflow-hidden rounded-2xl -z-10">
                    <div className="w-full h-full flex flex-col items-start justify-start gap-5 relative transform transition-[width,height,top,left] duration-500">
                        <div className="w-5 h-5 md:w-8 md:h-8 lg:w-[48px] lg:h-[48px] rounded-full bg-linear-to-tr from-[#4EABF4] to-[#52B9A9] absolute -z-10 left-0 top-0 -translate-x-2 -translate-y-2 onhover-scale opacity-85"></div>
                        <div className="w-full flex flex-col items-start center-start gap-2.5">
                            <p className="capitalize font-bold text-xl text-gray-700">2D Animation for Corporates</p>
                            <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm">To enhance our customers’ and their Brand Communication, we have introduced 2D Animated Corporate Video, Corporate Explainer Video, and Corporate Promotional Video.</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white flex flex-col items-center justify-center gap-5 px-12 py-8 group overflow-hidden rounded-2xl -z-10">
                    <div className="w-full h-full flex flex-col items-start justify-start gap-5 relative transform transition-[width,height,top,left] duration-500">
                        <div className="w-5 h-5 md:w-8 md:h-8 lg:w-[48px] lg:h-[48px] rounded-full bg-linear-to-tr from-[#4EABF4] to-[#52B9A9] absolute -z-10 left-0 top-0 -translate-x-2 -translate-y-2 onhover-scale opacity-85"></div>
                        <div className="w-full flex flex-col items-start center-start gap-2.5">
                            <p className="capitalize font-bold text-xl text-gray-700">Fabulous 2D ANIMATION E-LEARNING​</p>
                            <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm">We use the most up-to-date 2D animation techniques to make your Medical Animation Videos more understandable.</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white flex flex-col items-center justify-center gap-5 px-12 py-8 group overflow-hidden rounded-2xl -z-10">
                    <div className="w-full h-full flex flex-col items-start justify-start gap-5 relative transform transition-[width,height,top,left] duration-500">
                        <div className="w-5 h-5 md:w-8 md:h-8 lg:w-[48px] lg:h-[48px] rounded-full bg-linear-to-tr from-[#4EABF4] to-[#52B9A9] absolute -z-10 left-0 top-0 -translate-x-2 -translate-y-2 onhover-scale opacity-85"></div>
                        <div className="w-full flex flex-col items-start center-start gap-2.5">
                            <p className="capitalize font-bold text-xl text-gray-700">Best 2D animation</p>
                            <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm">From making videos, explainer, testimonial, product marketing videos, and video contents for your business.</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white flex flex-col items-center justify-center gap-5 px-12 py-8 group overflow-hidden rounded-2xl -z-10">
                    <div className="w-full h-full flex flex-col items-start justify-start gap-5 relative transform transition-[width,height,top,left] duration-500">
                        <div className="w-5 h-5 md:w-8 md:h-8 lg:w-[48px] lg:h-[48px] rounded-full bg-linear-to-tr from-[#4EABF4] to-[#52B9A9] absolute -z-10 left-0 top-0 -translate-x-2 -translate-y-2 onhover-scale opacity-85"></div>
                        <div className="w-full flex flex-col items-start center-start gap-2.5">
                            <p className="capitalize font-bold text-xl text-gray-700">2D SAFETY ANIMATION</p>
                            <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm">As a top 2d animation company in the UK,US,Australia, UAE and India.</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white flex flex-col items-center justify-center gap-5 px-12 py-8 group overflow-hidden rounded-2xl -z-10">
                    <div className="w-full h-full flex flex-col items-start justify-start gap-5 relative transform transition-[width,height,top,left] duration-500">
                        <div className="w-5 h-5 md:w-8 md:h-8 lg:w-[48px] lg:h-[48px] rounded-full bg-linear-to-tr from-[#4EABF4] to-[#52B9A9] absolute -z-10 left-0 top-0 -translate-x-2 -translate-y-2 onhover-scale opacity-85"></div>
                        <div className="w-full flex flex-col items-start center-start gap-2.5">
                            <p className="capitalize font-bold text-xl text-gray-700">2D MEDICAL ANIMATION</p>
                            <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm">We use the most up-to-date 2D animation techniques to make your Medical Animation Videos more understandable.</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white flex flex-col items-center justify-center gap-5 px-12 py-8 group overflow-hidden rounded-2xl -z-10">
                    <div className="w-full h-full flex flex-col items-start justify-start gap-5 relative transform transition-[width,height,top,left] duration-500">
                        <div className="w-5 h-5 md:w-8 md:h-8 lg:w-[48px] lg:h-[48px] rounded-full bg-linear-to-tr from-[#4EABF4] to-[#52B9A9] absolute -z-10 left-0 top-0 -translate-x-2 -translate-y-2 onhover-scale opacity-85"></div>
                        <div className="w-full flex flex-col items-start center-start gap-2.5">
                            <p className="capitalize font-bold text-xl text-gray-700">2D ANIMATION PRODUCT</p>
                            <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm">From micro to macro documentation, brand animations have a distinct visual representation. Using our 2D Product Animation, you can carry your intellect to life.</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white flex flex-col items-center justify-center gap-5 px-12 py-8 group overflow-hidden rounded-2xl -z-10">
                    <div className="w-full h-full flex flex-col items-start justify-start gap-5 relative transform transition-[width,height,top,left] duration-500">
                        <div className="w-5 h-5 md:w-8 md:h-8 lg:w-[48px] lg:h-[48px] rounded-full bg-linear-to-tr from-[#4EABF4] to-[#52B9A9] absolute -z-10 left-0 top-0 -translate-x-2 -translate-y-2 onhover-scale opacity-85"></div>
                        <div className="w-full flex flex-col items-start center-start gap-2.5">
                            <p className="capitalize font-bold text-xl text-gray-700">2D PROMOTIONAL ANIMATION</p>
                            <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm">We offer promotional 2D animation videos with the potential to sell your products and services.</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white flex flex-col items-center justify-center gap-5 px-12 py-8 group overflow-hidden rounded-2xl -z-10">
                    <div className="w-full h-full flex flex-col items-start justify-start gap-5 relative transform transition-[width,height,top,left] duration-500">
                        <div className="w-5 h-5 md:w-8 md:h-8 lg:w-[48px] lg:h-[48px] rounded-full bg-linear-to-tr from-[#4EABF4] to-[#52B9A9] absolute -z-10 left-0 top-0 -translate-x-2 -translate-y-2 onhover-scale opacity-85"></div>
                        <div className="w-full flex flex-col items-start center-start gap-2.5">
                            <p className="capitalize font-bold text-xl text-gray-700">Brilliant 2D ANIMATION MARKETING</p>
                            <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm">We take Marketing Videos to the next level by incorporating humorous concepts to create Brand Propagation and Product Marketing Videos.</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white flex flex-col items-center justify-center gap-5 px-12 py-8 group overflow-hidden rounded-2xl -z-10">
                    <div className="w-full h-full flex flex-col items-start justify-start gap-5 relative transform transition-[width,height,top,left] duration-500">
                        <div className="w-5 h-5 md:w-8 md:h-8 lg:w-[48px] lg:h-[48px] rounded-full bg-linear-to-tr from-[#4EABF4] to-[#52B9A9] absolute -z-10 left-0 top-0 -translate-x-2 -translate-y-2 onhover-scale opacity-85"></div>
                        <div className="w-full flex flex-col items-start center-start gap-2.5">
                            <p className="capitalize font-bold text-xl text-gray-700">2D CREATIVE DESIGN</p>
                            <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm">We Create great designs by experimenting with 2D animation techniques; investigate Concepts and Graphical Illustrations to produce compelling visuals that attract your company customers, and thus a brand.</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white flex flex-col items-center justify-center gap-5 px-12 py-8 group overflow-hidden rounded-2xl -z-10">
                    <div className="w-full h-full flex flex-col items-start justify-start gap-5 relative transform transition-[width,height,top,left] duration-500">
                        <div className="w-5 h-5 md:w-8 md:h-8 lg:w-[48px] lg:h-[48px] rounded-full bg-linear-to-tr from-[#4EABF4] to-[#52B9A9] absolute -z-10 left-0 top-0 -translate-x-2 -translate-y-2 onhover-scale opacity-85"></div>
                        <div className="w-full flex flex-col items-start center-start gap-2.5">
                            <p className="capitalize font-bold text-xl text-gray-700">SERVICE OF 2D MODELING</p>
                            <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm">We provide the best 2D modeling Editing services. 2D modeling and rendering for architectural works, 2D product modeling services, and industrial 2D modeling are all available in India, Pune, Mumbai, Delhi, Bangalore.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="w-full grid place-items-center mt-2 px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 relative">
            <div className="w-full max-w-7xl flex flex-col items-center justify-around gap-2.5 md:gap-5 py-8 md:py-14 lg:py-16 xl:py-20">
                <h3 className="text-2xl md:text-4xl xl:text-[42px] font-semibold text-center md:text-left capitalize dark:text-gray-200 pr-4">
                    3D Animation Videos
                </h3>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 md:gap-3.5 lg:gap-5">
                    <iframe
                        className="w-full aspect-[1.9/1]"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        title="Antarrtica"
                        width="640"
                        height="360"
                        src="https://www.youtube.com/embed/Bkoi95HLzCw?controls=1&rel=0&playsinline=0&cc_load_policy=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Frankraze.us&widgetid=1&forigin=https%3A%2F%2Frankraze.us%2F2d-and-3d-animation-services-in-dallas%2F&aoriginsup=1&gporigin=https%3A%2F%2Frankraze.us%2Fvideo-production-services%2F&vf=1"
                        id="widget2"
                        allowFullScreen
                        loading="lazy"
                    />
                    <iframe
                        className="w-full aspect-[1.9/1]"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        title="Yagen Robotics"
                        width="640"
                        height="360"
                        src="https://www.youtube.com/embed/hk-onloFqjQ?controls=1&rel=0&playsinline=0&cc_load_policy=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Frankraze.us&widgetid=3&forigin=https%3A%2F%2Frankraze.us%2F2d-and-3d-animation-services-in-dallas%2F&aoriginsup=1&gporigin=https%3A%2F%2Frankraze.us%2Fvideo-production-services%2F&vf=1"
                        id="widget2"
                        allowFullScreen
                        loading="lazy"
                    />
                    <iframe
                        className="w-full aspect-[1.9/1]"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        title="Car Showroom - 3D Animation (Client Work)"
                        width="640"
                        height="360"
                        src="https://www.youtube.com/embed/dbct37loN9s?controls=1&rel=0&playsinline=0&cc_load_policy=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Frankraze.us&widgetid=5&forigin=https%3A%2F%2Frankraze.us%2F2d-and-3d-animation-services-in-dallas%2F&aoriginsup=1&gporigin=https%3A%2F%2Frankraze.us%2Fvideo-production-services%2F&vf=1"
                        id="widget6"
                        allowFullScreen
                        loading="lazy"
                    />
                    <iframe
                        className="w-full aspect-[1.9/1]"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        title="3D Animation Video - Designed By Rankraze Digital Marketing"
                        width="640"
                        height="360"
                        src="https://www.youtube.com/embed/7WlkT1jjOi8?controls=1&rel=0&playsinline=0&cc_load_policy=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Frankraze.us&widgetid=7&forigin=https%3A%2F%2Frankraze.us%2F2d-and-3d-animation-services-in-dallas%2F&aoriginsup=1&gporigin=https%3A%2F%2Frankraze.us%2Fvideo-production-services%2F&vf=1"
                        id="widget8"
                        allowFullScreen
                        loading="lazy"
                    />
                    <iframe
                        className="w-full aspect-[1.9/1]"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        title="3D Animation for Swachhbox by Rankraze"
                        width="640"
                        height="360"
                        src="https://www.youtube.com/embed/V3D3jHqG3LU?controls=1&rel=0&playsinline=0&cc_load_policy=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Frankraze.us&widgetid=9&forigin=https%3A%2F%2Frankraze.us%2F2d-and-3d-animation-services-in-dallas%2F&aoriginsup=1&gporigin=https%3A%2F%2Frankraze.us%2Fvideo-production-services%2F&vf=1"
                        id="widget10"
                        allowFullScreen
                        loading="lazy"
                    />
                    <iframe
                        className="w-full aspect-[1.9/1]"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        title="3D Animation by Rankraze"
                        width="640"
                        height="360"
                        src="https://www.youtube.com/embed/D6D6V_YN3Mo?controls=1&rel=0&playsinline=0&cc_load_policy=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Frankraze.us&widgetid=11&forigin=https%3A%2F%2Frankraze.us%2F2d-and-3d-animation-services-in-dallas%2F&aoriginsup=1&gporigin=https%3A%2F%2Frankraze.us%2Fvideo-production-services%2F&vf=1"
                        id="widget12"
                        allowFullScreen
                        loading="lazy"
                    />
                </div>
            </div>
            <div className="w-full max-w-7xl flex flex-col items-center justify-around gap-2.5 md:gap-5 py-6">
                <h4 className="text-2xl md:text-4xl xl:text-[42px] font-semibold text-center md:text-left capitalize dark:text-gray-200 pr-4">
                    2D Animation Videos
                </h4>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2.5 md:gap-3.5 lg:gap-5">
                    <iframe
                        className="w-full aspect-[1.9/1]"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        title="Cowrkz - Business Centre"
                        width="640"
                        height="360"
                        src="https://www.youtube.com/embed/Jk0RvZ6dtmE?controls=1&rel=0&playsinline=0&cc_load_policy=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Frankraze.us&widgetid=13&forigin=https%3A%2F%2Frankraze.us%2F2d-and-3d-animation-services-in-dallas%2F&aoriginsup=1&gporigin=https%3A%2F%2Frankraze.us%2Fvideo-production-services%2F&vf=1"
                        id="widget14"
                        allowFullScreen
                        loading="lazy"
                    />
                    <iframe
                        className="w-full aspect-[1.9/1]"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        title="Yagen Robotics"
                        width="640"
                        height="360"
                        src="https://www.youtube.com/embed/hk-onloFqjQ?controls=1&rel=0&playsinline=0&cc_load_policy=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Frankraze.us&widgetid=15&forigin=https%3A%2F%2Frankraze.us%2F2d-and-3d-animation-services-in-dallas%2F&aoriginsup=1&gporigin=https%3A%2F%2Frankraze.us%2Fvideo-production-services%2F&vf=1"
                        id="widget16"
                        allowFullScreen
                        loading="lazy"
                    />
                </div>
            </div>
            <div className="w-full max-w-7xl flex flex-col items-center justify-around gap-2.5 md:gap-5 py-6">
                <h2 className="text-2xl md:text-4xl xl:text-[42px] font-semibold text-center md:text-left capitalize dark:text-gray-200 pr-4">
                    Most Popular Questions
                </h2>
                <div className="w-full flex flex-col md:flex-row gap-10">
                    <div className="space-y-4">

                        {/* Accordion Item 1 */}
                        <div className="bg-gray-50 rounded overflow-hidden shadow">
                            <input type="radio" name="accordion1" id="acc1" className="peer hidden" />
                            <label
                                htmlFor="acc1"
                                className="flex justify-between p-5 cursor-pointer bg-white  transition-all duration-300 peer-checked:bg-gradient-to-br peer-checked:from-[#3DBC9C] peer-checked:to-[#36aaf1]"
                            >
                                <span className="text-sm font-bold text-black peer-checked:text-white">
                                    What is SEO? How does it work?
                                </span>
                            </label>
                            <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96 p-0 peer-checked:p-5 text-gray-600 text-sm">
                                We get 2D animations and 3D animations for you, including TV, business projects, student projects, films, etc, which is remarkable for many professionals along with curious project handlings, and we are the only path for achievement in 2D & 3D animation professions in Dallas and Texas. 
                            </div>
                        </div>

                        {/* Accordion Item 2 */}
                        <div className="bg-gray-50 rounded overflow-hidden shadow">
                            <input type="radio" name="accordion1" id="acc2" className="peer hidden" />
                            <label
                                htmlFor="acc2"
                                className="flex justify-between p-5 cursor-pointer bg-white   peer-checked:bg-gradient-to-br peer-checked:from-[#3DBC9C] peer-checked:to-[#36aaf1]">
                                <span className="text-sm font-bold text-black peer-checked:text-white">
                                What are the major industries in which you excel?
                                </span>
                            </label>
                            <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96 p-0 peer-checked:p-5 text-gray-600 text-sm">
                                Video game design and development is a large and expanding industry which we are well expertise in, and corporate animation will always be relevant and profitable. Our Animators offer 2D animation & 3D animation in Dallas and Texas and are good in architecture, medicine, advertising, and education. 
                            </div>
                        </div>

                        {/* Accordion Item 3 */}
                        <div className="bg-gray-50 rounded overflow-hidden shadow">
                            <input type="radio" name="accordion1" id="acc3" className="peer hidden" />
                            <label
                                htmlFor="acc3"
                                className="flex justify-between p-5 cursor-pointer bg-white  transition-all duration-300 peer-checked:bg-gradient-to-br peer-checked:from-[#3DBC9C] peer-checked:to-[#36aaf1]"
                            >
                                <span className="text-sm font-bold text-black peer-checked:text-white">
                                    Can we expect project submissions within the deadline?
                                </span>
                            </label>
                            <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96 p-0 peer-checked:p-5 text-gray-600 text-sm">
                                We use modernized 3D animation & 2D animation tools to create good animation methods for you, which are easier to use, more powerful, and more widespread, and the number of areas in which we are working is expanding, so we submit your projects on time and with 100 % perfected services in Dallas and Texas! 
                            </div>
                        </div>

                        {/* Accordion Item 4 */}
                        <div className="bg-gray-50 rounded overflow-hidden shadow">
                            <input type="radio" name="accordion1" id="acc4" className="peer hidden" />
                            <label
                                htmlFor="acc4"
                                className="flex justify-between p-5 cursor-pointer bg-white   peer-checked:bg-gradient-to-br peer-checked:from-[#3DBC9C] peer-checked:to-[#36aaf1]">
                                <span className="text-sm font-bold text-black peer-checked:text-white">
                                How do you carry out the customer animation process? 
                                </span>
                            </label>
                            <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96 p-0 peer-checked:p-5 text-gray-600 text-sm">
                                We start with a proper customer requirement inquiry. It will be simple, hassle-free, more competitive, and non-repetitive for 3D animation & 2D animations in Dallas and Texas, but that’s exactly what we do to have a passion and a love for what you do.
                            </div>
                        </div>

                        {/* Accordion Item 5 */}
                        <div className="bg-gray-50 rounded overflow-hidden shadow">
                            <input type="radio" name="accordion1" id="acc5" className="peer hidden" />
                            <label
                                htmlFor="acc5"
                                className="flex justify-between p-5 cursor-pointer bg-white  transition-all duration-300 peer-checked:bg-gradient-to-br peer-checked:from-[#3DBC9C] peer-checked:to-[#36aaf1]"
                            >
                                <span className="text-sm font-bold text-black peer-checked:text-white">
                                    How do clients get work completion updates?
                                </span>
                            </label>
                            <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96 p-0 peer-checked:p-5 text-gray-600 text-sm">
                                As a digital marketing agency in Bangalore, we focus on measurable results, providing a great ROI, and building a strong partnership with you. But don’t take our word for it, you can see our testimonials and case studies to know about our work. You can also connect with one of our experts to know about our services in detail. 
                            </div>
                        </div>

                        {/* Accordion Item 6 */}
                        <div className="bg-gray-50 rounded overflow-hidden shadow">
                            <input type="radio" name="accordion1" id="acc6" className="peer hidden" />
                            <label
                                htmlFor="acc6"
                                className="flex justify-between p-5 cursor-pointer bg-white   peer-checked:bg-gradient-to-br peer-checked:from-[#3DBC9C] peer-checked:to-[#36aaf1]">
                                <span className="text-sm font-bold text-black peer-checked:text-white">
                                    Are your Animator professionals well-versed?
                                </span>
                            </label>
                            <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96 p-0 peer-checked:p-5 text-gray-600 text-sm">
                                Because we have well-experienced and stop-motion professionals with great skills, our 3D animations & 2D animations are always world class. And, there are experienced professionals in our animation studio for the perfect work process, so everything will end well.
                            </div>
                        </div>

                        {/* Accordion Item 7 */}
                        <div className="bg-gray-50 rounded overflow-hidden shadow">
                            <input type="radio" name="accordion1" id="acc7" className="peer hidden" />
                            <label
                                htmlFor="acc7"
                                className="flex justify-between p-5 cursor-pointer bg-white   peer-checked:bg-gradient-to-br peer-checked:from-[#3DBC9C] peer-checked:to-[#36aaf1]">
                                <span className="text-sm font-bold text-black peer-checked:text-white">
                                    What kind of professionals do you have in your animation studio?
                                </span>
                            </label>
                            <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96 p-0 peer-checked:p-5 text-gray-600 text-sm">
                                Our 2D animation and 3D animation pipelines are well covered in our large studios, with multiple roles to perform well in Dallas and Texas. Among these positions are: 

                                <ol className="list-disc list-inside mb-2">
                                    <li>Producer – The studio’s owner, Animation Director Essentially, the coordinator of all creatives.</li>
                                    <li>Scriptwriters and editors who collaborate closely with directors and clients.</li>
                                    <li>Character Creator- for flawless creations</li>
                                    <li>Texture Artists and Digital Painters, Lighting Technical Directors, Inbetweeners, Compositors, Sound Designers, and so on.</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">

                        {/* Accordion Item 1 */}
                        <div className="bg-gray-50 rounded overflow-hidden shadow">
                            <input type="radio" name="accordion2" id="acc11" className="peer hidden" />
                            <label
                                htmlFor="acc11"
                                className="flex justify-between p-5 cursor-pointer bg-white  transition-all duration-300 peer-checked:bg-gradient-to-br peer-checked:from-[#3DBC9C] peer-checked:to-[#36aaf1]"
                            >
                                <span className="text-sm font-bold text-black peer-checked:text-white">
                                    Do you have a separate VFX theater for animation creation?
                                </span>
                            </label>
                            <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96 p-0 peer-checked:p-5 text-gray-600 text-sm">
                                VFX is a huge process in 2D animation & 3D animation that is usually completed through a series of trials with exceptional technical skills in our separate VFX theater, with proper consistency and specific flair. 
                            </div>
                        </div>

                        {/* Accordion Item 2 */}
                        <div className="bg-gray-50 rounded overflow-hidden shadow">
                            <input type="radio" name="accordion2" id="acc12" className="peer hidden" />
                            <label
                                htmlFor="acc12"
                                className="flex justify-between p-5 cursor-pointer bg-white   peer-checked:bg-gradient-to-br peer-checked:from-[#3DBC9C] peer-checked:to-[#36aaf1]">
                                <span className="text-sm font-bold text-black peer-checked:text-white">
                                    Where do you get your ideas for our animation process? 
                                </span>
                            </label>
                            <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96 p-0 peer-checked:p-5 text-gray-600 text-sm">
                                VFX is a huge process in 2D animation & 3D animation that is usually completed through a series of trials with exceptional technical skills in our separate VFX theater, with proper consistency and specific flair.
                            </div>
                        </div>

                        {/* Accordion Item 3 */}
                        <div className="bg-gray-50 rounded overflow-hidden shadow">
                            <input type="radio" name="accordion2" id="acc13" className="peer hidden" />
                            <label
                                htmlFor="acc13"
                                className="flex justify-between p-5 cursor-pointer bg-white  transition-all duration-300 peer-checked:bg-gradient-to-br peer-checked:from-[#3DBC9C] peer-checked:to-[#36aaf1]"
                            >
                                <span className="text-sm font-bold text-black peer-checked:text-white">
                                    Where do you get your ideas for our animation process?
                                </span>
                            </label>
                            <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96 p-0 peer-checked:p-5 text-gray-600 text-sm">
                                When you’re stuck for ideas, go for a walk or muse in front of a mood board. For huge 2D animations & 3D animations inspirations, we search the internet, which is a fantastic resource in Dallas and Texas. 
                            </div>
                        </div>

                        {/* Accordion Item 4 */}
                        <div className="bg-gray-50 rounded overflow-hidden shadow">
                            <input type="radio" name="accordion2" id="acc14" className="peer hidden" />
                            <label
                                htmlFor="acc14"
                                className="flex justify-between p-5 cursor-pointer bg-white   peer-checked:bg-gradient-to-br peer-checked:from-[#3DBC9C] peer-checked:to-[#36aaf1]">
                                <span className="text-sm font-bold text-black peer-checked:text-white">
                                     Can you tell me about your previous animation work?
                                </span>
                            </label>
                            <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96 p-0 peer-checked:p-5 text-gray-600 text-sm">
                                We worked with many clients for 2D & 3D animations, including rivanta for real estate, robotics for yagen industries, and many other top industries, and all of them were completely satisfied.
                            </div>
                        </div>

                        {/* Accordion Item 5 */}
                        <div className="bg-gray-50 rounded overflow-hidden shadow">
                            <input type="radio" name="accordion2" id="acc15" className="peer hidden" />
                            <label
                                htmlFor="acc15"
                                className="flex justify-between p-5 cursor-pointer bg-white  transition-all duration-300 peer-checked:bg-gradient-to-br peer-checked:from-[#3DBC9C] peer-checked:to-[#36aaf1]"
                            >
                                <span className="text-sm font-bold text-black peer-checked:text-white">
                                    How do you propose and commit to a project?
                                </span>
                            </label>
                            <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96 p-0 peer-checked:p-5 text-gray-600 text-sm">
                                We’ll start by submitting demo work samples. Recognize your work. and make a commitment to it. step-by-step procedure with correct and authorized completions. 
                            </div>
                        </div>

                        {/* Accordion Item 6 */}
                        <div className="bg-gray-50 rounded overflow-hidden shadow">
                            <input type="radio" name="accordion2" id="acc16" className="peer hidden" />
                            <label
                                htmlFor="acc16"
                                className="flex justify-between p-5 cursor-pointer bg-white   peer-checked:bg-gradient-to-br peer-checked:from-[#3DBC9C] peer-checked:to-[#36aaf1]">
                                <span className="text-sm font-bold text-black peer-checked:text-white">
                                    Is your service more affordable than that of other service providers?
                                </span>
                            </label>
                            <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96 p-0 peer-checked:p-5 text-gray-600 text-sm">
                                When it comes to services, we are top-notch and flawless, but when it comes to service costs, we are low and affordable, and we understand your concern, so we provide 2D animation & 3D animation services in Dallas and Texas within your budget. 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}