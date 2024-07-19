'use client';
import { SectionHeading } from "@/components/typography/typography";
import withRevealOnScroll from "@/components/animations/reveal-on-scroll";
import { Body, Title } from "@/components/typography/typography";
import ImageOverlay from "@/components/ui/image-overlay";

type Props = {
    sectionHeading: string,
    title: string,
    body1: string,
    body2: string,
    image: string
}

function OverviewComponent({ sectionHeading, title, body1, body2, image }: Props) {
    return (
        <div className="flex flex-row gap-8 p-20" id="overview">
            <SectionHeading>{sectionHeading}</SectionHeading>
            <div className="flex flex-col gap-8 items-start w-full">
                <Title>{title}</Title>
                <Body>{body1}</Body>
                <Body>{body2}</Body>
                <ImageOverlay src={image} alt={title} width={1000} height={400} />
            </div>
        </div>

    );
}

export default withRevealOnScroll<React.ComponentType<Props>>(OverviewComponent);