import { contactSection } from "./data";
import Title from "../Title";
import { Mail, Phone } from "lucide-react";

export default function Index() {
    const title = contactSection.title;
    const email = contactSection.email;
    const phone = contactSection.phone;

    return (
        <div className="space-y-4">
            <Title title={title} color={"text-orange-600"} />

            <div className="grid md:grid-cols-3 gap-6">
                {/* Email */}
                <div className="p-6 rounded-xl border shadow-sm hover:shadow-md transition">
                    <div className="flex items-center gap-4">
                        <Mail className="w-6 h-6 text-orange-600" />
                        <div>
                            <h1 className="text-sm font-semibold">Email</h1>
                            <p className="text-sm text-gray-700">{email}</p>
                        </div>
                    </div>
                </div>

                {/* Telefone */}
                <div className="p-6 rounded-xl border shadow-sm hover:shadow-md transition">
                    <div className="flex items-center gap-4">
                        <Phone className="w-6 h-6 text-orange-600" />
                        <div>
                            <h1 className="text-sm font-semibold">Telefone</h1>
                            <p className="text-sm text-gray-700">{phone}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}