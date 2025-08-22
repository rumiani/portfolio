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
import { projects } from "@/utils/data/projects";
import { useTranslations } from "next-intl";
import _ from "lodash";

export function PortfolioCarousel() {
  const t = useTranslations("Projects")
  return (
    <Carousel
      opts={{ loop: true }}
      plugins={[Autoplay({ delay: 3000 })]}
      className="relative group rounded-2xl"
      dir="ltr"
    >
      <CarouselContent className="min-h-96 h-fit mx-auto">
        {projects.map((project, index) => (
          <CarouselItem key={index} title={project.name} className="CarouselItem px-0">
            <a href={`#${project.name}`} className="group">
              <div className="relative h-full w-[98%] mx-auto rounded-2xl overflow-hidden ">
                <Image
                  alt={project.name}
                  src={project.imgSrc}
                  width={310}       
                  height={310}
                  className="object-cover w-full h-full mx-auto"
                  priority={index === 0}

                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500">
                  {/* <h3 className="text-2xl font-bold">{_.capitalize(project.name)}</h3> */}
                  <p className="text-sm text-gray-200 mt-1">
                    {/* {t(`${project.name}.shortDescription`)} */}
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
        className="right-6 hidden md:flex opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
    </Carousel>
  );
}
