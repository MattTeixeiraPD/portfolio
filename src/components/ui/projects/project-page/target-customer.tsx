'use client'
import ImageOverlay from "@/components/ui/image-overlay";
import { SectionHeading } from "@/components/typography/typography";
import withRevealOnScroll from "@/components/animations/reveal-on-scroll";
import { Body, Title } from "@/components/typography/typography";

type Props = {
    sectionHeading: string;
    title: string;
    body1: string;
    body2: string;
    image1: string;
    image2: string;
}

function TargetCustomer({ sectionHeading, title, body1, body2, image1, image2 }: Props) {
    return (
        <div className="flex flex-row gap-8 p-20" id="overview">
            <SectionHeading>{sectionHeading}</SectionHeading>
            <div className="flex flex-col gap-8 items-start w-full">
                <Title>{title}</Title>
                <Body>{body1}</Body>
                <Body>{body2}</Body>
                <div className="flex flex-col md:flex-row gap-8 w-full">
                    <ImageOverlay src={image1} alt={title} width={400} height={200} />
                    <ImageOverlay src={image2} alt={title} width={400} height={200} />
                </div>
            </div>
        </div>
    );
}

export default withRevealOnScroll<React.ComponentType<Props>>(TargetCustomer);