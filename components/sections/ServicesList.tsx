import Link from "next/link";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { site } from "@/lib/site";

export function ServicesList() {
  return (
    <ol>
      {site.services.map((service) => (
        <li key={service.slug} className="border-t border-navy/15 last:border-b">
          <Link
            href={`/services/${service.slug}`}
            className="group grid grid-cols-[auto_1fr_auto] items-start gap-x-5 py-8 md:gap-x-10 md:py-12"
          >
            <span className="pt-2 text-sm text-muted tabular-nums md:pt-4">
              {service.number}
            </span>
            <span>
              <h3 className="text-[clamp(2rem,5vw,3.75rem)] font-extrabold leading-none tracking-[-0.04em] transition-transform duration-300 ease-draw group-hover:translate-x-3 group-focus-visible:translate-x-3 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 motion-reduce:group-focus-visible:translate-x-0">
                {service.title}
              </h3>
              <span className="mt-3 block max-w-xl text-base leading-relaxed text-muted md:text-lg">
                {service.summary}
              </span>
            </span>
            <ArrowIcon className="mt-3 opacity-0 transition duration-300 ease-draw group-hover:translate-x-1 group-hover:opacity-100 group-focus-visible:translate-x-1 group-focus-visible:opacity-100 motion-reduce:transition-none" />
          </Link>
        </li>
      ))}
    </ol>
  );
}
