import SkillCard, { SkillCardProps } from "@/components/skill-card";
import Link from "next/link";
import React from "react";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiBitbucket,
  SiCss3,
  SiGit,
  SiGithub,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiJira,
  SiNextdotjs,
  SiNodedotjs,
  SiPostman,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

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

export default function Page() {
  return (
    <div className="w-full h-full flex  flex-col justify-center  space-y-16">
      {/* About Me Section */}
      <div className="space-y-4">
        <h1 className="text-5xl font-bold">About Me</h1>
        <p>
          {
            "Hi, My name is Ratchanon Pheungta,But you can call me Tae, I'm a passionate "
          }
          <span className="text-primary font-semibold text-lg">
            {"Front-End Web Developer"}
          </span>
          {" and "}
          <span className="text-primary font-semibold text-lg">
            {"Mobile Developer"}
          </span>
          {
            " based in Thailand. With a Bachelor's degree in Software Engineering from Burapha University, which I obtained in 2020, I have honed my skills in crafting exceptional digital experiences. From building intuitive and responsive web interfaces to developing seamless mobile applications, I thrive on combining technical expertise with creative problem-solving to deliver engaging and user-friendly solutions."
          }
        </p>

        <p>
          {"Now, I am "}
          <span className="text-primary font-semibold text-lg">{"open"}</span>
          {
            " to new collaborations or work where I can contribute and grow. Connect with me. "
          }
          <Link href={"/contacts"} className="hover:underline text-primary ">
            {" Click here "}
          </Link>
        </p>
      </div>

      {/* Skills Section */}
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

      {/* Tools */}
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
    </div>
  );
}
