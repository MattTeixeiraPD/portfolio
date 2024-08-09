'use client'
import { SectionHeading } from "@/components/typography/typography";
import withRevealOnScroll from "@/components/animations/reveal-on-scroll";

type Props = {
    title: string;
    subTitle: string;
    subSubTitle: string;
    body: string;
    subSubTitle2?: string;
    body2?: string;
}

function NextSteps({ title, subTitle, subSubTitle, body, subSubTitle2, body2 }: Props) {
    return (
        <div className="flex flex-row gap-8 p-20" id="next-steps">
            <SectionHeading>{title}</SectionHeading>
            <div className="flex flex-col gap-12 w-full">
                <h3 className="text-4xl font-bold">{subTitle}</h3>
                <div className="flex flex-col gap-4">
                    <h4 className="text-2xl font-bold">{subSubTitle}</h4>
                    <p className="text-lg">{body}</p>
                </div>
                {subSubTitle2 && body2 && (
                    <div className="flex flex-col gap-4">
                        <h4 className="text-2xl font-bold">{subSubTitle2}</h4>
                        <p className="text-lg">{body2}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default withRevealOnScroll<React.ComponentType<Props>>(NextSteps);