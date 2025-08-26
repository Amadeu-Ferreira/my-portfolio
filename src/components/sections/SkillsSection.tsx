import SectionTitle from "../SectionTitle";

import { skillCategories } from "@/data/skills";

export default function SkillsSection() {
    return (
        <div>
            <SectionTitle title="Competências" />
            <div className="grid grid-cols-3 gap-4">
                {skillCategories.map((field, index) => (
                    <div
                        key={index}
                        className="p-4 border border-dashed rounded-2xl">
                        <h1 className="font-semibold text-xl mb-2">{field.skill}</h1>
                        {field.items.map((item, index) => (
                            <p key={index}>{item}</p>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}