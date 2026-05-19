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
    title: "SEO Consultancy Services in Texas",
    description: [
      "Most businesses struggle due to the lack of online presence. Establishing your business online is the number one step in creating visibility and branding. In this era, everyone researches everything before they make a decision.",
      "Be it applying for a job, buying a bag or hiring a service; people search for your brand name to check out your profiles across all different online platforms. They judge your business or service based on that.",
      "Your website is the core of your digital presence. It not only convinces customers but also establishes you as a reputed brand and ranks you higher in search engines.",
      "All this work can be a little overwhelming.",
      "That is where our SEO consultants in Texas come in: we analyze your website, its content, your domain authority, and your overall SEO health. Based on that data, we improve your SEO so you rank higher on Google and other search engines.",
    ],
    image: "/upload/SEO-Consultancy-Services-in-Chennai-978x1024.png-768x804.webp",
  },
  {
    id: "button2",
    title: "Local SEO Services",
    description: [
      "If you own a business or service that has a physical location and focuses on a particular region or area geographically, then local SEO is your go-to solution.",
      "Imagine you own a restaurant in Dallas and want to create brand awareness and drive more people to your restaurant—which option is more effective?",
      "Promoting your brand to everyone in the country, or letting people in Dallas know about your restaurant? The latter is far more effective.",
      "One major advantage of local SEO is that people who run a local search are ready to take action.",
      "If someone searches for “restaurants near me”, they are actively looking for a solution. If that person is in Dallas and your restaurant is the first result, the chance they visit soon is high.",
      "That is why local SEO matters—and we help you earn strong visibility in Google Maps, the local pack, and city-level search.",
    ],
    image: "/upload/Local-SEO-Service-768x513.webp",
  },
  {
    id: "button3",
    title: "Global SEO Services",
    description: [
      "As an SEO agency with clients around the globe, we know what it takes to stay competitive internationally.",
      "If your brand operates in multiple countries, we build strategies for each market: language, search behavior, and competition differ by region.",
      "Our SEO experts track trends and keywords in your niche and target countries, analyze competitors, and refine your approach so you rank where it drives revenue.",
    ],
    image: "/upload/Global-SEO-Services-768x602.webp",
  },
  {
    id: "button4",
    title: "Keyword Research and Analysis",
    description: [
      "Keywords are foundational in SEO.",
      "To help pages and content rank, we start with intent-aligned keyword research—not just high volume, but terms that bring qualified traffic.",
      "Our team uses professional research tools to map primary, secondary, and long-tail opportunities.",
      "For newer or lower-authority sites, we balance competitiveness with realistic wins so you gain traction and compound growth over time.",
    ],
    image: "/upload/Keywords-Research-Analysis-768x714.webp",
  },
  {
    id: "button5",
    title: "Link Building Services",
    description: [
      "Link building remains a core signal for authority and rankings.",
      "Quality backlinks support domain strength and help search engines trust your site.",
      "We use ethical, white-hat outreach and content-led tactics—not spam or risky shortcuts.",
      "We begin with a link and content audit, then earn relevant links that support your topical authority and business goals.",
      "Our content team can support the narratives and assets that naturally attract links over time.",
    ],
    image: "/upload/Link-Building-Services.webp",
  },
];

export default function Button({ buttonName }: { buttonName: string }) {
  const [popUp, setPopUp] = useState(false);

  const popupData = popups.find((p) => p.id === buttonName);

  return (
    <>
      <button
        className="cursor-pointer text-blue-600"
        onClick={() => setPopUp(true)}
      >
        Know More
      </button>

      {popUp &&
        popupData &&
        createPortal(
          <div
            className="fixed top-0 left-0 w-full h-full bg-black/70 flex items-center justify-center p-4 z-50"
            onClick={() => setPopUp(false)}
          >
            <div
              className="w-full max-w-4xl p-5 flex rounded-md bg-white gap-5 shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-1/2 flex flex-col gap-3.5 pl-2.5">
                <h2 className="text-lg font-semibold mb-2">{popupData.title}</h2>
                {popupData.description.map((text, i) => (
                  <p key={i} className="text-sm text-justify">
                    {text}
                  </p>
                ))}
              </div>

              <div className="w-1/2 flex flex-col items-center justify-start gap-3.5">
                <div className="w-full flex items-center justify-end">
                  <button
                    onClick={() => setPopUp(false)}
                    className="px-4 py-2 rounded-md cursor-pointer"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-x-icon lucide-x"
                    >
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
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
