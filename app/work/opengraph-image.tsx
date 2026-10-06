import { contentType, createOgImage, size } from "@/lib/og";

export const alt = "Work | Rumors";
export { contentType, size };

export default function Image() {
  return createOgImage("Selected work");
}
