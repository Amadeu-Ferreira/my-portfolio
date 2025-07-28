import { projects } from "@/data/projects"

import SectionTitle from "@/components/SectionTitle"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ projectId: string }>
}) {
    const { projectId } = await params

    const project = projects.find((project) => project.id === projectId)

    if (!project) return

    return <div className="space-y-6">
        <SectionTitle title={project.name} />

        <div className="flex flex-wrap gap-2 text-center justify-items-center">
            {project.technologies.map((field, index) => (
                <Badge key={index} variant="outline">{field}</Badge>
            ))}
        </div>

        <ul className="list-disc list-inside">
            {project.features.map((field, index) => (
                <li key={index} className="tracking-tight text-neutral-500">{field}</li>
            ))}
        </ul>

        {project.url && (
            <a
                href={project.url}
                target="_blank">
                <Button
                    variant="outline"
                    className="flex items-center gap-2">
                    Demo
                </Button>
            </a>
        )}
    </div>
}