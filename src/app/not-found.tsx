import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center p-8">
            <h1 className="text-5xl font-bold mb-4">404</h1>
            <p className="text-lg text-neutral-400 mb-6">
                Página não encontrada. Verifica o URL ou volta ao início.
            </p>
            <a
                href="/"
                className="text-blue-500 underline hover:text-blue-700 transition"
            >
                <Button>Voltar</Button>
            </a>
        </div>
    );
}