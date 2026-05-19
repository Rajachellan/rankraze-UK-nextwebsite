import Image from "next/image";
import Link from "next/link";
import { fetchBlogs } from "../api/BlogAPI";
import { Metadata } from "next";
export const metadata:Metadata = {
    title: "Blogs - Rankraze",
    description: "Read our digital marketing blogs for simple tips, latest trends, and ideas to grow your brand and online presence.",
    
keywords: [
    
  
],
                
    alternates: {
        canonical: "https://rankraze.us/blogs",
    },

    openGraph: {
        title: "Blogs - Rankraze",
        description: "Article & News A Blog is a online journal which is deeply detailed on open topics Why Businesses Are Turning to AI for Smarter Digital Marketing Decisions June 7, 2025 Digital Marketing Read More Why Your Business Needs an Integrated Digital Marketing Strategy for an Agency  June 7, 2025 Digital Marketing Read More Five Digital […]",
        url: "https://rankraze.us/blogs",
        siteName: "Rankraze",
        images: [
        {
            url: "upload/blogs/ai-in-seo-for-web-development-company.webp",
            width: 399,
            height: 438,
            alt: "blogs",
            type: "image/webp"
        },
        ],
        locale: "en_US",
        type: "article",
    },
}
interface PageProps {
  searchParams: Promise<{ page?: string }>;
}

// Helper function to format date
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// Helper function to strip HTML and get plain text excerpt
function getExcerpt(html: string, length: number = 200): string {
  const text = html.replace(/<[^>]*>/g, '').replace(/\n/g, ' ').trim();
  return text.length > length ? text.substring(0, length) + '...' : text;
}

export default async function BlogsPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const page = parseInt(params?.page || "1");
  const limit = 10;

  // Fetch blogs from API - will throw error if fails
  const blogsData = await fetchBlogs(page, limit);
  const { blogs, totalPages } = blogsData;

  return (
    <>
      <section className="w-full grid place-items-center dark:bg-[var(--prim-dark-bg)] mt-20 px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-9 md:gap-12 lg:gap-14 xl:gap-16 transition-colors duration-300">
        <div className="w-full flex items-center justify-center relative before:content-[''] before:absolute before:w-full before:h-full before:bg-linear-to-b before:from-[#DAF8F1] before:to-transparent dark:before:from-[#0D2244] dark:before:to-transparent before:rounded-t-4xl before:-z-10 transition-colors duration-300">
          <div className="w-full flex flex-col items-center justify-center gap-2.5 md:gap-3.t xl:gap-4 py-8 md:py-12 xl:py-20 2xl:py-24 max-w-2xl">
            <h1 className="text-2xl xl:text-4xl capitalize font-bold text-gray-800 dark:text-gray-100">
              Articles & News
            </h1>
          </div>
        </div>
      </section>

      <div className="p-10 mt-0 bg-white dark:bg-[var(--prim-dark-bg)] transition-colors duration-300">
        {blogs.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-500 dark:text-gray-400">No blogs available at the moment.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {blogs.map((blog) => (
                <Link 
                  key={blog._id} 
                  href={`/${blog.slug}`}
                  className="group w-full flex flex-col items-center justify-start p-5 md:p-6 lg:p-7 gap-4 
                           bg-white dark:bg-[#0A1628] border border-gray-200 dark:border-[rgba(255,255,255,0.08)] rounded-md shadow-[0px_3px_6px_rgba(0,0,0,0.07),0px_-3px_6px_rgba(0,0,0,0.07)]
                           hover:-translate-y-4 hover:shadow-[0px_5px_10px_rgba(0,0,0,0.07),0px_-5px_10px_rgba(0,0,0,0.07)] dark:hover:shadow-none
                           transform transition-all duration-300 cursor-pointer"
                >
                  {blog.images && (
                    <Image
                      src={blog.images.trim()}
                      alt={blog.title}
                      width={1280}
                      height={853}
                      className="aspect-16/9 xl:aspect-2/1 w-full h-auto object-cover rounded-lg transition-[filter] duration-300 dark:grayscale dark:group-hover:grayscale-0"
                    />
                  )}

                  {!blog.images && (
                    <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                      <span className="text-gray-200">No Image</span>
                    </div>
                  )}

                  <p className="text-xl text-black dark:text-gray-200 font-semibold line-clamp-2">
                    {blog.title}
                  </p>

                  <p className="text-sm leading-relaxed text-gray-400 dark:text-gray-200 text-justify line-clamp-3 text-wrap">
                    {getExcerpt(blog.content, 150)}
                  </p>

                  <hr className="w-full" />

                  <div className="w-full flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                    <span>{formatDate(blog.pubDate)}</span>
                    {blog.category && (
                      <span className="bg-blue-100 text-blue-700 dark:bg-white/10 dark:text-[#7dd3fc] px-2 py-1 rounded text-sm">
                        {blog.category}
                      </span>
                    )}
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-10 flex-wrap">
                {page > 1 && (
                  <Link 
                    href={`/blogs?page=${page - 1}`} 
                    className="px-4 py-2 border rounded-md hover:bg-gray-100 transition"
                  >
                    Prev
                  </Link>
                )}

                {Array.from({ length: Math.min(totalPages, 10) }, (_, i) => {
                  let pageNum;
                  if (totalPages <= 10) {
                    pageNum = i + 1;
                  } else if (page <= 5) {
                    pageNum = i + 1;
                  } else if (page >= totalPages - 4) {
                    pageNum = totalPages - 9 + i;
                  } else {
                    pageNum = page - 4 + i;
                  }

                  return (
                    <Link
                      key={pageNum}
                      href={`/blogs?page=${pageNum}`}
                      className={`px-4 py-2 border rounded-md transition ${
                        page === pageNum
                          ? "bg-blue-600 text-white"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      {pageNum}
                    </Link>
                  );
                })}

                {page < totalPages && (
                  <Link 
                    href={`/blogs?page=${page + 1}`} 
                    className="px-4 py-2 border rounded-md hover:bg-gray-100 transition"
                  >
                    Next
                  </Link>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}