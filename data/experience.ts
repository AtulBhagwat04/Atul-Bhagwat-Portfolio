export interface ExperienceItem {
  year: string;
  title: string;
  company?: string;
  awarder?: string;
  description: string;
  highlights: string[];
}

export const experiences: ExperienceItem[] = [
  {
    year: "Jun - Jul 2023",
    title: "Android Developer Trainee",
    company: "Mountreach Solution Pvt. Ltd.",
    description:
      "Gained key hands-on training building mobile layouts. Developed a native Android application named 'Diploma Helper' during industrial training, focusing on offline cache flows and resource access.",
    highlights: [
      "Designed and coded the 'Diploma Helper' Android training app",
      "Mastered Java Android SDK layout blueprints and material UI standards",
      "Improved general debugging, problem-solving, and deployment configurations",
    ],
  },
];

export const leadershipList: ExperienceItem[] = [
  {
    year: "Jan - Jun 2026",
    title: "GeeksforGeeks Campus Mantri",
    company: "GeeksforGeeks Community Team",
    description:
      "Selected as the official Campus Mantri to promote technical learning and competitive programming. Organized campus-wide webinars, algorithmic events, and mentored peers on data structures.",
    highlights: [
      "Facilitated campus workshops on algorithms and career paths",
      "Assisted 50+ students in getting started with coding frameworks",
      "Collaborated with the GFG outreach team to host state-level webinars",
    ],
  },
];

export const achievementsList: ExperienceItem[] = [
  {
    year: "Mar 2023",
    title: "Second Rank - MindSpark State Exhibition",
    awarder: "MindSpark State-Level Committee",
    description:
      "Awarded 2nd place at the MindSpark State-Level Project Exhibition for developing a Faculty Feedback Management System. Commended for innovative database design and technical implementation.",
    highlights: [
      "Achieved 2nd rank among state-level student entries",
      "Designed and coded the system presentation logic and schema mappings",
      "Recognized for practical problem-solving in educational management",
    ],
  },
];
