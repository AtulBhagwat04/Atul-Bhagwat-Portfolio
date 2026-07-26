export interface QuickFact {
  type: "location" | "status" | "email";
  label: string;
  value: string;
}

export interface EducationItem {
  degree: string;
  period: string;
  institution: string;
  score: string;
  isPrimary?: boolean;
}

export const profileDetails = {
  name: "Atul Kaduba Bhagwat",
  role: "Full Stack App Developer",
  avatar: "/images/developer_hero.png",
  bioParagraph1:
    "I am a Full Stack App Developer focused on building scalable mobile applications with Flutter and robust backend systems using Node.js. I am passionate about clean architecture, REST APIs, responsive UI, and solving real-world problems through technology.",
  bioParagraph2:
    "Currently, I am sharpening my Data Structures & Algorithms (DSA), backend engineering, and software engineering foundations while building production-ready projects in pursuit of high-impact SDE opportunities.",
};

export const quickFacts: QuickFact[] = [
  { type: "location", label: "Location", value: "Maharashtra, India" },
  { type: "status", label: "Role Status", value: "Available for SDE Internships" },
  { type: "email", label: "Email Address", value: "atulbhagwat12@gmail.com" },
];

export const educationList: EducationItem[] = [
  {
    degree: "B.Tech in Computer Science & Business Systems",
    period: "2024 – 2027",
    institution: "KIT's College of Engineering, Kolhapur",
    score: "CGPA: 8.09",
    isPrimary: true,
  },
  {
    degree: "Diploma in Information Technology",
    period: "2021 – 2024",
    institution: "Government Polytechnic Ambad, Jalna",
    score: "Percentage: 86.94%",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    period: "2020 – 2021",
    institution: "Z. P. High School Shivna, Chhatrapati Sambhajinagar",
    score: "Percentage: 85.40%",
  },
];
