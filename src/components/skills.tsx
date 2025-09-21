import React from "react";
import WaveDivider from "./ui/wave-divider";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative flex flex-col justify-center py-24 px-6 min-h-[100dvh]"
      style={{
        backgroundColor: "hsl(164 26% 17%)",
      }}
    >
      <div className="max-w-6xl mx-auto w-auto p-0">
        <h2 className="text-4xl font-bold mb-12">Skills</h2>
      </div>
      <WaveDivider nextSectionColor="hsl(180 50% 24%)" />
    </section>
  );
};

export default Skills;
