import { Container } from "@/components/layout/Container";
import { PageMain } from "@/components/layout/PageMain";
import { WorkList } from "@/components/sections/WorkList";
import { Reveal } from "@/components/ui/Reveal";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Work",
  description:
    "Selected work by Rumors. Custom systems built for companies with a long problem.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <PageMain>
      <Container className="pt-16 pb-24 md:pt-24 md:pb-36">
        <h1 className="headline max-w-[12ch]">Selected work</h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
          Custom systems for companies that needed the work done properly.
        </p>

        <div className="mt-20 md:mt-28">
          <Reveal>
            <WorkList />
          </Reveal>
        </div>
      </Container>
    </PageMain>
  );
}
