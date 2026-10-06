import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { PageMain } from "@/components/layout/PageMain";
import { Reveal } from "@/components/ui/Reveal";
import { createMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return site.services.map((service) => ({ slug: service.slug }));
}

function serviceBySlug(slug: string) {
  return site.services.find((service) => service.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = serviceBySlug(slug);

  if (!service) {
    notFound();
  }

  return createMetadata({
    title: service.title,
    description: service.summary,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = serviceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <PageMain>
      <Container className="pt-16 pb-24 md:pt-24 md:pb-36">
        <Reveal>
          <section
            aria-labelledby={`${service.slug}-title`}
          >
            <p className="text-sm text-muted tabular-nums">{service.number}</p>
            <h1
              id={`${service.slug}-title`}
              className="mt-4 max-w-[14ch] text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-none tracking-[-0.04em]"
            >
              {service.title}
            </h1>
            <div className="mt-8 max-w-xl space-y-4">
              {service.body.map((paragraph) => (
                <p key={paragraph} className="text-lg leading-relaxed md:text-xl">
                  {paragraph}
                </p>
              ))}
            </div>
            <h2 className="mt-10 text-sm text-muted">Included</h2>
            <ul className="mt-4 max-w-xl border-b border-navy/15">
              {service.includes.map((item) => (
                <li key={item} className="border-t border-navy/15 py-3 text-lg">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </Reveal>
      </Container>
    </PageMain>
  );
}
