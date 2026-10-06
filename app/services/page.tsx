import { Container } from "@/components/layout/Container";
import { PageMain } from "@/components/layout/PageMain";
import { ServicesList } from "@/components/sections/ServicesList";
import { Reveal } from "@/components/ui/Reveal";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Services",
  description:
    "Custom development and scalable systems for large projects, with mobile, product design, and web when the product needs them.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <PageMain>
      <Container className="pt-16 pb-24 md:pt-24 md:pb-36">
        <h1 className="headline max-w-[12ch]">What we do</h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
          Custom development and scalable systems. Most projects are large, and most use more than one practice.
        </p>

        <div className="mt-20 md:mt-28">
          <Reveal>
            <ServicesList />
          </Reveal>
        </div>
      </Container>
    </PageMain>
  );
}
