"use client";
import { motion } from "framer-motion";
import { Dot, School, Star } from "lucide-react";
import React, { useMemo } from "react";
import TypingAnimation from "./ui/typing-animation";
import { useTranslations } from "next-intl";
import { Badge } from "./ui/badge";
import WaveDivider from "./ui/wave-divider";

const Education = () => {
  const t = useTranslations();
  const educationHistory = useMemo(() => {
    return t.raw("education.history") as Array<{
      school: string;
      degree: string;
      period: string;
      gpa: string;
      description: string;
    }>;
  }, []);
  return (
    <section
      id="education"
      className="relative flex flex-col justify-center py-20 px-6 min-h-[100dvh]"
      style={{
        backgroundColor: "hsl(180 50% 22%)",
      }}
    >
      <div className="max-w-6xl mx-auto w-auto p-0">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            {t("education.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("education.description")}
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* The vertical timeline bar */}
          <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 h-full w-0.5" />

          {educationHistory.map((item, index) => (
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
                  <div className="relative p-6 border  border-primary bg-card rounded-2xl">
                    {/* School icon positioned at top center of card */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 flex items-center justify-center w-10 h-10 bg-primary rounded-full ring-4 card-glow">
                      <School className="text-background" size={20} />
                    </div>

                    <div className="pt-4 space-y-4">
                      <center className="space-y-3">
                        <h3 className="text-xl font-bold mt-1 text-foreground">
                          {item.degree}
                        </h3>
                        <p className="text-muted-foreground mt-1 !text-lg text-primary">
                          {item.school}{" "}
                          <Dot className="inline-block" size={36} />{" "}
                          {item.period}
                        </p>

                        <Badge
                          variant="outline"
                          shape="square"
                          className="bg-foreground text-background text-lg rounded-2xl"
                        >
                          <Star className="inline-block mx-2" size={20} />
                          {item.gpa}
                        </Badge>
                      </center>

                      <div className="mt-4 pt-4 border-t border-primary/20">
                        <p className="text-muted-foreground text-sm leading-relaxed text-center">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <WaveDivider nextSectionColor="hsl(180 50% 15%)" />
    </section>
  );
};

export default Education;
