export type Skill = {
  name: string;
  color: string;
};

export const getSkillsByName = (
  names: string[] | undefined
): Skill[] | undefined => {
  if (!names) {
    return undefined;
  }
  return names
    .map((name) =>
      skills.find((skill) => skill.name.toLowerCase() === name.toLowerCase())
    )
    .filter((skill): skill is Skill => skill !== undefined);
};

export const skills: Skill[] = [
  { name: "Java", color: "#df8e2b" },
  { name: "JavaScript", color: "#f0db4f" },
  { name: "TypeScript", color: "#2f74c0" },
  { name: "HTML5", color: "#e54c21" },
  { name: "CSS3", color: "#2965f1" },
  { name: "TailwindCSS", color: "#3ebff8" },
  { name: "React", color: "#36393e" },
  { name: "Spring", color: "#6db33f" },
  { name: "Spring Boot", color: "#69c16e" },
  { name: "Next.js", color: "#111111" },
  { name: "Docker", color: "#2496ed" },
  { name: "Flutter", color: "#3fbaf1" },
  { name: "Dart", color: "#03589c" },
  { name: "Firebase", color: "#f5c43c" },
  { name: "Git", color: "#e84d31" },
  { name: "GitHub", color: "#2B3137" },
];

export const allSkills: Skill[] = [
  ...skills,
  { name: "Node.js", color: "#3c873a" },
  { name: "Express", color: "#404d59" },
  { name: "Redux", color: "#764abc" },
  { name: "Python", color: "#3572A5" },
  { name: "C#", color: "#178600" },
  { name: "C++", color: "#00599C" },
  { name: "MySQL", color: "#00758F" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "MongoDB", color: "#47A248" },
  { name: "AWS", color: "#FF9900" },
  { name: "Azure", color: "#0089D6" },
  { name: "Linux", color: "#FCC624" },
  { name: "Jenkins", color: "#D33833" },
  { name: "Figma", color: "#A259FF" },
  { name: "Sass", color: "#CD6799" },
];
