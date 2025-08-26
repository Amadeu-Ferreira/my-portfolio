"use client"

import { useState } from "react";

import SectionTitle from "../SectionTitle";

import { Button } from "../ui/button";

import { companies, defaultCompany } from "@/data/experience";

function CompanyCard({
    currentCompany
}: {
    currentCompany: string
}) {
    const company = companies.find((company) => company.value === currentCompany);

    if (!company) return;

    return (
        <div className="border p-4 border-dashed rounded-md space-y-4">
            <div className="grid grid-cols-3 divide-x-2 divide-blue-400 gap-4 items-center">
                <div>
                    <h1 className="text-lg font-semibold">
                        <a href={company?.website} target="_blank" className="text-blue-400 underline hover:text-blue-800 transition">{company?.name}</a>
                    </h1>
                    <p className="text-xs text-neutral-500">Empresa</p>
                </div>
                <div>
                    <h1 className="text-lg font-semibold">{company?.startAt}</h1>
                    <p className="text-xs text-neutral-500">Início</p>
                </div>
                <div>
                    <h1 className="text-lg font-semibold">{company?.endAt}</h1>
                    <p className="text-xs text-neutral-500">Fim</p>
                </div>
            </div>
            <ul className="list-disc list-inside">
                {company?.tasks.map((task, index) => (
                    <li key={index} className="tracking-tight text-neutral-500">{task}</li>
                ))}
            </ul>
            <div>
                <p className="text-xs">{company?.type}</p>
            </div>
        </div>
    );
}

function CompanySeletor({
    currentCompany,
    returnValue
}: {
    currentCompany: string;
    returnValue: (newCurrentCompany: string) => void;
}) {
    return (
        <div className="flex gap-4">
            {companies.map((field, index) => (
                <Button
                    key={index}
                    variant={field.value === currentCompany ? "default" : "outline"}
                    onClick={() =>
                        returnValue(field.value)
                    }>
                    {field.name}
                </Button>
            ))}
        </div>
    );
}

export default function ExperienceSection() {
    const [currentCompany, setCurrentCompany] = useState(defaultCompany);

    return (
        <div className="space-y-4">
            <SectionTitle title="Experiência" />
            <CompanySeletor
                currentCompany={currentCompany}
                returnValue={(newCurrentCompany) => {
                    setCurrentCompany(newCurrentCompany);
                }}
            />
            <CompanyCard currentCompany={currentCompany} />
        </div>
    );
}