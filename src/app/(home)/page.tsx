"use client";
import Image from "next/image";
import undawnSvg from "@images/undraw_programming.svg";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
export default function Page() {
  return (
    <div className="w-full h-full flex  flex-col justify-center">
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
          <Link href={"/about-me"} className="btn btn-primary mt-6">
            About Me
          </Link>
        </div>
        <Image
          priority
          src={undawnSvg}
          alt="Programmer"
          className="w-full max-w-[450px] object-contain my-10"
        />
      </div>
    </div>
  );
}
