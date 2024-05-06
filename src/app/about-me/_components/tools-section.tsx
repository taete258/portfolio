import React from "react";
import {
  SiBitbucket,
  SiGit,
  SiGithub,
  SiJira,
  SiPostman,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import SkillCard, { SkillCardProps } from "@/components/skill-card";

const tools: SkillCardProps[] = [
  {
    icon: <SiGit />,
    name: "Git",
  },
  {
    icon: <SiGithub />,
    name: "GitHub",
  },
  {
    icon: <SiBitbucket />,
    name: "Bitbucket",
  },
  {
    icon: <SiJira />,
    name: "Jira",
  },
  {
    icon: <TbBrandVscode />,
    name: "VS Code",
  },
  {
    icon: <SiPostman />,
    name: "Postman",
  },
];
const ToolsSection: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-5xl font-bold">Tools</h1>

      <div className="grid grid-cols-3 gap-3 md:grid-cols-4 md:gap-6">
        {tools.map((item, i) => (
          <React.Fragment key={i}>
            <SkillCard {...item} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default React.memo(ToolsSection);
