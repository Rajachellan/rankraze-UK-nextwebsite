import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Settings,UserPen,ScrollText,ShoppingCart,HeartPulse,Factory,ShieldHalf} from "lucide-react"
import ContactForm from "@/app/components/UI/AllServicePageContactForm";


export const metadata:Metadata = {
    title: "Computer Vision Services in Indai | AI Experts at Rankraze",
    description: "Get cutting-edge Computer Vision solutions from Rankraze. AI-driven image recognition, object detection & video analysis services in Chennai & India.",
    
keywords: [
    "computer vision services",
    "computer vision solutions",
    "image recognition services",
    "object detection services",
    "video analytics services",
    "AI computer vision",
    "machine learning vision services",
    "AI image processing",
    "custom computer vision",
    "computer vision development",
    "Rankraze computer vision",
    "computer vision in Chennai",
    "AI services in Chennai",
    "computer vision companies in India",
    "computer vision Chennai",
    "computer vision development India",
    "computer vision company in Chennai",
    "AI video analysis India",
    "AI-powered image recognition Chennai",
    "best computer vision agency India"
],

                
    alternates: {
        canonical: "https://rankraze.com/computer-vision-services",
    },

    openGraph: {
        title: "Computer Vision Services in Indai | AI Experts at Rankraze",
        description: "Get cutting-edge Computer Vision solutions from Rankraze. AI-driven image recognition, object detection & video analysis services in Chennai & India.",
        url: "https://rankraze.com/computer-vision-services",
        siteName: "Rankraze",
        images: [
        {
            url: "/upload/services/computer-vision-1.webp",
            width: 1000,
            height: 1000,
            alt: "Computer-Vision-Services-images.webp",
            type: "image/webp"
        },
        ],
        locale: "en_US",
        type: "article",
    },
}

