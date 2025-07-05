import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/data/projects";

export const ProjectSection = () => {
  return (
    <div className="flex flex-wrap gap-7 mt-8 place-items-center justify-center px-8 max-w-[1400px]">
      {projects.map((proj) => (
        <ProjectCard
          key={proj.slug}
          slug={proj.slug}
        />
      ))}
    </div>
  );
};

export default ProjectSection;
