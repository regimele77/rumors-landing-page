import Link from "next/link";
import { site } from "@/lib/site";

export function WorkList() {
  return (
    <ol>
      {site.work.map((project) => (
        <li
          key={project.slug}
          id={project.slug}
          className="relative scroll-mt-32 overflow-hidden border-t border-navy/15 last:border-b"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 flex w-[62%] items-center justify-end overflow-hidden sm:w-[46%]"
          >
            <span className="translate-x-[8%] select-none font-extrabold leading-[0.78] tracking-[-0.08em] text-navy/[0.07] text-[clamp(8.5rem,24vw,18rem)]">
              {project.mark}
            </span>
          </div>
          <div className="relative grid grid-cols-[auto_1fr] items-start gap-x-5 py-16 md:gap-x-10 md:py-28">
            <span className="pt-2 text-sm text-muted tabular-nums md:pt-4">
              {project.number}
            </span>
            <div className="max-w-xl">
              <h2 className="text-[clamp(2.75rem,6vw,5.5rem)] font-extrabold leading-none tracking-[-0.045em]">
                {project.name}
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-muted md:text-lg">
                {project.summary}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function WorkIndex() {
  return (
    <ul className="grid border-t border-navy/15 sm:grid-cols-2">
      {site.work.map((project) => (
        <li
          key={project.slug}
          className="border-b border-navy/15 sm:border-r sm:px-8 sm:odd:pl-0 sm:even:border-r-0 sm:even:pr-0"
        >
          <Link
            href={`/work#${project.slug}`}
            className="group relative block overflow-hidden py-8 sm:py-10"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-1 top-1/2 -translate-y-1/2 select-none font-extrabold leading-none tracking-[-0.08em] text-navy/[0.07] text-[clamp(4.5rem,8vw,7rem)] transition-colors duration-300 ease-draw group-hover:text-navy/15 group-focus-visible:text-navy/15 motion-reduce:transition-none"
            >
              {project.mark}
            </span>
            <span className="relative text-sm text-muted tabular-nums">
              {project.number}
            </span>
            <span className="relative mt-3 block text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-none tracking-[-0.04em] transition-transform duration-300 ease-draw group-hover:translate-x-3 group-focus-visible:translate-x-3 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 motion-reduce:group-focus-visible:translate-x-0">
              {project.name}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
