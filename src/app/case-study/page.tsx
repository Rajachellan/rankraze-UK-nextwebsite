import Image from "next/image";
import Link from "next/link";
import CaseStudy_component from "./CaseStudy-component" 
import { Metadata } from "next";
import CountStateSection from "../components/UI/CountStateSection"
export const metadata:Metadata = {
    title: "Case Studies - Rankraze",
    description: "Discover real case studies that show how smart digital marketing helped brands grow traffic, leads, and online success",
    
keywords: [
   
],

                
    alternates: {
        canonical: "https://rankraze.us/case-study",
    },

    openGraph: {
        title: "Case Studies - Rankraze",
        description: "Team up with rankraze – the next amazing case study could be yours! Clients Victories We bring innovative thinking, adaptive methodology, strong ethics and years of expertise to the SEO and web design industry. Our team has won awards for our web design expertise and accolades for our effective SEO strategies. Our clients know that […]",
        url: "https://rankraze.us/case-study",
        siteName: "Rankraze",
        images: [
        {
            url: "/upload/case-study-1.webp",
            width: 500,
            height: 600,
            alt: "case-study-1",
            type: "image/webp"
        },
        ],
        locale: "en_US",
        type: "article",
    },
}

export default function CaseStudiesPage() {
  return (
    <>
      <section className="w-full pb-20 grid place-items-center mt-24 px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 relative">
        <div className="w-full grid place-items-center px-3 md:px-5 lg:px-8 xl:px-12 2xl:px-14 py-10 md:py-20 overflow-hidden relative rounded-md md:rounded-lg lg:rounded-xl xl:rounded-2xl 2xl:rounded-4xl before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:[background-image:linear-gradient(to_bottom,#ffffff44,#ffffffbb,white),linear-gradient(to_right,#DAF2EC,#D0EBFB)] before:-z-10 dark:before:invert shadow-xs dark:shadow-white">
          <h1 className="text-3xl md:text-4xl xl:text-[42px] font-semibold text-center md:text-left capitalize dark:text-gray-200">
            Case Studies
          </h1>
          <p className="text-sm md:text-sm text-gray-700 dark:text-gray-300 text-center md:text-left py-3">
            Team up with rankraze - the next amazing case study could be yours!
          </p>
         <CountStateSection/>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--primary-blue)] dark:text-gray-100">
              Real Results. Real Revenue. Real Rankings.
            </h2>
            <p className="mt-4 text-[var(--text-gray)] dark:text-gray-300">
              Businesses that transformed with measurable growth
            </p>
          </div>
        </div>
      </section>

      {/* <section>
        <div className="text-center max-w-3xl mx-auto">
          <Link
            href="#"
            className="overflow-hidden capitalize text-sm text-white px-6 my-5 py-2.5 relative bg-linear-to-br from-[#3DBC9C] to-[#36aaf1] rounded-lg">
            CLIENTS VICTORIES
          </Link>

          <p className="text-center text-black mt-5 font-semibold text-sm md:text-sm px-2 dark:text-[var(--secondary-foreground)]">
            We bring innovative thinking, adaptive methodology, strong ethics and years of expertise to the SEO and web design industry. Our team has won awards for our web design expertise and accolades for our effective SEO strategies. Our clients know that when they give us a call, we’ll pick up the phone and provide them with the time and information they want. Our comprehensive approach to online marketing and web design results in a strong and lucrative online presence for each of our clients. Click any project below to see the results!
          </p>
        </div>
      </section>

      <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[400px] px-4 md:px-10">
        
      
        <div>
          <div className="flex flex-col  pt-10 md:flex-row w-full md:pl-30 md:pt-30">
            <Image
              src="/upload/case-study-1.webp"
              alt="client-logo-1"
              width={450}
              height={450}
              className="w-full object-cover"
            />

            <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-6 bg-linear-to-br from-[#3DBC9C] to-[#36aaf1]">
              <div>
                <h2 className="text-xl md:text-2xl font-semibold mb-3 text-white">
                  Europe Study Centre
                </h2>
                <p className="text-sm md:text-base text-white mb-5">
                  Our assistance led ESC to achieve 4Cr in revenue over 18 months...
                </p>
                <Link href="/europe-study-centre" className="inline-block text-sm text-white underline transition-transform duration-500 ease-out hover:scale-[1.12]">
                  SEE DETAILS ❯
                </Link>
              </div>
            </div>
          </div>

   
          <div className="flex flex-col pt-10 md:flex-row w-full md:pl-30 md:pt-10">
            <Image
              src="/upload/case-study-3.webp"
              alt="client-logo-1"
              width={450}
              height={450}
              className="w-full object-cover"
            />

            <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-6 bg-linear-to-br from-[#3DBC9C] to-[#36aaf1]">
              <div>
                <h2 className="text-xl md:text-2xl font-semibold mb-3 text-white">
                  Indian Register Quality Systems
                </h2>
                <p className="text-sm md:text-base text-white mb-5">
                  IRQS is one of the topmost companies in ISO training...
                </p>
                <Link href="/irqs-case-study" className="inline-block text-sm text-white underline transition-transform duration-500 ease-out hover:scale-[1.12]">
                  SEE DETAILS ❯
                </Link>
              </div>
            </div>
          </div>

       
          <div className="flex flex-col md:flex-row w-full md:pl-30 pt-10  md:pt-10">
            <Image
              src="/upload/case-study-5.webp"
              alt="client-logo-1"
              width={450}
              height={450}
              className="w-full object-cover"
            />

            <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-6 bg-linear-to-br from-[#3DBC9C] to-[#36aaf1]">
              <div>
                <h2 className="text-xl md:text-2xl font-semibold mb-3 text-white">
                  ClearOne
                </h2>
                <p className="text-sm md:text-base text-white mb-5">
                  Our team made a clear chart with unique ideas...
                </p>
                <Link href="/clearone" className="inline-block text-sm text-white underline transition-transform duration-500 ease-out hover:scale-[1.12]">
                  SEE DETAILS ❯
                </Link>
              </div>
            </div>
          </div>

        </div>

 
        <div>

      
          <div className="flex flex-col md:flex-row w-full md:pr-30 md:mt-30">
            <Image
              src="/upload/case-study-2.webp"
              alt="client-logo-1"
              width={450}
              height={450}
              className="w-full object-cover"
            />

            <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-6 bg-linear-to-br from-[#3DBC9C] to-[#36aaf1]">
              <div>
                <h2 className="text-xl md:text-2xl font-semibold mb-3 text-white">
                  TT Group
                </h2>
                <p className="text-sm md:text-base text-white mb-5">
                  We recreated their website & boosted SEO traffic.
                </p>
                <Link href="/tt-group" className="inline-block text-sm text-white underline transition-transform duration-500 ease-out hover:scale-[1.12]">
                  SEE DETAILS ❯
                </Link>
              </div>
            </div>
          </div>

    
          <div className="flex flex-col mt-10 md:flex-row w-full md:pr-30 md:mt-10">
            <Image
              src="/upload/case-study-4.webp"
              alt="client-logo-1"
              width={450}
              height={450}
              className="w-full object-cover"
            />

            <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-6 bg-linear-to-br from-[#3DBC9C] to-[#36aaf1]">
              <div>
                <h2 className="text-xl md:text-2xl font-semibold mb-3 text-white">
                  IRClass
                </h2>
                <p className="text-sm md:text-base text-white mb-5">
                  We helped them generate 1.02 crore revenue.
                </p>
        <Link
  href="/irqs-case-study-2"
  className="inline-block text-sm text-white underline transition-transform duration-500 ease-out hover:scale-[1.12]"
>
  SEE DETAILS ❯
</Link>


              </div>
            </div>
          </div>

          <div className="flex flex-col mt-10 md:flex-row w-full md:pr-30 md:mt-10">
            <Image
              src="/upload/case-study-6.webp"
              alt="client-logo-1"
              width={450}
              height={450}
              className="w-full object-cover"
            />

            <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-6 bg-linear-to-br from-[#3DBC9C] to-[#36aaf1]">
              <div>
                <h2 className="text-xl md:text-2xl font-semibold mb-3 text-white">
                  ILy
                </h2>
                <p className="text-sm md:text-base text-white mb-5">
                  We generated app installs & quality leads — client was happy.
                </p>
                <Link href="/ily" className="inline-block text-sm text-white underline transition-transform duration-500 ease-out hover:scale-[1.12]">
                  SEE DETAILS ❯
                </Link>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section className="w-full mx-auto max-w-3xl mt-24 text-[var(--text-black)] text-center px-4">
        <h3 className="text-3xl md:text-4xl xl:text-[42px] font-semibold capitalize dark:text-gray-200">
          Connect Your Sales Teams With Your Future Customers
        </h3>

        <Link
          href="/contact-us"
          className="inline-block overflow-hidden capitalize text-xl font-bold text-white px-6 my-5 py-2.5 relative bg-linear-to-br from-[#3DBC9C] to-[#36aaf1] rounded">
          Book Your Demo
        </Link>

        <p className="text-sm text-gray-700 dark:text-gray-300">
          Fuel your brand and drive results with 100% proven campaigns!
        </p>
      </section> */}
      <CaseStudy_component />
    </>
  );
}
