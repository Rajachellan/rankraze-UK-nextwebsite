import { Metadata } from "next";
import SocialMediaMarketingClient from "./SocialMediaMarketing.client";

export const metadata: Metadata = {
  title: "Social Media Marketing Portfolio - Rankraze",
  description:
    "Grow your brand with smart social media marketing. Reach the right audience, boost engagement, and turn followers into customers.",
  keywords: [
    
  ],
  alternates: {
    canonical:
      "https://rankraze.us/social-media-marketing",
  },
  openGraph: {
    title: "Social Media Marketing Portfolio - Rankraze",
    description:
      "Rankraze runs paid social and PPC programs for US brands—with experienced media buyers, creative testing, and clear reporting.",
    url: "https://rankraze.us/social-media-marketing",
    siteName: "Rankraze",
    images: [
      {
        url: "upload/social-media.webp",
        width: 700,
        height: 501,
        alt: "Search Engine Marketing.webp",
        type: "image/webp",
      },
    ],
    locale: "en_US",
    type: "article",
  },
};

export default function SocialMediaMarketingPage() {
  return <SocialMediaMarketingClient />;
}
