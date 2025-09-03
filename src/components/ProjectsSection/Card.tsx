import { projectsSection } from "@/components/ProjectsSection/data";
import Image from "next/image";

export default function Card({ currentProject }: { currentProject: number }) {
    const project = projectsSection.projects.find((project) => project.id === currentProject);

    if (!project) return;

    return (
        <div className="p-1 rounded-xl border border-gray-200 shadow-sm hover:shadow-md">
            {/* Imagem do projeto */}
            <Image
                src={project.img}
                alt="Foto da web app de nutrição"
                className="rounded-lg border"
                width={1000}
                height={1000}
            />

            <div className="p-6 space-y-6">
                {/* Conteúdo */}
                <div>
                    <h2 className="text-lg font-semibold text-gray-900">
                        {project.name}
                        <span className="text-sm text-gray-500 font-normal ml-2">({project.year})</span>
                    </h2>
                    <p className="text-sm text-gray-600 mt-1">{project.description}</p>
                </div>

                {/* Tecnologias */}
                <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((field, index) => (
                        <span
                            key={index}
                            className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-700 border border-gray-600">
                            {field}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <a
                    href={project.demo_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-blue-600 hover:underline"
                >
                    Ver Demo
                </a>
            </div>
        </div>
    );
}