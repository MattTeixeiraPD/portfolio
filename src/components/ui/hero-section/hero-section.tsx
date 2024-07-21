'use client'
import React from "react";
import ExternalLink from "../link";
import IconCloud from "../icon-cloud";
import Link from "next/link";
import { IconButton } from "@/components/ui/button";
import { MoveDown } from 'lucide-react';

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "miro",
  "nextdotjs",
  "firebase",
  "vercel",
  "git",
  "jira",
  "github",
  "sequel",
  "mixpanel",
  "visualstudiocode",
  "linear",
  "googleanalytics",
  "figma",
  "figjam"
];

const BodyText = () => {

  return (
    <div className="w-full mx-auto flex flex-col gap-4 items-center md:items-start justify-center md:justify-start">
      <p className="text-2xl md:text-3xl text-black dark:text-white text-left leading-relaxed">
        Product Designer by day, entrepreneur by night. Currently working at
      </p>
      <div className="flex flex-col md:flex-row gap-2 items-center justify-start">
        <ExternalLink href="https://www.linkedin.com/company/news-corp-australia">News Corp</ExternalLink>
        <p className="text-2xl md:text-3xl text-black dark:text-white text-left leading-relaxed w-fit">
          and side-hustling at
        </p>
        <ExternalLink href="https://www.capitalclimb.app/">CapitalClimb</ExternalLink>
      </div>
    </div>
  )
}

export function HeroSection() {
  return (
    <div className="min-h-[80vh] w-full relative flex flex-row gap-10 items-start justify-start md:items-center md:justify-center px-8 md:px-20">
      <div className="w-full h-full flex flex-col items-start justify-center gap-10">
        {/* Radial gradient for the container to give a faded look */}
        <div className="flex flex-col gap-2 items-start justify-center mt-16">
          <p>Hey there, I&rsquo;m</p>
          <h1 className="text-4xl sm:text-6xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 to-neutral-700 dark:from-neutral-200 dark:to-neutral-400">
            Matt Teixeira <span className="text-black dark:text-white">👋🏼</span>
          </h1>
        </div>

        <BodyText />
        <Link href="#projects" className="w-full flex justify-center md:justify-start">
          <IconButton id="projects" variant="ghost" className="text-lg md:text-xl w-fit dark:hover:bg-zinc-700" size="icon" icon={<MoveDown className="h-4 w-4" />}>
            Featured projects
          </IconButton>
        </Link>

      </div>

      <div className="w-full h-full hidden md:flex flex-col items-center justify-center">
        <IconCloud iconSlugs={slugs} />
      </div>

    </div>
  );
}