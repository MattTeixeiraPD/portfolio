import partnerships from "@/lib/partnerships";
import ProjectHeader from "@/components/ui/projects/project-page/header";
import ImpactComponent from "@/components/ui/projects/project-page/impact";
import { Metadata } from "next";
import StrategicVisionComponent from "@/components/ui/projects/project-page/strategic-vision";
import OverviewComponent from "@/components/ui/projects/project-page/overview";
import Divider from "@/components/ui/projects/project-page/divider";
import ProblemComponent from "@/components/ui/projects/project-page/problem";
import SolutionComponent from "@/components/ui/projects/project-page/solution";
import InitialThinkingComponent from "@/components/ui/projects/project-page/initial-thinking";
import TargetCustomer from "@/components/ui/projects/project-page/target-customer";
import Discovery from "@/components/ui/projects/project-page/discovery";
import ProblemStatement from "@/components/ui/projects/project-page/problem-statement";
import Wireframes from "@/components/ui/projects/project-page/wireframes";
import HighFidelity from "@/components/ui/projects/project-page/high-fildelity";
import DataPrivacy from "@/components/ui/projects/project-page/data-privacy";
import Learnings from "@/components/ui/projects/project-page/learnings";
import NextSteps from "@/components/ui/projects/project-page/next-steps"
import { NavigationProvider } from "@/context/NavigationContext";
import NavigateButton from "@/hooks/useNavigation";

export const metadata: Metadata = {
    title: "Charity Partnerships Dashboards",
};

export default function PartnershipsPage() {

    const ids = [
        { id: "impact", name: "Impact" },
        { id: "strategic-vision", name: "Strategic Vision" },
        { id: "overview", name: "Overview" },
        { id: "problem", name: "Problem" },
        { id: "solution", name: "Solution" },
        { id: "initial-thinking", name: "Initial Thinking" },
        { id: "target-customer", name: "Target Customer" },
        { id: "diving-deeper", name: "Diving Deeper" },
        { id: "problem-statement", name: "Problem Statement" },
        { id: "wireframes", name: "Wireframes" },
        { id: "high-fidelity", name: "High Fidelity" },
        { id: "data-privacy", name: "Data Privacy" },
        { id: "learnings", name: "Learnings" },
        { id: "next-steps", name: "Next Steps" },
    ];

    const header = partnerships.header;
    return (
        <NavigationProvider>
            <section className="min-w-full min-h-screen flex flex-col items-center justify-center gap-16 rounded-[100px] bg-zinc-200 dark:bg-zinc-800 pb-12">
            <NavigateButton ids={ids} />
                <ProjectHeader header={header} width={300} height={400} />
                <ImpactComponent copy={partnerships.impact} />
                <StrategicVisionComponent
                    sectionHeading={partnerships.strategicVision.sectionHeading}
                    title={partnerships.strategicVision.title}
                    image={partnerships.strategicVision.image}
                />
                <Divider />
                <OverviewComponent
                    sectionHeading={partnerships.overview.sectionHeading}
                    title={partnerships.overview.title}
                    body1={partnerships.overview.body1}
                    body2={partnerships.overview.body2}
                    image={partnerships.overview.image}
                />
                <Divider />
                <ProblemComponent
                    sectionHeading={partnerships.problem.sectionHeading}
                    title={partnerships.problem.title}
                    body1={partnerships.problem.body1}
                    body2={partnerships.problem.body2}
                    image={partnerships.problem.image}
                />
                <Divider />
                <SolutionComponent
                    sectionHeading={partnerships.solution.sectionHeading}
                    title={partnerships.solution.title}
                    solution1={partnerships.solution.solution1}
                    solution2={partnerships.solution.solution2}
                />
                <Divider />
                <InitialThinkingComponent
                    sectionHeading={partnerships.initialThinking.sectionHeading}
                    title={partnerships.initialThinking.title}
                    body1={partnerships.initialThinking.body1}
                    body2={partnerships.initialThinking.body2}
                    subTitle1={partnerships.initialThinking.subTitle1}
                    body3={partnerships.initialThinking.body3}
                    body4={partnerships.initialThinking.body4}
                    image1={partnerships.initialThinking.image1}
                    image2={partnerships.initialThinking.image2}
                    subTitle2={partnerships.initialThinking.subTitle2}
                    body5={partnerships.initialThinking.body5}
                    image3={partnerships.initialThinking.image3}
                />
                <Divider />
                <TargetCustomer
                    sectionHeading={partnerships.targetCustomer.sectionHeading}
                    title={partnerships.targetCustomer.title}
                    body1={partnerships.targetCustomer.body1}
                    body2={partnerships.targetCustomer.body2}
                    image1={partnerships.targetCustomer.image1}
                    image2={partnerships.targetCustomer.image2}
                />
                <Divider />
                <Discovery
                    sectionHeading={partnerships.divingDeeper.sectionHeading}
                    title={partnerships.divingDeeper.title}
                    subTitle1={partnerships.divingDeeper.subTitle1}
                    subSubTitle1={partnerships.divingDeeper.subSubTitle1}
                    subSubTitle2={partnerships.divingDeeper.subSubTitle2}
                    subTitle2={partnerships.divingDeeper.subTitle2}
                />
                <Divider />
                <ProblemStatement
                    sectionHeading={partnerships.problemStatement.sectionHeading}
                    title={partnerships.problemStatement.title}
                    image={partnerships.problemStatement.image}
                    hmw={partnerships.problemStatement.hmw}
                />
                <Divider />
                <Wireframes
                    sectionHeading={partnerships.wireframes.sectionHeading}
                    title={partnerships.wireframes.title}
                    image={partnerships.wireframes.image}
                />
                <Divider />
                <HighFidelity
                    sectionHeading={partnerships.highFidelity.sectionHeading}
                    title={partnerships.highFidelity.title}
                    solution1={partnerships.highFidelity.solution1}
                    solution2={partnerships.highFidelity.solution2}
                    solution3={partnerships.highFidelity.solution3}
                />
                <Divider />
                <DataPrivacy
                    sectionHeading={partnerships.dataPrivacy.sectionHeading}
                    title={partnerships.dataPrivacy.title}
                    body1={partnerships.dataPrivacy.body1}
                    body2={partnerships.dataPrivacy.body2}
                    image={partnerships.dataPrivacy.image}
                />
                <Divider />
                <Learnings
                    sectionHeading={partnerships.learnings.sectionHeading}
                    title={partnerships.learnings.title}
                    array={partnerships.learnings.array}
                />
                <Divider />
                <NextSteps
                    title={partnerships.nextSteps.title}
                    subTitle={partnerships.nextSteps.subTitle}
                    subSubTitle={partnerships.nextSteps.subSubTitle}
                    body={partnerships.nextSteps.body}
                />
            </section>
        </NavigationProvider>
    );
}