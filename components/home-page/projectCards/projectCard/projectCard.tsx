"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion } from 'framer-motion';
import { Project } from "@/types/types";
import { useEffect, useState } from "react";
import { Spinner } from "@/components/general/Spinner";

export default function ProjectCard({
  id,
  name,
  imgSrc,
  shortDescription,
  fullDescription,
  url,
  sourceCodeUrl,
  keyFeatures,
  technologies,
}: Project) {
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);

  useEffect(() => {
    fetch("/api/check-url", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url }),
    })
      .then((res) => res.json())
      .then((data) => setIsAvailable(data.ok))
      .catch(() => setIsAvailable(false));
  }, [url]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -50, y: 50 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Card id={id} className="border border-base overflow-hidden shadow-lg max-w-lg mx-auto lg:max-w-none lg:w-full">
        <div className="flex flex-col lg:flex-row">
          <div className=" aspect-square relative w-full lg:w-1/3">
            <Image
              src={imgSrc}
              alt={name}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex-1 flex flex-col">
            <CardHeader className="pb-0">
              <h2 className="text-2xl font-bold">{name}</h2>
              <div className="text-sm flex flex-row gap-1">Status: {isAvailable === null ? (
                <Spinner diameter={15} border={3} className="" />
              ) : (
                <div className="flex items-center gap-1">
                  <span
                    className={`h-3 w-3 rounded-full ${isAvailable ? "bg-green-500" : "bg-red-500"
                      }`}
                  ></span>
                  <span>{isAvailable ? "Available" : "Unavailable"}</span>
                </div>
              )}
              </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 pt-4">
              <p className="">{shortDescription}</p>
              <p className="">{fullDescription}</p>
              <div>
                <h4 className="font-semibold">Key Features:</h4>
                <ul className="list-disc list-inside ">
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
              <div className="flex gap-2 mt-auto">
                <Button asChild variant="default">
                  <a href={url} target="_blank" rel="noopener noreferrer">
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
    </motion.div>
  );
}
