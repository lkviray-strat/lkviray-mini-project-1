import { getProjectBySlug } from "@/lib/projects";
import { getSkillsByName, Skill } from "@/lib/skills";
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

  return (
    <div>
      <h1>{project?.title}</h1>
    </div>
  );
}

export default ProjectPage;
