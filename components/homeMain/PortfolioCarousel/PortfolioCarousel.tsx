"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { projects } from "@/components/data/projects";

export function PortfolioCarousel() {
  return (
    <div className="w-full">
      <Carousel
      opts={{ loop: true }}
        plugins={[Autoplay({ delay: 3000 })]}
        className="relative group"
      >
        <CarouselContent className="h-[450px] ">
          {projects.map((project, index) => (
            <CarouselItem key={index} title={project.name} className="px-0 ">
              <a href={`#${project.id}`}>
                <div className="relative h-[450px] w-full">
                  <Image
                    alt={project.name}
                    src={project.imgSrc}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <h3 className="text-2xl font-bold">{project.name}</h3>
                    <p className="text-sm text-gray-200 mt-1">
                      {project.shortDescription}
                    </p>
                  </div>
                </div>
              </a>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          className="left-2 hidden md:flex opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
        <CarouselNext
          className="right-2 hidden md:flex opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
      </Carousel>
    </div>
  );
}
