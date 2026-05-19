"use client";

import { useState } from "react";
import Image from "next/image";
import { portfolioData } from "./portfolio-component/portfolio-component";

export default function SocialMediaMarketingClient() {
  const categories = Object.keys(portfolioData);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <>
      {/* CATEGORY BUTTONS */}
      <div className="container mx-auto text-center mt-100">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-full w-44 capitalize transition-all
                ${
                  activeCategory === cat
                    ? "bg-linear-to-b from-[#3DBC9C] to-[#07334d] text-white"
                    : "bg-[#3DBC9C] text-white hover:bg-[#07334d]"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* PORTFOLIO CARDS */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-4 pb-20">
        {portfolioData[activeCategory]?.map((item, index) => (
          <div key={index} className="text-center">
            <div className="w-36 h-36 mx-auto relative mb-4">
              <Image
                src={item.logo}
                alt={item.title}
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold dark:text-[#E2EEFF]">{item.title}</h3>
            <p className="text-gray-600 dark:text-[#94B4D4] text-sm mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
