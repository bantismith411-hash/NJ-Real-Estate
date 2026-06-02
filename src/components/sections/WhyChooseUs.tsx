import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const stats = [
  { number: "15+", label: "Years of Excellence" },
  { number: "₹500Cr+", label: "Properties Sold" },
  { number: "120+", label: "Luxury Escapes" },
  { number: "3", label: "Countries Served" },
];

export function WhyChooseUs() {
  return (
    <section className="py-32 bg-bg-surface relative overflow-hidden border-y border-white/5">
      {/* Decorative Background Map / Grid concept */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(var(--color-gold-main) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-cinzel text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              A Legacy of <br/>
              <span className="text-gradient-gold">Opulence & Trust</span>
            </h2>
            <p className="font-poppins text-gray-400 mb-8 text-lg font-light leading-relaxed">
              At NJ Real Estate, we don't just sell properties; we curate generational wealth and unmatched lifestyles. From the glittering skyline of Dubai to the serene landscapes of Canada, and the bustling heart of India, our portfolio is as diverse as it is exclusive.
            </p>
            
            <div className="grid grid-cols-2 gap-x-8 gap-y-12 mt-12">
              {stats.map((stat, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -inset-4 bg-gold-main/5 blur-lg rounded-full" />
                  <h4 className="font-cinzel text-4xl font-bold text-white mb-2 relative">
                    {stat.number}
                  </h4>
                  <p className="font-montserrat text-sm text-gold-main uppercase tracking-widest font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-panel-gold p-10 relative"
          >
            <Quote className="w-12 h-12 text-gold-main/50 absolute top-8 left-8" />
            <div className="relative z-10 pl-8 pt-8">
              <p className="font-playfair text-xl lg:text-2xl text-gray-200 italic leading-relaxed mb-8">
                "NJ Real Estate transformed our vision of a dream home into reality. Their access to off-market Canadian properties and seamless international transaction process is second to none."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-gold" />
                <div>
                  <h5 className="font-cinzel font-bold text-white tracking-wider">MR. & MRS. SHARMA</h5>
                  <p className="font-montserrat text-xs text-gold-main tracking-widest uppercase">Investors, Toronto</p>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
