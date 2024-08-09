'use client';
import ImageOverlay from "@/components/ui/image-overlay";
import { SectionHeading } from "@/components/typography/typography";
import withRevealOnScroll from "@/components/animations/reveal-on-scroll";
import { Title } from "@/components/typography/typography";

type Props = {
    sectionHeading: string;
    title: string;
    image: string;
    image2?: string;
}

function Wireframes({ sectionHeading, title, image, image2 }: Props) {
    return (
        <div className="flex flex-row gap-8 p-20" id="overview">
            <SectionHeading>{sectionHeading}</SectionHeading>
            <div className="flex flex-col gap-8 items-start w-full">
                <Title>{title}</Title>
                <ImageOverlay src={image} alt={title} width={800} height={400} />
                {image2 && <ImageOverlay src={image2} alt={title} width={800} height={400} />}
            </div>
        </div>
    );
}

export default withRevealOnScroll<React.ComponentType<Props>>(Wireframes);