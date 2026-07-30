import { Stats } from '@/components/Stats';
import { Benefits } from '../components/Benefits';
import CatFramework from "../components/CatFramework";
import { Features } from '../components/Features';
import Footer from '../components/Footer';
import { Hero } from '../components/Hero';
import Testimonials from '../components/Testimonials';
import AccredianEdge from '@/components/AccredianEdge';
import Clients from '@/components/Clients';
import HowItWorks from '@/components/HowItWorks';
import FAQ from '@/components/FAQ';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-hidden">
      <section id='hero' className="py-8 md:py-12">
        <Hero />
        <Stats />
      </section>
      <Clients />
      <AccredianEdge />
      <CatFramework />
      <HowItWorks />
      <FAQ />
      <Testimonials/>
      <Footer />
    </div>
  );
}
