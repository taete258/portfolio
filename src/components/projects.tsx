import React from "react";
import WaveDivider from "./ui/wave-divider";
import { Button } from "./ui/button";
import { getLocale, getTranslations } from "next-intl/server";
import { Badge } from "./ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = async () => {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: "Index" });
  const projects = [
    {
      title: t("projects.ecommerce.title"),
      description: t("projects.ecommerce.description"),
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: "🛍️",
    },
    {
      title: t("projects.taskManagement.title"),
      description: t("projects.taskManagement.description"),
      tech: ["Next.js", "TypeScript", "Prisma", "WebSockets"],
      image: "📋",
    },
    {
      title: t("projects.aiContent.title"),
      description: t("projects.aiContent.description"),
      tech: ["React", "Python", "OpenAI API", "MongoDB"],
      image: "🤖",
    },
    {
      title: t("projects.realEstate.title"),
      description: t("projects.realEstate.description"),
      tech: ["Vue.js", "Node.js", "MySQL", "AWS"],
      image: "🏠",
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
      {/* <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-12">Projects</h2>
      </div> */}
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          {t("projects.title")}{" "}
          <span className="gradient-text">{t("projects.titleHighlight")}</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {t("projects.description")}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className="rounded-2xl p-4 card-glow border border-primary hover:scale-[1.02] transition-all bg-card/50 backdrop-blur-sm animate-slide-up"
            // style={{ animationDelay: `${index * 0.8}s` }}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl">{project.image}</div>
                <div className="flex gap-2">
                  <Button size="sm" variant="ghost" className="p-2 h-auto">
                    <Github className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="ghost" className="p-2 h-auto">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
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
      <div className="text-center mt-12">
        <Button
          variant="outline"
          size="lg"
          className="border-primary/50 hover:bg-primary/10"
        >
          {t("projects.viewAll")}
        </Button>
      </div>
      <WaveDivider nextSectionColor="hsl(180 10% 10%)" />
    </section>
  );
};

export default Projects;
