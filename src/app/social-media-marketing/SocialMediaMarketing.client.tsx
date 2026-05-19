"use client";

import { useState } from "react";
import Image from "next/image";
import { categories, images, videoIframe, videoFiles } from "./social-media-component/social-media-cmponent";

export default function SocialMediaMarketingClient() {
  const [activeCategory, setActiveCategory] = useState("education");

  return (
    <>
      <section className="container mx-auto py-12 px-4 text-center mt-20">
        <div className="w-full flex items-center justify-center relative before:content-[''] before:absolute before:w-full before:h-full before:bg-linear-to-b before:from-[#DAF8F1] before:to-transparent dark:before:invert before:rounded-t-4xl before:-z-10 ">
          <div className="w-full flex flex-col items-center justify-center gap-2.5 md:gap-3.t xl:gap-4 py-8 md:py-12 xl:py-20 2xl:py-24 max-w-2xl">
            <h1 className="text-2xl xl:text-4xl capitalize font-bold text-gray-800 dark:text-gray-100 w-full">
              Social Media marketing Portfolio
            </h1>
          </div>
        </div>
      </section>

      <div className="container mx-auto text-center mt-10 ">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-3 rounded md:rounded-lg w-40 block capitalize transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-linear-to-b from-[#3DBC9C] to-[#07334d] to-black-600 text-white"
                  : "bg-[var(--primary-green)] text-white hover:bg-[var(--primary-blue)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>


      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-6 px-4 pb-12">
        {(images[activeCategory] || []).map((src: string, index: number) => (
          <div key={index} className="relative">
            <Image src={src} alt="image not found" width={400} height={400} className="rounded-xl shadow-md" />
          </div>
        ))}
      </div>
<div>
{/* <h2 className="text-2xl xl:text-4xl capitalize font-bold text-gray-800 dark:text-gray-100 w-full text-center my-10">Video Portfolio</h2> */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-6 px-4 pb-12">
        {videoFiles[activeCategory]?.map((src: string, index: number) => (
        <div
  className="relative w-full overflow-hidden rounded-xl shadow-md bg-black"
  style={{ paddingBottom: "125%" }} 
>
<video
  src={src}
  className="absolute inset-0 w-full h-full object-cover"
  autoPlay
  muted
  loop
  controls
  playsInline
/>
</div>
        ))}
        </div>
        </div>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6 px-4 pb-12">

        {videoIframe[activeCategory]?.map((src: string, index: number) => (
          <div key={index} className="aspect-video w-full overflow-hidden rounded-xl shadow-md">
            <iframe
              src={src}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </>
  );
}
