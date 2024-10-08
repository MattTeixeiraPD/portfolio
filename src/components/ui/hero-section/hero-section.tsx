'use client'
import React from "react";
import HeroText from "@/components/ui/hero-section/text";
import HeroButtons from "@/components/ui/hero-section/hero-buttons";
import AchievementSquareWrapper from "@/components/ui/achievement-square";

export function HeroSection() {
  return (
    <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.3] bg-grid-small-black/[0.3] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="min-h-[80vh] w-full relative flex flex-row gap-10 items-center justify-center px-8 md:px-20">
        <div className="w-full h-full flex flex-col items-center justify-center gap-10">
          <HeroText />

          <HeroButtons />
        </div>

      </div>

    </div>
  );
};