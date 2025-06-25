"use client";

import Image from "next/image";
import Heading from "./sub/Heading";
import Achivements from "./sub/Achivements";
import {
  aboutData,
  aboutText,
  downloadIcon,
  arrowIcons,
  arrowLeftIcon,
} from "@/assets";

const About = () => {
  return (
    <div className="min-h-screen px-96 flex flex-col items-center justify-center">
      <Heading text={"About Me"} />
      <div className="w-full flex items-center justify-between md:justify-center">
        <Image
          src={"/about-me.png"}
          alt="About Image"
          width={400}
          height={400}
          className="w-[300px] lg:w-[200px]"
        />
        <div className="relative max-w-[800px] rounded-xl bg-zinc-100 p-5 text-justify shadow-lg shadow-zinc-500/50 dark:bg-zinc-800 dark:text-zinc-200">
          <span className="absolute -left-5 top-20 scale-[2.5] text-zinc-100">
            {arrowLeftIcon}
          </span>
          <p className="text-lg font-light text-gray-700 first-letter:pl-3 dark:text-zinc-200 lg:text-[16px] sm:text-[14px]">
            {aboutText}
          </p>
          <a
            href="/CV_Alif.pdf"
            download=""
            className="w-max flex items-center gap-x-2 mt-6 rounded-full border-gray-300 bg-red-400 px-3 py-2 font-light text-white hover:bg-red-500 transition-colors"
          >
            <span>Download CV</span>
            <span className="text-xl">{downloadIcon}</span>
          </a>
        </div>
      </div>
      <div className="mt-20 w-full flex flex-wrap items-center justify-between gap-x-7 gap-y-10">
        <Achivements />
      </div>
    </div>
  );
};

export default About;
