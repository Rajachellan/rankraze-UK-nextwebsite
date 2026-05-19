import Image from "next/image";
import Link from "next/link";
import { getCachedJobs } from "../../api/jobs-cache";
import type { Job as JobType } from "../../api/JobAPI";
import careerHero from "../../../../public/upload/career/job-career.jpg";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  ArrowRight, 
  Plus, 
  Globe, 
  Zap, 
  Heart, 
  Trophy 
} from "lucide-react";
import { getJobSlug } from "../[slug]/job-slug";

export const metadata = {
  title: "Open Roles | Rankraze Careers",
  description: "Explore exciting career opportunities at Rankraze. Join our team and help us shape the future of digital marketing.",
};

export default async function JobsListingPage() {
  let jobs: JobType[] = [];
  try {
    const response = await getCachedJobs();
    jobs = response.jobs || [];
  } catch (error) {
    console.error("Failed to fetch jobs:", error);
  }

  return (
    <div className="bg-white dark:bg-[var(--prim-dark-bg)] min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[450px] flex items-center justify-center overflow-hidden">
        <Image
          src={careerHero}
          alt="Careers at Rankraze"
          fill
          className="object-cover brightness-50 scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight animate-fade-in-up">
            Build Your Future <span className="text-[var(--primary-green)]">Together</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 leading-relaxed font-medium animate-fade-in-up delay-100">
            Join a forward-thinking team where innovation meets passion. Explore our open positions and find your next big challenge.
          </p>
        </div>
      </section>

      {/* Jobs Grid Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold text-[var(--primary-blue)] dark:text-white mb-3">
              Explore Open Roles
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              Found <span className="text-[var(--primary-green)] font-bold">{jobs.length}</span> opportunities waiting for you
            </p>
          </div>
          <div className="flex items-center gap-4 bg-gray-100 dark:bg-gray-800/50 p-2 rounded-2xl border border-gray-200 dark:border-gray-700">
            <button className="px-6 py-2.5 bg-white dark:bg-gray-700 shadow-sm rounded-xl text-sm font-bold text-[var(--primary-blue)] dark:text-white transition-all">
              All Jobs
            </button>
            <button className="px-6 py-2.5 text-gray-500 dark:text-gray-400 text-sm font-bold hover:text-[var(--primary-blue)] dark:hover:text-white transition-all">
              Department
            </button>
          </div>
        </div>

        {jobs.length === 0 ? (
          <div className="text-center py-24 bg-gray-50 dark:bg-gray-800/30 rounded-[3rem] border-2 border-dashed border-gray-200 dark:border-gray-700">
            <div className="w-20 h-20 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
               <Briefcase className="w-10 h-10 text-gray-400" />
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-xl font-medium">
              We don&apos;t have any openings right now.
            </p>
            <p className="text-gray-400 text-sm mt-2">Check back soon or follow us for updates!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {jobs.map((job) => (
              <Link 
                key={job._id} 
                href={`/careers/jobs/${getJobSlug(job)}`}
                className="group relative bg-white dark:bg-gray-800 p-10 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 flex flex-col"
              >
                {/* Accent line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1.5 bg-[var(--primary-green)] rounded-b-full opacity-0 group-hover:opacity-100 transition-all duration-500" />
                
                <div className="flex justify-between items-start mb-8">
                  <div className="w-14 h-14 bg-[var(--primary-green)]/10 rounded-2xl flex items-center justify-center group-hover:bg-[var(--primary-green)] transition-all duration-500">
                    <svg 
                      className="w-7 h-7 text-[var(--primary-green)] group-hover:text-white" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="px-4 py-1.5 bg-gray-50 dark:bg-gray-700/50 text-gray-500 dark:text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] rounded-full border border-gray-100 dark:border-gray-600">
                    {job.jobType}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-[var(--primary-blue)] dark:text-white mb-4 leading-tight group-hover:text-[var(--primary-green)] transition-colors duration-300">
                  {job.jobTitle}
                </h3>
                
                <div className="space-y-4 mb-10">
                  <div className="flex items-center text-gray-500 dark:text-gray-400 font-medium">
                    <div className="w-8 h-8 rounded-lg bg-gray-50 dark:bg-gray-700 flex items-center justify-center mr-3">
                      <MapPin className="w-4 h-4 text-[var(--primary-green)]" />
                    </div>
                    {job.city}, {job.state}
                  </div>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 font-medium">
                    <div className="w-8 h-8 rounded-lg bg-gray-50 dark:bg-gray-700 flex items-center justify-center mr-3">
                      <Clock className="w-4 h-4 text-[var(--primary-green)]" />
                    </div>
                    {job.workExpierience || job.workExperience || "Experience Not Specified"}
                  </div>
                </div>

                <div className="mt-auto flex items-center justify-between">
                  <span className="text-[var(--primary-green)] font-extrabold text-sm tracking-widest uppercase flex items-center group-hover:gap-3 transition-all duration-300">
                    View Position
                    <ArrowRight className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </span>
                  <div className="w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-100">
                    <Plus className="w-5 h-5 text-[var(--primary-blue)] dark:text-white" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* Modern Benefits Section */}
      <section className="bg-gray-50 dark:bg-gray-900/50 py-32 border-y border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--primary-blue)] dark:text-white mb-20">
            Perks of Joining the <span className="text-[var(--primary-green)]">Rankraze</span> Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: Globe, title: "Flexible Work", desc: "Work from anywhere, anytime" },
              { icon: Zap, title: "Fast Growth", desc: "Accelerate your career path" },
              { icon: Heart, title: "Health First", desc: "Comprehensive wellness coverage" },
              { icon: Trophy, title: "Great Culture", desc: "Recognized for excellence" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-20 h-20 bg-white dark:bg-gray-800 rounded-3xl shadow-xl flex items-center justify-center mb-6 group hover:bg-[var(--primary-green)] transition-all duration-500 border border-gray-100 dark:border-gray-700">
                  <item.icon className="w-10 h-10 text-[var(--primary-green)] group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-xl font-bold text-[var(--primary-blue)] dark:text-white mb-2">{item.title}</h4>
                <p className="text-gray-500 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


