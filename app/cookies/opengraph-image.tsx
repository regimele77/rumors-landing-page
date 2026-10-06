import { contentType, createOgImage, size } from "@/lib/og";

export const alt = "Cookie Policy | Rumors";
export { contentType, size };

export default function Image() {
  return createOgImage("Cookies");
}
