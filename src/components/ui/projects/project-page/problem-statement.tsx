'use client'
import { Dot } from "lucide-react";
import ImageOverlay from "@/components/ui/image-overlay";
import { SectionHeading } from "@/components/typography/typography";
import withRevealOnScroll from "@/components/animations/reveal-on-scroll";
import { Title, Body } from "@/components/typography/typography";

type Props = {
    sectionHeading: string,
    title: string,
    image: string,
    hmw: {
        title: string,
        body: string[]
    }
}
function ProblemStatement({ sectionHeading, title, image, hmw }: Props) {
    return (
        <div className="flex flex-row gap-8 p-20" id="problem-statement">
            <SectionHeading>{sectionHeading}</SectionHeading>
            <div className="flex flex-col gap-8 items-start w-full">
                <Title>{title}</Title>
                <ImageOverlay src={image} alt="Problem Statement" width={800} height={400} />
                <p className="text-2xl font-bold">{hmw.title}</p>
                {hmw.body.map((item, index) => (
                    <div key={index} className="flex flex-row gap-2 items-center">
                        <Dot />
                        <Body>{item}</Body>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default withRevealOnScroll<React.ComponentType<Props>>(ProblemStatement);