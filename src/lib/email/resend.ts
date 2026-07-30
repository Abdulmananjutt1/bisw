export type ResendAttachment = {
  filename: string;
  content: string;
};

type ResendEmail = {
  to: string[];
  subject: string;
  text: string;
  html: string;
  replyTo?: string;
  attachments?: ResendAttachment[];
};

export async function sendResendEmail(email: ResendEmail) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !from) {
    throw new Error("Email service is not configured.");
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: email.to,
      subject: email.subject,
      text: email.text,
      html: email.html,
      reply_to: email.replyTo,
      attachments: email.attachments?.length ? email.attachments : undefined,
    }),
  });

  if (!response.ok) {
    const responseBody = await response.text();
    console.error("Resend email request failed", { status: response.status, responseBody });
    throw new Error("Unable to send email.");
  }
}
