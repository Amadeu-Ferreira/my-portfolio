"use client"

import { useState } from "react";

import SectionTitle from "../SectionTitle";

import { Button } from "../ui/button";

import { companies } from "@/data/experience";

function Info({ companyValue }: { companyValue: string }) {

    const company = companies.find((company) => company.value === companyValue)

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

export default function ExperienceSection() {

    const [company, setCompany] = useState("eprom_tek");

    return (
        <div className="space-y-4">
            <SectionTitle title="Experiência" />
            <div className="flex gap-4">
                {companies.map((field, index) => (
                    <Button
                        key={index}
                        variant={field.value === company ? "default" : "outline"}
                        onClick={() =>
                            setCompany(field.value)
                        }>
                        {field.name}
                    </Button>
                ))}
            </div>
            <div>
                {company === "eprom_tek" && <Info companyValue="eprom_tek" />}
                {company === "parametro_global" && <Info companyValue="parametro_global" />}
            </div>
        </div>
    );
}