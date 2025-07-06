import { getSkillsByName } from "@/lib/queries/skills";
import { Project, Skill } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import SkillBadge from "../SkillBadge";

type ProjectCardProps = {
  slug: string;
  projects: Project[];
};
export const ProjectCard = ({ slug, projects }: ProjectCardProps) => {
  const project = projects.find((projects) => projects.slug === slug);

  const skills: Skill[] =
    (getSkillsByName(project?.skills ?? []) as Skill[]) || [];
  const imageUrl = project?.imageUrls?.[0];

  return (
    <Link
      href={`/projects/${project?.slug}`}
      className="flex flex-col p-4 p bg-[var(--secondaryBg)]  gap-4 rounded-2xl grow basis-[350px] max-w-[420px] shadow-lg hover:scale-98 transition-transform duration-400 hover:brightness-90"
    >
      <div className="w-full aspect-[3/3] relative mb-2 rounded-2xl overflow-hidden">
        <Image
          alt={project?.title as string}
          src={imageUrl as string}
          fill
          className="object-cover"
        />
      </div>
      <h2 className="text-[18px] tablet:text-[21px] font-extrabold transition-colors duration-200 hover:text-blue-400 ">
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
