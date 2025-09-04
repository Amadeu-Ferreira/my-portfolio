import { educationSection } from "./data";
import Title from "../Title";
import Card from "./Card";

export default function Index() {
    return (
        <>
            <Title title={educationSection.title} color="text-blue-600" />
            <p className="mt-2 text-sm md:text-base text-gray-600 max-w-2xl">
                {educationSection.text}
            </p>
            <div className="pt-6">
                {educationSection.education.map((field) => (
                    <Card
                        key={field.id}
                        currentEducation={field.id}
                    />
                ))}
            </div>
        </>
    );
}