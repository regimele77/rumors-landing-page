import { Container } from "@/components/layout/Container";
import { LegalDocument } from "@/components/layout/LegalDocument";
import { PageMain } from "@/components/layout/PageMain";
import { termsSections } from "@/lib/legal";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Terms",
  description:
    "Terms for using the Rumors website. Project work is governed by a separate written agreement.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <PageMain>
      <Container className="pt-16 pb-24 md:pt-24 md:pb-36">
        <LegalDocument
          title="Terms of Service"
          intro="These terms cover use of this website. A client project is governed by its own contract."
          sections={termsSections}
        />
      </Container>
    </PageMain>
  );
}
