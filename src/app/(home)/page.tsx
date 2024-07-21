import { HeroSection } from "@/components/ui/hero-section/hero-section";
import ProjectCardWrapper from "@/components/ui/projects/project-card";

export default function Home() {
  return (
    <section className="min-w-full min-h-screen flex flex-col items-center justify-center gap-16 rounded-[100px] bg-zinc-200 dark:bg-zinc-800 pb-12">
      <HeroSection />
      <ProjectCardWrapper />
    </section>
  );
}
