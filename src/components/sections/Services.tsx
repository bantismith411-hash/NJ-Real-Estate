import { motion } from 'motion/react';
import { Building2, Home, TreePine, Globe2, MapPin } from 'lucide-react';

const services = [
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Premium Flats",
    description: "Exclusive 2 BHK to 6 BHK ultra-luxury apartments with panoramic city views and world-class amenities.",
  },
  {
    icon: <Home className="w-8 h-8" />,
    title: "Luxury Farmhouses",
    description: "Opulent sprawling estates away from the city noise, featuring private pools and bespoke landscaping.",
  },
  {
    icon: <TreePine className="w-8 h-8" />,
    title: "Bespoke Landscaping",
    description: "Award-winning landscape architecture transforming outdoor spaces into serene personal retreats.",
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "Pan India Presence",
    description: "Curated premium properties across prime locations in all major Indian metropolitan cities.",
  },
  {
    icon: <Globe2 className="w-8 h-8" />,
    title: "International Reach",
    description: "Exclusive access to highly sought-after investment properties in Canada and Dubai (UAE).",
  }
];

export function Services() {
  return (
    <section id="services" className="py-32 relative bg-bg-surface z-10">
      {/* Decorative ambient lighting */}
      <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-gold-main/30 to-transparent" />
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-gold-main/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-cinzel text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Our <span className="text-gradient-gold">Services</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-[1px] w-24 bg-gold-main mx-auto mb-6"
          ></motion.div>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.3 }}
             className="font-poppins text-gray-400 max-w-2xl mx-auto"
          >
            Delivering unparalleled excellence in the luxury real estate sector, catering to the most discerning clientele globally.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-panel group relative p-8 hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold-main/0 to-gold-main/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full border border-gold-main/30 flex items-center justify-center text-gold-main mb-6 group-hover:bg-gold-main group-hover:text-bg-dark transition-colors duration-500">
                  {service.icon}
                </div>
                <h3 className="font-cinzel text-xl font-bold text-white mb-3 group-hover:text-gold-light transition-colors">
                  {service.title}
                </h3>
                <p className="font-poppins text-sm text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
              
              {/* Border shine effect on hover */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-main to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform -translate-x-full group-hover:translate-x-0" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
