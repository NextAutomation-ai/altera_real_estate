"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";

interface MenuDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

const menuLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/tech", label: "High-tech Houses" },
    { href: "/interior", label: "Interior" },
    { href: "/company", label: "Company" },
    { href: "/contacts", label: "Contact" },
];

export default function MenuDrawer({ isOpen, onClose }: MenuDrawerProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ type: "tween", ease: [0.76, 0, 0.24, 1], duration: 0.8 }}
                    className="fixed inset-y-0 right-0 w-full md:w-[70vw] lg:w-[50vw] bg-[#C0B09F] z-[100] flex flex-col justify-between py-12 px-8 overflow-hidden"
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-10 left-10 text-white hover:rotate-90 transition-transform duration-500"
                    >
                        <X size={40} strokeWidth={1} />
                    </button>

                    {/* Links container */}
                    <div className="flex-1 flex flex-col justify-center items-end max-w-2xl ml-auto w-full pt-20">
                        {menuLinks.map((link, i) => (
                            <div key={link.href} className="w-full border-t border-white/30 overflow-hidden py-4">
                                <motion.div
                                    initial={{ y: "100%", opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: "100%", opacity: 0 }}
                                    transition={{ delay: 0.4 + i * 0.1, duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                                    className="flex justify-end"
                                >
                                    <Link
                                        href={link.href}
                                        onClick={onClose}
                                        className="text-4xl md:text-5xl lg:text-6xl text-white font-light tracking-wide hover:opacity-70 transition-opacity"
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            </div>
                        ))}
                        <div className="w-full border-t border-white/30" />
                    </div>

                    {/* Footer Info */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.5 }}
                        className="mt-auto pt-10 flex flex-col md:flex-row justify-between items-start md:items-center text-white/90 text-sm gap-4"
                    >
                        <div className="flex items-center gap-4">
                            <span className="opacity-70 text-xs uppercase tracking-widest">E-mail</span>
                            <a href="mailto:info@altera-immobilien.com" className="font-medium text-base">info@altera-immobilien.com</a>
                        </div>

                        <div className="flex items-center gap-4">
                            <span className="opacity-70 text-xs uppercase tracking-widest">Phone</span>
                            <a href="tel:076234609815" className="font-medium text-base">07623 46 09 815</a>
                        </div>

                        <Link href="/impressum" className="uppercase tracking-widest text-xs border-b border-white/40 pb-1 mt-4 md:mt-0 hover:text-white transition-colors">
                            Impressum & Privacy
                        </Link>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
