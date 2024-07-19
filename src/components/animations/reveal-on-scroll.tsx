'use client';

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";

function withRevealOnScroll<T extends React.ComponentType<any>>(Component: T) {
    const WrappedComponent = (props: React.ComponentProps<T>) => {
        const controls = useAnimation();
        const [ref, inView] = useInView({ triggerOnce: true });

        React.useEffect(() => {
            if (inView) {
                controls.start("visible");
            }
        }, [controls, inView]);

        return (
            <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
            >
                <Component {...props} />
            </motion.div>
        );
    };

    WrappedComponent.displayName = `withRevealOnScroll(${Component.displayName || Component.name || "Component"})`;

    return WrappedComponent;
}

export default withRevealOnScroll;