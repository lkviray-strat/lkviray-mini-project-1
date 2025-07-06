"use client";

import { Project } from "@/lib/types";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import FadeInSection from "../motion/FadeInSection";
import ProjectCard from "./ProjectCard";

type ProjectListOfCardsProps = {
  projects: Project[];
};

export const ProjectListOfCards = ({ projects }: ProjectListOfCardsProps) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const firstRef = useRef(null);
  const isInView = useInView(firstRef, { amount: 0.3, once: true });

  useEffect(() => {
    if (isInView) setShouldAnimate(true);
  }, [isInView]);

  return (
    <>
      {projects.map((proj, i) => (
        <FadeInSection
          delay={0.3 * (i + 1)}
          viewportAmount={0.1}
          key={proj.slug}
          animate={shouldAnimate}
          ref={i === 0 ? firstRef : undefined}
        >
          <ProjectCard
            slug={proj.slug}
            projects={projects}
          />
        </FadeInSection>
      ))}
    </>
  );
};

export default ProjectListOfCards;
