"use client"

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export type ProjectData = {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'frontend' | 'backend' | 'fullstack';
  tags: { name: string; colorClass: string }[];
  iconClass: string;
  iconBgClass: string;
  iconShadowClass: string;
  hoverShadowClass: string;
  githubUrl: {
    name: string;
    url: string;
  }[];
  demoUrl: string;

  testCredentials?: {
    role: string;
    code?: string;
    email?: string;
    password: string;
  }[];
}

interface ProjectCardProps {
  project: ProjectData;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Prevenir scroll en el body cuando el modal está abierto
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <>
      <article
        className="project-card h-full flex flex-col group bg-white dark:bg-complementary-900/40 border border-gray-200 dark:border-gray-800/80 rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-300 hover:border-primary-500/30 hover:shadow-[0_10px_40px_-10px_rgba(88,117,245,0.18)]"
        onClick={() => setIsModalOpen(true)}
      >
        {/* Sección Imagen */}
        <div className="relative h-48 sm:h-56 shrink-0 overflow-hidden bg-gray-100 dark:bg-complementary-800">
          <img
            src={project.image}
            alt={`${project.title} Preview`}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading='lazy'
          />
          <div className="absolute inset-0 bg-linear-to-t from-white dark:from-complementary-950 via-transparent to-transparent opacity-85"></div>
        </div>

        {/* Contenido de la Card */}
        <div className="p-5 sm:p-6 relative flex flex-col flex-1">
          <div className="flex-1 flex flex-col gap-3">
            <h3 className="font-syne text-lg sm:text-xl lg:text-[22px] font-bold text-gray-900 dark:text-white line-clamp-2 transition-colors group-hover:text-primary-600 dark:group-hover:text-primary-300">
              {project.title}
            </h3>

