import { ImpactHeading } from "@/components/typography/typography";
import { Body } from "@/components/typography/typography";

type Props = {
    copy: string[]
}

export default function ImpactComponent({ copy }: Props) {
    const numbers = ["01", "02", "03"]
    return (
        <div className="w-full py-20 m-auto bg-zinc-300 dark:bg-zinc-700" id="impact">
            <div className="w-full flex flex-row justify-center items-start px-20">
                <ImpactHeading />
                <div className="w-full flex flex-col justify-center items-start gap-5">
                    {copy.map((item, index) => (
                        <div key={index} className="flex flex-row gap-4 items-start">
                            <span className="text-2xl font-bold pt-1">{numbers[index]}</span>
                            <Body>
                                {item}
                            </Body>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}