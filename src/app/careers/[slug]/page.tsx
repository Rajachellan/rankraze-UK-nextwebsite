import { notFound } from "next/navigation";
import { getCachedJobs } from "../../api/jobs-cache";
import { findJobBySlug } from "./job-slug";
import JobDetailClient from "./JobDetailClient";

interface JobDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function JobDetailPage({ params }: JobDetailPageProps) {
  const { slug } = await params;

  const response = await getCachedJobs();
  const foundJob = findJobBySlug(response.jobs, slug);

  if (!foundJob) {
    notFound();
  }

  return <JobDetailClient job={foundJob} />;
}