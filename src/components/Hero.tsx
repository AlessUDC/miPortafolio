import Link from "next/link";

export default function Hero() {
  return (
    <header className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden p-10 md:px-14 lg:px-20 xl:px-25 text-center">


      <div className="z-10 flex flex-col min-[410px]:gap-3 lg:gap-8 xl:gap-4 items-start max-w-4xl xl:max-w-full 2xl:max-w-[90%] animate-fade-in-up">
        {/* Bio Introduction */}
        <div className="inline-block px-4 py-1.5 md:px-6 md:py-3 lg:px-8 lg:py-5 xl:px-6 xl:py-3 mb-6 text-sm md:text-lg lg:text-2xl xl:text-lg font-semibold tracking-wider text-primary-600 dark:text-primary-400 uppercase bg-primary-50 dark:bg-primary-500/10 border border-primary-100 dark:border-primary-500/20 rounded-full backdrop-blur-sm">
          Ingeniero de Sistemas
        </div>

        <h1 className="font-syne text-[44px] min-[410px]:text-5xl md:text-7xl lg:text-8xl xl:text-7xl font-extrabold mb-6 leading-tight tracking-tight text-left text-transparent bg-clip-text bg-linear-to-r from-primary-600 via-primary-500 to-purple-600 dark:from-primary-400 dark:via-primary-300 dark:to-purple-400 animate-gradient-x">
          Creo tu plataforma para convertir tus visitas en clientes
        </h1>

        <p className="text-base min-[410px]:text-lg md:text-2xl lg:text-4xl xl:text-2xl font-light text-gray-600 dark:text-gray-400 text-left mb-8 max-w-2xl lg:max-w-3xl leading-relaxed">
          Soluciones tecnológicas a medida diseñadas para acelerar las ventas, optimizar la experiencia de tus usuarios y escalar tu negocio digital.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 min-[410px]:gap-6 w-full sm:w-auto">
          <a
            href="#projects"
            className="group relative px-6 py-3 min-[410px]:px-8 min-[410px]:py-4 md:px-10 md:py-5 lg:px-12 lg:py-6 xl:px-10 xl:py-4 xl:flex xl:items-center bg-primary-500 hover:bg-primary-600 text-white font-bold rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40"
          >
            <div className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
            <span className="relative flex items-center justify-center md:text-xl lg:text-2xl xl:text-lg gap-2">
              <i className="fa-solid fa-code"></i> Ver Proyectos
            </span>
          </a>
          <Link
            href="#contacto"
            className="px-6 py-3 min-[410px]:px-8 min-[410px]:py-4 md:px-10 md:py-5 lg:px-12 lg:py-6 xl:px-10 xl:py-4 xl:flex xl:items-center bg-gray-100 hover:bg-gray-200 text-gray-900 border-gray-200 dark:bg-complementary-800/80 dark:hover:bg-complementary-900 md:text-xl lg:text-2xl xl:text-lg dark:text-white font-bold rounded-xl border dark:border-gray-800 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 backdrop-blur-md"
          >
            <i className="fa-regular fa-envelope"></i> Contáctame
          </Link>
        </div>
      </div>
    </header>
  );
}
