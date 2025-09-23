import AboutMe from "@/components/about-me";
import Footer from "@/components/footer";
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
    <div className="min-h-[100dvh]  bg-background px-0 ">
      <AboutMe />
      <Skills />
      <Projects />
      <Education />

      {/* <Hero />
        
  
        <Contact /> */}
    </div>
  );
}
