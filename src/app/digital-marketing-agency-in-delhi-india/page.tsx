
import Link from "next/link";
import Image from "next/image";
import { Lightbulb,ThumbsUp,Shuffle} from "lucide-react";
import { Metadata } from "next";


export const metadata:Metadata = {
    title: "Digital Marketing Agency in Delhi, India | Best SEO & PPC Company",
    description: "Rankraze is a leading digital marketing agency in Delhi, India, specializing in SEO, PPC, social media and web design to boost rankings, traffic and qualified leads.",
    
    keywords: [
    
    ],

    alternates: {
        canonical: "https://rankraze.us/digital-marketing-agency-in-delhi-india",
    },

    openGraph: {
        title: "Digital Marketing Agency in Delhi, India - Rankraze",
        description: "Digital Marketing Agency in Delhi, India We’re not just an agency; we’re inventors, we’re creative and digital engineers!!! Get a quote now! Welcome to Rankraze, Delhi's leading digital marketing agency that works tirelessly to grow your brand and achieve your business objectives. We are the missing piece to your digital marketing puzzle, offering holistic, end-to-end […]",
        url: "https://rankraze.us/digital-marketing-agency-in-delhi-india",
        siteName: "Rankraze",
        images: [
        {
            url: "upload/bangalore/bangalore_marketting_agency_6.webp",
            width: 445,
            height: 446,
            alt: "bangalore_marketting_agency_6.webp",
            type: "image/webp"
        },
        ],
        locale: "en_US",
        type: "article",
    },
}
export default function DelhiDigitalMarketingAgency(){
    return(
        <>
              <section className="w-full grid place-items-center mt-24 px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 relative">
        <div className="w-full grid place-items-center px-3 md:px-5 lg:px-8 xl:px-12 2xl:px-14 py-10 md:py-20 overflow-hidden relative rounded-md md:rounded-lg lg:rounded-xl xl:rounded-2xl 2xl:rounded-4xl before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:[background-image:linear-gradient(to_bottom,#ffffff44,#ffffffbb,white),linear-gradient(to_right,#DAF2EC,#D0EBFB)] before:-z-10 dark:before:invert shadow-xs dark:shadow-white">
          <h1 className="text-3xl md:text-4xl xl:text-[42px] font-semibold text-center md:text-left capitalize dark:text-gray-200">
           Digital Marketing Agency in
Delhi, India
          </h1>
          <p className="text-sm md:text-sm text-gray-700 dark:text-gray-300 text-center md:text-left py-3">
          We’re not just an agency; we’re inventors, we’re creative and digital engineers!!!
          </p>
          <Link href={"contact-us"} className="capitalize dark:invert cursor-pointer bg-[linear-gradient(132deg,_#3dbc9b_0%,_#37a7ff_100%)] rounded-sm px-6 py-2.5 text-sm font-medium text-white">
                    get a quote now
                  </Link>
        </div>
        
      </section>
      <section className="w-full flex flex-col md:flex-row font-semibold py-10 px-3 items-center justify-center gap-3.5 md:gap-5 lg:gap-8 mt-2.5 md:mt-6">
             <p className="mx-auto max-w-5xl text-center">Welcome to Rankraze, Delhi’s leading digital marketing agency that works tirelessly to grow your brand and achieve your business objectives. We are the missing piece to your digital marketing puzzle, offering holistic, end-to-end solutions that rank your website high, generate traffic, attract customers, convert leads, and take your business to new heights.</p>
      </section>

      <section className="px-10 md:px-20 lg:px-30 bg-[linear-gradient(132deg,_#3dbc9b_0%,_#37a7ff_100%)] dark:bg-none py-20 mt-6">
                    <div className="w-full flex flex-col md:flex-row items-stretch justify-center gap-3.5 md:gap-5 lg:gap-8 max-w-7xl">

    {/* card 1 */}
    <div className="w-full md:w-1/3 flex flex-row items-start p-5 md:p-6 lg:p-7 gap-4">
        {/* <Search size={140} color="white" className=" " strokeWidth={2} /> */}
        <div className="flex flex-col gap-2 ">
            <h3 className="lg:text-2xl text-xl font-semibold text-gray-800 dark:text-gray-300 capitalize">
               SEO
            </h3>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 tracking-wide">
               At Rankraze, we specialize in taking your organic traffic to new heights and generating more leads. Our SEO experts will tailor on-page and off-page optimization strategies to meet your specific needs, helping your business achieve its SEO goals.
            </p>
        </div>
    </div>

 {/* card 2 */}
    <div className="w-full md:w-1/3 flex flex-row items-start p-5 md:p-6 lg:p-7 gap-4">
        {/* <Share2 size={180} color="white" strokeWidth={1.5} /> */}

        <div className="flex flex-col gap-2">
            <h3 className="lg:text-2xl text-xl font-semibold text-gray-800 dark:text-gray-300 capitalize">
                Social Media Marketing
            </h3>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 tracking-wide">
                Transform your social media accounts into revenue-generating tools with Rankraze's creative social media marketing strategies. We'll help you build an audience, increase brand awareness, and drive website traffic across platforms like LinkedIn, Facebook, and Instagram.
            </p>
        </div>
    </div>

   {/* card 3 */}
    <div className="w-full md:w-2/5 flex flex-row items-start p-5 md:p-6 lg:p-7 gap-4">
        {/* <MailOpen size={120} color="white" strokeWidth={1.5} /> */}

        <div className="flex flex-col gap-2">
            <h3 className="lg:text-2xl text-xl font-semibold text-gray-800 dark:text-gray-300 capitalize">
               Pay Per Click
            </h3>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 tracking-wide">
              "Through our Pay-Per-Click (PPC) advertising service, we ensure that your products and services gain visibility at the top of Google searches."
            </p>
        </div>
    </div>
</div>
  <div className="w-full flex flex-col md:flex-row items-stretch justify-center gap-3.5 md:gap-5 lg:gap-8 max-w-7xl">

    {/* card 1 */}
    <div className="w-full md:w-1/3 flex flex-row items-start p-5 md:p-6 lg:p-7 gap-4">
        {/* <Monitor size={100} color="white" strokeWidth={2} /> */}
        <div className="flex flex-col gap-2 ">
            <h3 className="lg:text-2xl text-xl font-semibold text-gray-800 dark:text-gray-300 capitalize">
              
Website Design
            </h3>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 tracking-wide">
               We specialize in crafting a sophisticated and intuitive website tailored to your business, designed for optimal user experience, conversions, and search engine optimization (SEO).
            </p>
        </div>
    </div>

 {/* card 2 */}
    <div className="w-full md:w-1/3 flex flex-row items-start p-5 md:p-6 lg:p-7 gap-4">
        {/* <NotebookPen size={100} color="white" strokeWidth={1.5} /> */}

        <div className="flex flex-col gap-2">
            <h3 className="lg:text-2xl text-xl font-semibold text-gray-800 dark:text-gray-300 capitalize">
                Content Marketing
            </h3>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 tracking-wide">
                Our Content Marketing services in Delhi are entirely focused on driving conversions and delivering exceptional ROI.
            </p>
        </div>
    </div>

   {/* card 3 */}
    <div className="w-full md:w-2/5 flex flex-row items-start p-5 md:p-6 lg:p-7 gap-4">
        {/* <PanelTop size={100} color="white" strokeWidth={1.5} /> */}

        <div className="flex flex-col gap-2">
            <h3 className="lg:text-2xl text-xl font-semibold text-gray-800 dark:text-gray-300 capitalize">
               CRO
            </h3>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 tracking-wide">
             If you possess a marketing database, we can assist you in sending personalized, carefully crafted email campaigns that yield a response.
            </p>
        </div>
    </div>
</div>
      </section>
      <section>
                 <div className="w-full bg-white dark:bg-black my-5 py-16">
  <div className="max-w-6xl mx-auto   px-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      
      {/* Card 1 */}
      <div className="bg-white rounded-2xl border border-green-200 shadow-[0_0_25px_rgba(34,197,94,0.25)] p-10 text-center">
        <h3 className="text-6xl font-bold text-[var(--primary-green)]">800+</h3>
        <p className="mt-3 text-lg text-gray-900 font-medium">
         Clients WorldWide
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-2xl border border-green-200 shadow-[0_0_25px_rgba(34,197,94,0.25)] p-10 text-center">
        <h3 className="text-6xl font-bold text-[var(--primary-green)]">300+</h3>
        <p className="mt-3 text-lg text-gray-900 font-medium">
         Websites Launched
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-2xl border border-green-200 shadow-[0_0_25px_rgba(34,197,94,0.25)] p-10 text-center">
        <h3 className="text-6xl font-bold text-[var(--primary-green)]">1200+</h3>
        <p className="mt-3 text-lg text-gray-900 font-medium">
         Campaigns Worked on
        </p>
      </div>

    </div>
  </div>
</div>
<p className="text-md mx-auto max-w-7xl">
    At Rankraze, we pride ourselves on being a progressive, forward-thinking digital marketing company in Delhi, India. Our passionate team of experienced digital marketers crafts unique strategies to support your company’s growth and deliver high-quality, result-driven services.
</p>
<div className="w-full flex flex-col md:flex-row items-center mx-auto justify-center gap-3.5 md:gap-5 lg:gap-8 max-w-7xl mt-2.5 md:mt-6">
  
  {/* 70% Section */}
  <div className="w-full md:w-[40%] ">
    
     <Image 
      src="/upload/bangalore/bangalore_marketting_agency_6.webp"
      alt="Rankraze Digital Marketing Agency Bangalore"
      width={470}
      height={450}
      className="rounded-xl shadow-2xs"
    />
  </div>

  {/* 30% Section */}
  <div className="w-full md:w-[60%] flex flex-col items-center justify-center p-2.5 gap-3 md:gap-4 xl:gap-5">
    <p className="text-md leading-relaxed text-justify text-gray-800 dark:text-gray-400 tracking-wide ">

<span className="font-bold text-black">Our main focus is on getting you RESULTS!</span> <br />

The problem is that trying to run a business while also growing it, isn’t so simple! That’s why we keep our primary focus on growth, so you can concentrate on what really matters! <br />
<span className="font-bold text-black">
We don’t avoid difficult conversations.

</span> <br />
We are dedicated to saying what needs to be said, even if it is uncomfortable. After all, our primary goal is to achieve the results YOU desire. <br />
 <span className="font-bold text-black">We believe in simplicity and transparency</span> <br />


Whilst marketing can be complex, we like to be transparent with our customers so they always know what’s going on and never feel trapped or confused.
    </p>
  </div>

</div>

{/* middle section  */}
 <div className="max-w-7xl mx-auto px-4 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1 */}
        <div className="relative rounded-2xl p-8 bg-gradient-to-b from-[#4fc3a1] to-[#1f6fae] text-white">
          <div className="w-14 h-14 rounded-full bg-[#0c3d67] flex items-center hover:bg-white hover:text-black justify-center mb-6">
            <Lightbulb size={28} />
          </div>
          <h3 className="text-2xl font-bold mb-4">
            A Proactive Strategy
          </h3>
          <p className="text-sm leading-relaxed text-white/90">
           Your company is unique, and so should your marketing campaign. As one of the top digital marketing companies in Delhi, we will assign you a dedicated account manager who will be available to answer your questions, listen to your ideas, or simply talk about your digital marketing strategy.
          </p>
        </div>

        {/* Card 2 */}
        <div className="relative rounded-2xl p-8 bg-gradient-to-b from-[#4fc3a1] to-[#1f6fae] text-white">
          <div className="w-14 h-14 rounded-full bg-[#0c3d67] hover:bg-white hover:text-black flex items-center justify-center mb-6">
            <ThumbsUp size={28} />
          </div>
          <h3 className="text-2xl font-bold mb-4">
           Data-friendliness
          </h3>
          <p className="text-sm leading-relaxed text-white/90">
           Any agency that is unable to produce copious amounts of data to back up anything they do or say should raise a red flag. As a leading digital marketing agency in Delhi, we understand how to communicate data to you in simple terms and use it to your advantage. Remember that digital marketing is an investment, not an expense. You have the right to know where your money is being spent.
          </p>
        </div>

        {/* Card 3 */}
        <div className="relative rounded-2xl p-8 bg-gradient-to-b from-[#4fc3a1] to-[#1f6fae] text-white">
          <div className="w-14 h-14 rounded-full hover:text-black hover:bg-white bg-[#0c3d67] flex items-center justify-center mb-6">
            <Shuffle size={28} />
          </div>
          <h3 className="text-2xl font-bold mb-4">
           Reputation and experience
          </h3>
          <p className="text-sm leading-relaxed text-white/90">
          We have earned our reputation through consistently successful projects. You should be able to see case studies or a portfolio of our previous work when you contact our digital marketing company in Delhi. By investigating further you may discover that we specialize in a range of fields. Rankraze, for example, has a track record in healthcare, B2B, eCommerce, education, and more.
          </p>
        </div>

      </div>
    </div>



         <div className="w-full mx-auto px-5 flex flex-col md:flex-row items-center justify-center gap-3.5 md:gap-5 lg:gap-8 max-w-7xl mt-2.5 md:mt-6">
      
      {/* 70% Section */}
      <div className="w-full md:w-[70%] ">
        <p className="text-md leading-relaxed text-justify text-gray-500 dark:text-gray-400 tracking-wide xl:pr-12 2xl:pr-20">
       Rankraze is Delhi’s best PPC & SEM company, providing result-driven services that ensure your website appears at the top of search results and reaches potential customers effectively.
        </p>
      </div>
    
      {/* 30% Section */}
      <div className="w-full md:w-[40%] flex flex-col items-center justify-center p-2.5 gap-3 md:gap-4 xl:gap-5">
        
    
        <Image 
          src="/upload/delhi/delhi-digital-marketing.webp"
          alt="Rankraze Digital Marketing Agency delhi"
          width={768}
          height={614}
          className="rounded-xl shadow-2xs"
        />
      </div>
    
    </div>
          <div className="w-full  mx-auto px-5 pt-10 flex flex-col md:flex-row items-center justify-center gap-3.5 md:gap-5 lg:gap-8 max-w-7xl mt-2.5 md:mt-6 bg-[#a0fdc9] p-10">
      
      {/* 70% Section */}
      <div className="w-full md:w-[30%] ">
        
         <Image 
          src="/upload/delhi/delhi_digital_marketing_2.webp"
          alt="Rankraze Digital Marketing Agency delhi"
          width={1000}
          height={568}
          className="rounded-xl shadow-2xs"
        />
      </div>
    
      {/* 30% Section */}
      <div className="w-full md:w-[70%] flex flex-col items-center justify-center p-2.5 gap-3 md:gap-4 xl:gap-5">
        <p className="text-md leading-relaxed text-justify text-gray-800 dark:text-gray-400 tracking-wide xl:pr-12 2xl:pr-20">
   
Boost your website’s ranking and traffic with Rankraze’s efficient SEO services. Our integrative approach, combining PPC, SEO & SEM, delivers immediate results.
        </p>
    
       
      </div>
    
    </div>

    
         <div className="w-full mx-auto px-5 flex flex-col md:flex-row items-center justify-center gap-3.5 md:gap-5 lg:gap-8 max-w-7xl mt-2.5 md:mt-6">
      
      {/* 70% Section */}
      <div className="w-full md:w-[70%] ">
        <p className="text-md leading-relaxed text-justify text-gray-500 dark:text-gray-400 tracking-wide xl:pr-12 2xl:pr-20">
      Transform your online presence with Rankraze’s responsive web design and development services. We’ll create visually appealing websites that captivate your audience.
        </p>
      </div>
    
      {/* 30% Section */}
      <div className="w-full md:w-[40%] flex flex-col items-center justify-center p-2.5 gap-3 md:gap-4 xl:gap-5">
        
    
        <Image 
          src="/upload/delhi/delhi-digital-marketing-2.webp"
          alt="Rankraze Digital Marketing Agency delhi"
          width={1000}
          height={668}
          className="rounded-xl shadow-2xs"
        />
      </div>
    
    </div>
          <div className="w-full  mx-auto px-5 pt-10 flex flex-col md:flex-row items-center justify-center gap-3.5 md:gap-5 lg:gap-8 max-w-7xl mt-2.5 md:mt-6 bg-[#a0fdc9] p-10">
      
      {/* 70% Section */}
      <div className="w-full md:w-[30%] ">
        
         <Image 
          src="/upload/delhi/delhi_digital_marketing_3.webp"
          alt="Rankraze Digital Marketing Agency delhi"
          width={1000}
          height={568}
          className="rounded-xl shadow-2xs"
        />
      </div>
    
      {/* 30% Section */}
      <div className="w-full md:w-[70%] flex flex-col items-center justify-center p-2.5 gap-3 md:gap-4 xl:gap-5">
        <p className="text-md leading-relaxed text-justify text-gray-800 dark:text-gray-400 tracking-wide xl:pr-12 2xl:pr-20">
Rankraze is a renowned social media marketing agency in Delhi for fast-growing businesses. We don’t believe in “fluffy” marketing or vague campaign objectives. Our laser-targeted LinkedIn, Facebook, Instagram, and YouTube social media marketing services are all designed to deliver unrivaled ROI. 
<br />
We take a different approach to social marketing, combining powerful insights, innovative strategy, psychology, and automation to deliver the kind of campaigns your previous agency fantasizes about.
        </p>
    
       
      </div>
    
    </div>

    <div className="grid grid-cols-1 px-4 max-w-5xl mx-auto gap-6 mt-10 md:mt-20 py-10 rounded-xl px-5 bg-linear-to-b from-[#3DBC9C] to-[#07334d]">
<p className="dark:text-gray-800 text-white text-2xl md:text-3xl text-center">Sucess Stories</p>
<p className="dark:text-gray-800 text-white text-xl text-center">Over 500 happy clients. More than 200,000 leads were generated. An average of 5x ROI across different client campaigns. To discover more about our success stories, read our digital marketing case studies.</p>

</div>
<div className="text-center">
  <h3 className="dark:text-gray-800 text-black font-bold pt-10 pb-5 text-2xl md:text-3xl">
    Request a Free Quote
  </h3>

  <p className="dark:text-gray-800 text-gray-800 text-xl mb-6">
    Revolutionize your brand with our award-winning digital marketing services!
  </p>

  <Link
    href="/contact-us"
    className="inline-block mx-auto capitalize bg-[linear-gradient(132deg,_#3dbc9b_0%,_#37a7ff_100%)]
               rounded-sm px-6 py-2.5 text-sm font-medium text-white
               hover:opacity-90 transition"
  >
    get a quote now
  </Link>
</div>

      </section>
        </>
    )
}