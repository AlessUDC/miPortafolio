"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface ValueBenefit {
  title: string;
  description: string;
  stat?: string;
}

const valueBenefitsData: ValueBenefit[] = [
  {
    title: 'Entiendo el problema antes de escribir código',
    description: `Reviso requerimientos, casos límite y restricciones técnicas antes de tocar el editor.
    `,
  },
  {
    title: 'Desarrollo la solución de manera sencilla',
    description: `Integro herramientas de Inteligencia Artificial para acelerar mi desarrollo del código,
    optimizando tiempos de entrega. Me propongo a trabajar de la mano de metodologías ágiles 
    como SCRUM para mantener orden en el desarrollo de la solución, además de usar Git para un seguimiento 
    de cambios realizados.

    `,
  },
  {
    title: 'Pruebas antes de entregar',
    description: `Me encargo de que la solución sea eficaz, o de que el producto cumpla su propósito para
    evitar fallas en producción. Hago pruebas en diferentes escenarios si se trata de un sistema web, o si es
    es una solución secundaria trato de comprender en cómo afecta mi solución al sistema. Me mentalizo como un QA Tester para
    entregar un producto de calidad.`,
  },
  {
    title: 'Documento decisiones, no solo el código',
    description: 'Dejo constancia del porqué detrás de una decisión de arquitectura, no solo del qué. De esta manera se facilita el mantenimiento del código y la escalabilidad de la solución.',
  }
];

export default function ValueBenefits() {
  return (
    <section className="py-24 px-8 lg:px-20 relative z-10 bg-gray-50/50 dark:bg-complementary-900/10" id="workflow">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs lg:text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400 px-4 py-2 bg-primary-50 dark:bg-primary-500/10 border border-primary-100 dark:border-primary-500/20 rounded-full">
            El Valor de un Buen Desarrollo
          </span>
          <h2 className="font-syne text-2xl md:text-4xl font-extrabold mt-6 mb-6 text-gray-900 dark:text-white">
            ¿Cómo es que trabajo?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg lg:text-xl max-w-2xl mx-auto font-light">
            La diferencia entre tener una página web que solo existe y una plataforma optimizada que genera resultados.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
          {valueBenefitsData.map((item, idx) => (
            <motion.div
              key={idx}
              className="group flex gap-9 p-6 bg-white dark:bg-complementary-900/20 border border-gray-200 dark:border-gray-800/60 rounded-2xl hover:border-primary-500/30 hover:shadow-[0_10px_35px_-10px_rgba(88,117,245,0.12)] transition-all duration-300 backdrop-blur-sm"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <h1 className='py-3 lg:text-2xl 2xl:text-xl'>0{idx + 1}</h1>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="text-base md:text-lg lg:text-xl 2xl:text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-primary-600 dark:group-hover:text-primary-300 font-syne">{item.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base lg:text-lg 2xl:text-base leading-relaxed font-light">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
