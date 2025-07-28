import SectionTitle from "../SectionTitle";
import { Badge } from "../ui/badge";

import { projects } from "@/data/projects";

export default function ProjectsSection() {
    return (
        <div className="space-y-4">
            <SectionTitle title="Projetos" />
            {projects.map((field, index) => (
                <div
                    key={index}
                    className="border border-dashed rounded-md grid grid-cols-3">
                    <div className="p-4">
                        <h1 className=" mb-2 font-semibold text-xl">
                            <a
                                href={`/${field.id}`}
                                className="text-blue-400 underline hover:text-blue-800 transition">
                                {field.name}
                            </a>
                        </h1>
                        <div className="flex flex-wrap gap-2">
                            {field.technologies.map((field, index) => (
                                <Badge key={index} variant="outline">{field}</Badge>
                            ))}
                        </div>
                    </div>
                    <div className="col-span-2 p-4 bg-neutral-50">
                        <ul className="list-disc list-inside">
                            {field.features.map((field, index) => (
                                <li key={index} className="tracking-tight text-neutral-500">{field}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
}