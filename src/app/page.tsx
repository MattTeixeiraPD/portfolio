import { HeroSection } from "@/components/ui/hero-section/hero-section";
import dynamic from "next/dynamic";

const ProjectCardWrapper = dynamic(() => import("@/components/ui/projects/project-card"));

export default function Home() {
  return (
    <section className="min-w-full min-h-screen flex flex-col items-center justify-center gap-16 pb-12">
      <HeroSection />
      <ProjectCardWrapper />
    </section>
  );
}
