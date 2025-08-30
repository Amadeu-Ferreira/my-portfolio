import { contactSection } from "./data";
import { Button } from "../ui/button";
import Title from "../Title";

export default function Index() {
    const title = contactSection.title;
    const contacts = contactSection.contacts;

    return <div className="space-y-4">
        <Title title={title} />
        <div className="flex gap-4">
            {contacts.map((field, index) => (
                <a
                    key={index}
                    href={field.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button
                        variant="outline"
                        size="sm"
                    >
                        {field.label}
                    </Button>
                </a>
            ))}
        </div>
    </div>
}