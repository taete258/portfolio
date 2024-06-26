import Link from "next/link";
import React from "react";
import SkillSection from "./_components/skills-section";
import ToolsSection from "./_components/tools-section";
import WorkExperienceSection from "./_components/work-experience-section";

export default function Page() {
  return (
    <div className="w-full h-full flex flex-col justify-center  space-y-16">
      {/* About Me Section */}
      <div className="p-8 w-full">
        <div className="space-y-4 max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold">About Me</h1>
          <p>
            {
              "Hi, My name is Ratchanon Pheungta,But you can call me Tae, I'm a passionate "
            }
            <span className="text-primary font-semibold text-lg">
              {"Front-End Web Developer"}
            </span>
            {" and "}
            <span className="text-primary font-semibold text-lg">
              {"Mobile Developer"}
            </span>
            {
              " based in Thailand. With a Bachelor's degree in Software Engineering from Burapha University, which I obtained in 2020, I have honed my skills in crafting exceptional digital experiences. From building intuitive and responsive web interfaces to developing seamless mobile applications, I thrive on combining technical expertise with creative problem-solving to deliver engaging and user-friendly solutions."
            }
          </p>

          <p>
            {"Now, I am "}
            <span className="text-primary font-semibold text-lg">{"open"}</span>
            {
              " to new collaborations or work where I can contribute and grow. Connect with me. "
            }
            <Link href={"/contacts"} className="hover:underline text-primary ">
              {" Click here "}
            </Link>
          </p>
        </div>
      </div>

      {/* experience */}
      <div className="bg-base-200 p-8 w-full ">
        <div className="max-w-4xl mx-auto">
          <WorkExperienceSection />
        </div>
      </div>

      {/* Skills Section */}
      <div className="p-8 w-full ">
        <div className="max-w-4xl mx-auto">
          <SkillSection />
        </div>
      </div>

      {/* Tools */}
      <div className="bg-base-200 p-8 w-full ">
        <div className="max-w-4xl mx-auto">
          <ToolsSection />
        </div>
      </div>
    </div>
  );
}
