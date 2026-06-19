"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface ValueBenefit {
  title: string;
  description: string;
  stat?: string;
  iconClass: string;
}

const valueBenefitsData: ValueBenefit[] = [
  {
    title: 'Velocidad de carga que retiene clientes',
    description: 'Cada segundo extra de carga reduce tus conversiones. Desarrollo con optimización de calidad para que tu sitio responda al instante en cualquier conexión.',
    stat: '90+ Mobile Speed',
    iconClass: 'fa-solid fa-bolt text-yellow-400',
  },
  {
    title: 'Diseño enfocado en la conversión móvil',
    description: 'La mayoría de tus visitas llegan desde dispositivos móviles. Creo interfaces adaptables e intuitivas pensadas para guiar al usuario hacia la compra o contacto.',
    stat: '100% Responsivo',
    iconClass: 'fa-solid fa-mobile-screen-button text-primary-400',
  },
  {
    title: 'Arquitectura escalable',
    description: 'Tu plataforma crecerá al mismo ritmo que tu negocio. Optimizo el desarrollo mediante ingeniería de software asistida por IA, sin sacrificar la rigurosidad técnica ni los estándares de la industria.',
    stat: 'Código Limpio',
    iconClass: 'fa-solid fa-code-branch text-purple-400',
  },
  {
    title: 'Trato directo y soluciones reales',
    description: 'Olvídate de intermediarios o agencias lentas. Tratas directamente conmigo para definir prioridades, implementar cambios rápidos y obtener soporte continuo.',
    stat: 'Soporte Directo',
    iconClass: 'fa-solid fa-comments text-emerald-400',
  }
];

export default function ValueBenefits() {
  return (
    <section className="py-24 px-8 lg:px-20 relative z-10 bg-complementary-900/10" id="value-benefits">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs lg:text-sm font-semibold uppercase tracking-wider text-primary-400 px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full">
            El Valor de un Buen Desarrollo
          </span>
          <h2 className="font-syne text-3xl md:text-5xl font-extrabold mt-6 mb-6 text-white">
            ¿Por qué construir tu plataforma conmigo?
          </h2>
          <p className="text-gray-400 text-lg md:text-[22px] lg:text-xl max-w-2xl mx-auto font-light">
            La diferencia entre tener una página web que solo existe y una plataforma optimizada que genera resultados.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-8">
          {valueBenefitsData.map((item, idx) => (
            <motion.div
              key={idx}
              className="group flex gap-5 p-6 bg-complementary-900/20 border border-gray-800/60 rounded-2xl hover:border-primary-500/30 hover:shadow-[0_10px_35px_-10px_rgba(88,117,245,0.12)] transition-all duration-300 backdrop-blur-sm"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-complementary-800/80 flex items-center justify-center text-xl transition-all duration-300 group-hover:scale-110">
                <i className={item.iconClass}></i>
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="text-lg md:text-xl lg:text-xl font-bold text-white transition-colors duration-300 group-hover:text-primary-300 font-syne">{item.title}</h3>
                  {item.stat && (
                    <span className="text-[10px] lg:text-xs font-semibold bg-primary-500/10 text-primary-400 border border-primary-500/20 px-2.5 py-0.5 rounded-full">
                      {item.stat}
                    </span>
                  )}
                </div>
                <p className="text-gray-400 text-sm md:text-base lg:text-base leading-relaxed font-light">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
