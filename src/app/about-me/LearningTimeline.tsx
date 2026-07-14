
import { useState } from 'react';

// Definición de la interfaz para el tipado de los hitos de aprendizaje
export interface TimelineItem {
    id: string;
    platform: 'UDEMY' | 'YOUTUBE' | 'COURSERA' | string;
    title: string;
    description: string;
    isCurrent?: boolean;
}

// Data centralizada y fuertemente tipada
export const defaultLearningPathData: TimelineItem[] = [
    {
        id: 'path-0',
        platform: 'YOUTUBE',
        title: 'Programación en C++ || Programación ATS',
        description: `Por recomendación me decidí a aprender C++ para contruir las bases de 
        la programación y la lógica. Me instruí con los tipos de variables, condicionales, bucles, algoritmos de ordenamiento y búsqueda,
        funciones, punteros, pilas y colas, listas, árboles, programación orientada a objetos (POO), etc.`,
    },
    {
        id: 'path-1',
        platform: 'UDEMY',
        title: 'Aprende a crear páginas web con HTML y CSS',
        description: `Me vi interesado por el mundo de las páginas web, me adentré en HTML y CSS para aprender la estructura y el estilo 
        de las páginas. Con este curso contruí las bases de la maquetación y el diseño web.`,
    },
    {
        id: 'path-2',
        platform: 'UDEMY',
        title: 'CSS La Guía Completa - Flexbox, CSS Grid, SASS +20 proyectos',
        description: `Profundicé en HTML y CSS para aprender diferentes formas de maquetar páginas web.
        Este curso me dio las herramientas para crear layouts modernos, arquitectura de estilos escalable enfocados para sitios web
        de un E-commerce, cafeterías, aplicativos AirBnb, etc. Terminé el curso con un dominio nivel medio-alto en maquetación de HTML,
        responsividad, FlexBox, CSS Grid y TailwindCSS.`
    },
    {
        id: 'path-3',
        platform: 'UDEMY',
        title: 'React y TypeScript - La Guía Completa Creando +10 Proyectos',
        description: `Desde este curso comencé aprendiendo los fundamentos de React(hooks, TypeScript y la 
        gestión de estado con Zustand) hasta crear aplicaciones Full-Stack robustas con los stacks MERN y PERN. Además de 
        implementar bases de datos, seguridad y autenticación con Express, di el salto definitivo hacia la arquitectura moderna 
        con Next.js 14 y Server Actions para crear proyectos de alto rendimiento listos ya para producción.`,
    },
    {
        id: 'path-4',
        platform: 'YOUTUBE',
        title: 'Git: Control de Versiones y Trabajo en equipo colaborativo',
        description: `Me instruí en Git y todas las herramientas que abarca este las cuales fueron de mucha utilidad para el desarrollo 
        y control de versiones de mis proyectos. Desde aquí comencé a aumentar profesionalidad en mis proyectos.`,
    },
];

