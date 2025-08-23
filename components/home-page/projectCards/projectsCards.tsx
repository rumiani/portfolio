import { projects } from "@/utils/data/projects";
import ProjectCard from "./projectCard/projectCard";
import { checkUrlAvailability } from "@/components/home-page/projectCards/checkUrl/checkUrl";
import ProjectsTitle from "./projectsTitle/projectsTitle";

export const revalidate = 10;
export default async function ProjectsCards() {

  const projectsWithStatus = await Promise.all(
    projects.map(async (project) => ({
      ...project,
      isAvailable: await checkUrlAvailability(project.url),
    }))
  );

  return (
    <div className="space-y-8 mt-24">
      <ProjectsTitle/>
      {projectsWithStatus.map((project, i) => (
        <ProjectCard key={i} {...project} />
      ))}
    </div>
  );
}
