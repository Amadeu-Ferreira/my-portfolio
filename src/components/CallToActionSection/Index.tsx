export default function Index() {
    return (
        <section className="py-20">
            <div className="max-w-3xl mx-auto text-center px-6">
                {/* Título */}
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Tem algum projeto que deseja tornar realidade?
                </h2>

                {/* Subtítulo */}
                <p className="mt-4 text-base md:text-lg text-gray-600">
                    Estou sempre entusiasmado para colaborar em novos e inovadores desafios.
                    Quer esteja a começar do zero ou a melhorar uma ideia existente,
                    vamos trabalhar juntos para criar algo incrível.
                </p>

                <div className="mt-8">
                    <a
                        href="mailto:teu@email.com"
                        className="px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
                    >
                        Enviar Email
                    </a>
                </div>
            </div>
        </section>
    );
}