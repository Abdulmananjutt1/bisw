export type GalleryImpact = {
  value: string;
  label: string;
};

export type GalleryItem = {
  id: number;
  slug: string;
  category: string;
  title: string;
  description: string;
  image: string;
  year: string;
  location: string;
  lead: string;
  story: string[];
  highlights: string[];
  impact: GalleryImpact[];
  supportText: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    slug: "prize-distribution-2025",
    category: "Annual Event",
    title: "Prize Distribution 2025",
    description: "Celebrating student achievements with awards, speeches, and smiles.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=85",
    year: "2025",
    location: "BIWS Girls Campus, Lahore",
    lead:
      "A recognition day for academic progress, discipline, participation, and the quiet confidence that grows through steady encouragement.",
    story: [
      "Prize Distribution brings students, teachers, visitors, and supporters together to honor effort across the year. The day is designed to make every achievement feel visible, whether it is academic performance, consistency, leadership, or personal growth.",
      "These celebrations help girls connect hard work with possibility. A certificate, a kind word, and a moment on stage can become a lasting reminder that their future is worth investing in.",
    ],
    highlights: [
      "Awards for academic and personal progress",
      "Teacher appreciation and student encouragement",
      "A joyful campus gathering for the full BIWS community",
    ],
    impact: [
      { value: "90", label: "girls encouraged" },
      { value: "Annual", label: "recognition tradition" },
      { value: "100%", label: "confidence focused" },
    ],
    supportText:
      "Your support helps provide certificates, supplies, event arrangements, and learning resources that make achievement days meaningful.",
  },
  {
    id: 2,
    slug: "computer-lab-session",
    category: "Digital Learning",
    title: "Computer Lab Session",
    description: "Hands-on digital classes helping girls build confidence in technology.",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=1200&q=85",
    year: "2026",
    location: "BIWS Digital Learning Room",
    lead:
      "Practical computer sessions where girls learn by doing, from basic digital confidence to future-ready technology skills.",
    story: [
      "The computer lab gives students a structured place to explore typing, research, digital safety, and practical software skills. Each session is planned to remove fear and build comfort with tools they will use in school and future work.",
      "Digital learning is also a confidence program. When a student can complete a task independently on a screen, she begins to see herself as capable in a world that increasingly expects technology fluency.",
    ],
    highlights: [
      "Foundational computer literacy",
      "Guided practice with supportive mentors",
      "A pathway toward IT and web skill training",
    ],
    impact: [
      { value: "Digital", label: "skills track" },
      { value: "Hands-on", label: "learning style" },
      { value: "Future", label: "readiness goal" },
    ],
    supportText:
      "Donations help maintain devices, improve lab resources, and expand digital learning opportunities for older students.",
  },
  {
    id: 3,
    slug: "beautician-training",
    category: "Skills Program",
    title: "Beautician Training",
    description: "Professional grooming and career-focused training for older students.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=85",
    year: "2026",
    location: "BIWS Skills Studio",
    lead:
      "Vocational grooming sessions that combine technique, professionalism, hygiene, and self-reliance for older girls.",
    story: [
      "Beautician training introduces students to practical, income-oriented skills in a guided and dignified environment. The program covers presentation, care standards, tool handling, hygiene, and client-focused discipline.",
      "For many girls, vocational learning turns abstract hope into a visible path. It shows them that skill, practice, and professionalism can become a route toward independence.",
    ],
    highlights: [
      "Career-focused practical training",
      "Professional hygiene and tool-care habits",
      "Confidence building through creative practice",
    ],
    impact: [
      { value: "Skill", label: "development" },
      { value: "Career", label: "orientation" },
      { value: "Dignity", label: "at the center" },
    ],
    supportText:
      "Support helps provide training materials, tools, kits, and instructor resources for the vocational skills program.",
  },
  {
    id: 4,
    slug: "solar-energy-project",
    category: "Campus Upgrade",
    title: "Solar Energy Project",
    description: "Sustainable energy setup improving learning spaces and daily operations.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=85",
    year: "2026",
    location: "BIWS Campus Facilities",
    lead:
      "A sustainability upgrade that supports reliable electricity, steadier routines, and better learning conditions across the campus.",
    story: [
      "The solar energy project is part of strengthening the daily environment at BIWS. Reliable power supports classrooms, living spaces, digital learning, and operational needs that keep the campus running smoothly.",
      "Infrastructure work may feel less visible than events, but it quietly shapes the quality of every day. A stable campus helps staff focus on care and students focus on learning.",
    ],
    highlights: [
      "Improved support for classrooms and operations",
      "Lower long-term energy pressure",
      "A more reliable environment for daily routines",
    ],
    impact: [
      { value: "Clean", label: "energy support" },
      { value: "Daily", label: "campus benefit" },
      { value: "Long-term", label: "cost relief" },
    ],
    supportText:
      "Contributions help BIWS invest in sustainable infrastructure that improves the campus for every child in care.",
  },
  {
    id: 5,
    slug: "independence-day-2025",
    category: "Celebration",
    title: "Independence Day 2025",
    description: "Patriotic performances, activities, and campus decorations by students.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=85",
    year: "2025",
    location: "BIWS Girls Campus, Lahore",
    lead:
      "A day of color, performances, national pride, and student participation across the BIWS campus.",
    story: [
      "Independence Day is celebrated with decorations, activities, and performances that let students participate with energy and pride. The event gives girls a chance to speak, perform, decorate, and share joy together.",
      "Campus celebrations matter because they create belonging. They turn the institution into a home where children can make memories, take part, and feel included in shared national moments.",
    ],
    highlights: [
      "Student-led performances and activities",
      "Decorated learning and living spaces",
      "A shared celebration of identity and belonging",
    ],
    impact: [
      { value: "Joy", label: "through participation" },
      { value: "Culture", label: "and belonging" },
      { value: "Home", label: "like memories" },
    ],
    supportText:
      "Your support helps arrange supplies, decorations, refreshments, and creative activities for student celebrations.",
  },
  {
    id: 6,
    slug: "classroom-activities",
    category: "Education",
    title: "Classroom Activities",
    description: "Daily learning, creative activities, and skill building sessions.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=85",
    year: "Ongoing",
    location: "BIWS Classrooms",
    lead:
      "Everyday lessons, creative tasks, reading, writing, and guided practice that build steady academic foundations.",
    story: [
      "Classroom activities are the heartbeat of the education program. Students work through lessons, group activities, creative exercises, and revision support with teachers who understand the importance of patience and consistency.",
      "The goal is not only to complete schoolwork. It is to build discipline, curiosity, communication, and the belief that learning can open doors.",
    ],
    highlights: [
      "Daily academic support",
      "Creative and group-based learning",
      "Confidence through consistent classroom routines",
    ],
    impact: [
      { value: "Daily", label: "learning rhythm" },
      { value: "Strong", label: "academic base" },
      { value: "Care", label: "with structure" },
    ],
    supportText:
      "Donations support books, stationery, learning materials, tutoring, and classroom resources for the girls.",
  },
  {
    id: 7,
    slug: "classroom-learning",
    category: "Education",
    title: "Classroom Learning",
    description: "Girls engaged in daily academic lessons and group activities.",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1200&q=85",
    year: "Ongoing",
    location: "BIWS Academic Wing",
    lead:
      "Focused lessons and guided study time that help each student progress at her own pace with care and structure.",
    story: [
      "Classroom learning at BIWS blends school preparation, revision, reading practice, and mentoring. Teachers and caregivers work to keep students supported even when learning gaps need extra attention.",
      "The most important result is momentum. Small improvements, repeated daily, become stronger habits and better outcomes over time.",
    ],
    highlights: [
      "Structured school support",
      "Group work and guided study",
      "Individual attention where students need it most",
    ],
    impact: [
      { value: "Focus", label: "on progress" },
      { value: "Support", label: "after school" },
      { value: "Growth", label: "step by step" },
    ],
    supportText:
      "Your gift helps BIWS provide learning materials, tutoring support, and the classroom environment students need.",
  },
  {
    id: 8,
    slug: "stitching-class",
    category: "Skills Program",
    title: "Stitching Class",
    description: "Vocational stitching training for older girls at the campus.",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1200&q=85",
    year: "2026",
    location: "BIWS Vocational Training Area",
    lead:
      "A practical training track where older girls learn stitching basics, finishing discipline, and productive hand skills.",
    story: [
      "Stitching class gives students a calm, focused environment to learn measurement, fabric handling, machine use, hand finishing, and practice discipline. The sessions are designed around repetition and visible progress.",
      "Vocational training helps students imagine a life where their own hands can create value. That sense of capability is as important as the skill itself.",
    ],
    highlights: [
      "Hands-on stitching and tailoring basics",
      "Practice-led learning with instructor guidance",
      "A self-reliance pathway for older students",
    ],
    impact: [
      { value: "Hands-on", label: "training" },
      { value: "Vocational", label: "pathway" },
      { value: "Self", label: "reliance goal" },
    ],
    supportText:
      "Support helps provide machines, fabric, thread, tools, and instructor resources for stitching classes.",
  },
  {
    id: 9,
    slug: "prize-distribution-annual-event",
    category: "Annual Event",
    title: "Prize Distribution",
    description: "Annual celebration and prize distribution for academic achievers.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=85",
    year: "Annual",
    location: "BIWS Community Hall",
    lead:
      "A recurring celebration that recognizes progress and keeps students motivated through encouragement and public appreciation.",
    story: [
      "The annual prize distribution is one of the moments students look forward to. It gives the campus a chance to pause, appreciate effort, and show girls that their progress is noticed.",
      "Recognition is a simple but powerful form of care. It helps students connect discipline with dignity and encourages them to keep reaching for more.",
    ],
    highlights: [
      "Recognition for academic achievers",
      "Encouragement from teachers and visitors",
      "A recurring morale-building campus tradition",
    ],
    impact: [
      { value: "Annual", label: "campus event" },
      { value: "Motivation", label: "for students" },
      { value: "Pride", label: "in progress" },
    ],
    supportText:
      "Your support keeps recognition events thoughtful, organized, and encouraging for students across the year.",
  },
];

export const galleryCategories = [
  "All moments",
  ...Array.from(new Set(galleryItems.map((item) => item.category))),
];

export function getGalleryHref(item: Pick<GalleryItem, "slug">) {
  return `/gallery/${item.slug}`;
}

export function getGalleryItem(slug: string) {
  return galleryItems.find((item) => item.slug === slug);
}

export function getRelatedGalleryItems(slug: string, limit = 3) {
  const currentItem = getGalleryItem(slug);

  if (!currentItem) {
    return galleryItems.slice(0, limit);
  }

  const sameCategoryItems = galleryItems.filter(
    (item) => item.category === currentItem.category && item.slug !== slug
  );
  const otherItems = galleryItems.filter(
    (item) => item.category !== currentItem.category && item.slug !== slug
  );

  return [...sameCategoryItems, ...otherItems].slice(0, limit);
}
