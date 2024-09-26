import { cn } from "@/lib/utils";
import Image from "next/image";

const AchievementSquare = ({
    className,
    square,
    fullWidth,
    fullHeight,
    column,
    row,
    image,
    thirdColumn,
    thirdColumnCopy,
    copy,
    metric,
    gap
}: {
    className?: string,
    square?: boolean,
    fullWidth?: boolean,
    fullHeight?: boolean,
    column?: boolean,
    row?: boolean,
    image?: string,
    thirdColumn?: boolean,
    thirdColumnCopy?: string,
    copy: string,
    metric: string,
    gap?: string
}) => {
    return (
        <div className={cn(
            "bg-black/25 dark:bg-white/25 relative rounded-[32px] p-4",
            { "h-[175px] w-[175px]": square },
            { "w-full h-[175px]": fullWidth },
            { "h-full": fullHeight },
            { [`flex flex-col items-center justify-center ${gap}`]: column },
            { [`flex flex-row items-center justify-center ${gap}`]: row },
            className
        )}>
            {image && (
                <Image src={image} alt="achievement" className="absolute top-0 left-0 w-full h-full object-cover" />
            )}
            {row && (
                <>
                    <p className="text-base text-center">
                        {copy}
                    </p>
                    <h2 className="font-bold text-[96px] leading-tight relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 to-neutral-700 dark:from-neutral-200 dark:to-neutral-400 text-center">
                        {metric}
                    </h2>
                </>
            )}
            {column && (
                <>
                    <p className="text-base text-center">
                        {copy}
                    </p>
                    <h2 className="font-bold text-[96px] leading-tight relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 to-neutral-700 dark:from-neutral-200 dark:to-neutral-400 text-center">
                        {metric}
                    </h2>
                    {thirdColumn && (
                        <p className="text-base">
                            {thirdColumnCopy}
                        </p>
                    )}
                </>
            )}
        </div>
    )
}

const AchievementSquareWrapper = () => {
    const lowerCAC = {
        firstCopy: "Data analytics & research insights led to a",
        metric: "13%",
        secondCopy: "lower CAC"
    };

    const tausCTRIncrease = {
        firstCopy: "Technical proficiency and research insights helped increase CTR at The Australian by",
        metric: "16%",
    };

    const aBTestWAUMAU = {
        firstCopy: "Implemented A/B tests that led to fast feature validation and increased WAU/MAU to",
        metric: "30%",
    };

    const me = "Me";

    const aiProdSpeed = {
        firstCopy: "Using AI to increase design-to-production speed by",
        metric: "22%",
    };

    const ownedMVPU = {
        firstCopy: "Owned whole MVP and feature projects that led to",
        metric: "140%",
        secondCopy: "increase in conversion rate"
    };

    return (
        <div className="grid grid-cols-6 grid-rows-4 gap-4 mx-5 h-[600px] w-full">
            <AchievementSquare
                className="col-span-2 row-span-4"
                column
                copy={lowerCAC.firstCopy}
                metric={lowerCAC.metric}
                thirdColumn={true}
                thirdColumnCopy={lowerCAC.secondCopy}
            />
            <AchievementSquare
                className="col-span-4 row-span-2"
                column
                copy={tausCTRIncrease.firstCopy}
                metric={tausCTRIncrease.metric}
            />
            <AchievementSquare
                className="col-span-2 row-span-2"
                column
                copy={me}
                metric=""
            />
            <AchievementSquare
                className="col-span-2 row-span-2"
                column
                copy={aiProdSpeed.firstCopy}
                metric={aiProdSpeed.metric}
            />
            <AchievementSquare
                className="col-span-4 row-span-2"
                column
                copy={aBTestWAUMAU.firstCopy}
                metric={aBTestWAUMAU.metric}
            />
            <AchievementSquare
                className="col-span-2 row-span-2"
                column
                copy={ownedMVPU.firstCopy}
                metric={ownedMVPU.metric}
                thirdColumn={true}
                thirdColumnCopy={ownedMVPU.secondCopy}
            />
        </div>
    )
}

export default AchievementSquareWrapper;