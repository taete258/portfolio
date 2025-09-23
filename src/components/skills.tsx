import React from "react";
import WaveDivider from "./ui/wave-divider";
import { getLocale, getTranslations } from "next-intl/server";

const Skills = async () => {
  const locale = await getLocale();
  const t = await getTranslations({ locale });

  return (
    <section
      id="skills"
      className="relative flex flex-col justify-center py-24 px-6 min-h-[100dvh]"
      style={{
        backgroundColor: "hsl(180 50% 24%)",
      }}
    >
      <div className="text-center mb-16 animate-fade-in max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          {t("skills.title")}{" "}
          <span className="gradient-text">{t("skills.titleHighlight")}</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {t("skills.description")}
        </p>
      </div>
      <WaveDivider nextSectionColor="hsl(164 26% 17%)" />
    </section>
  );
};

export default Skills;
