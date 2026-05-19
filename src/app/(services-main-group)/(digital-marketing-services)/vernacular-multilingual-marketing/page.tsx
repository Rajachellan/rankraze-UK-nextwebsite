import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import ContactForm from "@/app/components/UI/AllServicePageContactForm";

export const metadata:Metadata = {
    title: "Vernacular & Multilingual Marketing | Rankraze Texas",
    description: "Advertise your brand in multiple languages. We assist your business in reaching out to larger customers. Promote your brand in its native language, and boost your sales to every single language visitor. Get in touch to know more!",
    
    keywords: [
        "multilingual content marketing",
        "multilingual digital marketing",
        "multilingual digital marketing agency",
        "multilingual marketing",
        "multilingual marketing consultancy",
        "multilingual marketing services",
        "multilingual marketing services company USA",
        "multilingual search marketing",
        "best vernacular content writing agency",
        "best vernacular content writing agency in USA",
        "multilingual marketing Texas",
        "native advertising agency in Dallas",
        "vernacular ads company in Texas",
        "vernacular advertising Services in Dallas",
        "vernacular content writing company in USA",
        "vernacular marketing",
        "vernacular marketing company",
        "vernacular marketing service",
        "vernacular Seo services"
    ],
                
    alternates: {
        canonical: "https://rankraze.us/vernacular-multilingual-marketing",
    },

    openGraph: {
        title: "Vernacular & Multilingual Marketing | Rankraze Texas",
        description: "Advertise your brand in multiple languages. We assist your business in reaching out to larger customers. Promote your brand in its native language, and boost your sales to every single language visitor. Get in touch to know more!",
        url: "https://rankraze.us/vernacular-multilingual-marketing",
        siteName: "Rankraze",
        images: [
        {
            url: "upload/vernacular-startuptalky-2-removebg-preview-1.webp",
            width: 700,
            height: 501,
            alt: "Vernacular-startuptalky.webp",
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
                            Vernacular Multilingual Marketing
                        </h1>
                        <p className="text-sm md:text-sm text-gray-700 dark:text-gray-300 text-center md:text-left pr-4">
                            Multilingual/Vernacular marketing services, tailored to connect with your audience across borders
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
                    <h2 className="text-2xl md:text-4xl xl:text-[42px] font-semibold text-center md:text-left capitalize dark:text-gray-200 pr-4">
                        Connect With Your Target Audience In Their Native Language
                    </h2>
                    <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-justify text-sm md:text-base">
                        Digital marketing has evolved. You can now easily build connections outside your region or even your country and sell your products or services irrespective of all the differences. In such a connected world, where expansion across borders becomes easy, why does language become a barrier to connecting with your target audience?
                    </p>
                    <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-justify text-sm md:text-base">
                        If you’re a business that is located in London, UK or any part of the world or who has an audience that is based in various places with different languages – you need to be ready to tailor your message based on the varying linguistics.
                    </p>
                    <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-justify text-sm md:text-base">
                        That’s where a multilingual digital marketing agency like Rankraze steps in.
                    </p>
                </div>
                <div className="w-full md:w-1/2 overflow-hidden flex items-center justify-center px-4 py-2.5 rounded-md">
                    <Image 
                    src={"/upload/vernacular-startuptalky-2-removebg-preview-1.webp"}
                    alt="vernacular multilingual Services in Dallas"
                    width={800} height={600} layout="responsive"
                    objectFit="cover"          
                    className="rounded-xl"                                 
                    />
                </div>
            </div>
        </section>
        <section className="w-full grid place-items-center mt-20 px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 relative">
            <div className="w-full max-w-7xl flex flex-col md:flex-row-reverse items-stretch justify-center">
                <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-3 md:gap-3.5 p-2.5">
                    <h2 className="text-2xl md:text-4xl xl:text-[42px] font-semibold text-center md:text-left capitalize dark:text-gray-200 pr-4">
                        Best Multilingual Marketing Company
                    </h2>
                    <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-justify text-sm md:text-base">
                        With years of experience in digital marketing, Rankraze is currently one of the leading providers of multilingual digital marketing Services in Dallas. Trusted by some of the best brands and companies, we set industry standards in speed, accuracy, and reliability. Hindi, Kannada, or others, we can create marketing collaterals, in your required language.
                    </p>
                </div>
                <div className="w-full md:w-1/2 overflow-hidden flex items-center justify-center px-4 py-2.5 rounded-md">
                    <Image 
                    src={"/upload/world-image.webp"}
                    alt="vernacular multilingual Services in Dallas"
                    width={800} height={600} layout="responsive"
                    objectFit="cover"          
                    className="rounded-xl px-6 md:px-12 xl:px-24"                                 
                    />
                </div>
            </div>
        </section>
        <section className="w-full grid place-items-center mt-20 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 rounded-xl md:rounded-4xl bg-[url('/upload/SEO-image3-scaled.webp')] bg-no-repeat bg-cover bg-center relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#00000090] overflow-hidden">
            <div className="w-full max-w-7xl flex flex-col items-center justify-center gap-6 px-4 md:px-6 lg:px-10 my-20 z-10">
                <h2 className="text-2xl lg:text-4xl text-white font-semibold text-center lg:text-left">
                    Our Vernacular Marketing Services Cover
                </h2>
                <p className="text-white text-center max-w-5xl leading-relaxed tracking-wide text-sm md:text-sm">
                    Multilingual Marketing Services from Rankraze helps you identify the right target audience and languages based on real data. We develop a realistic plan and follow a bespoke marketing approach to target each language and audience, including the right mix of digital marketing services like SEO, PPC, and Social Media.
                </p>
                <div className="w-full grid max-w-7xl grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-2.5 gap-5 mt-3.5 2xl:mt-8">
                    <div className="bg-white flex flex-col items-center justify-center gap-5 px-12 py-8 group overflow-hidden rounded-2xl -z-10">
                        <div className="w-full h-full flex flex-col items-start justify-start gap-5 relative transform transition-[width,height,top,left] duration-500">
                            <div className="w-5 h-5 md:w-8 md:h-8 lg:w-[48px] lg:h-[48px] rounded-full bg-linear-to-tr from-[#4EABF4] to-[#52B9A9] absolute -z-10 left-0 top-0 -translate-x-2 -translate-y-2 onhover-scale opacity-85"></div>
                            <div className="w-full flex flex-col items-start center-start gap-2.5">
                                <p className="capitalize md:text-lg text-gray-700">Multilingual Content Writing</p>
                                <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm md:text-sm">
                                    We offer high-quality content writing services customized in several languages and formats.
                                </p>
                            </div>
                        </div> 
                    </div>
                    <div className="bg-white flex flex-col items-center justify-center gap-5 px-12 py-8 group overflow-hidden rounded-2xl -z-10">
                        <div className="w-full h-full flex flex-col items-start justify-start gap-5 relative transform transition-[width,height,top,left] duration-500">
                            <div className="w-5 h-5 md:w-8 md:h-8 lg:w-[48px] lg:h-[48px] rounded-full bg-linear-to-tr from-[#4EABF4] to-[#52B9A9] absolute -z-10 left-0 top-0 -translate-x-2 -translate-y-2 onhover-scale opacity-85"></div>
                            <div className="w-full flex flex-col items-start center-start gap-2.5">
                                <p className="capitalize md:text-lg text-gray-700">Multilingual Social Media Marketing</p>
                                <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm md:text-sm">
                                    We help you drive your business across multiple languages which opens up opportunities to reach a wider audience.
                                </p>
                            </div>
                        </div> 
                    </div>
                    <div className="bg-white flex flex-col items-center justify-center gap-5 px-12 py-8 group overflow-hidden rounded-2xl -z-10">
                        <div className="w-full h-full flex flex-col items-start justify-start gap-5 relative transform transition-[width,height,top,left] duration-500">
                            <div className="w-5 h-5 md:w-8 md:h-8 lg:w-[48px] lg:h-[48px] rounded-full bg-linear-to-tr from-[#4EABF4] to-[#52B9A9] absolute -z-10 left-0 top-0 -translate-x-2 -translate-y-2 onhover-scale opacity-85"></div>
                            <div className="w-full flex flex-col items-start center-start gap-2.5">
                                <p className="capitalize md:text-lg text-gray-700">Multilingual PPC</p>
                                <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm md:text-sm">
                                    We tailor the campaigns based on the local area language to make it more effective and bring in more business for you.
                                </p>
                            </div>
                        </div> 
                    </div>
                    <div className="bg-white flex flex-col items-center justify-center gap-5 px-12 py-8 group overflow-hidden rounded-2xl -z-10">
                        <div className="w-full h-full flex flex-col items-start justify-start gap-5 relative transform transition-[width,height,top,left] duration-500">
                            <div className="w-5 h-5 md:w-8 md:h-8 lg:w-[48px] lg:h-[48px] rounded-full bg-linear-to-tr from-[#4EABF4] to-[#52B9A9] absolute -z-10 left-0 top-0 -translate-x-2 -translate-y-2 onhover-scale opacity-85"></div>
                            <div className="w-full flex flex-col items-start center-start gap-2.5">
                                <p className="capitalize md:text-lg text-gray-700">Multilingual SEO</p>
                                <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm md:text-sm">
                                    We optimize the content on your website for different languages, so you become searchable in new markets.
                                </p>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </section>
    <section className="w-full px-4 md:px-8 lg:px-12 my-20 text-[var(--text-black)]">

  {/* Top grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
    
    {/* Heading Left */}
    <div className="flex items-center justify-center text-center">
      <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-black dark:text-white">
        Why Rankraze For Vernacular Marketing?
      </h2>
    </div>

    {/* FAQ Right */}
    <div className="w-full max-w-xl mx-auto md:mx-0">
      <h2 className="text-center text-2xl md:text-3xl lg:text-4xl dark:text-gray-300 font-bold mb-6">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">

        {/* 1 */}
        <div className="bg-gray-50 rounded-md overflow-hidden shadow">
          <input
            type="radio"
            name="accordion"
            id="acc1"
            className="peer hidden"
            defaultChecked
          />
          <label
            htmlFor="acc1"
            className="flex justify-between p-4 cursor-pointer bg-white transition-all duration-300 peer-checked:bg-gradient-to-br peer-checked:from-[#3DBC9C] peer-checked:to-[#36aaf1]"
          >
            <span className="text-sm font-bold text-black peer-checked:text-white">
             We focus on Localisation
            </span>
          </label>
          <div className="max-h-0 overflow-hidden transition-all duration-300 peer-checked:max-h-48 peer-checked:p-4 text-gray-600 text-sm">
           We put localisation at our core to help you truly connect with your audience, wherever they are in the world.
          </div>
        </div>

        {/* 2 */}
        <div className="bg-gray-50 rounded-md overflow-hidden shadow">
          <input type="radio" name="accordion" id="acc2" className="peer hidden" />
          <label
            htmlFor="acc2"
            className="flex justify-between p-4 cursor-pointer bg-white transition-all duration-300 peer-checked:bg-gradient-to-br peer-checked:from-[#3DBC9C] peer-checked:to-[#36aaf1]"
          >
            <span className="text-sm font-bold text-black peer-checked:text-white">
            We Think Strategically
            </span>
          </label>
          <div className="max-h-0 overflow-hidden transition-all duration-300 peer-checked:max-h-48 peer-checked:p-4 text-gray-600 text-sm">
           We work closely with you and your key stakeholders to ensure that our strategy is aligned with your brand goals
          </div>
        </div>

        {/* 3 */}
        <div className="bg-gray-50 rounded-md overflow-hidden shadow">
          <input type="radio" name="accordion" id="acc3" className="peer hidden" />
          <label
            htmlFor="acc3"
            className="flex justify-between p-4 cursor-pointer bg-white transition-all duration-300 peer-checked:bg-gradient-to-br peer-checked:from-[#3DBC9C] peer-checked:to-[#36aaf1]"
          >
            <span className="text-sm font-bold text-black peer-checked:text-white">
             We are Proactive

            </span>
          </label>
          <div className="max-h-0 overflow-hidden transition-all duration-300 peer-checked:max-h-48 peer-checked:p-4 text-gray-600 text-sm">
           We proactively look at your business. We analyze your competitors and the market to spot any potential barriers to your success.
          </div>
        </div>

        {/* 4 */}
        <div className="bg-gray-50 rounded-md overflow-hidden shadow">
          <input type="radio" name="accordion" id="acc4" className="peer hidden" />
          <label
            htmlFor="acc4"
            className="flex justify-between p-4 cursor-pointer bg-white transition-all duration-300 peer-checked:bg-gradient-to-br peer-checked:from-[#3DBC9C] peer-checked:to-[#36aaf1]"
          >
            <span className="text-sm font-bold text-black peer-checked:text-white">
             We’re Data and Performance Driven
            </span>
          </label>
          <div className="max-h-0 overflow-hidden transition-all duration-300 peer-checked:max-h-48 peer-checked:p-4 text-gray-600 text-sm">
           We always devise our plans and strategies based on solid data as well as research to give you the desired output.
          </div>
        </div>

      </div>
    </div>

  </div>
</section>

        </>
    )
}