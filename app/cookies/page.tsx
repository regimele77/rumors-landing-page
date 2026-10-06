import { Container } from "@/components/layout/Container";
import { LegalDocument } from "@/components/layout/LegalDocument";
import { PageMain } from "@/components/layout/PageMain";
import { cookieSections } from "@/lib/legal";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Cookies",
  description:
    "Rumors does not use non-essential cookies on this website. This policy explains what that means.",
  path: "/cookies",
});

export default function CookiesPage() {
  return (
    <PageMain>
      <Container className="pt-16 pb-24 md:pt-24 md:pb-36">
        <LegalDocument
          title="Cookie Policy"
          intro="This site does not use non-essential cookies, and it does not show a consent banner."
          sections={cookieSections}
        />
      </Container>
    </PageMain>
  );
}
