import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-4xl mx-auto p-6 md:p-10 min-h-screen mt-20 flex items-center justify-center">
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Job Not Found
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          The job you&apos;re looking for doesn&apos;t exist or has been removed.
        </p>
        <Link
          href="/careers"
          className="px-6 py-3 bg-[var(--primary-blue)] text-white rounded-md hover:opacity-90 transition-opacity inline-block"
        >
          View All Jobs
        </Link>
      </div>
    </div>
  );
}
