"use client";
import Image from "next/image";
import undawnSvg from "@images/undraw_programming.svg";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import MiniProjectSection from "./_component/mini-project-section";

export default function Page() {
  return (
    <div className="w-full h-full flex  flex-col justify-center space-y-10">
      <div className="flex flex-row flex-wrap-reverse items-center justify-center">
        <div className="sm:min-w-[450px]">
          <TypeAnimation
            sequence={["Hello There!", 1000]}
            speed={30}
            repeat={Infinity}
            className="text-5xl font-bold"
          />

          <p className="md:py-6 py-3 text-2xl md:text-4xl">
            {"I'm"} <span className="text-primary">{"Ratchanon Pheungta"}</span>
          </p>

          <p className="text-2xl md:text-4xl">Web and Mobile Developer</p>
          <Link href={"/about-me"} className="btn btn-primary mt-6 text-white">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
            </span>
            About Me
          </Link>
        </div>

        <Image
          priority
          src={undawnSvg}
          alt="Programmer"
          className="relative w-full max-w-[450px] object-contain "
        />
      </div>
      <MiniProjectSection />
    </div>
  );
}
