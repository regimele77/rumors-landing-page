import { contentType, createOgImage, size } from "@/lib/og";

export const alt = "Terms of Service | Rumors";
export { contentType, size };

export default function Image() {
  return createOgImage("Terms");
}
