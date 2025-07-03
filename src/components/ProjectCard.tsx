import React from "react";
import { Badge } from "./ui/badge";
import SkillBadge from "./SkillBadge";
import Link from "next/link";
import { getProjectBySlug } from "@/lib/projects";
import { getSkillsByName, Skill } from "@/lib/skills";

type ProjectCardProps = {
  slug: string;
};
export const ProjectCard = async ({ slug }: ProjectCardProps) => {
  const project = getProjectBySlug(slug);
  const skills: Skill[] =
    (getSkillsByName(project?.skills ?? []) as Skill[]) || [];

  return (
    <Link
      href={`/projects/${project?.slug}`}
      className="flex flex-col p-4 p border-1 gap-4 rounded-2xl grow basis-[350px] max-w-[420px] shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="w-full aspect-[3/3] bg-red-400 mb-2 rounded-2xl"></div>
      <h2 className="text-[18px] tablet:text-[21px] font-extrabold ">
        {project?.title}
      </h2>
      <p className="text-[13px] tablet:text-[16px] line-clamp-3">
        {project?.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {skills?.map((skill) => (
          <SkillBadge
            key={skill.name}
            skillColor={skill.color}
            skillName={skill.name}
          />
        ))}
      </div>
    </Link>
  );
};

export default ProjectCard;
