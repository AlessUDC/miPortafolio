"use client"

import { useState } from 'react';
import ProjectCard from './ProjectCard';
import type { ProjectData } from './ProjectCard';

const projectsData: ProjectData[] = [
  {
    id: '1',
    title: 'Gestor Bibliotecario para una universidad',
    description: 'Aplicación web diseñada para la automatización de procesos en bibliotecas universitarias. Permite el registro eficiente de libros, la gestión de usuarios, el control de préstamos y la generación de reportes detallados, mejorando significativamente la eficiencia operativa del personal bibliotecario.',
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
    title: 'Réplica de Página Web de Interbank',
    description: 'Réplica del diseño de la página web de Interbank. Este proyecto fue desarrollado con el objetivo de recrear visualmente la interfaz de usuario del banco Interbank utilizando tecnologías modernas de desarrollo web. El proyecto sirvió como un ejercicio práctico para aplicar y mejorar habilidades en diseño responsivo, layouts complejos y integración con componentes interactivos. La réplica incluye secciones clave como la cabecera de navegación, carruseles de productos, formularios de contacto y pies de página, manteniendo la estética y la experiencia de usuario del sitio original.',
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
    title: 'Réplica de Página Web de Toyota Perú',
    description: 'Réplica del diseño de la página web de Toyota Perú. Este proyecto fue desarrollado con la finalidad de mejorar habilidades en diseño responsivo, layouts complejos y integración con componentes interactivos. La réplica incluye secciones clave como la cabecera de navegación, carruseles de productos, formularios de contacto y pies de página, manteniendo la estética y la experiencia de usuario del sitio original.',
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
    title: 'Réplica de Página Web ABR Grupo Consultor',
    description: 'Proyecto encargado por ABR Grupo Consultor para mejorar la experiencia de usuario y la interfaz de su página web. El proyecto consistió en el rediseño de la página web, mejorando la experiencia de usuario y la interfaz de usuario.',
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
    title: 'Backend de LibraryManager',
    description: 'Backend de LibraryManager, desarrollado para gestionar libros y usuarios. Usa PostgreSQL como base de datos, prisma como ORM, JWT para autenticación, NestJS para el framework, UUID como generador de IDs, nodeMailer como cliente de envío de correos, entre otros.',
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
    title: 'Frontend de LibraryManager',
    description: 'Frontend de LibraryManager, implementado como producto final junto con su backend.',
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
    title: 'Prototipo de Aula Virtual para una universidad',
    description: 'Este prototipo fue creado y pensado para usuarios estudiantes y docentes de una universidad, con el objetivo de que el alumno pueda acceder a su información académica y a las clases, mientras que el docente pueda acceder a la información de sus estudiantes y a las clases.',
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
    <main className="py-24 px-8 relative z-10" id="projects">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 text-white">Portafolio de Proyectos</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Una muestra de plataformas web y aplicaciones a medida diseñadas bajo altos estándares de rendimiento, escalabilidad y diseño funcional.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {['all', 'frontend', 'backend', 'fullstack'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${filter === f
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
            >
              {f === 'all' ? 'Todos' : f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
