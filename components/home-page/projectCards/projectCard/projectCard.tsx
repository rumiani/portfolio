"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion } from 'framer-motion';
import { Project } from "@/types/types";
import { Spinner } from "@/components/general/Spinner";
import { useTranslations } from "next-intl";

export default function ProjectCard(project: Project) {
  const t = useTranslations("Projects");
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    const currentCard = cardRef.current; // <-- capture ref locally

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && isAvailable === null) {
            fetch("/api/check-url", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ url: project.url }),
            })
              .then((res) => res.json())
              .then((data) => setIsAvailable(data.ok))
              .catch(() => setIsAvailable(false));

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(currentCard);

    return () => {
      observer.unobserve(currentCard); // <-- use the local copy
    };
  }, [project.url, isAvailable]);


  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Card ref={cardRef}
        id={project.name} className="border border-base overflow-hidden shadow-lg max-w-lg mx-auto lg:max-w-none lg:w-full">
        <div className="flex flex-col lg:flex-row gap-2">
          <div className="aspect-square relative w-full lg:w-1/3">
            <Image
              src={project.imgSrc}
              alt={project.name}
              fill
              className="object-cover"
              priority
              loading="lazy"
            />
          </div>
          <div className="flex-1 flex flex-col">
            <CardHeader className="pb-0">
              <h2 className="text-2xl font-bold">{t(`${project.name}.name`)}</h2>
              <div className="text-sm flex flex-row gap-1">
                {t("status")}: {isAvailable === null ? (
                  <Spinner diameter={15} border={3} />
                ) : (
                  <div className="flex items-center gap-1">
                    <span className={`h-3 w-3 rounded-full ${isAvailable ? "bg-green-500" : "bg-red-500"}`}></span>
                    <span>{isAvailable ? t("available") : t("unavailable")}</span>
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 pt-4">
              <p>{t(`${project.name}.shortDescription`)}</p>
              <p>{t(`${project.name}.fullDescription`)}</p>
              <div>
                <h3 className="font-semibold">{t("keyFeatures")}</h3>
                <ul className="list-disc list-inside">
                  {t(`${project.name}.keyFeatures`).split(",").map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold">{t("technologies")}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="bg-gray-200 dark:bg-gray-700 text-sm px-2 py-1 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-2 mt-auto">
                <Button asChild variant="outline">
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> {t("liveProject")}
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href={project.sourceCodeUrl} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="mr-2 h-4 w-4" /> {t("sourceCode")}
                  </a>
                </Button>
              </div>
            </CardContent>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
