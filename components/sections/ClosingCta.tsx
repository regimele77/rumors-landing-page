import { Button } from "@/components/ui/Button";

export function ClosingCta() {
  return (
    <div className="border-t border-navy/15 pt-16 md:pt-24">
      <h2 id="idea-heading" className="display max-w-[12ch]">
        Have an idea?
      </h2>
      <p className="mt-6 max-w-md text-lg leading-relaxed text-muted md:text-xl">
        Tell us what you want to build. We will reply within two working days.
      </p>
      <div className="mt-10">
        <Button href="/contact">Start a project</Button>
      </div>
    </div>
  );
}
