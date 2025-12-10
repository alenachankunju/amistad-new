import { MetadataRoute } from 'next'
import { projects } from '@/data/projects'
import { getAllBlogPosts, BlogPost } from '@/data/insights';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://amistadgeneral.net'

    // Static routes (removed hash routes as they're not separate pages)
    const routes = [
        {
            route: '',
            priority: 1.0,
            changeFrequency: 'weekly' as const,
        },
        {
            route: '/services/structural-steel',
            priority: 0.9,
            changeFrequency: 'monthly' as const,
        },
        {
            route: '/services/metal-works',
            priority: 0.9,
            changeFrequency: 'monthly' as const,
        },
        {
            route: '/services/installation',
            priority: 0.9,
            changeFrequency: 'monthly' as const,
        },
        {
            route: '/insights',
            priority: 0.8,
            changeFrequency: 'weekly' as const,
        },
        {
            route: '/privacy-policy',
            priority: 0.3,
            changeFrequency: 'yearly' as const,
        },
        {
            route: '/terms-of-service',
            priority: 0.3,
            changeFrequency: 'yearly' as const,
        },
        {
            route: '/cookie-policy',
            priority: 0.3,
            changeFrequency: 'yearly' as const,
        },
    ].map(({ route, priority, changeFrequency }) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency,
        priority,
    }))

    // Dynamic project routes
    const projectRoutes = projects.map((project) => ({
        url: `${baseUrl}/projects/${project.id}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
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
