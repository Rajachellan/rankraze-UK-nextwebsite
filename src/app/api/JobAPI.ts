import axios, { AxiosError } from "axios";

// Remove trailing slash from base URL if present
const baseURL = (process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.rankraze.us').replace(/\/$/, '');

const jobApiInstance = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// Add response interceptor
jobApiInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export interface Job {
  _id: string;
  jobTitle: string;
  slug: string;
  jobDescription: string;
  jobType: string;
  workExperience?: string;
  workExpierience?: string; // API typo - handle both
  city: string;
  state: string;
  country: string;
  location: string;
  responsibilities?: string[];
  qualifications?: string[];
  perks?: string[];
  skills?: string[];
  employmentType?: string;
  posted?: string;
  createdAt: string;
  updatedAt: string;
}

export interface JobsResponse {
  jobs: Job[];
  total?: number;
}

export interface ApiJobsResponse {
  success: boolean;
  data: Job[];
  pagination?: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

export interface SingleJobResponse {
  job: Job;
}

export interface JobApplicationData {
  fullName: string;
  email: string;
  mobile: string;
  gender: string;
  linkedinProfile: string;
  highestQualification: string;
  overallExperience: string;
  noticePeriod: string;
  job: string; // job ID
  resume: File;
}

/**
 * Fetch all jobs
 */
export async function fetchJobs(): Promise<JobsResponse> {
  try {
    const response = await jobApiInstance.get<ApiJobsResponse>(`/api/jobs`);
    
    if (!response.data || !response.data.success || !Array.isArray(response.data.data)) {
      throw new Error('Invalid response format from API');
    }
    
    // Transform API response to match expected format
    return {
      jobs: response.data.data,
      total: response.data.pagination?.total
    };
  } catch {
    // Return empty array instead of throwing
    return { jobs: [], total: 0 };
  }
}

/**
 * Fetch a single job by ID
 */
export async function fetchJobById(id: string): Promise<SingleJobResponse> {
  try {
    if (!id || id.trim().length === 0) {
      throw new Error('Invalid job ID');
    }
    
    const response = await jobApiInstance.get<SingleJobResponse>(`/api/jobs/${id}`);
    
    if (!response.data || !response.data.job) {
      throw new Error('Job not found');
    }
    
    return response.data;
  } catch {
    throw new Error('Failed to fetch job. Please try again later.');
  }
}

/**
 * Fetch a single job by slug
 */
export async function fetchJobBySlug(slug: string): Promise<Job | null> {
  try {
    if (!slug || slug.trim().length === 0) {
      throw new Error('Invalid job slug');
    }
    
    const response = await jobApiInstance.get(`/api/jobs/${slug}`);
    
    if (!response.data) {
      return null;
    }
    
    return response.data;
  } catch {
    return null;
  }
}

/**
 * Submit job application
 */
export async function applyForJob(applicationData: JobApplicationData): Promise<{ success: boolean; message: string }> {
  try {
    const formData = new FormData();
    
    formData.append('fullName', applicationData.fullName);
    formData.append('email', applicationData.email);
    formData.append('mobile', applicationData.mobile);
    formData.append('gender', applicationData.gender);
    formData.append('linkedinProfile', applicationData.linkedinProfile);
    formData.append('highestQualification', applicationData.highestQualification);
    formData.append('overallExperience', applicationData.overallExperience);
    formData.append('noticePeriod', applicationData.noticePeriod);
    formData.append('job', applicationData.job);
    formData.append('resume', applicationData.resume);
    
    const response = await axios.post(`${baseURL}/api/apply`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      timeout: 30000, // 30 seconds for file upload
    });
    
    return {
      success: true,
      message: response.data?.message || 'Application submitted successfully!'
    };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return {
        success: false,
        message: error.response.data?.message || 'Failed to submit application'
      };
    }
    return {
      success: false,
      message: 'Failed to submit application. Please try again.'
    };
  }
}

export default jobApiInstance;