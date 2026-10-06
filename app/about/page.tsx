import { Container } from "@/components/layout/Container";
import { PageMain } from "@/components/layout/PageMain";
import { Reveal } from "@/components/ui/Reveal";
import { createMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata = createMetadata({
  title: "About",
  description:
    "Rumors is a software studio. You work with the people who design and write the product, from the first conversation through launch.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <PageMain>
      <Container className="pt-12 pb-16 md:pt-16 md:pb-20">
        <Reveal>
          <h1 className="headline text-balance">{site.about.title}</h1>
          <div className="mt-8 grid gap-x-10 gap-y-5 sm:grid-cols-2 xl:grid-cols-4">
            {site.about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed md:text-lg">
                {paragraph}
              </p>
            ))}
          </div>
          <h2 className="mt-12 text-sm text-muted md:mt-16">Values</h2>
          <ul className="mt-4 grid border-t border-navy/15 lg:grid-cols-4">
            {site.values.map((value) => (
              <li
                key={value.title}
                className="border-b border-navy/15 py-5 lg:border-r lg:px-8 lg:py-6 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
              >
                <h3 className="text-2xl font-extrabold tracking-[-0.04em] md:text-3xl">
                  {value.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-muted">{value.text}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </PageMain>
  );
}
