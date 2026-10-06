import { Container } from "@/components/layout/Container";
import { LegalDocument } from "@/components/layout/LegalDocument";
import { PageMain } from "@/components/layout/PageMain";
import { createMetadata } from "@/lib/metadata";
import { privacySections } from "@/lib/legal";

export const metadata = createMetadata({
  title: "Privacy",
  description:
    "How Rumors collects, uses, and stores personal data submitted through this website.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <PageMain>
      <Container className="pt-16 pb-24 md:pt-24 md:pb-36">
        <LegalDocument
          title="Privacy Policy"
          intro="This policy explains what personal data this website collects and why."
          sections={privacySections}
        />
      </Container>
    </PageMain>
  );
}
