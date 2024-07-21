import Image from "next/image";

export default function Photo() {
    return (
        <div className="w-full flex justify-center items-center">
            <Image src="/me.jpg" alt="Matt Teixeira" width={300} height={400} className="rounded-[50px]"/>
        </div>
    );
}