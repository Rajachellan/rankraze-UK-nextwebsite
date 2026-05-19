import Image from "next/image";
import Link from "next/link";
import { MessageCircle,TicketCheck,AlarmClockPlus,Settings,Database,Building2,ShoppingCart,Flag,ShoppingBasket} from "lucide-react"
import ContactForm from "@/app/components/UI/AllServicePageContactForm";
import { Metadata } from "next";
export const metadata:Metadata = {
    title: "AI-Powered Sentiment Analysis Services | Rankraze US",
    description: "Understand customers with Rankraze sentiment and text analytics—brand monitoring, support insights, and reporting for US teams.",
    
keywords: [
    "ai sentiment analysis",
    "customer sentiment analysis",
    "real time sentiment analysis",
    "sentiment analysis services",
    "social media sentiment tracking",
    "text sentiment analysis tools",
    "ai sentiment analysis company USA",
    "best sentiment analysis agency in Texas",
    "customer sentiment analysis USA",
    "emotional analytics Services in Dallas",
    "real time sentiment analysis services",
    "sentiment analysis company USA",
    "sentiment analysis Services in Dallas",
    "social media sentiment tracking Texas",
    "text analytics company in Dallas"
],



                
    alternates: {
        canonical: "https://rankraze.us/sentiment-analysis-services",
    },

    openGraph: {
        title: "AI-Powered Sentiment Analysis Services | Rankraze US",
        description: "Brand, social, and support sentiment analysis—actionable scoring and dashboards from Rankraze.",
        url: "https://rankraze.us/sentiment-analysis-services",
        siteName: "Rankraze",
        images: [
        {
            url: "/upload/services/sentiment-ananysis-1.webp",
            width: 500,
            height: 600,
            alt: "sentiment-ananysis-1",
            type: "image/webp"
        },
        ],
        locale: "en_US",
        type: "article",
    },
}
export default function SentimentanalysisPage(){
    return(
        <>
          <section className="w-full grid place-items-center mt-24 px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 relative">
                    <div className="w-full grid place-items-center px-3 md:px-5 lg:px-8 xl:px-12 2xl:px-14 py-10 md:py-20 overflow-hidden relative rounded-md md:rounded-lg lg:rounded-xl xl:rounded-2xl 2xl:rounded-4xl before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:[background-image:linear-gradient(to_bottom,#ffffff44,#ffffffbb,white),linear-gradient(to_right,#DAF2EC,#D0EBFB)] before:-z-10 dark:before:invert shadow-xs dark:shadow-white">
                        <div className="w-full max-w-7xl flex flex-col md:flex-row items-stretch justify-between gap-3.5 md:gap-0">
                            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center gap-4 pl-2.5">
                                <h1 className="text-4xl xl:text-[42px] font-semibold text-center md:text-left capitalize dark:text-gray-200 pr-4">
                                   Sentiment Analysis
                                </h1>
                                <h2 className="text-2xl xl:text-[20px] font-semibold text-center md:text-left capitalize dark:text-gray-200 pr-4">
                                 Our Data Says What Your Audience Loves
                                </h2>
                                <p className="text-sm md:text-sm text-black dark:text-gray-300 text-center md:text-left pr-4">
                                   Advanced sentiment analysis works together to protect your brand, analyze your audience opinions, and connect you with potential customers.
                                </p>
                                <Link
                                  href={"https://crm.skalelit.com/lead-form/1f920a2abc3394d259281285252cbb52?styled=1&with_logo=1"}
                                  target="_blank"
                                  className="overflow-hidden capitalize text-sm md:text-base text-white px-5 py-2.5 relative bg-linear-to-br from-[#3DBC9C] to-[#36aaf1] rounded-lg"
                                >
                                  Get a quote
                                </Link>
                            </div>
                            <div className="w-full md:w-1/2 flex flex-col items-center justify-center py-2.5">
                                <ContactForm />
                            </div>
                        </div>
                        {/* <div className="absolute flex items-end justify-start w-full h-full ">
                        </div> */}
                          <div className="w-full grid place-items-center px-3 md:px-5 lg:px-8 xl:px-12 2xl:px-14 py-10 md:py-20 overflow-hidden">
    <div className="w-full max-w-7xl flex flex-col md:flex-row items-stretch justify-between gap-6 md:gap-0">
        {/* left */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center gap-4 pl-2.5 ">
        <h2 className="text-4xl xl:text-[42px] font-semibold text-center md:text-left capitalize dark:text-gray-200 pr-4">
         Sentiment Analysis Services​ in Texas
        </h2>
        <p className="text-sm md:text-lg text-gray-500 dark:text-gray-300 text-center md:text-left pr-4 py-3">
         89% of companies across different sectors compete primarily based on customer experience. Customer experience is as important as the final product or service delivered.
<br /> <br />
To understand how your company battles the market and where it stands in consumer minds, customer satisfaction surveys have been the norm. But, imagine you can now know what your customers think about your brand, without using any surveys. Imagine getting to know unbiased reviews of your brand without nudging your customers. This is where sentiment analysis comes in.
<br /> <br />
Qualitative feedback given in the form of text can provide great insight into how people actually “feel” about your brand.  However, screening through textual data manually is not feasible and can be impossibly time-consuming for businesses.
<br />   <br />        
One solution to this problem? Sentiment analysis.
        </p>
        
      </div>
{/* right */}
      <div className="w-full md:w-1/2 lg:w-2/5 flex items-center justify-center py-2.5">
        <Image
             src="/upload/services/sentiment-ananysis-1.webp"
             alt="client-logo-1"
             width={500}
             height={600}
             className="w-full object-cover rounded-lg static"
           />
      </div>
    </div>
    {/* <div className="absolute flex items-end justify-start w-full h-full "></div> */}
  </div>

      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-3.5 md:gap-5 lg:gap-8 max-w-7xl mt-2.5 md:mt-6">
                  <div className="w-full  ">
                      <Image 
                      src="/upload/services/sentiment-analysis-2.webp"
                      alt="business-consultant-mobile.webp"
                      width={1024} height={683}
                      className="rounded-xl shadow-2xs "
                      />
                  </div>
                  <div className="w-full md:w-4.5/5 flex flex-col items justify-center p-2.5 gap-3 md:gap-4 xl:gap-5">
                      <h2 className="text-2xl md:text-3xl lg:text-4xl capitalize font-bold text-gray-800 dark:text-gray-200">
                          What is Sentiment Analysis ?
                      </h2>
                      <p className="text-sm leading-relaxed text-justify text-black dark:text-gray-400 tracking-wide xl:pr-12 2xl:pr-20">
                        Sentiment Analysis is a process of recognizing and categorizing a piece of text as per the tone conveyed by it. This text can be tweets, comments, feedback, and even random rants with positive, negative, and neutral sentiments associated with them. Sentiment analysis extracts the meaning from the text and a score is then applied based on the sentiment of the text.
                      </p>
                     
                  </div>
              </div>

                 <div className="w-full flex flex-col md:flex-row items-stretch justify-center gap-3.5 md:gap-5 lg:gap-8 max-w-7xl mt-2.5 md:mt-6 lg:mt-9 xl:mt-12">
                <div className="w-full md:w-1/3 flex flex-col items-center justify-start p-5 md:p-6 lg:p-7 gap-4 cursor-pointer">
                  
                  <MessageCircle  size={40} color="#3DBC9B" strokeWidth={1.5} />
                    <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-black dark:text-gray-300 capitalize text-center">
                       Multilingual
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400 tracking-wide text-center">We do sentiment analysis in multiple languages to understand the true sentiments of different groups of people around the world.</p>
                </div>
                <div className="w-full md:w-1/3 flex flex-col items-center justify-start p-5 md:p-6 lg:p-7 gap-4 cursor-pointer ">
                   <TicketCheck  size={40} color="#3DBC9B" strokeWidth={1.5} />
                    <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-black dark:text-gray-300  capitalize text-center">
                       High Accuracy
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400 tracking-wide text-center">We offer the highest level of accuracy in analyzing the sentiments of different kinds of people with different mindset.</p>
                </div>
                <div className="w-full md:w-1/3 flex flex-col items-center justify-start p-5 md:p-6 lg:p-7 gap-4 cursor-pointer">
                    <AlarmClockPlus  size={40} color="#3DBC9B" strokeWidth={1.5} />
                    <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-black dark:text-gray-300  capitalize text-center">
                       Expertise
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400 tracking-wide text-center">We possess expertise in analyzing sentiments on different platforms for all industrial sectors.</p>
                </div>
            </div>
                    </div>                    
                </section>

                {/* section 2 */}
          <section className="w-full grid place-items-center mt-24 px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 relative bg-gray-50 dark:bg-gray-50/0">
              <h2 className="text-black dark:text-[var(--card-foreground)] text-xl md:text-3xl lg:text-4xl w-full mt-20 md:w-4/5 text-center font-bold">Let’s have a closer look at how sentiment analysis can be of benefit to businesses.</h2>
              <div className="w-full grid grid-cols-3 gap-3.5 md:gap-5 lg:gap-8 max-w-7xl mt-2.5 md:mt-6 mb-24">
                <div className="w-full flex flex-col my-3 justify-start border-1 border-transparent transition hover:border-green-600 bg-white p-5 md:p-6 lg:p-7 cursor-pointer rounded-md">
                    <h3 className="text-base xl:text-lg font-semibold text-gray-700 py-3 capitalize hover:text-[var(--primary-green)]">
                       Brand Reputation Management
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-500 tracking-wide text-justify">

                     Sentiment analysis can be used to enhance brand reputation by analyzing the web and social media profiles about a brand, product, or service.</p>
                </div>
                 <div className="w-full flex flex-col my-3 justify-start border-1 border-transparent transition hover:border-green-600 bg-white p-5 md:p-6 lg:p-7 cursor-pointer rounded-md">
                    <h3 className="text-base xl:text-lg font-semibold text-gray-700 py-3 capitalize hover:text-[var(--primary-green)]">
                        Gain competitive advantage
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-500 tracking-wide text-justify">

                    Sentiment analysis helps in analyzing the competitors and their marketing efforts. In this way, the businesses can adjust their value proposition and hit all the right marks</p>
                </div>
                 <div className="w-full flex flex-col my-3 justify-start border-1 border-transparent transition hover:border-green-600 bg-white p-5 md:p-6 lg:p-7 cursor-pointer rounded-md">
                    <h3 className="text-base xl:text-lg font-semibold text-gray-700 py-3 capitalize hover:text-[var(--primary-green)]">
                       Enhance customer experience
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-500 tracking-wide text-justify">

                      Analyzing the sentiment of your customer feedback lets you learn your customers’ like and dislike. You can rectify all the errors and enhance the customer experience.</p>
                </div>
                <div className="w-full flex flex-col my-3 justify-start border-1 border-transparent transition hover:border-green-600 bg-white p-5 md:p-6 lg:p-7 cursor-pointer rounded-md">
                    <h3 className="text-base xl:text-lg font-semibold text-gray-700 py-3 capitalize hover:text-[var(--primary-green)]">
                       Crisis Prevention
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-500 tracking-wide text-justify">  Businesses can get real-time notifications about negative comments online. This helps them quickly react and solve the problems before it turns into a social media crisis.</p>
                </div>
                <div className="w-full flex flex-col my-3 justify-start border-1 border-transparent transition hover:border-green-600 bg-white p-5 md:p-6 lg:p-7 cursor-pointer rounded-md">
                    <h3 className="text-base xl:text-lg font-semibold text-gray-700 py-3 capitalize hover:text-[var(--primary-green)]">
                        Informed Decision Making
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-500 tracking-wide text-justify">


                    When businesses get to know what consumers like, dislike, or what their expectations are, they can conduct a market study to make better decisions.</p>
                </div>
              </div>
          </section>

 <section className="w-full grid place-items-center px-4 md:px-6 lg:px-10 dark:bg-[var(--popover)] text-[var(--text-black)] gap-10 relative bg-gray-100">

  {/* TOP CONTAINER */}
  <div className="w-full grid place-items-center mt-8 px-4 md:px-6 lg:px-8 xl:px-10 py-10 md:py-16 rounded-xl relative overflow-hidden
    before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full
    before:[background-image:linear-gradient(to_bottom,#ffffff44,#ffffffbb,white),linear-gradient(to_right,#DAF2EC,#D0EBFB)]
    before:-z-10 dark:before:invert shadow-sm">

    <div className="w-full max-w-7xl flex flex-col md:flex-row items-stretch gap-8">
      
      {/* LEFT TEXT SECTION */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center md:text-left dark:text-gray-200">
          Sentiment Analysis Services Offered By Rankraze
        </h2>

        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 text-center md:text-left leading-relaxed">
          Social media strategy development: We’ll work with you to understand your business objectives and target audience, and then create a customized social media strategy that aligns with your overall marketing plan. <br/><br/>
          Content creation: From crafting compelling social media posts to designing eye-catching graphics, our team can help you create engaging content that resonates with your audience and drives results.<br/><br/>
          Social media advertising: We can help you create and manage targeted social media advertising campaigns to reach a larger audience and drive traffic to your website.<br/><br/>
          Social media management: Our team can handle all aspects of your social media presence, including scheduling and publishing content, interacting with followers, and analyzing the results of your campaigns.
        </p>
      </div>

      {/* RIGHT BLOCK LIST */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-5">
        <div className="space-y-4">
          {/* Accordion Item 1 */}
          <div className="bg-gray-50 rounded overflow-hidden shadow">
              <input type="radio" name="accordion1" id="acc1" className="peer hidden" />
              <label
                  htmlFor="acc1"
                  className="flex justify-between p-5 cursor-pointer bg-white  transition-all duration-300 peer-checked:bg-gradient-to-br peer-checked:from-[#3DBC9C] peer-checked:to-[#36aaf1]"
              >
                <span className="text-sm lg:text-base font-bold text-black peer-checked:text-white">
                  Text Analysis for Surveys
                </span>
              </label>
              <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96 p-0 peer-checked:p-5 text-gray-600 text-sm">
                  The feedback within your survey responses is analyzed and given sentiment scores. The scores can help you address some of the more immediate concerns your customers have during their experiences.
              </div>
          </div>

          {/* Accordion Item 2 */}
          <div className="bg-gray-50 rounded overflow-hidden shadow">
              <input type="radio" name="accordion1" id="acc2" className="peer hidden" />
              <label
                  htmlFor="acc2"
                  className="flex justify-between p-5 cursor-pointer bg-white   peer-checked:bg-gradient-to-br peer-checked:from-[#3DBC9C] peer-checked:to-[#36aaf1]">
                  <span className="text-sm lg:text-base font-bold text-black peer-checked:text-white">
                    Text Analysis for Customer Reviews
                  </span>
              </label>
              <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96 p-0 peer-checked:p-5 text-gray-600 text-sm">
                The feedback within your survey responses is analyzed and given sentiment scores. The scores can help you address some of the more immediate concerns your customers have during their experiences.
              </div>
          </div>

          {/* Accordion Item 3 */}
          <div className="bg-gray-50 rounded overflow-hidden shadow">
              <input type="radio" name="accordion1" id="acc3" className="peer hidden" />
              <label
                  htmlFor="acc3"
                  className="flex justify-between p-5 cursor-pointer bg-white  transition-all duration-300 peer-checked:bg-gradient-to-br peer-checked:from-[#3DBC9C] peer-checked:to-[#36aaf1]"
              >
                  <span className="text-sm lg:text-base font-bold text-black peer-checked:text-white">
                    Text Analysis for Social Media
                  </span>
              </label>
              <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96 p-0 peer-checked:p-5 text-gray-600 text-sm">
                We use advanced sentiment analysis tools to generate actionable insights from social media likes, comments, shares, and more. These data will help businesses create social media campaigns and strategies which will effectively boost the brand image and perception.
              </div>
          </div>
      </div>
      </div>
    </div>
  </div>

  {/* SECTION TITLE */}


  {/* --- 1ST ROW OF CARDS --- */}
  <div className="w-full max-w-7xl flex flex-col md:flex-row mt-20 md:mt-40 justify-center gap-5">

    {/* CARD */}
    <div className="flex w-full md:w-1/3 dark:bg-[var(--sidebar)] bg-white items-start p-5 md:p-6 rounded-lg hover:border hover:border-[var(--primary-green)] gap-4">
      <Settings size={100} className="text-[var(--primary-green)]" />
      <div className="flex flex-col gap-2">
        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold hover:text-[var(--primary-green)] dark:text-gray-300">
          Automotive Companies
        </h3>
        <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
Automotive companies use platforms like social media to get customer feedback. This feedback can then be used to enhance marketing and advertising efforts.
        </p>
      </div>
    </div>

    <div className="flex w-full md:w-1/3 dark:bg-[var(--sidebar)] bg-white items-start p-5 md:p-6 rounded-lg hover:border hover:border-[var(--primary-green)] gap-4">
      <Database size={100} className="text-[var(--primary-green)]" />
      <div className="flex flex-col gap-2">
        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold dark:text-gray-300">
          Retail
        </h3>
        <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
     
In the retail sector sentiment analysis can help understand better operational enhancements, product quality improvements, competitive intelligence, and brand reputation threat.
        </p>
      </div>
    </div>

    <div className="flex w-full md:w-1/3 dark:bg-[var(--sidebar)] bg-white items-start p-5 md:p-6 rounded-lg hover:border hover:border-[var(--primary-green)] gap-4">
      <Building2 size={100} className="text-[var(--primary-green)]" />
      <div className="flex flex-col gap-2">
        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold dark:text-gray-300">
          Insurance Companies
        </h3>
        <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          Sentiment analysis helps insurance companies to automate recurring processes, by which they reduce the workload of the insurance agents.
        </p>
      </div>
    </div>
  </div>

  {/* --- 2ND ROW OF CARDS --- */}
  <div className="w-full max-w-7xl flex flex-col md:flex-row justify-center gap-5 mb-10">

    <div className="flex w-full md:w-1/3 dark:bg-[var(--sidebar)] bg-white items-start p-5 md:p-6 rounded-lg hover:border hover:border-[var(--primary-green)] gap-4">
      <ShoppingCart size={100} className="text-[var(--primary-green)]" />
      <div className="flex flex-col gap-2">
        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold dark:text-gray-300">
          Banking & Finance
        </h3>
        <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
Sentiment analysis helps banking and finance companies to analyze customer feedback, evaluate customer interactions, assess claims, and identify compliance risks.
        </p>
      </div>
    </div>

    <div className="flex w-full md:w-1/3 dark:bg-[var(--sidebar)] bg-white items-start p-5 md:p-6 rounded-lg hover:border hover:border-[var(--primary-green)] gap-4">
      <Flag size={100} className="text-[var(--primary-green)]" />
      <div className="flex flex-col gap-2">
        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold dark:text-gray-300">
          Politics
        </h3>
        <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          

In politics, sentiment analysis can be used to measure emotional beliefs on any topic. For example, a political party can analyze the positive or negative mentions about particular candidates.
        </p>
      </div>
    </div>

    <div className="flex w-full md:w-1/3 dark:bg-[var(--sidebar)] bg-white items-start p-5 md:p-6 rounded-lg hover:border hover:border-[var(--primary-green)] gap-4">
      <ShoppingBasket size={100} className="text-[var(--primary-green)]" />
      <div className="flex flex-col gap-2">
        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold dark:text-gray-300">
          Commerce
        </h3>
        <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
         Sentiment analysis in the eCommerce sector helps to analyze customer reviews and comments to enhance the experience for the customers.
        </p>
      </div>
    </div>
  </div>
</section>


<section className="w-full grid place-items-center mt-24 px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 relative  ">
    <h2 className="text-black dark:text-[var(--card-foreground)] text-xl md:text-3xl lg:text-4xl w-full mt-20 md:w-4/5 text-center font-bold">Case Study</h2>
    <div className="w-full flex flex-col md:flex-row items-stretch justify-center gap-3.5 md:gap-5 lg:gap-8 max-w-7xl mt-2.5 md:mt-6">
      <div className="w-full md:w-1/3 flex flex-col my-3 justify-start hover:border-1 transition hover:border-green-600 bg-white p-5 md:p-6 lg:p-7 cursor-pointer">
          <span className="text-base xl:text-lg font-semibold text-[var(--primary-green)] py-3 capitalize hover:text-[var(--primary-green)]">
            Data Analysis
          </span>
            <Image 
            src="/upload/sentiment-analysis-case-study-1.webp"
            alt="business-consultant-mobile.webp"
            width={401} height={104}
            className="rounded-xl shadow-2xs "
            />
          <p className="text-sm leading-relaxed text-gray-500 tracking-wide text-justify">

          Data analyzed to understand word cloud on negative reviews.</p>
            <Image 
            src="/upload/Sentiment-analysis-case-study-2.webp"
            alt="business-consultant-mobile.webp"
            width={850} height={553}
            className=" "
            />
      </div>
        <div className="w-full md:w-1/3 flex flex-col my-3 justify-start hover:border-1 transition hover:border-green-600 bg-white p-5 md:p-6 lg:p-7 cursor-pointer">
          <span className="text-base xl:text-lg font-semibold text-[var(--primary-green)] py-3 capitalize hover:text-[var(--primary-green)]">
              Data Analysis
          </span>
            <Image 
            src="/upload/Sentiment-analysis-case-study-3.webp"
            alt="business-consultant-mobile.webp"
            width={193} height={76}
            className="rounded-xl shadow-2xs "
            />
              <p className="text-sm leading-relaxed text-gray-500 tracking-wide text-justify">

        Analysis for ASDA, UK-Jan 2022 .</p>
              <Image 
            src="/upload/Sentiment-analysis-case-study-4.webp"
            alt="business-consultant-mobile.webp"
            width={829} height={529}
            className=" "
            />
          <p className="text-sm leading-relaxed text-gray-500 tracking-wide text-justify">

        In total of 18k reviews for location Lowestoft about we got about 15k negative reviews, which might affect our sales. Analyzing these negative reviews helps us understand what are we missing.</p>
      </div>
        <div className="w-full md:w-1/3 flex flex-col my-3 justify-start hover:border-1 transition hover:border-green-600 bg-white p-5 md:p-6 lg:p-7 cursor-pointer">
          <span className="text-base xl:text-lg font-semibold text-[var(--primary-green)] py-3 capitalize hover:text-[var(--primary-green)]">
            Data Analysis
          </span>
            <Image 
            src="/upload/sentiment-analysis-case-study-5.webp"
            alt="business-consultant-mobile.webp"
            width={1000} height={166}
            className=" "
            />
              <Image 
            src="/upload/sentiment-analysis-case-study-6.webp"
            alt="business-consultant-mobile.webp"
            width={1395} height={696}
            className=" "
            />
          <p className="text-sm leading-relaxed text-gray-500 tracking-wide text-justify">

            Data analysis was done to understand the market trends and requirements for Insurance companies all over the globe.
  Populated a list of Insurance Companies
  their Insurance Products, Insurance Prices, and a comparison study for the same.</p>
      </div>
  </div>
        <div className="w-full flex flex-col md:flex-row items-stretch justify-center gap-3.5 md:gap-5 lg:gap-8 max-w-7xl mt-2.5 md:mt-6">
      <div className="w-full md:w-1/3 flex flex-col my-3 justify-start hover:border-1 transition hover:border-green-600 bg-white p-5 md:p-6 lg:p-7 cursor-pointer">
          <span className="text-base xl:text-lg font-semibold text-[var(--primary-green)] py-3 capitalize hover:text-[var(--primary-green)]">
            Sentiment Analysis
          </span>
          <Image 
            src="/upload/sentiment-analysis-case-study-7.webp"
            alt="business-consultant-mobile.webp"
            width={512} height={152}
            className=" "
            />
            <Image 
            src="/upload/sentiment-analysis-case-study-8.webp"
            alt="business-consultant-mobile.webp"
            width={813} height={506}
            className=" "
            />
          <p className="text-sm leading-relaxed text-gray-500 tracking-wide text-justify"> We analysed the sentiment of people in specific regions of India, by using the data online and by creating a survey for the same on social media platforms such as Instagram, Facebook, etc.
  One such result is shown here. In the image.</p>
      </div>
        <div className="w-full md:w-1/3 flex flex-col my-3 justify-start hover:border-1 transition hover:border-green-600 bg-white p-5 md:p-6 lg:p-7 cursor-pointer">
          <span className="text-base xl:text-lg font-semibold text-[var(--primary-green)] py-3 capitalize hover:text-[var(--primary-green)]">
              Sentiment Analysis
          </span>
          <Image 
            src="/upload/sentiment-analysis-case-study-9.webp"
            alt="business-consultant-mobile.webp"
            width={700} height={186}
            className=" "
            />
              <p className="text-sm leading-relaxed text-gray-500 tracking-wide text-justify">

      Automated response management & Online reputation management.</p>
            <Image 
            src="/upload/sentiment-analysis-case-study-10.webp"
            alt="business-consultant-mobile.webp"
            width={1170} height={539}
            className=" "
            />
          <p className="text-sm leading-relaxed text-gray-500 tracking-wide text-justify">


        Bajaj was concerned to stay connected to its audience for building its online reputation but Being a huge brand Bajaj with multiple branches across the world it needed to do an automated chatbot in multiple languages on several social media platforms, this was the result of analysis by rankraze.</p>
      </div>
        <div className="w-full md:w-1/3 flex flex-col my-3 justify-start   p-5 md:p-6 lg:p-7 cursor-pointer">
          
          <Link href="" className="overflow-hidden capitalize text-sm text-white px-6 py-2.5 relative bg-linear-to-br from-[#3DBC9C] to-[#36aaf1] rounded-lg items-center justify-center mt-20 md:mt-50">See It In Action →</Link>
          
          
      </div>
  </div>
</section>
              
</>
  )
}