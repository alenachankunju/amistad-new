import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllBlogPosts } from "@/data/insights";

export const metadata: Metadata = {
    title: "Insights & Industry News | Amistad Contracting",
    description: "Stay updated with the latest trends in structural steel fabrication, construction safety, and engineering innovations in Qatar.",
    keywords: ["Construction Blog Qatar", "Steel Industry News", "Amistad Insights", "Engineering Trends"],
    openGraph: {
        title: "Insights & Industry News | Amistad Contracting",
        description: "Latest trends in structural steel and construction engineering.",
        url: "https://amistadgeneral.net/insights",
    },
};

export default function InsightsPage() {
    const posts = getAllBlogPosts();

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
            <section className="relative pt-32 pb-20 bg-slate-50 border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-6">
                        Insights & News
                    </h1>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                        Expert perspectives on structural engineering, construction trends, and project delivery in Qatar.
                    </p>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <article key={post.slug} className="flex flex-col bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                <Link href={`/insights/${post.slug}`} className="relative h-48 overflow-hidden group">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </Link>
                                <div className="flex-1 p-6 flex flex-col">
                                    <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                                        <span className="bg-teal-50 text-teal-700 px-2 py-1 rounded font-medium">{post.category}</span>
                                        <span>•</span>
                                        <span>{post.readTime}</span>
                                    </div>
                                    <h2 className="text-xl font-semibold text-slate-900 mb-3 line-clamp-2">
                                        <Link href={`/insights/${post.slug}`} className="hover:text-teal-700 transition-colors">
                                            {post.title}
                                        </Link>
                                    </h2>
                                    <p className="text-slate-600 mb-6 line-clamp-3 text-sm leading-relaxed flex-1">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                                        <span className="text-xs text-slate-500">{post.date}</span>
                                        <Link href={`/insights/${post.slug}`} className="text-sm font-medium text-teal-700 hover:text-teal-800 flex items-center gap-1">
                                            Read Article <span aria-hidden="true">→</span>
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="py-20 bg-slate-900 text-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-semibold mb-4">Stay Informed</h2>
                    <p className="text-slate-400 mb-8">
                        Subscribe to receive the latest engineering insights and company updates directly to your inbox.
                    </p>
                    <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-4 py-3 rounded-md bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 flex-1"
                        />
                        <button type="submit" className="px-6 py-3 bg-teal-600 hover:bg-teal-700 rounded-md font-medium transition-colors">
                            Subscribe
                        </button>
                    </form>
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
