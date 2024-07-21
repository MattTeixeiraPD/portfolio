'use client'
import { IconButton } from "./button"
import { ArrowUp } from "lucide-react"
import Link from "next/link"

export default function BackToTop() {
    return (
        <Link className="fixed bottom-4 left-4 shadow-zinc-300 dark:shadow-white/[0.2] shadow-lg rounded-lg" href="#navbar">
            <IconButton className="bg-zinc-300 dark:bg-zinc-800 hover:bg-zinc-400 dark:hover:bg-zinc-700" icon={<ArrowUp className="text-black dark:text-white" />} />
        </Link>
    )
};