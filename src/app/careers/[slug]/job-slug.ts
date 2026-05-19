import type { Job } from "../../api/JobAPI";

export function normalizeJobSlug(value: string): string {
  return value.trim().toLowerCase().replace(/\s+/g, "-");
}

export function getJobSlug(job: Job): string {
  if (job.slug && job.slug.trim().length > 0) {
    return normalizeJobSlug(job.slug);
  }

  return normalizeJobSlug(job.jobTitle);
}

export function findJobBySlug(jobs: Job[], slug: string): Job | undefined {
  const normalizedSlug = normalizeJobSlug(slug);
  return jobs.find((job) => getJobSlug(job) === normalizedSlug);
}
