import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Architectural Metal Works Doha | Amistad Contracting",
    description: "Custom architectural metal works in Qatar. Specializing in stainless steel staircases, glass balustrades, decorative screens, and luxury metal fabrication.",
    keywords: ["Metal Works", "Architectural Steel", "Staircases Doha", "Balustrades Qatar", "Stainless Steel Fabrication", "Amistad Qatar"],
    openGraph: {
        title: "Architectural Metal Works Doha | Amistad Contracting",
        description: "Custom architectural metal works in Qatar. Specializing in luxury metal fabrication.",
        url: "https://amistadgeneral.net/services/metal-works",
        images: ["https://images.unsplash.com/photo-1558402347-1736bb7f512c?q=80&w=2070&auto=format&fit=crop"],
    },
};

export default function MetalWorksPage() {
    return (
        <>
            {/* Navigation */}
            <nav className="fixed w-full z-50 top-0 start-0 border-b border-slate-200 bg-white/90 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
                <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6 py-4">
                    <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse group">
                        <Image src="/amistad_logo.png" alt="Amistad Contracting and Services" width={150} height={40} className="h-10 w-auto transition-transform group-hover:scale-105 duration-300" />
                    </Link>

                    <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-500">
                        <Link href="/#home" className="hover:text-slate-900 transition-colors">Overview</Link>
                        <Link href="/#services" className="hover:text-slate-900 transition-colors">Services</Link>
                        <Link href="/#projects" className="hover:text-slate-900 transition-colors">Projects</Link>
                    </div>

                    <div className="flex md:order-2 space-x-3">
                        <Link href="/#contact" className="text-white bg-gradient-to-r from-teal-600 to-blue-700 hover:from-teal-700 hover:to-blue-800 focus:ring-4 focus:outline-none focus:ring-teal-200 font-medium rounded-md text-sm px-5 py-2.5 text-center transition-all duration-300 shadow-lg shadow-teal-900/10 flex items-center gap-2">
                            <span>Get a Quote</span>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1558402347-1736bb7f512c?q=80&w=2070&auto=format&fit=crop"
                        alt="Architectural Metal Works"
                        fill
                        className="object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 text-xs font-medium uppercase tracking-wide mb-6">
                            Design & Build
                        </div>
                        <h1 className="text-4xl md:text-6xl font-semibold text-white leading-tight mb-6">
                            Architectural Metal Works
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                            Where craftsmanship meets design. We create stunning architectural metal features that define spaces, from floating staircases to intricate decorative screens.
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <h2 className="text-3xl font-semibold text-slate-900 mb-6">Custom Fabrication</h2>
                            <div className="prose prose-slate text-slate-600 leading-relaxed">
                                <p className="mb-4">
                                    Amistad&apos;s architectural division specializes in high-end metalwork for residential, commercial, and hospitality projects. We understand that in architectural work, the finish is everything.
                                </p>
                                <p className="mb-4">
                                    Our skilled artisans work with a variety of metals including Stainless Steel (304/316), Aluminium, Brass, Copper, and Mild Steel to create:
                                </p>
                                <ul className="list-disc pl-5 space-y-2 mb-6">
                                    <li>Feature staircases (Spiral, Helical, Cantilevered)</li>
                                    <li>Glass and metal balustrades</li>
                                    <li>Decorative laser-cut screens and partitions</li>
                                    <li>Custom gates and fencing</li>
                                    <li>Canopies and pergolas</li>
                                </ul>
                                <p>
                                    We offer a wide range of finishes including mirror polish, satin brush, powder coating, and PVD coating to match your design intent.
                                </p>
                            </div>
                        </div>

                        <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
                            <h3 className="text-xl font-semibold text-slate-900 mb-6">Materials & Finishes</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center border-b border-slate-200 pb-3">
                                    <span className="text-slate-600">Stainless Steel</span>
                                    <span className="font-mono font-medium text-slate-900">Mirror / Satin / Hairline</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-slate-200 pb-3">
                                    <span className="text-slate-600">Aluminium</span>
                                    <span className="font-mono font-medium text-slate-900">Powder Coat / Anodized</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-slate-200 pb-3">
                                    <span className="text-slate-600">Glass Integration</span>
                                    <span className="font-mono font-medium text-slate-900">Tempered / Laminated</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-slate-200 pb-3">
                                    <span className="text-slate-600">Brass & Copper</span>
                                    <span className="font-mono font-medium text-slate-900">Antique / Polished</span>
                                </div>
                                <div className="flex justify-between items-center pt-2">
                                    <span className="text-slate-600">Design Software</span>
                                    <span className="font-mono font-medium text-slate-900">AutoCAD / Rhino 3D</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-slate-50 border-t border-slate-200">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-semibold text-slate-900 mb-6">Have a Design in Mind?</h2>
                    <p className="text-slate-600 mb-8">
                        Let our team bring your architectural vision to life with precision and style.
                    </p>
                    <Link
                        href="/#contact"
                        className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-white bg-slate-900 rounded-md hover:bg-slate-800 transition-all shadow-lg"
                    >
                        Discuss Your Project
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-white border-t border-slate-200 py-8">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <p className="text-slate-400 text-sm">© 2025 Amistad Contracting and Services. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
}
