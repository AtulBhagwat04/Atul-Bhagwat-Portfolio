import React from "react";
import {
  SiFlutter,
  SiDart,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiSqlite,
  SiFirebase,
  SiJsonwebtokens,
  SiGit,
  SiVercel,
  SiPostman,
  SiAndroidstudio,
  SiFigma,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { BiLayer } from "react-icons/bi";
import { VscVscode } from "react-icons/vsc";

export interface TechItem {
  name: string;
  category: "Mobile" | "Backend" | "State" | "Tools";
  icon: React.ReactNode;
  percentage: number;
  desc: string;
}

export const techItems: TechItem[] = [
  {
    name: "Flutter",
    category: "Mobile",
    icon: <SiFlutter className="w-6 h-6 text-[#02569B]" />,
    percentage: 95,
    desc: "Cross-platform mobile UI framework"
  },
  {
    name: "Dart",
    category: "Mobile",
    icon: <SiDart className="w-6 h-6 text-[#00B4AB]" />,
    percentage: 92,
    desc: "Strongly typed object-oriented language"
  },
  {
    name: "Core Java",
    category: "Mobile",
    icon: <FaJava className="w-6 h-6 text-[#E76F51]" />,
    percentage: 85,
    desc: "Object-oriented language for Android training"
  },
  {
    name: "JavaScript",
    category: "Backend",
    icon: <SiJavascript className="w-6 h-6 text-[#F7DF1E]" />,
    percentage: 88,
    desc: "Full-stack Node.js development language"
  },
  {
    name: "Node.js",
    category: "Backend",
    icon: <SiNodedotjs className="w-6 h-6 text-[#339933]" />,
    percentage: 90,
    desc: "Asynchronous JavaScript runtime environment"
  },
  {
    name: "Express.js",
    category: "Backend",
    icon: <SiExpress className="w-6 h-6 text-white" />,
    percentage: 90,
    desc: "Minimalist web framework for RESTful APIs"
  },
  {
    name: "MongoDB",
    category: "Backend",
    icon: <SiMongodb className="w-6 h-6 text-[#47A248]" />,
    percentage: 90,
    desc: "NoSQL document database for scalable apps"
  },
  {
    name: "PostgreSQL",
    category: "Backend",
    icon: <SiPostgresql className="w-6 h-6 text-[#336791]" />,
    percentage: 85,
    desc: "Relational SQL database engine"
  },
  {
    name: "SQLite",
    category: "Backend",
    icon: <SiSqlite className="w-6 h-6 text-[#003B57]" />,
    percentage: 88,
    desc: "Embedded SQL database for offline caching"
  },
  {
    name: "Firebase",
    category: "Backend",
    icon: <SiFirebase className="w-6 h-6 text-[#FFCA28]" />,
    percentage: 85,
    desc: "Authentication, FCM push notifications & analytics"
  },
  {
    name: "BLoC",
    category: "State",
    icon: <BiLayer className="w-6 h-6 text-[#34F58A]" />,
    percentage: 94,
    desc: "Business Logic Component state flow"
  },
  {
    name: "JWT Auth",
    category: "Backend",
    icon: <SiJsonwebtokens className="w-6 h-6 text-[#D63AFF]" />,
    percentage: 90,
    desc: "Secure JSON Web Token session validation"
  },
  {
    name: "Git & GitHub",
    category: "Tools",
    icon: <SiGit className="w-6 h-6 text-[#F05032]" />,
    percentage: 94,
    desc: "Version control & repository collaboration"
  },
  {
    name: "Render & Vercel",
    category: "Tools",
    icon: <SiVercel className="w-6 h-6 text-white" />,
    percentage: 88,
    desc: "Cloud deployment and project hosting"
  },
  {
    name: "Postman",
    category: "Tools",
    icon: <SiPostman className="w-6 h-6 text-[#FF6C37]" />,
    percentage: 90,
    desc: "API endpoint testing and payload documentation"
  },
  {
    name: "Android Studio",
    category: "Tools",
    icon: <SiAndroidstudio className="w-6 h-6 text-[#3DDC84]" />,
    percentage: 90,
    desc: "Native Android emulator & profiler workspace"
  },
  {
    name: "VS Code",
    category: "Tools",
    icon: <VscVscode className="w-6 h-6 text-[#007ACC]" />,
    percentage: 95,
    desc: "Primary IDE for Flutter and full-stack development"
  },
  {
    name: "Figma",
    category: "Tools",
    icon: <SiFigma className="w-6 h-6 text-[#F24E1E]" />,
    percentage: 88,
    desc: "UI/UX vector design, wireframing & prototyping"
  },
];

export const techCategories = ["All", "Mobile", "Backend", "State", "Tools"];
