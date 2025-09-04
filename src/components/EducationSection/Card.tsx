import { educationSection } from "./data";

export default function Card({ currentEducation }: { currentEducation: number }) {
    const education = educationSection.education.find((exp) => exp.id === currentEducation);

    if (!education) return;

    return (
        <div className="border-b border-gray-300 last:border-0 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4">
            <div>
                <h1 className="text-base md:text-lg font-semibold text-gray-900">
                    {education.course}
                    <span className="ml-2 text-xs text-gray-500 font-normal">
                        ({education.period})
                    </span>
                </h1>

                {education.internship && (
                    <p className="text-sm text-gray-500">
                        Estágio Curricular: {education.internship}
                    </p>
                )}
            </div>
            <div className="text-right text-sm text-gray-600">
                <p>
                    <span className="font-medium text-gray-700">{education.institution}</span>
                    <span className="mx-1 text-gray-400">|</span>
                    <span className="text-gray-500">{education.degree}</span>
                </p>
            </div>
        </div>
    );
}