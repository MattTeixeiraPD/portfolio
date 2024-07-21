import theAustralian from "@/lib/the-australian";
import ProjectHeader from "@/components/ui/projects/project-page/header";
import ImpactComponent from "@/components/ui/projects/project-page/impact";
import { Metadata } from "next";
import Divider from "@/components/ui/projects/project-page/divider";
import ProblemComponent from "@/components/ui/projects/project-page/problem";
import SolutionComponent from "@/components/ui/projects/project-page/solution";
import Learnings from "@/components/ui/projects/project-page/learnings";
import NextSteps from "@/components/ui/projects/project-page/next-steps"
import NDA from "@/components/ui/projects/project-page/nda";
import { NavigationProvider } from "@/context/NavigationContext";
import NavigateButton from "@/hooks/useNavigation";

export const metadata: Metadata = {
    title: "The Australian",
};

const ids = [
    { id: "impact", name: "Impact" },
    { id: "problem", name: "Problem" },
    { id: "solution", name: "Solution" },
    { id: "learnings", name: "Learnings" },
    { id: "nda", name: "NDA" },
    { id: "next-steps", name: "Next Steps" },
];

export default function TheAustralianPage() {
    const header = theAustralian.header;
    return (
        <NavigationProvider>
            <section className="min-w-full min-h-screen flex flex-col items-center justify-center gap-16 rounded-[100px] bg-zinc-200 dark:bg-zinc-800 pb-12">
                <NavigateButton ids={ids} />
                <ProjectHeader header={header} width={250} height={400} />
                <ImpactComponent copy={Object.values(theAustralian.impact)} />
                <ProblemComponent
                    sectionHeading={theAustralian.problem.sectionHeading}
                    title={theAustralian.problem.title}
                    body1={theAustralian.problem.body1}
                    body2={theAustralian.problem.body2}
                    body3={theAustralian.problem.body3}
                    image={theAustralian.problem.image}
                />
                <Divider />
                <SolutionComponent
                    sectionHeading={theAustralian.solution.sectionHeading}
                    title={theAustralian.solution.title}
                    solution1={theAustralian.solution.solution1}
                />
                <Divider />
                <Learnings
                    sectionHeading={theAustralian.learnings.sectionHeading}
                    title={theAustralian.learnings.title}
                    array={theAustralian.learnings.array}
                />
                <Divider />
                <NDA />
                <Divider />
                <NextSteps
                    title={theAustralian.nextSteps.title}
                    subTitle={theAustralian.nextSteps.subTitle}
                    subSubTitle={theAustralian.nextSteps.subSubTitle}
                    body={theAustralian.nextSteps.body}
                />
            </section>
        </NavigationProvider>
    );
}