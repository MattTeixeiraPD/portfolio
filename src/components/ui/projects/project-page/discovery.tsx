'use client'
import ImageOverlay from "@/components/ui/image-overlay";
import { Dot } from "lucide-react";
import { Gap1REM } from "@/components/ui/spacing";
import { SectionHeading } from "@/components/typography/typography";
import withRevealOnScroll from "@/components/animations/reveal-on-scroll";
import { Title, Body } from "@/components/typography/typography";

type Props = {
    sectionHeading: string;
    title: string;
    subTitle1: string;
    subSubTitle1: {
        title: string,
        goals: string[],
        image?: string,
    },
    subSubTitle2?: {
        title: string,
        body: string,
        subSubTitle1: {
            title: string,
            goals: string[],
            image?: string,
        },
    },
    subTitle2?: {
        title: string,
        body1: string,
        body2: string,
        body3: string,
    },
    findings?: {
        title: string,
        body: string,
        body2: string,
        image1: string,
        image2: string,
        image3: string,
    }
}

function Discovery({ sectionHeading, title, subTitle1, subSubTitle1, subSubTitle2, subTitle2, findings }: Props) {
    return (
        <div className="flex flex-row gap-8 p-20" id="discovery">
            <SectionHeading>{sectionHeading}</SectionHeading>
            <div className="flex flex-col gap-8 items-start w-full">
                <Title>{title}</Title>
                <p className="text-xl font-bold">{subTitle1}</p>
                <p className="text-lg font-bold">{subSubTitle1.title}</p>
                {subSubTitle1.goals.map((goal, index) => (
                    <div key={index} className="flex flex-row items-center gap-2">
                        <Dot className="w-8 h-8 mr-2" />
                        <Body>{goal}</Body>
                    </div>
                ))}
                {subSubTitle1.image && <ImageOverlay src={subSubTitle1.image} alt={subSubTitle1.title} width={800} height={400} />}
                {subSubTitle2 && (
                    <div className="flex flex-col gap-4 items-start w-full">
                        <p className="text-2xl font-bold">{subSubTitle2.title}</p>
                        <p>{subSubTitle2.body}</p>
                        <p className="text-lg font-bold">{subSubTitle2.subSubTitle1.title}</p>
                        {subSubTitle2.subSubTitle1.goals.map((goal, index) => (
                            <div key={index} className="flex flex-row items-center gap-1">
                                <Dot className="w-8 h-8 mr-2" />
                                <Body>{goal}</Body>
                            </div>
                        ))}
                        {subSubTitle2.subSubTitle1.image && <ImageOverlay src={subSubTitle2.subSubTitle1.image} alt={subSubTitle2.subSubTitle1.title} width={800} height={400} />}
                        <Gap1REM />
                    </div>
                )}
                {subTitle2 && (
                    <div className="flex flex-col gap-4 items-start w-full">
                        <p className="text-2xl font-medium">{subTitle2.title}</p>
                        <div className="flex flex-row items-center gap-2">
                            <Dot className="w-8 h-8 mr-2" />
                            <Body>{subTitle2.body1}</Body>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                            <Dot className="w-8 h-8 mr-2" />
                            <Body>{subTitle2.body2}</Body>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                            <Dot className="w-8 h-8 mr-2" />
                            <Body>{subTitle2.body3}</Body>
                        </div>
                    </div>
                )}
                <Gap1REM />
                {findings && (
                    <div className="flex flex-col gap-4 items-start w-full">
                        <p className="text-2xl font-bold">{findings.title}</p>
                        <Body>{findings.body}</Body>
                        <Body>{findings.body2}</Body>
                        <ImageOverlay src={findings.image1} alt={findings.title} width={800} height={400} />
                        <ImageOverlay src={findings.image2} alt={findings.title} width={800} height={400} />
                        <ImageOverlay src={findings.image3} alt={findings.title} width={800} height={400} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default withRevealOnScroll<React.ComponentType<Props>>(Discovery);