"use client";

import Image from "next/image";
import { heroIcons } from "@/assets";

const Hero = () => {
  return <div className="h-screen grid place-items-center">
    <div>
      <div className="flex flex-col items-center justify-center gap-y-3 font-light capitalize">
        <div className="flex items-center justify-center">
          <Image
            src={"/person.jpeg"}
            alt="Person Image"
            width={400}
            height={400}
            priority={true}
            className="h-auto w-[150px]"
          />
          <span className="absolute text-3xl font-semibold text-white">Hi</span>
          </div>
          <h1 className="text-center text-3xl font-bold tracking-wider text-gray-500">
            My Name Is Mehedi Hasan Alif &
          </h1>
          <p className="text-lg tracking-wider text-gray-700">
            I like programming 🤗{" "}
          </p>
        </div>
        <div className="mt-8 flex justify-center gap-x-10 text-3xl text-yellow-600">
          {heroIcons.map((icon,i)=>(
            <a href="#" key={i} className="rounded-lg hover:bg-red-400 hover:text-white transition-colors">
              {icon}
            </a>
          ))}
        </div>
        <a
          href="#"
          className="mx-auto mt-7 block w-max rounded-lg bg-red-400 px-3 py-1 font-light capitalize tracking-wider text-white hover:bg-red-500 transition-colors"
        >
          Talk to me
        </a>
      </div>
    </div>
};

export default Hero;