            {/* Descripción */}
            <div>
              <p className="text-gray-650 dark:text-gray-400 text-sm lg:text-base line-clamp-3 font-light leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Resumen de Credenciales */}
            {project.testCredentials && project.testCredentials.length > 0 && (
              <div className="mt-2 p-3 bg-gray-50 dark:bg-complementary-950/50 border border-gray-200 dark:border-gray-800 rounded-xl flex flex-col gap-2">
                <div className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="lg:text-sm">Acceso de prueba:</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-2">
                  <div className="text-xs text-gray-700 dark:text-gray-300 bg-white dark:bg-complementary-900/30 p-2 rounded-lg border border-gray-200 dark:border-gray-800/50">
                    <span className="font-bold lg:text-sm text-primary-600 dark:text-primary-400 block mb-0.5 lg:mb-1">{project.testCredentials[0].role}</span>
                    <div className="font-mono text-gray-500 dark:text-gray-400 flex flex-col gap-0.5">
                      <div className="lg:text-xs"><span className="text-gray-400 dark:text-gray-500">User:</span> {project.testCredentials[0].email || project.testCredentials[0].code}</div>
                      <div className="lg:text-xs"><span className="text-gray-400 dark:text-gray-500">Pass:</span> {project.testCredentials[0].password}</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Botón Ver Más detalles */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-xs lg:text-sm font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 mt-2 transition-colors cursor-pointer self-start flex items-center gap-1"
            >
              Ver más detalles <i className="fa-solid fa-arrow-right text-[10px]"></i>
            </button>
          </div>

          {/* Footer (Tags y Links) */}
          <div className="flex flex-col gap-4 mt-6">
            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 4).map((tag, idx) => (
                <span
                  key={idx}
                  className={`text-xs lg:text-sm font-medium px-2.5 py-1 ${tag.colorClass} rounded-md border`}
                >
                  {tag.name}
                </span>
              ))}
              {project.tags.length > 4 && (
                <span className="text-xs lg:text-sm font-medium px-2.5 py-1 bg-gray-100 dark:bg-complementary-800 text-gray-500 dark:text-gray-400 rounded-md border border-gray-200 dark:border-gray-800">
                  +{project.tags.length - 4}
                </span>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-y-3 gap-x-4 pt-4 border-t border-gray-200 dark:border-gray-800">
              {project.githubUrl.map((repo, i) => (
                <a
                  key={i}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm lg:text-base text-gray-550 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                >
                  <i className="fa-brands fa-github text-base"></i> {repo.name}
                </a>
              ))}
              {project.demoUrl !== '#' && (
                <a
                  href={project.demoUrl}
                  className={`
                    flex items-center gap-2 text-sm lg:text-base text-primary-600
                    dark:text-primary-400 
                    hover:text-primary-700
                    dark:hover:text-primary-300
                    transition-colors ml-auto font-medium
                    ${project.demoUrl === '#' && 'hidden'}
                  `}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                </a>
              )}
            </div>
          </div>
        </div>
      </article>

      {/* Modal con Framer Motion */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" style={{ zIndex: 9999 }}>
            {/* Fondo clickeable */}
            <motion.div
              className="absolute inset-0"
              onClick={() => setIsModalOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            ></motion.div>

            <motion.div
              className="bg-white dark:bg-complementary-900 border border-gray-200 dark:border-gray-800 rounded-2xl w-full max-w-3xl max-h-[75vh] flex flex-col relative shadow-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              {/* Header del Modal */}
              <div className="flex items-center justify-between p-6 sm:p-8 border-b border-gray-200 dark:border-gray-800 shrink-0">
                <h3 className="font-syne text-xl sm:text-2xl font-bold text-gray-900 dark:text-white pr-8">
                  {project.title}
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 sm:top-6 right-4 sm:right-6 p-2 bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-800 dark:bg-complementary-800 dark:hover:bg-complementary-700 dark:text-gray-400 dark:hover:text-white rounded-full transition-colors z-10"
                >
                  <i className="fa-solid fa-xmark text-lg"></i>
                </button>
              </div>

              {/* Contenido scrolleable del Modal */}
              <div className="p-6 sm:p-8 overflow-y-auto">
                <div className="flex flex-col md:flex-row gap-6">

                  {/* Columna Izquierda */}
                  <div className="w-full md:w-2/5 flex flex-col gap-4">
                    <div className="relative h-48 rounded-xl overflow-hidden bg-gray-100 dark:bg-complementary-800 border border-gray-200 dark:border-gray-800">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    </div>

                    <div className="flex flex-col gap-3 bg-gray-50 dark:bg-complementary-950/30 p-4 rounded-xl border border-gray-200 dark:border-gray-800">
                      <h4 className="text-sm font-bold text-gray-700 dark:text-gray-300 font-syne">Enlaces del proyecto</h4>
                      {project.githubUrl.map((repo, i) => (
                        <a
                          key={i}
                          href={repo.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                        >
                          <i className="fa-brands fa-github text-lg"></i> {repo.name}
                        </a>
                      ))}
                      {project.demoUrl !== '#' && (
                        <a
                          href={project.demoUrl}
                          className={`
                            flex items-center gap-2 text-sm
                            text-primary-600 dark:text-primary-400
                            hover:text-primary-700 dark:hover:text-primary-300
                            transition-colors mt-2 font-medium
                            ${project.demoUrl === '#' && 'hidden'}
                          `}
                          target="_blank"
                        >
                          <i className="fa-solid fa-earth-americas text-lg"></i> Ver Demo Online
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Columna Derecha */}
                  <div className="w-full md:w-3/5 flex flex-col gap-6">

                    {/* Descripción completa */}
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-2 font-syne">Acerca del proyecto</h4>
                      <p className="text-gray-650 dark:text-gray-300 text-sm leading-relaxed font-light">
                        {project.description}
                      </p>
                    </div>

                    {/* Etiquetas */}
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-3 font-syne">Tecnologías</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className={`text-xs font-medium px-2.5 py-1 ${tag.colorClass} rounded-md border`}
                          >
                            {tag.name}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Credenciales */}
                    {project.testCredentials && project.testCredentials.length > 0 && (
                      <div>
                        <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2 font-syne">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                          Credenciales de Acceso
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {project.testCredentials.map((cred, index) => (
                            <div key={index} className="text-xs text-gray-750 dark:text-gray-300 bg-gray-50 dark:bg-complementary-950/60 p-3 rounded-lg border border-gray-200 dark:border-gray-800">
                              <span className="font-bold text-primary-600 dark:text-primary-400 block mb-1.5">{cred.role}</span>
                              <div className="font-mono text-gray-500 dark:text-gray-400 flex flex-col gap-1">
                                {cred.email && <div><span className="text-gray-400 dark:text-gray-500">User:</span> {cred.email}</div>}
                                {cred.code && <div><span className="text-gray-400 dark:text-gray-500">User:</span> {cred.code}</div>}
                                <div><span className="text-gray-400 dark:text-gray-500">Pass:</span> {cred.password}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}