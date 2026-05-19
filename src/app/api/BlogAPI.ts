import { baseApiInstance } from "./baseAPI";
import { AxiosError } from "axios";

// --- Types ---
export interface Blog {
  _id: string;
  title: string;
  images: string | null;
  category: string;
  content: string;
  focusKeyword: string[];
  tags: string[];
  metaTitle: string;
  metaDesc: string;
  slug: string;
  pubDate: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface BlogsResponse {
  page: number;
  limit: number;
  totalPages: number;
  totalBlogs: number;
  blogs: Blog[];
}

export interface SingleBlogResponse {
  blog: Blog;
}

// --- Utils & Validation ---

/**
 * Validates identifiers (ObjectIDs or Slugs)
 * @throws Error if validation fails
 */
function sanitizeIdentifier(id: string): string {
  if (typeof id !== 'string') throw new Error('Identifier must be a string');
  
  const sanitized = id.trim();
  
  // SEO Slugs can easily exceed 100 chars. 255 is the standard URL segment limit.
  if (!sanitized || sanitized.length < 1 || sanitized.length > 255) {
    throw new Error(`Invalid identifier length: ${sanitized.length}`);
  }

  // Allow alphanumeric, hyphens, and underscores. 
  // Use a safe regex that doesn't allow path traversal.
  if (!/^[a-zA-Z0-9-_]+$/.test(sanitized)) {
    throw new Error('Identifier contains illegal characters');
  }

  return sanitized;
}

// --- API Methods ---

/**
 * Fetches paginated blogs with defensive defaults
 */
export async function fetchBlogs(page: number = 1, limit: number = 10): Promise<BlogsResponse> {
  const fallbackResponse: BlogsResponse = { 
    page: 1, limit: 10, totalPages: 0, totalBlogs: 0, blogs: [] 
  };

  try {
    const response = await baseApiInstance.get<BlogsResponse>('/api/blogs', {
      params: { 
        page: Math.max(1, page), 
        limit: Math.max(1, Math.min(100, limit)) 
      },
      timeout: 10000 // 10s timeout protection
    });

    if (!response.data?.blogs) {
      throw new Error('Malformed API response: missing blogs array');
    }

    return response.data;
  } catch (error) {
    handleApiError(error, 'fetchBlogs');
    return fallbackResponse;
  }
}

/**
 * Fetches a single blog. 
 * Returns null on 404 or validation error to allow UI to handle empty states.
 */
export async function fetchBlogById(slugOrId: string): Promise<SingleBlogResponse | null> {
  try {
    const validId = sanitizeIdentifier(slugOrId);
    
    const { data } = await baseApiInstance.get<SingleBlogResponse>(`/api/blogs/${validId}`, {
      timeout: 8000
    });

    if (!data?.blog) return null;
    return data;

  } catch (error) {
    const axiosError = error as AxiosError;
    
    // In production, 404 is a "valid" empty state, not necessarily a crashable error
    if (axiosError.response?.status === 404) {
      return null;
    }

    handleApiError(error, 'fetchBlogById');
    return null;
  }
}

/**
 * Centralized error logging 
 * Integrate with Sentry or LogRocket here
 */
function handleApiError(error: unknown, context: string) {
  if (process.env.NODE_STAG !== 'production') {
    if (error instanceof AxiosError) {
      console.error(`[BlogAPI:${context}]`, {
        status: error.response?.status,
        message: error.message,
        url: error.config?.url
      });
    } else {
      console.error(`[BlogAPI:${context}] Unexpected Error:`, error);
    }
  }
  
  // TODO: Add [Sentry.captureException(error)](https://docs.sentry.io) here
}
