// "use client";

// import { useState } from "react";

// export default function SeoAndSentimentComponent () {
//     type SeoFormDetails = {
//         url:string,
//         email:string
//     }

//     const [isSEOform, setIsSEOfrom] = useState(true);
//     const [seoFormDetails, setSeoFormDetails] = useState<SeoFormDetails>({
//         url: "",
//         email: "",
//     });

//     const handleSeoFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = event.target;
//         setSeoFormDetails((prev) => ({...prev, [name]: value}));
//     }

//     return (
//         <>
//         <div className="w-full flex flex-col items-center justify-center gap-4 bg-[#EEF1F3] rounded-lg p-6">
//           <div className="flex items-center justify-center gap-4">
//             <button className={`px-4 md:px-10 py-2.5 md:py-3.5 text-sm md:text-base rounded-lg font-bold cursor-pointer transform transition-colors ease-in-out duration-500 ${ isSEOform ? "text-white bg-[var(--primary-blue)]" : "text-gray-800 bg-gray-200" }`}
//                 onClick={() => setIsSEOfrom(true)}
//             >
//                 SEO
//             </button>
//             <button className={`px-4 md:px-10 py-2.5 md:py-3.5 text-sm md:text-base rounded-lg font-bold cursor-pointer transform transition-colors ease-in-out duration-500 ${ isSEOform ? "text-gray-800 bg-gray-200" :"text-white bg-[var(--primary-blue)]" }`}
//                 onClick={() => setIsSEOfrom(false)}
//             >
//                 Sentiment Analysis
//             </button>
//              <button className={`px-4 md:px-10 py-2.5 md:py-3.5 text-sm md:text-base rounded-lg font-bold cursor-pointer transform transition-colors ease-in-out duration-500 ${ isSEOform ? "text-gray-800 bg-gray-200" :"text-white bg-[var(--primary-blue)]" }`}
//                 onClick={() => setIsSEOfrom(false)}
//             >
//                 AI calender
//             </button>
//           </div>
//           {
//                 isSEOform ? (
//                     <>
//                     <div className="w-full flex flex-col items-center justify-stretch gap-4">
//                         <h2 className="text-2xl md:text-[40px] text-center font-semibold text-gray-800 capitalize">
//                             check your website&apos;s SEO
//                         </h2>
//                         <p className="text-sm md:text-sm font-medium text-center text-gray-500 leading-snug md:leading-loose">
//                             <span className="text-center inline md:block">
//                                 Start working with an company that provide every thing you need to generate
//                             </span>
//                             <span className="text-center inline md:block pl-1 md:pl-0">
//                                 awareness drive traffic connect with sales montes nascetur ridiculus
//                             </span>
//                         </p>
//                         <div className="w-full max-w-3xl grid grid-cols-5 gap-1.5 md:flex items-center justify-center p-4 rounded-lg bg-[var(--primary-blue)] md:gap-3">
//                             <input type="text" name="url" value={seoFormDetails.url} placeholder="https://sample.com" onChange={(e) => handleSeoFormChange(e)}
//                                 className="bg-white col-span-5 focus:outline-0 px-3 py-2 rounded-md text-gray-600 font-medium w-auto md:w-2/5 text-sm md:text-base"  
//                             />
//                             <input type="text" name="email" value={seoFormDetails.email} placeholder="Email" onChange={(e) => handleSeoFormChange(e)}
//                                 className="bg-white col-span-3 focus:outline-0 px-3 py-2 rounded-md text-gray-600 font-medium w-auto md:w-2/5 text-sm md:text-base"  
//                             />
//                             <div className="col-span-2 w-auto md:w-1/5 flex items-center justify-center">
//                                 <button className="px-5 py-1.5 text-white font-medium cursor-pointer border border-white hover:bg-white hover:text-[var(--primary-blue)] rounded-md text-sm md:text-base">Send</button>
//                             </div>
//                         </div>
//                     </div>
//                     </>
//                 ) : (
//                     <>
//                     <iframe src="https://rankanalytics.in/sentiment/demo" frameBorder="0" className="w-full h-[420px] md:h-[400px] lg:h-[480px]"></iframe>
//                     </>
//                 )
//             }
//         </div>
//         </>
//     );
// }


