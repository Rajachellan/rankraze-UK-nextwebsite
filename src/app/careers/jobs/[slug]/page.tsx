import { notFound } from "next/navigation";
import { getCachedJobs } from "../../../api/jobs-cache";
import { findJobBySlug } from "../../[slug]/job-slug";
import JobDetailClient from "./JobDetailClient";
import type { Metadata } from "next";

interface JobDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: JobDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const response = await getCachedJobs();
  const job = findJobBySlug(response.jobs, slug);

  if (!job) return { title: "Job Not Found | Rankraze" };

  return {
    title: `${job.jobTitle} | Careers at Rankraze`,
    description: job.jobDescription.substring(0, 160),
  };
}

export default async function JobDetailPage({ params }: JobDetailPageProps) {
  const { slug } = await params;

  const response = await getCachedJobs();
  const job = findJobBySlug(response.jobs, slug);

  if (!job) {
    notFound();
  }

  return <JobDetailClient job={job} />;
}
