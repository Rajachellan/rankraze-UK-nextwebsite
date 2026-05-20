import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "../components/UI/AllServicePageContactForm";
import MapAndLocationMatch from "../components/UI/MapAndLocationMatch";


export const metadata:Metadata = {
    title: "Contact Us - Rankraze",
    description: "Contact Rankraze in Irving, Texas: 2801 W Royal Lane, Apt #1905 — info@rankraze.us, +1 (919) 455-1241. SEO, PPC, web, and AI services for US businesses.",
    
    keywords: [
        
    ],
                
    alternates: {
        canonical: "https://rankraze.us/contact-us",
    },

    openGraph: {
        title: "Contact Us - Rankraze",
        description: "Reach our US team in Irving, Texas. Email info@rankraze.us or call +1 (919) 455-1241. Monday–Saturday support for digital marketing and web projects.",
        url: "https://rankraze.us/contact-us",
        siteName: "Rankraze",
        images: [
        {
            url: "upload/contact-us.webp",
            width: 700,
            height: 501,
            alt: "contact-us.webp",
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
            <div className="w-full grid place-items-center px-3 md:px-5 lg:px-8 xl:px-12 2xl:px-14 py-10 md:py-20 overflow-hidden relative rounded-md md:rounded-lg lg:rounded-xl xl:rounded-2xl 2xl:rounded-4xl before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:[background-image:linear-gradient(to_bottom,#ffffff44,#ffffffbb,white),linear-gradient(to_right,#DAF2EC,#D0EBFB)] dark:before:[background-image:linear-gradient(to_bottom,#050D1A_0%,#0D2244_100%)] before:-z-10 shadow-xs dark:shadow-none transition-colors duration-300">
                <div className="w-full max-w-7xl flex flex-col md:flex-row items-stretch justify-between gap-3.5 md:gap-0 z-10">
                    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center gap-4 pl-2.5">
                        <h1 className="text-3xl md:text-4xl xl:text-6xl font-semibold text-center md:text-left capitalize dark:text-gray-200 pr-4">
                            Contact Us
                        </h1>
                        <h2 className="text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300 text-center md:text-left pr-4">
                            Start the conversation to established good relationship and business
                        </h2>
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col items-center justify-center py-2.5">
                        <ContactForm />
                    </div>
                </div>
                <div className="absolute flex items-end justify-start w-full h-full bottom-0 left-0 -z-10 opacity-100 dark:opacity-75 bg-[url('/upload/wave-image.png')] bg-no-repeat bg-cover bg-bottom">
                </div>
            </div>
        </section>

        {/* <section className="w-full h-fit grid place-items-center dark:bg-none mt-10 px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 relative pb-3.5">
            <div className="w-full max-w-7xl flex flex-col md:flex-row items-stretch justify-center">
                <div className="w-full md:w-1/2 flex flex-col items-start justify-center gap-3 md:gap-3.5 p-2.5">
                    <h6 className="text-sm md:text-sm font-medium text-left uppercase text-[var(--primary-green)] pr-4">get in touch</h6>
                    <h2 className="text-2xl md:text-4xl font-semibold text-left capitalize dark:text-gray-200 pr-4">
                        Seamless Communication, Global Impact.
                    </h2>
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 items-stretch gap-y-3 gap-x-1.5">
                        <div className="flex items-start gap-4">
    <div className="w-12 aspect-square bg-[var(--primary-green)] rounded-sm grid place-items-center">
        <i className="ri-map-pin-line text-3xl text-white"></i>
    </div>

    <div className="w-full flex flex-col items-start gap-1.5">
        
        <p className="md:text-lg font-medium text-gray-800 dark:text-gray-300">
            Head Office
        </p>
        <span className="text-sm md:text-md text-gray-500 dark:text-gray-400 font-medium">
            Karuna Conclave, AD 42 & 45, 4th Ave, Shanthi Colony, Anna Nagar, Chennai, Tamil Nadu 600040. (India office — see locations map.)
        </span>
    </div>
</div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 aspect-square bg-[var(--primary-green)]  rounded-sm grid place-items-center">
                                <i className="ri-mail-line text-3xl text-white"></i>
                            </div>
                            <div className="w-full flex flex-col items-start gap-1.5">
                                <p className="md:text-lg font-medium text-gray-800 dark:text-gray-300">
                                    Email Support
                                </p>
                                <span className="text-sm md:text-md text-gray-500 dark:text-gray-400 font-medium">
                                    info@rankraze.uk
                                </span>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-12 aspect-square bg-[var(--primary-green)]  rounded-sm grid place-items-center">
                                <i className="ri-phone-line text-3xl text-white"></i>
                            </div>
                            <div className="w-full flex flex-col items-start gap-1.5">
                                <p className="md:text-lg font-medium text-gray-800 dark:text-gray-300">
                                    Let&apos;s Talk
                                </p>
                                <span className="text-sm md:text-md text-gray-500 dark:text-gray-400 font-medium">
                                    <span className="inline-block">Phone : +91 9962262210</span>
                                    <span className="inline-block">Phone : +91 9710079798</span>
                                </span>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-12 aspect-square bg-[var(--primary-green)] rounded-sm grid place-items-center">
                                <i className="ri-timer-line text-3xl text-white"></i>
                            </div>
                            <div className="w-full flex flex-col items-start gap-1.5">
                                <p className="md:text-lg font-medium text-gray-800 dark:text-gray-300">
                                    Office Hour
                                </p>
                                <span className="text-sm md:text-md text-gray-500 dark:text-gray-400 font-medium">
                                    <span className="inline-block">Monday - Saturday</span> 
                                    <span className="inline-block">10.00AM - 19.00PM</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 overflow-hidden flex items-center justify-center px-4 py-2.5 rounded-md">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5711.770778333292!2d80.20893803921254!3d13.082688465574675!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265562bbedea7%3A0x5ebf26841aa53c84!2sECowrkz%20%7C%20Coworking%20Space%20in%20Anna%20Nagar%20%7C%20Shared%20Office%20Space%20in%20Anna%20Nagar!5e0!3m2!1sen!2sus!4v1757066386073!5m2!1sen!2sus" width="600" height="450" style={{border:0}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full"></iframe>
                </div>
            </div>
        </section> */}

   <section className="flex items-center justify-center flex-col dark:bg-[var(--prim-dark-bg)] mt-20 text-[var(--text-black)] gap-6 w-full px-6 md:px-8 lg:px-10 transition-colors duration-300">
      <div className="w-full max-w-7xl flex flex-col items-center justify-center gap-3.5 p-3">
        <div className="w-full flex flex-col items-center justify-center">
          <h3 className="uppercase text-sm font-medium text-[var(--primary-blue)] dark:text-[#6bffe4]">Get in Touch</h3>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-gray-200 text-center max-w-xl capitalize mt-2">Seamless Communication, Global Impact.</h2>
        </div>
        <div className="w-full flex flex-col md:flex-row items-stretch justify-around gap-3 mt-4">
          <div className="w-full md:w-1/3 max-w-sm md:max-w-none px-4 py-8 flex flex-col items-center justify-center shadow-[0px_3px_12px_rgba(0,0,0,0.07),0px_-3px_12px_rgba(0,0,0,0.07)] dark:shadow-[0px_3px_12px_rgba(225,225,225,0.06),0px_-3px_12px_rgba(225,225,225,0.06)] dark:border dark:border-gray-400 rounded-lg">
           <i className="ri-map-pin-line text-2xl text-[var(--primary-green)]"></i>
            <p className="text-xl text-semibold text-gray-900 dark:text-gray-300">US Office</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 p-1.5 text-center">2801 W Royal Lane, Apt #1905, Irving, TX 75063</p>
          </div>
          <div className="w-full md:w-1/3 max-w-sm md:max-w-none px-4 py-8 flex flex-col items-center justify-center shadow-[0px_3px_12px_rgba(0,0,0,0.07),0px_-3px_12px_rgba(0,0,0,0.07)] dark:shadow-[0px_3px_12px_rgba(225,225,225,0.06),0px_-3px_12px_rgba(225,225,225,0.06)] dark:border dark:border-gray-400 rounded-lg">
          <i className="ri-mail-line text-2xl text-[var(--primary-green)]"></i>
            <p className="text-xl text-semibold text-gray-900 dark:text-gray-300">Email Support</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 p-1.5 text-center">info@rankraze.us</p>
          </div>
          <div className="w-full md:w-1/3 max-w-sm md:max-w-none px-4 py-8 flex flex-col items-center justify-center shadow-[0px_3px_12px_rgba(0,0,0,0.07),0px_-3px_12px_rgba(0,0,0,0.07)] dark:shadow-[0px_3px_12px_rgba(225,225,225,0.06),0px_-3px_12px_rgba(225,225,225,0.06)] dark:border dark:border-gray-400 rounded-lg">
           <i className="ri-phone-line text-2xl text-[var(--primary-green)]"></i>
            <p className="text-xl text-semibold text-gray-900 dark:text-gray-300">Let&apos;s Talk</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 p-1.5 text-center">+1 (919) 455-1241</p>
          </div>
          <div className="w-full md:w-1/3 max-w-sm md:max-w-none px-4 py-8 flex flex-col items-center justify-center shadow-[0px_3px_12px_rgba(0,0,0,0.07),0px_-3px_12px_rgba(0,0,0,0.07)] dark:shadow-[0px_3px_12px_rgba(225,225,225,0.06),0px_-3px_12px_rgba(225,225,225,0.06)] dark:border dark:border-gray-400 rounded-lg">
           <i className="ri-timer-line text-3xl text-[var(--primary-green)]"></i>
            <p className="text-xl text-semibold text-gray-900 dark:text-gray-300">Office Hour</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 p-1.5 text-center">Monday - Saturday <br />10:00 AM - 7:00 PM (CT)</p>
          </div>
        </div>
      </div>
    </section>
    
<section className="w-full py-16 bg-white dark:bg-[var(--prim-dark-bg)] transition-colors duration-300">
  <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">

    <div className="text-center mb-10">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
        Locate Our Office
      </h2>
      <p className="text-gray-500 dark:text-gray-400 mt-2 max-w-2xl mx-auto">
        Our primary US office is in Irving, Texas. See all locations in the map below.
      </p>
    </div>

    <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700">
      
      <div className="w-full h-[320px] md:h-[450px] rounded-xl overflow-hidden shadow-md">
        <iframe
          src="https://maps.google.com/maps?q=2801+W+Royal+Lane+Apt+1905+Irving+TX+75063&t=&z=15&ie=UTF8&iwloc=&output=embed"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full border-0"
        ></iframe>
      </div>
    </div>

  </div>
</section>


            <section className="flex items-center justify-center flex-col dark:bg-none mt-20 text-[var(--text-black)] gap-6 w-full px-6 md:px-8 lg:px-10">
              < MapAndLocationMatch />
            </section>
        <section className="w-full h-fit grid place-items-center dark:bg-none mt-10 px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 relative pb-3.5">
            <div className="w-full flex-col md:flex-row max-w-7xl flex items-stretch justify-center mt-8 md:mt-12 lg:mt-14 py-3 md:py-6 xl:py-12 gap-3.5">
                <div className="w-full md:w-1/2 p-3.5 grid place-items-center">
                    <h2 className="text-2xl lg:text-4xl xl:text-[40px] capitalize text-center md:text-left font-bold px-4 md:px-10 leading-tight dark:text-gray-200">
                        trusted by 2,000+ world-class brands and organizations of all sizes
                    </h2>
                </div>
                <div className="w-full md:w-1/2 overflow-hidden max-h-[30vh] relative before:absolute before:content-[''] before:w-full before:h-5 before:left-0 before:bottom-0 before:z-10 before:bg-gradient-to-t before:from-[#ffffff] dark:before:from-[#292639] before:to-transparent after:absolute after:content-[''] after:h-5 after:w-full after:right-0 after:top-0 after:bottom-0 after:z-10 after:bg-gradient-to-t after:from-transparent after:to-[#ffffff] dark:after:to-[#292639]">
                    <div className="w-full h-[1536px] grid grid-cols-4 auto-rows-[75px] md:auto-rows-[100px] gap-2.5 p-1.5 slide-y-loop dark:grayscale-100 dark:invert dark:brightness-100">
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/Anna-University-1-1.webp"}
                            alt="client-logo-1"
                            width={100}
                            height={100}
                            sizes="(max-width: 768px) 75px, 100px"
                            quality={65}
                            className="w-full p-1"
                                />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/appolo.webp"}
                            alt="client-logo-2"
                            width={100}
                            height={100}
                            sizes="(max-width: 768px) 75px, 100px"
                            quality={65}
                            className="h-full px-1 py-6"
                                />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/Bajaj_Finserv_logo.webp"}
                            alt="client-logo-3"
                            width={100}
                            height={50}
                            sizes="(max-width: 768px) 75px, 100px"
                            quality={65}
                            className="h-full px-1 py-7 md:py-9"
                                />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/Cars-india.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            sizes="(max-width: 768px) 75px, 100px"
                            quality={65}
                            className="h-full px-1 py-7 md:py-9"
                                />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/Clearone-1-1.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            sizes="(max-width: 768px) 75px, 100px"
                            quality={65}
                            className="w-full px-1.5 md:px-5 py-9"
                            />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/europe-1.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            sizes="(max-width: 768px) 75px, 100px"
                            quality={65}
                            className="w-full px-1.5 md:px-5"
                                />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/IIT_Madras.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            sizes="(max-width: 768px) 75px, 100px"
                            quality={65}
                            className="h-full px-0.5 py-8"
                                />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/irqs-2-1.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            sizes="(max-width: 768px) 75px, 100px"
                            quality={65}
                            className="h-full px-0.5 py-6"
                                />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/Johnson-Lifts-LOGO.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            sizes="(max-width: 768px) 75px, 100px"
                            quality={65}
                            className="h-full px-0.5 py-6"
                                />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/k-link.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            sizes="(max-width: 768px) 75px, 100px"
                            quality={65}
                            className="h-full px-0.5 py-6"
                                />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/motilal-oswal-logo.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            sizes="(max-width: 768px) 75px, 100px"
                            quality={65}
                            className="w-full px-1.5 md:px-4"
                                />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/mp-developers-1-1.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            sizes="(max-width: 768px) 75px, 100px"
                            quality={65}
                            className="h-full px-0.5 py-5"
                                />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/murugappa.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            sizes="(max-width: 768px) 75px, 100px"
                            quality={65}
                            className="h-full px-0.5 py-6"
                                />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/arunexcello.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            sizes="(max-width: 768px) 75px, 100px"
                            quality={65}
                            className="h-full px-5 py-4 md:py-6"
                                />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/NDTV-2.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            sizes="(max-width: 768px) 75px, 100px"
                            quality={65}
                            className="h-full px-0.5 py-6"
                                />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/omkar-share-banner.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            sizes="(max-width: 768px) 75px, 100px"
                            quality={65}
                            className="h-full px-4 py-6"
                                />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/pizza-hut.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            sizes="(max-width: 768px) 75px, 100px"
                            quality={65}
                            className="h-full px-0.5 py-7"
                                />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/puruvankara-1.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            sizes="(max-width: 768px) 75px, 100px"
                            quality={65}
                            className="h-full px-0.5 py-7"
                                />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/renault-nissan.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            sizes="(max-width: 768px) 75px, 100px"
                            quality={65}
                            className="h-full px-0.5 py-6"
                                />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/shizen-energy.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            sizes="(max-width: 768px) 75px, 100px"
                            quality={65}
                            className="h-full px-5 py-7"
                                />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/shriram-finance-logo.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            sizes="(max-width: 768px) 75px, 100px"
                            quality={65}
                            className="h-full px-0.5 py-7"
                                />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/silkway.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            sizes="(max-width: 768px) 75px, 100px"
                            quality={65}
                            className="h-full px-1.5 py-5 md:py-8"
                                />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/TAFE-Logo.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            sizes="(max-width: 768px) 75px, 100px"
                            quality={65}
                            className="h-full px-1 py-5 md:py-8"
                                />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/tradeachievers_official-1.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            sizes="(max-width: 768px) 75px, 100px"
                            quality={65}
                            className="h-full px-0.5 py-4"
                                />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/ttgroup_logo.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            sizes="(max-width: 768px) 75px, 100px"
                            quality={65}
                            className="w-full px-1.5 md:px-3.5 py-8"
                                />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/virginia-tech.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            sizes="(max-width: 768px) 75px, 100px"
                            quality={65}
                            className="w-full px-2 md:px-6"
                                />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/yagen-logo.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            sizes="(max-width: 768px) 75px, 100px"
                            quality={65}
                            className="w-full px-2 md:px-7"
                                />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/mv_logo_full.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            sizes="(max-width: 768px) 75px, 100px"
                            quality={65}
                            className="w-full px-2 md:px-7"
                                />
                        </div>

                        {/* second copy */}
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/Anna-University-1-1.webp"}
                            alt="client-logo-1"
                            width={100}
                            height={100}
                            sizes="(max-width: 768px) 75px, 100px"
                            quality={65}
                            className="w-full p-1"
                                />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/appolo.webp"}
                            alt="client-logo-2"
                            width={100}
                            height={100}
                            sizes="(max-width: 768px) 75px, 100px"
                            quality={65}
                            className="h-full px-1 py-6"
                                />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/Bajaj_Finserv_logo.webp"}
                            alt="client-logo-3"
                            width={100}
                            height={50}
                            sizes="(max-width: 768px) 75px, 100px"
                            quality={65}
                            className="h-full px-1 py-7 md:py-9"
                                />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/Cars-india.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            sizes="(max-width: 768px) 75px, 100px"
                            quality={65}
                            className="h-full px-1 py-7 md:py-9"
                                />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/Clearone-1-1.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            sizes="(max-width: 768px) 75px, 100px"
                            quality={65}
                            className="w-full px-1.5 md:px-5 py-9"
                            />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/europe-1.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            sizes="(max-width: 768px) 75px, 100px"
                            quality={65}
                            className="w-full px-1.5 md:px-5"
                                />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/IIT_Madras.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            sizes="(max-width: 768px) 75px, 100px"
                            quality={65}
                            className="h-full px-1 py-5 md:py-8"
                                />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/irqs-2-1.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            sizes="(max-width: 768px) 75px, 100px"
                            quality={65}
                            className="h-full px-0.5 py-5 md:py-6"
                                />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/Johnson-Lifts-LOGO.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            sizes="(max-width: 768px) 75px, 100px"
                            quality={65}
                            className="h-full px-0.5 py-6"
                                />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/k-link.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            sizes="(max-width: 768px) 75px, 100px"
                            quality={65}
                            className="h-full px-0.5 py-6"
                                />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/motilal-oswal-logo.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            sizes="(max-width: 768px) 75px, 100px"
                            quality={65}
                            className="w-full px-1.5 md:px-4"
                                />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/mp-developers-1-1.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            sizes="(max-width: 768px) 75px, 100px"
                            quality={65}
                            className="h-full px-0.5 py-5"
                                />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/murugappa.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            sizes="(max-width: 768px) 75px, 100px"
                            quality={65}
                            className="h-full px-0.5 py-6"
                                />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/arunexcello.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            sizes="(max-width: 768px) 75px, 100px"
                            quality={65}
                            className="h-full px-5 py-4 md:py-6"
                                />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/NDTV-2.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            sizes="(max-width: 768px) 75px, 100px"
                            quality={65}
                            className="h-full px-0.5 py-6"
                                />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/omkar-share-banner.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            sizes="(max-width: 768px) 75px, 100px"
                            quality={65}
                            className="h-full px-4 py-6"
                                />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/pizza-hut.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            sizes="(max-width: 768px) 75px, 100px"
                            quality={65}
                            className="h-full px-0.5 py-7"
                                />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/puruvankara-1.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            sizes="(max-width: 768px) 75px, 100px"
                            quality={65}
                            className="h-full px-0.5 py-7"
                                />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/renault-nissan.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            sizes="(max-width: 768px) 75px, 100px"
                            quality={65}
                            className="h-full px-0.5 py-6"
                                />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/shizen-energy.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            sizes="(max-width: 768px) 75px, 100px"
                            quality={65}
                            className="h-full px-5 py-7"
                                />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/shriram-finance-logo.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            sizes="(max-width: 768px) 75px, 100px"
                            quality={65}
                            className="h-full px-0.5 py-7"
                                />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/silkway.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            sizes="(max-width: 768px) 75px, 100px"
                            quality={65}
                            className="h-full px-1.5 py-5 md:py-8"
                                />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/TAFE-Logo.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            sizes="(max-width: 768px) 75px, 100px"
                            quality={65}
                            className="h-full px-1 py-5 md:py-8"
                                />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/tradeachievers_official-1.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            sizes="(max-width: 768px) 75px, 100px"
                            quality={65}
                            className="h-full px-0.5 py-4"
                                />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/ttgroup_logo.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            sizes="(max-width: 768px) 75px, 100px"
                            quality={65}
                            className="w-full px-1.5 md:px-3.5 py-8"
                                />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/virginia-tech.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            sizes="(max-width: 768px) 75px, 100px"
                            quality={65}
                            className="w-full px-2 md:px-6"
                                />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/yagen-logo.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            sizes="(max-width: 768px) 75px, 100px"
                            quality={65}
                            className="w-full px-2 md:px-7"
                                />
                        </div>
                        <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                            <Image
                            src={"/brand-logo/mv_logo_full.webp"}
                            alt="client-logo-4"
                            width={100}
                            height={50}
                            sizes="(max-width: 768px) 75px, 100px"
                            quality={65}
                            className="w-full px-2 md:px-7"
                                />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center dark:bg-none mt-10 text-[var(--text-black)] gap-4 w-full max-w-5xl p-6 md:p-8 lg:p-10 mb-2.5 bg-[#dffff1] dark:bg-[#E3FDF5] rounded-2xl relative before:content-[''] before:w-full before:h-full before:absolute before:bg-[url('/upload/background-style.webp')] before:bg-cover before:bg-no-repeat before:opacity-45 before:rounded-2xl before:bg-center before:z-0">
                <div className="w-full md:w-2/3 flex flex-col z-10 gap-2.5">
                    <h3 className="text-2xl md:text-4xl text-gray-800 text-center md:text-left font-bold z-10">
                        Work Highlights
                    </h3>
                    <p className="text-[10px] md:text-sm lg:text-sm text-gray-600 text-center md:text-left tracking-tight md:tracking-tight">Crafting your brand with purpose, passion, and precision to leave a lasting impression.</p>
                </div>
                <div className="w-full md:w-1/3 flex items-center justify-center z-10">
                    <Link href="" className="text-sm md:text-sm xl:text-base text-white font-semibold px-3.5 py-2.5 rounded-md relative before:content-[''] before:absolute before:w-full before:h-full before:bg-linear-to-br before:from-[#3DBC9C] before:to-[#37A8F9] before:top-0 before:left-0 before:rounded-md hover:before: before:-z-10 hover:before:from-[#37A8F9] hover:before:to-[#3DBC9C]">
                        Discover Portfolio
                    </Link>
                </div>
            </div>
        </section>
        </>
    )
}