export default function ComputerVisionPage(){
    return(
        <>
        <section className="w-full grid place-items-center mt-24 px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 relative">
  <div className="w-full grid place-items-center px-3 md:px-5 lg:px-8 xl:px-12 2xl:px-14 py-10 md:py-20 overflow-hidden relative rounded-md md:rounded-lg lg:rounded-xl xl:rounded-2xl 2xl:rounded-4xl before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:[background-image:linear-gradient(to_bottom,#ffffff44,#ffffffbb,white),linear-gradient(to_right,#DAF2EC,#D0EBFB)] before:-z-10 dark:before:invert shadow-xs dark:shadow-white">
    <div className="w-full max-w-7xl flex flex-col md:flex-row items-stretch justify-between gap-6 md:gap-0">
        {/* left */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center gap-4 pl-2.5 ">
        <h1 className="text-4xl xl:text-[42px] font-semibold text-center md:text-left capitalize dark:text-gray-200 pr-4">
          Transform Your Business with Rankraze Computer Vision Services
        </h1>
        <p className="text-sm md:text-md text-gray-700 dark:text-gray-300 text-center md:text-left pr-4 py-3">
          Leverage AI to automate tasks, enhance security, and unlock actionable insights with our custom computer vision solutions. 
        </p>
        <Link
          href={"https://crm.skalelit.com/lead-form/1f920a2abc3394d259281285252cbb52?styled=1&with_logo=1"}
          className="overflow-hidden capitalize text-sm text-white px-6 py-2.5 relative bg-linear-to-br from-[#3DBC9C] to-[#36aaf1] rounded-lg">
          Get Started Today
        </Link>
      </div>
{/* right */}
      <div className="w-full md:w-1/2 lg:w-2/5 flex items-center justify-center py-2.5">
        <Image
             src="/upload/services/computer-vision-1.webp"
             alt="client-logo-1"
             width={1000}
             height={1000}
             className="w-full object-cover rounded-lg static"
           />
      </div>
    </div>
    <div className="absolute flex items-end justify-start w-full h-full bottom-0 left-0 -z-10 opacity-100 dark:opacity-75 bg-[url('/upload/wave-image.png')] bg-no-repeat bg-cover bg-bottom"></div>
  </div>
</section>


{/* section 2 */}
             <section className="w-full grid place-items-center dark:bg-none mt-20 px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-9 md:gap-12 lg:gap-14 xl:gap-16 bg-gray-100 pt-20 dark:bg-[var(--popover)]">
            <div className="w-full flex flex-col md:flex-row items-center justify-center gap-3.5 md:gap-5 lg:gap-8 max-w-7xl mt-2.5 md:mt-6">
                <div className="w-full md:w-3/5 px-8 md:px-10 lg:px-16 xl:px-24">
                    <Image 
                    src="/upload/services/computer-vision-2.webp"
                    alt="business-consultant-mobile.webp"
                    width={418} height={626}
                    className="rounded-xl shadow-2xs h-50 w-30 md:h-100 md:w-80  lg:h-130 lg:w-80"
                    />
                </div>
                <div className="w-full md:w-4.5/5 flex flex-col items justify-center p-2.5 gap-3 md:gap-4 xl:gap-5">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl capitalize font-bold text-gray-800 dark:text-gray-200">
                        about rankraze
                    </h2>
                    <p className="text-sm leading-relaxed text-justify text-black dark:text-gray-400 tracking-wide xl:pr-12 2xl:pr-20">
                       Rankraze is a leader in AI and computer vision technology, providing innovative solutions to businesses looking to automate and improve their operations. Our expert team combines deep knowledge in machine learning, computer vision, and data science to offer tailored services that empower businesses to make data-driven decisions.
                    </p>
                   
                </div>
            </div>


 <section className="w-full grid place-items-center mt-20 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 rounded-xl md:rounded-4xl relative overflow-hidden">
            <div className="w-full max-w-7xl flex flex-col items-center justify-center gap-6 px-4 md:px-6 lg:px-10 my-20 z-10">
                <h2 className="text-4xl xl:text-[42px] font-semibold text-center md:text-left capitalize dark:text-gray-200 pr-4">
                 Our Computer Vision Services
                </h2>
                <div className="w-full grid max-w-7xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2.5 gap-5 mt-3.5">
                    <div className="flex flex-col items-center justify-center gap-5 group rounded-2xl border border-dashed border-gray-400 relative overflow-hidden box-border p-1">
                        <div className="h-full bg-white dark:bg-[#292639]  w-full flex flex-col items-start center-start gap-2.5 px-8 py-8 rounded-2xl">
                            <Image 
                                src="/icons/ai-services/AI-Consulting-and-Strategy-Development.webp" 
                                alt="AI-Strategy-Development" 
                                width={124}
                                height={124}
                                className="w-6 md:w-8 lg:w-11 xl:w-16 dark:invert-100"
                            />
                            <h3 className="capitalize md:text-lg lg:text-xl xl:text-2xl text-gray-700 dark:text-gray-300 font-medium md:font-semibold lg:font-bold ">Object Detection & Recognition</h3>
                            <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm md:text-md">
                               We help businesses identify and classify objects in images or video streams. From quality control to security surveillance, our object detection and recognition services ensure accuracy and speed.
                            </p>
                        </div>
                        <div className="absolute h-full aspect-square grid grid-rows-2 -z-10 group-hover:rotate-180 transition-all duration-[1s] scale-150 ease-in-out">
                            <div className="h-full"></div>
                            <div className="h-full bg-linear-to-b from-[var(--primary-blue)] to-[var(--primary-green)] opacity-75 dark:invert-100"></div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-5 group rounded-2xl border border-dashed border-gray-400 relative overflow-hidden box-border p-1">
                        <div className="h-full bg-white dark:bg-[#292639] w-full flex flex-col items-start center-start gap-2.5 px-8 py-8 rounded-2xl">
                            <Image 
                                src="/upload/services/natural-language-processing-face.webp" 
                                alt="AI-Strategy-Development" 
                                width={124}
                                height={124}
                                className="w-6 md:w-8 lg:w-11 xl:w-16 dark:invert-100"
                            />
                            <h3 className="capitalize md:text-lg lg:text-xl xl:text-2xl text-gray-700 dark:text-gray-300 font-medium md:font-semibold lg:font-bold">Facial Recognition</h3>
                            <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm md:text-md">
                               Enhance security with our advanced facial recognition technology. Our system identifies faces in real-time, improving authentication and security across various industries.
                            </p>
                        </div>
                        <div className="absolute h-full aspect-square grid grid-rows-2 -z-10 group-hover:rotate-180 transition-all duration-[1s] scale-150 ease-in-out">
                            <div className="h-full bg-linear-to-b from-[var(--primary-blue)] to-[var(--primary-green)] opacity-75 dark:invert-100"></div>
                            <div className="h-full"></div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-5 group rounded-2xl border border-dashed border-gray-400 relative overflow-hidden box-border p-1">
                        <div className="h-full bg-white dark:bg-[#292639] w-full flex flex-col items-start center-start gap-2.5 px-8 py-8 rounded-2xl">
                            <Image 
                                src="/icons/ai-services/domain.webp" 
                                alt="AI-Strategy-Development" 
                                width={124}
                                height={124}
                                className="w-6 md:w-8 lg:w-11 xl:w-16 dark:invert-100"
                            />
                            <h3 className="capitalize md:text-lg lg:text-xl xl:text-2xl text-gray-700 dark:text-gray-300 font-medium md:font-semibold lg:font-bold">Image Segmentation</h3>
                            <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm md:text-md">
                               Our image segmentation technology breaks down complex images into smaller components, allowing businesses to analyze and understand every detail. Ideal for healthcare, manufacturing, and retail industries.
                            </p>
                        </div>
                        <div className="absolute h-full aspect-square grid grid-rows-2 -z-10 group-hover:rotate-180 transition-all duration-[1s] scale-150 ease-in-out">
                            <div className="h-full"></div>
                            <div className="h-full bg-linear-to-b from-[var(--primary-blue)] to-[var(--primary-green)] opacity-75 dark:invert-100"></div>
                        </div>
                    </div>
                   
                    <div className="flex flex-col items-center justify-center gap-5 group rounded-2xl border border-dashed border-gray-400 relative overflow-hidden box-border p-1">
                        <div className="h-full bg-white dark:bg-[#292639] w-full flex flex-col items-start center-start gap-2.5 px-8 py-8 rounded-2xl">
                            <Image 
                                src="/icons/ai-services/domain.webp" 
                                alt="AI-Strategy-Development" 
                                width={124}
                                height={124}
                                className="w-6 md:w-8 lg:w-11 xl:w-16 dark:invert-100"
                            />
                            <h3 className="capitalize md:text-lg lg:text-xl xl:text-2xl text-gray-700 dark:text-gray-300 font-medium md:font-semibold lg:font-bold">Automated Visual Inspection</h3>
                            <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm md:text-md">
                               Automate your quality control processes with our computer vision system, which can identify defects, abnormalities, and other issues in products with greater precision than human inspectors.


                            </p>
                        </div>
                        <div className="absolute h-full aspect-square grid grid-rows-2 -z-10 group-hover:rotate-180 transition-all duration-[1s] scale-150 ease-in-out">
                            <div className="h-full"></div>
                            <div className="h-full bg-linear-to-b from-[var(--primary-blue)] to-[var(--primary-green)] opacity-75 dark:invert-100"></div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-5 group rounded-2xl border border-dashed border-gray-400 relative overflow-hidden box-border p-1">
                        <div className="h-full bg-white dark:bg-[#292639] w-full flex flex-col items-start center-start gap-2.5 px-8 py-8 rounded-2xl">
                            <Image 
                                src="/icons/ai-services/AI-Consulting-and-Strategy-Development-3.webp" 
                                alt="AI-Strategy-Development" 
                                width={124}
                                height={124}
                                className="w-6 md:w-8 lg:w-11 xl:w-16 dark:invert-100"
                            />
                            <h3 className="capitalize md:text-lg lg:text-xl xl:text-2xl text-gray-700 dark:text-gray-300 font-medium md:font-semibold lg:font-bold">Video Analytics</h3>
                            <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm md:text-md">
                              Rankraze video analytics solutions analyze video data for real-time decision-making. We extract valuable insights such as motion tracking, crowd analysis, and event detection.
                            </p>
                        </div>
                        <div className="absolute h-full aspect-square grid grid-rows-2 -z-10 group-hover:rotate-180 transition-all duration-[1s] scale-150 ease-in-out">
                            <div className="h-full bg-linear-to-b from-[var(--primary-blue)] to-[var(--primary-green)] opacity-75 dark:invert-100"></div>
                            <div className="h-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
<h2 className="lg:text-4xl md:text-3xl tetx-xl font-semibold mt-10 dark:text-[var(--card-foreground)]">Why Rankraze for Computer Vision?</h2>
            <div className="w-full flex flex-col md:flex-row items-stretch justify-center gap-3.5 md:gap-5 lg:gap-8 max-w-7xl">

    {/* card 1 */}
    <div className="w-full md:w-1/3 flex flex-row items-start p-5 md:p-6 lg:p-7 gap-4">
        <UserPen size={100} color="#3DBC9B" strokeWidth={2} />
        <div className="flex flex-col gap-2 ">
            <h3 className="lg:text-2xl text-xl font-semibold text-gray-800 dark:text-gray-300 capitalize">
                AI Expertise
            </h3>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 tracking-wide">
                Our team comprises specialists in machine learning, computer vision, and deep learning.
            </p>
        </div>
    </div>

 {/* card 2 */}
    <div className="w-full md:w-1/3 flex flex-row items-start p-5 md:p-6 lg:p-7 gap-4">
        <ScrollText size={100} color="#3DBC9B" strokeWidth={1.5} />

        <div className="flex flex-col gap-2">
            <h3 className="lg:text-2xl text-xl font-semibold text-gray-800 dark:text-gray-300 capitalize">
                Tailored Solutions
            </h3>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 tracking-wide">
                We offer custom computer vision solutions designed specifically for your business needs.
            </p>
        </div>
    </div>

   {/* card 3 */}
    <div className="w-full md:w-2/5 flex flex-row items-start p-5 md:p-6 lg:p-7 gap-4">
        <Settings size={100} color="#3DBC9B" strokeWidth={1.5} />

        <div className="flex flex-col gap-2">
            <h3 className="lg:text-2xl text-xl font-semibold text-gray-800 dark:text-gray-300 capitalize">
                Cutting-Edge Technology
            </h3>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 tracking-wide">
                We utilize the latest AI algorithms and deep learning models to provide the best possible results.
            </p>
        </div>
    </div>
</div>
<div className="w-full flex flex-col md:flex-row items-stretch justify-center gap-3.5 md:gap-5 lg:gap-8 max-w-7xl">
<div className="bg-[var(--primary-blue)] rounded-lg w-full flex flex-col md:flex-row items-center md:items-stretch h-auto md:h-40 lg:h-56 px-4 md:px-8 lg:px-12 py-4 gap-4 md:gap-0 ">
  <div className="w-full md:w-1/5 h-40 md:h-full flex justify-center items-center">
    <Image
      src="/upload/services/computer-vision-3.webp"
      alt="business-consultant-mobile.webp"
      width={418}
      height={626}
      className="w-auto h-full  object-cover  rounded-xl shadow-2xs"
    />
  </div>

  <div className="w-full md:w-3/5 flex flex-col justify-center items-start px-2 md:px-4 text-white text-center md:text-left">
    <p className="text-base md:text-lg font-semibold leading-snug ml-20">
      Your big idea could be the next breakthrough—why wait to make it happen?
    </p>
  </div>

  <div className="w-full md:w-1/3 flex justify-center md:justify-end items-center">
    <Link
      href={"https://crm.skalelit.com/lead-form/1f920a2abc3394d259281285252cbb52?styled=1&with_logo=1"}
      className="overflow-hidden capitalize text-sm md:text-base text-white px-5 py-2.5 relative bg-linear-to-br from-[#3DBC9C] to-[#36aaf1] rounded-lg"
    >
      Get a Free Consultation 
    </Link>
  </div>

</div>
</div>
<div className="w-full flex flex-col md:flex-row items-stretch justify-center gap-3.5 md:gap-5 lg:gap-8 max-w-7xl">

    {/* card 1 */}
    <div className="w-full md:w-4/5 flex flex-row items-start p-5 md:p-6 lg:p-7 gap-4">
        <div className="flex flex-col gap-2 ">
            <span className="lg:text-xl text-sm  text-gray-800 dark:text-gray-300 capitalize">
                Case Studies
            </span>
            <h2 className="text-4xl leading-relaxed text-black font-semibold dark:text-gray-400 tracking-wide  lg:leading-none">
              Real Results with Rankraze Computer Vision
            </h2>
        </div>
    </div>

   {/* card 2 */}
    <div className="w-full md:w-3/5 flex flex-row items-start p-5 md:p-6 lg:p-7 gap-4">
       <Link
          href="/website-portfolio"
          className="overflow-hidden capitalize text-sm dark:text-[var(--card-foreground)] text-black px-6 py-2.5 relative mt-10">
            Explore Our Full Range of Case Studies →
        </Link>
    </div>
</div>
 <div className="w-full flex flex-col md:flex-row items-stretch justify-center gap-3.5 md:gap-5 lg:gap-8 max-w-7xl ">
                <div className="w-full bg-white md:w-1/2 flex flex-col items-center justify-start p-5 md:p-6 lg:p-7 gap-4 border border-gray-200 dark:border-gray-50 rounded-md shadow-[0px_3px_6px_rgba(0,0,0,0.07),0px_-3px_6px_rgba(0,0,0,0.07)] dark:shadow-[0px_2px_6px_rgba(255,255,255,0.07),0px_-2px_6px_rgba(255,255,255,0.07)] cursor-pointer">
                <div className="w-full flex flex-col md:flex-row items-stretch justify-center gap-3.5 md:gap-5 lg:gap-8 max-w-7xl ">
                   <div className="w-full md:w-1/2 flex flex-col justify-start">
                           <Image
      src="/upload/services/computer-vision-4.webp"
      alt="business-consultant-mobile.webp"
      width={418}
      height={626}
      className="w-auto h-full  object-cover  rounded-xl shadow-2xs"
    />
                   </div>
                    <div className="w-full md:w-1/2 flex flex-col justify-start">
                           <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold py-3">Retail Industry</h3>
                           <p className="text-gray-600">Rankraze helped a leading retailer automate their inventory management with real-time object recognition, reducing stockouts by 25%</p>
                   </div>
                   </div>
                </div>
                
                <div className="w-full md:w-1/2 bg-white flex flex-col items-center justify-start p-5 md:p-6 lg:p-7 gap-4 border border-gray-200 rounded-md shadow-[0px_3px_6px_rgba(0,0,0,0.07),0px_-3px_6px_rgba(0,0,0,0.07)]  cursor-pointer">
                     <div className="w-full flex flex-col md:flex-row items-stretch justify-center gap-3.5 md:gap-5 lg:gap-8 max-w-7xl ">
                   <div className="w-full md:w-1/2 flex flex-col justify-start">
                           <Image
      src="/upload/services/computer-vision-5.webp"
      alt="business-consultant-mobile.webp"
      width={418}
      height={626}
      className="w-auto h-full  object-cover  rounded-xl shadow-2xs"
    />
                   </div>
                    <div className="w-full md:w-1/2 flex flex-col justify-start">
                           <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold py-3">Healthcare Industry</h3>
                           <p className="text-gray-600">Rankraze helped a leading retailer automate their inventory management with real-time object recognition, reducing stockouts by 25%</p>
                   </div>
                   </div>
                   
                </div>
            </div>
            <div className="text-center py-3">
             <h2 className="lg:text-4xl md:text-3xl tetx-xl font-semibold dark:text-[var(--card-foreground)] py-3">Our Technology Stack</h2>
             <p className="text-black dark:text-[var(--card-foreground)]">At Rankraze, we use the latest technologies to power our computer vision solutions. Our technology stack includes:</p>
             </div>
             <div className="w-full flex flex-col md:flex-row items-stretch justify-center gap-3.5 md:gap-5 lg:gap-8 max-w-7xl ">
               
                   <div className="w-full md:w-1/2 flex flex-col justify-start">
                           <Image
      src="/upload/services/computer-vision-open-cv.webp"
      alt="business-consultant-mobile.webp"
      width={1161}
      height={1536}
      className="w-auto h-20  object-contain  rounded-xl shadow-2xs"
    />
                   </div>
                      <div className="w-full md:w-1/2 flex flex-col justify-start">
                           <Image
      src="/upload/services/computer-vision-tensorflow.webp"
      alt="business-consultant-mobile.webp"
      width={1024}
      height={655}
      className="w-auto h-20  object-contain  rounded-xl shadow-2xs"
    />
                   </div>
                     <div className="w-full md:w-1/2 flex flex-col justify-start">
                           <Image
      src="/upload/services/computer-vision-pytorch.webp"
      alt="business-consultant-mobile.webp"
      width={300}
      height={168}
      className="w-auto h-20  object-contain  rounded-xl shadow-2xs"
    />
                   </div>
                     <div className="w-full md:w-1/2 flex flex-col justify-start">
                           <Image
      src="/upload/services/computer-vision-keras.webp"
      alt="business-consultant-mobile.webp"
      width={1024}
      height={296}
      className="w-auto h-20  object-contain  rounded-xl shadow-2xs"
    />
                   </div>
                     <div className="w-full md:w-1/2 flex flex-col justify-start">
                           <Image
      src="/upload/services/computer-vision-aws.webp"
      alt="business-consultant-mobile.webp"
      width={1024}
      height={614}
      className="w-auto h-20  object-contain  rounded-xl shadow-2xs"
    />
                   </div>
                   </div>

                   <div className="text-center py-3">
             <h2 className="lg:text-4xl md:text-3xl tetx-xl font-semibold py-3 dark:text-[var(--card-foreground)]">Industries We Serve</h2>
             <p className="text-black dark:text-[var(--card-foreground)]">Rankraze provides AI-driven computer vision services for various industries, including: </p>
             </div>
               <div className="w-full flex flex-col md:flex-row items-stretch justify-center gap-3.5 md:gap-5 lg:gap-8 max-w-7xl mt-2.5 md:mt-6 lg:mt-9 xl:mt-12">
                <div className="w-full md:w-1/3 flex flex-col items-center justify-start p-5 md:p-6 lg:p-7 gap-4 border hover:bg-white/70 border-gray-300 dark:border-gray-50 rounded-md  cursor-pointer">
                    <ShoppingCart  size={40} color="#3DBC9B" strokeWidth={1.5} />
                    <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 capitalize text-center">
                        Retail
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400 tracking-wide text-center">Automated inventory management, customer behavior tracking, and more. </p>
                </div>
                <div className="w-full md:w-1/3 flex flex-col items-center justify-start p-5 md:p-6 lg:p-7 gap-4 border hover:bg-white/70 border-gray-300 rounded-md cursor-pointer">
                    <HeartPulse  size={40} color="#3DBC9B" strokeWidth={1.5} />
                    <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 capitalize text-center">
                        HealthCare
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400 tracking-wide text-center">Medical image analysis, diagnostics, and real-time decision-making.</p>
                </div>
                <div className="w-full md:w-1/3 flex flex-col items-center justify-start p-5 md:p-6 lg:p-7 gap-4 border hover:bg-white/70 border-gray-300 rounded-md cursor-pointer">
                    <Factory size={40} color="#3DBC9B" strokeWidth={1.5} />
                    <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 capitalize text-center">
                        Manufacturing
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400 tracking-wide text-center">Quality control, defect detection, and production line optimization.</p>
                </div>
                <div className="w-full md:w-1/3 flex flex-col items-center justify-start p-5 md:p-6 lg:p-7 gap-4 border hover:bg-white/70 border-gray-300  cursor-pointer">
                    <ShieldHalf size={40} color="#3DBC9B" strokeWidth={1.5} />
                    <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 capitalize text-center">
                        Security
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400 tracking-wide text-center">Real-time surveillance, facial recognition, and anomaly detection.</p>
                </div>
            </div>
             <section className="w-full grid place-items-center mb-10 mt-24 px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 relative">
            <div className="w-full grid place-items-center px-3 md:px-5 lg:px-8 xl:px-12 2xl:px-14 py-10 md:py-20 overflow-hidden relative rounded-md md:rounded-lg lg:rounded-xl xl:rounded-2xl 2xl:rounded-4xl before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:[background-image:linear-gradient(to_bottom,#ffffff44,#ffffffbb,white),linear-gradient(to_right,#DAF2EC,#D0EBFB)] before:-z-10 dark:before:invert shadow-xs dark:shadow-white">
                <div className="w-full max-w-7xl flex flex-col md:flex-row items-stretch justify-between gap-3.5 md:gap-0">
                    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center gap-4 pl-2.5">
                        <h2 className="text-4xl xl:text-[42px] font-semibold text-center md:text-left capitalize dark:text-gray-200 pr-4">
                           Get in Touch with Rankraze
                        </h2>
                        <p className="text-sm md:text-sm text-gray-700 dark:text-gray-300 text-center md:text-left pr-4">
                            Have a project in mind or want to learn more about our computer vision services? Contact us today to discuss your needs and how we can help you enhance your business with AI-powered computer vision
                        </p>
                       
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col items-center justify-center py-2.5">
                        <ContactForm />
                    </div>
                </div>
                <div className="absolute flex items-end justify-start w-full h-full bottom-0 left-0 -z-10 opacity-100 dark:opacity-75 bg-[url('/upload/wave-image.png')] bg-no-repeat bg-cover bg-bottom">
                </div>
            </div>
        </section>
        </section>
        </>
    )
}
