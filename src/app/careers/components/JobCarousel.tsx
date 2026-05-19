"use client";

import { useState } from "react";
import { MoveRight, MoveLeft } from "lucide-react";
import type { Job as JobType } from "../../api/JobAPI";

interface JobCarouselProps {
  jobs: JobType[];
  onViewDetails: (slug: string) => void;
  onApplyNow: (job: JobType) => void;
}

export default function JobCarousel({ jobs, onViewDetails, onApplyNow }: JobCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Split jobs into groups of 4 for carousel slides
  const groupedJobs: JobType[][] = [];
  for (let i = 0; i < jobs.length; i += 4) {
    groupedJobs.push(jobs.slice(i, i + 4));
  }

  if (jobs.length === 0) {
    return (
      <section className="">
        <p className="text-center text-gray-400 my-10">No jobs available</p>
      </section>
    );
  }

  return (
    <section className="">
      <div className="relative w-full max-w-7xl mx-auto overflow-hidden">
        <div
          className="flex transition-all duration-700"
          style={{
            width: `${groupedJobs.length * 100}%`,
            transform: `translateX(-${(currentSlide * 100) / groupedJobs.length}%)`
          }}
        >
          {groupedJobs.map((jobGroup, slideIndex) => (
            <div key={slideIndex} className="w-full snap-center px-6" style={{ width: `${100 / groupedJobs.length}%` }}>
              <div className="min-w-full py-10">
                <div className="w-full place-items-center px-4 md:px-4 lg:px-10 text-[var(--text-black)]">
                  <div className="w-full flex flex-col lg:flex-row items-stretch justify-center gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto mt-10">
                    {jobGroup.slice(0, 2).map((job) => (
                      <div key={job._id} className="w-full lg:w-2.5/5 flex flex-col bg-white dark:bg-[#0A1628] shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.5)] p-6 border border-gray-200 dark:border-[rgba(255,255,255,0.08)] hover:border-[#3DBC9C] rounded-xl transition-all duration-300 group">
                        <div className="flex items-center justify-between mb-4">
                          <span className="inline-flex items-center px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-md text-sm font-semibold text-gray-600 dark:text-gray-400">
                            {new Date(job.createdAt).toLocaleDateString()}
                          </span>
                          <span className="inline-flex items-center px-3 py-1.5 bg-[#3DBC9C]/10 dark:bg-[#3DBC9C]/20 rounded-md text-sm font-semibold text-[#3DBC9C]">
                            Open Position
                          </span>
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-bold mb-3 text-[#07334d] dark:text-white group-hover:text-[#3DBC9C] transition-colors duration-300">
                          {job.jobTitle}
                        </h3>
                        <div className="flex flex-col gap-2 mb-6">
                          <div className="flex items-center text-sm font-medium text-gray-600 dark:text-gray-400">
                            <svg className="w-4 h-4 mr-2 text-[#3DBC9C]" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            {job.location} {job.city}, {job.state}
                          </div>
                          <div className="flex items-center text-sm font-medium text-gray-600 dark:text-gray-400">
                            <svg className="w-4 h-4 mr-2 text-[#3DBC9C]" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2h30a1 1 0 01-1-1z" clipRule="evenodd" />
                              <path d="M2 13.692V16a2 2 0 002 2h32a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                            </svg>
                            { job.workExpierience?.split(' ')[job.workExpierience.split(' ').length - 1] === "years" ? job.workExpierience : job.workExpierience + " years" || job.jobType}
                          </div>
                        </div>
                        <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700 flex gap-3">
                          <button
                            onClick={() => onViewDetails(job.slug)}
                            className="flex-1 px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-[#3DBC9C] hover:text-[#3DBC9C] transition-all duration-200"
                          >
                            View Details
                          </button>
                          <button
                            onClick={() => onApplyNow(job)}
                            className="flex-1 px-4 py-2.5 bg-[#3DBC9C] hover:bg-[#07334d] text-white font-semibold rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
                          >
                            Apply Now
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  {jobGroup.length > 2 && (
                    <div className="w-full flex flex-col lg:flex-row items-stretch justify-center gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto mt-10">
                      {jobGroup.slice(2, 4).map((job) => (
                        <div key={job._id} className="w-full md:w-2.5/5 lg:w-2.5/5 flex flex-col bg-white dark:bg-[#0A1628] shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.5)] p-6 border border-gray-200 dark:border-[rgba(255,255,255,0.08)] hover:border-[#3DBC9C] rounded-xl transition-all duration-300 group">
                          <div className="flex items-center justify-between mb-4">
                            <span className="inline-flex items-center px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-md text-sm font-semibold text-gray-600 dark:text-gray-400">
                              {new Date(job.createdAt).toLocaleDateString()}
                            </span>
                            <span className="inline-flex items-center px-3 py-1.5 bg-[#3DBC9C]/10 dark:bg-[#3DBC9C]/20 rounded-md text-sm font-semibold text-[#3DBC9C]">
                              Open Position
                            </span>
                          </div>
                          <h2 className="text-2xl lg:text-3xl font-bold mb-3 text-[#07334d] dark:text-white group-hover:text-[#3DBC9C] transition-colors duration-300">
                            {job.jobTitle}
                          </h2>
                          <div className="flex flex-col gap-2 mb-6">
                            <div className="flex items-center text-sm font-medium text-gray-600 dark:text-gray-400">
                              <svg className="w-4 h-4 mr-2 text-[#3DBC9C]" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                              </svg>
                              {job.location}, {job.city}, {job.state}
                            </div>
                            <div className="flex items-center text-sm font-medium text-gray-600 dark:text-gray-400">
                              <svg className="w-4 h-4 mr-2 text-[#3DBC9C]" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2h30a1 1 0 01-1-1z" clipRule="evenodd" />
                                <path d="M2 13.692V16a2 2 0 002 2h32a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                              </svg>
                              { job.workExpierience?.split(' ')[job.workExpierience.split(' ').length - 1] === "years" ? job.workExpierience : job.workExpierience + " years" || job.jobType}
                            </div>
                          </div>
                          <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700 flex gap-3">
                            <button
                              onClick={() => onViewDetails(job.slug)}
                              className="flex-1 px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-[#3DBC9C] hover:text-[#3DBC9C] transition-all duration-200"
                            >
                              View Details
                            </button>
                            <button
                              onClick={() => onApplyNow(job)}
                              className="flex-1 px-4 py-2.5 bg-[#3DBC9C] hover:bg-[#07334d] text-white font-semibold rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
                            >
                              Apply Now
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        {groupedJobs.length > 1 && (
          <>
            <button
              onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
              disabled={currentSlide === 0}
              className="absolute left-5 top-1/2 -translate-y-1/2 bg-white shadow-lg w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
            >
              <MoveLeft size={30} color="#060358ff" />
            </button>
            <button
              onClick={() => setCurrentSlide(Math.min(groupedJobs.length - 1, currentSlide + 1))}
              disabled={currentSlide === groupedJobs.length - 1}
              className="absolute right-5 top-1/2 -translate-y-1/2 bg-white shadow-lg w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
            >
              <MoveRight size={30} color="#060358ff" />
            </button>
          </>
        )}
      </div>
    </section>
  );
}
