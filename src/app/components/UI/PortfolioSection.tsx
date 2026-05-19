"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";
import Link from "next/link";

// IMAGES
import education from "../../../../public/upload/social-media-marketing/education/education1.webp";
import healthcare from "../../../../public/upload/social-media-marketing/healthcare/healthcare10.webp"
import clothing from "../../../../public/upload/social-media-marketing/clothing/Clothing3.webp";
import logistics from "../../../../public/upload/social-media-marketing/logistics/Logistics2.webp";
import ecommerce from "../../../../public/upload/social-media-marketing/Ecommerce/Ecommerce1.webp";
import it from "../../../../public/upload/social-media-marketing/it/it2.webp";
import branding from "../../../../public/upload/social-media-marketing/Branding/Branding2.webp";
import food from "../../../../public/upload/social-media-marketing/food/food1.webp";
import beauty from "../../../../public/upload/social-media-marketing/beauty/Beauty1.webp";
import Gardening from "../../../../public/upload/social-media-marketing/gardening/Gardening5.webp";
import realestate from "../../../../public/upload/social-media-marketing/realestate/realestate1.webp";
import bilingual from "../../../../public/upload/social-media-marketing/Bilingual/Bilingual1.webp";
import others from "../../../../public/upload/social-media-marketing/others/others2.webp";


const slides = [
  { img: education, title: "Education" },
  { img: clothing, title: "Clothing" },
  { img: logistics, title: "Logistics" },
  { img: ecommerce, title: "Ecommerce" },
  { img: it, title: "IT" },
  { img: branding, title: "Branding" },
  { img: food, title: "Food" },
  { img: beauty, title: "Beauty" },
  { img: healthcare, title: "HealthCare" },
  { img: Gardening, title: "Gardening" },
  { img: realestate, title: "RealEstate" },
  { img: bilingual, title: "Bilingual" },
  { img: others, title: "Others" },
];

export default function ImageCarousel() {
  return (
    <>
      <section className="w-full pt-10 pb:5 md:pb-10 bg-gray-50 dark:bg-[var(--prim-dark-bg)] overflow-hidden transition-colors duration-300">
        <h2 className="text-center text-4xl font-bold text-[var(--primary-blue)] dark:text-gray-100">
          Our Portfolio
        </h2>
        <p className="text-center py-5 text-gray-700 dark:text-gray-300">
          Explore our diverse range of creative projects and success stories.
        </p>

        <Marquee speed={80} pauseOnHover gradient={false} autoFill>
          {slides.map((slide, index) => (
            <div
              key={index}
              className="mx-3 md:mx-5 w-[160px] lg:w-44 shrink-0 text-center"
            >
              {/* IMAGE WRAPPER */}
              <div className="group relative overflow-hidden rounded-xl">
                {/* IMAGE */}
                <Image
                  src={slide.img}
                  alt={slide.title}
                  className="aspect-square w-full object-cover
                transition-transform duration-500 ease-out
                group-hover:scale-110"
                  sizes="176px"
                  quality={70}
                />

                {/* OVERLAY */}
                <div>
                  {/* <Link
                  href="#"
                  className="px-4 py-2 text-sm md:text-sm font-semibold
                  rounded-md bg-white text-[var(--primary-blue)]
                  hover:bg-[var(--primary-blue)] hover:text-white
                  transition"
                >
                  View Portfolio
                </Link> */}
                </div>
              </div>

              {/* TITLE */}
              <p className="mt-3 text-sm font-semibold text-gray-900">
                {slide.title}
              </p>
            </div>
          ))}
        </Marquee>
        <div className="flex justify-center">
          <Link
            href="#"
            className="px-4 py-2  my-10 text-sm md:text-sm font-semibold
      rounded-md text-white  bg-[linear-gradient(132deg,_#3dbc9b_0%,_#37a7ff_100%)]
      hover:bg-[var(--primary-blue)] hover:text-white
      transition"
          >
            View Portfolio
          </Link>
        </div>
      </section>
    </>
  );
}
