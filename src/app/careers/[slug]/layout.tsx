import { notFound } from "next/navigation";
import { getCachedJobs } from "../../api/jobs-cache";
import { findJobBySlug, getJobSlug } from "./job-slug";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const response = await getCachedJobs();
  const foundJob = findJobBySlug(response.jobs, slug);

  if (!foundJob) {
    notFound();
  }

  return {
    title: `${foundJob.jobTitle} | Careers | Rankraze`,
    description: foundJob.jobDescription.substring(0, 160),
  };
}

export async function generateStaticParams() {
  const response = await getCachedJobs();
  return response.jobs.map((job) => ({ slug: getJobSlug(job) }));
}

export default function JobLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
