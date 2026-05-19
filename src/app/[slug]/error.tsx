'use client';

import Link from 'next/link';

export default function BlogDetailError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="w-full min-h-screen grid place-items-center dark:bg-none mt-20 px-4 md:px-6 lg:px-10 text-[var(--text-black)]">
      <div className="w-full max-w-2xl flex flex-col items-center justify-center gap-6 py-20">
        <div className="w-24 h-24 rounded-full bg-red-100 flex items-center justify-center">
          <svg 
            className="w-12 h-12 text-red-600" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
            />
          </svg>
        </div>
        
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 text-center">
            Blog Not Found
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 text-center max-w-md">
            We couldn&apos;t find the blog you&apos;re looking for. It may have been removed or the link is incorrect.
          </p>
        </div>

        <div className="flex gap-4 mt-4">
          <Link 
            href="/blogs"
            className="px-6 py-3 bg-[var(--primary-green)] text-white rounded-md hover:opacity-90 transition-opacity font-medium"
          >
            View All Blogs
          </Link>
          <button
            onClick={() => reset()}
            className="px-6 py-3 border-2 border-[var(--primary-green)] text-[var(--primary-green)] rounded-md hover:bg-[var(--primary-green)] hover:text-white transition-all font-medium"
          >
            Try Again
          </button>
        </div>
        
        {error.message && (
          <p className="text-sm text-gray-500 mt-4 text-center">
            {error.message}
          </p>
        )}
      </div>
    </section>
  );
}