export const LearningTimeline = ({ items = defaultLearningPathData }: { items?: TimelineItem[] }) => {
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const handleToggle = (id: string) => {
        setExpandedId(prev => prev === id ? null : id);
    };

    return (
        <div className="max-w-7xl w-full mx-auto px-6 py-12">
            {/* Estilos locales inyectados para animaciones a medida y manejo de scrollbars */}
            <style dangerouslySetInnerHTML={{
                __html: `
                .hide-scrollbar::-webkit-scrollbar { display: none; }
                .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                @keyframes bounceHorizontal {
                0%, 100% { transform: translateX(0); }
                50% { transform: translateX(4px); }
                }
                .animate-bounce-horizontal { animation: bounceHorizontal 1s infinite; }
            `}}
            />

            {/* Encabezado de la Sección */}
            <div className="mb-16">
                <span className="text-xs uppercase tracking-widest bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 text-slate-600 dark:text-slate-400 px-3 py-1 rounded-full font-medium">
                    Mi Progreso
                </span>
                <h2 className="text-3xl font-bold mt-3 text-gray-900 dark:text-white font-syne">Ruta de Aprendizaje</h2>
                <p className="text-slate-650 dark:text-slate-400 mt-2 text-base max-w-xl">
                    Un recorrido cronológico por los cursos y fundamentos clave que han estructurado mi perfil profesional como Ingeniero de Sistemas.
                </p>
            </div>

            {/* Contenedor Principal (Full-Width Breakout) */}
            <div className="relative w-screen left-1/2 -translate-x-1/2">
                {/* Contenedor con Scroll Horizontal */}
                <div className="overflow-x-auto hide-scrollbar relative pb-12 pt-6 px-8 md:px-14 lg:px-20 xl:px-25">

                    {/* Mapeo dinámico de los bloques (Flex alternado) */}
                    <div 
                        className="grid grid-flow-col auto-cols-[320px] gap-x-12 relative z-10 min-w-max items-center"
                        style={{ gridTemplateRows: 'auto auto auto' }}
                    >
                        {/* Línea Central Conectora (Empieza en primer nodo y termina en el último) */}
                        <div 
                            className="row-start-2 h-[2px] bg-linear-to-r from-blue-600/20 via-blue-600 to-blue-600/20 z-0 mx-[160px]"
                            style={{ gridColumn: `1 / span ${items.length}` }}
                        />

                        {items.map((item, index) => {
                            const isEven = index % 2 === 0;
                            const isExpanded = expandedId === item.id;
                            const colStyle = { gridColumnStart: index + 1 };

                            return (
                                <div key={item.id} className="contents">

                                    {/* --- POSICIÓN SUPERIOR (Índices Pares: 0, 2, 4...) --- */}
                                    {isEven ? (
                                        <div
                                            onClick={() => handleToggle(item.id)}
                                            style={colStyle}
                                            className={`bg-white dark:bg-[#0b1324] border border-slate-250 dark:border-slate-800/80 rounded-xl p-5 shadow-md dark:shadow-xl transition-all duration-300 hover:border-blue-600/40 mb-10 flex flex-col justify-between cursor-pointer select-none w-full row-start-1 ${isExpanded ? 'h-auto min-h-48 pb-6' : 'h-48'}`}
                                        >
                                            <div>
                                                <div className="flex justify-between items-start mb-2">
                                                    <span className="text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded font-mono tracking-wider">
                                                        {item.platform}
                                                    </span>
                                                </div>
                                                <h3 className="text-base font-semibold text-gray-900 dark:text-white line-clamp-2 leading-snug">
                                                    {item.title}
                                                </h3>
                                            </div>
                                            <p className={`text-sm text-slate-650 dark:text-slate-400 mt-2 ${isExpanded ? '' : 'line-clamp-3'}`}>
                                                {item.description}
                                            </p>
                                        </div>
                                    ) : null}

                                    {/* --- NODO CENTRAL --- */}
                                    <div 
                                        style={colStyle} 
                                        className="row-start-2 justify-self-center z-10 py-4"
                                    >
                                        {item.isCurrent ? (
                                            /* Nodo Activo con Glow Animado y Check Icon */
                                            <div
                                                onClick={() => handleToggle(item.id)}
                                                className="w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.8)] border-2 border-slate-50 dark:border-complementary-950 animate-pulse cursor-pointer transition-transform hover:scale-110 active:scale-95"
                                            >
                                                <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                </svg>
                                            </div>
                                        ) : (
                                            /* Nodo Completado con Check Icon */
                                            <div
                                                onClick={() => handleToggle(item.id)}
                                                className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.5)] border-2 border-slate-50 dark:border-complementary-950 cursor-pointer transition-transform hover:scale-110 active:scale-95"
                                            >
                                                <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                </svg>
                                            </div>
                                        )}
                                    </div>

                                    {/* --- POSICIÓN INFERIOR (Índices Impares: 1, 3, 5...) --- */}
                                    {!isEven ? (
                                        <div
                                            onClick={() => handleToggle(item.id)}
                                            style={colStyle}
                                            className={`bg-white dark:bg-[#0b1324] border rounded-xl p-5 shadow-md dark:shadow-xl transition-all duration-300 mt-10 flex flex-col justify-between relative overflow-hidden cursor-pointer select-none w-full row-start-3 ${isExpanded ? 'h-auto min-h-48 pb-6' : 'h-48'} ${item.isCurrent ? 'border-blue-600/40 shadow-2xl' : 'border-slate-250 dark:border-slate-800/80 hover:border-blue-600/40'}`}
                                        >
                                            {item.isCurrent && (
                                                <div className="absolute top-0 right-0 bg-blue-600 text-[9px] font-bold px-2 py-0.5 rounded-bl text-white">
                                                    ACTUAL
                                                </div>
                                            )}
                                            <div>
                                                <div className="flex justify-between items-start mb-2">
                                                    <span className="text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded font-mono tracking-wider">
                                                        {item.platform}
                                                    </span>
                                                </div>
                                                <h3 className="text-base font-semibold text-gray-900 dark:text-white line-clamp-2 leading-snug">
                                                    {item.title}
                                                </h3>
                                            </div>
                                            <p className={`text-sm text-slate-650 dark:text-slate-400 mt-2 ${isExpanded ? '' : 'line-clamp-3'}`}>
                                                {item.description}
                                            </p>
                                        </div>
                                    ) : null}

                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};