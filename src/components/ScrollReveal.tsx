"use client";

import { useEffect, useRef, ReactNode } from "react";
import { motion, useInView, useAnimation, Variant } from "framer-motion";

interface ScrollRevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    duration?: number;
}

const directionMap: Record<string, { x?: number; y?: number }> = {
    up: { y: 30 },
    down: { y: -30 },
    left: { x: 40 },
    right: { x: -40 },
    none: {},
};

export function ScrollReveal({
    children,
    className = "",
    delay = 0,
    direction = "up",
    duration = 0.6,
}: ScrollRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });
    const controls = useAnimation();

    const offset = directionMap[direction] || {};

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    const hidden: Variant = {
        opacity: 0,
        ...offset,
    };

    const visible: Variant = {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
            duration,
            delay,
            ease: [0.25, 0.4, 0.25, 1],
        },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{ hidden, visible }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
