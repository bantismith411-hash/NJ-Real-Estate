import { motion } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Properties', href: '#properties' },
    { name: 'Global', href: '#global' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-bg-dark/80 backdrop-blur-md border-white/5 py-4 shadow-lg' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex flex-col items-center group relative cursor-pointer">
          <div className="absolute -inset-4 bg-gold-main/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <img 
            src="/logo.png" 
            alt="NJ Real Estate" 
            className="h-10 md:h-12 w-auto object-contain relative z-10"
            onError={(e) => {
              // Fallback to text if image not found
              const target = e.target as HTMLElement;
              target.style.display = 'none';
              target.nextElementSibling!.classList.remove('hidden');
              target.nextElementSibling!.classList.add('flex');
            }}
          />
          <div className="hidden flex-col items-center relative z-10">
            <span className="font-cinzel text-2xl md:text-3xl font-bold tracking-widest text-white leading-none group-hover:text-gold-light transition-colors duration-500">
              NJ
            </span>
            <span className="font-montserrat text-[10px] md:text-xs tracking-[0.3em] text-gold-main uppercase font-medium mt-1">
              Real Estate
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm uppercase tracking-wider font-montserrat text-white/80 hover:text-gold-main transition-colors duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold-main transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            className="flex items-center gap-2 px-6 py-2 border border-gold-main text-gold-main hover:bg-gold-main hover:text-bg-dark transition-all duration-300 font-cinzel tracking-wider uppercase text-sm font-semibold rounded-sm"
          >
            <Phone className="w-4 h-4" />
            <span>Enquire</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-gold-main" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-bg-dark border-b border-white/10"
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-montserrat tracking-widest uppercase text-white hover:text-gold-main py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex justify-center items-center gap-2 px-6 py-3 bg-gold-main text-bg-dark font-cinzel font-semibold tracking-widest uppercase text-sm mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
