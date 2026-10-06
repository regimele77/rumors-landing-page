import { cn } from "@/lib/utils";

export function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className={cn("h-4 w-4", className)}
      fill="none"
    >
      <path
        d="M2.5 8h11M9.5 4.5 13.5 8l-4 3.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}
