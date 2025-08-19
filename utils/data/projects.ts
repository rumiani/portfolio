import { Project } from "@/types/types";

export const projects: Project[] = [
  {
    name: "memoleit",
    imgSrc: "/assets/projects-logos/memoleit.jpg",
    url: "http://memoleit.vercel.app/",
    sourceCodeUrl: "https://github.com/rumiani/memoleit",
    technologies: ["Next.js",
      "React",
      "NextAuth.js",
      "MongoDB / Mongoose",
      "Redux Toolkit & React-Redux",
      "Dexie.js"],
  },
  {
    name: "trackrate",
    imgSrc: "/assets/projects-logos/trackrate.jpeg",
   url: "https://t.me/trackrate_bot",
    sourceCodeUrl: "https://github.com/rumiani/trackrate",
    technologies: ["Next.js", "Node.js", "Grammy", "Prisma"],
  },
  {
    name: "xtrim",
    imgSrc: "/assets/projects-logos/xtrim.jpg",
    url: "https://github.com/rumiani/xtrim/releases",
    sourceCodeUrl: "https://github.com/rumiani/xtrim",
    technologies: ["React.js", "TypeScript", "TailwindCSS", "CRXJS", "Vite"],
  },
];