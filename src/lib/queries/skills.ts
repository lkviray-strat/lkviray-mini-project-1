import { allSkills } from "../data/skills";
import { Skill } from "../types";

export const getSkillsByName = (
  names: string[] | undefined
): Skill[] | undefined => {
  if (!names) {
    return undefined;
  }
  return names
    .map((name) =>
      allSkills.find((skill) => skill.name.toLowerCase() === name.toLowerCase())
    )
    .filter((skill): skill is Skill => skill !== undefined);
};
