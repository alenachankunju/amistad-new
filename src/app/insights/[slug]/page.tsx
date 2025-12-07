import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getBlogPostBySlug, getAllBlogPosts } from "@/data/insights";

type Props = {
    params: Promise<{ slug: string }>
}

export async function generateMetadata(
    { params }: Props,
): Promise<Metadata> {
    const { slug } = await params
    const post = getBlogPostBySlug(slug)

    if (!post) {
        return {
            title: 'Article Not Found',
        }
    }

    return {
        title: `${post.title} | Amistad Insights`,
        description: post.excerpt,
        keywords: post.keywords,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: 'article',
            publishedTime: post.date,
            authors: [post.author],
            images: [post.image],
            url: `https://amistadgeneral.net/insights/${post.slug}`,
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.excerpt,
            images: [post.image],
        },
    }
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = getBlogPostBySlug(slug);

    if (!post) {
        notFound();
    }

    // JSON-LD Schema for Blog Posting
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "image": post.image,
        "author": {
            "@type": "Organization",
            "name": post.author
        },
        "publisher": {
            "@type": "Organization",
            "name": "Amistad Contracting and Services",
            "logo": {
                "@type": "ImageObject",
                "url": "https://amistadgeneral.net/amistad_logo.png"
            }
        },
        "datePublished": post.date,
        "description": post.excerpt
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Navigation */}
            <nav className="fixed w-full z-50 top-0 start-0 border-b border-slate-200 bg-white/90 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
                <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6 py-4">
                    <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse group">
                        <Image src="/amistad_logo.png" alt="Amistad Contracting and Services" width={150} height={40} className="h-10 w-auto transition-transform group-hover:scale-105 duration-300" />
                    </Link>

                    <Link href="/insights" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-2">
                        <i data-lucide="arrow-left" className="w-4 h-4"></i>
                        Back to Insights
                    </Link>
                </div>
            </nav>

            {/* Article Header */}
            <header className="pt-32 pb-12 bg-slate-50 border-b border-slate-200">
                <div className="max-w-3xl mx-auto px-6">
                    <div className="flex items-center gap-3 text-sm text-slate-500 mb-6">
                        <span className="bg-teal-100 text-teal-800 px-2 py-1 rounded font-medium">{post.category}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight mb-8">
                        {post.title}
                    </h1>
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold">
                            {post.author.charAt(0)}
                        </div>
                        <div>
                            <div className="font-medium text-slate-900">{post.author}</div>
                            <div className="text-xs text-slate-500">Editorial Team</div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Featured Image */}
            <div className="max-w-5xl mx-auto px-6 -mt-8 mb-12 relative z-10">
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>

            {/* Article Content */}
            <article className="max-w-3xl mx-auto px-6 pb-24">
                <div
                    className="prose prose-lg prose-slate prose-headings:font-semibold prose-a:text-teal-600 hover:prose-a:text-teal-700 prose-img:rounded-lg"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-slate-200">
                    <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-4">Related Topics</h3>
                    <div className="flex flex-wrap gap-2">
                        {post.keywords.map((keyword, index) => (
                            <span key={index} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm">
                                {keyword}
                            </span>
                        ))}
                    </div>
                </div>
            </article>

            {/* Footer */}
            <footer className="bg-white border-t border-slate-200 py-8">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <p className="text-slate-400 text-sm">© 2025 Amistad Contracting and Services. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
}

// Generate static params for all blog posts
export async function generateStaticParams() {
    const posts = getAllBlogPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}
