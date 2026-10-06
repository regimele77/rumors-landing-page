import { site } from "@/lib/site";

export function Process() {
  return (
    <ol className="grid border-t border-navy/15 md:grid-cols-4">
      {site.steps.map((step) => (
        <li
          key={step.number}
          className="border-b border-navy/15 py-8 md:border-r md:border-b-0 md:px-6 md:py-0 md:pr-8 md:first:pl-0 md:last:border-r-0"
        >
          <p className="text-sm text-muted tabular-nums">{step.number}</p>
          <h3 className="mt-4 text-3xl font-extrabold tracking-[-0.04em] md:text-4xl">
            {step.title}
          </h3>
          <p className="mt-4 max-w-xs text-base leading-relaxed text-muted md:text-lg">
            {step.text}
          </p>
        </li>
      ))}
    </ol>
  );
}
