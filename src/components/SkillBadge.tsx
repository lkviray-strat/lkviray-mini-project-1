import React from "react";
import { Badge } from "./ui/badge";

type SkillBadgeProps = {
  skillName: string;
  skillColor: string;
};

export const SkillBadge = ({ skillName, skillColor }: SkillBadgeProps) => {
  return (
    <Badge
      style={{ backgroundColor: skillColor, transition: "filter 0.2s" }}
      className="text-[14px] tablet:text-[15px] px-4 py-1 cursor-pointer hover:brightness-70"
      asChild
    >
      <span
        className={`${skillName.toLowerCase() == "javascript" ? "text-black" : "text-white"} font-medium`}
      >
        {skillName}
      </span>
    </Badge>
  );
};

export default SkillBadge;
