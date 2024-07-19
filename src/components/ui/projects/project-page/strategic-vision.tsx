'use client'
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { SectionHeading } from "@/components/typography/typography";
import withRevealOnScroll from "@/components/animations/reveal-on-scroll";

type Props = {
    sectionHeading: string;
    title: string;
    image: string;
}

function StrategicVisionComponent({ sectionHeading, title, image }: Props) {
    return (
        <div className="flex flex-row gap-8 p-20" id="strategic-vision">
            <SectionHeading>{sectionHeading}</SectionHeading>
            <div className="flex flex-col gap-4 items-end w-full">
                <div className="flex flex-col gap-4 items-start">
                    <FaQuoteLeft className="text-2xl w-8 h-8" />
                    <h3 className="text-2xl font-medium">{title}</h3>
                </div>
                <FaQuoteRight className="text-2xl w-8 h-8" />
            </div>
        </div>
    );
};

export default withRevealOnScroll<React.ComponentType<Props>>(StrategicVisionComponent);