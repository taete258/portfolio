"use client";
import React from "react";
import { motion } from "framer-motion";
import WaveDivider from "./ui/wave-divider";
import { Badge } from "./ui/badge";
import { getLocale, getTranslations } from "next-intl/server";
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
          className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
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
              <motion.div
                key={skill}
                variants={itemVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="group"
              >
                <div className="flex flex-col items-center justify-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/10">
                  <motion.div
                    className="mb-3"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {IconComponent && (
                      <IconComponent className="w-12 h-12 text-white group-hover:text-blue-400 transition-colors duration-300" />
                    )}
                  </motion.div>
                  <h3 className="text-sm font-medium text-white/90 group-hover:text-white transition-colors duration-300 text-center">
                    {skill}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
      <WaveDivider nextSectionColor="hsl(180 50% 22%)" />
    </section>
  );
};

export default Skills;
