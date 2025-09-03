"use client"

import { educationSection } from "./data";
import Title from "../Title";
import Card from "./Card";

export default function Index() {
    const title = educationSection.title;
    const degrees = educationSection.degrees;

    return (
        <div className="space-y-4">
            <Title title={title} color={"text-red-600"} />
            <div className="space-y-4 w-full">
                {degrees.map((degree, index) => (
                    <Card
                        key={index}
                        currentLevel={degree.level}
                    />
                ))}
            </div>
        </div>
    );
}