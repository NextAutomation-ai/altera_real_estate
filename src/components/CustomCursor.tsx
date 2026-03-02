"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useCursor } from "@/context/CursorContext";

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHoveringLink, setIsHoveringLink] = useState(false);
    const { cursorType, cursorText } = useCursor();

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName.toLowerCase() === "a" ||
                target.tagName.toLowerCase() === "button" ||
                target.closest("a") ||
                target.closest("button")
            ) {
                setIsHoveringLink(true);
            } else {
                setIsHoveringLink(false);
            }
        };

        window.addEventListener("mousemove", updateMousePosition);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    const isActive = cursorType !== "default" || isHoveringLink;
    const isDiscover = cursorType === "discover";

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-4 h-4 rounded-full bg-black/80 pointer-events-none z-[9999] mix-blend-difference"
                animate={{
                    x: mousePosition.x - 8,
                    y: mousePosition.y - 8,
                    scale: isActive ? 0 : 1,
                }}
                transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
            />
            <motion.div
                className="fixed top-0 left-0 rounded-full border border-black/30 pointer-events-none z-[9998] mix-blend-difference flex items-center justify-center font-bold"
                animate={{
                    x: isDiscover ? mousePosition.x - 48 : mousePosition.x - 24,
                    y: isDiscover ? mousePosition.y - 48 : mousePosition.y - 24,
                    width: isDiscover ? 96 : 48,
                    height: isDiscover ? 96 : 48,
                    scale: isActive && !isDiscover ? 1.5 : 1,
                    backgroundColor: isDiscover ? "rgba(255,255,255,1)" : (isActive ? "rgba(255,255,255,1)" : "rgba(220, 220, 220, 1)"),
                }}
                transition={{ type: "tween", ease: "easeOut", duration: 0.2 }}
            >
                {isDiscover && <span className="text-black text-[10px] tracking-widest">{cursorText || "DISCOVER"}</span>}
                {!isDiscover && isActive && <span className="text-black text-[10px]">view</span>}
            </motion.div>
        </>
    );
}
