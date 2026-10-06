import { contentType, createOgImage, size } from "@/lib/og";

export const alt = "Contact | Rumors";
export { contentType, size };

export default function Image() {
  return createOgImage("Contact");
}
