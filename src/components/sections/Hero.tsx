import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-bg-dark">
        <img 
          src="/hero-bg.png" 
          alt="Luxury Background" 
          className="w-full h-full object-cover opacity-40"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src = 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=80';
          }}
        />
      </div>
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/80 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-bg-dark via-transparent to-bg-dark z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center mt-20">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6 flex flex-col items-center"
        >
          <div className="w-[1px] h-24 bg-gradient-to-b from-transparent to-gold-main mb-8"></div>
          <span className="font-montserrat tracking-[0.4em] text-gold-main text-xs sm:text-sm uppercase font-medium">
            Welcome to Uncompromised Luxury
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-8 w-full flex flex-col items-center justify-center"
        >
          <img 
            src="/logo.png" 
            alt="NJ Real Estate" 
            className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] object-contain drop-shadow-2xl mb-4"
            onError={(e) => {
              const target = e.target as HTMLElement;
              target.style.display = 'none';
              target.nextElementSibling!.classList.remove('hidden');
            }}
          />
          <h1 className="hidden font-cinzel text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-none tracking-tight mb-4 drop-shadow-2xl">
            <span className="block">NJ REAL</span>
            <span className="block text-gradient-gold">ESTATE</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="font-playfair text-xl sm:text-2xl md:text-3xl text-gray-200 italic mb-12 max-w-3xl font-light drop-shadow-lg bg-bg-dark/30 backdrop-blur-sm px-6 py-2 rounded-full border border-white/5"
        >
          Building Dreams <span className="text-gold-main mx-2">&bull;</span> Creating Lifestyles
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <a
            href="#properties"
            className="group relative px-8 py-4 bg-transparent overflow-hidden border border-gold-main rounded-sm flex items-center justify-center gap-2"
          >
            <div className="absolute inset-0 w-0 bg-gold-main transition-all duration-[400ms] ease-out group-hover:w-full"></div>
            <span className="relative text-gold-main group-hover:text-bg-dark font-cinzel font-semibold tracking-widest uppercase text-sm transition-colors duration-300">
              Explore Portfolio
            </span>
            <ChevronRight className="relative w-4 h-4 text-gold-main group-hover:text-bg-dark transition-colors duration-300" />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="font-montserrat text-[10px] uppercase tracking-widest text-gray-500">Discover</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-gold-main to-transparent"
        />
      </motion.div>
    </section>
  );
}
