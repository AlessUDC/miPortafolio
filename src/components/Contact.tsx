"use client";

import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section
            id="contacto"
            className="relative overflow-hidden py-24 px-8 z-1"
        >
            {/* Background Glows */}
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] -z-10 pointer-events-none" />

            <div className="relative max-w-7xl lg:max-w-fit mx-auto ">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <span className="inline-flex items-center px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-semibold tracking-wider uppercase mb-6 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                        Hablemos
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight test-gray-900 dark:text-white">
                        Convirtamos tu idea en una solución digital <br className="hidden $inline-block" />
                    </h2>
                    <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light">
                        Hablemos de tu proyecto y cómo podemos abordarlo para alcanzar tus objetivos.
                    </p>
                </motion.div>

                <div className="grid lg:flex lg:w-fit lg:mx-auto gap-12 items-start">
                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="lg:w-160  lg:h-full p-6 md:p-8 rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/3 backdrop-blur-2xl shadow-2xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl -z-10" />

                        <form className="space-y-6 md:space-y-4">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2 md:space-y-3">
                                    <label className="text-lg md:text-lg font-medium text-gray-700 dark:text-gray-300 ml-1 inline-block">
                                        Conozcámonos
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Tu nombre completo"
                                        className="w-full px-5 py-4 rounded-xl inline-block bg-white dark:bg-black/20 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
                                    />
                                </div>
                                <div className="space-y-2 md:space-y-3">
                                    <label className="text-lg md:text-lg font-medium text-gray-700 dark:text-gray-300 ml-1 inline-block">
                                        Correo Electrónico
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="correo@ejemplo.com"
                                        className="w-full px-5 py-4 rounded-xl inline-block bg-white dark:bg-black/20 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2 md:space-y-3">
                                <label className="text-lg md:text-lg font-medium text-gray-700 dark:text-gray-300 ml-1 inline-block">
                                    Tu Idea
                                </label>
                                <input
                                    type="text"
                                    placeholder="¿Sobre qué quieres hablar?"
                                    className="w-full px-5 py-4 rounded-xl inline-block bg-white dark:bg-black/20 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
                                />
                            </div>

                            <div className="space-y-2 md:space-y-3">
                                <label className="text-lg md:text-lg font-medium text-gray-700 dark:text-gray-300 ml-1  inline-block">
                                    Lo que planteas hacer
                                </label>
                                <textarea
                                    rows={5}
                                    placeholder="Cuéntame los detalles de tu proyecto..."
                                    className="w-full px-5 py-4 rounded-xl inline-block bg-white dark:bg-black/20 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="group relative w-full flex justify-center items-center gap-2 py-4 md:mt-10 rounded-xl font-bold text-white bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
                            >
                                <span>Enviar Mensaje al Correo</span>
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section >
    );
}