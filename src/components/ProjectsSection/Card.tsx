
import { Badge } from "../ui/badge";
import { projectsSection } from "@/components/ProjectsSection/data";
import { Button } from "../ui/button";

export default function Card({ currentProject }: { currentProject: number }) {
    const project = projectsSection.projects.find((project) => project.id === currentProject);

    if (!project) return;

    return (
        <div className="border border-dashed rounded-xl p-4 flex flex-col space-y-4">

            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-xl font-semibold">{project.name}</h1>
                    <p className="text-xs">{project.status}</p>
                </div>
                {project.url ? (
                    <Button variant="outline">
                        Demo
                    </Button>
                ) : (
                    <p className="text-xs">Demo disponivel brevemente</p>
                )}
            </div>

            <div className="flex flex-wrap gap-1">
                {project.technologies.map((field, index) => (
                    <Badge key={index} variant="outline">{field}</Badge>
                ))}
            </div>


        </div>
    );
}