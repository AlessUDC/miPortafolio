import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-[#081224]/30 backdrop-blur-md pt-16 md:pt-14 pb-8 md:pb-10">
            <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-2">

                {/* Logo e Info */}
                <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
                    <Link
                        href="#top"
                        className="
                            font-bold
                            text-2xl
                            bg-linear-to-r
                            from-blue-600
                            to-purple-600
                            dark:from-blue-300
                            dark:to-purple-400
                            bg-clip-text
                            text-transparent
                        "
                    >
                        Paolo Ursua
                    </Link>
                    <p className="text-gray-650 dark:text-gray-400 text-sm max-w-xs">
                        Creando experiencias web modernas, escalables y orientadas al usuario.
                    </p>
                </div>

                {/* Enlaces Rápidos */}
                <div className="flex flex-col gap-4">
                    <p className="text-gray-900 dark:text-white font-semibold">Enlaces rápidos</p>
                    <nav className="flex flex-col flex-wrap items-center md:items-start gap-4 text-sm text-gray-600 dark:text-gray-400 font-medium">
                        <Link href="#inicio" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            Inicio
                        </Link>
                        <Link href="#beneficios" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            Beneficios
                        </Link>
                        <Link href="#proyectos" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            Proyectos
                        </Link>
                        <Link href="#contacto" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            Contacto
                        </Link>
                    </nav>
                </div>

                {/* Contactos */}
                <div className="flex items-center gap-4">
                    <a
                        href="https://github.com/alessudc"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-500 hover:bg-gray-100 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white transition-all duration-300"
                        aria-label="GitHub"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/paolo-alessandro-ursua-de-la-cruz-111551415/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-500 hover:bg-gray-100 dark:hover:bg-white/10 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300"
                        aria-label="LinkedIn"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                    </a>
                    <a
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-500 hover:bg-gray-100 dark:hover:bg-white/10 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300"
                        aria-label="Correo"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                    </a>
                </div>
            </div>

            {/* Copyright */}
            <div className="mt-12 pt-8 border-t border-gray-200/50 dark:border-white/5 text-center text-gray-500 text-sm">
                <p>&copy; {new Date().getFullYear()} Paolo Ursua. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}
