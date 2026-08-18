export { galleryItems } from "./gallery";

export const siteConfig = {
  name: "BIWS",
  fullName: "Begum Inayat Welfare Society of Pakistan",
  shortName: "BIWS Orphanage",
  tagline: "Girls Orphanage • Education • Skill Development",
  description:
    "BIWS Orphanage is Lahore's leading girls orphanage — providing shelter, education, healthcare, and skill training to orphan girls since 2012. Located in Model Town, Lahore, Pakistan.",
  url: "https://www.biwsorphanage.com",
  email: "beguminayatorphanage@gmail.com",
  phone: "0304 3332497",
  address: "115 H Model Town, Lahore, Pakistan",
  addressShort: "115 H Model Town, Lahore",
  established: "2012",
  foundingDate: "1 February 2012",
  founderName: "Dr. Amna Amber",
  founderTitle: "Founder — Begum Inayat Welfare Society of Pakistan (BIWS) Orphanage",
  vicePresidentName: "BIWS Leadership",
  vicePresidentTitle: "Vice President — Begum Inayat Welfare Society of Pakistan (BIWS)",
  category: "Non-Governmental Organization",
  subCategories: ["Non-Profit Organization", "Child Development"],
  subSubCategories: ["Orphanage", "Social Service"],
  bank: {
    name: "Faysal Bank Limited",
    accountName: "Begum Inayat Welfare Society of Pakistan",
    branch: "Nw Garden Town, Lahore (0130)",
    accountNo: "0130006000000316",
    iban: "PK94FAYS0130006D00000316",
  },
  social: {
    facebook: "https://www.facebook.com/biwsorphanage",
    twitter: "https://twitter.com/biwsorphanage",
    instagram: "https://www.instagram.com/biwsophanage",
    youtube: "https://www.youtube.com/@biwsophanage",
    tiktok: "https://www.tiktok.com/@biwsorphanagepk",
    whatsapp: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "923043332497"}`,
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
  { value: "14", suffix: "+", label: "Years of Service" },
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
    quote: "Before the water pump, our children had to walk miles daily for clean, safe water. Thank you to the kind donors who changed our lives forever.",
    name: "Fatima Bibi",
    role: "Rural Punjab (Beneficiary)",
    initials: "FB",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=120&q=80",
  },
  {
    id: 2,
    quote: "I donated a water well in my father's name. Seeing the villagers use it every day gives me peace knowing his legacy lives on through every drop.",
    name: "Adeel Raza",
    role: "Donor from the UK",
    initials: "AR",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80",
  },
  {
    id: 3,
    quote: "The hot meals we receive from the Itaam Program are a blessing. For us, it's not just food. It's the warmth of being remembered.",
    name: "Imran",
    role: "Daily-wage worker, Lahore",
    initials: "IM",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=120&q=80",
  },
  {
    id: 4,
    quote: "The campus feels organized, respectful, and loving. Every visit shows discipline, warmth, and real care for each child.",
    name: "Family Visitor",
    role: "Campus Visit, Lahore",
    initials: "FV",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&q=80",
  },
  {
    id: 5,
    quote: "Computer, stitching, beautician, and IT training give the girls practical confidence for a self-reliant future.",
    name: "Program Supporter",
    role: "Skill Development",
    initials: "PS",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80",
  },
  {
    id: 6,
    quote: "Since 2012, BIWS has continued its work for 90 orphan girls with steady community support and meaningful impact.",
    name: "CSR Partner",
    role: "Community Partnership",
    initials: "CP",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=120&q=80",
  },
  {
    id: 7,
    quote: "Visiting the BIWS campus was truly eye-opening. The girls were full of energy, hope, and a genuine desire to learn and grow.",
    name: "Zainab Malik",
    role: "NGO Volunteer, Karachi",
    initials: "ZM",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=80",
  },
  {
    id: 8,
    quote: "I sponsor a child every month and the regular updates I receive make me feel connected. My contribution truly feels purposeful.",
    name: "Tariq Mahmood",
    role: "Monthly Sponsor, Dubai",
    initials: "TM",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80",
  },
  {
    id: 9,
    quote: "The skill training programs are outstanding. Girls learning IT and beautician skills at this age will have a real head start in life.",
    name: "Sana Qureshi",
    role: "Education Advocate, Lahore",
    initials: "SQ",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=120&q=80",
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
    href: "/news/solar-energy-system",
  },
  {
    id: 2,
    category: "Development",
    title: "Digital Computer Lab Setup",
    description:
      "A modern computer lab is being established to teach children digital skills, web basics, and IT education.",
    status: "Ongoing 2026",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=400&q=80",
    href: "/news/digital-computer-lab",
  },
  {
    id: 3,
    category: "Skill Training",
    title: "Beautician & Stitching Programs",
    description:
      "New vocational training tracks launched — beautician and stitching skills for self-reliance and career readiness.",
    status: "2026",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=80",
    href: "/news/beautician-stitching-programs",
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
