import { Project } from "@/types/types";

export const projects: Project[] = [
  {
    id: "memoleit",
    name: "Memoleit",
    imgSrc: "/assets/projects-logos/memoleit.jpg",
    shortDescription: "AI-powered learning with flashcards, vocabulary, and spaced repetition to boost your skills every day.",
    fullDescription: "MemoLeit combines spaced repetition and AI to help you learn faster. Create flashcards, practice vocabulary with AI-generated stories, analyze essays, highlight PDFs, and import new words easily. Learn smarter and grow your knowledge daily.",
    url: "http://memoleit.vercel.app/",
    sourceCodeUrl: "https://github.com/rumiani/memoleit",
    keyFeatures: [
      "Custom DOM Manipulation",
      "Save Data",
      "React UI",
    ],
    technologies: ["Next.js",
      "React",
      "NextAuth.js",
      "MongoDB / Mongoose",
      "Redux Toolkit & React-Redux",
      "Dexie.js"],
  },
  {
    id: "trackrate",
    name: "Trackrate",
    imgSrc: "/assets/projects-logos/trackrate.jpeg",
    shortDescription: "Real-time crypto, gold, and currency prices with charts and alerts via Telegram.",
    fullDescription: "TrackRate is a Telegram bot that delivers real-time updates on cryptocurrency, gold, and currency prices. Users can view generated charts, set custom price alerts, and stay informed about market trends directly within Telegram. The bot leverages modern backend technologies to provide fast, reliable, and scalable updates. It integrates advanced data handling, automation, and visualization features to ensure accurate and timely information for traders and enthusiasts.",
    url: "https://t.me/trackrate_bot",
    sourceCodeUrl: "https://github.com/rumiani/trackrate",
    keyFeatures: ["Authentication", "Dark mode", "Real-time data"],
    technologies: ["Next.js", "Node.js", "Grammy", "Prisma"],
  },
  {
    id: "xtrim",
    name: "Xtrim",
    imgSrc: "/assets/projects-logos/xtrim.jpg",
    shortDescription: "X DOM Manipulator Chrome Extension.",
    fullDescription:
      "XTrim is a Chrome extension designed to enhance your X experience by allowing you to manipulate the DOM, add and customize elements. This extension lets you change the way X looks and works by adding custom functionality directly to the site.",
    url: "https://github.com/rumiani/xtrim/releases",
    sourceCodeUrl: "https://github.com/rumiani/xtrim",
    keyFeatures: ["API integration", "Offline support", "Animations"],
    technologies: ["React.js", "TypeScript", "TailwindCSS", "CRXJS", "Vite"],
  },
];