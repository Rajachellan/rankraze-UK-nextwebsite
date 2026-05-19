import Image from "next/image";
import { getCachedJobs } from "../api/jobs-cache";
import type { Job as JobType } from "../api/JobAPI";
import {
  Trophy,
  FileSpreadsheet,
  Search,
  Globe,
  Waypoints,
  Handshake,
  Lightbulb,
  CircleCheckBig,
  UserStar,
  ArrowUpNarrowWide,
  LaptopMinimalCheck,
  Youtube,
} from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CareersClientWrapper from "./components/CareersClientWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers at Rankraze | Join Our Team",
  description: "Join Rankraze and build your future with exciting opportunities in a team that values growth and innovations. Explore open positions in digital marketing.",
  
  keywords: [
    "careers at Rankraze",
    "digital marketing jobs",
    "job opportunities",
    "careers in Texas",
    "digital marketing careers",
    "Rankraze jobs",
    "career growth",
    "team culture",
    "work opportunities"
  ],

  alternates: {
    canonical: "https://rankraze.us/careers",
  },

  openGraph: {
    title: "Careers at Rankraze | Join Our Team",
    description: "Join Rankraze and build your future with exciting opportunities in a team that values growth and innovations.",
    url: "https://rankraze.us/careers",
    siteName: "Rankraze",
    images: [
      {
        url: "/upload/career/career-section-1-1x.webp",
        width: 430,
        height: 548,
        alt: "Careers at Rankraze",
        type: "image/webp"
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default async function CareersPage() {
  // Fetch jobs on server-side
  let jobs: JobType[] = [];
  try {
    const response = await getCachedJobs();
    jobs = response.jobs || [];
  } catch (error) {
    console.error("Failed to fetch jobs:", error);
    jobs = [];
  }

  return (
    <>
      {/* Client wrapper with job carousel */}
      <CareersClientWrapper initialJobs={jobs} />

      {/* section 8 - Build Your Future */}
      <section className="w-full grid place-items-center px-4 md:px-6 lg:px-10 text-[var(--text-black)] relative overflow-x-hidden dark:bg-[var(--prim-dark-bg)] transition-colors duration-300">
        <div className="w-full max-w-7xl flex flex-col items-center justify-center gap-10 mt-10 lg:mt-20 z-10">
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-10 lg:h-50">
            <div className="flex flex-col items-center md:items-start md:pl-20 lg:pl-70 ">
              <div className="border border-orange-500 p-2.5 rounded-xl flex items-center justify-center shadow-xl/30 shadow-orange-300 rotate-55">
                <div className="border border-orange-500 p-1 rounded-sm flex items-center justify-center">
                  <Search
                    size={25}
                    color="#de9e14ff"
                    strokeWidth={1}
                    className="rotate-300"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center text-center flex-1 px-4">
              <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold dark:text-green-400">
                Build Your Future With Us
              </h2>

              <p className="max-w-md text-gray-500 text-sm md:text-base font-semibold dark:text-gray-400">
                Discover Exciting Opportunities and grow your career in a
                thriving environment.
              </p>
              <div className="mt-8">
                <a 
                  href="/careers/jobs"
                  className="px-8 py-3 bg-[var(--primary-green)] text-white font-bold rounded-full hover:bg-[var(--primary-blue)] transition-all duration-300 shadow-lg hover:shadow-[var(--primary-green)]/20"
                >
                  View Open Roles
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-end md:pr-20 lg:pr-60 lg:mt-20">
              <div className="border border-[var(--primary-green)] p-2.5 rounded-xl flex items-center justify-center shadow-xl/30 shadow-green-400 rotate-30">
                <div className="border border-[var(--primary-green)] p-1 rounded-sm flex items-center justify-center">
                  <Globe size={25} color="#3DBC9B" strokeWidth={1} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full mt-10 md:mt-16 px-3 sm:px-5 md:px-8 text-[var(--text-black)] dark:bg-[var(--prim-dark-bg)] transition-colors duration-300">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 md:gap-6 max-w-8xl mx-auto">
          <div className="absolute w-4/5 md:w-3/10 shadow-lg border-1 p-5 rounded-xl mt-0 bg-white-900 dark:text-gray-300 text-sm font-semibold dark:bg-gray-800 dark:border-2 dark:border-gray-400">
            <p>
              At Rankraze,we merge creativity with strategy to craft digital
              experiences that captivate and perform
            </p>
          </div>
          <Image
            src="/upload/career/career-section-1-1x.webp"
            alt="client-logo-1"
            width={430}
            height={548}
            className="w-full h-auto object-cover mt-40 md:mt-60 rounded-lg static"
          />
          <Image
            src="/upload/career/career-section-1-2x.webp"
            alt="client-logo-2"
            width={516}
            height={634}
            className="w-full h-auto object-cover mt-35 md:mt-40 rounded-lg"
          />
          <Image
            src="/upload/career/career-section-1-3x.webp"
            alt="client-logo-3"
            width={706}
            height={934}
            className=" lg:h-100 md:mt-50 h-50 object-cover rounded-lg mt-5 lg:mt-20"
          />
          <Image
            src="/upload/career/career-section-1-4x.webp"
            alt="client-logo-4"
            width={510}
            height={644}
            className="w-full h-auto object-cover mt-5 md:mt-50 rounded-lg"
          />
          <Image
            src="/upload/career/career-section-1-5x.webp"
            alt="client-logo-5"
            width={434}
            height={360}
            className="w-full h-auto object-cover rounded-lg mt-10 md:mt-40"
          />
        </div>
      </section>
      <section className="w-full place-items-center mt-10 md:mt-20 px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 relative dark:bg-[var(--prim-dark-bg)] overflow-x-hidden transition-colors duration-300">
        {/* Left container */}
        <div className="w-full flex flex-col md:flex-row items-stretch justify-center gap-3.5 md:gap-5 lg:gap-8  max-w-7xl mt-10 md:mt-14 lg:mt-16 xl:mt-20 ">
          <div className="w-full md:w-1/2 flex flex-col items-start justify-start p-5 ">
            <h3 className="text-l md:text-l font-bold capitalize text-amber-500 dark:text-amden-200 ">
              WHY JOIN US?
            </h3>
            <h3 className="text-xl md:text-2xl font-bold capitalize  text-black-500 dark:text-gray-200 my-5">
              Experience a workplace that values your{" "}
              <span className="text-[var(--primary-green)] dark:text-green-300">
                {" "}
                growth,creativity and well-being.
              </span>
            </h3>
            <p className="text-gray-500 w-70 md:w-90 text-sm font-medium dark:text-gray-300">
              {" "}
              Experience a fullfilling a career with growth,flexcibility,and a
              supportive team culture.
            </p>
            <div className="w-full my-10 shadow-lg rounded-xl dark:border-2 border-gray-400">
              <div className="flex flex-col md:flex-row w-full">
                <div className="w-full md:w-3/5 p-5 ">
                  <h2 className="text-xl md:text-2xl py-5 pt-7 font-semibold dark:text-green-300">
                    Advance quickly with clear growth opportunities.
                  </h2>
                  <p className="text-gray-500 font-semibold dark:text-gray-300">
                    Accelerate your career growth with well-defined paths to
                    leadership and abundant opportunities for advancement.
                  </p>
                </div>
                <div className="w-full md:w-2/5 p-4">
                  <Image
                    src="/upload/career/career-section-2-2x.webp"
                    alt="career-image"
                    width={402}
                    height={446}
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              <div className="w-full mt-3 border-2 shadow-lg p-5 rounded-xl dark:border-2 dark:border-gray-400">
                <h3 className="text-2xl font-semibold text-black dark:text-green-300">
                  Supportive Team Culture
                </h3>
                <p className="text-gray-500 text-base py-2 font-semibold dark:text-gray-300">
                  Collaborate with a talented, diverse team in a supportive and
                  inclusive environment that fosters creativity and growth.
                </p>
              </div>
              <div className="w-full mt-3 border-2 shadow-lg p-5 rounded-xl dark:border-2 dark:border-gray-400">
                <h3 className="text-xl font-semibold text-center text-black dark:text-green-300">
                  Exciting Projects
                </h3>

                <Image
                  src="/upload/career/career-section-2-4x.webp"
                  alt="career-image"
                  width={402}
                  height={446}
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
            </div>
          </div>

          {/* right  */}
          <div className="w-full md:w-1/2  flex flex-col items-start justify-start p-5 ">
            <div className="shadow-lg p-10 rounded-xl dark:border-2 border-gray-400">
              <Image
                src={"/upload/career/career-section-2-1x.webp"}
                alt="client-logo-1"
                width={460}
                height={270}
                className="w-3/5 h-30 md:h-40 lg:h-50 p-1 static"
              />
              <h3 className="font-semibold text-black-600 text-xl md:text-2xl lg:text-3xl dark:text-green-300">
                Flexible Work Environment
              </h3>
              <p className="text-gray-500 font-semibold dark:text-gray-300">
                Greater autonomy ,improved work-life balance,reduced sommute
                stress,and opportunities to tailor work to personal rhythms.
              </p>
            </div>
            <div className="w-full my-10 shadow-lg rounded-xl">
              <div className="flex flex-col md:flex-row w-full dark:border-2 border-gray-400 rounded-xl">
                <div className="w-full flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12 px-5 md:px-10 pb-5 md:pb-10 lg:pb-8 lg:px-0">
                  {/* Left */}
                  <div className="w-full lg:w-3/5">
                    <h2 className="text-xl md:text-2xl lg:text-2xl font-semibold py-5 lg:px-10 pt-7 dark:text-green-300">
                      Comprehensive Benefits Package
                    </h2>

                    <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg lg:px-10 leading-relaxed font-medium">
                      Receive competitive compensation, comprehensive health
                      coverage, and a range of valuable perks designed to
                      support your well-being and success.
                    </p>
                  </div>

                  {/* Right */}
                  <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
                    <Image
                      src="/upload/career/career-section-2-3x.webp"
                      alt="career-benefits"
                      width={272}
                      height={516}
                      className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full h-55 sm:h-72 md:h-70 lg:h-80 object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* seection 4 */}
      <section className="w-full place-items-center mt-10 md:mt-20 px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 relative overflow-x-hidden">
        <div className="w-full flex flex-col md:flex-row items-stretch justify-center gap-3.5 md:gap-5 lg:gap-8  max-w-7xl mt-10 md:mt-14 lg:mt-16 xl:mt-20">
          {/* left container */}
          <div className="w-full md:w-1/2 flex flex-col items-start justify-start p-5">
            <Image
              src="/upload/career/career-section-4_2x.webp"
              alt="client-logo-1"
              width={974}
              height={974}
              className="w-full md:mt-50 lg:mt-2 p-1 static"
            />
            <div className="absolute w-40 md:w-30 text-center font-semibold rounded-xl rounded-t-xl  mt-50 ml-30 md:mt-80 lg:mt-100 md:ml-40 lg:ml-130 shadow-lg bg-white">
              <h3 className="bg-white font-semibold p-3 md:text-sm ">
                Expert Team Members
              </h3>
              <div className="flex -space-x-4 rtl:space-x-reverse p-2 pl-3">
                <Image
                  src={"/upload/career/career-person-1.jpg"}
                  alt="client-logo-1"
                  width={974}
                  height={974}
                  className="w-10 h-10 border-2 border-buffer rounded-full bg-white"
                />
                <Image
                  src={"/upload/career/career-person-3.jpg"}
                  alt="client-logo-1"
                  width={974}
                  height={974}
                  className="w-10 h-10 border-2 border-buffer rounded-full bg-white"
                />
                <Image
                  src={"/upload/career/career-person-2.jpg"}
                  alt="client-logo-1"
                  width={974}
                  height={974}
                  className="w-10 h-10 border-2 border-buffer rounded-full bg-white"
                />
                <a
                  className="flex items-center justify-center w-10 h-10 text-sm font-medium text-black bg-orange-300 border-2 border-buffer rounded-full"
                  href="#"
                >
                  5+
                </a>
              </div>
            </div>
          </div>
          {/* right container */}
          <div className="w-full lg:w-1/2 flex flex-col items-start justify-start p-5">
            <h4 className="text-l md:text-l font-bold capitalize text-amber-500 dark:text-amden-200">
              OUR BENIFITS
            </h4>
            <h4 className="text-xl md:text-2xl font-bold capitalize text-black-500 dark:text-gray-300 my-5">
              Our Agency Has Been Present For Over 10 Years In Digital Agency!
            </h4>
            <p className="text-gray-500  text-sm font-medium ">
              {"Our business is growing and we are looking to expand our team with people who are just as passionate as we are in shaping our clients&apos; digital future."}

            </p>

            <div className="grid grid-cols-3 gap-6 text-center mt-20 md:mt-30 md:pl-20 pl-1">
              <div className="flex flex-col items-center">
                <div className="border-1 border-[var(--primary-green)] p-3 rounded-xl flex items-center justify-center shadow-[_0_4px_6px_var(--primary-green)] ">
                  <div className="border-1 border-[var(--primary-green)] p-1 rounded-xl flex items-center justify-center">
                    <Trophy size={40} color="#3DBC9B" strokeWidth={1} />
                  </div>
                </div>
                <h3 className="mt-10 font-semibold text-[var(--primary-green)] text-sm md:text-sm lg:text-xl">
                  Award Winning
                </h3>
              </div>

              <div className="flex flex-col items-center">
                <div className="border-1 border-[var(--primary-green)] p-3 rounded-xl flex items-center justify-center shadow-[_0_4px_6px_var(--primary-green)] ">
                  <div className="border-1 border-[var(--primary-green)] p-1 rounded-xl flex items-center justify-center">
                    <Waypoints size={40} color="#3DBC9B" strokeWidth={1} />
                  </div>
                </div>
                <h3 className="mt-10 font-semibold text-[var(--primary-green)] text-sm md:text-sm lg:text-xl">
                  Networking
                </h3>
              </div>

              <div className="flex flex-col items-center">
                <div className="border-1 border-[var(--primary-green)] p-3 rounded-xl flex items-center justify-center shadow-[_0_4px_6px_var(--primary-green)] ">
                  <div className="border-1 border-[var(--primary-green)] p-1 rounded-xl flex items-center justify-center">
                    <FileSpreadsheet
                      size={40}
                      color="#3DBC9B"
                      strokeWidth={1}
                    />
                  </div>
                </div>
                <h3 className="mt-10 font-semibold text-[var(--primary-green)] text-sm md:text-sm lg:text-xl">
                  Hands-on Experience
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section 5 */}
      {/* <section className="w-full  mt-10  md:mt-20 md:px-2   lg:px-20 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 relative overflow-x-hidden dark:bg-black p-5">
        <div className="w-full md:w-1/2 flex flex-col items-start justify-start px-5 md:px-10  ">
          <h6 className="text-l md:text-l font-bold capitalize text-amber-500 dark:text-amdan-200 ">
            OUR VALUES
          </h6>
          <h6 className="text-xl md:text-2xl font-bold capitalize text-black-500 dark:text-gray-300 my-5">
            How we&apos;re Guided
          </h6>
          <p className="text-gray-500 md:w-100 w-40 text-sm font-medium dark:text-gray:300">
            {" "}
            Dedicated to honesty,new ideas and team work.
          </p>
        </div>
      </section> */}
      {/* section 6 */}
      <section className="w-full place-items-center dark:bg-[var(--prim-dark-bg)] px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 relative overflow-x-hidden dark:md:py-10 transition-colors duration-300">
        <div className="w-full max-w-7xl mt-20 flex flex-col items-start justify-start  ">
          <h4 className="text-l md:text-l font-bold capitalize text-amber-500 dark:text-amdan-200 ">
            OUR VALUES
          </h4>
          <h4 className="text-xl md:text-2xl font-bold capitalize text-black-500 dark:text-gray-300 my-5">
            How we&apos;re Guided
          </h4>
          <p className="text-gray-500 md:w-100 w-40 text-sm font-medium dark:text-gray:300">
            {" "}
            Dedicated to honesty,new ideas and team work.
          </p>
        </div>
        <div className="w-full flex flex-col md:flex-row items-stretch justify-center gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto mt-10 md:mt-14 lg:mt-16 xl:mt-20 overflow-x-hidden">
          {/* inner left*/}
          <div className="w-full md:w-full lg:w-2.5/5 flex flex-col">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div className="pt-6 dark:border-r-2 dark:md:border-gray-300">
                <div className="flex flex-col items-center md:mr-20 lg:mr-30 md:mb-10 ">
                  <div className=" p-3 rounded-full bg-orange-300 flex items-center justify-center shadow-xl/30  ">
                    <Handshake size={30} color="black" strokeWidth={1} />
                  </div>
                </div>
                <h3 className="text-gray-800 dark:text-gray-200 font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl">
                  Honesty
                </h3>
                <p className="text-gray-500 dark:font-semibold dark:text-gray-400">
                  Creating intuitive, engaging, and effective user experiences.
                </p>
              </div>
              <div className="pt-6">
                <h3 className="text-gray-800 dark:text-gray-200 font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl">
                  <div className="flex flex-col items-center md:mr-20 lg:mr-30 md:mb-10">
                    <div className="border-1 border-[var(--primary-green)] p-3 rounded-full bg-[var(--primary-green)] flex items-center justify-center shadow-xl/20 ">
                      <Lightbulb size={30} color="black" strokeWidth={1} />
                    </div>
                  </div>
                  Creativity
                </h3>
                <p className="text-gray-500 dark:font-semibold dark:text-gray-400">
                  Building robust, scalable, and tailored web solutions.
                </p>
              </div>
              <div className="pt-6 dark:md:border-r-2 dark:border-gray-300">
                <h3 className="text-gray-800 dark:text-gray-200 font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl">
                  <div className="flex flex-col items-center md:mr-20 lg:mr-30 md:mb-10 ">
                    <div className=" p-3 rounded-full flex items-center bg-purple-200 justify-center shadow-xl/20 ">
                      <Search size={30} color="black" strokeWidth={1} />
                    </div>
                  </div>
                  Teamwork
                </h3>
                <p className="text-gray-500 dark:font-semibold dark:text-gray-400">
                  We collaborate closely and deliver outstanding results
                  together.
                </p>
              </div>
              <div className="pt-6">
                <h3 className="text-gray-800 dark:text-gray-200 font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl">
                  <div className="flex flex-col items-center md:mr-20 lg:mr-30 md:mb-10">
                    <div className="bg-blue-200 p-3 rounded-full flex items-center justify-center shadow-xl/20">
                      <CircleCheckBig size={30} color="black" strokeWidth={1} />
                    </div>
                  </div>
                  Quality
                </h3>
                <p className="text-gray-500 dark:font-semibold dark:text-gray-400">
                  We strive to deliver excellence in everything we do.
                </p>
              </div>
            </div>
          </div>
          {/* inner right */}
          <div className="w-full md:w-full md:mt-40 lg:mt-3 lg:w-2.5/5 flex flex-col items-center justify-center p-5 h-full">
            <div className="w-full h-full">
              <Image
                src={"/upload/career/career-section-2-5x.webp"}
                alt="client-logo-1"
                width={1200}
                height={848}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
      {/* section-6-2 */}
      <section className="w-full place-items-center px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 relative overflow-x-hidden dark:bg-[var(--prim-dark-bg)] transition-colors duration-300">
        <h3 className="text-4xl text-amber-500 p-5 pt-20 font-semibold">
          JOIN OUR TEAM!
        </h3>
        {/* row 1 */}
        <div className="w-full flex flex-col md:flex-row items-stretch justify-center gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto mt-10 md:mt-14 lg:mt-16 xl:mt-20">
          <div className="w-full h-full group relative cursor-pointer overflow-hidden rounded-lg">
            <Image
              src={"/upload/career/career-section-9-1x.webp"}
              alt="Image-1"
              width={1200}
              height={848}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-lg"
            />
            <div
              className="
        absolute inset-0 bg-white/60 opacity-0 group-hover:opacity-100
        transition-all duration-300 rounded-lg flex flex-col justify-center items-center text-white p-6
      "
            >
              <UserStar size={60} color="#05026bff" strokeWidth={3} />
              <p className="text-4xl mt-2 text-center text-[var(--primary-blue)] font-semibold">
                Sales Executive.
              </p>
            </div>
          </div>
          <div className="w-full md:w-2.5/5 group relative cursor-pointer overflow-hidden rounded-lg">
            <Image
              src={"/upload/career/career-section-9-2x.webp"}
              alt="Image-2"
              width={1200}
              height={848}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-lg"
            />
            <div
              className="
        absolute inset-0 bg-white/60 opacity-0 group-hover:opacity-100
        transition-all duration-300 rounded-lg flex flex-col justify-center items-center text-white p-6
      "
            >
              <ArrowUpNarrowWide size={60} color="#060358ff" strokeWidth={3} />
              <p className="text-4xl mt-2 text-center text-[var(--primary-blue)] font-semibold">
                Business Development Manager
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row items-stretch justify-center gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto mt-10 md:mt-14 lg:mt-16 xl:mt-20">
          <div className="w-full h-full group relative cursor-pointer overflow-hidden rounded-lg">
            <Image
              src={"/upload/career/career-section-9-3x.webp"}
              alt="Image-3"
              width={1200}
              height={848}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-lg"
            />
            <div
              className="
        absolute inset-0 bg-white/60 opacity-0 group-hover:opacity-100
        transition-all duration-300 rounded-lg flex flex-col justify-center items-center text-white p-6
      "
            >
              <LaptopMinimalCheck size={60} color="#05026bff" strokeWidth={3} />
              <p className="text-4xl mt-2 text-center text-[var(--primary-blue)] font-semibold">
                Digital Marketing Executive
              </p>
            </div>
          </div>
          <div className="w-full md:w-2.5/5 group relative cursor-pointer overflow-hidden rounded-lg">
            <Image
              src={"/upload/career/career-section-9-4x.webp"}
              alt="Image-4"
              width={1200}
              height={848}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-lg"
            />
            <div
              className="
        absolute inset-0 bg-white/60 opacity-0 group-hover:opacity-100
        transition-all duration-300 rounded-lg flex flex-col justify-center items-center text-white p-6
      "
            >
              <Youtube size={60} color="#05026bff" strokeWidth={3} />
              <p className="text-4xl mt-2 text-center text-[var(--primary-blue)] font-semibold">
                Motion Graphic
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}