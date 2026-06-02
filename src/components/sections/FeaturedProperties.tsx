import { motion } from 'motion/react';

const properties = [
  {
    id: 1,
    title: "Burj Khalifa Views, Dubai",
    type: "6 BHK Penthouse",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "The Golden Estate, Delhi",
    type: "Luxury Farmhouse",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Toronto Waterfront, Canada",
    type: "4 BHK Ultra-modern Flat",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Marine Drive Residencia, Mumbai",
    type: "5 BHK Sea-facing",
    image: "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Palm Jumeirah Villa, Dubai",
    type: "Private Beachfront",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Vancouver Heights, Canada",
    type: "Luxury Landscape Estate",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
  }
];

export function FeaturedProperties() {
  return (
    <section id="properties" className="py-32 bg-bg-dark relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-cinzel text-3xl md:text-5xl font-bold text-white mb-4"
            >
              Exclusive <span className="text-gradient-gold">Portfolio</span>
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="h-[1px] w-24 bg-gold-main"
            ></motion.div>
          </div>
          
          <motion.a 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="#contact" 
            className="text-gold-main uppercase tracking-widest font-montserrat text-sm border-b border-transparent hover:border-gold-main pb-1 transition-all"
          >
            View All Properties
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {properties.map((prop, idx) => (
            <motion.div
              key={prop.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden h-[350px] mb-6 rounded-sm">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500 z-10" />
                <img 
                  src={prop.image} 
                  alt={prop.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-20">
                  <p className="font-montserrat text-gold-main uppercase tracking-widest text-xs font-semibold mb-2">
                    {prop.type}
                  </p>
                  <h3 className="font-cinzel text-xl font-bold text-white mb-1 group-hover:text-gold-light transition-colors">
                    {prop.title}
                  </h3>
                </div>
              </div>
              <div className="flex justify-end items-center px-2 mt-2">
                <span className="w-10 h-[1px] bg-gold-main group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
