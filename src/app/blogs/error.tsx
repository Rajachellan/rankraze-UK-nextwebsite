'use client';

import Link from 'next/link';

export default function BlogError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="w-full min-h-screen grid place-items-center dark:bg-none mt-20 px-4 md:px-6 lg:px-10 text-[var(--text-black)]">
      <div className="w-full max-w-2xl flex flex-col items-center justify-center gap-6 py-20">
        
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 text-center">
            Unable to Load Blogs
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 text-center max-w-md">
            We&apos;re having trouble connecting to our server. Please try again later.
          </p>
        </div>

        <div className="flex gap-4 mt-4">
          <Link 
            href="/"
            className="px-6 py-3 bg-[var(--primary-green)] text-white rounded-md hover:opacity-90 transition-opacity font-medium"
          >
            Go Home
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