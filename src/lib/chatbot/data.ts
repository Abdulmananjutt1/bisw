/**
 * BIWS Chatbot Knowledge Base
 * Static Q&A data — replace with dynamic/AI source when ready.
 */

export type QuickReply = {
  label: string;
  /** The message text that gets sent when user taps this quick reply */
  value: string;
};

export type BotMessage = {
  text: string;
  /** Optional follow-up quick-reply chips */
  quickReplies?: QuickReply[];
  /** Optional action link rendered as a button inside the message */
  action?: { label: string; href: string };
};

export type KnowledgeEntry = {
  /** Keywords / phrases to match against (lowercase) */
  triggers: string[];
  response: BotMessage;
};

// ─── Quick reply sets ──────────────────────────────────────────────────────────

const mainMenuReplies: QuickReply[] = [
  { label: "About BIWS", value: "tell me about biws" },
  { label: "Programs", value: "what programs do you have" },
  { label: "How to Donate", value: "how can i donate" },
  { label: "Contact", value: "contact information" },
  { label: "Admission", value: "how to apply for admission" },
];

const donateReplies: QuickReply[] = [
  { label: "Bank Details", value: "bank account details" },
  { label: "Zakat", value: "can i give zakat" },
  { label: "Sponsor a Child", value: "sponsor a child" },
  { label: "Back to Menu", value: "main menu" },
];

const programReplies: QuickReply[] = [
  { label: "Education", value: "girls education program" },
  { label: "Skill Training", value: "skill training programs" },
  { label: "Health", value: "health and wellbeing" },
  { label: "Back to Menu", value: "main menu" },
];

// ─── Knowledge base ────────────────────────────────────────────────────────────

