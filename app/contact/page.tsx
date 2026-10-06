import { Container } from "@/components/layout/Container";
import { PageMain } from "@/components/layout/PageMain";
import { ContactForm } from "@/components/sections/ContactForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { contactPageGraph } from "@/lib/json-ld";
import { createMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Start a project with Rumors. Send a short note and we will reply within two working days.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <PageMain>
      <JsonLd data={contactPageGraph()} />
      <Container className="pt-16 pb-24 md:pt-24 md:pb-36">
        <h1 className="headline max-w-[14ch]">Tell us what you want to build.</h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
          A short note is enough. We reply within two working days.
        </p>

        <div className="mt-16 grid gap-16 lg:grid-cols-[minmax(0,40rem)_16rem] lg:gap-24">
          <ContactForm />
          <aside aria-label="Contact details">
            <dl className="mt-6 space-y-6 text-lg">
              <div>
                <dt className="text-sm text-muted">Email</dt>
                <dd className="mt-1">
                  <a href={`mailto:${site.email}`} className="animated-link">
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm text-muted">Address</dt>
                <dd className="mt-1">{site.address}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </Container>
    </PageMain>
  );
}
