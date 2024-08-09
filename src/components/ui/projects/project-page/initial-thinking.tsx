'use client';
import ImageOverlay from "@/components/ui/image-overlay";
import { SectionHeading } from "@/components/typography/typography";
import withRevealOnScroll from "@/components/animations/reveal-on-scroll";
import { Body, Title } from "@/components/typography/typography";
import { Gap1REM } from "../../spacing";

type Props = {
    sectionHeading: string,
    title: string,
    body1?: string;
    body2?: string,
    subTitle1?: string,
    body3?: string,
    body4?: string,
    image1?: {
        light: string,
        dark: string
    },
    image2?: {
        light: string,
        dark: string
    },
    subTitle2?: string,
    body5?: string,
    image3?: string,
}

function InitialThinkingComponent({ sectionHeading, title, body1, subTitle1, body2, body3, body4, image1, image2, subTitle2, body5, image3 }: Props) {
    return (
        <div className="flex flex-row gap-8 p-20" id="overview">
            <SectionHeading>{sectionHeading}</SectionHeading>
            <div className="flex flex-col gap-8 items-start w-full">
                <Title>{title}</Title>
                {body1 && <Body>{body1}</Body>}
                {body2 && <Body>{body2}</Body>}
                <Gap1REM />
                {subTitle1 && <h3 className="text-2xl font-bold">{subTitle1}</h3>}  
                {body3 && <Body>{body3}</Body>}
                {body4 && <Body>{body4}</Body>}
                {image1 &&
                    <>
                        <div className="block dark:hidden">
                            <ImageOverlay src={image1.light} alt={title} width={800} height={400} />
                        </div>
                        <div className="hidden dark:block">
                            <ImageOverlay src={image1.dark} alt={title} width={800} height={400} />
                        </div>
                    </>
                }
                {image2 &&
                    <>
                        <div className="block dark:hidden">
                            <ImageOverlay src={image2.light} alt={title} width={800} height={400} />
                        </div>
                        <div className="hidden dark:block">
                            <ImageOverlay src={image2.dark} alt={title} width={800} height={400} />
                        </div>
                    </>
                }                <Gap1REM />
                {subTitle2 && <h3 className="text-2xl font-bold">{subTitle2}</h3>}
                {body5 && <Body>{body5}</Body>}
                {image3 && <ImageOverlay src={image3} alt={title} width={800} height={400} />}
            </div>
        </div>
    );
}

export default withRevealOnScroll<React.ComponentType<Props>>(InitialThinkingComponent);