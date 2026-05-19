import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";
import ImageSlider from "@/app/components/UI/InfluencerImageSlider";
import ImageSlider1 from "@/app/components/UI/InfluencerImageSlider2";
import ImageSlider2 from "@/app/components/UI/InfluncerImageSlider3";
import ContactForm from "@/app/components/UI/AllServicePageContactForm";

export const metadata:Metadata = {
    title: "Influencer Marketing Agency in Chennai, India",
    description: "Start a successful marketing campaign now with Influencer Marketing Agency in Chennai. Learn about the best influencers to help promote your business. We provide influencers and brands for barter and paid collaborations across all social media platforms.",
    
    keywords: [
    "influencer marketing agency in Chennai",
    "YouTube influencer marketing",
    "best influencer marketing agency in Chennai",
    "influencer marketing company in Chennai",
    "influencer marketing in Chennai",
    "blogger marketing agency in Chennai",
    "influencer marketing services in Chennai",
    "influencer marketing agency",
    "best influencer marketing agency",
    "influencer marketing agency in Chennai",
    "top influencer marketing agency"
    ],
                
    alternates: {
        canonical: "https://rankraze.com/influencer-marketing",
    },

    openGraph: {
        title: "Influencer Marketing and Campaigns | Digital marketing agency Chennai, Bangalore, India - Rankraze",
        description: "Start a successful marketing campaign now!. Learn about the best influencers to help promote your business. We provide influencers and brands for barter and paid collaborations across all social media platforms.",
        url: "https://rankraze.com/influencer-marketing",
        siteName: "Rankraze",
        images: [
        {
            url: "/upload/32.webp",
            width: 700,
            height: 501,
            alt: "influencer-marketing.webp",
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
                            Launch A Successful Influencer Marketing Campaign Today
                        </h1>
                        <p className="text-sm md:text-sm text-gray-700 dark:text-gray-300 text-center md:text-left pr-4">
                            We bring together brands and amazing influencers for both paid and barter collaborations on all social media platforms.
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
        <section className="w-full grid place-items-center mt-20 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 rounded-xl md:rounded-4xl overflow-hidden">
            <div className="w-full max-w-7xl flex flex-col items-center justify-center gap-6 md:gap-10 px-4 md:px-6 lg:px-10 z-10">
                <h2 className="text-2xl lg:text-4xl dark:text-gray-200 font-semibold text-center max-w-4xl">
                    Find Your Influencer Match And Launch A Successful Campaign Across Various Platforms
                </h2>
                <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-justify md:text-center text-sm md:text-base max-w-4xl">
                    We provide ongoing property maintenance which includes lawn mowing, fertilizing, spring and fall cleanups, de-thatching, aerating, seeding, mulching, edging, herbicide application, plant health care, snow plowing, pruning, and tree care and removal.
                </p>
                <div className="flex gap-2.5 md:gap-3.5 xl:gap-5">
                    <i className="ri-facebook-circle-fill text-2xl md:text-3xl lg:text-4xl text-[#1877F2] dark:text-white"></i>
                    <i className="ri-twitter-x-fill text-2xl md:text-3xl lg:text-4xl dark:text-white"></i>
                    <i className="ri-youtube-fill text-2xl md:text-3xl lg:text-4xl text-[#FF0000] dark:text-white"></i>
                    <i className="ri-linkedin-box-fill text-2xl md:text-3xl lg:text-4xl text-[#0A66C2] dark:text-white"></i>
                    <i className="ri-instagram-fill text-2xl md:text-3xl lg:text-4xl bg-[linear-gradient(45deg,_#405DE6,_#833AB4,_#E1306C,_#FD1D1D,_#F77737,_#FCAF45)] text-transparent dark:text-white bg-clip-text"></i>
                </div>
            </div>
        </section>
        <section className="w-full grid place-items-center mt-20 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 rounded-xl md:rounded-4xl overflow-hidden">
            <div className="w-full max-w-7xl flex flex-col  gap-6 md:gap-10 px-4 md:px-6 lg:px-10 my-20 z-10">
                <h2 className="text-xl px-4  lg:text-4xl dark:text-gray-200 font-bold md:text-center max-w-6xl">
                    Nethra cyclothon india
                </h2>
                <ImageSlider />
                <ImageSlider1/>
                <ImageSlider2/>
      

            {/* youtube video */}
                  <div className="grid grid-cols-1 md:grid-cols-[50%_50%] gap-6 ">
          <div className="text-center font-bold text-2xl text-black dark:text-white">
             <div className="text-center font-bold text-2xl text-black dark:text-white">
                <iframe
                    className="w-full aspect-video rounded-lg"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/vpk2t2enlzA?si=BTUZVL7C-Q73wHP2"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen></iframe>
</div>

          </div>
          <div className="text-center font-bold text-2xl text-black dark:text-white">
              <iframe
                  className="w-full aspect-video rounded-lg"
               width="560"
                height="315" 
                src="https://www.youtube.com/embed/THssLaXl6gE?si=gVNena92I1GwrRfN" 
                title="YouTube video player" 
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen></iframe>
          </div>
        </div>
                                    <div className="flex flex-col items-center text-center gap-4">
  <div className="w-[291px] sm:w-[340px] md:w-[400px]">
    <Image
      src="/upload/services/yeka.webp"
      alt="video marketing services in chennai"
      width={291}
      height={132}
      className="rounded-xl  dark:grayscale-25"
    />
  </div>

  <p className="max-w-5xl text-sm sm:text-base text-gray-600  dark:text-gray-300">
    We provide ongoing property maintenance which includes lawn mowing,
    fertilizing, spring and fall cleanups, de-thatching, aerating, seeding,
    mulching, edging, herbicide application, plant health care, snow plowing,
    pruning, and tree care and removal.
  </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-[25%_25%_50%] gap-4 ">
 <div className="text-center font-bold text-2xl text-black  dark:text-white">
     <Image
      src="/upload/services/yeka-2.webp"
      alt="video marketing services in chennai"
      width={1024}
      height={1024}
      className="  dark:grayscale-25"
    />
</div>
 <div className="text-center font-bold text-2xl text-black  dark:text-white">
     <Image
      src="/upload/services/influencer-hanshika-2.webp"
      alt="video marketing services in chennai"
      width={1024}
      height={1024}
      className="  dark:grayscale-25"
    />
</div>

 <div className="text-center font-bold text-2xl text-black dark:text-white">
            <iframe width="560" 
                className="w-full aspect-video rounded-lg"
            height="315" src="https://www.youtube.com/embed/A2guc-OIwMI?si=ToykUWfCffF2J8Vi" title="YouTube video player" frameBorder="0" 
            allow="accelerometer; 
            autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen></iframe>
          </div>

          </div>
          
              <Link
                href="/yeka"
                className="mx-auto flex w-fit items-center justify-center capitalize text-sm text-white px-6 py-2.5 bg-gradient-to-br from-[#3DBC9C] to-[#36aaf1] rounded-lg"
                >
                Read more
                </Link>

          </div>
          

        </section>
        </>
    )
}