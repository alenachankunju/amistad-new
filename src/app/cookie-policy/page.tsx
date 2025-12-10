import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Cookie Policy | Amistad Contracting and Services",
    description: "Cookie Policy for Amistad Contracting and Services. Learn about how we use cookies on our website.",
    openGraph: {
        title: "Cookie Policy | Amistad Contracting and Services",
        description: "Cookie Policy for Amistad Contracting and Services.",
        url: "https://amistadgeneral.net/cookie-policy",
    },
};

export default function CookiePolicyPage() {
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
                            Cookie Policy
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
                                <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. What Are Cookies</h2>
                                <p className="mb-4">
                                    Cookies are small text files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.
                                </p>
                                <p>
                                    Cookies set by the website owner (in this case, Amistad Contracting and Services) are called &quot;first-party cookies.&quot; Cookies set by parties other than the website owner are called &quot;third-party cookies.&quot; Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics).
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. How We Use Cookies</h2>
                                <p className="mb-4">
                                    Amistad Contracting and Services (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) uses cookies and similar tracking technologies to track activity on our website located at amistadgeneral.net (the &quot;Website&quot;) and hold certain information. Cookies are used to enable certain features of our Website, to provide analytics, to store your preferences, and to enable advertisement delivery, including behavioral advertising.
                                </p>
                                <p>
                                    We use both session and persistent cookies on our Website and we use different types of cookies to run the Website.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. Types of Cookies We Use</h2>
                                
                                <h3 className="text-xl font-semibold text-slate-900 mb-3">Essential Cookies</h3>
                                <p className="mb-4">
                                    These cookies are essential to provide you with services available through the Website and to enable you to use some of its features. Without these cookies, the services that you have asked for cannot be provided, and we only use these cookies to provide you with those services.
                                </p>

                                <h3 className="text-xl font-semibold text-slate-900 mb-3">Functionality Cookies</h3>
                                <p className="mb-4">
                                    These cookies allow the Website to remember choices you make when you use the Website, such as remembering your language preferences or remembering your login details. The purpose of these cookies is to provide you with a more personal experience and to avoid you having to re-enter your preferences every time you use the Website.
                                </p>

                                <h3 className="text-xl font-semibold text-slate-900 mb-3">Analytics and Performance Cookies</h3>
                                <p className="mb-4">
                                    These cookies are used to collect information about traffic to the Website and how users use the Website. The information gathered does not identify any individual visitor. The information is aggregated and anonymous. It includes the number of visitors to the Website, the websites that referred them to the Website, the pages they visited on the Website, what time of day they visited the Website, whether they have visited the Website before, and other similar information.
                                </p>

                                <h3 className="text-xl font-semibold text-slate-900 mb-3">Targeting and Advertising Cookies</h3>
                                <p>
                                    These cookies track your browsing habits to enable us to show advertising which is more likely to be of interest to you. These cookies use information about your browsing history to group you with other users who have similar interests. Based on that information, and with our permission, third-party advertisers can place cookies to enable them to show adverts which we think will be relevant to your interests while you are on third-party websites.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. Third-Party Cookies</h2>
                                <p className="mb-4">
                                    In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the Website, deliver advertisements on and through the Website, and so on.
                                </p>
                                <p>
                                    These third-party cookies may include, but are not limited to, Google Analytics cookies, which are used to collect information about how visitors use our Website. We use this information to compile reports and to help us improve the Website.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. Your Choices Regarding Cookies</h2>
                                <p className="mb-4">
                                    If you&apos;d like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser. Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer, you may not be able to store your preferences, and some of our pages might not display properly.
                                </p>
                                <p className="mb-4">For the most common browsers, you can:</p>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li>Google Chrome: Settings &gt; Privacy and security &gt; Cookies and other site data</li>
                                    <li>Mozilla Firefox: Options &gt; Privacy &amp; Security &gt; Cookies and Site Data</li>
                                    <li>Microsoft Edge: Settings &gt; Privacy, search, and services &gt; Cookies and site permissions</li>
                                    <li>Safari: Preferences &gt; Privacy &gt; Cookies and website data</li>
                                </ul>
                                <p>
                                    You can also opt out of some third-party cookies through the Network Advertising Initiative&apos;s Opt-Out page or the Digital Advertising Alliance&apos;s Opt-Out page.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. Do Not Track Signals</h2>
                                <p>
                                    Some browsers incorporate a Do Not Track (DNT) feature that signals to websites you visit that you do not want to have your online activity tracked. Currently, there is no standard for how DNT signals work. As a result, our Website does not currently respond to DNT browser signals or mechanisms.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold text-slate-900 mb-4">7. Changes to This Cookie Policy</h2>
                                <p>
                                    We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the &quot;Last updated&quot; date at the top of this Cookie Policy.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold text-slate-900 mb-4">8. Contact Us</h2>
                                <p className="mb-4">
                                    If you have any questions about our use of cookies or other technologies, please contact us at:
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

