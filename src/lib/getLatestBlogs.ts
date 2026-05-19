// lib/getLatestBlogs.ts
import { cache } from "react";
import { BlogsResponse } from "../app/api/BlogAPI";

export const getLatestBlogs = cache(async(): Promise<BlogsResponse['blogs']> => {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 5000);

      const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.rankraze.com";
      const res = await fetch(`${apiBaseUrl.replace(/\/$/, '')}/api/blogs?page=1&limit=3`, 
        {
          signal: controller.signal,
          next: {
            revalidate: 300,  //cache 5 min
          },
        } as any
      );
      clearTimeout(timeout);

      if (!res.ok) {
        throw new Error("Failed to fetch latest blogs");
      }

      const data: BlogsResponse = await res.json();
      return data.blogs;

    } catch (error) {
      return [];
    };
});
