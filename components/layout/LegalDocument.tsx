import { AnimatedLink } from "@/components/ui/AnimatedLink";
import { site } from "@/lib/site";
import type { LegalSection } from "@/lib/legal";

const legalNotice =
  "LEGAL NOTICE: This is template legal text for the Rumors website. It must be reviewed by a qualified lawyer before publication.";

export function LegalDocument({
  title,
  intro,
  sections,
}: {
  title: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <div className="grid gap-12 lg:grid-cols-[14rem_minmax(0,70ch)] lg:gap-16">
      <div
        hidden
        dangerouslySetInnerHTML={{ __html: `<!-- ${legalNotice} -->` }}
      />
      <nav aria-label="On this page" className="text-sm">
        <p className="mb-4 text-muted lg:hidden">On this page</p>
        <ol className="flex flex-col gap-3 lg:sticky lg:top-28">
          {sections.map((section) => (
            <li key={section.id}>
              <AnimatedLink href={`#${section.id}`}>{section.heading}</AnimatedLink>
            </li>
          ))}
        </ol>
      </nav>
      <article className="max-w-[70ch]">
        <p className="text-sm text-muted">Last updated {site.legalUpdated}</p>
        <h1 className="headline mt-4">{title}</h1>
        <p className="mt-6 text-lg leading-relaxed text-muted md:text-xl">{intro}</p>
        <div className="mt-12 space-y-10">
          {sections.map((section) => (
            <section key={section.id} aria-labelledby={section.id} className="scroll-mt-28">
              <h2 id={section.id} className="text-2xl font-bold tracking-[-0.03em]">
                {section.heading}
              </h2>
              <div className="mt-4 space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-lg leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </article>
    </div>
  );
}
