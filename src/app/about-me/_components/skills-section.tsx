import SkillCard, { SkillCardProps } from "@/components/skill-card";
import React from "react";

import {
  SiCss3,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
const skills: SkillCardProps[] = [
  {
    icon: <SiHtml5 />,
    name: "HTML",
  },
  {
    icon: <SiCss3 />,
    name: "CSS",
  },
  {
    icon: <SiJavascript />,
    name: "JavaScript",
  },
  {
    icon: <SiTypescript />,
    name: "TypeScript",
  },
  {
    icon: <SiReact />,
    name: "React JS",
  },
  {
    icon: <SiReact />,
    name: "React Native",
  },
  {
    icon: <SiNodedotjs />,
    name: "Node JS",
  },
  { icon: <SiNextdotjs />, name: "Next JS" },
  {
    icon: <SiTailwindcss />,
    name: "Tailwind CSS",
  },
  {
    icon: <SiGraphql />,
    name: "GraphQL",
  },
];
const SkillSection: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-5xl font-bold">Skills</h1>

      <div className="grid grid-cols-3 gap-3 md:grid-cols-4 md:gap-6">
        {skills.map((item, i) => (
          <React.Fragment key={i}>
            <SkillCard {...item} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default React.memo(SkillSection);
