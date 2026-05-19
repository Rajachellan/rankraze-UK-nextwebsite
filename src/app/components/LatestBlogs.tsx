import Link from "next/link";
import Image from "next/image";
import { getLatestBlogs } from "@/lib/getLatestBlogs";
import getExcerpt from "@/lib/getExcerpt";

export default async function LatestBogs() {
    const blogs = await getLatestBlogs();

    if (!blogs.length) return null;

    return (
        <>
            <div className="w-full max-w-7xl flex flex-col items-center justify-center mt-14 md:mt-2 gap-4 md:gap-6 xl:gap-10 2xl:gap-14">
                <h3 className="text-2xl lg:text-4xl font-bold capitalize text-center md:text-left inline md:flex flex-row md:flex-col items-center justify-center dark:text-gray-200">
                    <span className="inline md:inline-block">a blog is a online journal which is</span>
                    <span className="inline md:inline-block">deeply detailed on open topics</span>
                </h3>
                <div className="w-full flex flex-col md:flex-row items-stretch justify-center gap-4 md:gap-1.5 mt-9 md:mt-0">
                    {
                        blogs.map((blog) => (
                            <Link key={blog._id} href={blog.slug} className="w-full md:w-1/3 flex flex-col items-center justify-start border border-gray-200 dark:border-gray-300 p-2.5 rounded-sm shadow-md dark:shadow-gray-600 md:shadow-none">
                                <div className="w-full overflow-hidden rounded-sm dark:grayscale-75">
                                    <Image
                                        src={blog.images ? blog.images.trimEnd() : "/upload/certificate-Why-Choose-r7tvexo4dxquj00wr6xhagdbqchvwufglylx0pmvg8.webp"}
                                        alt={blog.metaTitle ?? "Blog Img"}
                                        width={1400}
                                        height={750}
                                        className="w-full h-full object-cover hover:scale-115 transition ease-in duration-600"
                                    />
                                </div>
                                <div className="w-full flex flex-col justify-center items-start p-7 gap-2.5">
                                    <h4 className="text-lg font-bold capitalize text-gray-600 dark:text-gray-300">{blog.title}</h4>
                                    <div className="flex gap-2 items-center justify-start">
                                        <div className="flex gap-1 items-center justify-center">
                                            <i className="ri-calendar-2-line text-gray-500"></i>
                                            <span className="text-sm text-gray-500">
                                                {
                                                    new Date(blog.pubDate).toLocaleDateString("en-US", {
                                                        month: "short",
                                                        day: "2-digit",
                                                        year: "numeric",
                                                    })
                                                }
                                            </span>
                                        </div>
                                        <div className="flex gap-1 items-center justify-center">
                                            <i className="ri-menu-2-line text-gray-500"></i>
                                            <span className="text-sm text-gray-500">
                                                Blog, {blog.category}
                                            </span>
                                        </div>
                                    </div>
                                    <p className="text-sm font-normal text-gray-700 dark:text-gray-400 text-left">
                                        {getExcerpt(blog.content, 150)}
                                    </p>
                                </div>
                            </Link>
                        ))
                    }

                </div>
            </div>
        </>
    );
}