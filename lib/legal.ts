import { site } from "@/lib/site";

export type LegalSection = {
  id: string;
  heading: string;
  paragraphs: string[];
};

export const privacySections: LegalSection[] = [
  {
    id: "who-we-are",
    heading: "Who we are",
    paragraphs: [
      "Rumors operates this website from Tirana, Albania.",
      `You can reach us at ${site.email}.`,
    ],
  },
  {
    id: "data-we-collect",
    heading: "Data we collect",
    paragraphs: [
      "If you use the contact form, we collect your name, email address, the service you ask about, and your message.",
      "Our host may keep technical logs, such as IP address, browser type, and the page requested. We use those logs to keep the site reliable and secure.",
      "We do not ask you to create an account, and we do not buy contact lists.",
    ],
  },
  {
    id: "how-we-use-it",
    heading: "How we use it",
    paragraphs: [
      "We use contact details to reply to you and, if we work together, to run the project.",
      "We use technical logs to diagnose faults and protect the site.",
      "We do not sell personal data. We do not use it for advertising profiles.",
    ],
  },
  {
    id: "legal-bases",
    heading: "Legal bases",
    paragraphs: [
      "We reply to enquiries because we have a legitimate interest in answering people who write to us, or because you asked us to take steps before a contract.",
      "If a project goes ahead, we process contact and project data to perform that contract.",
      "We keep security logs because we have a legitimate interest in protecting the site.",
    ],
  },
  {
    id: "retention",
    heading: "How long we keep it",
    paragraphs: [
      "Enquiry messages are kept for up to 24 months, then deleted, unless we are still in conversation or the law requires a longer period.",
      "Project records are kept for the life of the work and for as long as tax or company law requires.",
      "Server logs are kept for a short operational period, then deleted or aggregated.",
    ],
  },
  {
    id: "sharing",
    heading: "Who we share it with",
    paragraphs: [
      "Email delivery, if enabled, is handled by our email provider (Resend). Hosting is provided by our hosting provider (Vercel).",
      "These providers process data only so we can run the site and reply to you.",
      "We may also disclose information if the law requires it.",
    ],
  },
  {
    id: "transfers",
    heading: "International transfers",
    paragraphs: [
      "Some providers store data outside your country. Where data leaves the European Economic Area or the United Kingdom, we rely on an adequacy decision or standard contractual clauses.",
      "You can ask us which safeguard applies to a given transfer.",
    ],
  },
  {
    id: "rights",
    heading: "Your rights",
    paragraphs: [
      "Depending on where you live, you may have the right to access, correct, delete, or restrict your personal data, and to object to certain uses.",
      "You may also have the right to data portability, and the right to lodge a complaint with a supervisory authority.",
      `You can complain to the ${site.supervisoryAuthority}, or to the authority where you live or work.`,
      "To use these rights, email us. We may need to confirm who you are before we act.",
    ],
  },
  {
    id: "cookies",
    heading: "Cookies",
    paragraphs: [
      "This site does not set non-essential cookies, and it does not use a cookie banner.",
      "Read the Cookie Policy for the detail.",
    ],
  },
  {
    id: "contact",
    heading: "How to contact us",
    paragraphs: [
      `Email ${site.email} or write to us in ${site.address}.`,
    ],
  },
  {
    id: "changes",
    heading: "Changes",
    paragraphs: [
      "If we change this policy, we will update the date at the top of the page.",
      "The new text applies from that date.",
    ],
  },
];

export const termsSections: LegalSection[] = [
  {
    id: "agreement",
    heading: "Agreement",
    paragraphs: [
      `These terms cover use of the Rumors website, operated by ${site.legalEntity}.`,
      "If we take on a project, the written proposal or contract governs that work. These website terms do not replace it.",
    ],
  },
  {
    id: "the-website",
    heading: "The website",
    paragraphs: [
      "The site describes our studio. It is not an offer to start work, and it is not legal, financial, or technical advice.",
      "We may change or remove pages without notice. We do not promise that the site will be available all the time.",
    ],
  },
  {
    id: "projects",
    heading: "Projects",
    paragraphs: [
      "A project starts when both sides agree the scope, price, and timing in writing.",
      "Until then, a conversation or a form submission does not create a contract.",
    ],
  },
  {
    id: "intellectual-property",
    heading: "Intellectual property",
    paragraphs: [
      "The Rumors name, logo, and the text on this site belong to us unless we say otherwise.",
      "You may not copy the site design or content for your own commercial use.",
      "Project deliverables are covered by the project contract, not by these terms.",
    ],
  },
  {
    id: "acceptable-use",
    heading: "Acceptable use",
    paragraphs: [
      "Do not misuse the site. That includes trying to break it, scraping it in a way that degrades service, or sending unlawful content through the form.",
      "We may block traffic that puts the site at risk.",
    ],
  },
  {
    id: "liability",
    heading: "Liability",
    paragraphs: [
      "The site is provided as is. We are not liable for decisions you make based only on these pages.",
      "Nothing here limits liability that cannot be limited under the applicable law, including liability for fraud or for death or personal injury caused by negligence.",
    ],
  },
  {
    id: "law",
    heading: "Law and disputes",
    paragraphs: [
      `These terms are governed by the laws of ${site.governingLaw}.`,
      `The courts of ${site.jurisdiction} have exclusive jurisdiction, except where the law gives you the right to bring a claim where you live.`,
    ],
  },
  {
    id: "contact",
    heading: "Contact",
    paragraphs: [
      `Questions about these terms: ${site.email}, ${site.address}.`,
    ],
  },
];

export const cookieSections: LegalSection[] = [
  {
    id: "what-this-covers",
    heading: "What this covers",
    paragraphs: [
      "This policy explains how the Rumors website uses cookies and similar storage.",
      "It applies to this marketing site only, not to products we build for clients.",
    ],
  },
  {
    id: "what-we-use",
    heading: "What we use",
    paragraphs: [
      "We do not set analytics, advertising, or other non-essential cookies.",
      "We do not show a consent banner, because there is nothing optional to accept or refuse.",
      "If the host sets a strictly necessary cookie to keep the site secure or to balance traffic, it is used only for that purpose and is not used to recognise you across other sites.",
    ],
  },
  {
    id: "analytics",
    heading: "Analytics",
    paragraphs: [
      "We assume cookieless measurement if analytics are added later. That means no cookie, no cross-site profile, and no advertising use.",
      "If that changes, we will update this policy and ask for consent before any non-essential cookie is set.",
    ],
  },
  {
    id: "your-choices",
    heading: "Your choices",
    paragraphs: [
      "You can block cookies in your browser. The site should still work.",
      "Because we do not set non-essential cookies, there is no preference centre on this site.",
    ],
  },
  {
    id: "changes",
    heading: "Changes",
    paragraphs: [
      "If our use of cookies changes, we will update the date at the top of this page before the change takes effect.",
    ],
  },
  {
    id: "contact",
    heading: "Contact",
    paragraphs: [
      `Questions: ${site.email}, ${site.address}.`,
    ],
  },
];
