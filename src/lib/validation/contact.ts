import type { ContactMessage } from "@/lib/email/contact-message";

const MAX_FIELD_LENGTH = 200;
const MAX_MESSAGE_LENGTH = 5000;

export function parseContactMessage(value: unknown): ContactMessage {
  if (!value || typeof value !== "object") {
    throw new Error("Invalid form submission.");
  }

  const input = value as Record<string, unknown>;
  const read = (field: string) => (typeof input[field] === "string" ? input[field].trim() : "");
  const name = read("name");
  const email = read("email");
  const phone = read("phone");
  const reason = read("reason");
  const otherReason = read("otherReason");
  const subject = read("subject");
  const message = read("message");

  if (!name || !email || !reason || !subject || !message) {
    throw new Error("Please complete all required fields.");
  }

  if (reason === "Other" && !otherReason) {
    throw new Error("Please tell us what you are contacting about.");
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    throw new Error("Please enter a valid email address.");
  }

  const finalReason = reason === "Other" ? `Other - ${otherReason}` : reason;

  if ([name, email, phone, finalReason, subject].some((field) => field.length > MAX_FIELD_LENGTH) || message.length > MAX_MESSAGE_LENGTH) {
    throw new Error("Your message is too long. Please shorten it and try again.");
  }

  return { name, email, phone: phone || undefined, reason: finalReason, subject, message };
}
