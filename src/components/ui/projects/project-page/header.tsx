'use client'
import { Dot } from "lucide-react";
import ImageOverlay from "../../image-overlay";
import { Body } from "@/components/typography/typography";

type HeaderItem = {
    heading: string;
    body: string | { copy1: string; copy2?: string };
    image: string;
};

export default function ProjectHeader({ header, width, height }: { header: HeaderItem[], width: number, height: number }) {
    return (
        <div className="w-full flex flex-row gap-2 z-0 py-20 px-40" id="header">
            {header.map((item, index) => (
                <div key={index} className="w-full flex flex-col text-center items-center gap-5">
                    <div className="relative rounded-3xl w-fit h-fit">
                        <ImageOverlay src={item.image} alt={item.heading} width={width} height={height} />
                    </div>
                    <h3 className="text-2xl font-medium">{item.heading}</h3>
                    <div className="flex flex-col">
                        {typeof item.body === 'string' ? (
                            <Body>{item.body}</Body>
                        ) : (
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-row items-start">
                                    <Dot className="mr-2" /> <Body>{item.body.copy1}</Body>
                                </div>
                                {item.body.copy2 && (
                                    <div className="flex flex-row items-start">
                                        <Dot className="mr-2" /> <Body>{item.body.copy2}</Body>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}