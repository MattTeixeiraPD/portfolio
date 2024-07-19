import Image from "next/image";

export default function Logo({ width, height, logo }: { width: number, height: number, logo: string }) {
    return <Image src={logo} alt="Logo" width={width} height={height} className="w-fit h-fit rounded-small"/>;
}