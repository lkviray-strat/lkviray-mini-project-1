"use client";

import * as React from "react";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Project } from "@/lib/projects";
import { useMediaQuery } from "@/lib/hooks";

type ProjectCarouselProps = {
  project: Project;
};

export const ProjectCarousel = ({ project }: ProjectCarouselProps) => {
  const isMobile = useMediaQuery("(max-width: 1024px)");

  return (
    <Carousel
      opts={{
        align: "center",
      }}
      orientation={!isMobile ? "vertical" : "horizontal"}
      className="w-full"
    >
      <CarouselContent className="space-y-10 py-10 h-[460px] laptop:h-[650px]">
        {project.imageUrls.map((image) => (
          <CarouselItem
            key={image}
            className=" basis-[32rem] mb-2 rounded-2xl py-5  select-none"
          >
            <div className="laptop:bg-blue-600 h-full w-full  relative overflow-hidden shadow-lg rounded-2xl">
              <Image
                alt={project.title as string}
                src={image as string}
                fill
                className="object-center laptop:object-contain"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default ProjectCarousel;
