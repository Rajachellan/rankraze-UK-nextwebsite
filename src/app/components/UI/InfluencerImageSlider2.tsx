// 'use client';

// import React, { useRef } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Thumbs, FreeMode, Autoplay } from 'swiper/modules';
// import type { Swiper as SwiperClass } from 'swiper/types'; // Type for Swiper instance
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/thumbs';
// import 'swiper/css/free-mode';
// import Image from 'next/image';

// const images = [
//   '/upload/32.webp',
//   '/upload/w-1.webp',
//   '/upload/23.webp',
//   '/upload/24.webp',
// ];

// const SwiperGallery: React.FC = () => {
//   const thumbsSwiperRef = useRef<SwiperClass | null>(null);

//   return (
//     <div className="w-full max-w-5xl mx-auto px-4">
//       {/* Main Swiper */}
//       <Swiper
//         className="mySwiper2"
//         modules={[Autoplay, Navigation, Thumbs]}
//         autoplay={{
//           delay: 5000,
//           disableOnInteraction: false,
//         }}
//         spaceBetween={10}
//         slidesPerView="auto"
//         centeredSlides
//         loop
//         loopedSlides={images.length}
//         navigation={{
//           nextEl: '.swiper-button-next',
//           prevEl: '.swiper-button-prev',
//         }}
//         thumbs={{
//           swiper:
//             thumbsSwiperRef.current && !thumbsSwiperRef.current.destroyed
//               ? thumbsSwiperRef.current
//               : null,
//         }}
//         speed={800}
//       >
//         {images.map((src, index) => (
//           <SwiperSlide key={index} className="w-auto">
//             <Image
//               src={src}
//               alt={`Slide ${index + 1}`}
//               width={1600}
//               height={800}
//               className="w-full object-cover rounded-xl shadow-lg"
//             />
//           </SwiperSlide>
//         ))}

//         {/* Navigation buttons */}
//         <div className="swiper-button-next !text-white !right-2 sm:!right-4" />
//         <div className="swiper-button-prev !text-white !left-2 sm:!left-4" />
//       </Swiper>

//       {/* Thumbs Swiper */}
//       <Swiper
//         className="mySwiper mt-4"
//         modules={[FreeMode, Thumbs]}
//         onSwiper={(swiper) => {
//           thumbsSwiperRef.current = swiper;
//         }}
//         spaceBetween={10}
//         slidesPerView={images.length}
//         freeMode
//         watchSlidesProgress
//       >
//         {images.map((src, index) => (
//           <SwiperSlide key={index} className="w-24 cursor-pointer">
//             <Image
//               src={src}
//               alt={`Thumb ${index + 1}`}
//               width={1600}
//               height={800}
//               className="object-cover rounded-md border-2 border-transparent hover:border-blue-500 transition"
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default SwiperGallery;
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const images = [
  "/upload/services/influencer-pugazh-1.webp",
  "/upload/services/influencer-pugazh-2.webp",
  "/upload/services/influencer-pugazh-3.webp",
  "/upload/services/influencer-pugazh-1.webp",
  "/upload/services/influencer-pugazh-2.webp",
  "/upload/services/influencer-pugazh-3.webp",
];

export default function TripleLoopSlider() {
  return (
    <div className="w-80 md:w-210 lg:w-full px-4">
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={3}
        spaceBetween={20}
        loop={true}
        speed={600}
        centeredSlides={false}
        /** 👇 THIS gives left + right "inside/peek" */
        slidesOffsetBefore={0}
        slidesOffsetAfter={0}

        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev",
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
          },
          640: {
            slidesPerView: 2,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
          },
          1024: {
            slidesPerView: 3,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
          },
        }}
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <div className="w-full h-full  overflow-hidden  shadow-lg">
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
        <div className="swiper-next absolute right-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-white">
          ❯
        </div>
        <div className="swiper-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-white">
          ❮
        </div>
      </Swiper>
    </div>
  );
}
