import { getNumberOfImages } from "../queries/project";
import { Project } from "../types";
import { slugify } from "../utils";

const createProject = (data: Project): Project => {
  return {
    ...data,
    imageUrls: Array.from({ length: getNumberOfImages(data.title) }, (_, i) => {
      return `/images/${data.title.replaceAll(" ", "")}/${slugify(data.title)}-${i + 1}.png`;
    }),
    slug: slugify(data.title),
  };
};

export const projects: Project[] = [
  createProject({
    title: "Live Group Chat",
    description:
      "A real-time group chat application where users can enter a username and chat with others in the same browser (across different tabs). The app also allows browsing the logs of previous chats for easy reference. Built with a focus on seamless user experience, it leverages WebSockets for instant message delivery and LocalStorage for persistent chat history. The intuitive interface ensures users can quickly join conversations, while robust error handling and responsive design make it accessible across devices.",
    skills: [
      "Java",
      "TypeScript",
      "Spring Boot",
      "Next.js",
      "Websockets",
      "TailwindCSS",
    ],
    imageUrls: [],
    slug: "",
    githubUrl: "https://github.com/xNeshi/live-group-chat",
  }),
  createProject({
    title: "ShrtnURL",
    description:
      "A REST API for URL shortening built with Java and Spring Boot. Users can shorten URLs using either a randomly generated code or a custom alias. The API provides endpoints for creating, retrieving, and redirecting shortened URLs, with robust validation and error handling. Designed for scalability and reliability, it uses PostgreSQL for persistent storage and integrates with Postman for testing. Ideal for quickly generating shareable short links with optional customization.",
    skills: ["Java", "Spring", "Spring Boot", "Postman", "PostgreSQL"],
    imageUrls: [],
    slug: "",
    githubUrl: "https://github.com/xNeshi/shrtnurl",
  }),
  createProject({
    title: "Auth Security",

    description:
      "A simple REST API built with Java, Spring Boot, and Spring Security that allows users to register and authenticate using their account. Access to protected API endpoints requires a valid JWT token; users without a token cannot access these endpoints. The API demonstrates secure authentication, registration, and JWT-based authorization.",
    skills: ["Java", "Spring", "Postman", "Spring Security", "PostgreSQL"],
    imageUrls: [],
    slug: "",
    githubUrl: "https://github.com/xNeshi/auth-security",
  }),
  createProject({
    title: "Collab Project",

    description:
      "A collaboration web app where users can post their projects and find others with similar interests to collaborate with. Features include project posting, user profiles, interest-based search, and messaging. Built with Next.js, TypeScript, TailwindCSS, Sentry, NextAuth, and Sanity for a modern, scalable, and secure experience.",
    skills: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Sentry",
      "NextAuth",
      "Sanity",
    ],
    imageUrls: [],
    slug: "",
    githubUrl: "https://github.com/xNeshi/collab-project",
  }),
  createProject({
    title: "Modified YOLOv5 Streamlit",
    description:
      "A machine learning model simulator specifically designed for detecting vehicles in traffic CCTV footage. Utilizes a modified YOLOv5 architecture for real-time object detection, focusing on identifying cars, trucks, and other vehicles. The application is built with Python, Streamlit for the interactive web interface, and PyTorch for model training and inference. Ideal for traffic monitoring and analytics, it demonstrates the integration of deep learning models into user-friendly web apps.",
    skills: ["Python", "Streamlit", "PyTorch", "Machine Learning"],
    imageUrls: [],
    slug: "",
    githubUrl: "",
  }),
];
