import Image from "next/image";
import Title from "../Title";

export default function Index() {
    return (
        <div className="border-b py-35">
            <div className="max-w-7xl mx-auto flex gap-8 items-center">
                <Image
                    src="/perfil_amadeu_ferreira.jpg"
                    className="rounded-full"
                    alt=""
                    width={200}
                    height={200}
                />
                <div>
                    <Title title="Olá! Eu sou o Amadeu Ferreira" />
                </div>
            </div>
        </div>
    );
}