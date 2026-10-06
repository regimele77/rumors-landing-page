import { contentType, createOgImage, size } from "@/lib/og";

export const alt = "About | Rumors";
export { contentType, size };

export default function Image() {
  return createOgImage("About");
}
