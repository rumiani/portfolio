"use client"
import { projects } from "@/utils/data/projects";
import ProjectCard from "./projectCard/projectCard";
import { useTranslations } from "next-intl";
export default function ProjectsCards() {
  const t = useTranslations("Projects")
  return (
    <div className="space-y-8 mt-24">
      <h2 className="text-4xl font-bold">{t("title")}</h2>
      {projects.map((project, i) => (
        <ProjectCard key={i} {...project} />
      ))}
    </div>
  );
}
