'use client';
import { useNavigation } from "@/context/NavigationContext";
import { Button } from "@/components/ui/primitives/button";
import { useState, useEffect } from "react";
import { ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type NavigateButtonProps = {
    ids: { id: string; name: string }[];
};

const NavigateButton = ({ ids }: NavigateButtonProps) => {
    const { navigateTo } = useNavigation();
    const [isOpen, setIsOpen] = useState(false);
    const [currentId, setCurrentId] = useState<string | null>(null);

    useEffect(() => {
        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setCurrentId(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        });

        ids.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            ids.forEach(({ id }) => {
                const element = document.getElementById(id);
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, [ids]);

    return (
        <>
            <AnimatePresence>
                {!isOpen && (
                    <motion.div
                        key="button"
                        initial={{ x: 0, opacity: 1 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: '-100%', opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-10 left-0"
                    >
                        <Button onClick={() => setIsOpen(true)} variant="secondary" className="shadow-md shadow-black/10 dark:shadow-white/10">
                            <ChevronRight className="w-4 h-4 mr-2" /> Sections
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="menu"
                        initial={{ x: '-100%', opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: '-100%', opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-10 left-0 flex flex-col gap-2 bg-black/10 dark:bg-white/10 rounded-md shadow-md shadow-black/10 dark:shadow-white/10"
                    >
                        <Button variant="ghost" className="items-start justify-start" onClick={() => setIsOpen(false)}>
                            <X />
                        </Button>
                        {ids.map((id) => (
                            <Button
                                key={id.id}
                                onClick={() => navigateTo(id.id)}
                                variant="ghost"
                                className={`items-start justify-start ${currentId === id.id ? 'bg-zinc-300 dark:bg-zinc-500 text-white' : ''}`}
                            >
                                {id.name}
                            </Button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default NavigateButton;