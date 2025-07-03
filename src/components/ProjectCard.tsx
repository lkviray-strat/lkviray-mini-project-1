import React from "react";
import { Badge } from "./ui/badge";
import SkillBadge from "./SkillBadge";
import Link from "next/link";
import { getProjectBySlug } from "@/lib/projects";
import { getSkillsByName, Skill } from "@/lib/skills";
import Image from "next/image";

type ProjectCardProps = {
  slug: string;
};
export const ProjectCard = async ({ slug }: ProjectCardProps) => {
  const project = getProjectBySlug(slug);
  const skills: Skill[] =
    (getSkillsByName(project?.skills ?? []) as Skill[]) || [];
  const imageUrl = project?.imageUrl + "/" + project?.slug;

  console.log(imageUrl);
  return (
    <Link
      href={`/projects/${project?.slug}`}
      className="flex flex-col p-4 p border-1 gap-4 rounded-2xl grow basis-[350px] max-w-[420px] shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="w-full aspect-[3/3] relative mb-2 rounded-2xl overflow-hidden">
        <Image
          alt={project?.title as string}
          src={`${imageUrl}-1.png`}
          fill
          className="object-cover"
        />
      </div>
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
