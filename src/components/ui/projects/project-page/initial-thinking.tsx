'use client';
import ImageOverlay from "@/components/ui/image-overlay";
import { SectionHeading } from "@/components/typography/typography";
import withRevealOnScroll from "@/components/animations/reveal-on-scroll";
import { Body, Title } from "@/components/typography/typography";
import { Gap1REM } from "../../spacing";

type Props = {
    sectionHeading: string,
    title: string,
    body1: string;
    body2: string,
    subTitle1: string,
    body3: string,
    body4: string,
    image1: string,
    image2: string,
    subTitle2: string,
    body5: string,
    image3: string,
}

function InitialThinkingComponent({ sectionHeading, title, body1, subTitle1, body2, body3, body4, image1, image2, subTitle2, body5, image3 }: Props) {
    return (
        <div className="flex flex-row gap-8 p-20" id="overview">
            <SectionHeading>{sectionHeading}</SectionHeading>
            <div className="flex flex-col gap-8 items-start w-full">
                <Title>{title}</Title>
                <Body>{body1}</Body>
                <Body>{body2}</Body>
                <Gap1REM />
                <h3 className="text-2xl font-bold">{subTitle1}</h3>
                <Body>{body3}</Body>
                <Body>{body4}</Body>
                <ImageOverlay src={image1} alt={title} width={800} height={400} />
                <ImageOverlay src={image2} alt={title} width={800} height={400} />
                <Gap1REM />
                <h3 className="text-2xl font-bold">{subTitle2}</h3>
                <Body>{body5}</Body>
                <ImageOverlay src={image3} alt={title} width={800} height={400} />
            </div>
        </div>
    );
}

export default withRevealOnScroll<React.ComponentType<Props>>(InitialThinkingComponent);