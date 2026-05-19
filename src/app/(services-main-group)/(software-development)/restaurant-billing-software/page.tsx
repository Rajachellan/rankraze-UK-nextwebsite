import HomeSection from "./HomeSection"
import { Metadata } from "next";

export const metadata:Metadata = {
    title: "Restaurant Billing Software with KOT, GST & Table Management | Rankraze",
    description: "Discover why restaurants choose [Brand] for fast billing, KOT, GST compliance & Swiggy/Zomato integration. Complete restaurant POS — free to try for 30 days.",
    
    keywords: [
    "augmented reality development company",
    "augmented reality app development company",
    "augmented reality app developer",
    "ar app development company",
    "ar companies in chennai",
    "augmented reality companies in chennai",
    "augmented reality developers india",
    "augmented reality software development company",
    "augmented reality development services",
    "top augmented reality app development company"
    ],

    alternates: {
        canonical: "https://rankraze.com/augmented-reality-development",
    },

    openGraph: {
        title: "Restaurant Billing Software with KOT, GST & Table Management | Rankraze",
        description: "Discover why restaurants choose [Brand] for fast billing, KOT, GST compliance & Swiggy/Zomato integration. Complete restaurant POS — free to try for 30 days.",
        url: "https://rankraze.com/augmented-reality-development",
        siteName: "Rankraze",
        images: [
        {
            url: "/upload/AR-technology.webp",
            width: 600,
            height: 400,
            alt: "augmented-reality-development.webp",
            type: "image/webp"
        },



        
        ],
        locale: "en_US",
        type: "article",
    },
}

export default function page () {
    return (
      <>
      <HomeSection/>
      </>
    )
  }
