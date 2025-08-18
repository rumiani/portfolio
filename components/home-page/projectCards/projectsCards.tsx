import { projects } from "@/utils/data/projects";
import ProjectCard from "./projectCard/projectCard";



export default function ProjectsCards() {
  
  return (
    <div className="space-y-8 mt-24">
      <h2 className="text-4xl font-bold">Projects</h2>
      {projects.map((project, i) => (
        <ProjectCard key={i} {...project} />
      ))}
    </div>
  );
}
