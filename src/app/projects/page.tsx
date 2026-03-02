"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard, { ProjectData } from "@/components/ProjectCard";
import Footer from "@/components/Footer";

const DUMMY_PROJECTS: ProjectData[] = [
    {
        id: 1,
        title: "Lörrach",
        subtitle: "Lettenweg 44",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        status: "For sale",
        year: "2024",
        apartments: 8,
        category: "For sale"
    },
    {
        id: 2,
        title: "Schopfheim",
        subtitle: "Hauptstraße 111",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        status: "For sale",
        year: "2024",
        apartments: 12,
        category: "For sale"
    },
    {
        id: 3,
        title: "Rheinfelden",
        subtitle: "Rheinweg 2",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09be1587?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        status: "Upcoming",
        year: "2025",
        apartments: 15,
        category: "Upcoming"
    },
    {
        id: 4,
        title: "Basel",
        subtitle: "Grenzstraße 10",
        image: "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        status: "Sold out",
        year: "2022",
        apartments: 6,
        category: "Sold out"
    }
];

const CATEGORIES = ["All", "For sale", "Upcoming", "Sold out"];

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = activeCategory === "All"
        ? DUMMY_PROJECTS
        : DUMMY_PROJECTS.filter(p => p.category === activeCategory);

    return (
        <div className="bg-[#F2F0E9] text-black">
            {/* Hero Section */}
            <div className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden mb-24">
                <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
                    <img
                        src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                        alt="Map Background"
                        className="w-full h-full object-cover"
                    />
                </div>
                <h1 className="text-6xl md:text-8xl lg:text-[140px] font-medium tracking-tight text-black mix-blend-overlay z-20 pointer-events-none text-center">
                    Our Projects
                </h1>
            </div>

            <div className="container mx-auto px-6 relative z-20 pb-32">
                {/* Filter Bar */}
                <div className="flex gap-8 border-b border-black/10 pb-4 mb-16 overflow-x-auto text-sm w-full max-w-xl">
                    {CATEGORIES.map(category => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`whitespace-nowrap transition-all duration-300 relative ${activeCategory === category ? "font-medium" : "opacity-50 hover:opacity-100"
                                }`}
                        >
                            {category}
                            {activeCategory === category && (
                                <motion.div
                                    layoutId="underline"
                                    className="absolute left-0 right-0 -bottom-[17px] h-[2px] bg-black"
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Project Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 min-h-[50vh]">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, idx) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                            >
                                <ProjectCard project={project} index={idx + 1} />
                            </motion.div>
                        ))}
                        {filteredProjects.length === 0 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="col-span-1 md:col-span-2 text-center py-20 text-black/50"
                            >
                                No projects found in this category.
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>

            <Footer />
        </div>
    );
}