"use client";

import { useState } from "react";

export default function SeoAndSentimentComponent() {
  type SeoFormDetails = {
    url: string;
    email: string;
  };

  const [mode, setMode] = useState<"seo" | "sentiment" | "calendar">("seo");

  const [seoFormDetails, setSeoFormDetails] = useState<SeoFormDetails>({
    url: "",
    email: "",
  });

  const handleSeoFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSeoFormDetails((prev) => ({ ...prev, [name]: value }));
  };

  const active = "text-white bg-[var(--primary-blue)]";
  const inactive = "text-gray-800 bg-gray-200";

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center gap-4 bg-[#EEF1F3] dark:bg-[#0A1628] rounded-lg p-6 transition-colors duration-300" id="seo-and-sentiment-analysis">

        {/* BUTTONS */}
        <div className="flex items-center justify-center gap-4">
          <button
            className={`px-4 md:px-10 py-2.5 rounded-lg font-bold transition-all duration-300 ${mode === "seo" ? "text-white bg-[var(--primary-blue)] dark:bg-[var(--primary-green)] dark:text-black" : "text-gray-800 bg-gray-200 dark:bg-white/5 dark:text-gray-400"}`}
            onClick={() => setMode("seo")}
          >
            SEO
          </button>

          <button
            className={`px-4 md:px-10 py-2.5 rounded-lg font-bold transition-all duration-300 ${mode === "sentiment" ? "text-white bg-[var(--primary-blue)] dark:bg-[var(--primary-green)] dark:text-black" : "text-gray-800 bg-gray-200 dark:bg-white/5 dark:text-gray-400"}`}
            onClick={() => setMode("sentiment")}
          >
            Sentiment Analysis
          </button>

          {/* <button
            className={`px-4 md:px-10 py-2.5 rounded-lg font-bold ${mode === "calendar" ? active : inactive}`}
            onClick={() => setMode("calendar")}
          >
            AI Calendar
          </button> */}
        </div>
        {mode === "seo" && (
          <div className="w-full flex flex-col items-center justify-stretch gap-4">
            <h2 className="text-2xl md:text-[40px] text-center font-semibold text-gray-800 dark:text-[#E2EEFF] capitalize">
              check your website&apos;s SEO
            </h2>

            <p className="text-sm md:text-sm font-medium text-center text-gray-500 dark:text-[#94B4D4] leading-snug md:leading-loose">
              <span className="md:block">
                Start working with a company that provides everything you need
              </span>
              <span className="md:block">
                awareness, traffic, sales & marketing support
              </span>
            </p>

            <div className="w-full max-w-3xl grid grid-cols-5 gap-1.5 md:flex items-center justify-center p-4 rounded-lg bg-[var(--primary-blue)] md:gap-3">
              <input
                type="text"
                name="url"
                value={seoFormDetails.url}
                placeholder="https://sample.com"
                onChange={handleSeoFormChange}
                className="bg-white col-span-5 px-3 py-2 rounded-md text-gray-600 md:w-2/5"
              />

              <input
                type="text"
                name="email"
                value={seoFormDetails.email}
                placeholder="Email"
                onChange={handleSeoFormChange}
                className="bg-white col-span-3 px-3 py-2 rounded-md text-gray-600 md:w-2/5"
              />

              <div className="col-span-2 md:w-1/5 flex justify-center">
                <button className="px-5 py-1.5 text-white border border-white hover:bg-white hover:text-[var(--primary-blue)] rounded-md">
                  Send
                </button>
              </div>
            </div>
          </div>
        )}

        {mode === "sentiment" && (
          <iframe
            src="https://sentiment.rankraze.com"
            frameBorder="0"
            className="w-full h-[480px] md:h-[560px] lg:h-[640px]"
          ></iframe>
        )}
{mode === "calendar" && (
  <a
    href="https://ai-calender.rankraze.com/"
    target="_blank"
    className="text-blue-600 underline"
  >
    Open AI Calendar
  </a>
)}

      </div>
    </>
  );
}




