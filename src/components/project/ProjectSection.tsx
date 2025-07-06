import { projects } from "@/lib/data/projects";
import ProjectListOfCards from "./ProjectListOfCards";

export const ProjectSection = () => {
  return (
    <div className="flex flex-wrap gap-7 mt-8 place-items-center justify-center px-8 max-w-[1400px]">
      <ProjectListOfCards projects={projects} />
    </div>
  );
};

export default ProjectSection;
