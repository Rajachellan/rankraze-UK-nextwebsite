import "server-only";
import { unstable_cache } from "next/cache";
import { fetchJobs } from "./JobAPI";
import type { JobsResponse } from "./JobAPI";

/** ISR interval for careers job listings (seconds). */
export const CAREERS_JOBS_REVALIDATE_SECONDS = 300;

export const getCachedJobs = unstable_cache(
  async (): Promise<JobsResponse> => fetchJobs(),
  ["careers-all-jobs"],
  {
    revalidate: CAREERS_JOBS_REVALIDATE_SECONDS,
    tags: ["careers-jobs"],
  }
);
