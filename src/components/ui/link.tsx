import Link from "next/link";
import { MoveUpRight } from 'lucide-react';


export default function ExternalLink({ href, children }: { href: string, children: React.ReactNode }) {
    return (
        <div className="rounded-full bg-zinc-100 dark:bg-zinc-900 w-fit mx-0 px-4 py-2 border border-zinc-30 dark:border-zinc-700">
            <Link href={href} className="flex flex-row items-center gap-2 text-sm md:text-lg text-black dark:text-white" target="_blank">
                <MoveUpRight className="w-4 h-4" />
                {children}
            </Link>
        </div>
    );
}