"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion } from 'framer-motion';
import { Project } from "@/types/types";
import { useEffect, useState, useMemo } from "react";
import { Spinner } from "@/components/general/Spinner";
import { useTranslations } from "next-intl";

// Memoize the motion variants to prevent re-creation
const cardVariants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
};

// Cache for URL availability to avoid repeated API calls
const urlAvailabilityCache = new Map<string, boolean>();

export default function ProjectCard(project: Project) {
  const [isAvailable, setIsAvailable] = useState<boolean | null>(
    urlAvailabilityCache.get(project.url) ?? null
  );
  const t = useTranslations("Projects");

  // Memoize split features to avoid re-splitting on every render
  const keyFeatures = useMemo(() => 
    t(`${project.name}.keyFeatures`).split(","),
    [t, project.name]
  );

  useEffect(() => {
    // Skip API call if already cached
    if (urlAvailabilityCache.has(project.url)) {
      setIsAvailable(urlAvailabilityCache.get(project.url)!);
      return;
    }

    // Debounce the API call
    const timeoutId = setTimeout(() => {
      fetch("/api/check-url", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: project.url }),
      })
        .then((res) => res.json())
        .then((data) => {
          const available = data.ok;
          urlAvailabilityCache.set(project.url, available);
          setIsAvailable(available);
        })
        .catch(() => {
          urlAvailabilityCache.set(project.url, false);
          setIsAvailable(false);
        });
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [project.url]);

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      variants={cardVariants}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Card 
        id={project.name} 
        className="border border-base overflow-hidden shadow-lg max-w-lg mx-auto lg:max-w-none lg:w-full"
      >
        <div className="flex flex-col lg:flex-row gap-2">
          {/* Optimized Image Container */}
          <div className="aspect-square relative w-full lg:w-1/3 bg-gray-100 dark:bg-gray-800">
            <Image
              src={project.imgSrc}
              alt={`${project.name} project screenshot`}
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover transition-opacity duration-300"
              priority={false} // Remove priority unless this is above-fold
              quality={85}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyatcVSnqKzNw=="
              onLoad={() => {
                // Optional: Track image load for analytics
                if (typeof window !== 'undefined' && 'gtag' in window) {
                  (window as any).gtag('event', 'image_loaded', {
                    event_category: 'performance',
                    event_label: project.name,
                  });
                }
              }}
            />
          </div>

          {/* Content Section */}
          <div className="flex-1 flex flex-col">
            <CardHeader className="pb-0">
              <h2 className="text-2xl font-bold">{t(`${project.name}.name`)}</h2>
              
              {/* Status with improved loading state */}
              <div className="text-sm flex flex-row gap-1 items-center">
                {t("status")}: 
                {isAvailable === null ? (
                  <div className="flex items-center gap-1">
                    <Spinner diameter={12} border={2} className="" />
                    <span className="text-gray-500">Checking...</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-1">
                    <span
                      className={`h-3 w-3 rounded-full transition-colors ${
                        isAvailable ? "bg-green-500" : "bg-red-500"
                      }`}
                    />
                    <span className={isAvailable ? "text-green-600" : "text-red-600"}>
                      {isAvailable ? t("available") : t("unavailable")}
                    </span>
                  </div>
                )}
              </div>
            </CardHeader>

            <CardContent className="flex flex-col gap-4 pt-4">
              <p>{t(`${project.name}.shortDescription`)}</p>
              <p>{t(`${project.name}.fullDescription`)}</p>
              
              {/* Key Features */}
              <div>
                <h3 className="font-semibold mb-2">{t("keyFeatures")}</h3>
                <ul className="list-disc list-inside space-y-1">
                  {keyFeatures.map((feature, i) => (
                    <li key={i} className="text-sm">{feature.trim()}</li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="font-semibold mb-2">{t("technologies")}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-200 dark:bg-gray-700 text-sm px-2 py-1 rounded-md transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 mt-auto">
                <Button 
                  asChild 
                  variant="outline" 
                  className="transition-all hover:scale-105"
                  disabled={isAvailable === false}
                >
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={`View ${project.name} live project`}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" /> 
                    {t("liveProject")}
                  </a>
                </Button>
                
                <Button 
                  asChild 
                  variant="outline"
                  className="transition-all hover:scale-105"
                >
                  <a
                    href={project.sourceCodeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.name} source code on GitHub`}
                  >
                    <FaGithub className="mr-2 h-4 w-4" /> 
                    {t("sourceCode")}
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