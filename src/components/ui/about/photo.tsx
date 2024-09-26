import Image from "next/image";

export default function Photo() {
    return (
        <div className="min-w-[300px] flex justify-center items-center">
            <Image src="/me.jpg" alt="Matt Teixeira" width={300} height={400} className="rounded-[50px]"/>
        </div>
    );
}