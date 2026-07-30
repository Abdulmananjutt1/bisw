export type ContactMessage = {
  name: string;
  email: string;
  phone?: string;
  reason: string;
  subject: string;
  message: string;
};

type ContactEmail = {
  subject: string;
  text: string;
  html: string;
  replyTo: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function createContactEmail(
  message: ContactMessage,
  attachmentNames: string[] = []
): ContactEmail {
  const fields = [
    ["Name", message.name],
    ["Email", message.email],
    ["Phone", message.phone || "Not provided"],
    ["Reason", message.reason],
    ["Subject", message.subject],
    ["Attachments", attachmentNames.length ? attachmentNames.join(", ") : "None"],
  ];

  const fieldRows = fields
    .map(([label, value]) => `<tr><td style="padding: 8px 14px; color: #667085; font-size: 13px;">${label}</td><td style="padding: 8px 14px; color: #101828; font-size: 14px; font-weight: 600;">${escapeHtml(value)}</td></tr>`)
    .join("");

  return {
    subject: `[BIWS Contact] ${message.reason}: ${message.subject}`,
    replyTo: message.email,
    text: `${fields.map(([label, value]) => `${label}: ${value}`).join("\n")}\n\nMessage:\n${message.message}`,
    html: `
      <div style="background: #f6f9f7; padding: 32px 16px; font-family: Arial, sans-serif; color: #101828;">
        <div style="max-width: 640px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e6efe9;">
          <div style="padding: 24px 28px; background: #064e3b; color: #ffffff;">
            <p style="margin: 0; font-size: 12px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: #a7f3d0;">BIWS Website</p>
            <h1 style="margin: 8px 0 0; font-size: 24px;">New contact inquiry</h1>
          </div>
          <div style="padding: 24px 14px;">
            <table style="width: 100%; border-collapse: collapse; background: #f9fbfa; border-radius: 10px; overflow: hidden;">${fieldRows}</table>
            <div style="margin: 24px 14px 0;">
              <p style="margin: 0 0 8px; font-size: 12px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: #047857;">Message</p>
              <p style="margin: 0; white-space: pre-wrap; font-size: 15px; line-height: 1.65; color: #344054;">${escapeHtml(message.message)}</p>
            </div>
          </div>
        </div>
      </div>`,
  };
}
