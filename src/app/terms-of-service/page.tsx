import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Terms of Service | Amistad Contracting and Services",
    description: "Terms of Service for Amistad Contracting and Services. Please read these terms carefully before using our website.",
    openGraph: {
        title: "Terms of Service | Amistad Contracting and Services",
        description: "Terms of Service for Amistad Contracting and Services.",
        url: "https://amistadgeneral.net/terms-of-service",
    },
};

export default function TermsOfServicePage() {
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
            <section className="relative pt-32 pb-12 lg:pt-40 lg:pb-16 bg-slate-900">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-semibold text-white leading-tight mb-4">
                            Terms of Service
                        </h1>
                        <p className="text-lg text-slate-300">
                            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="prose prose-slate max-w-none">
                        <div className="space-y-8 text-slate-600 leading-relaxed">
                            <div>
                                <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Agreement to Terms</h2>
                                <p className="mb-4">
                                    By accessing or using the website of Amistad Contracting and Services (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) located at amistadgeneral.net (the &quot;Website&quot;), you agree to be bound by these Terms of Service and all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
                                </p>
                                <p>
                                    If you do not agree with any of these terms, you are prohibited from using or accessing this Website. The materials contained in this Website are protected by applicable copyright and trademark law.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. Use License</h2>
                                <p className="mb-4">
                                    Permission is granted to temporarily download one copy of the materials on Amistad Contracting and Services&apos;s Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li>Modify or copy the materials</li>
                                    <li>Use the materials for any commercial purpose or for any public display (commercial or non-commercial)</li>
                                    <li>Attempt to decompile or reverse engineer any software contained on the Website</li>
                                    <li>Remove any copyright or other proprietary notations from the materials</li>
                                    <li>Transfer the materials to another person or &quot;mirror&quot; the materials on any other server</li>
                                </ul>
                                <p>
                                    This license shall automatically terminate if you violate any of these restrictions and may be terminated by Amistad Contracting and Services at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. Disclaimer</h2>
                                <p className="mb-4">
                                    The materials on Amistad Contracting and Services&apos;s Website are provided on an &apos;as is&apos; basis. Amistad Contracting and Services makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                                </p>
                                <p>
                                    Further, Amistad Contracting and Services does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its Website or otherwise relating to such materials or on any sites linked to this Website.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. Limitations</h2>
                                <p>
                                    In no event shall Amistad Contracting and Services or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Amistad Contracting and Services&apos;s Website, even if Amistad Contracting and Services or an authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. Accuracy of Materials</h2>
                                <p>
                                    The materials appearing on Amistad Contracting and Services&apos;s Website could include technical, typographical, or photographic errors. Amistad Contracting and Services does not warrant that any of the materials on its Website are accurate, complete, or current. Amistad Contracting and Services may make changes to the materials contained on its Website at any time without notice. However, Amistad Contracting and Services does not make any commitment to update the materials.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. Links</h2>
                                <p>
                                    Amistad Contracting and Services has not reviewed all of the sites linked to its Website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Amistad Contracting and Services of the site. Use of any such linked website is at the user&apos;s own risk.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold text-slate-900 mb-4">7. Modifications</h2>
                                <p>
                                    Amistad Contracting and Services may revise these Terms of Service for its Website at any time without notice. By using this Website you are agreeing to be bound by the then current version of these Terms of Service.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold text-slate-900 mb-4">8. Governing Law</h2>
                                <p>
                                    These terms and conditions are governed by and construed in accordance with the laws of the State of Qatar and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold text-slate-900 mb-4">9. Contact Information</h2>
                                <p className="mb-4">
                                    If you have any questions about these Terms of Service, please contact us at:
                                </p>
                                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                                    <p className="mb-2"><strong>Amistad Contracting and Services</strong></p>
                                    <p className="mb-2">Email: sales@amistadgeneral.net</p>
                                    <p className="mb-2">Phone: +974 77070533</p>
                                    <p>Address: Industrial Area, Doha, Qatar</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-white border-t border-slate-200 py-8">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Amistad Contracting and Services. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
}

