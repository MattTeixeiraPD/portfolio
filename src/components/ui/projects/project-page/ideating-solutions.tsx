'use client'
import { Dot } from "lucide-react";
import ImageOverlay from "@/components/ui/image-overlay";
import { SectionHeading } from "@/components/typography/typography";
import withRevealOnScroll from "@/components/animations/reveal-on-scroll";
import { Title, Body } from "@/components/typography/typography";

type Props = {
    sectionHeading: string, 
    title: string,
    body1: string,
    image1: string,
    body2: string,
    image2: string,
    body3: string

}
function IdeatingSolutions({ sectionHeading, title, body1, image1, body2, image2, body3 }: Props) {
    return (
        <div className="flex flex-row gap-8 p-20" id="problem-statement">
            <SectionHeading>{sectionHeading}</SectionHeading>
            <div className="flex flex-col gap-8 items-start w-full">
                <Title>{title}</Title>
                <ImageOverlay src={image1} alt="Problem Statement" width={1000} height={400} />
                <Body>{body1}</Body>
                <ImageOverlay src={image2} alt="Problem Statement" width={1000} height={400} />
                <Body>{body2}</Body>
                <Body>{body3}</Body>
            </div>
        </div>
    );
}

export default withRevealOnScroll<React.ComponentType<Props>>(IdeatingSolutions);