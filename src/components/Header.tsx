"use client";

import Link from 'next/link';
import { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';

// Moon icon (dark mode active)
const MoonIcon = ({ className }: { className?: string }) => (
    <svg
        fill="currentColor"
        className={className}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
    >
        <path d="M12.741,20.917a9.389,9.389,0,0,1-1.395-.105,9.141,9.141,0,0,1-1.465-17.7,1.177,1.177,0,0,1,1.21.281,1.273,1.273,0,0,1,.325,1.293,8.112,8.112,0,0,0-.353,2.68,8.266,8.266,0,0,0,4.366,6.857,7.628,7.628,0,0,0,3.711.993,1.242,1.242,0,0,1,.994,1.963h0A9.148,9.148,0,0,1,12.741,20.917ZM10.261,4.05a.211.211,0,0,0-.065.011,8.137,8.137,0,1,0,9.131,12.526h0a.224.224,0,0,0,.013-.235.232.232,0,0,0-.206-.136A8.619,8.619,0,0,1,14.946,15.1a9.274,9.274,0,0,1-4.883-7.7,9.123,9.123,0,0,1,.4-3.008.286.286,0,0,0-.069-.285A.184.184,0,0,0,10.261,4.05Z" />
    </svg>
);

// Sun icon (light mode active)
const SunIcon = ({ className }: { className?: string }) => (
    <svg
        fill="currentColor"
        className={className}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
    >
        <path d="M12 17.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm0 1.5a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-16a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2A.75.75 0 0 1 12 3zm0 15.5a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2A.75.75 0 0 1 12 18.5zM3 12a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2A.75.75 0 0 1 3 12zm15.5 0a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75zM5.636 6.697a.75.75 0 0 1 1.06 0l1.415 1.414a.75.75 0 1 1-1.06 1.06L5.636 7.758a.75.75 0 0 1 0-1.06zm9.193 9.192a.75.75 0 0 1 1.06 0l1.415 1.415a.75.75 0 1 1-1.06 1.06l-1.415-1.414a.75.75 0 0 1 0-1.061zM6.697 18.364a.75.75 0 0 1 0-1.06l1.414-1.415a.75.75 0 1 1 1.06 1.06l-1.414 1.415a.75.75 0 0 1-1.06 0zM15.889 9.11a.75.75 0 0 1 0-1.06l1.415-1.415a.75.75 0 1 1 1.06 1.061l-1.414 1.414a.75.75 0 0 1-1.061 0z" />
    </svg>
);

const NavLinks = ({ onClick }: { onClick?: () => void }) => (
    <>
        <Link href="#beneficios" onClick={onClick} className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors shrink-0 font-medium">
            Beneficios
        </Link>
        <Link href="#value-benefits" onClick={onClick} className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors shrink-0 font-medium">
            Propuesta de Valor
        </Link>
        <Link href="#process" onClick={onClick} className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors shrink-0 font-medium">
            Cómo Trabajaremos Juntos
        </Link>
        <Link href="#projects" onClick={onClick} className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors shrink-0 font-medium">
            Proyectos
        </Link>
        <Link href="#contacto" onClick={onClick} className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors shrink-0 font-medium">
            Contacto
        </Link>
    </>
);


export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    const [atEnd, setAtEnd] = useState(false);

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const el = e.currentTarget;

        setAtEnd(
            Math.ceil(el.scrollLeft + el.clientWidth) >= el.scrollWidth
        );
    };

    return (
        <>
            <header
                className={`
                    fixed top-0 left-0 right-0
                    z-50 transition-colors duration-300
                    xl:w-full xl:flex xl:justify-center
                    ${isMenuOpen ? 'bg-transparent border-transparent' : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-2xl border-b border-gray-200/50 dark:border-white/5'}
                `}
            >
                <div className="max-w-7xl xl:max-w-full 2xl:w-full 2xl:max-w-[90%] mx-auto xl:mx-0 px-6 md:px-14 lg:px-20 xl:px-25 h-20 lg:h-30 xl:h-20 flex items-center justify-between lg:gap-10 xl:gap-22 2xl:gap-16">

                    {/* Logo / Nombre */}
                    <Link
                        href="#top"
                        className="
                            font-bold
                            text-xl lg:text-2xl
                            bg-linear-to-r
                            from-blue-600
                            to-purple-600
                            dark:from-blue-300
                            dark:to-purple-400
                            bg-clip-text
                            text-transparent
                            relative z-50
                        "
                    >
                        Paolo Ursua
                    </Link>

                    {/* Navegación Desktop */}
                    <nav
                        onScroll={handleScroll}
                        className={`
                            hidden md:flex items-center
                            gap-8 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12
                            overflow-x-auto
                            [&::-webkit-scrollbar]:hidden
                            [-ms-overflow-style:none]
                            [scrollbar-width:none]
                            md:w-60
                            xl:w-120
                            2xl:w-auto
                            lg:text-lg lg:w-90
                            2xl:text-base
                            2xl:overflow-visible
                            2xl:[mask-image:none]
                            2xl:[-webkit-mask-image:none]
                            ${atEnd
                                ? "[mask-image:none] [-webkit-mask-image:none]"
                                : "[mask-image:linear-gradient(to_right,black_0%,black_85%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,black_0%,black_85%,transparent_100%)]"
                            }
                        `}
                    >
                        <NavLinks />
                    </nav>

                    {/* Acciones Desktop */}
                    <div className="hidden md:flex items-center gap-6">
                        {/* Botón Dark/Light */}
                        <button
                            onClick={toggleTheme}
                            className="
                            w-11 h-11 lg:w-12 lg:h-12
                            rounded-full
                            border border-gray-200 dark:border-white/10
                            flex items-center justify-center
                            hover:bg-gray-100 dark:hover:bg-white/5
                            text-gray-800 dark:text-white
                            transition-all duration-300
                            "
                            aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
                        >
                            {theme === 'dark'
                                ? <MoonIcon className="w-5 h-5 lg:w-6 lg:h-6 transition-all duration-300" />
                                : <SunIcon className="w-5 h-5 lg:w-6 lg:h-6 text-amber-500 transition-all duration-300" />
                            }
                        </button>

                        {/* CTA */}
                        <button
                            className="
                            px-4 py-2 lg:px-6 lg:py-2.5
                            rounded-xl
                            text-sm lg:text-base
                            bg-blue-600
                            hover:bg-blue-500
                            text-white
                            transition
                            font-medium
                            "
                        >
                            <a href="#contacto">Cuéntame tu idea</a>
                        </button>
                    </div>

                    {/* Hamburger Menu Mobile */}
                    <button
                        className="md:hidden relative z-50 p-2 text-gray-800 hover:text-gray-900 dark:text-white/80 dark:hover:text-white transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                        )}
                    </button>
                </div>
            </header>

            {/* Menú Mobile Overlay */}
            <div
                className={`
                    md:hidden fixed inset-0 z-40 bg-white dark:bg-gray-950 transition-all duration-300 flex flex-col items-center justify-center gap-8
                    ${isMenuOpen ? 'opacity-100 pointer-events-auto visible' : 'opacity-0 pointer-events-none invisible'}
                `}
            >
                <nav className="flex flex-col items-center gap-6 text-xl">
                    <NavLinks onClick={() => setIsMenuOpen(false)} />
                </nav>

                <div className="flex flex-col items-center gap-6 mt-8">
                    {/* Botón Dark/Light */}
                    <button
                        onClick={toggleTheme}
                        className="
                        w-14 h-14
                        rounded-full
                        border border-gray-200 dark:border-white/10
                        flex items-center justify-center
                        hover:bg-gray-100 dark:hover:bg-white/5
                        text-gray-800 dark:text-white
                        transition-all duration-300
                        "
                        aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
                    >
                        {theme === 'dark'
                            ? <MoonIcon className="w-6 h-6 transition-all duration-300" />
                            : <SunIcon className="w-6 h-6 text-amber-500 transition-all duration-300" />
                        }
                    </button>

                    {/* CTA */}
                    <button
                        className="
                        px-6 py-3
                        rounded-xl
                        text-lg
                        bg-blue-600
                        hover:bg-blue-500
                        text-white
                        transition
                        font-medium
                        "
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <a href="#contacto">Cuéntame tu idea</a>
                    </button>
                </div>
            </div>
        </>
    );
}