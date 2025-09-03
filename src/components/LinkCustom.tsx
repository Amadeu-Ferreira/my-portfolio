"use client";

import { Link } from 'react-scroll';

export default function LinkCustom({
    to,
    value,
    variant
}: {
    to: string;
    value: string;
    variant: "default" | "outline"
}) {
    return <Link
        to={to}
        smooth={true}
        duration={500}
        className={variant === "default"
            ? "px-6 py-2 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            : "px-6 py-2 rounded-full border border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transition"
        }
    >
        {value}
    </Link>
}