import fs from "fs";
import path from "path";
import { projects } from "../data/projects";
import { Project } from "../types";

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((projects) => projects.slug === slug);
};

export function getNumberOfImages(title: string): number {
  const folderPath = path.join(
    process.cwd(),
    "public",
    "images",
    title.replaceAll(" ", "")
  );
  const files = fs.readdirSync(folderPath);
  return files.length;
}
