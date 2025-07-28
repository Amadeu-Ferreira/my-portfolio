import SectionTitle from "../SectionTitle";

import { Button } from "../ui/button";

export default function HomeSection() {
    return (
        <div className="space-y-4 grid grid-cols-3 w-full items-center">
            <div className="col-span-2 space-y-6">
                <SectionTitle title="Olá! Eu sou o Amadeu Ferreira" />
                <p>Desenvolvedor frontend e backend, baseado em Felgueiras</p>
                <a
                    href="/cv.pdf"
                    download>
                    <Button variant="outline" size="lg" className="flex items-center gap-2">
                        Descarregar meu CV
                    </Button>
                </a>
            </div>
            <img src="/img/file.svg" alt="" />
        </div>
    );
}