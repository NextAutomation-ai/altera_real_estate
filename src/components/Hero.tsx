"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
    const textRef = useRef<HTMLHeadingElement>(null);
    const subRef = useRef<HTMLParagraphElement>(null);
    const badgeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.5 } });

        tl.fromTo(
            textRef.current,
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, delay: 0.2 }
        )
            .fromTo(
                subRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1 },
                "-=1.2"
            )
            .fromTo(
                badgeRef.current,
                { scale: 0, rotation: -90, opacity: 0 },
                { scale: 1, rotation: 0, opacity: 1, duration: 1, ease: "back.out(1.7)" },
                "-=1"
            );

        // Continuous rotation for badge
        gsap.to(badgeRef.current, {
            rotation: 360,
            duration: 10,
            repeat: -1,
            ease: "linear",
        });

    }, []);

    return (
        <section className="relative h-screen w-full flex items-center bg-black overflow-hidden">
            {/* Background Image / Video wrapper */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80"
                    alt="Modern Architecture"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
            </div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col justify-end h-full pb-32">
                <p ref={subRef} className="text-white text-sm tracking-[0.2em] uppercase mb-4 opacity-0">
                    Live Smart
                </p>
                <h1 ref={textRef} className="text-white text-6xl md:text-8xl lg:text-[140px] font-medium leading-[0.9] tracking-tight opacity-0">
                    Innovation <br /> & Elegance
                </h1>

                <div className="mt-12 flex items-center justify-between w-full max-w-4xl border-t border-white/30 pt-8">
                    <p className="text-white text-xl md:text-3xl max-w-xl text-balance">
                        Your property developer in the Lörrach, Rheinfelden, and Schopfheim area
                    </p>
                    <button className="group flex items-center gap-4 text-white text-sm tracking-widest uppercase hover:opacity-70 transition-opacity">
                        <span className="w-12 h-12 rounded-full border border-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14" /><path d="m19 12-7 7-7-7" /></svg>
                        </span>
                        Learn More
                    </button>
                </div>
            </div>

            {/* Floating Badge */}
            <div ref={badgeRef} className="absolute top-40 right-20 z-20 hidden md:flex items-center justify-center w-32 h-32 rounded-full bg-white/10 backdrop-blur-md border border-white/20 opacity-0 text-white text-xs uppercase tracking-widest text-center p-4">
                CSSDA <br /> Awarded
            </div>
        </section>
    );
}
