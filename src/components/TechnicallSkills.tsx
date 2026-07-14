"use client";
import React from 'react';
import { motion } from 'framer-motion';
import LogoReact from '@/svg/LogoReact'
import LogoDebugging from '@/svg/LogoDebugging'
import LogoSql from '@/svg/LogoSql'

interface TechnicallSkillsItem {
  title: string;
  description: { item: string; }[];
  badge: string;
  icon: React.ReactNode
  iconBg: string
  gradientClass: string;
}

const technicallSkillsData: TechnicallSkillsItem[] = [
  {
    title: 'Desarrollo Front-End ',
    description: [
      { item: 'Creación de páginas web utilizando React/TypeScript.' },
      { item: 'Creación de componentes reutilizables y escalables.' },
      { item: 'Maquetación responsiva con TailwindCSS.' },
      { item: 'Consumo e integración de APIs REST.' },
      { item: 'Gestión de estado y rutas de la aplicación.' },
      { item: 'Optimización de experiencia de usuario (UX/UI)' },

    ],
    badge: 'Desarrollo desde cero',
    icon: (
      <LogoReact className='w-12 lg:w-17 xl:w-14 h-12 lg:h-17 xl:h-14 text-[#4BDEDD]' />
    ),
    iconBg: "bg-[#34364D]",
    gradientClass: "from-primary-600 to-primary-700",
  },
  {
    title: 'Refactorización y Optimización de Performance',
    description: [
      { item: 'Refactorización de código para mejorar su mantenibilidad.' },
      { item: 'Depuración y resolución de errores (debugging).' },
      { item: 'Optimización del rendimiento y reducción de tiempos de carga.' },
      { item: 'Implementación de Lazy Loading y Code Splitting.' },
      { item: 'Aplicación de buenas prácticas de seguridad (OWASP).' },
    ],
    badge: 'Optimización y Rediseño',
    icon: (
      <LogoDebugging className='w-10 lg:w-14 xl:w-12 h-10 lg:h-14 xl:h-12 text-white' />
    ),
    iconBg: "bg-[#34364D]",
    gradientClass: 'from-purple-500 to-primary-600',
  },
  {
    title: 'Integración de APIs y Backend',
    description: [
      { item: 'Desarrollo de APIs REST con NestJS.' },
      { item: 'Diseño e integración de bases de datos SQL y NoSQL.' },
      { item: 'Autenticación y autorización con JWT.' },
      { item: 'Integración de servicios externos y APIs de terceros.' },
      { item: 'Comunicación en tiempo real mediante WebSockets.' },
      { item: 'Documentación de APIs con Swagger.' },
    ],
    badge: 'Integración y Backend',
    icon: (
      <LogoSql className='w-9 lg:w-13 xl:w-11 h-9 lg:h-13 xl:h-11 text-yellow-400' />
    ),
    iconBg: "bg-[#34364D]",
    gradientClass: 'from-primary-400 to-emerald-500',
  }
];

export default function TechnicallSkills() {
  return (
    <section className="py-24 px-8 lg:px-20 relative z-10 bg-slate-50 dark:bg-complementary-950" id="technicall-skills">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-primary-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl xl:max-w-5xl 2xl:max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-syne text-2xl md:text-4xl font-extrabold mb-4 lg:mb-6 text-gray-900 dark:text-white">
            Capacidades Técnicas
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg lg:text-xl max-w-2xl mx-auto font-light">
            Especialista en el diseño y orientado a maximizar la eficiencia del producto digital, garantizando código mantenibles, alta disponibilidad y soluciones de alto impacto operativo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-8">
          {technicallSkillsData.map((technicallskill, idx) => (
            <motion.div
              key={idx}
              className={`
                  group relative bg-white dark:bg-complementary-900/40 border border-gray-200 
                  dark:border-gray-800/80 rounded-2xl p-8 backdrop-blur-md transition-all duration-300 
                  hover:border-primary-500/30 hover:shadow-[0_10px_40px_-10px_rgba(88,117,245,0.18)] 
                  flex flex-col justify-between
                `}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <div>
                {/* Icon Header */}
                <div className={`w-14 h-14 lg:w-20 lg:h-20 rounded-xl flex items-center justify-center mb-6 ${technicallskill.iconBg} text-2xl shadow-lg shadow-primary-500/10 transition-transform duration-300 group-hover:scale-110`}>
                  {technicallskill.icon}
                </div>

                {/* Badge */}
                <span className="inline-block text-xs md:text-sm lg:text-base font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400 mb-3">
                  {technicallskill.badge}
                </span>

                {/* Title */}
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors duration-300 font-syne">
                  {technicallskill.title}
                </h3>

                {/* Description , items*/}
                <ul className={`list-disc ml-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:mb-4 gap-x-6`}>
                  {technicallskill.description.map((desc, descIndex) => (
                    <li
                      key={descIndex}
                      className="text-gray-600 dark:text-gray-400 text-sm md:text-base lg:text-lg leading-relaxed mb-6 lg:mb-2 font-light"
                    >
                      {desc.item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Decorative line on hover */}
              <div className="w-full h-0.5 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden mt-2">
                <div className={`w-0 h-full bg-linear-to-r ${technicallskill.gradientClass} group-hover:w-full transition-all duration-500`}></div>
              </div>
            </motion.div>
          )
          )}
        </div>
      </div>
    </section>
  );
}
