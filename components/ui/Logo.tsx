import Image from "next/image";

const logos = {
  blue: { src: "/logo-blue.png", width: 881, height: 890 },
  white: { src: "/logo-white.png", width: 893, height: 887 },
} as const;

export function Logo({
  className,
  tone = "blue",
  priority = false,
}: {
  className?: string;
  tone?: keyof typeof logos;
  priority?: boolean;
}) {
  return (
    <Image
      src={logos[tone].src}
      alt=""
      width={logos[tone].width}
      height={logos[tone].height}
      priority={priority}
      className={className ?? "h-16 w-auto md:h-20"}
    />
  );
}
