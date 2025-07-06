export interface Project {
  slug: string;
  title: string;
  description: string;
  imageUrls: string[]; // Changed to an array to support multiple images
  skills: string[];
  githubUrl?: string;
}

export type Skill = {
  name: string;
  color: string;
};
