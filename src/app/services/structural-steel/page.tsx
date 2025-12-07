import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Structural Steel Fabrication Qatar | Amistad Contracting",
    description: "Premier structural steel fabrication services in Doha, Qatar. ISO-certified engineering, CNC precision, and heavy structural steel solutions for commercial and industrial projects.",
    keywords: ["Structural Steel", "Steel Fabrication Qatar", "Heavy Steel", "Beam Fabrication", "Amistad Engineering"],
    openGraph: {
        title: "Structural Steel Fabrication Qatar | Amistad Contracting",
        description: "Premier structural steel fabrication services in Doha, Qatar. ISO-certified engineering.",
        url: "https://amistadgeneral.net/services/structural-steel",
        images: ["https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=1997&auto=format&fit=crop"],
    },
};

export default function StructuralSteelPage() {
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
                        src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=1997&auto=format&fit=crop"
                        alt="Structural Steel Fabrication"
                        fill
                        className="object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-500/30 text-teal-400 text-xs font-medium uppercase tracking-wide mb-6">
                            Core Competency
                        </div>
                        <h1 className="text-4xl md:text-6xl font-semibold text-white leading-tight mb-6">
                            Structural Steel Fabrication
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                            Precision engineering meets heavy-duty performance. We deliver ISO-certified structural steel solutions for Qatar&apos;s most demanding infrastructure and commercial projects.
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <h2 className="text-3xl font-semibold text-slate-900 mb-6">Engineering Excellence</h2>
                            <div className="prose prose-slate text-slate-600 leading-relaxed">
                                <p className="mb-4">
                                    At Amistad Contracting and Services, our structural steel division is the backbone of our operations. We operate a state-of-the-art fabrication facility in the Doha Industrial Area, equipped with advanced CNC machinery capable of processing heavy sections with millimeter precision.
                                </p>
                                <p className="mb-4">
                                    Our team of certified engineers and fabricators works with S355 and S460 grade steel to produce:
                                </p>
                                <ul className="list-disc pl-5 space-y-2 mb-6">
                                    <li>Heavy structural columns and beams</li>
                                    <li>Portal frames for warehouses and hangars</li>
                                    <li>Trusses and long-span structures</li>
                                    <li>Mezzanine floors and platforms</li>
                                    <li>Crane girders and runway beams</li>
                                </ul>
                                <p>
                                    We utilize Tekla Structures for 3D BIM modeling, ensuring that every connection is clash-free and optimized for efficient erection on site.
                                </p>
                            </div>
                        </div>

                        <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
                            <h3 className="text-xl font-semibold text-slate-900 mb-6">Technical Capabilities</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center border-b border-slate-200 pb-3">
                                    <span className="text-slate-600">Monthly Capacity</span>
                                    <span className="font-mono font-medium text-slate-900">450 Tonnes</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-slate-200 pb-3">
                                    <span className="text-slate-600">Max Beam Length</span>
                                    <span className="font-mono font-medium text-slate-900">24 Meters</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-slate-200 pb-3">
                                    <span className="text-slate-600">CNC Cutting</span>
                                    <span className="font-mono font-medium text-slate-900">Plasma & Oxy-fuel</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-slate-200 pb-3">
                                    <span className="text-slate-600">Welding Standards</span>
                                    <span className="font-mono font-medium text-slate-900">AWS D1.1 / ISO 3834</span>
                                </div>
                                <div className="flex justify-between items-center pt-2">
                                    <span className="text-slate-600">Certifications</span>
                                    <span className="font-mono font-medium text-slate-900">ISO 9001:2015</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-slate-50 border-t border-slate-200">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-semibold text-slate-900 mb-6">Need a Structural Solution?</h2>
                    <p className="text-slate-600 mb-8">
                        From design to installation, we handle the entire lifecycle of your steel project.
                    </p>
                    <Link
                        href="/#contact"
                        className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-white bg-slate-900 rounded-md hover:bg-slate-800 transition-all shadow-lg"
                    >
                        Request a Consultation
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
