import { Button } from "@/components/ui/primitives/button";
import Link from "next/link";
import ShimmerButton from "@/components/magicui/shimmer-button";
const HeroButtons = () => {
    return (
        <div className="flex flex-row gap-4 items-center justify-center w-fit">
            {/* <Link href="/about" className="w-fit"><Button variant="ghost" size="lg" >Experience Timeline</Button></Link> */}
            <Link href="#projects" className="w-fit">
                <ShimmerButton className="shadow-2xl" shimmerSize="0.1em">
                    {/* <Button variant="default" size="lg">Showcased Work</Button> */}
                    <span className="text-white text-lg font-medium">Showcased Work</span>
                </ShimmerButton>
            </Link>
        </div>
    )
}

export default HeroButtons;