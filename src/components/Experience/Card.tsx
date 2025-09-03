import { experienceSection } from "./data";

export default function Card({ currentExperience }: { currentExperience: number }) {
    const experience = experienceSection.experience.find((exp) => exp.id === currentExperience);

    if (!experience) return;

    return (
        <div className="border-b last:border-0 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4">
            <div>
                <h1 className="text-base md:text-lg font-semibold text-gray-900">
                    {experience.type === "education" ? experience.course : experience.company}
                </h1>
                <p className="text-xs text-gray-500">{experience.period}</p>
            </div>
            {experience.type === "education" ? (
                <div className="text-right text-sm text-gray-600">
                    <p>
                        <span className="font-medium text-gray-700">{experience.institution}</span>
                        <span className="mx-1 text-gray-400">|</span>
                        <span className="text-gray-500">{experience.degree}</span>
                    </p>
                </div>
            ) : (
                <div className="text-right text-sm text-gray-600">
                    <p className="text-gray-500">{experience.role}</p>
                </div>
            )}
        </div>
    );
}