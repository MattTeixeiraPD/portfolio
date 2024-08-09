'use client'
import ImageOverlay from "@/components/ui/image-overlay";
import { Dot } from "lucide-react";
import { Gap1REM } from "@/components/ui/spacing";
import { SectionHeading } from "@/components/typography/typography";
import withRevealOnScroll from "@/components/animations/reveal-on-scroll";
import { Title, Body } from "@/components/typography/typography";

type Props = {
    sectionHeading?: string;
    title?: string;
    subTitle?: string;
    subSubTitle1?: {
        title?: string,
        goals?: string[],
        image?: string,
        image2?: string,
    },
    subSubTitle2?: {
        title?: string,
        body?: string,
        subSubTitle1?: {
            title?: string,
            goals?: string[],
            image?: {
                light?: string,
                dark?: string,
            },
            image2?: string,
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
        image1?: {
            light?: string[],
            dark?: string[],
        },
        image2?: {
            light?: string[],
            dark?: string[],
        },
        image3?: {
            light?: string[],
            dark?: string[],
        },
    }
}

function Discovery({ sectionHeading, title, subTitle, subSubTitle1, subSubTitle2, subTitle2, findings }: Props) {
    return (
        <div className="flex flex-row gap-8 p-20" id="discovery">
            {sectionHeading && <SectionHeading>{sectionHeading}</SectionHeading>}
            <div className="flex flex-col gap-8 items-start w-full">
                {title && <Title>{title}</Title>}
                {subTitle && <p className="text-xl font-bold">{subTitle}</p>}
                {subSubTitle1 && (
                    <div className="flex flex-col gap-4 items-start w-full">
                        {subSubTitle1.title && <p className="text-lg font-bold">{subSubTitle1.title}</p>}
                        {subSubTitle1.goals && subSubTitle1.goals.map((goal, index) => (
                            <div key={index} className="flex flex-row items-center gap-2">
                                <Dot className="w-8 h-8 mr-2" />
                                <Body>{goal}</Body>
                            </div>
                        ))}
                        {subSubTitle1.image && (
                            <ImageOverlay src={subSubTitle1.image} alt={subSubTitle1.title || ""} width={800} height={400} />
                        )}
                        {subSubTitle1.image2 && (
                            <ImageOverlay src={subSubTitle1.image2} alt={subSubTitle1.title || ""} width={800} height={400} />
                        )}
                    </div>
                )}
                {subSubTitle2 && (
                    <div className="flex flex-col gap-4 items-start w-full">
                        {subSubTitle2.title && <p className="text-2xl font-bold">{subSubTitle2.title}</p>}
                        {subSubTitle2.body && <p>{subSubTitle2.body}</p>}
                        {subSubTitle2.subSubTitle1 && (
                            <>
                                {subSubTitle2.subSubTitle1.title && <p className="text-lg font-bold">{subSubTitle2.subSubTitle1.title}</p>}
                                {subSubTitle2.subSubTitle1.goals && subSubTitle2.subSubTitle1.goals.map((goal, index) => (
                                    <div key={index} className="flex flex-row items-center gap-1">
                                        <Dot className="w-8 h-8 mr-2" />
                                        <Body>{goal}</Body>
                                    </div>
                                ))}
                                {subSubTitle2.subSubTitle1?.image && (
                                    <>
                                        <div className="hidden dark:block">
                                            <ImageOverlay src={subSubTitle2.subSubTitle1.image.dark!} alt={subSubTitle2!.subSubTitle1!.title || ''} width={800} height={400} />
                                        </div>
                                        <div className="block dark:hidden">
                                            <ImageOverlay src={subSubTitle2.subSubTitle1.image.light!} alt={subSubTitle2!.subSubTitle1!.title || ''} width={800} height={400} />
                                        </div>
                                    </>
                                )}
                            </>
                        )}
                        <Gap1REM />
                    </div>
                )}
                {subTitle2 && (
                    <div className="flex flex-col gap-4 items-start w-full">
                        <p className="text-2xl font-medium">{subTitle2.title}</p>
                        {subTitle2.body1 && (
                            <div className="flex flex-row items-center gap-2">
                                <Dot className="w-8 h-8 mr-2" />
                                <Body>{subTitle2.body1}</Body>
                            </div>
                        )}
                        {subTitle2.body2 && (
                            <div className="flex flex-row items-center gap-2">
                                <Dot className="w-8 h-8 mr-2" />
                                <Body>{subTitle2.body2}</Body>
                            </div>
                        )}
                        {subTitle2.body3 && (
                            <div className="flex flex-row items-center gap-2">
                                <Dot className="w-8 h-8 mr-2" />
                                <Body>{subTitle2.body3}</Body>
                            </div>
                        )}
                    </div>
                )}
                <Gap1REM />
                {findings && (
                    <div className="flex flex-col gap-4 items-start w-full">
                        <p className="text-2xl font-bold">{findings.title}</p>
                        {findings.body && <Body>{findings.body}</Body>}
                        {findings.body2 && <Body>{findings.body2}</Body>}
                        {findings.image1 && (
                            <>
                                <div className="hidden dark:block">
                                    {findings.image1?.dark?.map((image, index) => (
                                        <ImageOverlay key={index} src={image} alt={findings.title || ''} width={800} height={400} />
                                    ))}
                                </div>
                                <div className="block dark:hidden">
                                    {findings.image1?.light?.map((image, index) => (
                                        <ImageOverlay key={index} src={image} alt={findings.title || ''} width={800} height={400} />
                                    ))}
                                </div>
                            </>
                        )}
                        {findings.image2 && (
                            <>
                                <div className="hidden dark:block">
                                    {findings.image2?.dark?.map((image, index) => (
                                        <ImageOverlay key={index} src={image} alt={findings.title || ''} width={800} height={400} />
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default withRevealOnScroll<React.ComponentType<Props>>(Discovery);