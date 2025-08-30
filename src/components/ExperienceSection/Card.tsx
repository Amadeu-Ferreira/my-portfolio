"use client"

import { experienceSection } from "./data";

export default function Card({ currentCompany }: { currentCompany: number }) {
    const company = experienceSection.companies.find((company) => company.id === currentCompany);

    if (!company) return;

    return (
        <div className="border p-4 border-dashed rounded-md flex justify-between items-center">
            <div>
                <p className="font-bold">{company.name}</p>
                <p className="text-xs">{company.period}</p>
            </div>
            <p className="text-xs">{company.type}</p>
        </div>
    );
}