'use client'
import { capitalClimbProduct, capitalClimbTech } from "@/lib/capitalclimb";
import { useState } from "react";
import NavigateButton from "@/hooks/useNavigation";
import ProjectHeader from "@/components/ui/projects/project-page/header";
import ImpactComponent from "@/components/ui/projects/project-page/impact";
import ProblemComponent from "@/components/ui/projects/project-page/problem";
import SolutionComponent from "@/components/ui/projects/project-page/solution";
import Divider from "@/components/ui/projects/project-page/divider";
import InitialThinkingComponent from "@/components/ui/projects/project-page/initial-thinking";
import { Body, SectionHeading } from "@/components/typography/typography";
import DiscoveryComponent from "@/components/ui/projects/project-page/discovery";
import Wireframes from "@/components/ui/projects/project-page/wireframes";
import Learnings from "@/components/ui/projects/project-page/learnings";
import NextSteps from "@/components/ui/projects/project-page/next-steps";
import { Title } from "@/components/typography/typography";
import Link from "next/link";
import ImageOverlay from "@/components/ui/image-overlay";

export default function CapitalClimbProject() {
    const [isProduct, setIsProduct] = useState<boolean>(true);

    const productIds = [
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

    const techIds = [
        { id: "header", name: "Header" },
    ];


    return (
        <section className="min-w-full min-h-screen flex flex-col items-center justify-center gap-16  pb-12">
            <ProjectHeader header={capitalClimbProduct.header} width={250} height={400} />
            <ImpactComponent copy={Object.values(capitalClimbProduct.impact)} />
            {
                isProduct ? (
                    <>
                        <NavigateButton ids={productIds} />
                        <ProblemComponent
                            sectionHeading={capitalClimbProduct.problem.sectionHeading}
                            title={capitalClimbProduct.problem.title}
                            body1={capitalClimbProduct.problem.body1}
                            image={capitalClimbProduct.problem.image}
                        />
                        <Divider />
                        <SolutionComponent
                            sectionHeading={capitalClimbProduct.solution.sectionHeading}
                            title={capitalClimbProduct.solution.title}
                            solution1={capitalClimbProduct.solution.solution1}
                            solution2={capitalClimbProduct.solution.solution2}
                            solution3={capitalClimbProduct.solution.solution3}
                        />
                        <Divider />
                        <InitialThinkingComponent
                            sectionHeading={capitalClimbProduct.initialThinking.sectionHeading}
                            title={capitalClimbProduct.initialThinking.title}
                            body1={capitalClimbProduct.initialThinking.body1}
                            image1={capitalClimbProduct.initialThinking.image1}
                            image2={capitalClimbProduct.initialThinking.image2}
                        />
                        <Divider />
                        <DiscoveryComponent
                            sectionHeading={capitalClimbProduct.discovery.sectionHeading}
                            title={capitalClimbProduct.discovery.title}
                            subTitle={capitalClimbProduct.discovery.subTitle}
                            subSubTitle1={capitalClimbProduct.discovery.subSubTitle1}
                            subSubTitle2={capitalClimbProduct.discovery.subSubTitle2}
                            findings={capitalClimbProduct.discovery.findings}
                        />
                        <Divider />
                        <DiscoveryComponent
                            sectionHeading={capitalClimbProduct.divingDeeper.sectionHeading}
                            title={capitalClimbProduct.divingDeeper.title}
                            subTitle={capitalClimbProduct.divingDeeper.subTitle}
                            subSubTitle1={capitalClimbProduct.divingDeeper.subSubTitle1}
                        />
                        <Divider />
                        <Wireframes
                            sectionHeading={capitalClimbProduct.wireframes.sectionHeading}
                            title={capitalClimbProduct.wireframes.title}
                            image={capitalClimbProduct.wireframes.image}
                            image2={capitalClimbProduct.wireframes.image2}
                        />
                        <Divider />
                        <div className="flex flex-row gap-8 p-20 w-full" id="final-product">
                            <SectionHeading>The Final Product</SectionHeading>
                            <div className="flex flex-col gap-8">
                                <Title>Final Product</Title>
                                <Body>The final product can be found at <Link href="https://capitalclimb.app/en" target="_blank" className="underline">capitalclimb.app/en</Link>. I'm frequently working on it.</Body>
                                <ImageOverlay src={capitalClimbProduct.finalProduct.image} alt="Final Product" width={1000} height={1000} />
                            </div>
                        </div>
                        <Divider />
                        <Learnings
                            sectionHeading={capitalClimbProduct.learnings.sectionHeading}
                            title={capitalClimbProduct.learnings.title}
                            array={capitalClimbProduct.learnings.array}
                        />
                        <Divider />
                        <NextSteps
                            title={capitalClimbProduct.nextSteps.title}
                            subTitle={capitalClimbProduct.nextSteps.subTitle}
                            subSubTitle={capitalClimbProduct.nextSteps.subSubTitle}
                            body={capitalClimbProduct.nextSteps.body}
                            subSubTitle2={capitalClimbProduct.nextSteps.subSubTitle2}
                            body2={capitalClimbProduct.nextSteps.body2}
                        />
                    </>
                ) : (
                    <>
                        <NavigateButton ids={techIds} />
                        <div>Tech</div >
                    </>)
            }
        </section>
    );
}