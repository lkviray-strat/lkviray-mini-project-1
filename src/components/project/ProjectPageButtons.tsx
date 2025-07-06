import { Project } from "@/lib/types";
import { Eye, Lock } from "lucide-react";
import { Button } from "../ui/button";

type ProjectPageButtonsProps = {
  project: Project;
};

export const ProjectPageButtons = ({ project }: ProjectPageButtonsProps) => {
  return (
    <Button
      asChild
      className={`${project?.githubUrl?.length === 0 ? `tablet:w-fit w-full bg-gray-300  text-black opacity-100 pointer-events-none select-none shadow-xl border-0` : `tablet:w-fit w-full bg-blue-600 text-white hover:bg-blue-800 active:bg-blue-400 shadow-xl`}`}
    >
      {project?.githubUrl?.length === 0 ? (
        <span className="flex items-center gap-3 !px-7">
          {" "}
          <Lock />
          GitHub is Private
        </span>
      ) : (
        <a
          href={project?.githubUrl ?? ""}
          target="_blank"
          className="flex items-center gap-3 !px-7"
        >
          <Eye />
          View on GitHub
        </a>
      )}
    </Button>
  );
};

export default ProjectPageButtons;
