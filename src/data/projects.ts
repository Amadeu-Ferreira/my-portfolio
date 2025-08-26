export const projects = [
    {
        id: "eat_ops",
        name: "EatOps",
        status: "Em beta",
        objective: "Aplicação com potencial comercial, desenvolvida para apoiar restaurantes na gestão eficiente de pedidos e menus.",
        url: "#",
        images: [],
        technologies: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Shadcn",
            "Socket.IO",
            "Zod",
            "Node.js",
            "Express",
            "MongoDB",
            "JWT",
            "bcrypt"
        ],
        features: [
            "Autenticação e gestão de utilizadores com permissões — implementada manualmente, sem bibliotecas externas",
            "Gestão de mesas e ocupação",
            "Gestão de menus e itens",
            "Comunicação em tempo real entre equipas",
            "Menu digital acessível ao público"
        ]
    },
    {
        id: "eat_wise",
        name: "EatWise",
        status: "Em beta",
        objective: "Aplicação com potencial de negócio, desenvolvida para apoiar ginásios e clínicas na gestão e acompanhamento nutricional dos seus clientes.",
        url: "#",
        images: [],
        technologies: ["Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Shadcn",
            "Zod",
            "Zustand"
        ],
        features: [
            "Criação de plano alimentar personalizado",
            "Possibilidade de definir plano diário ou semanal",
            "Informação nutricional detalhada por alimento, refeição e por dia",
            "Cálculo da ingestão calórica diária necessária"
        ]
    },
    {
        id: "portfolio_pessoal",
        name: "Portfólio pessoal",
        status: "Em produção",
        objective: "Portfólio desenvolvido como vitrine profissional, reunindo projetos pessoais e competências técnicas.",
        url: null,
        images: [],
        technologies: [
            "NextJs",
            "Tailwind CSS",
            "Shadcn"
        ],
        features: [
            "Design responsivo para todos os dispositivos",
            "Navegação intuitiva e acessível, com foco em UX",
            "Carregamento rápido e otimizado para performance",
            "Código modular e organizado para fácil manutenção e expansão",
            "SEO básico implementado para melhor indexação nos motores de busca"
        ]
    }
] as const;