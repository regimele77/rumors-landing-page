import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { cn } from "@/lib/utils";

const buttonClass =
  "group relative inline-flex items-center justify-center overflow-hidden border border-navy bg-white px-6 py-3 text-base text-navy disabled:pointer-events-none disabled:opacity-50";

function ButtonFace({
  children,
  busy,
}: {
  children: ReactNode;
  busy?: boolean;
}) {
  return (
    <>
      <span
        aria-hidden="true"
        className="absolute inset-0 origin-bottom scale-y-0 bg-navy transition-transform duration-300 ease-draw group-hover:scale-y-100 group-focus-visible:scale-y-100 motion-reduce:transition-none"
      />
      <span className="relative z-10 transition-colors duration-300 ease-draw group-hover:text-white group-focus-visible:text-white motion-reduce:transition-none">
        {children}
      </span>
      <ArrowIcon
        className={cn(
          "relative z-10 ml-3 text-navy transition-transform duration-300 ease-draw group-hover:translate-x-1.5 group-hover:text-white group-focus-visible:translate-x-1.5 group-focus-visible:text-white motion-reduce:transform-none motion-reduce:transition-none",
          busy && "opacity-0",
        )}
      />
    </>
  );
}

type ButtonProps = {
  children: ReactNode;
  className?: string;
  busy?: boolean;
} & (
  | { href: string; type?: never; disabled?: never; onClick?: never }
  | {
      href?: undefined;
      type?: "submit" | "button";
      disabled?: boolean;
      onClick?: () => void;
    }
);

export function Button({ children, className, busy, ...props }: ButtonProps) {
  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={cn(buttonClass, className)}>
        <ButtonFace busy={busy}>{children}</ButtonFace>
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      className={cn(buttonClass, className)}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      <ButtonFace busy={busy}>{children}</ButtonFace>
    </button>
  );
}
