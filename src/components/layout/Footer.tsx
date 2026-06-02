import { motion } from 'motion/react';
import { Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-bg-dark pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
             <a href="#" className="flex flex-col items-start group relative cursor-pointer mb-6">
                <img 
                  src="/logo.png" 
                  alt="NJ Real Estate" 
                  className="h-10 md:h-12 w-auto object-contain relative z-10"
                  onError={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.display = 'none';
                    target.nextElementSibling!.classList.remove('hidden');
                    target.nextElementSibling!.classList.add('flex');
                  }}
                />
                <div className="hidden flex-col items-start relative z-10">
                  <span className="font-cinzel text-3xl font-bold tracking-widest text-white leading-none">
                    NJ
                  </span>
                  <span className="font-montserrat text-xs tracking-[0.3em] text-gold-main uppercase font-medium mt-1">
                    Real Estate
                  </span>
                </div>
            </a>
            <p className="font-poppins text-sm text-gray-400 mb-6 leading-relaxed">
              Curators of fine living. Building dreams and creating exclusive lifestyles across borders.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-gold-main hover:border-gold-main transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-cinzel font-semibold text-white tracking-widest uppercase mb-6">Portfolio</h4>
            <ul className="space-y-3 font-poppins text-sm text-gray-400">
              <li><a href="#" className="hover:text-gold-main transition-colors">Luxury Premium Flats</a></li>
              <li><a href="#" className="hover:text-gold-main transition-colors">Bespoke Farmhouses</a></li>
              <li><a href="#" className="hover:text-gold-main transition-colors">Landscape Architecture</a></li>
              <li><a href="#" className="hover:text-gold-main transition-colors">Commercial Towers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-cinzel font-semibold text-white tracking-widest uppercase mb-6">Global Reach</h4>
            <ul className="space-y-3 font-poppins text-sm text-gray-400">
              <li><a href="#" className="hover:text-gold-main transition-colors">Pan India</a></li>
              <li><a href="#" className="hover:text-gold-main transition-colors">Dubai, UAE</a></li>
              <li><a href="#" className="hover:text-gold-main transition-colors">Toronto, Canada</a></li>
              <li><a href="#" className="hover:text-gold-main transition-colors">London, UK</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-cinzel font-semibold text-white tracking-widest uppercase mb-6">Stay Exclusive</h4>
            <p className="font-poppins text-sm text-gray-400 mb-4">Subscribe to our private newsletter for off-market listings.</p>
            <form className="flex border border-white/20 p-1">
              <input type="email" placeholder="Email Address" className="w-full bg-transparent px-3 text-sm text-white focus:outline-none" />
              <button className="bg-gold-main text-bg-dark px-4 py-2 text-xs font-bold font-montserrat uppercase tracking-wider hover:bg-gold-light transition-colors">
                Join
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-poppins text-xs text-gray-500">
            &copy; {new Date().getFullYear()} NJ Real Estate. All rights reserved.
          </p>
          <div className="flex gap-6 font-poppins text-xs text-gray-500">
            <a href="#" className="hover:text-gold-main transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold-main transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
