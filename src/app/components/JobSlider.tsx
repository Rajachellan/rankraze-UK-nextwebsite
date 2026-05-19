// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import JobCard, { JobProps } from "./JobCard";

// const jobs: JobProps[] = [
//   {
//     posted: "2 days ago",
//     title: "React Developer",
//     location: "Chennai",
//     experience: "1–3 years",
//   },
//   {
//     posted: "5 days ago",
//     title: "UI/UX Designer",
//     location: "Bangalore",
//     experience: "2–4 years",
//   },
//   {
//     posted: "1 week ago",
//     title: "Digital Marketing",
//     location: "Remote",
//     experience: "0–2 years",
//   },
//   {
//     posted: "3 days ago",
//     title: "Node.js Developer",
//     location: "Coimbatore",
//     experience: "2–5 years",
//   },
// ];
// export default function JobSlider() {
//   return (
//     <Swiper
//       modules={[Navigation, Pagination]}
//       pagination={{ clickable: true }}
//       navigation
//       spaceBetween={20}
//       breakpoints={{
//         320: { slidesPerView: 1 },  
//         640: { slidesPerView: 2 }, 
//         1024: { slidesPerView: 4 }, 
//       }}
//       className="pb-10"
//     >
//       <SwiperSlide>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {jobs.map((job, i) => (
//             <JobCard key={i} {...job} />
//           ))}
//         </div>
//       </SwiperSlide>
//     </Swiper>
//   );
// }
