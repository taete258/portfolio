import AboutMe from "@/components/about-me";
import { Particles } from "@/components/ui/shadcn-io/particles";
import { getTranslations } from "next-intl/server";
import dynamic from "next/dynamic";

type PageProps = {
  params: Promise<{ locale: string }>;
};

const Skills = dynamic(() => import("@/components/skills"), {
  ssr: true,
  loading: () => <div>Loading...</div>,
});

const Projects = dynamic(() => import("@/components/projects"), {
  ssr: true,
  loading: () => <div>Loading...</div>,
});

const Education = dynamic(() => import("@/components/education"), {
  ssr: true,
  loading: () => <div>Loading...</div>,
});

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Index" });
  return (
    <div className="min-h-[100dvh]  bg-background px-0 sm:px-6 ">
      <Particles
        className="absolute inset-0"
        quantity={100}
        staticity={30}
        ease={60}
        size={1.8}
        color="accent"
      />
      <AboutMe />
      <Skills />
      <Projects />
      <Education />

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
