'use client'
import { SectionHeading } from "@/components/typography/typography";
import withRevealOnScroll from "@/components/animations/reveal-on-scroll";

type Props = {
    title: string;
    subTitle: string;
    subSubTitle: string;
    body: string;
}

function NextSteps({ title, subTitle, subSubTitle, body }: Props) {
    return (
        <div className="flex flex-row gap-8 p-20" id="next-steps">
           <SectionHeading>{title}</SectionHeading>
            <div className="flex flex-col gap-12 w-full">
                <h3 className="text-4xl font-bold">{subTitle}</h3>
                <div className="flex flex-col gap-4">
                    <h4 className="text-2xl font-bold">{subSubTitle}</h4>
                    <p className="text-lg">{body}</p>
                </div>
            </div>
        </div>
    );
}

export default withRevealOnScroll<React.ComponentType<Props>>(NextSteps);