import Title from "../Title";
import { projectsSection } from "@/components/ProjectsSection/data";
import Card from "./Card";
import { Construction } from "lucide-react";

export default function Index() {
    const title = projectsSection.title;
    const projects = projectsSection.projects;

    return (
        <>
            <Title title={title} color="text-blue-600" />
            <p className="mt-2 text-sm md:text-base text-gray-600 max-w-2xl">
                Alguns dos projetos que desenvolvi, onde aplico as minhas competências em
                tecnologias modernas para criar soluções práticas e funcionais.
            </p>
            <div className="grid md:grid-cols-3 gap-6 pt-6">
                {projects.map((field, index) => (
                    <Card
                        key={index}
                        currentProject={field.id}
                    />
                ))}
                {/* Placeholder */}
                <div className="p-6 rounded-xl border border-dashed border-gray-300 bg-gray-50 flex flex-col items-center justify-center text-gray-400 text-sm">
                    <Construction className="w-6 h-6 mb-2" />
                    <span>Mais projetos em breve</span>
                </div>
            </div>

        </>
    );
}