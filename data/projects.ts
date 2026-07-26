import { ProjectData } from "@/components/ui/ProjectModal";

export const projectsData: ProjectData[] = [
  {
    id: "yatrikaa",
    title: "Yatrikaa – Travel Guide App",
    category: "Travel & Tourism",
    description: "A modern travel guide application that helps users discover, plan, and explore destinations with ease.",
    longDescription:
      "Yatrikaa is a comprehensive full-stack travel guide app built with Flutter and a Node.js/Express backend. It integrates Google Maps and device location services to help users discover nearby attractions, hotels, and restaurants in real time. MongoDB Atlas securely stores user accounts and custom trip planners, while Cloudinary delivers optimized images for maximum performance.",
    image: "/images/projects/Yatrikaa Images/travel_app.png",
    gallery: [
      "/images/projects/Yatrikaa Images/splash.jpg",
      "/images/projects/Yatrikaa Images/onboarding1.jpg",
      "/images/projects/Yatrikaa Images/onboarding2.jpg",
      "/images/projects/Yatrikaa Images/onboarding3.jpg",
      "/images/projects/Yatrikaa Images/login.jpg",
      "/images/projects/Yatrikaa Images/signUp.jpg",
      "/images/projects/Yatrikaa Images/home1.png",
      "/images/projects/Yatrikaa Images/home1.png",
      "/images/projects/Yatrikaa Images/explore.jpg",
      "/images/projects/Yatrikaa Images/community.jpg",
      "/images/projects/Yatrikaa Images/packages screen.jpg",
      "/images/projects/Yatrikaa Images/packageDetails.jpg",
      "/images/projects/Yatrikaa Images/feature destinations.jpg",
      "/images/projects/Yatrikaa Images/my profile.jpg"
    ],
    tech: ["Flutter", "Dart", "Node.js", "Express.js", "MongoDB Atlas", "BLoC", "JWT Auth", "Cloudinary", "Google Maps API", "REST API", "Client-Server"],
    features: [
      "Discover Destinations: Explore historical, religious, nature, and heritage places with detailed timings and travel tips",
      "Smart Search: Instantly search destinations by name or category with a simple, intuitive user experience",
      "Nearby Attractions: Find nearby tourist spots, hotels, restaurants, cafés, hospitals, and fuel stations",
      "Google Maps Navigation: Get live directions, calculate travel distance, and navigate directly to your destinations",
      "Favorites Folder: Save your favorite locations and access them anytime from your custom profile view",
      "Trip Planner: Create and manage personalized travel itineraries for your upcoming trips",
      "Cloud-Based Backend: Securely stores user accounts, favorites, and trip information using MongoDB Atlas",
      "Modern UI Experience: Designed with Flutter and Material Design for a fast, responsive, and fluid interface",
    ],
    architecture: [
      "Location-Based Discovery: Uses Google Maps and device location services to discover nearby attractions in real time",
      "Full-Stack Cloud Architecture: Communicates with a Node.js REST API while MongoDB Atlas securely stores all data logs",
      "Future Improvements: AI-based travel recommendations, live weather updates, offline maps, and travel expense tracking",
      "Folder Structure: Follows core/bloc, model, and service patterns to separate data models from UI views",
    ],
    stats: [
      { label: "Status", value: "Production-Ready" },
      { label: "APIs Integrated", value: "5+ Cloud APIs" },
    ],
    githubUrl: "https://github.com/AtulBhagwat04/yatrikaa.git",
    demoUrl: "https://github.com/AtulBhagwat04/yatrikaa.git",
  },
  {
    id: "qlix",
    title: "Qlix – Live Interactive Learning Platform",
    category: "Education & Productivity",
    description:
      "Qlix is a modern live interactive learning platform that enables educators, trainers, and organizations to create, manage, and conduct engaging real-time sessions with quizzes, polls, Q&A, analytics, and participant management—all from a single platform.",
    longDescription:
      "Qlix is a scalable full-stack audience engagement platform designed for colleges, coaching institutes, corporate training, workshops, webinars, and conferences. It enables instructors to host live sessions while participants join instantly using a unique session code. The platform supports real-time quizzes, polls, Q&A, attendance tracking, live analytics, participant management, and session history. Built with Flutter and a Node.js backend, Qlix delivers a smooth cross-platform experience with secure authentication and cloud-powered infrastructure.",
    image: "/images/projects/Qlix Images/thumbnail.png",
    gallery: [
      "/images/projects/Qlix Images/thumbnail.png"
    ],
    tech: [
      "Flutter",
      "Dart",
      "BLoC",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "Mongoose ODM",
      "Socket.IO",
      "Firebase Auth",
      "Firebase FCM",
      "Cloudinary",
      "Material 3"
    ],
    features: [
      "Session Management: Create live sessions, join using session codes, schedule, draft & publish, duplicate, and track session history",
      "Live Interaction: Conduct live polls, real-time quizzes, Q&A sessions, instant response tracking, live leaderboards, and announcements",
      "Participant Management: Session code joining, attendance tracking, active user monitoring, participant removal, and access control",
      "Analytics Dashboard: Monitor total sessions, participant counts, quiz performance, response analytics, and engagement reports",
      "Notifications & Alerts: Push notifications, session reminders, live interaction alerts, and instant quiz notifications",
      "Security & Authentication: JWT & Firebase authentication, role-based access control, secure REST APIs, and protected routes",
      "Modern User Experience: Responsive UI with smooth animations, Material 3 design, light & dark themes, and offline state handling"
    ],
    architecture: [
      "Frontend Architecture: Built with Flutter & Dart using BLoC state management, Go Router navigation, and Material 3 design",
      "Backend API Gateway: High-performance Node.js & Express.js REST API with Socket.IO for real-time bi-directional communication",
      "Database & Cloud Infrastructure: MongoDB Atlas with Mongoose ODM, Firebase Auth, Firebase Cloud Messaging, and Cloudinary media delivery",
      "Data Flow Pipeline: Flutter App -> REST API + Socket.IO -> Node.js + Express -> MongoDB Atlas -> Cloudinary + Firebase Services"
    ],
    stats: [
      { label: "Status", value: "Production-Ready" },
      { label: "Cloud Services", value: "6+ Cloud Services" }
    ],
    githubUrl: "https://github.com/AtulBhagwat04/QLix-App",
    demoUrl: "https://github.com/AtulBhagwat04/QLix-App"
  }
];

export const projectCategories = ["All", "Education & Productivity", "Travel & Tourism"];
