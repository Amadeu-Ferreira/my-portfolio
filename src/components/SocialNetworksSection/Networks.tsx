import { Instagram, Github, Linkedin } from "lucide-react";

export default function Networks() {
    const social = [
        {
            name: "Instagram",
            href: "#",
            Icon: Instagram,
        },
        {
            name: "Github",
            href: "#",
            Icon: Github,
        },
        {
            name: "LinkedIn",
            href: "#",
            Icon: Linkedin,
        },
    ];

    return (
        <div className="flex flex-wrap justify-center gap-3">
            {social.map(({ name, href, Icon }) => (
                <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="p-2 rounded-full bg-gray-50 text-gray-600 border border-gray-200 hover:bg-gray-100 hover:text-blue-600 transition"
                >
                    <Icon className="w-5 h-5" />
                </a>
            ))}
        </div>
    );
}