"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useCursor } from "@/context/CursorContext";

export default function Company() {
    const { setCursorType, setCursorText } = useCursor();
    const philosophyRef = useRef<HTMLDivElement>(null);
    const vennRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);

    const { scrollYProgress } = useScroll({
        target: philosophyRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (textRef.current) {
            gsap.fromTo(textRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.5,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: textRef.current,
                        start: "top 80%",
                    }
                }
            );
        }

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <div className="bg-[#F2F0E9] text-black w-full overflow-hidden">
            {/* Hero Section */}
            <div className="relative min-h-[90vh] w-full flex flex-col justify-center px-6 lg:px-24">
                <div className="max-w-[1400px] w-full mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-7xl md:text-[140px] font-medium tracking-tight leading-none mb-12"
                    >
                        Next Level
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                        className="h-[1px] w-full max-w-2xl bg-black mb-8 origin-left"
                    />
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="text-lg md:text-xl font-medium tracking-wide"
                    >
                        About us
                    </motion.p>
                </div>

                {/* Find Out More Scroll Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-xs tracking-widest uppercase cursor-pointer"
                    onClick={() => {
                        window.scrollTo({
                            top: window.innerHeight * 0.9,
                            behavior: "smooth"
                        });
                    }}
                    onMouseEnter={() => {
                        setCursorType("custom");
                        setCursorText("");
                    }}
                    onMouseLeave={() => setCursorType("default")}
                >
                    <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14" /><path d="m19 12-7 7-7-7" /></svg>
                    </div>
                    <span>Find out more</span>
                </motion.div>
            </div>

            {/* Philosophy Section */}
            <div ref={philosophyRef} className="relative w-full h-[120vh] overflow-hidden bg-black text-white">
                <motion.img
                    style={{ y }}
                    src="https://images.unsplash.com/photo-1600607687920-4e2a09be1587?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                    alt="Luxury Property"
                    className="absolute inset-0 w-full h-[120%] object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                <div className="relative z-10 h-full flex items-center justify-center container mx-auto px-6">
                    <h2 ref={textRef} className="text-3xl md:text-5xl lg:text-7xl font-light leading-tight max-w-5xl text-center">
                        Quality guarantees a life with peace of mind. At Altera Bauträger GmbH, we combine explicit design with implicit value, such as stress-free living and a healthy, eco-friendly living environment.
                    </h2>
                </div>
            </div>

            {/* Venn Diagram Section */}
            <div ref={vennRef} className="bg-black py-40 overflow-hidden relative w-full flex flex-col items-center justify-center text-white">
                <div className="relative w-full max-w-5xl aspect-[2/1] flex items-center justify-center">

                    {/* Left Circle - Innovation */}
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="absolute left-[10%] w-[50%] pt-[50%] rounded-full border border-white/30 mix-blend-screen flex items-center justify-center group z-20 hover:border-white transition-colors duration-500 cursor-default"
                        onMouseEnter={() => { setCursorType("custom"); setCursorText(""); }}
                        onMouseLeave={() => setCursorType("default")}
                    >
                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl md:text-4xl tracking-widest uppercase font-light pointer-events-none group-hover:scale-110 transition-transform duration-500">Innovation</span>
                    </motion.div>

                    {/* Right Circle - Quality */}
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="absolute right-[10%] w-[50%] pt-[50%] rounded-full border border-white/30 mix-blend-screen flex items-center justify-center group z-20 hover:border-white transition-colors duration-500 cursor-default"
                        onMouseEnter={() => { setCursorType("custom"); setCursorText(""); }}
                        onMouseLeave={() => setCursorType("default")}
                    >
                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl md:text-4xl tracking-widest uppercase font-light pointer-events-none group-hover:scale-110 transition-transform duration-500">Quality</span>
                    </motion.div>

                    {/* Center Intersection - Perfection */}
                    <div className="absolute top-0 bottom-0 left-[35%] right-[35%] overflow-hidden z-10 pointer-events-none opacity-50">
                        <img
                            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                            alt="Perfection Texture"
                            className="w-[300%] h-full object-cover -ml-[100%] mix-blend-overlay grayscale"
                        />
                    </div>
                </div>

                <motion.h3
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-24 text-4xl md:text-6xl font-medium tracking-widest uppercase relative z-30"
                >
                    Perfection
                </motion.h3>
            </div>

            {/* Approach Section */}
            <div className="bg-black text-white py-32 px-6 flex flex-col items-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl lg:text-7xl font-light text-center max-w-4xl"
                >
                    See, understand, advise, mediate
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-16 w-10 h-16 border-2 border-white/30 rounded-full flex justify-center p-2"
                >
                    <motion.div
                        animate={{ y: [0, 15, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-1 h-3 bg-white rounded-full"
                    />
                </motion.div>
            </div>

            {/* Bottom Target Pages */}
            <div className="grid grid-cols-1 divide-y divide-[#F2F0E9]/20 md:grid-cols-2 md:divide-y-0 md:divide-x w-full bg-black text-white">
                <Link href="/interior" className="group relative h-[50vh] overflow-hidden flex flex-col justify-end p-12">
                    <img
                        src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                        alt="Interior"
                        className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 opacity-60 group-hover:opacity-40"
                    />
                    <div className="relative z-10">
                        <p className="text-sm tracking-widest uppercase mb-4 opacity-70">Layout & fit-out</p>
                        <h3 className="text-4xl md:text-5xl font-light flex items-center gap-4 transition-transform duration-500 group-hover:translate-x-4">
                            Perfect Space
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 -ml-8 group-hover:ml-0"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                        </h3>
                    </div>
                </Link>
                <Link href="/projects" className="group relative h-[50vh] overflow-hidden flex flex-col justify-end p-12">
                    <img
                        src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                        alt="Projects"
                        className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 opacity-60 group-hover:opacity-40"
                    />
                    <div className="relative z-10">
                        <p className="text-sm tracking-widest uppercase mb-4 opacity-70">Choose property</p>
                        <h3 className="text-4xl md:text-5xl font-light flex items-center gap-4 transition-transform duration-500 group-hover:translate-x-4">
                            Our projects
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 -ml-8 group-hover:ml-0"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                        </h3>
                    </div>
                </Link>
            </div>

            <Footer />
        </div>
    );
}
