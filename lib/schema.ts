import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required.")
    .max(120, "Use 120 characters or fewer."),
  email: z
    .string()
    .trim()
    .min(1, "Email is required.")
    .pipe(z.email("Enter a valid email address.")),
  service: z
    .string()
    .trim()
    .min(1, "Choose a service, or type the one you need.")
    .max(120, "Use 120 characters or fewer."),
  message: z
    .string()
    .trim()
    .min(10, "Write at least a short note.")
    .max(4000, "Use 4000 characters or fewer."),
});

export type ContactField = "name" | "email" | "service" | "message";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors: Partial<Record<ContactField, string>>;
};

export const initialContactState: ContactState = {
  status: "idle",
  message: "",
  fieldErrors: {},
};
