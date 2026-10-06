"use server";

import { Resend } from "resend";
import type { z } from "zod";
import {
  contactSchema,
  initialContactState,
  type ContactField,
  type ContactState,
} from "@/lib/schema";

function isContactField(value: PropertyKey): value is ContactField {
  return (
    value === "name" ||
    value === "email" ||
    value === "service" ||
    value === "message"
  );
}

function fieldErrorsFrom(
  error: z.ZodError,
): Partial<Record<ContactField, string>> {
  const fieldErrors: Partial<Record<ContactField, string>> = {};

  for (const issue of error.issues) {
    const field = issue.path[0];
    if (isContactField(field) && !fieldErrors[field]) {
      fieldErrors[field] = issue.message;
    }
  }

  return fieldErrors;
}

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const honeypot = String(formData.get("website") ?? "");
  if (honeypot.trim()) {
    return { status: "success", message: "", fieldErrors: {} };
  }

  const parsed = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    service: formData.get("service"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    return {
      status: "error",
      message: "Please check the form and try again.",
      fieldErrors: fieldErrorsFrom(parsed.error),
    };
  }

  const { name, email, service, message } = parsed.data;
  const safeName = name.replace(/[\r\n]/g, " ");
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Service: ${service}`,
    "",
    message,
  ].join("\n");

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !to) {
    console.info("[contact] submission", { name, email, service, message });
    return { status: "success", message: "", fieldErrors: {} };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? "Rumors <onboarding@resend.dev>",
      to,
      replyTo: email,
      subject: `Project inquiry from ${safeName}`,
      text,
    });

    if (error) {
      console.error("[contact] resend error", error);
      return {
        ...initialContactState,
        status: "error",
        message: "We could not send that. Email us directly and we will reply.",
      };
    }
  } catch (error) {
    console.error("[contact] send failed", error);
    return {
      ...initialContactState,
      status: "error",
      message: "We could not send that. Email us directly and we will reply.",
    };
  }

  return { status: "success", message: "", fieldErrors: {} };
}
