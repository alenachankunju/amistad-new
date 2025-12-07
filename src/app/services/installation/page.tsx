import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Steel Installation & Rigging Services Qatar | Amistad Contracting",
    description: "Expert steel erection and rigging services in Qatar. Certified installation teams, comprehensive lift plans, and strict HSE compliance for safe project delivery.",
    keywords: ["Steel Installation", "Rigging Services", "Steel Erection Qatar", "Site Installation", "Crane Lifting", "Amistad Safety"],
    openGraph: {
        title: "Steel Installation & Rigging Services Qatar | Amistad Contracting",
        description: "Expert steel erection and rigging services in Qatar. Certified installation teams.",
        url: "https://amistadgeneral.net/services/installation",
        images: ["https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"],
    },
};

export default function InstallationPage() {
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
                        src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
                        alt="Steel Installation and Rigging"
                        fill
                        className="object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-500/30 text-teal-400 text-xs font-medium uppercase tracking-wide mb-6">
                            Site Operations
                        </div>
                        <h1 className="text-4xl md:text-6xl font-semibold text-white leading-tight mb-6">
                            Installation & Rigging
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                            Safe, efficient, and precise. Our certified installation teams manage complex lifting operations and on-site assembly to ensure your project is delivered on time.
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <h2 className="text-3xl font-semibold text-slate-900 mb-6">Site Execution</h2>
                            <div className="prose prose-slate text-slate-600 leading-relaxed">
                                <p className="mb-4">
                                    Fabrication is only half the story. The success of any steel project relies on safe and accurate installation. Amistad Contracting provides comprehensive site services, managing everything from logistics to final bolt torqueing.
                                </p>
                                <p className="mb-4">
                                    We specialize in:
                                </p>
                                <ul className="list-disc pl-5 space-y-2 mb-6">
                                    <li>Structural steel erection</li>
                                    <li>Heavy lifting and complex rigging</li>
                                    <li>Mobile crane coordination</li>
                                    <li>On-site welding and modification</li>
                                    <li>Cladding and decking installation</li>
                                </ul>
                                <p>
                                    Safety is our core value. Every lift is planned with detailed Method Statements and Risk Assessments (RAMS). Our supervisors are trained to international safety standards to ensure a zero-harm environment.
                                </p>
                            </div>
                        </div>

                        <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
                            <h3 className="text-xl font-semibold text-slate-900 mb-6">Safety & Compliance</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center border-b border-slate-200 pb-3">
                                    <span className="text-slate-600">Lift Planning</span>
                                    <span className="font-mono font-medium text-slate-900">Appointed Persons (AP)</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-slate-200 pb-3">
                                    <span className="text-slate-600">Riggers</span>
                                    <span className="font-mono font-medium text-slate-900">Certified Level 1-3</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-slate-200 pb-3">
                                    <span className="text-slate-600">Equipment</span>
                                    <span className="font-mono font-medium text-slate-900">Third-Party Certified</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-slate-200 pb-3">
                                    <span className="text-slate-600">HSE Standards</span>
                                    <span className="font-mono font-medium text-slate-900">QCS 2014 / OSHA</span>
                                </div>
                                <div className="flex justify-between items-center pt-2">
                                    <span className="text-slate-600">Site Management</span>
                                    <span className="font-mono font-medium text-slate-900">Full Supervision</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-slate-50 border-t border-slate-200">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-semibold text-slate-900 mb-6">Planning a Complex Lift?</h2>
                    <p className="text-slate-600 mb-8">
                        Ensure your project is in safe hands. Contact our installation experts today.
                    </p>
                    <Link
                        href="/#contact"
                        className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-white bg-slate-900 rounded-md hover:bg-slate-800 transition-all shadow-lg"
                    >
                        Get a Quote
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
