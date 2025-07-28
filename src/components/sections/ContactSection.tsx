import SectionTitle from "../SectionTitle";

import { contacts } from "@/data/contacts";

import { Button } from "../ui/button";

import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa"

export default function ContactSection() {

    function Icon({ type }: { type: string }) {
        if (type === "GitHub") { return <FaGithub /> }
        if (type === "LinkedIn") { return <FaLinkedin /> }
        if (type === "Email") { return <FaEnvelope /> }
        if (type === "Instagram") { return <FaInstagram /> }

        return null
    }

    return (
        <div>
            <SectionTitle title="Entra em contacto" />
            <div>
                <h1 className="text-xl mb-4">Estou sempre aberto a novas ideias!</h1>
                <div className="flex gap-4">
                    {contacts.map((field) => (
                        <a
                            key={field.type}
                            href={field.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button variant="outline" size="sm" className="flex items-center gap-2">
                                <Icon type={field.type} />
                                {field.type}
                            </Button>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}