import { getProjectBySlug } from "@/lib/projects";
import { getSkillsByName, Skill } from "@/lib/skills";
import Image from "next/image";
import React from "react";

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  const skills: Skill[] =
    (getSkillsByName(project?.skills ?? []) as Skill[]) || [];
  const imageUrl = project?.imageUrl + "/" + project?.slug;

  return (
    <div className="px-4 tablet:px-9 laptop:px-12">
      <section
        id="projects"
        className="flex flex-col items-center"
      >
        <div className="mt-[6rem] desktop:mt-[8rem] flex flex-col laptop:flex-row items-center px-9 w-full max-w-[1400px]">
          <div className="bg-blue-600 shadow-lg w-full h-[650px] relative mb-2 rounded-2xl overflow-hidden">
            <Image
              alt={project?.title as string}
              src={`${imageUrl}-1.png`}
              fill
              className="object-contain "
            />
          </div>

          <div className="flex flex-col gap-3 w-[600px] laptop:ml-10">
            <h1 className=" text-[20px] lphone:text-[35px] tablet:text-[30px] font-extrabold tracking-tight">
              {project?.title}
            </h1>
            <p className="text-[13px] tablet:text-[16px] mb-4">
              {project?.description}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectPage;
