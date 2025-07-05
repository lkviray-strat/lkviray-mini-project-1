import path from "path";
import fs from "fs";
import { Project, projects } from "../data/projects";

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((projects) => projects.slug === slug);
};

export const getNumberOfImages = (title: string): number => {
  const folderPath = path.join(
    process.cwd(),
    "public",
    "images",
    title.replaceAll(" ", "")
  );
  const files = fs.readdirSync(folderPath);
  return files.length;
};
