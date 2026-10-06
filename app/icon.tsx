import { createIcon, iconSize } from "@/lib/og";

export const size = iconSize;
export const contentType = "image/png";

export default function Icon() {
  return createIcon(size.width);
}
