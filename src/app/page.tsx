import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import ValueBenefits from '@/components/ValueBenefits';
import Process from '@/components/Process';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main>
      <div id="inicio"><Hero /></div>
      <div id="beneficios"><Benefits /></div>
      <ValueBenefits />
      <Process />
      <div id="proyectos"><Projects /></div>
      <div id="contacto"><Contact /></div>
    </main>
  );
}
