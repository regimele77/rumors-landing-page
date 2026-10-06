import { siteUrl } from "@/lib/utils";

export const site = {
  name: "Rumors",
  description:
    "Rumors is a software studio. We design and build custom software and scalable systems for large projects.",
  url: siteUrl(),
  email: "rumors.software@gmail.com",
  address: "Tirana, Albania",
  legalEntity: "Rumors",
  governingLaw: "Albania",
  jurisdiction: "Tirana, Albania",
  supervisoryAuthority:
    "Information and Data Protection Commissioner of Albania",
  legalUpdated: "6 October 2026",
  nav: [
    { label: "Services", href: "/services" },
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  companyLinks: [
    { label: "Services", href: "/services" },
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  footerLegalLinks: [
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
  hero: {
    lines: ["We build software", "people actually use."],
    lede: "Rumors is a software studio. We design and build custom software and scalable systems for large projects.",
  },
  about: {
    title: "A studio for careful software.",
    paragraphs: [
      "Rumors designs and builds software for companies that need the work done properly.",
      "You work with the people who design and write it. The project does not get handed to a queue.",
      "We keep the scope clear, the language plain, and the code easy to change later.",
      "If we are not the right studio for the job, we say so at the start.",
    ],
  },
  values: [
    {
      title: "Direct",
      text: "We say what we mean, including when something should not be built.",
    },
    {
      title: "Careful",
      text: "We sweat the details that people actually touch.",
    },
    {
      title: "Steady",
      text: "We ship in small steps and stay after launch.",
    },
    {
      title: "Yours",
      text: "The product is yours. We leave it understandable.",
    },
  ],
  services: [
    {
      number: "01",
      slug: "custom",
      title: "Custom Development",
      summary:
        "Scalable systems and custom software for large, long-running products.",
      body: [
        "This is most of the work. A platform, a product, or the system a company runs on.",
        "We design it to take more users, more data, and more teams without a rewrite.",
        "Your people can operate it. A later change should not require a call to us.",
      ],
      includes: [
        "Custom applications and platforms",
        "Architecture built to scale",
        "Documentation your team can follow",
      ],
    },
    {
      number: "02",
      slug: "mobile",
      title: "Mobile Apps",
      summary:
        "iOS and Android products, built with the same care as the system behind them.",
      body: [
        "We design and build iOS and Android apps that feel at home on the phone.",
        "The app and the rest of the product share one design language.",
        "We help you ship to the stores and keep the release process calm.",
      ],
      includes: [
        "iOS and Android applications",
        "Shared design with the rest of the product",
        "Release, updates, and follow-up",
      ],
    },
    {
      number: "03",
      slug: "design",
      title: "Product Design",
      summary: "Interfaces, flows, and the decisions that make software feel obvious.",
      body: [
        "We shape the product before and while it is built. Screens, flows, and the words on them.",
        "You see the work early.",
        "You can disagree with it while it is still cheap to change.",
      ],
      includes: [
        "Flows, interfaces, and prototypes",
        "A design system the product can grow on",
        "Working sessions with your team",
      ],
    },
    {
      number: "04",
      slug: "web",
      title: "Web Development",
      summary: "Web applications, when a larger product needs a surface on the web.",
      body: [
        "We build web applications as part of a system, not as a site on its own.",
        "The interface stays fast and clear. It shares its design and its data with the rest of the product.",
        "You can change it later without starting over.",
      ],
      includes: [
        "Web applications tied to a larger system",
        "Performance, accessibility, and structure",
        "Deployment and a short handover",
      ],
    },
  ],
  work: [
    {
      number: "01",
      slug: "hartwell",
      name: "Hartwell",
      mark: "HW",
      summary:
        "The platform a logistics group runs on: orders, yards, and the teams between them.",
    },
    {
      number: "02",
      slug: "calder",
      name: "Calder",
      mark: "CA",
      summary:
        "A commercial system for a payments company. Accounts, limits, and the services around them.",
    },
    {
      number: "03",
      slug: "sable",
      name: "Sable",
      mark: "SA",
      summary:
        "Custom software for a clinical network, from records to the integrations that keep them current.",
    },
    {
      number: "04",
      slug: "northline",
      name: "Northline",
      mark: "NL",
      summary:
        "The system an industrial group runs on, from the floor to the people who direct it.",
    },
  ],
  steps: [
    {
      number: "01",
      title: "Discover",
      text: "We learn the problem, who it is for, and what done looks like.",
    },
    {
      number: "02",
      title: "Design",
      text: "We shape the product with you, while changes are still cheap.",
    },
    {
      number: "03",
      title: "Build",
      text: "We write the software and ship it in small steps you can use.",
    },
    {
      number: "04",
      title: "Support",
      text: "We stay after launch for fixes, improvements, and straight answers.",
    },
  ],
} as const;

export type Service = (typeof site.services)[number];
export type WorkProject = (typeof site.work)[number];
