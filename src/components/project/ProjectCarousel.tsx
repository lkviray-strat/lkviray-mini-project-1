"use client";

import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useMediaQuery } from "@/lib/hooks";
import { Project } from "@/lib/types";

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
      className="w-full "
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
      <CarouselNext
        className={` size-10 !shadow-lg border-0 bg-[var(--secondaryBg)]`}
      />
      <CarouselPrevious
        className={` size-10 !shadow-lg border-0 bg-[var(--secondaryBg)]`}
      />
    </Carousel>
  );
};

export default ProjectCarousel;
