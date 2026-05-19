import Image from "next/image";
import { Metadata } from "next";

export const metadata:Metadata = {
    title: "Yeka Cosmetics Case Study | Influencer Marketing Success - Rankraze ",
    description: "Discover how Rankraze boosted Yeka Cosmetics, a herbal beauty leader, with targeted influencer marketing. See real results in website traffic and sales. Chennai's top digital agency for your brand growth. Contact us today!",
    
    keywords: [
  
    ],
                
    alternates: {
        canonical: "https://rankraze.com/yeka",
    },

    openGraph: {
        title: "Yeka - Rankraze",
        description: "Yeka Case Study – Influencer marketing Know how we can plug your brand into the industry's top influencers and drive more sales with this case study Yeka Cosmetics manufacturer of cosmetics using traditional herbs partnered with Rankraze technologies for influencer marketing. Objective Its primary objectives were to increase brand awareness among consumers by getting influencers […]",
               url: "https://rankraze.com/yeka",
        siteName: "Rankraze",
        images: [
        {
            url: "upload/services/yeka-2.webp",
            width: 1024,
            height: 1024,
            alt: "yeka-2.webp",
            type: "image/webp"
        },
        ],
        locale: "en_US",
        type: "article",
    },
}
export default function YekaPage(){
    return(
        <>
        <section className="w-full grid place-items-center dark:bg-none mt-20 px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-9 md:gap-12 lg:gap-14 xl:gap-16">
            <div className="w-full flex items-center justify-center relative before:content-[''] before:absolute before:w-full before:h-full before:bg-linear-to-b before:from-[#DAF8F1] before:to-transparent dark:before:invert before:rounded-t-4xl before:-z-10">
                <div className="w-full flex flex-col items-center justify-center gap-2.5 md:gap-3.t xl:gap-4 py-8 md:py-12 xl:py-20 2xl:py-24 max-w-2xl">
                    <h1 className="text-2xl md:text-4xl xl:text-4xl text-center capitalize font-bold text-gray-800 dark:text-gray-100">
                       Yeka Case Study – Influencer marketing
                    </h1>
                  
                </div>
            </div>


        <div className="grid grid-cols-1 md:grid-cols-[30%_70%] gap-6 mt-10 md:mt-20">
          {/* Image */}
          <div className="text-center font-bold text-2xl text-black dark:text-white">
            <Image
              src="/upload/services/yeka-2.webp"
              alt="video marketing services in chennai"
              width={1024}
              height={1024}
              className="rounded-xl dark:grayscale-25 w-full h-auto"
            />
          </div>

          {/* Text */}
          <div className="flex items-center justify-center w-full">
            <div className="max-w-3xl ">
              <h2 className="text-xl md:text-2xl xl:text-2xl font-bold text-black dark:text-gray-100">
                {
                  "Know how we can plug your brand into the industry's top influencers and drive more sales with this case study"
                }
              </h2>
              <p className="text-xl mt-5   text-gray-600 dark:text-gray-100">
                Yeka Cosmetics manufacturer of cosmetics using traditional herbs
                partnered with Rankraze technologies for influencer marketing.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl text-center">
          <h2 className="text-xl md:text-4xl xl:text-4xl  font-bold text-black dark:text-gray-100">
            Objective
          </h2>
          <p className="text-lg mt-5 capitalize  text-gray-600 dark:text-gray-100">
            Its primary objectives were to increase brand awareness among
            consumers by getting influencers to highlight the brand’s core ethos
            as well as increase market penetration.
          </p>
        </div>

<div className="grid grid-cols-1 md:grid-cols-[70%_30%]  mt-10 md:mt-20">
          <div className=" px-10 dark:text-white text-gray-500 max-w-5xl text-lg ">
            <h3 className="md:px-20 text-black font-bold text-3xl" >Approach</h3>
            <p className="md:px-20">
              For the marketing campaign, we decided to choose an influencer with followers in million and who has a strong beauty and lifestyle feed to explain about the benefits of using Yeka cosmetics.
            </p>
          <h3 className="md:px-20 text-black font-bold text-3xl mt-10">The Influencer</h3>
            <p className="md:px-20">
              “Hansika Motwani” an Indian actress with 5 million followers on Instagram. We created a video of her explaining about how Yeka cosmetics products are made and how it is different from other brands.
            </p>
          </div>
          <div className="text-center font-bold text-2xl rounded-xl text-black dark:text-white">
            <Image
              src="/upload/services/influencer-hanshika-2.webp"
              alt="influencer-hanshika"
              width={1024}
              height={1024}
              className="rounded-xl p-5 dark:grayscale-25 "
            />
          </div>
        </div>



        <div className="grid grid-cols-1 md:grid-cols-[50%_50%] md:mx-20 gap-6 p-5">
          <div className="text-center font-bold text-2xl text-black dark:text-white">
            <Image
              src="/upload/services/yeka-3.webp"
              alt="video marketing services in chennai"
              width={750}
              height={1024}
              className=" dark:grayscale-25 p-5"
            />
          </div>
          <div className="text-center font-bold text-2xl text-black dark:text-white">
            <Image
              src="/upload/services/yeka-4.webp"
              alt="video marketing services in chennai"
              width={750}
              height={1024}
              className="rounded-xl p-5 dark:grayscale-25 "
            />
          </div>
        </div>

        <div className="max-w-5xl text-center">
          <h3 className="text-xl md:text-4xl xl:text-4xl  font-bold text-black dark:text-gray-100">
            The Results
          </h3>
          <p className="text-lg mt-5 capitalize  text-gray-600 dark:text-gray-100">
            Our influencer marketing campaigns had a significant positive impact
            in terms of product awareness, consumer engagement, local traffic to
            the site, product sales, and revenues.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[50%_50%] md:mx-20 gap-6">
          <div className="text-center font-bold text-2xl text-black dark:text-white">
            <Image
              src="/upload/services/result-1.webp"
              alt="video marketing services in chennai"
              width={481}
              height={296}
              className=" dark:grayscale-25 "
            />
            <p className="m-5 text-gray-500"> Before</p>
          </div>
          <div className="text-center font-bold text-2xl text-black dark:text-white">
            <Image
              src="/upload/services/result-2.webp"
              alt="video marketing services in chennai"
              width={481}
              height={296}
              className="rounded-xl  dark:grayscale-25 "
            />
            <p className="m-5 text-gray-500"> After</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[50%_50%] md:mx-20 gap-6">
          <div className="text-center font-bold text-2xl text-black dark:text-white">
            <Image
              src="/upload/services/result-3.webp"
              alt="video marketing services in chennai"
              width={1024}
              height={482}
              className=" dark:grayscale-25 "
            />
            <p className="m-5 text-gray-500"> Before</p>
          </div>
          <div className="text-center font-bold text-2xl text-black dark:text-white">
            <Image
              src="/upload/services/result-4.webp"
              alt="video marketing services in chennai"
              width={1024}
              height={482}
              className="rounded-xl  dark:grayscale-25 "
            />
            <p className="m-5 text-gray-500"> After</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[50%_50%] gap-6 mt-10 md:mt-20">
          <div className="  dark:text-white text-gray-500 max-w-xl text-lg ">
            <p>
              This is one of the highly impressive influencer-marketing case
              studies that show just how much influencers can boost business. As
              you can see, Yeka Cosmetics had varying goals and expectations out
              of their influencer marketing campaigns and we were able to
              achieve it by finding a perfect influencer for them.
            </p>
            <p>
              The purpose of influencer marketing can be anything from enhancing
              brand awareness to promoting new products. Whatever your goal is,
              Rankraze, by engaging with the right influencers can deliver
              incredible results for your influencer marketing campaign.
            </p>
          </div>
          <div className="text-center font-bold text-2xl text-black dark:text-white">
            <iframe
              className="w-full aspect-video rounded-lg"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/A2guc-OIwMI?si=lXqgOwdpodfxIk0h"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
