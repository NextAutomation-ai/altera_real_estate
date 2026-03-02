"use client";

import { motion, Variants } from "framer-motion";
import { useCursor } from "@/context/CursorContext";

export default function Contacts() {
    const { setCursorType } = useCursor();

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
    };

    return (
        <div className="relative w-full h-screen overflow-hidden bg-black text-white flex items-center">
            {/* Background Map Placeholder */}
            <motion.div
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 0.4, scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="absolute inset-0 z-0"
            >
                <img
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2500&q=80"
                    alt="Map of Rheinfelden"
                    className="w-full h-full object-cover grayscale mix-blend-luminosity"
                />
            </motion.div>

            <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-black/50 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative z-20 flex flex-col md:flex-row justify-between items-center w-full mt-24">

                {/* Main Contact Links */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="flex flex-col gap-12 w-full md:w-2/3"
                >
                    <motion.a
                        variants={itemVariants}
                        href="mailto:info@altera-immobilien.com"
                        className="text-4xl md:text-6xl lg:text-[80px] font-medium tracking-tight hover:italic transition-all duration-300 w-fit"
                        onMouseEnter={() => setCursorType("custom")}
                        onMouseLeave={() => setCursorType("default")}
                    >
                        info@altera-immobilien.com
                    </motion.a>
                    <motion.a
                        variants={itemVariants}
                        href="tel:076234609815"
                        className="text-4xl md:text-6xl lg:text-[80px] font-medium tracking-tight hover:italic transition-all duration-300 w-fit"
                        onMouseEnter={() => setCursorType("custom")}
                        onMouseLeave={() => setCursorType("default")}
                    >
                        07623 46 09 815
                    </motion.a>
                </motion.div>

                {/* Sidebar Info */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                    className="w-full md:w-1/3 flex flex-col gap-8 text-sm md:text-base tracking-wider leading-relaxed mt-16 md:mt-0 md:pl-16 border-l border-white/20"
                >
                    <div>
                        <h2 className="uppercase font-bold mb-2 opacity-100">Altera Bauträger GmbH</h2>
                        <p className="opacity-70">Inh. Eduard Stumpf</p>
                    </div>

                    <div>
                        <p className="opacity-70">Nollinger Straße 3</p>
                        <p className="opacity-70">79618 Rheinfelden (Baden)</p>
                    </div>

                    <div>
                        <h3 className="uppercase font-bold mb-2 opacity-100">Opening hours:</h3>
                        <p className="opacity-70">Mon – Fri    8:00 a.m. – 17:00 p.m.</p>
                        <p className="opacity-70">Sat   by appointment</p>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
