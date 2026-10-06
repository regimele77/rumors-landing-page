import { site } from "@/lib/site";
import { absoluteUrl } from "@/lib/utils";

function defined<T extends Record<string, unknown>>(value: T) {
  return Object.fromEntries(
    Object.entries(value).filter(([, entry]) => entry !== undefined),
  );
}

export function organizationGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      defined({
        "@type": "Organization",
        "@id": `${site.url}/#organization`,
        name: site.name,
        url: site.url,
        logo: `${site.url}/logo-blue.png`,
        email: site.email,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Tirana",
          addressCountry: "AL",
        },
      }),
      {
        "@type": "ProfessionalService",
        "@id": `${site.url}/#service`,
        name: site.name,
        url: site.url,
        description: site.description,
        image: `${site.url}/logo-blue.png`,
        email: site.email,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Tirana",
          addressCountry: "AL",
        },
        provider: { "@id": `${site.url}/#organization` },
        areaServed: "Worldwide",
        serviceType: site.services.map((service) => service.title),
      },
    ],
  };
}

export function contactPageGraph() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact",
    url: absoluteUrl("/contact"),
    description:
      "Start a project with Rumors. Send a short note and we will reply within two working days.",
    mainEntity: {
      "@id": `${site.url}/#organization`,
    },
  };
}
