export default function BlogCardSkeleton() {
  return (
    <div className="w-full flex flex-col items-center justify-start p-5 md:p-6 lg:p-7 gap-4 
                   border border-gray-200 rounded-md shadow-[0px_3px_6px_rgba(0,0,0,0.07),0px_-3px_6px_rgba(0,0,0,0.07)]
                   animate-pulse">
      {/* Image skeleton */}
      <div className="w-full h-48 bg-gray-300 rounded-lg"></div>

      {/* Title skeleton */}
      <div className="w-full space-y-2">
        <div className="h-6 bg-gray-300 rounded w-3/4"></div>
        <div className="h-6 bg-gray-300 rounded w-1/2"></div>
      </div>

      {/* Description skeleton */}
      <div className="w-full space-y-2">
        <div className="h-4 bg-gray-300 rounded"></div>
        <div className="h-4 bg-gray-300 rounded"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gray-300"></div>

      {/* Date skeleton */}
      <div className="w-full">
        <div className="h-4 bg-gray-300 rounded w-1/3"></div>
      </div>
    </div>
  );
}

export function BlogsGridSkeleton({ count = 9 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, index) => (
        <BlogCardSkeleton key={index} />
      ))}
    </div>
  );
}