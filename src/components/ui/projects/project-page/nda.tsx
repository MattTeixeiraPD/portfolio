import { SectionHeading, Title, Body } from "@/components/typography/typography";
export default function NDA() {
    return (
        <div className="flex flex-row gap-8 p-20" id="nda">
            <SectionHeading>NDA</SectionHeading>
            <div className="flex flex-col gap-8 items-start w-full">
                <Title>Unfortunately, this work is under NDA</Title>
                <Body>
                    Unfortunately, most of this work is under NDA and I can&rsquo;t talk too much about. I hope this snippet of high-level logic provided you with enough context on the initiative.
                    <br />
                    <br />
                    Contact me for more info if needed.
                </Body>
            </div>
        </div>
    );
}