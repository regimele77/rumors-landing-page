import { appleIconSize, createIcon } from "@/lib/og";

export const size = appleIconSize;
export const contentType = "image/png";

export default function AppleIcon() {
  return createIcon(size.width);
}
