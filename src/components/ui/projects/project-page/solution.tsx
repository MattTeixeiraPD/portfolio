'use client';
import ImageOverlay from "@/components/ui/image-overlay";
import { SectionHeading } from "@/components/typography/typography";
import withRevealOnScroll from "@/components/animations/reveal-on-scroll";
import { Body, Title } from "@/components/typography/typography";

type Props = {
    sectionHeading: string;
    title: string;
    solution1: {
        heading: string;
        body: string;
        image: string;
    },
    solution2?: {
        heading: string;
        body: string;
        image: string;
    }
}

function SolutionComponent({ sectionHeading, title, solution1, solution2 }: Props) {
    return (
        <div className="flex flex-row gap-8 p-20" id="solution">
            <SectionHeading>{sectionHeading}</SectionHeading>
            <div className="flex flex-col gap-4 items-start w-full">
                <Title>{title}</Title>
                <div className="flex flex-row gap-4 items-center">
                    <div className="flex flex-col gap-4">
                        <h3 className="text-2xl font-bold">{solution1.heading}</h3>
                        <Body>{solution1.body}</Body>
                    </div>
                    <ImageOverlay src={solution1.image} alt={solution1.heading} width={600} height={600} />
                </div>
                {solution2 && <div className="flex flex-row gap-4 items-center justify-center">
                    <ImageOverlay src={solution2.image} alt={solution2.heading} width={600} height={600} />
                    <div className="flex flex-col gap-4">
                        <h3 className="text-2xl font-bold">{solution2.heading}</h3>
                        <Body>{solution2.body}</Body>
                    </div>
                </div>
                }
            </div>
        </div>
    );
}

export default withRevealOnScroll<React.ComponentType<Props>>(SolutionComponent);