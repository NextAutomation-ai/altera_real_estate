"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import MenuDrawer from "./MenuDrawer";

const routeTitleMap: Record<string, string> = {
    "/projects": "Projects",
    "/tech": "High-Tech Houses",
    "/interior": "Interior",
    "/company": "Company",
    "/contacts": "Contact",
    "/impressum": "Impressum",
};

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();
    const isHomePage = pathname === "/";
    const title = routeTitleMap[pathname];

    useEffect(() => {
        const handleScroll = () => {
            // Change header color logic if needed based on scroll position
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`fixed top-0 w-full z-50 transition-colors duration-300 ${isScrolled || !isHomePage ? "bg-white/90 backdrop-blur-md text-black shadow-sm" : "bg-transparent text-white"
                    }`}
            >
                <div className="container mx-auto px-6 h-24 flex items-center justify-between">
                    <div className="flex items-center gap-8">
                        <button
                            onClick={() => setIsMenuOpen(true)}
                            className="flex flex-col gap-[6px] w-8 hover:opacity-70 transition-opacity"
                        >
                            <span className={`h-[1px] w-full transition-colors ${isScrolled || !isHomePage ? "bg-black" : "bg-white"}`} />
                            <span className={`h-[1px] w-full transition-colors ${isScrolled || !isHomePage ? "bg-black" : "bg-white"}`} />
                        </button>

                        <div className="flex items-center gap-4">
                            <Link href="/" className="text-2xl font-bold tracking-widest uppercase">
                                Altera
                            </Link>
                            {title && (
                                <>
                                    <span className="h-6 w-[1px] bg-current opacity-30 mx-2" />
                                    <span className="text-sm font-medium tracking-widest uppercase">{title}</span>
                                </>
                            )}
                        </div>
                    </div>

                    <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wider font-medium">
                        <Link href="#" className="hover:opacity-70 transition-opacity">Choose the plot</Link>
                        <Link href="#" className="hover:opacity-70 transition-opacity">DE</Link>
                        <div className="flex gap-4 items-center border-l border-current pl-8">
                            <Link href="#" className="hover:opacity-70 transition-opacity">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                            </Link>
                            <Link href="#" className="hover:opacity-70 transition-opacity">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                            </Link>
                            <Link href="#" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
                                <span className="w-8 h-8 rounded-full border border-current flex items-center justify-center">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                </span>
                                Contact
                            </Link>
                        </div>
                    </nav>
                </div>
            </motion.header>

            <MenuDrawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </>
    );
}
