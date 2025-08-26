"use client";

import { Button } from "./ui/button";

export default function Header() {
    return (
        <header className="p-4 border-b w-full">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo / Nome */}
                <h1 className="text-xl font-bold">Amadeu Ferreira</h1>

                {/* Navigation */}
                <nav className="flex gap-6 text-sm font-medium">
                    <a href="#education" className="hover:text-blue-400 transition">Formação</a>
                    <a href="#experience" className="hover:text-blue-400 transition">Experiência</a>
                    <a href="#skills" className="hover:text-blue-400 transition">Competências</a>
                    <a href="#projects" className="hover:text-blue-400 transition">Projetos</a>
                    <a href="#contact" className="hover:text-blue-400 transition">Contactos</a>
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