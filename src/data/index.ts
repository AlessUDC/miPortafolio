import { ProjectData } from "@/components/ProjectCard";

export const projectsData: ProjectData[] = [
    {
        id: '1',
        title: 'Gestor de préstamos de libros para una Biblioteca universitaria',
        description: `
            Este proyecto fue desarrollado para una biblioteca universitaria con el fin de llevar el control de los préstamos de 
            libros y principalmente mejorar mi lógica de negocio. El proyecto lo empecé por el frontend, luego generé la base de datos con el 
            ORM Prisma para tener más flexibilidad y rapidez en el desarrollo del proyecto. Enfrenté la lógica desafiante de reservas y los multi-casos
            de préstamos de los libros, así como los huecos en la lógica del sistema. Este proyecto lo desarrollé en el tiempos de 2 meses.
            `,
        image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: ['fullstack', 'frontend', 'backend'],
        testCredentials: [
            { role: 'Administrador', code: 'ADMIN01', password: 'admin123' },
            { role: 'Bibliotecario', code: 'LIB01', password: 'password123' },
            { role: 'Docente', code: 'TEA01', password: 'password123' },
            { role: 'Estudiante', code: '20240001', password: 'password123' },
            { role: 'Estudiante', code: '20240002', password: 'password123' },
            { role: 'Estudiante', code: '20240003', password: 'password123' },
            { role: 'Estudiante', code: '20240004', password: 'password123' },
            { role: 'Estudiante', code: '20240005', password: 'password123' },
            { role: 'Estudiante', code: '20240006', password: 'password123' },
            { role: 'Estudiante', code: '20240007', password: 'password123' },
            { role: 'Estudiante', code: '20240009', password: 'password123' },
            { role: 'Estudiante', code: '2413010296', password: 'password123' },
            { role: 'Estudiante', code: '1234567890', password: 'password123' }
        ],
        tags: [
            { name: 'Figma', colorClass: 'bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-100 dark:border-cyan-500/20' },
            { name: 'Prototipo', colorClass: 'bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-100 dark:border-blue-500/20' },
            { name: 'UI/UX', colorClass: 'bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-100 dark:border-violet-500/20' },
            { name: 'Tailwind CSS', colorClass: 'bg-sky-50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-100 dark:border-sky-500/20' },
            { name: 'React Router', colorClass: 'bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 border-red-100 dark:border-red-500/20' },
            { name: 'React Query', colorClass: 'bg-pink-50 dark:bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-100 dark:border-pink-500/20' },
            { name: 'Axios', colorClass: 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-100 dark:border-indigo-500/20' },
            { name: 'HTML', colorClass: 'bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-100 dark:border-orange-500/20' },
            { name: 'Zod', colorClass: 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-100 dark:border-emerald-500/20' },
            { name: 'Headless UI', colorClass: 'bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-100 dark:border-purple-500/20' },
            { name: 'Heroicons', colorClass: 'bg-amber-50 dark:bg-yellow-500/10 text-amber-600 dark:text-yellow-400 border-amber-100 dark:border-yellow-500/20' },
            { name: 'DnD Kit', colorClass: 'bg-teal-50 dark:bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-100 dark:border-teal-500/20' },
            { name: 'Recharts', colorClass: 'bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-400 border-green-100 dark:border-green-500/20' },
            { name: 'React Toastify', colorClass: 'bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-100 dark:border-amber-500/20' },
            { name: 'HTML5 QR Code', colorClass: 'bg-lime-50 dark:bg-lime-500/10 text-lime-600 dark:text-lime-400 border-lime-100 dark:border-lime-500/20' },
            { name: 'React Barcode', colorClass: 'bg-fuchsia-50 dark:bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-400 border-fuchsia-100 dark:border-fuchsia-500/20' },
            { name: 'Chakra UI', colorClass: 'bg-blue-50 dark:bg-blue-600/10 text-blue-700 dark:text-blue-300 border-blue-100 dark:border-blue-600/20' },
            { name: 'ESLint', colorClass: 'bg-purple-50 dark:bg-purple-600/10 text-purple-700 dark:text-purple-300 border-purple-100 dark:border-purple-600/20' },
            { name: 'NestJS', colorClass: 'bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 border-red-100 dark:border-red-500/20' },
            { name: 'TypeScript', colorClass: 'bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-100 dark:border-blue-500/20' },
            { name: 'Node.js', colorClass: 'bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-400 border-green-100 dark:border-green-500/20' },
            { name: 'PostgreSQL', colorClass: 'bg-sky-50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-100 dark:border-sky-500/20' },
            { name: 'Prisma ORM', colorClass: 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-100 dark:border-indigo-500/20' },
            { name: 'JWT', colorClass: 'bg-amber-50 dark:bg-yellow-500/10 text-amber-600 dark:text-yellow-400 border-amber-100 dark:border-yellow-500/20' },
            { name: 'bcrypt', colorClass: 'bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-100 dark:border-orange-500/20' },
            { name: 'Class Validator', colorClass: 'bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-100 dark:border-purple-500/20' },
            { name: 'Class Transformer', colorClass: 'bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-100 dark:border-violet-500/20' },
            { name: 'Mailgun', colorClass: 'bg-pink-50 dark:bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-100 dark:border-pink-500/20' },
            { name: 'Nodemailer', colorClass: 'bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-100 dark:border-cyan-500/20' },
            { name: 'Nest Schedule', colorClass: 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-100 dark:border-emerald-500/20' },
            { name: 'UUID', colorClass: 'bg-teal-50 dark:bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-100 dark:border-teal-500/20' },
            { name: 'Jest', colorClass: 'bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-100 dark:border-rose-500/20' },
            { name: 'SuperTest', colorClass: 'bg-fuchsia-50 dark:bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-400 border-fuchsia-100 dark:border-fuchsia-500/20' },
            { name: 'ESLint', colorClass: 'bg-purple-50 dark:bg-purple-600/10 text-purple-700 dark:text-purple-300 border-purple-100 dark:border-purple-600/20' },
            { name: 'Prettier', colorClass: 'bg-pink-50 dark:bg-pink-600/10 text-pink-700 dark:text-pink-300 border-pink-100 dark:border-pink-600/20' },
        ],
        iconClass: 'fa-solid fa-chart-line',
        iconBgClass: 'bg-blue-600',
        iconShadowClass: 'shadow-blue-500/30',
        hoverShadowClass: 'hover:shadow-blue-500/10',
        githubUrl: [
            {
                name: 'Repo. Frontend',
                url: 'https://github.com/AlessUDC/libraryManager-frontend-repo'
            },
            {
                name: 'Repo. Backend',
                url: 'https://github.com/AlessUDC/libraryManager-backend-repo'
            }
        ],
        demoUrl: 'https://library-manager-frontend-repo.vercel.app/auth/login'
    },
    {
        id: '2',
        title: 'Réplica de la página web de Interbank',
        description: `
            Proyecto enfocado en alcanzar el estándar Pixel Perfect replicando la web de Interbank. Diseñado bajo la metodología 
            Mobile-First y estilizado con Tailwind CSS para asegurar una experiencia fluida y responsive. El desarrollo se completó en 3 semanas,
            enfrentando retos complejos de UI como la interactividad del carrusel principal, lo que me permitió perfeccionar mi manejo de
            animaciones y layouts dinámicos. El resultado es una réplica visualmente indistinguible de la plataforma oficial.`,
        image: 'https://mir-s3-cdn-cf.behance.net/projects/404/1af40c58358537.Y3JvcCwxNDAzLDEwOTgsMCww.png',
        category: 'frontend',
        tags: [
            { name: 'Vite', colorClass: 'bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-100 dark:border-purple-500/20' },
            { name: 'React', colorClass: 'bg-sky-50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-100 dark:border-sky-500/20' },
            { name: 'TypeScript', colorClass: 'bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-100 dark:border-blue-500/20' },
            { name: 'Tailwind CSS', colorClass: 'bg-teal-50 dark:bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-100 dark:border-teal-500/20' },
            { name: 'React Multi Carousel', colorClass: 'bg-pink-50 dark:bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-100 dark:border-pink-500/20' },
            { name: 'Reactjs Popup', colorClass: 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-100 dark:border-indigo-500/20' },
            { name: 'Hamburger React', colorClass: 'bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-100 dark:border-amber-500/20' },
            { name: 'ESLint', colorClass: 'bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-100 dark:border-violet-500/20' }
        ],
        iconClass: 'fa-solid fa-shield-halved',
        iconBgClass: 'bg-purple-600',
        iconShadowClass: 'shadow-purple-500/30',
        hoverShadowClass: 'hover:shadow-purple-500/10',
        githubUrl: [
            {
                name: 'Repo. Frontend',
                url: 'https://github.com/AlessUDC/layout-replica-interbank-homepage'
            }
        ],
        demoUrl: 'https://layout-replica-interbank-homepage.vercel.app/'
    },
    {
        id: '3',
        title: 'Réplica de la página web de Toyota Perú',
        description: `
            Proyecto frontend enfocado en replicar y optimizar la experiencia de un e-commerce automotriz. Diseñado con arquitectura
            responsiva y enfocado en la interacción del usuario para mejorar la visualización del catálogo. Estructurado bajo metodologías ágiles
            y buenas prácticas de UI/UX para potenciar el tráfico orgánico y la retención de leads.`,
        image: 'https://www.toyotaperu.com.pe/sites/default/files/2025-03/cabecera-ofertas-y-promociones-mobile.webp',
        category: 'frontend',
        tags: [
            { name: 'Vite', colorClass: 'bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-100 dark:border-purple-500/20' },
            { name: 'React', colorClass: 'bg-sky-50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-100 dark:border-sky-500/20' },
            { name: 'TypeScript', colorClass: 'bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-100 dark:border-blue-500/20' },
            { name: 'Tailwind CSS', colorClass: 'bg-teal-50 dark:bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-100 dark:border-teal-500/20' },
            { name: 'React Multi Carousel', colorClass: 'bg-pink-50 dark:bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-100 dark:border-pink-500/20' },
            { name: 'Hamburger React', colorClass: 'bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-100 dark:border-amber-500/20' },
            { name: 'ESLint', colorClass: 'bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-100 dark:border-violet-500/20' }
        ],
        iconClass: 'fa-solid fa-brain',
        iconBgClass: 'bg-green-600',
        iconShadowClass: 'shadow-green-500/30',
        hoverShadowClass: 'hover:shadow-green-500/10',
        githubUrl: [{ name: 'Repo. Frontend', url: 'https://github.com/AlessUDC/layout-replica-toyota' }],
        demoUrl: 'https://layout-replica-toyota.vercel.app/'
    },
    {
        id: '4',
        title: 'Réplica de la página web ABR Grupo Consultor',
        description: `
            Desarrollo frontend abordado mediante una arquitectura basada en componentes, codificando cada módulo de forma
            independiente para garantizar la escalabilidad y el mantenimiento del software. El proyecto se completó exitosamente en un ciclo
            de desarrollo de 5 semanas, implementando un estricto estándar Mobile-first que asegura una consistencia visual perfecta en
            cualquier dispositivo.`,
        image: 'https://www.abrgrupoconsultor.pe/images/service_formalizacion.webp',
        category: 'frontend',
        tags: [
            { name: 'Vite', colorClass: 'bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-100 dark:border-purple-500/20' },
            { name: 'React', colorClass: 'bg-sky-50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-100 dark:border-sky-500/20' },
            { name: 'TypeScript', colorClass: 'bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-100 dark:border-blue-500/20' },
            { name: 'Tailwind CSS', colorClass: 'bg-teal-50 dark:bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-100 dark:border-teal-500/20' },
            { name: 'Embla Carousel', colorClass: 'bg-pink-50 dark:bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-100 dark:border-pink-500/20' },
            { name: 'Lucide React', colorClass: 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-100 dark:border-indigo-500/20' },
            { name: 'React Aria', colorClass: 'bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-100 dark:border-orange-500/20' },
            { name: 'Nuka Carousel', colorClass: 'bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-100 dark:border-rose-500/20' },
            { name: 'ESLint', colorClass: 'bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-100 dark:border-violet-500/20' },
            { name: 'PostCSS', colorClass: 'bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-100 dark:border-cyan-500/20' }
        ],
        iconClass: 'fa-solid fa-brain',
        iconBgClass: 'bg-green-600',
        iconShadowClass: 'shadow-green-500/30',
        hoverShadowClass: 'hover:shadow-green-500/10',
        githubUrl: [{ name: 'Repo. Frontend', url: 'https://github.com/AlessUDC/layout-home-abrConsultor' }],
        demoUrl: 'https://layout-home-abr-consultor.vercel.app/'
    },
    {
        id: '5',
        title: 'Prototipo de Aula Virtual Universitaria',
        description: `
            Plataforma web diseñada para la centralización de recursos académicos, estructurada con un sistema de acceso
            diferenciado para estudiantes y docentes. Cuenta con una interfaz intuitiva optimizada para la gestión de clases, notas y
            reportes. Proyecto de alta prioridad planificado y ejecutado individualmente en un sprint de desarrollo de 2 semanas.`,
        image: 'https://i.pinimg.com/736x/a3/02/61/a302615ab03df90ff931303f65e24170.jpg',
        category: 'frontend',
        testCredentials: [
            { role: 'Docente', email: 'profesoriedu@untels.edu.pe', password: '456789' },
            { role: 'Estudiante', email: 'alumnoiedu@untels.edu.pe', password: '123456' }
        ],
        tags: [
            { name: 'HTML', colorClass: 'bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-100 dark:border-orange-500/20' },
            { name: 'CSS', colorClass: 'bg-blue-50 dark:bg-blue-600/20 text-blue-700 dark:text-blue-400 border-blue-100 dark:border-blue-600/50' },
            { name: 'JavaScript', colorClass: 'bg-amber-50 dark:bg-yellow-500/10 text-amber-600 dark:text-yellow-400 border-amber-100 dark:border-yellow-500/20' },
        ],
        iconClass: 'fa-solid fa-brain',
        iconBgClass: 'bg-green-600',
        iconShadowClass: 'shadow-green-500/30',
        hoverShadowClass: 'hover:shadow-green-500/10',
        githubUrl: [{ name: 'Repo. Frontend', url: 'https://github.com/AlessUDC/-p1-iEduUntels' }],
        demoUrl: 'https://famous-pika-1f6da1.netlify.app/login.html'
    },
    {
        id: '6',
        title: 'Gestor Financiero Saas FinancePro para freelancers web developers',
        description: `
            Este proyecto fue propuesto por un profesor de la universidad con el fin de llevar el control de las finanzas de los freelancers 
            y mejorar nuestras habilidades en el desarrollo de software y lógica de programacion y de negocio. Este proyecto lo abordé desde
            un enfoque MVP, para lo cual dejé pendiente potenciales funcionalidades como la integración de paga con bancos reales, retiro y canjeo
            de dinero real del usuario. El proyecto lo terminé en el plazo de 19 días.
        `,
        image: 'https://andresledo.es/_astro/como-ser-desarrollador-web.YVJZ19y1.webp',
        category: ['fullstack', 'frontend', 'backend'],
        tags: [
            { name: 'Next.js', colorClass: 'bg-zinc-50 dark:bg-zinc-500/10 text-zinc-800 dark:text-zinc-200 border-zinc-200 dark:border-zinc-500/20' },
            { name: 'React', colorClass: 'bg-sky-50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-100 dark:border-sky-500/20' },
            { name: 'TypeScript', colorClass: 'bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-100 dark:border-blue-500/20' },
            { name: 'Tailwind CSS', colorClass: 'bg-teal-50 dark:bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-100 dark:border-teal-500/20' },
            { name: 'Axios', colorClass: 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-100 dark:border-indigo-500/20' },
            { name: 'Chart.js', colorClass: 'bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 border-red-100 dark:border-red-500/20' },
            { name: 'React Toastify', colorClass: 'bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-100 dark:border-amber-500/20' },
            { name: 'ESLint', colorClass: 'bg-purple-50 dark:bg-purple-600/10 text-purple-700 dark:text-purple-300 border-purple-100 dark:border-purple-600/20' },

            { name: 'Java 17', colorClass: 'bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-100 dark:border-orange-500/20' },
            { name: 'Spring Boot', colorClass: 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-100 dark:border-emerald-500/20' },
            { name: 'Spring Security', colorClass: 'bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-100 dark:border-cyan-500/20' },
            { name: 'Spring Data JPA', colorClass: 'bg-lime-50 dark:bg-lime-500/10 text-lime-600 dark:text-lime-400 border-lime-100 dark:border-lime-500/20' },
            { name: 'JWT', colorClass: 'bg-fuchsia-50 dark:bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-400 border-fuchsia-100 dark:border-fuchsia-500/20' },
            { name: 'PostgreSQL', colorClass: 'bg-blue-50 dark:bg-blue-600/10 text-blue-700 dark:text-blue-300 border-blue-100 dark:border-blue-600/20' },
            { name: 'Lombok', colorClass: 'bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-100 dark:border-violet-500/20' },
            { name: 'Maven', colorClass: 'bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-100 dark:border-rose-500/20' },
            { name: 'Docker', colorClass: 'bg-sky-50 dark:bg-sky-600/10 text-sky-700 dark:text-sky-300 border-sky-100 dark:border-sky-600/20' }
        ],
        iconClass: 'fa-solid fa-brain',
        iconBgClass: 'bg-green-600',
        iconShadowClass: 'shadow-green-500/30',
        hoverShadowClass: 'hover:shadow-green-500/10',
        githubUrl: [
            { name: 'Repo. Frontend', url: 'https://github.com/AlessUDC/freelancerFinancesManager-frontend' },
            { name: 'Repo. Backend', url: 'https://github.com/AlessUDC/freelancerFinancesManager-backend' }
        ],
        demoUrl: '#'
    }
];