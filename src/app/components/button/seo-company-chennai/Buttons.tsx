"use client";

import { useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";

type PopupData = {
  id: string;
  title: string;
  description: string[];
  image: string;
};

const popups: PopupData[] = [
  {
    id: "button1",
    title: "SEO Consultancy Services In Chennai, India",
    description: [
      "Most businesses struggle due to the lack of online presence. Establishing your business online is the number one step in creating visibility and branding. In this era, everyone researches everything before they make a decision.",
      "Be it applying for a job, buying a bag or hiring a service; people search for your brand name to check out your profiles across all different online platforms. They judge your business/ service based on that.",
      "Your Website is the core of your digital presence. It not only convinces customers but also establishes you as a reputed brand and ranks you higher in Search Engines.",
      "All this work can be a little overwhelming.",
      "That’s where our SEO consultants team in Chennai comes in and analyses your website, its contents, your domain authority, your website’s overall SEO score. Based on this data generated, we then take the next step of improving your website’s SEO to rank you higher on Google and other search engines."
    ],
    image: "/upload/SEO-Consultancy-Services-in-Chennai-978x1024.png-768x804.webp"
  },
  {
    id: "button2",
    title: "Local SEO Services",
    description: [
        "If you own a business or service that has a physical location and focuses on a particular region or area geographically, then Local SEO is your go-to solution.",
        "Imagine you own a restaurant in Mumbai city and want to create brand awareness and drive more people to your restaurant, which option do you think is more effective?",
        "Promoting your brand for everyone in Indian country or letting people in Mumbai know about your restaurant? You will know for sure that the latter option is more effective.",
        "One amazing ADVANTAGE of Local SEO is that people who do a local search are ready to take action.",
        "If a person searches for “restaurants near me”, it means they’re actively looking for a solution and they’re ready to take action. If that person is from Mumbai and your restaurant is the first one that comes up, the possibility of them coming to your restaurant soon is high.",
        "That is why Local SEO is important. And we’re here to offer you an incredible service to achieve the number one position in Google and drive more traffic."
    ],
    image: "/upload/Local-SEO-Service-768x513.webp"
  },
  {
    id: "button3",
    title: "Global SEO Services",
    description: [
        "Being one of the leading SEO agencies that have clients from around the globe, we know what it takes to build and maintain a competitive edge globally.",
        "If you are a brand/ business that’s present in many places and countries, we are here to offer you the most efficient solution. Though we are physically present in India, our team has handled clients and businesses that are present in another country.",
        "Our SEO experts are always on the lookout for new trends, keywords, etc., in your niche and target countries. We pay close attention to your competitor’s strategy and always find a better way to beat that and rank higher."
    ],
    image: "/upload/Global-SEO-Services-768x602.webp"
  },
  {
    id: "button4",
    title: "Keywords Research Analysis",
    description: [
        "Keywords are Everything in SEO.",
        "To make a website or any content of the site like a blog or page rank higher on search engines, the keyword is the first and foremost factor.",
        "Our SEO research team spends all their time working with keyword research tools. They always come up with an effective keyword for every web content we upload, that has good search volume and Cost Per Click.",
        "When you are a site with low domain authority and page authority, choosing lesser competitive keywords is the key to rank on top. Our team carefully tailors effective keywords for your niche and uses better competitive keywords to make you rank above your competitor in that subject matter."
    ],
    image: "/upload/Keywords-Research-Analysis-768x714.webp"
  },
  {
    id: "button5",
    title: "Link Building Services",
    description: [
        "Link Building is the factor that is equally important as Keyword Research in Search Engine Optimization.",
        "Building backlinks will increase your domain authority and page authority. The higher your domain authority is, the more recognized and approved you are by search engines.",
        "This will establish you as an authority in that niche and will help your website rank higher in Google and other search engines.",
        "We offer excellent Link Building services in Chennai by starting with conducting Link Audits on your website to know which type of backlinks will benefit you and what type of backlinks won’t.",
        "Based on this, we then optimize your website by providing incredible Content Marketing that will drive more backlinks to your website.",
        "Our exceptional SEO team strives passionately towards making you rank on the top of the Search Engine Result Page (SERP). Our unrivaled service enables us to cater to the needs of small and large businesses alike",
        "Content is the King when it comes to SEO.",
        "Our Content Marketing team provides you complete assistance in creating highly interactive content that drives in more traffic, increases your link building and makes you rank higher in front of your potential target audience."
    ],
    image: "/upload/Link-Building-Services.webp"
  }
];

export default function Button({ buttonName }: { buttonName: string }) {
  const [popUp, setPopUp] = useState(false);

  const popupData = popups.find((p) => p.id === buttonName);

  return (
    <>
      {/* Trigger button */}
      <button
        className="cursor-pointer text-blue-600"
        onClick={() => setPopUp(true)}
      >
        Know More
      </button>

      {/* Popup via portal */}
      {popUp && popupData &&
        createPortal(
          <div className="fixed top-0 left-0 w-full h-full bg-black/70 flex items-center justify-center p-4 z-50" onClick={() => setPopUp(false)}>
            <div className="w-full max-w-4xl p-5 flex rounded-md bg-white gap-5 shadow-lg" onClick={(e) => e.stopPropagation()}>
              {/* Left side text */}
              <div className="w-1/2 flex flex-col gap-3.5 pl-2.5">
                <h2 className="text-lg font-semibold mb-2">{popupData.title}</h2>
                {popupData.description.map((text, i) => (
                  <p key={i} className="text-sm text-justify">{text}</p>
                ))}
              </div>

              {/* Right side image + close */}
              <div className="w-1/2 flex flex-col items-center justify-start gap-3.5">
                <div className="w-full flex items-center justify-end">
                  <button
                    onClick={() => setPopUp(false)}
                    className="px-4 py-2 rounded-md cursor-pointer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                  </button>
                </div>
                <div className="w-full h-full flex items-center justify-center">
                    <Image
                        src={popupData.image}
                        alt={popupData.title}
                        width={800}
                        height={600}
                        className="rounded-md"
                    />
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}