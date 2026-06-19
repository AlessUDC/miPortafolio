"use client"

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';
import type { ProjectData } from './ProjectCard';

const projectsData: ProjectData[] = [
  {
    id: '1',
    title: 'Sistema de Gestión y Automatización de Procesos',
    description: 'Plataforma web integral que digitaliza y automatiza tareas administrativas, reduciendo tiempos de gestión operativa en un 70%. Diseñada con actualización en tiempo real mediante WebSockets, reportes automáticos y accesos seguros para garantizar el control total de las operaciones diarias de la organización.',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'fullstack',
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
      { name: 'React', colorClass: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
      { name: 'Vite', colorClass: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' },
      { name: 'TailwindCSS', colorClass: 'bg-teal-500/10 text-teal-400 border-teal-500/20' },
      { name: 'React Query', colorClass: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20' },
      { name: 'React Router', colorClass: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20' },
      { name: 'TypeScript', colorClass: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },

      { name: 'Prisma ORM', colorClass: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20' },
      { name: 'PostgreSQL', colorClass: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
      { name: 'JWT', colorClass: 'bg-purple-500/10 text-purple-400 border-purple-500/20' },

      { name: 'Nest.js', colorClass: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
      { name: 'Node.js', colorClass: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
      { name: 'Docker Compose', colorClass: 'bg-sky-500/10 text-sky-400 border-sky-500/20' },
      { name: 'WebSockets', colorClass: 'bg-orange-500/10 text-orange-400 border-orange-500/20' },
      { name: 'REST API', colorClass: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' },
    ],
    iconClass: 'fa-solid fa-chart-line',
    iconBgClass: 'bg-blue-600',
    iconShadowClass: 'shadow-blue-500/30',
    hoverShadowClass: 'hover:shadow-blue-500/10',
    githubUrl: [
      {
        name: 'Repo. Frontend',
        url: 'https://github.com/alessudc/libraryManager-frontend'
      },
      {
        name: 'Repo. Backend',
        url: 'https://github.com/alessudc/libraryManager-backend'
      }
    ],
    demoUrl: 'https://library-manager-frontend-repo.vercel.app/auth/login'
  },
  {
    id: '2',
    title: 'Interfaz Web de Alta Conversión (Estilo Interbank)',
    description: 'Desarrollo pixel-perfect de una plataforma bancaria moderna, enfocada en la navegación fluida y en maximizar la conversión de usuarios a clientes. Totalmente responsiva y optimizada para carga ultra rápida, garantizando una excelente experiencia en dispositivos móviles y de escritorio.',
    image: 'https://mir-s3-cdn-cf.behance.net/projects/404/1af40c58358537.Y3JvcCwxNDAzLDEwOTgsMCww.png',
    category: 'frontend',
    tags: [
      { name: 'React', colorClass: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
      { name: 'Vite', colorClass: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' },
      { name: 'TailwindCSS', colorClass: 'bg-teal-500/10 text-teal-400 border-teal-500/20' },
      { name: 'TypeScript', colorClass: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
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
    title: 'Réplica de Catálogo Web (Estilo Toyota Perú)',
    description: 'Réplica responsiva y optimizada para e-commerce de Toyota Perú, enfocada en facilitar la visualización del catálogo de productos y maximizar la interacción del usuario. Estructurada bajo buenas prácticas de UI/UX para aumentar el tráfico y captación de clientes potenciales.',
    image: 'https://www.toyotaperu.com.pe/sites/default/files/2025-03/cabecera-ofertas-y-promociones-mobile.webp',
    category: 'frontend',
    tags: [
      { name: 'React', colorClass: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
      { name: 'Vite', colorClass: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' },
      { name: 'TailwindCSS', colorClass: 'bg-teal-500/10 text-teal-400 border-teal-500/20' },
      { name: 'TypeScript', colorClass: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
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
    title: 'Rediseño Web Estratégico (ABR Grupo Consultor)',
    description: 'Rediseño web enfocado en mejorar la identidad digital y la generación de leads calificados de ABR Grupo Consultor. La nueva experiencia optimiza la navegación y facilita la solicitud directa de asesorías.',
    image: 'https://www.abrgrupoconsultor.pe/images/service_formalizacion.webp',
    category: 'frontend',
    tags: [
      { name: 'React', colorClass: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
      { name: 'Vite', colorClass: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' },
      { name: 'TailwindCSS', colorClass: 'bg-teal-500/10 text-teal-400 border-teal-500/20' },
      { name: 'TypeScript', colorClass: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
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
    title: 'Servicio de Backend de Alta Disponibilidad',
    description: 'Servicio de backend robusto y de alto rendimiento que centraliza y protege toda la lógica del negocio. Implementa autenticación segura con JWT, automatización de notificaciones por correo y bases de datos relacionales optimizadas para manejar altas cargas de tráfico diario.',
    image: 'https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Teaser/archivierung-t.jpg',
    category: 'backend',
    tags: [
      { name: 'NestJS', colorClass: 'bg-red-500/10 text-red-400 border-red-500/20' },
      { name: 'TypeScript', colorClass: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
      { name: 'Node.js', colorClass: 'bg-green-500/10 text-green-400 border-green-500/20' },
      { name: 'PostgreSQL', colorClass: 'bg-sky-500/10 text-sky-400 border-sky-500/20' },
      { name: 'Prisma ORM', colorClass: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20' },
      { name: 'JWT', colorClass: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' },
      { name: 'bcrypt', colorClass: 'bg-orange-500/10 text-orange-400 border-orange-500/20' },
      { name: 'Class Validator', colorClass: 'bg-purple-500/10 text-purple-400 border-purple-500/20' },
      { name: 'Class Transformer', colorClass: 'bg-violet-500/10 text-violet-400 border-violet-500/20' },
      { name: 'Mailgun', colorClass: 'bg-pink-500/10 text-pink-400 border-pink-500/20' },
      { name: 'Nodemailer', colorClass: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20' },
      { name: 'Nest Schedule', colorClass: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' },
      { name: 'UUID', colorClass: 'bg-teal-500/10 text-teal-400 border-teal-500/20' },
      { name: 'Jest', colorClass: 'bg-rose-500/10 text-rose-400 border-rose-500/20' },
      { name: 'SuperTest', colorClass: 'bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/20' },
      { name: 'ESLint', colorClass: 'bg-purple-600/10 text-purple-300 border-purple-600/20' },
      { name: 'Prettier', colorClass: 'bg-pink-600/10 text-pink-300 border-pink-600/20' },
    ],
    iconClass: 'fa-solid fa-brain',
    iconBgClass: 'bg-green-600',
    iconShadowClass: 'shadow-green-500/30',
    hoverShadowClass: 'hover:shadow-green-500/10',
    githubUrl: [{ name: 'Repo. Backend', url: 'https://github.com/AlessUDC/libraryManager-backend-repo' }],
    demoUrl: '#'
  },
  {
    id: '6',
    title: 'Interfaz Administrativa con Analíticas e Interacciones QR',
    description: 'Interfaz de usuario interactiva y optimizada para la administración operativa. Cuenta con paneles analíticos interactivos con gráficos en tiempo real, lector de códigos QR para agilizar los préstamos y flujos de trabajo dinámicos con arrastrar y soltar.',
    image: 'https://img.freepik.com/foto-gratis/tiro-medio-mujer-auriculares-alrededor-cuello-leyendo-book0_23-2148397145.jpg?semt=ais_hybrid&w=740&q=80',
    category: 'frontend',
    tags: [
      { name: 'Figma', colorClass: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20' },
      { name: 'Prototipo', colorClass: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
      { name: 'UI/UX', colorClass: 'bg-violet-500/10 text-violet-400 border-violet-500/20' },
      { name: 'Tailwind CSS', colorClass: 'bg-sky-500/10 text-sky-400 border-sky-500/20' },
      { name: 'React Router', colorClass: 'bg-red-500/10 text-red-400 border-red-500/20' },
      { name: 'React Query', colorClass: 'bg-pink-500/10 text-pink-400 border-pink-500/20' },
      { name: 'Axios', colorClass: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20' },
      { name: 'HTML', colorClass: 'bg-orange-500/10 text-orange-400 border-orange-500/20' },
      { name: 'Zod', colorClass: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' },
      { name: 'Headless UI', colorClass: 'bg-purple-500/10 text-purple-400 border-purple-500/20' },
      { name: 'Heroicons', colorClass: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' },
      { name: 'DnD Kit', colorClass: 'bg-teal-500/10 text-teal-400 border-teal-500/20' },
      { name: 'Recharts', colorClass: 'bg-green-500/10 text-green-400 border-green-500/20' },
      { name: 'React Toastify', colorClass: 'bg-amber-500/10 text-amber-400 border-amber-500/20' },
      { name: 'HTML5 QR Code', colorClass: 'bg-lime-500/10 text-lime-400 border-lime-500/20' },
      { name: 'React Barcode', colorClass: 'bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/20' },
      { name: 'Chakra UI', colorClass: 'bg-blue-600/10 text-blue-300 border-blue-600/20' },
      { name: 'ESLint', colorClass: 'bg-purple-600/10 text-purple-300 border-purple-600/20' }
    ],
    iconClass: 'fa-solid fa-brain',
    iconBgClass: 'bg-green-600',
    iconShadowClass: 'shadow-green-500/30',
    hoverShadowClass: 'hover:shadow-green-500/10',
    githubUrl: [{ name: 'Repo. Frontend', url: 'https://github.com/AlessUDC/libraryManager-frontend-repo' }],
    demoUrl: '#'
  },
  {
    id: '7',
    title: 'Aula Virtual Universitaria (LMS)',
    description: 'Prototipo funcional de plataforma educativa (LMS) diseñado para centralizar recursos académicos. Estructura el acceso diferenciado a estudiantes y docentes con una interfaz intuitiva para la gestión de clases, notas y reportes.',
    image: 'https://i.pinimg.com/736x/a3/02/61/a302615ab03df90ff931303f65e24170.jpg',
    category: 'frontend',
    testCredentials: [
      { role: 'Docente', email: 'profesoriedu@untels.edu.pe', password: '456789' },
      { role: 'Estudiante', email: 'alumnoiedu@untels.edu.pe', password: '123456' }
    ],
    tags: [
      { name: 'HTML', colorClass: 'bg-orange-500/10 text-orange-400 border-orange-500/20' },
      { name: 'CSS', colorClass: 'bg-blue-600/20 text-blue-400 border-blue-600/50' },
      { name: 'JavaScript', colorClass: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' },
    ],
    iconClass: 'fa-solid fa-brain',
    iconBgClass: 'bg-green-600',
    iconShadowClass: 'shadow-green-500/30',
    hoverShadowClass: 'hover:shadow-green-500/10',
    githubUrl: [{ name: 'Repo. Frontend', url: 'https://github.com/AlessUDC/libraryManager-frontend-repo' }],
    demoUrl: '#'
  }
];

export default function Projects() {
  const [filter, setFilter] = useState<string>('all');

  const filteredProjects = projectsData.filter(
    (project) => filter === 'all' || project.category === filter
  );

  return (
    <main className="py-24 px-8 lg:px-20 relative z-10 bg-complementary-950" id="projects">
      {/* Background decoration */}
      <div className="absolute top-1/3 left-10 w-[50%] h-[40%] rounded-full bg-primary-500/5 blur-[130px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-syne text-3xl md:text-5xl font-bold mb-4 md:mb-6 lg:mb-8 text-white">Proyectos que generan resultados</h2>
          <p className="text-gray-400 text-lg md:text-xl lg:text-xl max-w-2xl mx-auto font-light">
            Una muestra de plataformas web y aplicaciones a medida diseñadas bajo altos estándares de rendimiento, escalabilidad y diseño funcional para potenciar negocios.
          </p>
        </motion.div>

        {/* Filter Controls */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {['all', 'frontend', 'backend', 'fullstack'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2.5 rounded-full text-sm lg:text-base font-medium transition-all duration-300 cursor-pointer ${filter === f
                ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                : 'bg-complementary-800 text-gray-400 hover:bg-complementary-700 hover:text-white'
                }`}
            >
              {f === 'all' ? 'Todos' : f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </main>
  );
}
