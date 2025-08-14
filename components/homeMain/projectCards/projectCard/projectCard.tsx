"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

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

export default function ProjectCard({
  id,
  name,
  imgSrc,
  shortDescription,
  fullDescription,
  projectUrl,
  sourceCodeUrl,
  keyFeatures,
  status,
  technologies,
}: Project) {
  return (
    <Card id={id} className="overflow-hidden border border-gray-200 shadow-lg">
      <div className="flex flex-col md:flex-row">
        {/* Left - Image */}
        <div className="relative w-full md:w-1/3 h-64 md:h-auto">
          <Image
            src={imgSrc}
            alt={name}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right - Content */}
        <div className="flex-1 flex flex-col">
          <CardHeader className="pb-0">
            <h2 className="text-2xl font-bold">{name}</h2>
            <p className="text-sm text-gray-500">{status}</p>
          </CardHeader>

          <CardContent className="flex flex-col gap-4 pt-4">
            <p className="text-gray-700">{shortDescription}</p>
            <p className="text-gray-600">{fullDescription}</p>

            <div>
              <h4 className="font-semibold">Key Features:</h4>
              <ul className="list-disc list-inside text-gray-600">
                {keyFeatures.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold">Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 text-gray-800 text-sm px-2 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-2 mt-auto">
              <Button asChild variant="default">
                <a href={projectUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" /> Live Project
                </a>
              </Button>

              <Button asChild variant="secondary">
                <a
                  href={sourceCodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="mr-2 h-4 w-4" /> Source Code
                </a>
              </Button>
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
  );
}
