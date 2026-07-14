"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { LearningTimeline } from "./LearningTimeline";

export default function AboutMe() {
  return (
    <main className="min-h-screen py-28 md:py-36 px-8 md:px-14 lg:px-20 xl:px-25 relative z-10 bg-slate-50 dark:bg-complementary-950 text-gray-900 dark:text-white">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-10 w-[50%] h-[30%] rounded-full bg-primary-500/5 blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-[40%] h-[30%] rounded-full bg-purple-500/5 blur-[130px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Breadcrumb / Back button */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm md:text-base font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
          >
            <i className="fa-solid fa-arrow-left"></i> Volver al Inicio
          </Link>
        </motion.div>

        {/* Hero Section */}
        <div className="flex flex-col gap-8 md:gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs md:text-sm font-semibold tracking-wider text-primary-600 dark:text-primary-400 uppercase bg-primary-50 dark:bg-primary-500/10 border border-primary-100 dark:border-primary-500/20 rounded-full">
              Sobre Mí
            </span>
            <h1 className="font-syne text-3xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tight text-gray-900 dark:text-white">
              Hola, soy Paolo Ursua
            </h1>
            <p className="font-syne text-xl md:text-2xl font-medium text-primary-600 dark:text-primary-400 mb-6">
              Ingeniero de Sistemas
            </p>
          </motion.div>

          {/* Presentation and Story */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <motion.div
              className="md:col-span-2 space-y-6 text-gray-650 dark:text-gray-400 text-base md:text-lg font-light leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="lg:w-[88%] text-base text-justify">
                Soy un apasionado Ingeniero de Sistemas especializado en el desarrollo de software web de extremo
                a extremo. Mi enfoque no se limita a escribir código, sino a comprender profundamente las necesidades
                del negocio y las limitaciones técnicas antes de proponer soluciones arquitectónicas sólidas y legibles.
              </p>
              <p className="lg:w-[88%] text-base text-justify">
                Tengo amplia experiencia trabajando en el ecosistema de <strong>JavaScript y TypeScript</strong>,
                implementando soluciones del lado del cliente con <strong>React y Next.js</strong>, y robustos backend
                con <strong>Node.js, Express y NestJS</strong>. También tengo experiencia trabajando con bases de
                datos relacionales como <strong>PostgreSQL</strong> mediante ORMs como <strong>Prisma</strong>,
                garantizando un flujo estructurado de la información.
              </p>
              <p className="lg:w-[88%] text-base text-justify">
                Me destaco por ser constante al trabajar con sistemas de control de versiones como Git,
                creando commits atómicos, ramas descriptivas y documentación de decisiones arquitectónicas
                clave. Siempre busco sumarme a equipos retadores donde pueda aportar valor y continuar
                expandiendo mis habilidades de ingeniería.
              </p>
            </motion.div>

            {/* Quick Facts Card */}
            <motion.div
              className="bg-white dark:bg-complementary-900/40 border border-gray-200 dark:border-gray-800/80 rounded-2xl p-6 shadow-md backdrop-blur-sm"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="font-syne text-lg font-bold text-gray-900 dark:text-white mb-4">
                Datos Rápidos
              </h3>
              <ul className="space-y-4 text-sm md:text-base font-light text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-graduation-cap text-primary-500 mt-1"></i>
                  <span>Ingeniería de Sistemas</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-location-dot text-primary-500 mt-1"></i>
                  <span>Lima, Perú</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-code text-primary-500 mt-1"></i>
                  <span>React, Next.js, NestJS & PostgreSQL</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-language text-primary-500 mt-1"></i>
                  <span>Español (Nativo)</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        <LearningTimeline />

        {/* Philosophy / Values Section */}
        <motion.div
          className="border-t border-gray-200 dark:border-gray-800 pt-16 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-syne text-2xl md:text-3xl font-extrabold mb-8 text-gray-900 dark:text-white">
            Mi Filosofía de Desarrollo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-complementary-900/20 border border-gray-200 dark:border-gray-800/60 rounded-2xl p-6">
              <h3 className="font-syne text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                <i className="fa-solid fa-magnifying-glass text-primary-500"></i> Análisis Previo
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base font-light leading-relaxed">
                Antes de tocar el teclado, me aseguro de entender las restricciones del problema, los casos de borde y los requisitos para evitar improvisar después.
              </p>
            </div>

            <div className="bg-white dark:bg-complementary-900/20 border border-gray-200 dark:border-gray-800/60 rounded-2xl p-6">
              <h3 className="font-syne text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                <i className="fa-solid fa-layer-group text-primary-500"></i> Código Limpio y Escalable
              </h3>
              <p className="text-gray-650 dark:text-gray-400 text-sm md:text-base font-light leading-relaxed">
                Trabajo con código pensando en el futuro desarrollador que lo leerá (que podría ser yo mismo en 6 meses). Creo en la simplicidad, la modularidad y el desacoplamiento.
              </p>
            </div>

            <div className="bg-white dark:bg-complementary-900/20 border border-gray-200 dark:border-gray-800/60 rounded-2xl p-6">
              <h3 className="font-syne text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                <i className="fa-solid fa-git-alt text-primary-500"></i> Buenas Prácticas de Git
              </h3>
              <p className="text-gray-650 dark:text-gray-400 text-sm md:text-base font-light leading-relaxed">
                Utilizo Git con disciplina. Realizo commits de una sola responsabilidad con mensajes claros, organizo mi trabajo en ramas descriptivas y mantengo pull requests pequeños y fáciles de revisar.
              </p>
            </div>

            <div className="bg-white dark:bg-complementary-900/20 border border-gray-200 dark:border-gray-800/60 rounded-2xl p-6">
              <h3 className="font-syne text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                <i className="fa-solid fa-comments text-primary-500"></i> Comunicación Proactiva
              </h3>
              <p className="text-gray-650 dark:text-gray-400 text-sm md:text-base font-light leading-relaxed">
                Creo que el software de éxito se construye con una comunicación fluida. Me esfuerzo por explicar con claridad los cuellos de botella técnicos, documentar decisiones y proponer alternativas viables.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          className="text-center bg-linear-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-2xl p-8 md:p-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="font-syne text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
            ¿Quieres saber más de mi perfil técnico?
          </h3>
          <p className="text-gray-650 dark:text-gray-400 text-sm md:text-base font-light mb-6 max-w-xl mx-auto">
            Hablemos sobre cómo puedo aportar a tu equipo de desarrollo o coordinemos para profundizar en proyectos específicos.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-bold rounded-xl transition-all hover:scale-105 active:scale-95 shadow-md shadow-primary-500/20"
          >
            Ir a Contacto <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
