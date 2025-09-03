"use client"

import { experienceSection } from "./data";
import { BriefcaseBusiness } from "lucide-react";

export default function Card({ currentCompany }: { currentCompany: number }) {
    const company = experienceSection.companies.find(
        (company) => company.id === currentCompany
    );

    if (!company) return null;

    return (
        <div className="p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-4">
                <BriefcaseBusiness className="w-6 h-6 text-green-600" />
                <div>
                    <p className="text-lg font-semibold text-gray-900">{company.name}</p>
                    <p className="text-sm text-gray-600">{company.period}</p>
                    <p className="text-sm text-gray-500">{company.type}</p>
                </div>
            </div>
        </div>
    );
}