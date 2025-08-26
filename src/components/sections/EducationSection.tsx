"use client"

import { useState } from "react";
import { Button } from "../ui/button";
import { education, defaultDegree } from "@/data/education";
import SectionTitle from "../SectionTitle";

function DegreeCard({
    currentDegree
}: {
    currentDegree: string
}) {
    const degree = education.find((degree) => degree.value === currentDegree);

    if (!degree) return;

    return (
        <div className="border p-4 border-dashed rounded-md">
            <div>
                <h1 className="text-2xl font-bold">{degree.degree} (Nível {degree.level})</h1>
                <p>Instituição: <a
                    href={degree.website}
                    target="_blank"
                    className="text-blue-400 underline hover:text-blue-800 transition">
                    {degree.institution}
                </a>
                </p>
                <p>Curso: {degree.course}</p>
                <p>Período: {degree.period} - {degree.status}</p>
            </div>
        </div>
    );
}

function DegreeSeletor({
    currentDegree,
    returnValue
}: {
    currentDegree: string;
    returnValue: (newCurrentDegree: string) => void;
}) {
    return (
        <div className="flex gap-4">
            {education.map((field, index) => (
                <Button
                    key={index}
                    variant={field.value === currentDegree ? "default" : "outline"}
                    onClick={() =>
                        returnValue(field.value)
                    }>
                    {field.degree}
                </Button>
            ))}
        </div>
    );
}

export default function EducationSection() {
    const [currentDegree, setCurrentDegree] = useState(defaultDegree);

    return (
        <div className="space-y-4">
            <SectionTitle title="Formação" />
            <DegreeSeletor
                currentDegree={currentDegree}
                returnValue={(newCurrentDegree) => {
                    setCurrentDegree(newCurrentDegree);
                }}
            />
            <DegreeCard currentDegree={currentDegree} />
        </div>
    );
}