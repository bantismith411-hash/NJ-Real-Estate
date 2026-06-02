import { Particles } from './components/Particles';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { FeaturedProperties } from './components/sections/FeaturedProperties';
import { WhyChooseUs } from './components/sections/WhyChooseUs';
import { GlobalPresence } from './components/sections/GlobalPresence';
import { Contact } from './components/sections/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-bg-dark text-white selection:bg-gold-main selection:text-bg-dark">
      <Particles />
      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <FeaturedProperties />
        <GlobalPresence />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
