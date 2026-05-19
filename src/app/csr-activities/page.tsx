  import { Metadata } from "next";

export const metadata:Metadata = {
    title: "CSR Activities - Rankraze",
    description: "Explore our CSR activities focused on community support, sustainability, and making a meaningful impact beyond business.",
    
    keywords: [
       
    ],
                
    alternates: {
        canonical: "https://rankraze.com/csr-activities",
    },

    openGraph: {
        title: "CSR Activities - Rankraze",
        description: "CSR Activities https://www.rankraze.com/wp-content/uploads/2025/06/Rank-raze-Day-7-out-1.mp4 Rankraze CSR Health Checkup Event with Dr. Mehta’s Hospital, Clove Dental & Ameen Vision Care | February 12, 2025 On February 12th, 2025, Rankraze successfully hosted a CSR (Corporate Social Responsibility) health checkup event in partnership with Dr. Mehta’s Hospital, Clove Dental, and Ameen Vision Care. The initiative aimed to provide free […]",
        siteName: "Rankraze",
        images: [
        {
            url: "upload/services/rankraze_team.webp",
            width: 700,
            height: 501,
            alt: "rankraze-team",
            type: "image/webp"
        },
        ],
        locale: "en_US",
        type: "article",
    },
}
export default function CsrActivitiesPage(){
  return(
    <>
       <section className="w-full grid place-items-center dark:bg-none mt-20 px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-9 md:gap-12 lg:gap-14 xl:gap-16">
            <div className="w-full flex items-center justify-center relative before:content-[''] before:absolute before:w-full before:h-full before:bg-linear-to-b before:from-[#DAF8F1] before:to-transparent dark:before:invert before:rounded-t-4xl before:-z-10">
                <div className="w-full flex flex-col items-center justify-center gap-2.5 md:gap-3.t xl:gap-4 py-8 md:py-12 xl:py-20 2xl:py-24 max-w-2xl">
                    <h1 className="text-2xl xl:text-4xl capitalize font-bold text-gray-800 dark:text-gray-100">
                       CSR Activities
                    </h1>
                </div>
            </div>
            <div className="w-full flex flex-col md:flex-row items-center justify-center gap-3.5 md:gap-5 lg:gap-8 max-w-9xl mt-2.5 md:mt-6">
              <div className="w-full px-8 md:px-10 lg:px-16 xl:px-24">
  <div className="relative w-full aspect-video">
    <video
      src="/upload/csr-activity-1.mp4"
      poster="/upload/services/rankraze_team.webp"
      controls
      className="shadow-2xl w-full h-100 object-cover z-10 "
    ></video>
  </div>
</div>

                <div className="w-full  flex flex-col items justify-center px-3 md:px-10  gap-3 md:gap-4 xl:gap-5">
                    <h2 className="text- xl md:text-2xl lg:text-3xl capitalize font-bold text-gray-800 dark:text-gray-200">
                       Rankraze CSR Health Checkup Event with Dr. Mehta&apos;s Hospital, Clove Dental & Ameen Vision Care | February 12, 2025
                    </h2>
                    <p className="text-sm md:text-sm leading-relaxed text-justify w-full text-gray-500 dark:text-gray-400 tracking-wide ">
                       On February 12th, 2025, Rankraze successfully hosted a CSR (Corporate Social Responsibility) health checkup event in partnership with Dr. Mehta’s Hospital, Clove Dental, and Ameen Vision Care. The initiative aimed to provide free health checkups to the local community, focusing on dental care, eye health, and overall medical assessments. <br /><br />

This community health initiative included a range of essential services, such as dental consultations, eye exams, and general health screenings. The goal was to raise awareness about the importance of regular health checkups and preventive healthcare. The collaboration between Rankraze, Dr. Mehta’s Hospital, Clove Dental, and Ameen Vision Care underscores a shared commitment to improving public health and promoting wellness in the community. <br /><br />

Local residents took full advantage of the opportunity to receive professional health assessments and advice from trusted medical professionals. Rankraze continues to lead by example in making a positive impact through CSR programs that enhance community health and well-being.
                    </p>
                  
                </div>
            </div>
            

            {/* second section */}
              <div className="w-full flex flex-col md:flex-row items-center justify-center gap-3.5 md:gap-5 lg:gap-8 max-w-9xl mt-2.5 md:mt-6">
                <div className="w-full  flex flex-col items justify-center px-3 md:px-10  gap-3 md:gap-4 xl:gap-5">
                    <h2 className="text- xl md:text-2xl lg:text-3xl capitalize font-bold text-gray-800 dark:text-gray-200">
                       Rankraze Partners with Kanche to Promote Healthy Living Through Quality Food Products
                    </h2>
                    <p className="text-sm md:text-sm leading-relaxed text-justify w-full text-gray-500 dark:text-gray-400 tracking-wide ">
                      Kanche, a trusted name in nutritious and quality food essentials, collaborated with Rankraze to highlight the importance of healthy dietary habits. Featuring a wide range of staple products—including millet flour, basmati rice, wheat flour, jaggery powder, and more—Kanche emphasizes clean, natural, and wholesome nutrition for every household.

Through this brand partnership, Rankraze aims to promote better lifestyle choices by showcasing products that support balanced diets and long-term health. Kanche’s commitment to purity and traditional food processing aligns with Rankraze’s vision of encouraging wellness within the community. This collaboration represents a step forward in bringing healthier food options and nutritional awareness to people everywhere.
                    </p>
                  
                </div>
                        <div className="w-full px-8 md:px-10 lg:px-16 xl:px-24">
  <div className="relative w-full aspect-video">
    <video
      src="/videos/csr_activities.mp4"
      poster=""
      controls
      className="shadow-2xl w-full h-100 object-cover z-10 "
    ></video>
  </div>
</div>
            </div>
        </section>
    </>
  )
}