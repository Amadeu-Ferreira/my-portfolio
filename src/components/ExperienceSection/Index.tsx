"use client"

import { experienceSection } from "@/components/ExperienceSection/data";
import Title from "../Title";
import Card from "./Card";

export default function Index() {
    const title = experienceSection.title;
    const companies = experienceSection.companies;

    return (
        <div className="flex gap-4 space-y-4">
            <Title title={title} />
            <div className="w-full space-y-4">
                {companies.map((field) => (
                    <Card
                        key={field.id}
                        currentCompany={field.id}
                    />
                ))}
            </div>
        </div>
    );
}