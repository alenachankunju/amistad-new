import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Privacy Policy | Amistad Contracting and Services",
    description: "Privacy Policy for Amistad Contracting and Services. Learn how we collect, use, and protect your personal information.",
    openGraph: {
        title: "Privacy Policy | Amistad Contracting and Services",
        description: "Privacy Policy for Amistad Contracting and Services.",
        url: "https://amistadgeneral.net/privacy-policy",
    },
};

export default function PrivacyPolicyPage() {
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
                            Privacy Policy
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
                                <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Introduction</h2>
                                <p className="mb-4">
                                    Amistad Contracting and Services (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website located at amistadgeneral.net (the &quot;Website&quot;).
                                </p>
                                <p>
                                    Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the Website.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. Information We Collect</h2>
                                <p className="mb-4">We may collect information about you in a variety of ways. The information we may collect on the Website includes:</p>
                                <h3 className="text-xl font-semibold text-slate-900 mb-3">Personal Data</h3>
                                <p className="mb-4">
                                    Personally identifiable information, such as your name, email address, and telephone number, that you voluntarily give to us when you register with the Website or when you choose to participate in various activities related to the Website, such as submitting a contact form or subscribing to our newsletter.
                                </p>
                                <h3 className="text-xl font-semibold text-slate-900 mb-3">Derivative Data</h3>
                                <p className="mb-4">
                                    Information our servers automatically collect when you access the Website, such as your IP address, browser type, operating system, access times, and the pages you have viewed directly before and after accessing the Website.
                                </p>
                                <h3 className="text-xl font-semibold text-slate-900 mb-3">Financial Data</h3>
                                <p>
                                    Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services from the Website.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. Use of Your Information</h2>
                                <p className="mb-4">Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Website to:</p>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li>Create and manage your account</li>
                                    <li>Process your transactions and send you related information</li>
                                    <li>Email you regarding your account or order</li>
                                    <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Website</li>
                                    <li>Generate a personal profile about you to make future visits more personalized</li>
                                    <li>Increase the efficiency and operation of the Website</li>
                                    <li>Monitor and analyze usage and trends to improve your experience with the Website</li>
                                    <li>Notify you of updates to the Website</li>
                                    <li>Perform other business activities as needed</li>
                                    <li>Request feedback and contact you about your use of the Website</li>
                                    <li>Resolve disputes and troubleshoot problems</li>
                                    <li>Respond to product and customer service requests</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. Disclosure of Your Information</h2>
                                <p className="mb-4">We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>
                                <h3 className="text-xl font-semibold text-slate-900 mb-3">By Law or to Protect Rights</h3>
                                <p className="mb-4">
                                    If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
                                </p>
                                <h3 className="text-xl font-semibold text-slate-900 mb-3">Third-Party Service Providers</h3>
                                <p className="mb-4">
                                    We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
                                </p>
                                <h3 className="text-xl font-semibold text-slate-900 mb-3">Business Transfers</h3>
                                <p>
                                    We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. Security of Your Information</h2>
                                <p>
                                    We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. Your Rights</h2>
                                <p className="mb-4">Depending on your location, you may have the following rights regarding your personal information:</p>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li>The right to access – You have the right to request copies of your personal data</li>
                                    <li>The right to rectification – You have the right to request that we correct any information you believe is inaccurate</li>
                                    <li>The right to erasure – You have the right to request that we erase your personal data, under certain conditions</li>
                                    <li>The right to restrict processing – You have the right to request that we restrict the processing of your personal data</li>
                                    <li>The right to object to processing – You have the right to object to our processing of your personal data</li>
                                    <li>The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold text-slate-900 mb-4">7. Contact Us</h2>
                                <p className="mb-4">
                                    If you have questions or comments about this Privacy Policy, please contact us at:
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

