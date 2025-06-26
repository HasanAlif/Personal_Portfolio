'use client'
import About from "@/components/About";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Experience/>
      <Skills/>
    </div>
  );
}
