"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface BenefitItem {
  title: string;
  description: string;
  badge: string;
  iconClass: string;
  gradientClass: string;
}

const benefitsData: BenefitItem[] = [
  {
    title: 'Construyo tu plataforma de alto rendimiento',
    description: 'Diseño y desarrollo aplicaciones web rápidas, escalables y optimizadas. Estructuro tu embudo digital para guiar a tus visitas directo a la acción.',
    badge: 'Desarrollo desde cero',
    iconClass: 'fa-solid fa-layer-group',
    gradientClass: 'from-primary-500 to-purple-500',
  },
  {
    title: 'Mejoro tus servicios web existentes',
    description: '¿Tu plataforma actual es lenta, inestable o difícil de actualizar? Analizo e implemento mejoras críticas de rendimiento, seguridad y experiencia de usuario.',
    badge: 'Optimización y Rediseño',
    iconClass: 'fa-solid fa-gauge-high',
    gradientClass: 'from-purple-500 to-primary-600',
  },
  {
    title: 'Automatizo y conecto tus procesos de negocio',
    description: 'Integro pasarelas de pago, APIs de terceros, bases de datos y sistemas de reportes en tiempo real para reducir costes operativos y hacer que tu negocio funcione sin fricciones.',
    badge: 'Integración y Backend',
    iconClass: 'fa-solid fa-gears',
    gradientClass: 'from-primary-400 to-emerald-500',
  }
];

export default function Benefits() {
  return (
    <section className="py-24 px-8 lg:px-20 relative z-10 bg-slate-50 dark:bg-complementary-950" id="benefits">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-primary-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-syne text-3xl md:text-5xl font-extrabold mb-4 lg:mb-6 text-gray-900 dark:text-white">
            Conmigo podrás...
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg md:text-[22px] lg:text-xl max-w-2xl mx-auto font-light">
            Hacer crecer tu negocio digital con soluciones tecnológicas pensadas para vender más y operar mejor.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-8">
          {benefitsData.map((benefit, idx) => (
            <motion.div
              key={idx}
              className="group relative bg-white dark:bg-complementary-900/40 border border-gray-200 dark:border-gray-800/80 rounded-2xl p-8 backdrop-blur-md transition-all duration-300 hover:border-primary-500/30 hover:shadow-[0_10px_40px_-10px_rgba(88,117,245,0.18)] flex flex-col justify-between"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <div>
                {/* Icon Header */}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-linear-to-br ${benefit.gradientClass} text-white text-2xl shadow-lg shadow-primary-500/10 transition-transform duration-300 group-hover:scale-110`}>
                  <i className={benefit.iconClass}></i>
                </div>

                {/* Badge */}
                <span className="inline-block text-xs md:text-[13px] lg:text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400 mb-3">
                  {benefit.badge}
                </span>

                {/* Title */}
                <h3 className="text-xl md:text-[22px] lg:text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors duration-300 font-syne">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base lg:text-base leading-relaxed mb-6 font-light">
                  {benefit.description}
                </p>
              </div>

              {/* Decorative line on hover */}
              <div className="w-full h-0.5 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden mt-2">
                <div className={`w-0 h-full bg-linear-to-r ${benefit.gradientClass} group-hover:w-full transition-all duration-500`}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
