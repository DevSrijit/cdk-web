"use client";
import React from "react";
import { Spotlight } from "@/components/ui/Spotlight";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data/nav";
import { SparklesCore } from "@/components/ui/sparkles";
import { HeroScrollDemo } from "@/components/HeroScroll";
import { InfiniteMovingCardsDemo } from "@/components/Testimonials";
import { TypewriterEffectSmoothDemo } from "@/components/Typewriter";
import { WavyBackground } from "@/components/ui/wavy-background";

export default function SpotlightPreview() {
  return (
    <>
      <div id="main-section" className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <FloatingNav navItems={navItems} className="md:sticky md:top-0"/>
        <div className="w-full absolute inset-0 h-screen">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(800px_800px_at_top,transparent_20%,white)]"></div>
        </div>
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            CodeDay Kolkata
            <br /> is back.
          </h1>
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            CodeDay Kolkata is Kolkata's largest hackathon for students. We made
            our debut in 2023. This year, we are back with a bang. Join us for a
            day of coding, learning, and fun.
          </p>
        </div>
      </div>
      <HeroScrollDemo />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Hear what others
            <br />experienced.
          </h1>
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            CodeDay Kolkata 2023 was attended by some of the brightest minds in the city. Here's what they had to say about their experience.
          </p>
      </div>
      <InfiniteMovingCardsDemo />
      <div>
      <WavyBackground containerClassName="relative">
      <TypewriterEffectSmoothDemo />
      </WavyBackground>
      </div>
    </>
  );
}
