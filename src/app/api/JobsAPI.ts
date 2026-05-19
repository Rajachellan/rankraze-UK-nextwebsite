import { baseApiInstance } from "./baseAPI";    

export interface Job {
    jobTitle: string;
    jobDescription: string;
    responsibilities: string[];
    skills: string[];
    jobType: string;
    wokExperience: string;
    city: string;
    state: string;
    country: string;
    location: string;
}

export interface Pagination {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}

export interface JobsResponse {
    success: boolean;
    data: Job[];
    pagination: Pagination;
}

function validatePage(page: number): number {
  const validPage = Math.max(1, Math.floor(Number(page) || 1));
  return isNaN(validPage) ? 1 : validPage;
}

function validateLimit(limit: number): number {
  const validLimit = Math.max(1, Math.min(100, Math.floor(Number(limit) || 10)));
  return isNaN(validLimit) ? 10 : validLimit;
}

export async function fetchJobs(page: number = 1, limit: number = 10): Promise<JobsResponse> {
    try {
        const validPage = validatePage(page);
        const validLimit = validateLimit(limit);

        const response = await baseApiInstance.get<JobsResponse>(`/api/jobs`, {
            params: {
                page: validPage,
                limit: validLimit
            }
        });

        if (!response.data || !Array.isArray(response.data.data)) {
            throw new Error('Invalid response format from API');
        }
        return response.data;
    } catch {
        throw new Error('Failed to fetch jobs');
    }
}

export default baseApiInstance;