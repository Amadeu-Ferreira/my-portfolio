"use client";

import { Button } from "./ui/button";
import LinkCustom from './LinkCustom';

export default function Header() {
    return (
        <header className="p-4 w-full border-x border-b rounded-b-xl shadow sticky top-0 bg-white/60 backdrop-blur">
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold">Amadeu Ferreira</h1>
                <nav className="flex gap-6 text-sm font-medium">
                    <LinkCustom
                        to='education'
                        value="Formação"
                    />
                    <LinkCustom
                        to='experience'
                        value="Experiência"
                    />
                    <LinkCustom
                        to='projects'
                        value="Projetos"
                    />
                    <LinkCustom
                        to='contact'
                        value="Contactos"
                    />
                </nav>
                <a
                    href="/cv_amadeu_ferreira.pdf"
                    download>
                    <Button
                        variant="outline"
                        className="flex items-center gap-2">
                        Descarregar meu CV
                    </Button>
                </a>
            </div>
        </header>
    );
}