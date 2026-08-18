/**
 * BIWS Chatbot Knowledge Base
 * Static Q&A data for quick keyword-based assistance.
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
  /** Keywords / phrases to match against */
  triggers: string[];
  response: BotMessage;
};

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
  { label: "Receipt", value: "donation receipt confirmation" },
  { label: "Back to Menu", value: "main menu" },
];

const programReplies: QuickReply[] = [
  { label: "Orphan Care", value: "orphan care and daily essentials" },
  { label: "Education", value: "girls education program" },
  { label: "Skill Training", value: "skill training programs" },
  { label: "Health", value: "health and wellbeing" },
  { label: "Back to Menu", value: "main menu" },
];

export const knowledgeBase: KnowledgeEntry[] = [
  {
    triggers: [
      "hi",
      "hello",
      "salam",
      "assalam",
      "assalam o alaikum",
      "aoa",
      "hey",
      "helo",
      "start",
      "help",
    ],
    response: {
      text: "Assalam o Alaikum! Welcome to **BIWS - Begum Inayat Welfare Society**.\n\nI can help you learn about our work, programs, donations, admission, visits, and contact details. What would you like to know?",
      quickReplies: mainMenuReplies,
    },
  },
  {
    triggers: [
      "main menu",
      "menu",
      "options",
      "what can you do",
      "help me",
      "madad",
      "guide me",
      "kya kar sakte ho",
    ],
    response: {
      text: "Here are the main things I can help you with:",
      quickReplies: mainMenuReplies,
    },
  },
  {
    triggers: [
      "about biws",
      "about begum inayat",
      "what is biws",
      "who are you",
      "organization",
      "tell me about",
      "biws kya hai",
      "biws ke bare mein",
      "begum inayat kya hai",
      "orphanage",
      "girls campus",
      "mission",
      "vision",
      "ngo",
    ],
    response: {
      text: "**Begum Inayat Welfare Society of Pakistan (BIWS)** is a registered NGO founded in **2012** by **Dr. Amna Amber**.\n\nBIWS provides shelter, food, education, health support, emotional care, and life skills to **90 orphan girls** at its Girls Campus in **Model Town, Lahore**.",
      quickReplies: mainMenuReplies,
      action: { label: "Learn More", href: "/about" },
    },
  },
  {
    triggers: [
      "founder",
      "dr amna",
      "amna amber",
      "who founded",
      "who started",
      "kis ne start",
      "kis ne banaya",
      "founder kon",
      "doctor amna",
    ],
    response: {
      text: "BIWS was founded by **Dr. Amna Amber** in **2012**. Her vision is to provide orphan girls with safety, education, care, and practical skills for a dignified future.",
      quickReplies: mainMenuReplies,
      action: { label: "Founder's Message", href: "/about#founder" },
    },
  },
  {
    triggers: [
      "program",
      "programs",
      "what programs",
      "services",
      "what services",
      "what do you offer",
      "activities",
      "kya programs hain",
      "programs kya hain",
      "program batao",
      "services kya hain",
      "care programs",
      "courses",
      "classes",
    ],
    response: {
      text: "BIWS runs **6 core programs** for the girls:\n\n- **Orphan Care:** shelter, meals, clothing, and daily essentials\n- **Girls Education:** schooling, tutoring, books, and uniforms\n- **Skill Training:** computer, IT, stitching, beautician, and life skills\n- **Health & Wellbeing:** checkups, nutrition, and emotional support\n- **Safe Environment:** secure and caring residential campus\n- **Community Events:** celebrations, activities, and confidence-building",
      quickReplies: programReplies,
      action: { label: "View All Programs", href: "/programs" },
    },
  },
  {
    triggers: [
      "orphan care",
      "daily care",
      "shelter",
      "food",
      "meals",
      "clothing",
      "essentials",
      "residential care",
      "safe home",
      "khana",
      "rehna",
      "kapray",
      "bachiyon ki care",
    ],
    response: {
      text: "**Orphan Care & Daily Essentials**\n\nBIWS provides a safe home-like campus for 90 orphan girls in Lahore. Daily support includes meals, clothing, hygiene essentials, emotional care, education routines, and a secure environment where every girl is treated with dignity.",
      quickReplies: programReplies,
      action: { label: "Support Care", href: "/donate" },
    },
  },
  {
    triggers: [
      "education",
      "school",
      "study",
      "learning",
      "girls education program",
      "academic",
      "parhai",
      "taleem",
      "school fees",
      "books",
      "uniform",
      "tuition",
      "tutoring",
      "educate a child",
    ],
    response: {
      text: "**Girls Education Program**\n\nBIWS supports each girl's education through schooling, tutoring, books, uniforms, and academic guidance. Donations for education help girls continue learning with confidence and dignity.",
      quickReplies: programReplies,
      action: { label: "Support Education", href: "/donate?type=education" },
    },
  },
  {
    triggers: [
      "skill",
      "skills",
      "training",
      "computer",
      "beautician",
      "stitching",
      "vocational",
      "it training",
      "digital",
      "computer course",
      "it course",
      "silai",
      "beauty",
      "hunarmand",
      "future skills",
    ],
    response: {
      text: "**Skill Training Programs**\n\nBIWS offers practical training in computer skills, IT basics, stitching, beautician work, and life skills. These programs help older girls build confidence and prepare for self-reliance.",
      quickReplies: programReplies,
      action: { label: "View Programs", href: "/programs" },
    },
  },
  {
    triggers: [
      "health",
      "wellbeing",
      "medical",
      "checkup",
      "nutrition",
      "health and wellbeing",
      "doctor",
      "medicine",
      "mental health",
      "emotional support",
      "wellness",
    ],
    response: {
      text: "**Health & Wellbeing**\n\nThe girls receive medical checkups, nutrition support, emotional care, and a clean living environment. BIWS focuses on both physical health and emotional comfort.",
      quickReplies: programReplies,
      action: { label: "Support Health", href: "/donate" },
    },
  },
  {
    triggers: [
      "donate",
      "donation",
      "donations",
      "how to donate",
      "contribute",
      "give",
      "support",
      "fund",
      "help financially",
      "donate kaise",
      "donation kaise",
      "donation karni",
      "donation krni",
      "donation karna",
      "donation deni",
      "madad karni",
      "madad karna",
      "paise donate",
      "paisa donate",
      "paise dena",
      "online donation",
      "cash donation",
      "help girls",
      "support girls",
    ],
    response: {
      text: "**How to Donate**\n\nYou can support BIWS through Zakat, Sadaqah, child sponsorship, education support, food support, or general donation.\n\nYou can donate through bank transfer and then share your payment confirmation with the BIWS team for acknowledgement.",
      quickReplies: donateReplies,
      action: { label: "Donate Now", href: "/donate" },
    },
  },
  {
    triggers: [
      "bank",
      "account",
      "bank details",
      "transfer",
      "bank account details",
      "iban",
      "faysal",
      "account number",
      "bank info",
      "payment",
      "pay",
      "send money",
      "transaction",
      "payment details",
    ],
    response: {
      text: "**Bank Transfer Details**\n\n**Bank:** Faysal Bank Limited\n**Account Name:** Begum Inayat Welfare Society of Pakistan\n**Account No:** 0130006000000316\n**IBAN:** PK94FAYS0130006D00000316\n**Branch:** Nw Garden Town, Lahore (0130)\n\nAfter transfer, please share your payment screenshot with the BIWS team.",
      quickReplies: donateReplies,
    },
  },
  {
    triggers: [
      "receipt",
      "donation receipt",
      "confirmation",
      "confirm donation",
      "payment screenshot",
      "transaction screenshot",
      "donation confirmation",
      "screenshot bhejna",
      "receipt chahiye",
    ],
    response: {
      text: "**Donation Confirmation**\n\nAfter sending your donation, please share your transaction screenshot or payment details with the BIWS team. We will verify it and guide you about the official receipt.\n\nYou can call or message **0304 3332497** or email **beguminayatorphanage@gmail.com**.",
      quickReplies: donateReplies,
      action: { label: "Contact Donation Team", href: "/contact" },
    },
  },
  {
    triggers: [
      "zakat",
      "zakaat",
      "zakat eligible",
      "can i give zakat",
      "sadqa",
      "sadaqah",
      "sadaqa",
      "fitrana",
      "zakat deni",
      "zakat donate",
    ],
    response: {
      text: "**Zakat & Sadaqah**\n\nYes, BIWS accepts Zakat and Sadaqah. Your support helps provide food, education, healthcare, clothing, and daily care for orphan girls in need.\n\nFor transfer details, choose Bank Details or visit the Donate page.",
      quickReplies: donateReplies,
      action: { label: "Donate Zakat", href: "/donate?type=zakat" },
    },
  },
  {
    triggers: [
      "sponsor",
      "sponsorship",
      "child sponsorship",
      "sponsor a child",
      "monthly sponsor",
      "monthly sponsorship",
      "sponsor child",
      "sponsor bachi",
      "bachi sponsor",
      "monthly care",
      "monthly donation",
    ],
    response: {
      text: "**Sponsor a Child**\n\nMonthly sponsorship helps provide steady care for one girl's journey, including meals, education, healthcare, clothing, and daily essentials.\n\nBIWS can guide you with sponsorship details and donation confirmation.",
      quickReplies: donateReplies,
      action: { label: "Sponsor Now", href: "/donate?type=sponsorship" },
    },
  },
  {
    triggers: [
      "admission",
      "apply",
      "enroll",
      "how to apply",
      "join",
      "how to apply for admission",
      "admission process",
      "admission kaise",
      "admission ka tarika",
      "admission lena",
      "admit karwana",
      "bachi admit",
      "bachi ki admission",
      "girl admit",
      "orphan admission",
      "apply admission",
      "documents for admission",
      "admission form",
    ],
    response: {
      text: "**Girls Admission**\n\nBIWS reviews admission requests for orphan girls who need care, shelter, and education.\n\nTo apply:\n1. Open the contact page\n2. Select **Admission Request** as the reason\n3. Share the child's basic details\n4. The BIWS team will review and respond with the next steps",
      quickReplies: mainMenuReplies,
      action: { label: "Apply for Admission", href: "/contact" },
    },
  },
  {
    triggers: [
      "volunteer",
      "volunteering",
      "intern",
      "internship",
      "help out",
      "become a volunteer",
      "volunteer kaise",
      "razakar",
      "teach",
      "teaching",
      "mentor",
    ],
    response: {
      text: "**Volunteer with BIWS**\n\nVolunteers can help with tutoring, mentoring, skill workshops, events, and program support. Please contact the BIWS team so they can guide you according to your availability and skills.",
      quickReplies: mainMenuReplies,
      action: { label: "Get Involved", href: "/get-involved#become-a-volunteer" },
    },
  },
  {
    triggers: [
      "visit",
      "come visit",
      "plan a visit",
      "see campus",
      "tour",
      "campus visit",
      "visit kaise",
      "can i visit",
      "aana hai",
    ],
    response: {
      text: "**Plan a Visit**\n\nBIWS welcomes donors, volunteers, and community members for planned visits. Please contact the team first so your visit can be scheduled properly.",
      quickReplies: mainMenuReplies,
      action: { label: "Plan a Visit", href: "/get-involved#visit" },
    },
  },
  {
    triggers: [
      "whatsapp",
      "whats app",
      "chat on whatsapp",
      "message on whatsapp",
      "whatsapp number",
      "whatsapp pe baat",
    ],
    response: {
      text: "**WhatsApp Support**\n\nYou can contact BIWS on WhatsApp for donation confirmations, admission questions, visits, or general inquiries.",
      quickReplies: mainMenuReplies,
      action: {
        label: "Open WhatsApp",
        href: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "923043332497"}`,
      },
    },
  },
  {
    triggers: [
      "contact",
      "reach out",
      "get in touch",
      "phone",
      "email",
      "address",
      "contact information",
      "location",
      "where are you",
      "number",
      "mobile",
      "call",
      "phone number",
      "contact number",
      "kahan",
      "kaha hai",
      "address kya hai",
      "contact kaise",
      "rabta",
      "raabta",
    ],
    response: {
      text: "**Contact BIWS**\n\n**Address:** 115 H Model Town, Lahore\n**Phone:** 0304 3332497\n**Email:** beguminayatorphanage@gmail.com\n\nYou can also use the contact form on the website.",
      quickReplies: mainMenuReplies,
      action: { label: "Contact Page", href: "/contact" },
    },
  },
  {
    triggers: ["gallery", "photos", "pictures", "images", "events", "tasveer", "pictures dikhao"],
    response: {
      text: "**Gallery**\n\nYou can view BIWS campus moments, events, skill sessions, celebrations, and activities in the gallery.",
      quickReplies: mainMenuReplies,
      action: { label: "View Gallery", href: "/gallery" },
    },
  },
  {
    triggers: [
      "how many girls",
      "how many children",
      "number of girls",
      "how many orphans",
      "capacity",
      "kitni girls",
      "kitni bachiyan",
      "90 girls",
    ],
    response: {
      text: "BIWS currently cares for **90 orphan girls** at its Girls Campus in Model Town, Lahore. Each girl receives shelter, meals, education, health support, and skill development.",
      quickReplies: mainMenuReplies,
    },
  },
  {
    triggers: [
      "since when",
      "established",
      "founded",
      "how old",
      "when did you start",
      "2012",
      "kab start",
      "kab se",
    ],
    response: {
      text: "BIWS was established in **2012** by **Dr. Amna Amber** and has been serving orphan girls in Lahore for over **14 years**.",
      quickReplies: mainMenuReplies,
    },
  },
  {
    triggers: [
      "trust",
      "transparent",
      "transparency",
      "legitimate",
      "registered",
      "authentic",
      "verified",
      "receipt milegi",
      "donation safe",
    ],
    response: {
      text: "**Trust & Transparency**\n\nBIWS is a registered NGO serving since 2012. The team provides donation acknowledgement, can guide donors with receipts, and welcomes responsible giving with clear communication.",
      quickReplies: donateReplies,
      action: { label: "About Us", href: "/about" },
    },
  },
  {
    triggers: [
      "partner",
      "partnership",
      "csr",
      "corporate",
      "institution",
      "institutional support",
      "community advocate",
    ],
    response: {
      text: "**Become a Partner**\n\nCorporate sponsors, institutions, NGOs, universities, trusts, and community advocates can partner with BIWS to support education, care, skills, events, and long-term programs for orphan girls.",
      quickReplies: mainMenuReplies,
      action: { label: "Partner With BIWS", href: "/get-involved" },
    },
  },
  {
    triggers: ["__fallback__"],
    response: {
      text: "I did not fully understand that. You can ask about BIWS, programs, donation, Zakat, sponsorship, admission, visits, or contact details.",
      quickReplies: mainMenuReplies,
    },
  },
];

/** Fallback response when no match is found */
export const fallbackResponse: BotMessage = knowledgeBase.find(
  (entry) => entry.triggers[0] === "__fallback__"
)!.response;
