'use client'
import { IconButton } from "./button"
import { ArrowUp } from "lucide-react"
import Link from "next/link"

export default function BackToTop() {
    return (
        <Link className="fixed bottom-4 right-4 shadow-gray-300 dark:shadow-white/[0.2] shadow-lg rounded-lg" href="#navbar">
            <IconButton className="bg-gray-300 dark:bg-gray-800 hover:bg-gray-400 dark:hover:bg-gray-700" icon={<ArrowUp className="text-black dark:text-white" />} />
        </Link>
    )
};