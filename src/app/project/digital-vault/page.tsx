import vault from "@/lib/vault";
import ProjectHeader from "@/components/ui/projects/project-page/header";
import ImpactComponent from "@/components/ui/projects/project-page/impact";
import { Metadata } from "next";
import StrategicVisionComponent from "@/components/ui/projects/project-page/strategic-vision";
import Divider from "@/components/ui/projects/project-page/divider";
import ProblemComponent from "@/components/ui/projects/project-page/problem";
import SolutionComponent from "@/components/ui/projects/project-page/solution";
import Discovery from "@/components/ui/projects/project-page/discovery";
import HighFidelity from "@/components/ui/projects/project-page/high-fildelity";
import Learnings from "@/components/ui/projects/project-page/learnings";
import NextSteps from "@/components/ui/projects/project-page/next-steps"
import IdeatingSolutions from "@/components/ui/projects/project-page/ideating-solutions";
import Constraints from "@/components/ui/projects/project-page/constraints";
import { NavigationProvider } from "@/context/NavigationContext";
import NavigateButton from "@/hooks/useNavigation";

export const metadata: Metadata = {
    title: "Digital Vault | Projects | Matt Teixeira",
};

export default function VaultPage() {
    const header = vault.header;

    const ids = [
        { id: "header", name: "Header" },
        { id: "impact", name: "Impact" },
        { id: "strategic-vision", name: "Strategic Vision" },
        { id: "problem", name: "Problem" },
        { id: "solution", name: "Solution" },
        { id: "discovery", name: "Discovery" },
        { id: "ideating-solutions", name: "Ideating Solutions" },
        { id: "constraints", name: "Constraints" },
        { id: "high-fidelity", name: "High Fidelity" },
        { id: "learnings", name: "Learnings" },
        { id: "next-steps", name: "Next Steps" },
    ];

    return (
        <NavigationProvider>
            <section className="min-w-full min-h-screen flex flex-col items-center justify-center gap-16 rounded-[100px] bg-zinc-200 dark:bg-zinc-800 pb-12">
            <NavigateButton ids={ids} />
                <ProjectHeader header={header} width={400} height={400} />
                <ImpactComponent copy={Object.values(vault.impact)} />
                <StrategicVisionComponent
                    sectionHeading={vault.strategicVision.sectionHeading}
                    title={vault.strategicVision.title}
                    image={vault.strategicVision.image}
                />
                <Divider />
                <ProblemComponent
                    sectionHeading={vault.problem.sectionHeading}
                    title={vault.problem.title}
                    body1={vault.problem.body1}
                    body2={vault.problem.body2}
                    image={vault.problem.image}
                />
                <Divider />
                <SolutionComponent
                    sectionHeading={vault.solution.sectionHeading}
                    title={vault.solution.title}
                    solution1={vault.solution.solution1}
                    solution2={vault.solution.solution2}
                />
                <Divider />
                <Discovery
                    sectionHeading={vault.discovery.sectionHeading}
                    title={vault.discovery.title}
                    subTitle={vault.discovery.subTitle}
                    subSubTitle1={vault.discovery.goals}
                    image={vault.discovery.image}
                    findings={vault.discovery.findings}
                />
                <Divider />
                <IdeatingSolutions
                    sectionHeading={vault.ideatingSolutions.sectionHeading}
                    title={vault.ideatingSolutions.title}
                    body1={vault.ideatingSolutions.body1}
                    image1={vault.ideatingSolutions.image1}
                    body2={vault.ideatingSolutions.body2}
                    image2={vault.ideatingSolutions.image2}
                    body3={vault.ideatingSolutions.body3}
                />
                <Divider />
                <Constraints
                    sectionHeading={vault.constraints.sectionHeading}
                    title={vault.constraints.title}
                    body1={vault.constraints.body1}
                    body2={vault.constraints.body2}
                    body3={vault.constraints.body3}
                />
                <Divider />
                <HighFidelity
                    sectionHeading={vault.highFidelity.sectionHeading}
                    title={vault.highFidelity.title}
                    image={vault.highFidelity.image}
                />
                <Divider />
                <Learnings
                    sectionHeading={vault.learnings.sectionHeading}
                    title={vault.learnings.title}
                    array={vault.learnings.array}
                />
                <Divider />
                <NextSteps
                    title={vault.nextSteps.title}
                    subTitle={vault.nextSteps.subTitle}
                    subSubTitle={vault.nextSteps.subSubTitle}
                    body={vault.nextSteps.body}
                />
            </section>
        </NavigationProvider>
    );
}