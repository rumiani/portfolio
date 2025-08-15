import ProjectCard from "./projectCard/projectCard";
import { projects } from "@/components/data/projects";



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
