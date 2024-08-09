import Image from "next/image";


export default function CoverImage({
    title,
    src,
    width,
    height,
}: {
    title: string;
    src: string;
    width: number;
    height: number;
}) {
return (
        <div className="relative flex items-center justify-center w-full">
            <Image src={src} alt={title} width={width} height={height} />
        </div>
    );
}