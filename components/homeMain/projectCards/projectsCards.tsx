import ProjectCard, { Project } from "./projectCard/projectCard";

const projects: Project[] = [
  {
    id: "one",
    name: "Project One",
    imgSrc: "/assets/1.webp",
    shortDescription: "A short summary of the project.",
    fullDescription:
      "A full, detailed explanation of the project including how it was built, challenges faced, and results achieved.",
    projectUrl: "https://example.com",
    sourceCodeUrl: "https://github.com/example/project-one",
    keyFeatures: [
      "Responsive design",
      "Fast load time",
      "SEO optimized",
    ],
    status: "Completed",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "ShadCN UI"],
  },
  {
    id: "two",
    name: "Project Two",
    imgSrc: "/assets/2.webp",
    shortDescription: "Another quick description.",
    fullDescription:
      "Detailed overview of the second project, describing its purpose and unique features.",
    projectUrl: "https://example.com",
    sourceCodeUrl: "https://github.com/example/project-two",
    keyFeatures: ["Authentication", "Dark mode", "Real-time data"],
    status: "In Progress",
    technologies: ["React", "Node.js", "PostgreSQL"],
  },
  {
    id: "three",
    name: "Project Three",
    imgSrc: "/assets/3.webp",
    shortDescription: "Brief intro for the third project.",
    fullDescription:
      "Comprehensive breakdown of the third project's architecture, performance, and usability.",
    projectUrl: "https://example.com",
    sourceCodeUrl: "https://github.com/example/project-three",
    keyFeatures: ["API integration", "Offline support", "Animations"],
    status: "Completed",
    technologies: ["Vue", "Firebase", "TailwindCSS"],
  },
];

export default function ProjectsCards() {
  return (
    <div className="space-y-8">
      <h2 className="text-4xl font-bold">Projects</h2>
      {projects.map((project, i) => (
        <ProjectCard key={i} {...project} />
      ))}
    </div>
  );
}
