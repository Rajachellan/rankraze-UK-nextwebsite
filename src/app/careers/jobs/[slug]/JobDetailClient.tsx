"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  MapPin, 
  Briefcase, 
  Clock, 
  Calendar, 
  Share2, 
  Linkedin, 
  Twitter, 
  Facebook,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  Building2,
  Globe2,
  Trophy,
  Lightbulb
} from "lucide-react";
import type { Job, JobApplicationData } from "../../../api/JobAPI";
import { applyForJob } from "../../../api/JobAPI";
import ApplicationModal from "../../components/ApplicationModal";

interface JobDetailClientProps {
  job: Job;
}

export default function JobDetailClient({ job }: JobDetailClientProps) {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [isShareTooltipOpen, setIsShareTooltipOpen] = useState(false);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = `Check out this job opening at Rankraze: ${job.jobTitle}`;

  const handleShare = (platform: string) => {
    let url = '';
    switch (platform) {
      case 'linkedin':
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
        break;
      case 'twitter':
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`;
        break;
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
    }
    if (url) window.open(url, '_blank', 'width=600,height=400');
  };

  return (
    <div className="bg-white dark:bg-[var(--prim-dark-bg)] min-h-screen pb-20 pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-[var(--primary-blue)] overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[var(--primary-green)]/15 to-transparent" />
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-[var(--primary-green)]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[var(--primary-green)]/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Link 
            href="/careers" 
            className="inline-flex items-center text-white/60 hover:text-white mb-12 transition-all group font-bold tracking-widest uppercase text-xs"
          >
            <ArrowLeft className="w-4 h-4 mr-3 group-hover:-translate-x-2 transition-transform" />
            Back to Open Roles
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
            <div className="flex-1 max-w-4xl">
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <span className="px-5 py-2 bg-[var(--primary-green)] text-white text-[10px] font-black rounded-full uppercase tracking-[0.2em] shadow-lg shadow-[var(--primary-green)]/20">
                  {job.jobType}
                </span>
                <span className="text-white/40 text-xs font-black uppercase tracking-[0.2em] flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-[var(--primary-green)]" />
                  Posted {new Date(job.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 leading-[1.1] tracking-tight">
                {job.jobTitle}
              </h1>
              <div className="flex flex-wrap gap-8 text-white/70">
                <div className="flex items-center font-bold text-sm uppercase tracking-wider">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mr-4">
                    <Building2 className="w-5 h-5 text-[var(--primary-green)]" />
                  </div>
                  Rankraze Digital
                </div>
                <div className="flex items-center font-bold text-sm uppercase tracking-wider">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mr-4">
                    <MapPin className="w-5 h-5 text-[var(--primary-green)]" />
                  </div>
                  {job.city}, {job.state}
                </div>
                <div className="flex items-center font-bold text-sm uppercase tracking-wider">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mr-4">
                    <Briefcase className="w-5 h-5 text-[var(--primary-green)]" />
                  </div>
                  {job.workExpierience || job.workExperience || "Experience Not Specified"}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-5 shrink-0">
              <button 
                onClick={() => setIsApplyModalOpen(true)}
                className="px-10 py-5 bg-[var(--primary-green)] text-white font-black text-xs uppercase tracking-[0.2em] rounded-2xl hover:bg-white hover:text-[var(--primary-blue)] active:scale-95 transition-all shadow-2xl shadow-black/20"
              >
                Apply Now
              </button>
              <div className="relative">
                <button 
                  onClick={() => setIsShareTooltipOpen(!isShareTooltipOpen)}
                  className="p-5 bg-white/10 text-white rounded-2xl hover:bg-white hover:text-[var(--primary-blue)] transition-all border border-white/10 shadow-xl"
                >
                  <Share2 className="w-6 h-6" />
                </button>
                {isShareTooltipOpen && (
                  <div className="absolute bottom-full mb-6 right-0 bg-white dark:bg-gray-800 p-4 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-gray-100 dark:border-gray-700 flex gap-4 animate-fade-in-up z-50">
                    <button onClick={() => handleShare('linkedin')} className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 hover:scale-110 transition-all">
                      <Linkedin className="w-6 h-6" />
                    </button>
                    <button onClick={() => handleShare('twitter')} className="w-12 h-12 bg-sky-50 dark:bg-sky-900/30 rounded-xl flex items-center justify-center text-sky-500 hover:scale-110 transition-all">
                      <Twitter className="w-6 h-6" />
                    </button>
                    <button onClick={() => handleShare('facebook')} className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center text-indigo-600 hover:scale-110 transition-all">
                      <Facebook className="w-6 h-6" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Main Content */}
          <div className="flex-1 space-y-24">
            {/* Description */}
            <div className="relative group">
              <div className="flex items-center gap-6 mb-12">
                <div className="w-2 h-12 bg-[var(--primary-green)] rounded-full" />
                <h2 className="text-4xl font-extrabold text-[var(--primary-blue)] dark:text-white tracking-tight">
                  Job Overview
                </h2>
              </div>
              <div className="prose prose-xl dark:prose-invert max-w-none">
                <div className="text-gray-500 dark:text-gray-400 leading-[2] whitespace-pre-wrap font-medium text-lg lg:text-xl">
                  {job.jobDescription}
                </div>
              </div>
            </div>

            {/* Responsibilities */}
            {job.responsibilities && job.responsibilities.length > 0 && (
              <div className="relative">
                <div className="flex items-center gap-6 mb-12">
                  <div className="w-2 h-12 bg-[var(--primary-green)] rounded-full" />
                  <h2 className="text-4xl font-extrabold text-[var(--primary-blue)] dark:text-white tracking-tight">
                    Key Responsibilities
                  </h2>
                </div>
                <div className="space-y-6">
                  {job.responsibilities.map((item, index) => (
                    <div key={index} className="flex gap-8 group/item bg-gray-50 dark:bg-gray-800/50 p-8 rounded-[2.5rem] border border-transparent hover:border-[var(--primary-green)] transition-all duration-500">
                      <div className="shrink-0">
                        <div className="w-12 h-12 rounded-2xl bg-white dark:bg-gray-800 flex items-center justify-center shadow-lg group-hover/item:bg-[var(--primary-green)] group-hover/item:text-white transition-all duration-500">
                          <CheckCircle2 className="w-6 h-6 text-[var(--primary-green)] group-hover/item:text-white" />
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 font-bold text-lg leading-relaxed pt-2">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Requirements & Skills Section */}
            {(job.qualifications?.length || job.skills?.length) && (
              <div className="relative">
                <div className="flex items-center gap-6 mb-12">
                  <div className="w-2 h-12 bg-[var(--primary-green)] rounded-full" />
                  <h2 className="text-4xl font-extrabold text-[var(--primary-blue)] dark:text-white tracking-tight">
                    Requirements & Skills
                  </h2>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl shadow-gray-200/20 dark:shadow-none overflow-hidden">
                  <div className="grid grid-cols-1 ">
                    {/* Qualifications Column */}
                    {job.qualifications && job.qualifications.length > 0 && (
                      <div className="p-12 md:p-16 border-b md:border-b-0 md:border-r border-gray-100 dark:border-gray-700">
                        <div className="flex items-center gap-4 mb-10">
                          <div className="w-12 h-12 rounded-2xl bg-orange-50 dark:bg-orange-900/10 flex items-center justify-center">
                             <Trophy className="w-6 h-6 text-orange-200" />
                          </div>
                          <h3 className="text-xl font-bold text-[var(--primary-blue)] dark:text-white">Qualifications</h3>
                        </div>
                        <ul className="space-y-6">
                          {job.qualifications.map((item, index) => (
                            <li key={index} className="flex gap-4 group/li">
                              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--primary-green)] shrink-0 group-hover/li:scale-150 transition-transform" />
                              <p className="text-gray-600 dark:text-gray-300 font-bold leading-relaxed">
                                {item}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Skills Column */}
                    {job.skills && job.skills.length > 0 && (
                      <div className="p-12 md:p-16 bg-gray-50/30 dark:bg-gray-800/10">
                        <div className="flex items-center gap-4 mb-10">
                          <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                             <Lightbulb className="w-6 h-6 text-blue-500" />
                          </div>
                          <h3 className="text-xl font-bold text-[var(--primary-blue)] dark:text-white">Required Skills</h3>
                        </div>
                        <div className="flex flex-wrap gap-3">
                          {job.skills.map((item, index) => (
                            <div 
                              key={index} 
                              className="px-6 py-3 bg-white dark:bg-gray-700 text-[var(--primary-blue)] dark:text-gray-200 text-sm font-black tracking-wider rounded-2xl border border-gray-200 dark:border-gray-600 shadow-sm hover:border-[var(--primary-green)] hover:text-[var(--primary-green)] transition-all cursor-default"
                            >
                              {item}
                            </div>

                            
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-[450px] shrink-0">
            <div className="sticky top-32 space-y-10">
              <div className="bg-white dark:bg-gray-800 p-12 rounded-[3.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100 dark:border-gray-700 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--primary-green)]/5 rounded-full -mr-16 -mt-16" />
                
                <h3 className="text-2xl font-black text-[var(--primary-blue)] dark:text-white mb-12 relative uppercase tracking-tighter">
                  Job Summary
                </h3>
                
                <div className="space-y-12 relative">
                  {[
                    { icon: MapPin, label: "Work Location", value: `${job.city}, ${job.state}` },
                    { icon: Clock, label: "Employment Type", value: job.jobType },
                    { icon: Briefcase, label: "Experience Level", value: job.workExpierience || job.workExperience },
                    { icon: Globe2, label: "Industry Focus", value: "Digital Transformation" },
                    { icon: Calendar, label: "Submission Date", value: new Date(job.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-8 group/info">
                      <div className="w-16 h-16 bg-gray-50 dark:bg-gray-700 rounded-3xl flex items-center justify-center shrink-0 group-hover/info:bg-[var(--primary-green)] group-hover/info:rotate-12 transition-all duration-500 shadow-sm">
                        <item.icon className="w-7 h-7 text-[var(--primary-green)] group-hover/info:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="text-[12px] font-black text-gray-400  tracking-[0.1em] mb-2">{item.label}</p>
                        <p className="text-[var(--primary-blue)] dark:text-white font-black text-xl tracking-tight">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-16 pt-12 border-t border-gray-100 dark:border-gray-700">
                  <button 
                    onClick={() => setIsApplyModalOpen(true)}
                    className="w-full py-6 bg-[var(--primary-blue)] hover:bg-[var(--primary-green)] text-white font-black text-sm uppercase tracking-[0.3em] rounded-[2rem] transition-all duration-500 shadow-2xl shadow-blue-900/20 active:scale-95"
                  >
                    Apply Now
                  </button>
                  <div className="flex items-center justify-center mt-10 gap-2">
                    <span className="w-10 h-[1px] bg-gray-200 dark:bg-gray-700" />
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Refer a Friend</span>
                    <span className="w-10 h-[1px] bg-gray-200 dark:bg-gray-700" />
                  </div>
                  <button 
                    onClick={() => setIsShareTooltipOpen(true)}
                    className="w-full mt-6 py-4 bg-gray-50 dark:bg-gray-700/50 text-[var(--primary-blue)] dark:text-gray-300 font-black text-[10px] uppercase tracking-[0.3em] rounded-2xl border border-gray-100 dark:border-gray-600 hover:bg-[var(--primary-green)] hover:text-white hover:border-[var(--primary-green)] transition-all"
                  >
                    Share Job Position
                  </button>
                </div>
              </div>
              
              <div className="bg-gray-900 dark:bg-black p-12 rounded-[3.5rem] text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[var(--primary-green)]/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
                <h4 className="text-2xl font-extrabold mb-6 relative z-10">Career Support</h4>
                <p className="text-white/50 text-base mb-10 leading-relaxed relative z-10 font-medium">
                  Have questions about our recruitment process or this specific role? Our team is here to help.
                </p>
                <Link 
                  href="/contact-us" 
                  className="inline-flex items-center text-[var(--primary-green)] font-black text-xs uppercase tracking-[0.1em] hover:gap-4 transition-all relative z-10"
                >
                  Contact Recruiting <ArrowRight className="w-4 h-4 ml-3" />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <ApplicationModal 
        isOpen={isApplyModalOpen}
        job={job}
        onClose={() => setIsApplyModalOpen(false)}
      />
    </div>
  );
}
