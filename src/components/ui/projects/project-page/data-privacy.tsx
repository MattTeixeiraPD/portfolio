'use client';
import ImageOverlay from "@/components/ui/image-overlay";
import { SectionHeading } from "@/components/typography/typography";
import withRevealOnScroll from "@/components/animations/reveal-on-scroll";
import { Title, Body } from "@/components/typography/typography";
type Props = {
    sectionHeading: string;
    title: string;
    body1: string;
    body2: string;
    image: string;
}

function DataPrivacy({ sectionHeading, title, body1, body2, image }: Props) {
    return (
        <div className="flex flex-row gap-8 p-20" id="data-privacy">
           <SectionHeading>{sectionHeading}</SectionHeading>
            <div className="flex flex-col gap-12">
                <Title>{title}</Title>
                <Body>{body1}</Body>
                <Body>{body2}</Body>
                <ImageOverlay src={image} alt={title} width={800} height={1000} />
            </div>
        </div>
    );
}

export default withRevealOnScroll<React.ComponentType<Props>>(DataPrivacy);

