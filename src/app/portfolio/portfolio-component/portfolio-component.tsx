export type PortfolioItem = {
  logo: string;
  title: string;
  description: string;
};

export type PortfolioMap = {
  [key: string]: PortfolioItem[];
};

export const portfolioData: PortfolioMap = {
  ecommerce: [
    {
      logo: "/logos/sekar-lifestyle.webp",
      title: "Sekar Lifestyle",
      description:
        "Sekar Lifestyle approached us for web designing. Our expert designer delivered a full-fledged website within a week, exceeding expectations.",
    },
    {
      logo: "/logos/dm-dryfruits.webp",
      title: "DM Dryfruits",
      description:
        "DM DryFruits needed help with their overall marketing campaign. We built a responsive website without compromising quality.",
    },
    {
      logo: "/logos/drunk-monkey.webp",
      title: "Drunk Monkey",
      description:
        "Drunk Monkey partnered with us to improve customer engagement through a strong digital presence and responsive website.",
    },
  ],

  education: [
    {
      logo: "/logos/herbal-baby.webp",
      title: "Herbal Baby",
      description:
        "Herbal Baby required branding and digital growth strategies focused on trust, safety, and parent engagement.",
    },
    {
      logo: "/logos/desi-green.webp",
      title: "Desi Green",
      description:
        "We helped Desi Green strengthen their online identity through a clean UI and structured content strategy.",
    },
  ],

  food: [
    {
      logo: "/logos/princy-baby.webp",
      title: "Princy Baby Care",
      description:
        "We designed and optimized Princy Baby Care’s digital platform to improve visibility and conversions.",
    },
  ],
};
