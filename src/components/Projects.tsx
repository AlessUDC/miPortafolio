"use client"

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projectsData } from '@/data/index';

export default function Projects() {
  const [filter, setFilter] = useState<string>('all');
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const filteredProjects = projectsData.filter(
    (project) =>
      filter === 'all' ||
      (Array.isArray(project.category)
        ? project.category.includes(filter as any)
        : project.category === filter)
  );

  const checkScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
    }
  };

  useEffect(() => {
    const el = carouselRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll);
      checkScroll();
      window.addEventListener('resize', checkScroll);
    }
    return () => {
      if (el) {
        el.removeEventListener('scroll', checkScroll);
      }
      window.removeEventListener('resize', checkScroll);
    };
  }, [filteredProjects]);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [filter]);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const { clientWidth } = carouselRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth * 0.75 : clientWidth * 0.75;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <main className="py-24 px-8 lg:px-20 relative z-10 bg-slate-50 dark:bg-complementary-950" id="projects">
      {/* Background decoration */}
      <div className="absolute top-1/3 left-10 w-[50%] h-[40%] rounded-full bg-primary-500/5 blur-[130px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-syne text-2xl md:text-4xl font-bold mb-4 md:mb-6 lg:mb-8 text-gray-900 dark:text-white">
            Retos técnicos recientes
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg lg:text-xl max-w-2xl mx-auto font-light">
            Desde proyectos más versátiles hasta proyectos de complejidad media donde destaco mis habilidades en el desarrollo web.
          </p>
        </motion.div>

        {/* Filter and Navigation Row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-12">
          {/* Filter Controls */}
          <div className="flex flex-wrap justify-center sm:justify-start gap-3">
            {['all', 'frontend', 'backend', 'fullstack'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2.5 rounded-full text-sm lg:text-base font-medium transition-all duration-300 cursor-pointer ${filter === f
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-900 dark:bg-complementary-800 dark:text-gray-400 dark:hover:bg-complementary-700 dark:hover:text-white'
                  }`}
              >
                {f === 'all' ? 'Todos' : f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`p-3 rounded-full border transition-all duration-300 cursor-pointer ${canScrollLeft
                ? 'border-gray-300 dark:border-complementary-700 text-gray-700 dark:text-gray-300 hover:bg-primary-500 hover:text-white hover:border-primary-500'
                : 'border-gray-200 dark:border-complementary-850 text-gray-400 dark:text-gray-600 cursor-not-allowed opacity-40'
                }`}
              aria-label="Anterior"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`p-3 rounded-full border transition-all duration-300 cursor-pointer ${canScrollRight
                ? 'border-gray-300 dark:border-complementary-700 text-gray-700 dark:text-gray-300 hover:bg-primary-500 hover:text-white hover:border-primary-500'
                : 'border-gray-200 dark:border-complementary-850 text-gray-400 dark:text-gray-600 cursor-not-allowed opacity-40'
                }`}
              aria-label="Siguiente"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Project Cards Carousel Container */}
        <div
          ref={carouselRef}
          className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-6 pb-6 scrollbar-none [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                key={project.id}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(33%-18px)] shrink-0 snap-start"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
