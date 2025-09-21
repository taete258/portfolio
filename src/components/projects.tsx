import React from "react";
import WaveDivider from "./ui/wave-divider";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative flex flex-col justify-center py-20 px-6  min-h-[100dvh]"
      style={{
        backgroundColor: "hsl(180 50% 24%)",
      }}
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-12">Projects</h2>
      </div>
      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto w-full">
        <div className="card-glow">
          <h3 className="text-2xl font-bold mb-4">Project 1</h3>
        </div>
        <div className="card-glow">
          <h3 className="text-2xl font-bold mb-4">Project 2</h3>
        </div>
        <div className="card-glow">
          <h3 className="text-2xl font-bold mb-4">Project 3</h3>
        </div>
        <div className="card-glow">
          <h3 className="text-2xl font-bold mb-4">Project 4</h3>
        </div>
      </div>
      <WaveDivider nextSectionColor="hsl(180 10% 10%)" />
    </section>
  );
};

export default Projects;
