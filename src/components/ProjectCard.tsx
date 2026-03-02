"use client";

import { useCursor } from "@/context/CursorContext";

export interface ProjectData {
    id: number;
    title: string;
    subtitle: string;
    image: string;
    status: string;
    year: string;
    apartments: number;
    category: "For sale" | "Upcoming" | "Sold out";
}

interface ProjectCardProps {
    project: ProjectData;
    index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
    const { setCursorType, setCursorText } = useCursor();

    return (
        <div className="flex flex-col gap-6">
            <div
                className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-200 cursor-none group"
                onMouseEnter={() => {
                    setCursorType("discover");
                    setCursorText("DISCOVER");
                }}
                onMouseLeave={() => {
                    setCursorType("default");
                    setCursorText("");
                }}
            >
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 transition-opacity duration-1000 group-hover:bg-black/10" />

                {/* Overlay Content */}
                <div className="absolute bottom-8 left-8 flex gap-6 items-end text-white">
                    <div className="w-16 h-16 border border-white flex items-center justify-center text-xl font-light bg-black/10 backdrop-blur-sm">
                        {index.toString().padStart(2, "0")}
                    </div>
                    <div>
                        <h3 className="text-4xl md:text-5xl font-medium tracking-tight mb-2 drop-shadow-lg">{project.title}</h3>
                        <p className="text-lg opacity-90 drop-shadow-md">{project.subtitle}</p>
                    </div>
                </div>
            </div>

            {/* Details Table */}
            <div className="flex flex-col border-t border-black/10">
                <div className="flex justify-between py-4 border-b border-black/10 text-sm">
                    <span className="opacity-60">Status</span>
                    <span className="font-medium">{project.status}</span>
                </div>
                <div className="flex justify-between py-4 border-b border-black/10 text-sm">
                    <span className="opacity-60">Year of construction</span>
                    <span className="font-medium">{project.year}</span>
                </div>
                <div className="flex justify-between py-4 border-b border-black/10 text-sm">
                    <span className="opacity-60">Number of apartments</span>
                    <span className="font-medium">{project.apartments}</span>
                </div>
            </div>
        </div>
    );
}
