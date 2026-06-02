import { motion } from 'motion/react';
import { Globe2 } from 'lucide-react';

export function GlobalPresence() {
  const regions = [
    { name: "Pan India", desc: "Premium developments across major metropolitans." },
    { name: "Canada", desc: "Exclusive access to North American luxury markets." },
    { name: "UAE (Dubai)", desc: "Investment opportunities in ultra-luxury high-rises." },
  ];

  return (
    <section id="global" className="py-24 bg-bg-dark relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-12 justify-center">
          <Globe2 className="w-8 h-8 text-gold-main" />
          <h2 className="font-cinzel text-2xl md:text-4xl font-bold text-white uppercase tracking-wider text-center">
            Global <span className="text-gradient-gold">Footprint</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {regions.map((region, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              className="px-6 border-l border-gold-main/30"
            >
              <h4 className="font-cinzel text-xl font-bold text-white mb-2">{region.name}</h4>
              <p className="font-poppins text-sm text-gray-400">{region.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
