export type Project = {
  id: string;
  name: string;
  imgSrc: string;
  shortDescription: string;
  fullDescription: string;
  projectUrl: string;
  sourceCodeUrl: string;
  keyFeatures: string[];
  status: "In Progress" | "Completed" | "Planned";
  technologies: string[];
};