import Title from "../Title";
import { projectsSection } from "@/components/ProjectsSection/data";
import Card from "./Card";

export default function Index() {
    const title = projectsSection.title;
    const projects = projectsSection.projects;

    return (
        <div className="space-y-4">
            <Title title={title} />
            <div className="grid grid-cols-2 gap-4">
                {projects.map((field, index) => (
                    <Card
                        key={index}
                        currentProject={field.id}
                    />
                ))}
            </div>
        </div>
    );
}