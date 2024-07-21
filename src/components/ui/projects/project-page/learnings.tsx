'use client';
import withRevealOnScroll from "@/components/animations/reveal-on-scroll";
import { Body, Title } from "@/components/typography/typography";
import { SectionHeading } from "@/components/typography/typography";

type Props = {
    sectionHeading: string;
    title: string;
    array: {
        learning1: {
            title: string;
            body: string;
        },
        learning2?: {
            title: string;
            body: string;
        },
    }
}

function Learnings({ sectionHeading, title, array }: Props) {
    return (
        <div className="flex flex-row gap-8 p-20" id="learnings">
            <SectionHeading>{sectionHeading}</SectionHeading>
            <div className="flex flex-col gap-12 w-full">
                <Title>{title}</Title>
                <div className="flex flex-col gap-4">
                    <h3 className="text-2xl font-bold">{array.learning1.title}</h3>
                    <Body>{array.learning1.body}</Body>
                </div>
                {array.learning2 && <div className="flex flex-col gap-4">
                    <h3 className="text-2xl font-bold">{array.learning2.title}</h3>
                    <Body>{array.learning2.body}</Body>
                </div>
                }
            </div>
        </div>
    );
}

export default withRevealOnScroll<React.ComponentType<Props>>(Learnings);