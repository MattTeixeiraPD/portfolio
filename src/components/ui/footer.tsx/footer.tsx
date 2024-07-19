import { FaLinkedin, FaGithub, FaRegRegistered } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsMedium } from "react-icons/bs";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="min-w-screen flex justify-between items-center py-8 max-w-[1200px] mx-auto">
            <div className="flex flex-row items-center gap-2">
                <FaRegRegistered className="text-gray-500 dark:text-gray-500" />
                <span className="text-sm text-gray-500 dark:text-gray-500">
                    Designed and coded by Matt Teixeira, 2024
                </span>
            </div>
            <div className="flex flex-row items-center gap-2">
                <Link href="https://www.linkedin.com/in/matt-teixeira/" target="_blank"><FaLinkedin className="text-gray-500 dark:text-gray-500" /></Link>
                <Link href="https://github.com/" target="_blank"><FaGithub className="text-gray-500 dark:text-gray-500" /></Link>
                <Link href="mailto:moliiveira@hotmail.com" target="_blank"><MdEmail className="text-gray-500 dark:text-gray-500" /></Link>
                <Link href="https://medium.com/@Matt.TeixeiraPD" target="_blank"><BsMedium className="text-gray-500 dark:text-gray-500" /></Link>
            </div>
        </div>
    );
}