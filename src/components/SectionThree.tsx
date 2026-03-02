"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SectionThree() {
    const containerRef = useRef<HTMLElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(
            imageRef.current,
            { y: -100, scale: 1.1 },
            {
                y: 100,
                scale: 1,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            }
        );
    }, []);

    return (
        <section ref={containerRef} className="py-32 px-6 bg-[#f4f4f4] text-black overflow-hidden">
            <div className="container mx-auto">
                <h2 className="text-5xl md:text-8xl font-medium tracking-tight mb-20 text-center">
                    Live smart. <br />
                    <span className="text-black/30">Sustainably.</span>
                </h2>

                <div className="relative w-full max-w-5xl mx-auto h-[60vh] md:h-[80vh] overflow-hidden" style={{ clipPath: "circle(60% at 50% 100%)" }}>
                    <div
                        ref={imageRef}
                        className="absolute inset-0 w-full h-[120%] -top-[10%]"
                        style={{
                            backgroundImage: "url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        }}
                    />
                </div>
            </div>
        </section>
    );
}
