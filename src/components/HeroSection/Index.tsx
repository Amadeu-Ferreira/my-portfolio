import Image from "next/image";
import LinkCustom from "../LinkCustom";

export default function Index() {
    return (
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <Image
                src="/perfil_amadeu_ferreira.jpg"
                className="rounded-full shadow-lg"
                alt="Foto de perfil de Amadeu Ferreira"
                width={200}
                height={200}
            />
            <div className="text-center md:text-left space-y-4">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
                    Olá, o meu nome é <span className="text-blue-600">Amadeu Ferreira</span>.
                </h1>
                <p className="text-lg text-gray-700">
                    Sou desenvolvedor web especializado em <span className="font-semibold">React</span> e <span className="font-semibold">Next.js</span>.
                </p>
                <p className="text-lg text-gray-600">
                    Construo websites rápidos, modernos e responsivos para empresas e projetos pessoais.
                </p>
                <div className="flex gap-4 justify-center md:justify-start pt-4">
                    <LinkCustom
                        to="social_networks"
                        value="Ver projetos"
                        variant="default"
                    />
                    <LinkCustom
                        to="call_to_action"
                        value="Contactar"
                        variant="outline"
                    />
                </div>
            </div>
        </div>
    );
}