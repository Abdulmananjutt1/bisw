import { createContactEmail } from "@/lib/email/contact-message";
import { sendResendEmail, type ResendAttachment } from "@/lib/email/resend";
import { parseContactMessage } from "@/lib/validation/contact";

export const runtime = "nodejs";

const MAX_ATTACHMENTS = 3;
const MAX_ATTACHMENT_SIZE = 8 * 1024 * 1024;
const MAX_TOTAL_ATTACHMENT_SIZE = 16 * 1024 * 1024;

const ALLOWED_EXTENSIONS = new Set([
  "jpg",
  "jpeg",
  "png",
  "webp",
  "gif",
  "pdf",
  "doc",
  "docx",
  "xls",
  "xlsx",
  "txt",
]);

const ALLOWED_MIME_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "text/plain",
]);

const CLIENT_ERROR_MESSAGES = [
  "Invalid form submission.",
  "Please complete all required fields.",
  "Please tell us what you are contacting about.",
  "Please enter a valid email address.",
  "Your message is too long. Please shorten it and try again.",
  "Please attach no more than 3 files.",
  "Each attachment must be 8MB or smaller.",
  "Attachments must be 16MB or smaller in total.",
  "Only image, PDF, Word, Excel, and text files can be attached.",
];

function sanitizeFilename(filename: string) {
  return filename.replace(/[^\w\s().-]/g, "_").slice(0, 120) || "attachment";
}

function getExtension(filename: string) {
  return filename.split(".").pop()?.toLowerCase() ?? "";
}

function isAllowedAttachment(file: File) {
  return (
    file.type.startsWith("image/") ||
    ALLOWED_MIME_TYPES.has(file.type) ||
    ALLOWED_EXTENSIONS.has(getExtension(file.name))
  );
}

async function parseAttachments(formData: FormData): Promise<ResendAttachment[]> {
  const files = formData
    .getAll("attachments")
    .filter((value): value is File => value instanceof File && value.size > 0);

  if (files.length > MAX_ATTACHMENTS) {
    throw new Error("Please attach no more than 3 files.");
  }

  const totalSize = files.reduce((sum, file) => sum + file.size, 0);

  if (totalSize > MAX_TOTAL_ATTACHMENT_SIZE) {
    throw new Error("Attachments must be 16MB or smaller in total.");
  }

  return Promise.all(
    files.map(async (file) => {
      if (file.size > MAX_ATTACHMENT_SIZE) {
        throw new Error("Each attachment must be 8MB or smaller.");
      }

      if (!isAllowedAttachment(file)) {
        throw new Error("Only image, PDF, Word, Excel, and text files can be attached.");
      }

      return {
        filename: sanitizeFilename(file.name),
        content: Buffer.from(await file.arrayBuffer()).toString("base64"),
      };
    })
  );
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") ?? "";
    const isMultipart = contentType.includes("multipart/form-data");
    const formData = isMultipart ? await request.formData() : null;
    const message = parseContactMessage(
      formData ? Object.fromEntries(formData.entries()) : await request.json()
    );
    const attachments = formData ? await parseAttachments(formData) : [];
    const recipient = process.env.CONTACT_RECIPIENT_EMAIL;

    if (!recipient) {
      throw new Error("Contact email recipient is not configured.");
    }

    const email = createContactEmail(
      message,
      attachments.map((attachment) => attachment.filename)
    );
    await sendResendEmail({ to: [recipient], ...email, attachments });

    return Response.json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to send your message.";
    const isClientError = CLIENT_ERROR_MESSAGES.includes(message);

    return Response.json(
      { error: isClientError ? message : "We could not send your message right now. Please try again or contact us by phone." },
      { status: isClientError ? 400 : 500 }
    );
  }
}