export const knowledgeBase: KnowledgeEntry[] = [
  // ── Greetings ────────────────────────────────────────────────────────────────
  {
    triggers: ["hi", "hello", "salam", "assalam", "hey", "helo", "start", "help"],
    response: {
      text: "Assalam o Alaikum! 👋 Welcome to **BIWS — Begum Inayat Welfare Society**.\n\nI'm here to help you learn about our work, programs, and how you can support 90 orphan girls in Lahore. What would you like to know?",
      quickReplies: mainMenuReplies,
    },
  },

  // ── Main menu ────────────────────────────────────────────────────────────────
  {
    triggers: ["main menu", "menu", "options", "what can you do", "help me"],
    response: {
      text: "Here's what I can help you with today:",
      quickReplies: mainMenuReplies,
    },
  },

  // ── About BIWS ───────────────────────────────────────────────────────────────
  {
    triggers: ["about biws", "about begum inayat", "what is biws", "who are you", "organization", "tell me about"],
    response: {
      text: "**Begum Inayat Welfare Society of Pakistan (BIWS)** is a registered NGO founded in **2013** by **Dr. Amna Amber**.\n\nWe provide shelter, food, education, health care, and skill development to **90 orphan girls** at our campus in **Model Town, Lahore**.\n\nOur mission is to empower every girl with the tools she needs for a dignified, self-reliant future.",
      quickReplies: mainMenuReplies,
      action: { label: "Learn More", href: "/about" },
    },
  },

  // ── Founder ──────────────────────────────────────────────────────────────────
  {
    triggers: ["founder", "dr amna", "amna amber", "who founded", "who started"],
    response: {
      text: "BIWS was founded by **Dr. Amna Amber** — a visionary leader dedicated to uplifting orphan girls in Pakistan.\n\nUnder her leadership since 2013, BIWS has grown into a full-care campus serving 90 girls with education, health, and skill development.",
      quickReplies: mainMenuReplies,
      action: { label: "Founder's Message", href: "/about#founder" },
    },
  },

  // ── Programs overview ────────────────────────────────────────────────────────
  {
    triggers: ["programs", "what programs", "services", "what do you offer", "activities"],
    response: {
      text: "We run **6 core programs** for our girls:\n\n• 🏠 **Orphan Care** — shelter, meals & daily essentials\n• 📚 **Girls Education** — schooling & academic support\n• 💻 **Skill Training** — computer, beautician, stitching, IT\n• ❤️ **Health & Wellbeing** — checkups & nutrition\n• 🛡️ **Safe Environment** — secure, loving campus\n• 🎉 **Community Events** — celebrations & activities",
      quickReplies: programReplies,
      action: { label: "View All Programs", href: "/programs" },
    },
  },

  // ── Education ────────────────────────────────────────────────────────────────
  {
    triggers: ["education", "school", "study", "learning", "girls education program", "academic"],
    response: {
      text: "📚 **Girls Education Program**\n\nEvery girl at BIWS receives quality schooling, daily tutoring sessions, and full academic support — ensuring a strong educational foundation regardless of background.\n\nWe believe education is the most powerful tool for change.",
      quickReplies: programReplies,
      action: { label: "All Programs", href: "/programs" },
    },
  },

  // ── Skill training ───────────────────────────────────────────────────────────
  {
    triggers: ["skill", "training", "computer", "beautician", "stitching", "vocational", "it training", "digital"],
    response: {
      text: "💻 **Skill Training Programs**\n\nWe offer hands-on vocational training in:\n\n• Computer & Digital Skills\n• Web & IT Basics\n• Beautician Training\n• Stitching & Tailoring\n\nThese programs prepare older girls for financial independence and careers.",
      quickReplies: programReplies,
      action: { label: "Programs", href: "/programs" },
    },
  },

  // ── Health ───────────────────────────────────────────────────────────────────
  {
    triggers: ["health", "wellbeing", "medical", "checkup", "nutrition", "health and wellbeing"],
    response: {
      text: "❤️ **Health & Wellbeing**\n\nAll girls receive:\n\n• Regular medical checkups\n• Nutritional meals & supplements\n• Mental wellness support\n• Safe, hygienic living conditions\n\nThe physical and emotional health of every child is our priority.",
      quickReplies: programReplies,
    },
  },

  // ── How to donate ────────────────────────────────────────────────────────────
  {
    triggers: ["donate", "donation", "how to donate", "contribute", "give", "support", "fund", "help financially"],
    response: {
      text: "💚 **Donate to BIWS**\n\nYou can support our girls through:\n\n• **Zakat** — your Zakat reaches verified orphans\n• **Sadaqah** — general voluntary donation\n• **Child Sponsorship** — sponsor one girl monthly\n• **Education Support** — fund books, uniforms & supplies\n\nAll donations come with receipts and full transparency.",
      quickReplies: donateReplies,
      action: { label: "Donate Now", href: "/donate" },
    },
  },

  // ── Bank details ─────────────────────────────────────────────────────────────
  {
    triggers: ["bank", "account", "bank details", "transfer", "bank account details", "iban", "faysal"],
    response: {
      text: "🏦 **Bank Transfer Details**\n\n**Bank:** Faysal Bank Ltd\n**Account Name:** Begum Inayat Welfare Society of Pakistan\n**Account No:** 0130006000000316\n**IBAN:** PK94FAYS0130006000000316\n**Branch:** Nw Garden Town, Lahore (0130)\n\nPlease share your payment screenshot via WhatsApp or email after transfer.",
      quickReplies: donateReplies,
    },
  },

  // ── Zakat ────────────────────────────────────────────────────────────────────
  {
    triggers: ["zakat", "zakat eligible", "can i give zakat"],
    response: {
      text: "✅ **Yes, your Zakat is accepted at BIWS.**\n\nAll 90 girls in our care are verified orphans eligible for Zakat. Your Zakat directly funds:\n\n• Daily meals & essentials\n• Education & school supplies\n• Healthcare needs\n\nYou will receive an official receipt for your records.",
      quickReplies: donateReplies,
      action: { label: "Donate Zakat", href: "/donate" },
    },
  },

  // ── Child sponsorship ────────────────────────────────────────────────────────
  {
    triggers: ["sponsor", "child sponsorship", "sponsor a child", "monthly sponsor"],
    response: {
      text: "🤝 **Sponsor a Child**\n\nBecome a monthly sponsor and directly change a girl's life. Your sponsorship covers:\n\n• Monthly food & essentials\n• School fees & supplies\n• Healthcare\n\nYou'll receive updates on your sponsored child's progress.",
      quickReplies: donateReplies,
      action: { label: "Sponsor Now", href: "/donate" },
    },
  },

  // ── Admission ────────────────────────────────────────────────────────────────
  {
    triggers: ["admission", "apply", "enroll", "how to apply", "join", "how to apply for admission"],
    response: {
      text: "📋 **Girls Admission**\n\nWe accept admission requests for orphan girls in need of care, shelter, and education.\n\nTo apply:\n1. Fill out the contact form on our website\n2. Select **\"Admission Request\"** as your reason\n3. Our team will review and respond within a few days",
      quickReplies: mainMenuReplies,
      action: { label: "Apply for Admission", href: "/contact" },
    },
  },

  // ── Volunteer ────────────────────────────────────────────────────────────────
  {
    triggers: ["volunteer", "volunteering", "intern", "help out", "become a volunteer"],
    response: {
      text: "🙌 **Volunteer with BIWS**\n\nWe welcome volunteers who want to make a difference! You can help with:\n\n• Teaching & tutoring\n• Skill workshops\n• Event organization\n• Administrative support\n\nReach out through our contact page and our team will connect with you.",
      quickReplies: mainMenuReplies,
      action: { label: "Get Involved", href: "/contact" },
    },
  },

  // ── Visit ────────────────────────────────────────────────────────────────────
  {
    triggers: ["visit", "come visit", "plan a visit", "see campus", "tour"],
    response: {
      text: "🏫 **Plan a Visit**\n\nWe welcome donors, volunteers, and community members to visit our campus in **Model Town, Lahore**.\n\nPlease contact us in advance to schedule your visit so we can arrange a proper welcome.",
      quickReplies: mainMenuReplies,
      action: { label: "Contact Us", href: "/contact" },
    },
  },

  // ── Contact ──────────────────────────────────────────────────────────────────
  {
    triggers: ["contact", "reach out", "get in touch", "phone", "email", "address", "contact information", "location", "where are you"],
    response: {
      text: "📞 **Contact BIWS**\n\n📍 **Address:** 115 H Block, Model Town, Lahore\n📱 **Phone:** 0300 4492946\n📱 **Phone 2:** 0306 8455162\n📧 **Email:** info@beguminayat.com\n\nYou can also reach us via the contact form on our website.",
      quickReplies: mainMenuReplies,
      action: { label: "Contact Page", href: "/contact" },
    },
  },

  // ── WhatsApp ─────────────────────────────────────────────────────────────────
  {
    triggers: ["whatsapp", "whats app", "chat on whatsapp", "message on whatsapp"],
    response: {
      text: "💬 You can reach us directly on **WhatsApp** for quick queries, donation confirmations, or admission inquiries.",
      quickReplies: mainMenuReplies,
      action: {
        label: "Open WhatsApp",
        href: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "923098666299"}`,
      },
    },
  },

  // ── Gallery ──────────────────────────────────────────────────────────────────
  {
    triggers: ["gallery", "photos", "pictures", "images", "events"],
    response: {
      text: "📸 **Gallery**\n\nExplore photos from our events, skill sessions, campus activities, Independence Day celebrations, and more.",
      quickReplies: mainMenuReplies,
      action: { label: "View Gallery", href: "/gallery" },
    },
  },

  // ── How many girls ───────────────────────────────────────────────────────────
  {
    triggers: ["how many girls", "how many children", "number of girls", "how many orphans", "capacity"],
    response: {
      text: "👧 BIWS currently cares for **90 orphan girls** at our campus in Model Town, Lahore.\n\nEach girl receives full care — shelter, meals, education, health support, and skill development.",
      quickReplies: mainMenuReplies,
    },
  },

  // ── Since when / established ─────────────────────────────────────────────────
  {
    triggers: ["since when", "established", "founded", "how old", "when did you start", "2013"],
    response: {
      text: "🗓️ BIWS was established in **2013** by Dr. Amna Amber and has been serving orphan girls in Lahore for over **13 years**.",
      quickReplies: mainMenuReplies,
    },
  },

  // ── Transparency / trust ─────────────────────────────────────────────────────
  {
    triggers: ["trust", "transparent", "legitimate", "registered", "authentic", "verified"],
    response: {
      text: "✅ **BIWS is a registered NGO** operating since 2013 with full transparency.\n\n• All donations come with **official receipts**\n• Regular updates shared with donors\n• Open to public visits at our campus\n• Thousands of donors trust us every year",
      quickReplies: donateReplies,
      action: { label: "About Us", href: "/about" },
    },
  },

  // ── Fallback ─────────────────────────────────────────────────────────────────
  {
    triggers: ["__fallback__"],
    response: {
      text: "I'm sorry, I didn't quite understand that. 😊 Here are some things I can help you with:",
      quickReplies: mainMenuReplies,
    },
  },
];

/** Fallback response when no match is found */
export const fallbackResponse: BotMessage = knowledgeBase.find(
  (e) => e.triggers[0] === "__fallback__"
)!.response;
