import React from "react";
import WaveDivider from "./ui/wave-divider";
import { Button } from "./ui/button";
import { getLocale, getTranslations } from "next-intl/server";
import { Badge } from "./ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Particles } from "./ui/shadcn-io/particles";

const Projects = async () => {
  const locale = await getLocale();
  const t = await getTranslations({ locale });
  const projects = [
    {
      title: t("projects.whett.title"),
      description: t("projects.whett.description"),
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Weather API"],
      image: "🌤️",
      github: "https://github.com/taete258/whett",
      website: "https://whett.vercel.app",
    },
    {
      title: t("projects.catExplorer.title"),
      description: t("projects.catExplorer.description"),
      tech: ["React Native", "TypeScript", "Cat API", "Expo"],
      image: "🐱",
      github: "https://github.com/taete258/cat-explorer",
      website: null,
    },
    {
      title: t("projects.portfolio.title"),
      description: t("projects.portfolio.description"),
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      image: "💼",
      github: null,
      website: null,
    },
    {
      title: t("projects.comingSoon.title"),
      description: t("projects.comingSoon.description"),
      tech: ["Coming Soon", "Stay Tuned", "More Projects"],
      image: "🚀",
      github: null,
      website: null,
    },
  ];
  return (
    <section
      id="projects"
      className="relative flex flex-col justify-center py-20 px-6  min-h-[100dvh]"
      style={{
        backgroundColor: "hsl(164 26% 17%)",
      }}
    >
      <Particles className="absolute inset-0" quantity={150} size={2.8} />
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          {t("projects.title")}{" "}
          <span className="gradient-text">{t("projects.titleHighlight")}</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {t("projects.description")}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-2xl p-4 card-glow border border-primary hover:scale-[1.02] transition-all bg-card/50 backdrop-blur-sm animate-slide-up"
            // style={{ animationDelay: `${index * 0.8}s` }}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl">{project.image}</div>
                <div className="flex gap-2">
                  {project.github && (
                    <Button
                      size="sm"
                      variant="ghost"
                      className="p-2 h-auto"
                      href={project.github}
                      target={"_blank"}
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  )}
                  {project.website && (
                    <Button
                      size="sm"
                      variant="ghost"
                      className="p-2 h-auto"
                      href={project.website}
                      target={"_blank"}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </div>
              <p className="text-xl">{project.title}</p>
              <p className="text-muted-foreground">{project.description}</p>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  shape="square"
                  className="rounded-2xl px-3 py-1  border-primary/30 bg-primary/5"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
      <WaveDivider nextSectionColor="hsl(180 10% 10%)" />
    </section>
  );
};

export default Projects;
