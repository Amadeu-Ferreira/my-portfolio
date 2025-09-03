"use client"

import { educationSection } from "@/components/EducationSection/data";
import { GraduationCap } from "lucide-react";

export default function Card({ currentLevel }: { currentLevel: number }) {
    const degree = educationSection.degrees.find(
        (degree) => degree.level === currentLevel
    );

    if (!degree) return null;

    return (
        <div className="p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition bg-white">
            <div className="flex items-center gap-4">
                <GraduationCap className="w-6 h-6 text-red-600" />
                <div>
                    <p className="text-lg font-semibold text-gray-900">{degree.course}</p>
                    <p className="text-sm text-gray-600">
                        {degree.degree} · {degree.institution}
                    </p>
                    <p className="text-sm text-gray-500">{degree.period}</p>
                </div>
            </div>
        </div>
    );
}