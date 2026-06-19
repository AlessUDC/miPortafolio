"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface ProcessStep {
  step: string;
  title: string;
  description: string;
  iconClass: string;
  colorClass: string;
}

const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Diagnóstico & Estrategia',
    description: 'Analizamos tus objetivos de negocio, las necesidades de tus clientes y definimos los requerimientos técnicos en una sesión inicial de planificación.',
    iconClass: 'fa-solid fa-magnifying-glass-chart',
    colorClass: 'text-primary-400 border-primary-500/20 bg-primary-500/5',
  },
  {
    step: '02',
    title: 'Propuesta y Plan de Acción',
    description: 'Te presento una propuesta detallada que incluye la arquitectura tecnológica recomendada, los plazos de entrega estructurados y una cotización clara.',
    iconClass: 'fa-regular fa-file-lines',
    colorClass: 'text-purple-400 border-purple-500/20 bg-purple-500/5',
  },
  {
    step: '03',
    title: 'Desarrollo Ágil e Interactivo',
    description: 'Construyo la plataforma compartiendo contigo avances de forma periódica. Así puedes validar la experiencia de usuario y el diseño en tiempo real.',
    iconClass: 'fa-solid fa-laptop-code',
    colorClass: 'text-emerald-400 border-emerald-500/20 bg-emerald-500/5',
  },
  {
    step: '04',
    title: 'Optimización y Lanzamiento',
    description: 'Realizo pruebas de velocidad y seguridad. Configuramos el hosting, desplegamos la plataforma y garantizo un soporte de acompañamiento post-lanzamiento.',
    iconClass: 'fa-solid fa-rocket',
    colorClass: 'text-pink-400 border-pink-500/20 bg-pink-500/5',
  }
];

export default function Process() {
  return (
    <section className="py-24 px-8 lg:px-20 relative z-10 bg-complementary-950 border-y border-gray-900" id="process">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs lg:text-sm font-semibold uppercase tracking-wider text-primary-400 px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full">
            El Proceso
          </span>
          <h2 className="font-syne text-3xl md:text-5xl font-extrabold mt-6 mb-6 text-white">
            Cómo trabajaremos juntos
          </h2>
          <p className="text-gray-400 text-lg md:text-[22px] lg:text-xl max-w-2xl mx-auto font-light">
            Un método transparente y estructurado de inicio a fin para garantizar el éxito de tu proyecto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">
          {processSteps.map((item, idx) => (
            <motion.div
              key={idx}
              className="group relative p-6 bg-complementary-900/30 border border-gray-800/60 rounded-2xl hover:border-primary-500/30 hover:shadow-[0_10px_35px_-10px_rgba(88,117,245,0.12)] transition-all duration-300 backdrop-blur-sm"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              {/* Step indicator */}
              <div className="absolute top-4 right-6 text-4xl font-extrabold text-gray-800/20 select-none group-hover:text-primary-500/20 transition-colors duration-300">
                {item.step}
              </div>

              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl border mb-6 transition-all duration-300 group-hover:scale-110 ${item.colorClass}`}>
                <i className={item.iconClass}></i>
              </div>

              {/* Title & Description */}
              <h3 className="text-lg md:text-xl lg:text-xl font-bold text-white mb-3 font-syne transition-colors duration-300 group-hover:text-primary-300">{item.title}</h3>
              <p className="text-gray-400 text-sm md:text-base lg:text-base leading-relaxed font-light">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
