import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectById } from "@/data/projects";
import ProjectDetailClient from "./ProjectDetailClient";

type Props = {
    params: Promise<{ id: string }>
}

export async function generateMetadata(
    { params }: Props,
): Promise<Metadata> {
    const { id } = await params
    const project = getProjectById(id)

    if (!project) {
        return {
            title: 'Project Not Found',
        }
    }

    return {
        title: `${project.title} | Amistad Contracting`,
        description: project.description,
        openGraph: {
            title: project.title,
            description: project.description,
            images: [project.image],
            type: 'article',
        },
        twitter: {
            card: 'summary_large_image',
            title: project.title,
            description: project.description,
            images: [project.image],
        },
    }
}

export default async function ProjectDetailPage({ params }: Props) {
    const { id } = await params;
    const project = getProjectById(id);

    if (!project) {
        notFound();
    }

    return <ProjectDetailClient project={project} />;
}
