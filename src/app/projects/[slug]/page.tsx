import ProjectCarousel from "@/components/ProjectCarousel";
import { Button } from "@/components/ui/button";
import { getProjectBySlug, Project } from "@/lib/projects";
import { Eye, Lock } from "lucide-react";
import Link from "next/link";
import React from "react";

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export default function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = params;
  const project = getProjectBySlug(slug);

  return (
    <div className="px-4 tablet:px-9 laptop:px-12">
      <section
        id="projects"
        className="flex flex-col items-center"
      >
        <div className="mt-[6rem] desktop:mt-[8rem] flex flex-col laptop:flex-row items-center px-9 w-full max-w-[1400px]">
          <ProjectCarousel project={project as Project} />

          <div className="flex flex-col gap-3 w-full max-w-[600px] laptop:ml-10">
            <h1 className=" text-[20px] lphone:text-[35px] tablet:text-[30px] font-extrabold tracking-tight transition-colors duration-200 hover:text-blue-400">
              {project?.title}
            </h1>
            <p className="text-[13px] tablet:text-[16px] mb-4">
              {project?.description}
            </p>
            <Button
              asChild
              className={`${project?.githubUrl?.length === 0 ? `w-fit bg-gray-300 text-black opacity-100 pointer-events-none select-none shadow-xl border-0` : `w-fit bg-blue-600 text-white hover:bg-blue-800 active:bg-blue-400 shadow-xl`}`}
            >
              {project?.githubUrl?.length === 0 ? (
                <span className="flex items-center gap-3 !px-7">
                  {" "}
                  <Lock />
                  GitHub is Private
                </span>
              ) : (
                <Link
                  href={project?.githubUrl ?? ""}
                  target="_blank"
                  className="flex items-center gap-3 !px-7"
                >
                  <Eye />
                  View on GitHub
                </Link>
              )}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
