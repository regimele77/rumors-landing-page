import Link from "next/link";
import type { ReactNode } from "react";
import { cn, isPlaceholder } from "@/lib/utils";

type AnimatedLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
  "aria-current"?: "page";
};

export function AnimatedLink({
  href,
  children,
  className,
  external = false,
  "aria-current": ariaCurrent,
}: AnimatedLinkProps) {
  const classes = cn("animated-link", className);

  if (isPlaceholder(href)) {
    return <span className={classes}>{children}</span>;
  }

  if (external || href.startsWith("mailto:") || href.startsWith("tel:")) {
    const isHttp = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        aria-current={ariaCurrent}
        {...(isHttp
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }

  if (href.startsWith("#")) {
    return (
      <a href={href} className={classes} aria-current={ariaCurrent}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-current={ariaCurrent}>
      {children}
    </Link>
  );
}
