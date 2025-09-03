import Title from "../Title";
import { projectsSection } from "@/components/ProjectsSection/data";
import Card from "./Card"

export default function Index() {
    const title = projectsSection.title;
    const projects = projectsSection.projects;

    return (
        <>
            <Title title={title} color="text-blue-600" />
            <div className="grid md:grid-cols-3 gap-6 pt-6">
                {projects.map((field, index) => (
                    <Card
                        key={index}
                        currentProject={field.id}
                    />
                ))}
            </div>
        </>
    );
}