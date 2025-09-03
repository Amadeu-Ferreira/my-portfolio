import { experienceSection } from "./data";
import Title from "../Title";
import Card from "./Card";

export default function Index() {
    return (
        <>
            <Title title={experienceSection.title} color="text-blue-600" />
            <p className="mt-2 text-sm md:text-base text-gray-600 max-w-2xl">
                {experienceSection.text}
            </p>
            <div className="pt-6">
                {experienceSection.experience.map((field) => (
                    <Card
                        key={field.id}
                        currentExperience={field.id}
                    />
                ))}
            </div>
        </>
    );
}