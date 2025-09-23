"use client";
import { motion } from "framer-motion";
import { Briefcase, Dot, MapPin } from "lucide-react";
import React, { useMemo } from "react";
import { useTranslations } from "next-intl";
import { Badge } from "./ui/badge";
import WaveDivider from "./ui/wave-divider";

const Experience = () => {
  const t = useTranslations();
  const experienceHistory = useMemo(() => {
    return t.raw("experience.history") as Array<{
      company: string;
      position: string;
      period: string;
      type: string;
      description: string;
      technologies: string[];
    }>;
  }, []);

  return (
    <section
      id="experience"
      className="relative flex flex-col justify-center py-20 px-6 min-h-[100dvh]"
      style={{
        backgroundColor: "hsl(180 50% 18%)",
      }}
    >
      <div className="max-w-6xl mx-auto w-auto p-0">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t("experience.title")}{" "}
            <span className="gradient-text">
              {t("experience.titleHighlight")}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("experience.description")}
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* The vertical timeline bar */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-primary/30" />

          {experienceHistory.map((item, index) => (
            <motion.div
              key={index}
              className="relative mb-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center">
                {/* Content Card */}
                <div className="w-full">
                  <div className="relative p-6 border border-primary bg-card rounded-2xl">
                    {/* Briefcase icon positioned at top center of card */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 flex items-center justify-center w-10 h-10 bg-primary rounded-full ring-4 card-glow">
                      <Briefcase className="text-background" size={20} />
                    </div>

                    <div className="pt-4 space-y-4">
                      {/* Header section */}
                      <div className="text-center space-y-3">
                        <h3 className="text-xl font-bold text-foreground">
                          {item.position}
                        </h3>
                        <div className="flex items-center justify-center text-primary text-lg">
                          <span>{item.company}</span>
                          <Dot className="inline-block" size={36} />
                          <span>{item.period}</span>
                        </div>
                        <Badge
                          variant="outline"
                          shape="square"
                          className="bg-accent/20 text-accent border-accent/30 text-sm rounded-2xl"
                        >
                          <MapPin className="inline-block mr-2" size={16} />
                          {item.type}
                        </Badge>
                      </div>

                      {/* Description */}
                      <div className="mt-4 pt-4 border-t border-primary/20">
                        <p className="text-muted-foreground text-sm leading-relaxed text-center mb-4">
                          {item.description}
                        </p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 justify-center">
                          {item.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              shape="square"
                              className="rounded-2xl px-3 py-1 border-primary/30 bg-primary/5 text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <WaveDivider nextSectionColor="hsl(180 50% 22%)" />
    </section>
  );
};

export default Experience;
