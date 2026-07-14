import Hero from '@/components/Hero';
import TechnicallSkills from '@/components/TechnicallSkills';
import ValueBenefits from '@/components/ValueBenefits';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main>
      <div id="inicio"><Hero /></div>
      <div id="tech-caps"><TechnicallSkills /></div>
      <ValueBenefits />
      <div id="proyectos"><Projects /></div>
      <div id="contact"><Contact /></div>
    </main>
  );
}
