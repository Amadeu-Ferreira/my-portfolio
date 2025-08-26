import Image from "next/image";
import SectionTitle from "../SectionTitle";

export default function HomeSection() {
    return (
        <div className="space-y-4 grid grid-cols-3 w-full items-center">
            <div className="col-span-2 space-y-6">
                <SectionTitle title="Olá! Eu sou o Amadeu Ferreira" />
                <p>Desenvolvedor frontend e backend, baseado em Felgueiras</p>
            </div>
            <Image
                src="/perfil_amadeu_ferreira.jpg"
                alt="Picture of the author"
                width={500}
                height={500}
            />
        </div>
    );
}