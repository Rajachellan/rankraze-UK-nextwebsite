"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const images = [
  "/upload/services/influencer-sam-1.webp",
  "/upload/services/influencer-sam-2.webp",
  "/upload/services/influencer-sam-1.webp",
  "/upload/services/influencer-sam-2.webp",
];

export default function DoubleFullSlider() {
  return (
    <div className="w-80 md:w-210 lg:w-full  px-4  relative">
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={2}           // 🔥 always show exactly 2
        spaceBetween={30}
        loop={true}                  // 🔥 infinite loop
        speed={600}
        centeredSlides={false}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev",
        }}
        breakpoints={{
          320: { slidesPerView: 1 },   // 📱 mobile: full width 1 image
          640: { slidesPerView: 2 },   // tablet+ : 2 images full
        }}
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <div className="w-full h-[60vh] sm:h-[70vh] lg:h-[85vh] overflow-hidden">
              <Image
                src={src}
                alt={`slide-${i}`}
                width={1200}
                height={1200}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}

        {/* arrows */}
        <div className="swiper-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-white text-3xl">
          ❮
        </div>
        <div className="swiper-next absolute right-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-white text-3xl">
          ❯
        </div>
      </Swiper>
    </div>
  );
}
