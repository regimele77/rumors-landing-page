import { contentType, createOgImage, size } from "@/lib/og";

export const alt = "Services | Rumors";
export { contentType, size };

export default function Image() {
  return createOgImage("Services");
}
