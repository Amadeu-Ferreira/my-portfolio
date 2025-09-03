import Title from "../Title";

export default function Index() {

    const experience = [
        {
            id: 1,
            type: "education",
            degree: "Secundário",
            institution: "Colégio de São Gonçalo",
            course: "Informática Aplicada à Web",
            period: "2016/2018",
        },
        {
            id: 4,
            type: "job",
            company: "EpromTek",
            period: "Verão de 2018",
            role: "Desenvolvedor Web",
            description: "",
        },
        {
            id: 3,
            type: "education",
            degree: "CTESP",
            institution: "ESTG",
            course: "Desenvolvimento para a Web e Dispositivos Móveis",
            period: "2018/2021",
        },
        {
            id: 4,
            type: "education",
            degree: "Licenciatura",
            institution: "ESTG",
            course: "Engenharia Informática",
            period: "2021/2024 - Em pausa",
        }
    ];

    return (
        <>
            <Title title="Experiência" color="text-blue-600" />
            <p className="mt-2 text-sm md:text-base text-gray-600 max-w-2xl">
                Estágios e experiências profissionais que consolidaram as minhas competências como desenvolvedor.
            </p>
            <div className="pt-6">
                {experience.map((field, index) => (
                    <div
                        key={index}
                        className="border-b last:border-0 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4"
                    >
                        {/* Esquerda: curso ou empresa + período */}
                        <div>
                            <h1 className="text-base md:text-lg font-semibold text-gray-900">
                                {field.type === "education" ? field.course : field.company}
                            </h1>
                            <p className="text-xs text-gray-500">{field.period}</p>
                        </div>

                        {/* Direita: detalhes de educação (se aplicável) */}
                        {field.type === "education" && (
                            <div className="text-right text-sm text-gray-600">
                                <p>
                                    <span className="font-medium text-gray-700">{field.institution}</span>
                                    <span className="mx-1 text-gray-400">|</span>
                                    <span className="text-gray-500">{field.degree}</span>
                                </p>
                            </div>
                        )}
                        {field.type !== "education" && (
                            <div className="text-right text-sm text-gray-600">
                                <p className="text-gray-500">{field.role}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}