import { slugify } from "./utils";
import { skills } from "./skills";

export interface Project {
  slug: string;
  title: string;
  description: string;
  skills: string[];
  githubUrl?: string;
}

const createProject = (data: Project): Project => {
  return {
    ...data,
    slug: slugify(data.title),
  };
};

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((projects) => projects.slug === slug);
};

export const projects: Project[] = [
  createProject({
    title: "Portfolio Website",
    description:
      "A personal portfolio website to showcase my projects and skills. Built with a modern tech stack, it features responsive design, interactive UI components, and a section for project highlights.",
    skills: ["React", "TypeScript", "CSS3"],
    slug: "",
  }),
  createProject({
    title: "Task Manager App",
    description:
      "A simple task management app to organize daily activities. Users can add, edit, and delete tasks, set priorities, and track progress with a clean and intuitive interface.",
    skills: ["React", "JavaScript", "Java"],
    slug: "",
  }),
  createProject({
    title: "E-commerce API",
    description:
      "A RESTful API for an e-commerce platform. Supports product management, user authentication, order processing, and integrates with payment gateways for seamless transactions.",
    skills: ["Javas", "Flutter", "Dart"],
    slug: "",
  }),
  createProject({
    title: "Blog Platform",
    description:
      "A full-featured blogging platform with markdown support. Includes user authentication, post creation and editing, commenting, and a customizable theme system.",
    skills: ["Next.js", "TypeScript", "TailwindCSS"],
    slug: "",
  }),
  createProject({
    title: "Chat Application",
    description:
      "A real-time chat application with WebSocket support. Enables instant messaging, group chats, and message history, with a focus on performance and security.",
    skills: ["React", "Spring Boot", "TypeScript"],
    slug: "",
  }),
];
