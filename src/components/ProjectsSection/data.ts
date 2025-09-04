export const projectsSection = {
    title: "Meus Projetos",
    projects: [
        {
            id: 1,
            img: "/projeto_de_nutricao.png",
            name: "App de Nutrição",
            year: "2025",
            description: "Aplicação web para criação e gestão de planos alimentares personalizados.",
            technologies: [
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Shadcn"
            ],
            demo_link: null
        },
        {
            id: 2,
            img: "/projeto_de_restaurante.png",
            name: "App de Gestão de Restaurantes",
            year: "2025",
            description: "Aplicação web para gestão de menus e controlo de pedidos.",
            technologies: [
                "Next.js",
                "Node.js",
                "Socket.IO",
                "Express",
                "MongoDB",
                "Tailwind CSS"
            ],
            demo_link: null
        }
    ]
} as const;