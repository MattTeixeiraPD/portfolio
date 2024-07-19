import Link from "next/link";
import Logo from "./logo";

export default function ExternalLink({ href, children, logo }: { href: string, children: React.ReactNode, logo: string }) {
    return (
        <div className="rounded-full bg-zinc-200 dark:bg-slate-800 w-fit mx-0 px-4 py-2 border border-zinc-300 dark:border-slate-700">
            <Link href={href} className="flex flex-row items-center gap-2 text-sm md:text-lg text-black dark:text-white" target="_blank">
                <Logo width={16} height={16} logo={logo} />
                {children}
            </Link>
        </div>
    );
}