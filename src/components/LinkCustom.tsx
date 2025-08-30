"use client";

import { Link } from 'react-scroll';

export default function LinkCustom({
    to,
    value
}: {
    to: string;
    value: string;
}) {
    return <Link
        to={to}
        smooth={true}
        duration={500}
        className="cursor-pointer hover:text-blue-400"
    >
        {value}
    </Link>
}