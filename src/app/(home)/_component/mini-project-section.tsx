import Image, { StaticImageData } from "next/image";
import React from "react";
import WhettImage from "@images/whett-web-screen.png";
import CatExImage from "@images/cat-explorer-screen.png";
import Link from "next/link";
import { SiGithub } from "react-icons/si";

type ProjectType = {
  title: string;
  description: string;
  github: string;
  link?: string;
  previewImage: {
    source: StaticImageData;
    alt: string;
  };
};
const projectDataList: ProjectType[] = [
  {
    title: "Whett",
    description:
      "A web application create with next.js that allows you to search and show some data about weather.",
    github: "https://github.com/taete258/nextjs-whett-project",
    link: "https://nextjs-test-psi-mocha.vercel.app",
    previewImage: {
      source: WhettImage,
      alt: "Whett",
    },
  },
  {
    title: "Cat Explorer",
    description:
      "A mobile application create with react native that to show details about cats.",
    github: "https://github.com/taete258/cat-explorer",
    previewImage: {
      source: CatExImage,
      alt: "Cat Explorer",
    },
  },
];
const MiniProjectSection: React.FC = () => {
  return (
    <div className="space-y-8 max-w-5xl mx-auto my-10">
      <h1 className="text-5xl font-bold">My Mini Projects</h1>
      <div className="flex flex-row flex-wrap items-center justify-around w-full gap-6">
        {projectDataList.map((item, index) => (
          <div key={index} className="card bg-base-100 shadow-lg">
            <div className="card-body flex-row flex-wrap items-center justify-center gap-6  p-5  sm:p-8">
              <div className="flex flex-row gap-x-2 max-w-[380px]">
                <Image
                  src={item.previewImage.source}
                  alt={item.previewImage.alt}
                  quality={100}
                  className={`object-contain h-[220px] shadow-md bg-gray-200 rounded-md`}
                />
              </div>

              <div className="flex flex-1 flex-col sm:min-w-96 gap-y-3">
                <h1 className="font-bold text-2xl text-primary">
                  {item.title}
                </h1>
                <p className="text-lg">{item.description}</p>
                <div className="card-actions justify-end">
                  {item.github && (
                    <Link
                      className="btn btn-primary text-white"
                      href={item.github}
                      target="_blank"
                    >
                      <SiGithub size={28} />
                    </Link>
                  )}
                  {item.link && (
                    <Link
                      className="btn btn-primary text-white"
                      href={item.link}
                      target="_blank"
                    >
                      Go to Site
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(MiniProjectSection);
