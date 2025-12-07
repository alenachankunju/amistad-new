import { MetadataRoute } from 'next'
import { projects } from '@/data/projects'
import { getAllBlogPosts, BlogPost } from '@/data/insights';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://amistadgeneral.net'

    // Static routes
    const routes = [
        '',
        '#services',
        '#process',
        '#projects',
        '#contact',
        '/services/structural-steel',
        '/services/metal-works',
        '/services/installation',
        '/insights',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    // Dynamic project routes
    const projectRoutes = projects.map((project) => ({
        url: `${baseUrl}/projects/${project.id}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    // Dynamic blog routes
    const blogPosts = getAllBlogPosts();
    const blogRoutes = blogPosts.map((post: BlogPost) => ({
        url: `${baseUrl}/insights/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    return [...routes, ...projectRoutes, ...blogRoutes]
}
