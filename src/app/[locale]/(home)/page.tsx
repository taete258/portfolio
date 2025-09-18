import AboutMe from "@/components/about-me";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import { getTranslations } from "next-intl/server";

type PageProps = {
  params: Promise<{ locale: string }>;
};
export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Index" });
  return (
    <div className="min-h-screen bg-background">
      <AboutMe />
      <Skills />
      <Projects />
      {/* <Hero />
        
  
        <Contact /> */}

      {/* Footer */}
      {/* <footer className="border-t border-border/50 py-8 px-6 bg-secondary/20">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>{t("title")}</p>
        </div>
      </footer> */}
    </div>
  );
}
