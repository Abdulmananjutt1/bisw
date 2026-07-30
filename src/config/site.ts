export { galleryItems } from "./gallery";

export const siteConfig = {
  name: "BIWS",
  fullName: "Begum Inayat Welfare Society of Pakistan",
  shortName: "Begum Inayat Welfare Society",
  tagline: "Girls Orphanage • Education • Skill Development",
  description:
    "Empowering 90 orphan girls with shelter, food, education, emotional support, and life skills since 2013. BIWS Girls Campus, Model Town, Lahore.",
  url: "https://www.beguminayat.com",
  email: "info@beguminayat.com",
  phone: "0300 4492946",
  phone2: "0306 8455162",
  address: "115 H Block, Model Town, Lahore, Pakistan",
  addressShort: "Model Town, Lahore",
  established: "2013",
  founderName: "Dr. Amna Amber",
  founderTitle: "Founder — Begum Inayat Welfare Society of Pakistan (BIWS) Orphanage",
  vicePresidentName: "BIWS Leadership",
  vicePresidentTitle: "Vice President — Begum Inayat Welfare Society of Pakistan (BIWS)",
  bank: {
    name: "Faysal Bank Ltd",
    accountName: "Begum Inayat Welfare Society of Pakistan",
    branch: "Nw Garden Town, Lahore (0130)",
    accountNo: "0130006000000316",
    iban: "PK94FAYS0130006000000316",
  },
  social: {
    facebook: "https://facebook.com/biws",
    twitter: "https://twitter.com/biws",
    instagram: "https://instagram.com/biws",
    youtube: "https://youtube.com/biws",
    whatsapp: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "923098666299"}`,
  },
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Programs", href: "/programs" },
  { label: "Gallery", href: "/gallery" },
  { label: "Donate", href: "/donate" },
  { label: "Contact", href: "/contact" },
] as const;

export const stats = [
  { value: "90", suffix: "", label: "Girls in Our Care" },
  { value: "5", suffix: "", label: "Skill Programs" },
  { value: "13", suffix: "+", label: "Years of Service" },
  { value: "100", suffix: "+", label: "Visitors Yearly" },
] as const;

export const programs = [
  {
    id: "orphan-care",
    title: "Orphan Care",
    description:
      "Comprehensive shelter, daily meals, clothing, and emotional support for 90 orphan girls in a safe, nurturing home environment.",
    icon: "Home",
    color: "teal",
  },
  {
    id: "education",
    title: "Girls Education",
    description:
      "Quality schooling, tutoring sessions, and full academic support ensuring every girl receives a strong educational foundation.",
    icon: "GraduationCap",
    color: "blue",
  },
  {
    id: "skill-training",
    title: "Skill Training",
    description:
      "Computer, digital, beautician, stitching, and web/IT vocational programs preparing girls for self-reliance and career readiness.",
    icon: "Laptop",
    color: "purple",
  },
  {
    id: "health",
    title: "Health & Wellbeing",
    description:
      "Regular health checkups, nutritional support, and mental wellness programs ensuring every girl thrives physically and emotionally.",
    icon: "HeartPulse",
    color: "rose",
  },
  {
    id: "safe-environment",
    title: "Safe Environment",
    description:
      "A secure, loving campus providing every girl with the safety, dignity, and belonging she deserves as her home.",
    icon: "Shield",
    color: "green",
  },
  {
    id: "community",
    title: "Community Events",
    description:
      "Annual celebrations, Independence Day events, prize distributions, and community gatherings fostering confidence and joy.",
    icon: "Users",
    color: "amber",
  },
] as const;

export const causes = [
  {
    id: "orphan-care",
    title: "Orphan Care",
    subtitle: "Monthly Care & Essentials",
    description: "Food, clothing, and daily care essentials for children.",
    goal: 500000,
    raised: 320000,
    icon: "Home",
  },
  {
    id: "education",
    title: "Education",
    subtitle: "School Support & Supplies",
    description: "Books, uniforms, and learning support for better outcomes.",
    goal: 300000,
    raised: 144000,
    icon: "GraduationCap",
  },
  {
    id: "health",
    title: "Health",
    subtitle: "Health & Wellbeing",
    description: "Nutrition, checkups, and wellbeing support for children.",
    goal: 250000,
    raised: 180000,
    icon: "HeartPulse",
  },
] as const;

export const donationCategories = [
  { id: "zakat", label: "Zakat" },
  { id: "education", label: "Education Support" },
  { id: "sponsorship", label: "Child Sponsorship" },
  { id: "general", label: "General Donation" },
] as const;

export const testimonials = [
  {
    id: 1,
    quote: [
      { text: "BIWS provides a safe home where girls receive ", emphasis: false },
      { text: "shelter, meals, care, and dignity", emphasis: true },
      { text: " every day.", emphasis: false },
    ],
    name: "Community Visitor",
    role: "Model Town, Lahore",
    initials: "CV",
  },
  {
    id: 2,
    quote: [
      { text: "Their donation process feels transparent. Support for food, education, and care is handled with ", emphasis: false },
      { text: "clear accountability.", emphasis: true },
    ],
    name: "Monthly Donor",
    role: "Zakat & General Support",
    initials: "MD",
  },
  {
    id: 3,
    quote: [
      { text: "The girls are encouraged through schooling, tutoring, and confidence-building activities - a ", emphasis: false },
      { text: "thoughtful focus on education.", emphasis: true },
    ],
    name: "Education Volunteer",
    role: "Girls Education Program",
    initials: "EV",
  },
  {
    id: 4,
    quote: [
      { text: "The campus feels organized, respectful, and loving. Every visit shows discipline, warmth, and ", emphasis: false },
      { text: "real care for each child.", emphasis: true },
    ],
    name: "Family Visitor",
    role: "Campus Visit",
    initials: "FV",
  },
  {
    id: 5,
    quote: [
      { text: "Computer, stitching, beautician, and IT training give the girls ", emphasis: false },
      { text: "practical confidence", emphasis: true },
      { text: " for a self-reliant future.", emphasis: false },
    ],
    name: "Program Supporter",
    role: "Skill Development",
    initials: "PS",
  },
  {
    id: 6,
    quote: [
      { text: "Since 2013, BIWS has continued its work for 90 orphan girls with steady community support and ", emphasis: false },
      { text: "meaningful impact.", emphasis: true },
    ],
    name: "CSR Partner",
    role: "Community Partnership",
    initials: "CP",
  },
] as const;

export const newsItems = [
  {
    id: 1,
    category: "Project Update",
    title: "Solar Energy System Installation",
    description:
      "Work underway to install a solar power system ensuring uninterrupted electricity and reduced costs for the orphanage.",
    status: "Ongoing 2026",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&q=80",
  },
  {
    id: 2,
    category: "Development",
    title: "Digital Computer Lab Setup",
    description:
      "A modern computer lab is being established to teach children digital skills, web basics, and IT education.",
    status: "Ongoing 2026",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=400&q=80",
  },
  {
    id: 3,
    category: "Skill Training",
    title: "Beautician & Stitching Programs",
    description:
      "New vocational training tracks launched — beautician and stitching skills for self-reliance and career readiness.",
    status: "2026",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=80",
  },
] as const;

export const getInvolvedOptions = [
  {
    id: "volunteer",
    title: "Become a Volunteer",
    description: "Support activities, mentoring, and program delivery with our team.",
    icon: "HandHeart",
    href: "/get-involved#become-a-volunteer",
    cta: "Volunteer Now",
  },
  {
    id: "donate",
    title: "Donation Support",
    description: "Donate to fund essentials, education, and wellbeing for children.",
    icon: "HeartHandshake",
    href: "/donate",
    cta: "Donate Now",
  },
  {
    id: "admission",
    title: "Girls Admission",
    description: "Submit an admission request for a girl in need — our team will review and respond.",
    icon: "ClipboardList",
    href: "/get-involved#admission",
    cta: "Request Admission",
  },
] as const;

export const footerQuickLinks = [
  { label: "Home", href: "/" },
  { label: "About BIWS", href: "/about#about" },
  { label: "Our Mission", href: "/about#mission" },
  { label: "Our Vision", href: "/about#vision" },
  { label: "Our Team", href: "/about#team" },
  { label: "Founder Message", href: "/about#founder" },
  { label: "Vice President Message", href: "/about#vice-president" },
  { label: "Programs", href: "/programs" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog & News", href: "#news" },
] as const;

export const footerServices = [
  { label: "Donate", href: "/donate" },
  { label: "Sponsor a Child", href: "/get-involved#sponsor-a-child" },
  { label: "Adopt a Child", href: "/get-involved#adopt-a-child" },
  { label: "Become a Volunteer", href: "/get-involved#become-a-volunteer" },
  { label: "Plan a Visit", href: "/get-involved#visit" },
  { label: "Admission", href: "/get-involved#admission" },
  { label: "Contact / Query", href: "/contact" },
] as const;
