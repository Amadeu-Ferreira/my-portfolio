import Networks from "./SocialNetworksSection/Networks";

export default function Footer() {
    return (
        <footer className="border-t-4 border-gray-950 py-10">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
                {/* Copyright */}
                <p className="text-sm text-gray-500 text-center md:text-left">
                    © {new Date().getFullYear()} Amadeu Ferreira. Todos os direitos reservados.
                </p>

                {/* Redes sociais */}
                <Networks />
            </div>
        </footer>
    );
}