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

export const metadata: Metadata = {
    title: "Digital Vault",
};

export default function VaultPage() {
    const header = vault.header;
    return (
        <>
            <ProjectHeader header={header} width={200} height={400} />
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
                subTitle1={vault.discovery.subTitle}
                subSubTitle1={vault.discovery.goals}
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
        </>
    );
}