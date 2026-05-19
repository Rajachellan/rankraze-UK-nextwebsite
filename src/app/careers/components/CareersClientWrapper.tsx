"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import JobCarousel from "./JobCarousel";
import ApplicationModal from "./ApplicationModal";
import type { Job as JobType } from "../../api/JobAPI";
import { getJobSlug } from "../[slug]/job-slug";

interface CareersClientWrapperProps {
  initialJobs: JobType[];
}

export default function CareersClientWrapper({ initialJobs }: CareersClientWrapperProps) {
  const router = useRouter();
  const [selectedJobForApplication, setSelectedJobForApplication] = useState<JobType | null>(null);
  const [showApplyModal, setShowApplyModal] = useState(false);

  const handleViewDetails = (slug: string) => {
    // Find the job to get its correct slug (in case the passed slug is not the normalized one)
    const job = initialJobs.find(j => j.slug === slug || j.jobTitle === slug);
    const resolvedSlug = job ? getJobSlug(job) : slug;
    router.push(`/careers/jobs/${resolvedSlug}`);
  };

  const handleApplyNow = (job: JobType) => {
    setSelectedJobForApplication(job);
    setShowApplyModal(true);
  };

  const handleCloseApplyModal = () => {
    setShowApplyModal(false);
    setSelectedJobForApplication(null);
  };

  return (
    <>
      <div className="text-center mt-30 p-4 overflow-x-hidden">
        <h1 className="text-l md:text-xl font-bold capitalize text-amber-500 dark:text-amden-200">
          Now Hiring
        </h1>
        <h2 className="text-xl md:text-3xl font-bold capitalize text-black-500 dark:text-gray-200 my-3 ">
          Open Positions Available
        </h2>
        <p className="text-gray-500 text-l font-medium">
          &quot;Join us for Exciting opportunities in a team that values growth and
          innovations&quot;
        </p>
      </div>

      <JobCarousel 
        jobs={initialJobs}
        onViewDetails={handleViewDetails}
        onApplyNow={handleApplyNow}
      />

      <ApplicationModal
        isOpen={showApplyModal}
        job={selectedJobForApplication}
        onClose={handleCloseApplyModal}
      />
    </>
  );
}
