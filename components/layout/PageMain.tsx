import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function PageMain({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <main id="content" tabIndex={-1} className={cn("flex-1 outline-none", className)}>
      {children}
    </main>
  );
}
