"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SectionTwo() {
    const sectionRef = useRef<HTMLElement>(null);
    const textRefs = useRef<(HTMLHeadingElement | null)[]>([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (textRefs.current.length > 0) {
            gsap.fromTo(
                textRefs.current,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.5,
                    stagger: 0.1,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 70%",
                    },
                }
            );
        }
    }, []);

    return (
        <section ref={sectionRef} className="py-32 px-6 bg-white text-black min-h-screen flex items-center">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
                    <div className="col-span-1 md:col-span-4 pl-4 border-l border-black/20">
                        <p className="text-sm tracking-widest uppercase mb-8">About Us</p>
                        <p className="text-lg leading-relaxed text-black/70 mb-8">
                            We don't just build houses, we create living spaces. Our focus is on sustainable architecture and modern design that blends seamlessly into the environment.
                        </p>
                        <button className="group relative w-32 h-32 rounded-full border border-black flex items-center justify-center overflow-hidden">
                            <span className="absolute inset-0 bg-black translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out rounded-full" />
                            <span className="relative z-10 text-xs tracking-widest uppercase group-hover:text-white transition-colors duration-500">
                                Projects
                            </span>
                        </button>
                    </div>

                    <div className="col-span-1 md:col-span-8 flex flex-col gap-2">
                        {[
                            "Your perfect",
                            "home, with",
                            "attention to detail."
                        ].map((line, index) => (
                            <div key={index} className="overflow-hidden">
                                <h2
                                    ref={(el) => { textRefs.current[index] = el; }}
                                    className="text-6xl md:text-8xl lg:text-[110px] whitespace-nowrap font-medium leading-[0.9] tracking-tight"
                                >
                                    {line}
                                </h2>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
