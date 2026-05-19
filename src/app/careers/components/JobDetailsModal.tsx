"use client";

import { useState, useEffect } from "react";
import { X, MapPin, BriefcaseBusiness, MonitorCog } from "lucide-react";
import { fetchJobBySlug, type Job as JobType } from "../../api/JobAPI";

interface JobDetailsModalProps {
  isOpen: boolean;
  jobSlug: string | null;
  onClose: () => void;
  onApplyNow: (job: JobType) => void;
}

export default function JobDetailsModal({ isOpen, jobSlug, onClose, onApplyNow }: JobDetailsModalProps) {
  const [selectedJob, setSelectedJob] = useState<JobType | null>(null);
  const [loading, setLoading] = useState(false);

  // Load job details when modal opens
  useEffect(() => {
    if (isOpen && jobSlug) {
      loadJobDetails(jobSlug);
    }
  }, [isOpen, jobSlug]);

  async function loadJobDetails(slug: string) {
    setLoading(true);
    try {
      const job = await fetchJobBySlug(slug);
      if (job) {
        setSelectedJob(job);
      }
    } catch (error) {
      console.error("Failed to load job details:", error);
    } finally {
      setLoading(false);
    }
  }

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[999]"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-[#0A1628] border dark:border-[rgba(255,255,255,0.08)] p-4 md:p-8 lg:p-10 rounded-xl shadow-xl w-[90%] max-w-3xl relative max-h-screen overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] transition-colors duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 bg-white dark:bg-[#0A1628] border dark:border-[rgba(255,255,255,0.08)] w-8 h-8 mt-6 mr-5 rounded-full flex items-center justify-center shadow cursor-pointer transition-colors duration-300"
        >
          <X size={20} color="#088b3cff" strokeWidth={3} />
        </button>

        {loading ? (
          <div className="space-y-6 animate-pulse">
            <div className="h-12 bg-gradient-to-r from-gray-300 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-lg w-3/4"></div>
            <div className="flex gap-4">
              <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded-full w-32"></div>
              <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded-full w-40"></div>
            </div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-11/12"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-10/12"></div>
            </div>
            <div className="h-14 bg-gradient-to-r from-gray-300 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-xl"></div>
          </div>
        ) : selectedJob ? (
          <>
            {/* Header Section */}
            <div className="border-b-2 border-amber-500/20 pb-6 mb-6">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-[#07334d] to-[#3DBC9C] bg-clip-text text-transparent dark:from-green-400 dark:to-blue-400">
                {selectedJob.jobTitle}
              </h2>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#3DBC9C]/10 to-[#07334d]/10 border border-[#3DBC9C]/30 rounded-full text-sm font-semibold text-[#07334d] dark:text-green-400">
                  <MapPin size={20} color="#3DBC9B" strokeWidth={1.5}  className="mx-1"/> {selectedJob.city}, {selectedJob.state}
                </span>
                <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-full text-sm font-semibold text-amber-600 dark:text-amber-400">
                  <BriefcaseBusiness size={20} color="#d67900" strokeWidth={1.5}  className="mx-1"/> {selectedJob.jobType}
                </span>
                <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-full text-sm font-semibold text-blue-600 dark:text-blue-400">
                  <MonitorCog size={20} color="#1839f2" strokeWidth={1.5}  className="mx-1"/> { selectedJob.workExpierience?.split(' ')[selectedJob.workExpierience.split(' ').length - 1] === "years" ? selectedJob.workExpierience : selectedJob.workExpierience + " years" || selectedJob.jobType}
                </span>
              </div>
            </div>

            {/* Content Sections */}
            <div className="space-y-6">
              {/* Description */}
              <div className="bg-gradient-to-br from-gray-50 to-white dark:from-[#050D1A] dark:to-[#0D2244] p-6 rounded-xl border border-gray-200 dark:border-[rgba(255,255,255,0.08)]">
                <h3 className="text-xl font-bold mb-3 text-[#07334d] dark:text-green-400 flex items-center gap-2">
                  <span className="w-1 h-6 bg-gradient-to-b from-[#3DBC9C] to-[#07334d] rounded-full"></span>
                  Job Description
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{selectedJob.jobDescription}</p>
              </div>

              {/* Responsibilities */}
              {selectedJob.responsibilities && selectedJob.responsibilities.length > 0 && (
                <div className="bg-gradient-to-br from-green-50 to-white dark:from-green-900/20 dark:to-gray-900 p-6 rounded-xl border border-green-200 dark:border-green-800">
                  <h3 className="text-xl font-bold mb-4 text-[#07334d] dark:text-green-400 flex items-center gap-2">
                    <span className="w-1 h-6 bg-gradient-to-b from-[#3DBC9C] to-[#07334d] rounded-full"></span>
                    Key Responsibilities
                  </h3>
                  <ul className="space-y-3">
                    {selectedJob.responsibilities.map((resp, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                        <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-[#3DBC9C] to-[#07334d] rounded-full flex items-center justify-center text-white text-sm font-bold">{index + 1}</span>
                        <span className="pt-0.5">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Qualifications */}
              {selectedJob.qualifications && selectedJob.qualifications.length > 0 && (
                <div className="bg-gradient-to-br from-amber-50 to-white dark:from-amber-900/20 dark:to-gray-900 p-6 rounded-xl border border-amber-200 dark:border-amber-800">
                  <h3 className="text-xl font-bold mb-4 text-[#07334d] dark:text-amber-400 flex items-center gap-2">
                    <span className="w-1 h-6 bg-gradient-to-b from-amber-500 to-orange-500 rounded-full"></span>
                    Required Qualifications
                  </h3>
                  <ul className="space-y-3">
                    {selectedJob.qualifications.map((qual, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                        <span className="flex-shrink-0 text-amber-500 text-lg">✓</span>
                        <span>{qual}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Skills */}
              {selectedJob.skills && selectedJob.skills.length > 0 && (
                <div className="bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/20 dark:to-gray-900 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                  <h3 className="text-xl font-bold mb-4 text-[#07334d] dark:text-blue-400 flex items-center gap-2">
                    <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></span>
                    Required Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedJob.skills.map((skill, index) => (
                      <span key={index} className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-shadow">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Apply Button */}
              <button
                onClick={() => {
                  onClose();
                  onApplyNow(selectedJob);
                }}
                className="w-full bg-gradient-to-r from-[#3DBC9C] to-[#07334d] hover:from-[#07334d] hover:to-[#3DBC9C] text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
              >
                Apply for this Position →
              </button>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
