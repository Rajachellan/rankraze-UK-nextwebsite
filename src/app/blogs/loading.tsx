import { BlogsGridSkeleton } from "../components/BlogCardSkeleton";

export default function Loading() {
  return (
    <>
      <section className="w-full grid place-items-center dark:bg-none mt-20 px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-9 md:gap-12 lg:gap-14 xl:gap-16">
        <div className="w-full flex items-center justify-center relative before:content-[''] before:absolute before:w-full before:h-full before:bg-linear-to-b before:from-[#DAF8F1] before:to-transparent dark:before:invert before:rounded-t-4xl before:-z-10">
          <div className="w-full flex flex-col items-center justify-center gap-2.5 md:gap-3.t xl:gap-4 py-8 md:py-12 xl:py-20 2xl:py-24 max-w-2xl">
            <h1 className="text-2xl xl:text-4xl capitalize font-bold text-gray-800 dark:text-gray-100">
              Articles & News
            </h1>
          </div>
        </div>
      </section>

      <div className="p-10 mt-0">
        <BlogsGridSkeleton count={9} />
      </div>
    </>
  );
}