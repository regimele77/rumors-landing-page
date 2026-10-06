import { Container } from "@/components/layout/Container";
import { PageMain } from "@/components/layout/PageMain";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { HeroHeadline } from "@/components/sections/HeroHeadline";
import { Process } from "@/components/sections/Process";
import { ServicesList } from "@/components/sections/ServicesList";
import { WorkIndex } from "@/components/sections/WorkList";
import { AnimatedLink } from "@/components/ui/AnimatedLink";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { createMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata = createMetadata({
  title: "Rumors | Software people actually use",
  description: site.description,
  path: "/",
  absolute: true,
});

export default function HomePage() {
  return (
    <PageMain>
      <Container className="pt-16 pb-24 md:pt-28 md:pb-36">
        <HeroHeadline lines={site.hero.lines} />
        <p className="mt-8 max-w-md text-lg leading-relaxed text-muted md:text-xl">
          {site.hero.lede}
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <Button href="/contact">Start a project</Button>
          <AnimatedLink href="/services">See what we do</AnimatedLink>
        </div>
      </Container>

      <section id="services" aria-labelledby="services-heading" className="scroll-mt-28">
        <Container className="pb-24 md:pb-36">
          <Reveal>
            <h2 id="services-heading" className="sr-only">
              Services
            </h2>
            <ServicesList />
          </Reveal>
        </Container>
      </section>

      <section aria-labelledby="work-heading" className="scroll-mt-28">
        <Container className="pb-24 md:pb-36">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
              <h2 id="work-heading" className="headline">
                Selected work
              </h2>
              <AnimatedLink href="/work">View the work</AnimatedLink>
            </div>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted md:text-xl">
              Large systems, built with the companies that run them.
            </p>
            <div className="mt-12 md:mt-16">
              <WorkIndex />
            </div>
          </Reveal>
        </Container>
      </section>

      <section aria-labelledby="process-heading" className="scroll-mt-28">
        <Container className="pb-24 md:pb-36">
          <Reveal>
            <h2 id="process-heading" className="headline">
              How we work
            </h2>
            <div className="mt-12 md:mt-16">
              <Process />
            </div>
          </Reveal>
        </Container>
      </section>

      <section aria-labelledby="idea-heading" className="scroll-mt-28">
        <Container className="pb-24 md:pb-36">
          <Reveal>
            <ClosingCta />
          </Reveal>
        </Container>
      </section>
    </PageMain>
  );
}
