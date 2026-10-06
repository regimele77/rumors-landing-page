import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageMain } from "@/components/layout/PageMain";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: { absolute: "Page not found | Rumors" },
  description: "This page is just a rumor.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <PageMain>
      <Container className="flex flex-1 flex-col justify-center py-24 md:py-36">
        <h1 className="display">404</h1>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-muted md:text-xl">
          This page is just a rumor.
        </p>
        <div className="mt-10">
          <Button href="/">Back home</Button>
        </div>
      </Container>
    </PageMain>
  );
}
