'use client';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import projects from "@/lib/projects";
import { Dot, Info, Goal } from "lucide-react";
import { Fragment } from "react";
import Link from "next/link";
import CoverImage from "../cover-image";

type Props = {
    projectName: string;
    valueProp1: string;
    valueProp2: string;
    image: string;
    tags: string[];
    href: string;
}

const ProjectCard = ({ projectName, valueProp1, valueProp2, image, tags, href }: Props) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    useEffect(() => {
        if (inView) {
            controls.start({ scale: 1 });
        } else {
            controls.start({ scale: 0.4 });
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            initial={{ scale: 0.1 }}
            animate={controls}
            transition={{ duration: 0.2 }}
            className="w-full h-full md:h-[500px]"
            >
            <Link href={href} className="w-full h-full px-20">
                <div
                    className="bg-zinc-100 dark:bg-zinc-700 w-full rounded-3xl border border-zinc-200 dark:border-zinc-600 flex flex-col lg:flex-row gap-10 md:gap-5 justify-between transition-transform duration-300 shadow-lg shadow-zinc-800/10 dark:shadow-zinc-200/20 dark:hover:shadow-2xl hover:scale-105 h-full"
                >
                    <CoverImage src={image} width={1200} height={630} title={projectName} />
                    <div className="flex flex-col gap-16 md:justify-between items-start p-4 md:py-8 md:pr-8 w-full">
                        <div className="flex flex-col gap-12 w-full">
                            <h2 className="text-2xl md:text-4xl font-medium3 w-full">{projectName}</h2>
                            <div className="flex flex-col gap-4 w-full">
                                <span className="flex items-center gap-2 text-gray-500 dark:text-gray-300 text-base md:text-lg"><Info className="mr-1 text-gray-500 dark:text-gray-300" />{valueProp1}</span>
                                <span className="flex items-center gap-2 text-gray-500 dark:text-gray-300 text-base md:text-lg"><Goal className="mr-1 text-gray-500 dark:text-gray-300" />{valueProp2}</span>
                            </div>
                        </div>
                        <div className="flex gap-2 flex-wrap w-full">
                            {tags.map((tag, index) => (
                                <Fragment key={tag}>
                                    <span className="text-gray-400 dark:text-gray-400">{tag}</span>
                                    {index < tags.length - 1 && <Dot className="text-gray-400 dark:text-gray-400" />}
                                </Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

const ProjectCardWrapper = () => {
    return (
        <div className="flex flex-col gap-12 w-full items-center justify-center px-4 lg:px-20">
            {projects.map((project) => (
                <ProjectCard
                    {...project}
                    key={project.projectName}
                />
            ))}
        </div>
    );
};

export default ProjectCardWrapper;