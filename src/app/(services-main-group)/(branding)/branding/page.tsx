import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import ContactForm from "@/app/components/UI/AllServicePageContactForm";

export const metadata:Metadata = {
    title: "Branding agency, Re-branding company in Chennai, Bangalore, India - Rankraze",
    description: "Create your brand or rebrand your company by using Rankraze. It is the most effective digital marketing agency in Chennai. We help companies to brand and rebrand their businesses via digital marketing. Get in touch with us to know more!",
    
    keywords: [
    "branding agency in Chennai",
    "best branding agency in Chennai",
    "best branding agency in Chennai",
    "best advertising agency in Chennai",
    "outdoor advertising agency in Chennai",
    "best advertising agency in Chennai",
    "rebranding agency",
    "rebranding services",
    "branding agency for startups",
    "branding agency in India",
    "top branding agency in India",

    ],

    alternates: {
        canonical: "https://rankraze.com/branding",
    },

    openGraph: {
        title: "Branding and Rebranding",
        description: "Create your brand or rebrand your company by using Rankraze. It is the most effective digital marketing agency in Chennai. We help companies to brand and rebrand their businesses via digital marketing. Get in touch with us to know more!",
        url: "https://rankraze.com/branding",
        siteName: "Rankraze",
        images: [
        {
            url: "/upload/1-2.webp",
            width: 513,
            height: 616,
            alt: "1-2.webp",
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
                            Reinvigorating Brands for Greater Success
                        </h1>
                        <h2 className="text-sm md:text-sm text-gray-700 dark:text-gray-300 text-center md:text-left pr-4">
                            Welcome to Rankraze, the branding  specialists. We provide a range of branding services designed to help you build a powerful brand for your business.
                        </h2>
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
                    <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-justify text-sm md:text-base">
                        Rankraze believes you only get one chance to make a first impression. It’s our job as a professional branding agency to make sure it’s a good one. The one that represents the personality of your brand, connects with your audience, and achieves commercial success.
                    </p>
                    <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-justify text-sm md:text-base">
                        A perfectly designed, professional brand design plays a key role in any successful business. Getting this right is what the branding specialists at the Rankraze branding agency specialize in.
                    </p>
                    <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-justify text-sm md:text-base">
                        We design brands that transcend all mediums and platforms, from print to digital.
                    </p>
                    <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-justify text-sm md:text-base">
                        Ranked among the top branding agencies in Chennai, Rankraze believes that brand design should not only look good aesthetically, but it must deliver an appropriate message to its audience with a specific outcome in mind. Through creativity and strategic thinking, we communicate your core brand values to the target audience in a way that creates a lasting impression. This is the benefit of working with a branding agency like Rankraze in Chennai , India that values brand strategy.
                    </p>
                </div>
                <div className="w-full md:w-1/2 overflow-hidden flex items-center justify-center px-4 py-2.5 rounded-md">
                    <Image 
                    src={"/upload/branding.webp"}
                    alt="branding  services in chennai"
                    width={1280} height={600} layout="responsive"
                    objectFit="cover"          
                    className="rounded-xl dark:grayscale-25"                                 
                    />
                </div>
            </div>
            <div className="w-full max-w-7xl flex flex-col md:flex-row-reverse items-stretch justify-center">
                <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-3 md:gap-3.5 p-2.5">
                    <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-justify text-sm md:text-base">
                        Your business has grown. Your vision and mission statement has become obsolete. Your target audience has changed.
                    </p>
                    <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-justify text-sm md:text-base">
                        Do you feel such things in your mind? It’s time to give your brand an update.
                    </p>
                    <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-justify text-sm md:text-base">
                        Rebranding is where a brand changes its Logo, Name, Image, Website, Advertising, and Marketing Strategy to make it completely different from its previous look and stay ahead of its competitors.
                    </p>
                    <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-justify text-sm md:text-base">
                        There are many reasons why a business might consider rebranding. It could be due to
                    </p>
                    <div className="w-full px-2.5 md:px-4 lg:px-6 2xl:px-8">
                        <ul className="pl-1 flex flex-col gap-1.5 md:gap-2 list-disc marker:text-[var(--primary-green)] text-gray-700 dark:text-gray-300 leading-relaxed">
                            <li className="flex items-start gap-2">
                                <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                                <span className="">
                                    A merger/acquisition
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                                <span className="">
                                    A need to reposition the business in the marketplace
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                                <span className="">
                                    A change in the business strategy
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                                <span className="">
                                    Differentiating your brand from your competitors
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                                <span className="">
                                    Increasing sales and strengthening your market reach
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-full md:w-1/2 overflow-hidden flex items-center justify-center px-4 py-2.5 rounded-md">
                    <Image 
                    src={"/upload/branding-image2-1024x614.webp"}
                    alt="what is content marketing"
                    width={1280} height={600} layout="responsive"
                    objectFit="cover"          
                    className="rounded-xl dark:grayscale-25"                                 
                    />
                </div>
            </div>
            <div className="w-full max-w-7xl flex flex-col md:flex-row items-stretch justify-center">
                <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-3 md:gap-3.5 p-2.5">
                    <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-justify text-sm md:text-base">
                        Whatever the reason is, maintaining a clear and compelling identity is key to the continued growth and success of a business.
                    </p>
                    <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-justify text-sm md:text-base">
                        Now you know what rebranding is and when you require it. But, what if you don’t know where to start. This is when you can approach Rankraze, a branding  agency in Chennai, India
                    </p>
                    <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-justify text-sm md:text-base">
                        As a professional rebranding agency in Chennai, we are experts at delivering rebrands for companies big and small in a vast array of industries. At Rankraze, we take an innovative approach to creating a brand that reflects your business and creating an impression that conveys a message to your customers.
                    </p>
                    <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-justify text-sm md:text-base">
                        If your brand is ready to take a new look and grow exponentially, then book a free consultation with our brand specialists today.
                    </p>
                </div>
                <div className="w-full md:w-1/2 overflow-hidden flex items-center justify-center px-4 py-2.5 rounded-md">
                    <Image 
                    src={"/upload/Branding-image3-1024x683.webp"}
                    alt="branding  services in chennai"
                    width={1280} height={600} layout="responsive"
                    objectFit="cover"          
                    className="rounded-xl dark:grayscale-25"                                 
                    />
                </div>
            </div>
        </section>
        <section className="w-full grid place-items-center mt-20 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 rounded-xl md:rounded-4xl bg-[url('/upload/PPC-banner-scaled.webp')] bg-no-repeat bg-cover bg-center relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#00000090] overflow-hidden">
            <div className="w-full max-w-7xl flex flex-col items-center justify-center gap-6 px-4 md:px-6 lg:px-10 my-20 z-10">
                <h2 className="text-2xl lg:text-4xl text-white font-semibold text-center lg:text-left">
                    Offering a host of services to take your brand to the next level.
                </h2>
                <p className="text-white text-sm md:text-sm text-center tracking-tight md:tracking-normal">
                    Our team of branding specialists can build your brand from the ground up.
                </p>
                <div className="w-full grid max-w-7xl grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-2.5 gap-5 mt-3.5 2xl:mt-8">
                    <div className="bg-white flex flex-col items-center justify-center gap-5 px-12 py-8 group overflow-hidden rounded-2xl -z-10">
                        <div className="w-full h-full flex flex-col items-start justify-start gap-5 relative transform transition-[width,height,top,left] duration-500">
                            <div className="w-5 h-5 md:w-8 md:h-8 lg:w-[48px] lg:h-[48px] rounded-full bg-linear-to-tr from-[#4EABF4] to-[#52B9A9] absolute -z-10 left-0 top-0 -translate-x-2 -translate-y-2 onhover-scale opacity-85"></div>
                            <div className="w-full h-full flex flex-col items-start justify-around text-start gap-2.5">
                                <span className="capitalize font-bold text-xl text-gray-700">Brand Creation</span>
                                <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm">
                                    We create brands from scratch for businesses across a range of sectors and categories.
                                </p>
                            </div>
                        </div> 
                    </div>
                    <div className="bg-white flex flex-col items-center justify-center gap-5 px-12 py-8 group overflow-hidden rounded-2xl -z-10">
                        <div className="w-full h-full flex flex-col items-start justify-start gap-5 relative transform transition-[width,height,top,left] duration-500">
                            <div className="w-5 h-5 md:w-8 md:h-8 lg:w-[48px] lg:h-[48px] rounded-full bg-linear-to-tr from-[#4EABF4] to-[#52B9A9] absolute -z-10 left-0 top-0 -translate-x-2 -translate-y-2 onhover-scale opacity-85"></div>
                            <div className="w-full h-full flex flex-col items-start justify-around text-start gap-2.5">
                                <span className="capitalize font-bold text-xl text-gray-700">Rebranding</span>
                                <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm">
                                    We transform your brand into a clearer, more concise, and more successful one.
                                </p>
                            </div>
                        </div> 
                    </div>
                    <div className="bg-white flex flex-col items-center justify-center gap-5 px-12 py-8 group overflow-hidden rounded-2xl -z-10">
                        <div className="w-full h-full flex flex-col items-start justify-start gap-5 relative transform transition-[width,height,top,left] duration-500">
                            <div className="w-5 h-5 md:w-8 md:h-8 lg:w-[48px] lg:h-[48px] rounded-full bg-linear-to-tr from-[#4EABF4] to-[#52B9A9] absolute -z-10 left-0 top-0 -translate-x-2 -translate-y-2 onhover-scale opacity-85"></div>
                            <div className="w-full h-full flex flex-col items-start justify-around text-start gap-2.5">
                                <span className="capitalize font-bold text-xl text-gray-700">Naming and Trademarks</span>
                                <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm">
                                    We also take care of the relevant naming and trademarking processes and procedures.
                                </p>
                            </div>
                        </div> 
                    </div>
                    <div className="bg-white flex flex-col items-center justify-center gap-5 px-12 py-8 group overflow-hidden rounded-2xl -z-10">
                        <div className="w-full h-full flex flex-col items-start justify-start gap-5 relative transform transition-[width,height,top,left] duration-500">
                            <div className="w-5 h-5 md:w-8 md:h-8 lg:w-[48px] lg:h-[48px] rounded-full bg-linear-to-tr from-[#4EABF4] to-[#52B9A9] absolute -z-10 left-0 top-0 -translate-x-2 -translate-y-2 onhover-scale opacity-85"></div>
                            <div className="w-full h-full flex flex-col items-start justify-around text-start gap-2.5">
                                <span className="capitalize font-bold text-xl text-gray-700">Style Guides</span>
                                <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm">
                                    Our style guide ensures that your brand messages remain consistent across all touchpoints.
                                </p>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </section>
        <section className="w-full grid place-items-center mt-20 px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 relative">
            <div className="w-full max-w-7xl flex flex-col items-stretch justify-center gap-3 md:gap-5">
                <div className="w-full flex flex-col items-center justify-center gap-3 md:gap-3.5 p-2.5">
                    <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-justify md:text-center text-sm md:text-base px-2.5">
                        From researching to creating a brand strategy that explains your brand’s unique features and values, to creating a visual identity for your brand through logo designing and launching your new or updated brand to the market, Rankraze has everything covered. Being a leading digital marketing company in Chennai, India we can also help you with marketing campaigns to enhance your brand awareness.
                    </p>
                </div>
                <div className="w-full flex items-stretch justify-stretch gap-2">
                    <div className="flex flex-col gap-3 items-stretch justify-stretch">
                        <button className="md:text-lg font-semibold capitalize border border-[var(--primary-green)] py-2 px-12 text-gray-600 dark:text-gray-300 rounded-md cursor-pointer"
                        >
                            1. brand creation
                        </button>
                        <button className="md:text-lg font-semibold capitalize border border-[var(--primary-green)] py-2 px-12 text-gray-600 dark:text-gray-300 rounded-md cursor-pointer"
                        >
                            2. brand strategy
                        </button>
                        <button className="md:text-lg font-semibold capitalize border border-[var(--primary-green)] py-2 px-12 text-gray-600 dark:text-gray-300 rounded-md cursor-pointer"
                        >
                            3. brand design
                        </button>
                        <button className="md:text-lg font-semibold capitalize border border-[var(--primary-green)] py-2 px-12 text-gray-600 dark:text-gray-300 rounded-md cursor-pointer"
                        >
                            4. brand marketing
                        </button>
                    </div>
                    <div className="flex-1 flex overflow-hidden shrink max-h-60">
                        <div className="w-full h-[400%] flex flex-col" id="scroll-container">
                            <div className="w-full h-1/4 flex flex-col items-start justify-around">
                                <p className="text-sm md:text-base dark:text-gray-200 leading-snug">
                                    <span className="font-semibold">Desk Research –</span> We analyze your existing data to have a thorough understanding of your business. This helps us review brand strategy, marketing plans, campaigns, and more before customizing your branding service.
                                </p>
                                <p className="text-sm md:text-base dark:text-gray-200 leading-snug">
                                    <span className="font-semibold">Market Research – </span> We conduct qualitative and quantitative market research for your business. This helps us understand your position among the competitors in the market, which can help us in making clever decisions to increase your brand awareness.
                                </p>
                                <p className="text-sm md:text-base dark:text-gray-200 leading-snug">
                                    <span className="font-semibold">Brand Tracking –</span> We monitor your brand’s performance over a specific period to understand how your brand is perceived, how your marketing activities are powerful in conveying your desired messages, and the impact of your brand and communications.
                                </p>
                                <p className="text-sm md:text-base dark:text-gray-200 leading-snug">
                                    <span className="font-semibold">Brand Insights and Recommendations –</span> Based on all the above, our brand specialists will generate a brand insights report which will serve as a foundation for the development of your brand. These insights will also be presented to you.
                                </p>
                            </div>
                            <div className="w-full h-1/4 flex flex-col items-start justify-around">
                                <p className="text-sm md:text-base dark:text-gray-200 leading-snug">
                                    <span className="font-semibold">Brand Positioning –</span> Our brand strategists apply their creativity and strategic thinking to your brand insights to create a unique essence for your brand.
                                </p>
                                <p className="text-sm md:text-base dark:text-gray-200 leading-snug">
                                    <span className="font-semibold">Brand Perception – </span> Customer value proposition (CVP) defines how your brand is perceived by your target audience. Employee value proposition (EVP) defines how a motivated employee views your brand’s vision and values.
                                </p>
                                <p className="text-sm md:text-base dark:text-gray-200 leading-snug">
                                    Rankraze uses proven tools, techniques, workshops, and stakeholder engagement to define and refine your CVP and EVP.
                                </p>
                                <p className="text-sm md:text-base dark:text-gray-200 leading-snug">
                                    <span className="font-semibold">Brand Architecture –</span> Brand architecture allows us to plan, organize, and manage your brand in the market. In simple words, it is the structure of the brand strategy. It defines how your brand will be presented at a corporate, divisional, product, and service level. 
                                </p>
                            </div>
                            <div className="w-full h-1/4 flex flex-col items-start justify-around">
                                <p className="text-sm md:text-base dark:text-gray-200 leading-snug">
                                    <span className="font-semibold">Brand Positioning –</span> Our brand strategists apply their creativity and strategic thinking to your brand insights to create a unique essence for your brand.
                                </p>
                                <p className="text-sm md:text-base dark:text-gray-200 leading-snug">
                                    <span className="font-semibold">Brand Perception – </span> Customer value proposition (CVP) defines how your brand is perceived by your target audience. Employee value proposition (EVP) defines how a motivated employee views your brand’s vision and values.
                                </p>
                                <p className="text-sm md:text-base dark:text-gray-200 leading-snug">
                                    Rankraze uses proven tools, techniques, workshops, and stakeholder engagement to define and refine your CVP and EVP.
                                </p>
                                <p className="text-sm md:text-base dark:text-gray-200 leading-snug">
                                    <span className="font-semibold">Brand Architecture –</span> Brand architecture allows us to plan, organize, and manage your brand in the market. In simple words, it is the structure of the brand strategy. It defines how your brand will be presented at a corporate, divisional, product, and service level. 
                                </p>
                            </div>
                            <div className="w-full h-1/4 flex flex-col items-start justify-around">
                                <p className="text-sm md:text-base dark:text-gray-200 leading-snug">
                                    <span className="font-semibold">Website Design and Development –</span> As a leading digital marketing agency in Chennai, India we know that in this digital world a website is the face of your business. Our team develops highly adaptive, responsive, and intuitive website designs that allure customer and brings in more traffic for your business.
                                </p>
                                <p className="text-sm md:text-base dark:text-gray-200 leading-snug">
                                    <span className="font-semibold">Digital Marketing – </span> Being the core of Rankraze, we go above and beyond to market your new or updated brand. We offer Search Engine Optimization (SEO), Search Engine Marketing (SEM), Social Media Marketing (SMM), and more, to increase your brand’s visibility and bring in more revenue for your business.
                                </p>
                                <p className="text-sm md:text-base dark:text-gray-200 leading-snug">
                                    <span className="font-semibold">Copywriting  –</span> Our content creators can bring life to your brand through their words. We create copy that instantly connects with your target audience and delivers the exact message of your brand.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-7xl flex flex-col items-stretch justify-center">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2.5 gap-5 mt-3.5 2xl:mt-8">
                    <div className="w-full rounded-md p-3 md:p-4 lg:p-8 flex flex-col items-center justify-center gap-2.5 md:gap-3 border border-gray-200 shadow-[0px_4px_8px_rgba(0,0,0,0.08),0px_-4px_8px_rgba(0,0,0,0.05)] dark:shadow-[0px_4px_8px_rgba(255,255,255,0.08),0px_-4px_8px_rgba(255,255,255,0.05)]">
                        <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-[var(--primary-green)] flex items-center justify-center">
                            <i className="ri-shield-user-fill text-3xl md:text-4xl lg:text-5xl text-white"></i>
                        </div>
                        <h3 className="text-lg md:text-xl font-medium dark:text-gray-200">
                            Experience
                        </h3>
                        <span className="text-sm md:text-base text-center font-medium text-gray-600 dark:text-gray-400">
                            It is our experience in this field that allows us to work efficiently and seamlessly without wasting your time or money.
                        </span>
                    </div>
                    <div className="w-full rounded-md p-3 md:p-4 lg:p-8 flex flex-col items-center justify-center gap-2.5 md:gap-3 border border-gray-200 shadow-[0px_4px_8px_rgba(0,0,0,0.08),0px_-4px_8px_rgba(0,0,0,0.05)] dark:shadow-[0px_4px_8px_rgba(255,255,255,0.08),0px_-4px_8px_rgba(255,255,255,0.05)]">
                        <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-[var(--primary-green)] flex items-center justify-center">
                            <i className="ri-lightbulb-flash-fill text-3xl md:text-4xl lg:text-5xl text-white"></i>
                        </div>
                        <h3 className="text-lg md:text-xl font-medium dark:text-gray-200">
                            Creative
                        </h3>
                        <span className="text-sm md:text-base text-center font-medium text-gray-600 dark:text-gray-400">
                            We start from scratch and apply our true creativity to your branding project to give you the best output.
                        </span>
                    </div>
                    <div className="w-full rounded-md p-3 md:p-4 lg:p-8 flex flex-col items-center justify-center gap-2.5 md:gap-3 border border-gray-200 shadow-[0px_4px_8px_rgba(0,0,0,0.08),0px_-4px_8px_rgba(0,0,0,0.05)] dark:shadow-[0px_4px_8px_rgba(255,255,255,0.08),0px_-4px_8px_rgba(255,255,255,0.05)]">
                        <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-[var(--primary-green)] flex items-center justify-center">
                            <i className="ri-shake-hands-fill text-3xl md:text-4xl lg:text-5xl text-white"></i>
                        </div>
                        <h3 className="text-lg md:text-xl font-medium dark:text-gray-200">
                            Reliable
                        </h3>
                        <span className="text-sm md:text-base text-center font-medium text-gray-600 dark:text-gray-400">
                            Rankraze has a team of branding specialists whom you can rely on to get your business’s branding strategies up and running.
                        </span>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}