import { skills } from "@/lib/skills";
import Image from "next/image";
import React from "react";
import { Badge } from "./ui/badge";
import SkillBadge from "./SkillBadge";

const AboutSection = () => {
  return (
    <div className="flex flex-col laptop:flex-row gap-5 items-center laptop:items-start justify-center w-full laptop:ml-2 mt-4 ">
      <Image
        src="/images/about-me-picture.jpg"
        alt="Liam Kyle Viray"
        width={380}
        height={380}
        className="rounded-full shadow-lg laptop:ml-10 order-1 laptop:order-2"
      />

      <div className="flex flex-col gap-3 w-full order-2 laptop:order-1">
        <p className="col-span-2 mphone:col-span-3 text-[13px] desktop:text-[17px] mb-4">
          I'm <strong>Liam Kyle Viray</strong>, a passionate and aspiring Full
          Stack Software Engineer with great interest on <strong>React</strong>{" "}
          and <strong>Java</strong>. I graduated{" "}
          <strong>Magna Cum Laude</strong> with a Bachelor of Science in
          Computer Science from{" "}
          <strong>Pamantasan ng Lungsod ng Maynila (PLM)</strong>. I have a
          strong foundation in programming and a keen eye for detail. I enjoy
          solving complex problems and exploring new technologies. I always take
          my time to try on upskilling myself through various online
          courses/tutorials and creating personal projects to enhance my skills.
          <br />
          <br />
          Outside of coding, I enjoy playing video games, reading novels and
          manhwas, watching F1, and spending time with my{" "}
          <strong>girlfriend</strong>. Let me know if you want to connect or
          collaborate on a project! I'm always open to new opportunities and
          challenges.
        </p>
        <h2 className="text-[19px] laptop:text-[35px] tracking-tight font-extrabold">
          Skills
        </h2>

        <div className="flex flex-row flex-wrap gap-2 mb-4">
          {skills.map((skill) => (
            <SkillBadge
              key={skill.name}
              skillColor={skill.color}
              skillName={skill.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
