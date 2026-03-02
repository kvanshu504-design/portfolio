import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Vanshika Kataria - UI/UX Designer",
  author: "Alejandro Mb Developerúnez Cuntez",
  description:
    "UI Designer based in Bangalore with roots in Punjab. I craft intuitive, visually engaging interfaces and Design System.",
  lang: "en",
  siteLogo: "/alejandro-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/vanshika-kataria-24686420b" },
    { text: "Behance", href: "https://www.behance.net/vanshikakataria" },
    { text: "Dribbble", href: "https://dribbble.com/vanshikakataria04" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Vanshika Kataria",
    specialty: "UI & Product Designer",
    summary:
      "I’m Vanshika Kataria, a UI Designer based in Bangalore with roots in Punjab. I craft intuitive, visually engaging interfaces with a strong user-first approach. Passionate about creating meaningful digital experiences through thoughtful design",
    email: "vanshikakataria42@gmail.com",
  },
  experience: [
    {
      company: "TruKKer Technologies",
      position: "Designer-1",
      startDate: "Dec 2024 - ",
      endDate: "Present",
      summary: [
        "I've been working as a Ui Designer in fintech SaaS company. And creating whole UI flows for Product like Invoice Financing, WPS, Expense Management, etc for users who don't know much about digital products (Drivers, Transporters, Vendors) Designing ideas keeping users ease.",
        "User-Centric Design: Applied UX research insights to improve user engagement and task success by 15%.",
        "Interactive Prototyping: Created wireframes and prototypes, speeding up design iterations by 20%.",
        "Visual Design: Crafted visual systems, consistent visuals that reduced UI inconsistencies by 30%.",
      ],
    },
    {
      company: "Cybernext Pvt. Ltd",
      position: "Jr. UI/UX Designer",
      startDate: "Nov 2023",
      endDate: "Oct 2024",
      summary: [
        "Designing Web UI for Clients based Canada mainly that were Birth-Centers Websites and some Very Creative, Modern Apps as well as  Social Media Designs: Developed social media designs, including posters, illustrations and Meta Ads Ads which led to a 50% increase in engagement on LinkedIn and Instagram."
      ],
    },
  projects: [
    {
      name: "Premium Watch Marketplace",
      summary: "The Luxury of UI is a conceptual UI/UX design project for a premium watch marketplace, focused on translating the elegance, exclusivity, and craftsmanship of luxury timepieces into a refined digital experience",
      linkPreview: "/",
      linkSource: "https://www.behance.net/gallery/234799843/The-Luxury-of-UI-Designing-a-Premium-Watch-Marketplace",
      image: "/shopify-clon.png",
    },
    {
      name: "Shopp App",
      summary: "An e-commerce platform that replicates Shopify's key features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/shopify-clon.png",
    },
    {
      name: "ClonTagram",
      summary: "A social network that replicates the features of Instagram",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/clone-ig.png",
    },
  ],
  about: {
    description: `
      Hi, I’m Alejandro Múnez, a passionate Mobile and Web Developer with a knack for crafting seamless digital experiences. With a strong background in both Android and iOS development, as well as front-end web technologies, I thrive in the intersection where creativity meets technology.

      Over the years, I’ve honed my skills in building robust, user-friendly applications that not only meet the needs of users but also push the boundaries of what’s possible. My projects range from innovative mobile applications to responsive web designs, all with a focus on performance, security, and scalability.
    `,
    image: "/alejandro-big.jpg",
  },
};

// #5755ff
