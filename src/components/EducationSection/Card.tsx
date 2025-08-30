"use client"

import { educationSection } from "@/components/EducationSection/data";

export default function Card({ currentLevel }: { currentLevel: number }) {
    const degree = educationSection.degrees.find((degree) => degree.level === currentLevel);

    if (!degree) return;

    return (
        <div className="p-4 rounded-md border border-dashed flex justify-between items-center">
            <div>
                <p className="font-bold">{degree.course}</p>
                <p className="text-xs">{degree.degree} | {degree.institution}</p>
            </div>
            <p className="text-xs">{degree.period}</p>
        </div>
    );
}