"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [status, setStatus] = useState<{
        type: "success" | "error" | null;
        message: string;
    }>({ type: null, message: "" });
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            setStatus({ type: "error", message: "Por favor, completa todos los campos." });
            return;
        }

        setLoading(true);
        setStatus({ type: null, message: "" });

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus({
                    type: "success",
                    message: "¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.",
                });
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                // Check if setup is required
                if (data.setupRequired) {
                    console.log(data)
                    setStatus({
                        type: "error",
                        message: "El correo no está configurado aún. Por favor, configura las variables de entorno SMTP en tu hosting.",
                    });
                } else {
                    setStatus({
                        type: "error",
                        message: data.error || "Ocurrió un error al enviar el mensaje.",
                    });
                }
            }
        } catch (error) {
            setStatus({
                type: "error",
                message: "Error de conexión. Inténtalo de nuevo más tarde.",
            });
        } finally {
            setLoading(false);
        }
    };

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
                    <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
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

                        <form onSubmit={handleSubmit} className="space-y-6 md:space-y-4">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2 md:space-y-3">
                                    <label className="text-lg md:text-lg font-medium text-gray-700 dark:text-gray-300 ml-1 inline-block">
                                        Conozcámonos
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Tu nombre completo"
                                        required
                                        className="w-full px-5 py-4 rounded-xl inline-block bg-white dark:bg-black/20 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
                                    />
                                </div>
                                <div className="space-y-2 md:space-y-3">
                                    <label className="text-lg md:text-lg font-medium text-gray-700 dark:text-gray-300 ml-1 inline-block">
                                        Correo Electrónico
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="correo@ejemplo.com"
                                        required
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
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="¿Sobre qué quieres hablar?"
                                    required
                                    className="w-full px-5 py-4 rounded-xl inline-block bg-white dark:bg-black/20 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
                                />
                            </div>

                            <div className="space-y-2 md:space-y-3">
                                <label className="text-lg md:text-lg font-medium text-gray-700 dark:text-gray-300 ml-1  inline-block">
                                    Lo que planteas hacer
                                </label>
                                <textarea
                                    rows={5}
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Cuéntame los detalles de tu proyecto..."
                                    required
                                    className="w-full px-5 py-4 rounded-xl inline-block bg-white dark:bg-black/20 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                                />
                            </div>

                            {status.type && (
                                <div
                                    className={`p-4 rounded-xl text-sm font-medium ${status.type === "success"
                                        ? "bg-green-500/10 border border-green-500/20 text-green-400"
                                        : "bg-red-500/10 border border-red-500/20 text-red-400"
                                        }`}
                                >
                                    {status.message}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={loading}
                                className={`group relative w-full flex justify-center items-center gap-2 py-4 md:mt-10 rounded-xl font-bold text-white bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 ${loading ? "opacity-75 cursor-not-allowed" : ""
                                    }`}
                            >
                                <span>{loading ? "Enviando..." : "Enviar Mensaje al Correo"}</span>
                                {!loading && (
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="m22 2-7 20-4-9-9-4Z" />
                                        <path d="M22 2 11 13" />
                                    </svg>
                                )}
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section >
    );
}