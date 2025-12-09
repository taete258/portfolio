"use client";
import React from "react";
import { motion } from "framer-motion";
import WaveDivider from "./ui/wave-divider";
import SkillCard from "./ui/skill-card";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiGit,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiGo,
  SiGraphql,
  SiDocker,
} from "react-icons/si";
import { useTranslations } from "next-intl";

const Skills = () => {
  const t = useTranslations();

  const skillIcons = {
    "HTML": SiHtml5,
    "CSS": SiCss3,
    "JavaScript": SiJavascript,
    "Golang": SiGo,
    "GraphQL": SiGraphql,
    "Docker": SiDocker,
    "React.js": SiReact,
    "Next.js": SiNextdotjs,
    "TypeScript": SiTypescript,
    "Tailwind CSS": SiTailwindcss,
    "Node.js": SiNodedotjs,
    "Git": SiGit,
    "React Native": SiReact,
    "Express.js": SiExpress,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  };

  return (
    <section
      id="skills"
      className="relative flex flex-col justify-center py-24 px-6 min-h-[100dvh]"
      style={{
        backgroundColor: "hsl(180 50% 12%)",
      }}
    >
      <div className="text-center mb-16 animate-fade-in max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {t("skills.title")}{" "}
          <span className="gradient-text">{t("skills.titleHighlight")}</span>
        </motion.h2>
        <motion.p
          className="text-xl text-muted-foreground max-w-md lg:max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {t("skills.description")}
        </motion.p>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {Object.keys(skillIcons).map((skill: string, index: number) => {
            const IconComponent = skillIcons[skill as keyof typeof skillIcons];
            return (
              <SkillCard
                key={skill}
                skill={skill}
                IconComponent={IconComponent}
                variants={itemVariants}
              />
            );
          })}
        </motion.div>
      </div>
      <WaveDivider nextSectionColor="hsl(180 50% 22%)" />
    </section>
  );
};

export default Skills;
