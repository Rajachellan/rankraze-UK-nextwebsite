import Image from "next/image";
import Link from "next/link";
import { ChevronsRight } from "lucide-react";

import { Metadata } from "next";
export const metadata:Metadata = {
    title: "Internship - Rankraze",
    description: "Join our digital marketing internship to gain hands-on experience, learn from experts, and start a strong career journey.",
    
keywords: [
   
],



                
    alternates: {
        canonical: "https://rankraze.us/internship",
    },

    openGraph: {
        title: "Internship - Rankraze",
        description: "Let’s Work Together Rankraze providing opportunity to start your career path in digital marketing for those who want to learn in an intern periods 3 or 6 months. Register now to grab this opportunity: It is a Free Internship Assisting in creating engaging content for social media platforms. Conducting market research and competitor analysis. Optimizing […]",
        url: "https://rankraze.us/internship",
        siteName: "Rankraze",
        images: [
        {
            url: "upload/intern-1.webp",
            width: 693,
            height: 259,
            alt: "intern-1",
            type: "image/webp"
        },
        ],
        locale: "en_US",
        type: "article",
    },
}

export default function InternshipPage() {
  return (
    <>
      <section className="w-full grid place-items-center dark:bg-none mt-20 px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-9 md:gap-12 lg:gap-14 xl:gap-16">
        <div className="w-full flex items-center justify-center relative before:content-[''] before:absolute before:w-full before:h-full before:bg-linear-to-b before:from-[#DAF8F1] before:to-transparent dark:before:invert before:rounded-t-4xl before:-z-10">
          <div className="w-full flex flex-col items-center justify-center gap-2.5 md:gap-3.t xl:gap-4 py-8 md:py-12 xl:py-20 2xl:py-24 max-w-2xl">
            <h1 className="text-2xl xl:text-4xl capitalize font-bold text-gray-800 dark:text-gray-100">
              Internship
            </h1>
            <h2 className="text-base xl:text-lg text-center text-gray-700 dark:text-gray-300 font-semibold leading-none px-7">
              {"Let's Work Together"}
            </h2>
          </div>
        </div>
      </section>

      <section className="w-full grid place-items-center mt-24 px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 relative">
        <div className="w-full grid place-items-center px-3 md:px-5 lg:px-8 xl:px-12 2xl:px-14 py-10 md:py-20 overflow-hidden relative rounded-md md:rounded-lg lg:rounded-xl xl:rounded-2xl 2xl:rounded-4xl">
          <div className="w-full max-w-7xl flex flex-col md:flex-row items-stretch justify-between gap-6 md:gap-0">
            {/* left */}
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center gap-4 pl-2.5 ">
              <p className="text-lg md:text-lg text-gray-500 dark:text-gray-300 text-center md:text-left pr-4 py-3">
                Rankraze providing opportunity to start your career path in
                digital marketing for those who want to learn in an intern
                periods 3 or 6 months. Register now to grab this opportunity:IT
                is a{" "}
                <span className="text-red-600 font-bold"> Free Internship</span>{" "}
              </p>
              <p className="  text-gray-600 dark:text-[var(--foreground)]">
                <ChevronsRight
                  className="w-5 h-5  inline mr-5"
                  color="#3DBC9B"
                />
                Assisting in creating engaging content for social media
                platforms.
              </p>
              <p className=" text-gray-600 dark:text-[var(--foreground)]">
                <ChevronsRight
                  className="w-5 h-5  inline mr-5"
                  color="#3DBC9B"
                />
                Conducting market research and competitor analysis.
              </p>
              <p className=" text-gray-600 dark:text-[var(--foreground)]">
                <ChevronsRight
                  className="w-5 h-5  inline mr-5"
                  color="#3DBC9B"
                />
                Optimizing website content for search engines (SEO).
              </p>
              <p className=" text-gray-600 dark:text-[var(--foreground)]">
                <ChevronsRight
                  className="w-5 h-5  inline mr-5"
                  color="#3DBC9B"
                />
                Assisting in email marketing campaigns and analyzing their
                performance.
              </p>
              <p className=" text-gray-600 dark:text-[var(--foreground)] ">
                <ChevronsRight
                className="w-5 h-5  inline mr-5"
                  color="#3DBC9B"
                />
                Monitoring and reporting on key performance indicators (KPIs).
              </p>
              <p className=" text-gray-600 dark:text-[var(--foreground)]">
                <ChevronsRight
                  className="w-5 h-5  inline mr-5"
                  color="#3DBC9B"
                />
                Collaborating with team members on various marketing
                initiatives.
              </p>
              <p className=" text-gray-600 dark:text-[var(--foreground)]">
                <ChevronsRight
                  className="w-5 h-5  inline mr-5"
                  color="#3DBC9B"
                />
                Contributing fresh ideas to improve our marketing strategies.
              </p>

              {/* 

        <Link
          href="#"
          className="overflow-hidden capitalize text-sm text-white px-6 py-2.5 relative bg-linear-to-br from-[#3DBC9C] to-[#36aaf1] rounded-lg">
          Get Started Today
        </Link> */}
            </div>
            {/* right */}
            <div className="w-full md:w-1/2 lg:w-2/5 flex items-center justify-center py-2.5">
              <Image
                src="/upload/intern-1.webp"
                alt="client-logo-1"
                width={693}
                height={259}
                className="w-full object-cover rounded-lg static"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="w-full grid place-items-center px-3 md:px-5 lg:px-8 xl:px-12 2xl:px-14 py-10 md:py-20 overflow-hidden relative rounded-md md:rounded-lg lg:rounded-xl xl:rounded-2xl 2xl:rounded-4xl dark:shadow-white">
        <div className="w-full max-w-7xl flex flex-col md:flex-row items-stretch justify-between gap-6 md:gap-0">
          {/* left */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center gap-4 pl-2.5 ">
            <h3 className="text-4xl xl:text-[30px] font-semibold text-center md:text-left text-[var(--primary-green)] capitalize dark:text-gray-200 pr-4">
              If you have a project that you have been thinking about,We would
              love to talk to you.
            </h3>
            <Link
              href="/contact-us"
              className="overflow-hidden capitalize text-sm text-white px-6 py-2.5 my-4 relative bg-linear-to-br from-[#3DBC9C] to-[#36aaf1] rounded-lg"
            >
              Contact Us
            </Link>
          </div>
          {/* right */}
          <div className="w-full md:w-1/2 lg:w-2/5 flex flex-col gap-4 py-2.5">
            {/* Point 1 */}
            <p className="relative flex gap-3 items-start before:content-[''] before:w-2 before:h-2 before:bg-gray-500 before:rounded-full before:absolute before:left-0 before:top-2 pl-4 m-0">
              <p className="text-gray-600 dark:text-[var(--foreground)]  text-sm">
                <span className="font-semibold text-gray-700 text-sm dark:text-white">
                  Learn from the Best:
                </span>
                Work closely with our seasoned marketing team and gain insights
                into the latest digital marketing strategies and tools.
              </p>
            </p>

            {/* Point 2 */}
            <p className="relative flex gap-3 items-start before:content-[''] before:w-2 before:h-2 before:bg-gray-500 before:rounded-full before:absolute before:left-0 before:top-2 pl-4 m-0">
              <p className="text-gray-600 dark:text-[var(--foreground)]  text-sm">
                <span className="font-semibold text-gray-700 dark:text-white  text-sm">
                  {" "}
                  Real Projects, Real Impact:{" "}
                </span>
                Get involved in exciting marketing campaigns and contribute your
                ideas to make a genuine impact on our brand’s online presence.
              </p>
            </p>

            {/* Point 3 */}
            <p className="relative flex gap-3 items-start before:content-[''] before:w-2 before:h-2 before:bg-gray-500 before:rounded-full before:absolute before:left-0 before:top-2 pl-4">
              <p className="text-gray-600 dark:text-[var(--foreground)]  text-sm">
                <span className="font-semibold text-gray-700 dark:text-white  text-sm">
                  Skill Development:
                </span>
                Enhance your skills in social media management, content
                creation, SEO, email marketing, analytics, and more.
              </p>
            </p>

            {/* Point 4 */}
            <p className="relative flex gap-3 items-start before:content-[''] before:w-2 before:h-2 before:bg-gray-500 before:rounded-full before:absolute before:left-0 before:top-2 pl-4">
              <p className="text-gray-600 dark:text-[var(--foreground)]  text-sm">
                <span className="font-semibold text-gray-700 dark:text-white  text-sm">
                  Networking Opportunities:{" "}
                </span>
                Build valuable connections within the industry and establish a
                strong foundation for your marketing career.
              </p>
            </p>

            {/* Point 5 */}
            <p className="relative flex gap-3 items-start before:content-[''] before:w-2 before:h-2 before:bg-gray-500 before:rounded-full before:absolute before:left-0 before:top-2 pl-4">
              <p className="text-gray-600 dark:text-[var(--foreground)]  text-sm">
                <span className="font-semibold text-gray-700 dark:text-white  text-sm">
                  Fun and Supportive Environment:{" "}
                </span>
                Join a friendly team that values creativity, collaboration, and
                innovation.
              </p>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
