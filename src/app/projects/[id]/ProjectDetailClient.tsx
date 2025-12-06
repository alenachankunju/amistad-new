"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Project } from "@/data/projects";

function GalleryImage({ src, alt }: { src: string; alt: string }) {
    const [imageError, setImageError] = useState(false);

    if (imageError) return null;

    return (
        <div className="relative aspect-[4/3] rounded-lg overflow-hidden group">
            <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                onError={() => setImageError(true)}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
        </div>
    );
}

export default function ProjectDetailClient({ project }: { project: Project }) {
    const [heroImageError, setHeroImageError] = useState(false);

    useEffect(() => {
        // @ts-expect-error - known issue with this specific type definition
        if (typeof window !== "undefined" && window.lucide) {
            // @ts-expect-error - known issue with this specific type definition
            window.lucide.createIcons();
        }
    }, []);

    return (
        <>
            {/* Navigation */}
            <nav className="fixed w-full z-50 top-0 start-0 border-b border-slate-200 bg-white/90 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
                <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6 py-4">
                    <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse group">
                        <img src="/amistad_logo.png" alt="Amistad Contracting and Services" className="h-10 transition-transform group-hover:scale-105 duration-300" />
                    </Link>

                    <Link href="/#projects" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-2">
                        <i data-lucide="arrow-left" className="w-4 h-4"></i>
                        Back to Projects
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-slate-900">
                {!heroImageError && (
                    <div className="absolute inset-0">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover opacity-40"
                            onError={() => setHeroImageError(true)}
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900"></div>
                    </div>
                )}
                {heroImageError && (
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-900"></div>
                )}

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 text-xs font-medium uppercase tracking-wide mb-6">
                            {project.category}
                        </div>
                        <h1 className="text-5xl md:text-7xl font-semibold text-white leading-[1.05] tracking-tight mb-6">
                            {project.title}
                        </h1>
                        <p className="text-xl text-slate-300 mb-12 leading-relaxed">
                            {project.description}
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-8">
                            {project.stats.map((stat, index) => (
                                <div key={index} className="border-l-2 border-amber-500 pl-4">
                                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                                    <div className="text-sm text-slate-400 uppercase tracking-wider">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Details */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-12 mb-20">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-12">
                            {/* Challenge */}
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                                        <i data-lucide="alert-circle" className="w-5 h-5 text-slate-700"></i>
                                    </div>
                                    <h2 className="text-3xl font-semibold text-slate-900">The Challenge</h2>
                                </div>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    {project.challenge}
                                </p>
                            </div>

                            {/* Solution */}
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                                        <i data-lucide="lightbulb" className="w-5 h-5 text-amber-600"></i>
                                    </div>
                                    <h2 className="text-3xl font-semibold text-slate-900">Our Solution</h2>
                                </div>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    {project.solution}
                                </p>
                            </div>

                            {/* Technologies */}
                            <div>
                                <h3 className="text-xl font-semibold text-slate-900 mb-4">Technologies & Methods</h3>
                                <div className="flex flex-wrap gap-3">
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            {/* Project Info */}
                            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                                <h3 className="text-lg font-semibold text-slate-900 mb-6">Project Information</h3>
                                <div className="space-y-4">
                                    <div>
                                        <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Client</div>
                                        <div className="text-slate-900 font-medium">{project.details.client}</div>
                                    </div>
                                    <div>
                                        <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Location</div>
                                        <div className="text-slate-900 font-medium">{project.details.location}</div>
                                    </div>
                                    <div>
                                        <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Duration</div>
                                        <div className="text-slate-900 font-medium">{project.details.duration}</div>
                                    </div>
                                    <div>
                                        <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Team Size</div>
                                        <div className="text-slate-900 font-medium">{project.details.teamSize}</div>
                                    </div>
                                </div>
                            </div>

                            {/* Results */}
                            <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-lg p-6 border border-amber-200">
                                <h3 className="text-lg font-semibold text-slate-900 mb-6">Key Results</h3>
                                <div className="space-y-4">
                                    {project.results.map((result, index) => (
                                        <div key={index} className="flex items-center justify-between">
                                            <span className="text-sm text-slate-700">{result.label}</span>
                                            <span className="text-lg font-bold text-amber-700">{result.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Gallery */}
                    <div>
                        <h2 className="text-3xl font-semibold text-slate-900 mb-8">Project Gallery</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {project.gallery.map((image, index) => (
                                <GalleryImage
                                    key={index}
                                    src={image}
                                    alt={`${project.title} - Image ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-semibold mb-6">Ready to Start Your Project?</h2>
                    <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                        Let&apos;s discuss how we can bring your vision to life with precision engineering and expert fabrication.
                    </p>
                    <Link
                        href="/#contact"
                        className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-slate-900 bg-amber-500 rounded-md hover:bg-amber-400 transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                        Get in Touch
                        <i data-lucide="arrow-right" className="w-4 h-4 ml-2"></i>
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-white border-t border-slate-200 py-8">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex justify-center items-center">
                        <p className="text-slate-400 text-sm">© 2025 Amistad Contracting and Services. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    );
}
