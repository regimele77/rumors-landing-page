"use client";

import { useEffect } from "react";
import { Container } from "@/components/layout/Container";
import { PageMain } from "@/components/layout/PageMain";
import { Button } from "@/components/ui/Button";
import { AnimatedLink } from "@/components/ui/AnimatedLink";

export default function Error({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <PageMain>
      <Container className="py-24 md:py-36">
        <h1 className="display">Error</h1>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-muted md:text-xl">
          Something broke on our side. Try again in a moment.
        </p>
        {error.digest ? (
          <p className="mt-4 text-sm text-muted">Reference {error.digest}</p>
        ) : null}
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <Button type="button" onClick={() => retry()}>
            Try again
          </Button>
          <AnimatedLink href="/">Back home</AnimatedLink>
        </div>
      </Container>
    </PageMain>
  );
}
