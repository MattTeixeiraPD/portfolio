'use client';
import { SectionHeading } from "@/components/typography/typography";
import withRevealOnScroll from "@/components/animations/reveal-on-scroll";
import ImageOverlay from "@/components/ui/image-overlay";
import { Body, Title } from "@/components/typography/typography";

type Props = {
    sectionHeading: string;
    title: string;
    solution1?: {
        title: string,
        body: string,
        image: string
    },
    solution2?: {
        title: string,
        body: string,
        image: string
    },
    solution3?: {
        title: string,
        body: string,
        image: string
    },
    image?: string
}

function HighFidelity({ sectionHeading, title, solution1, solution2, solution3, image }: Props) {
    return (
        <div className="flex flex-col gap-8 items-center">
            <div className="flex flex-row gap-8 p-20" id="high-fidelity">
                <SectionHeading>{sectionHeading}</SectionHeading>
                <div className="flex flex-col gap-12 items-start w-full">
                    <Title>{title}</Title>
                    {solution1 && (
                        <div className="flex flex-col gap-4 items-start w-full">
                            <h4 className="text-xl font-bold">{solution1.title}</h4>
                            <Body className="w-3/4">{solution1.body}</Body>
                            <ImageOverlay src={solution1.image} alt={solution1.title} width={1000} height={400} />
                        </div>
                    )}
                    {solution2 && (
                        <div className="flex flex-col gap-4 items-start w-full">
                            <h4 className="text-xl font-bold">{solution2.title}</h4>
                            <Body className="w-3/4">{solution2.body}</Body>
                            <ImageOverlay src={solution2.image} alt={solution2.title} width={1000} height={400} />
                        </div>
                    )}
                    {solution3 && (
                        <div className="flex flex-col gap-4 items-start w-full">
                            <h4 className="text-xl font-bold">{solution3.title}</h4>
                            <Body className="w-3/4">{solution3.body}</Body>
                            <ImageOverlay src={solution3.image} alt={solution3.title} width={1000} height={400} />
                        </div>
                    )}
                </div>
            </div>
            {image && <ImageOverlay src={image} alt={title} width={1200} height={400} />}
        </div>
    );
}

export default withRevealOnScroll<React.ComponentType<Props>>(HighFidelity);