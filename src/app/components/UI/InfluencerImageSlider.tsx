'use client';

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, FreeMode, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperClass } from 'swiper/types'; // Type for Swiper instance
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import Image from 'next/image';

const images = [
  '/upload/32.webp',
  '/upload/w-1.webp',
  '/upload/23.webp',
  '/upload/24.webp',
];

const SwiperGallery: React.FC = () => {
  const thumbsSwiperRef = useRef<SwiperClass | null>(null);

  return (
    // <div className="w-full  md:max-w-lg lg:max-w-3xl xl:max-w-5xl  px-4">
    <div className="w-80 md:w-210 lg:w-full  px-4">
      {/* Main Swiper */}
      <Swiper
        className="mySwiper2"
        modules={[Autoplay, Navigation, Thumbs]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        spaceBetween={10}
        slidesPerView="auto"
        centeredSlides
        loop
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        thumbs={{
          swiper:
            thumbsSwiperRef.current && !thumbsSwiperRef.current.destroyed
              ? thumbsSwiperRef.current
              : null,
        }}
        speed={800}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="">
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              width={1600}
              height={800}
              className="w-full object-cover rounded-xl shadow-lg"
            />
          </SwiperSlide>
        ))}

        {/* Navigation buttons */}
        <div className="swiper-button-next text-sm md:text-base !text-white !right-2 sm:!right-4" />
        <div className="swiper-button-prev text-sm md:text-base !text-white !left-2 sm:!left-4" />
      </Swiper>

      {/* Thumbs Swiper */}
      <Swiper
        className="mySwiper mt-4"
        modules={[FreeMode, Thumbs]}
        onSwiper={(swiper) => {
          thumbsSwiperRef.current = swiper;
        }}
        spaceBetween={10}
        slidesPerView={images.length}
        freeMode
        watchSlidesProgress
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="w-24 cursor-pointer">
            <Image
              src={src}
              alt={`Thumb ${index + 1}`}
              width={1600}
              height={800}
              className="object-cover rounded-md border-2 border-transparent hover:border-blue-500 transition"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperGallery;
