import { motion } from 'motion/react';
import { Send } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-bg-dark relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-cinzel text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Request a <span className="text-gradient-gold">Private Viewing</span>
          </motion.h2>
          <div className="h-[1px] w-24 bg-gold-main mx-auto mb-6"></div>
          <p className="font-poppins text-gray-400 max-w-2xl mx-auto">
            Contact our dedicated luxury wealth advisors to discuss your real estate portfolio requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-panel p-8 md:p-12"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-montserrat text-xs uppercase tracking-widest text-gray-400 mb-2">First Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-3 text-white focus:outline-none focus:border-gold-main transition-colors" />
                </div>
                <div>
                  <label className="block font-montserrat text-xs uppercase tracking-widest text-gray-400 mb-2">Last Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-3 text-white focus:outline-none focus:border-gold-main transition-colors" />
                </div>
              </div>
              
              <div>
                <label className="block font-montserrat text-xs uppercase tracking-widest text-gray-400 mb-2">Email Address</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-3 text-white focus:outline-none focus:border-gold-main transition-colors" />
              </div>
              
              <div>
                <label className="block font-montserrat text-xs uppercase tracking-widest text-gray-400 mb-2">Interest</label>
                <select className="w-full bg-[#161616] border border-white/10 rounded-none px-4 py-3 text-white focus:outline-none focus:border-gold-main transition-colors select-none appearance-none cursor-pointer">
                  <option>Luxury Flat (India)</option>
                  <option>Farmhouse</option>
                  <option>Dubai Property</option>
                  <option>Canada Property</option>
                  <option>Landscaping Services</option>
                </select>
              </div>

              <div className="pt-4">
                <button type="submit" className="group relative w-full px-8 py-4 bg-gold-main text-bg-dark font-cinzel font-bold tracking-widest uppercase text-sm hover:bg-gold-light transition-colors flex justify-center items-center gap-3">
                  <span>Submit Inquiry</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col h-full"
          >
            <div className="flex-1 bg-white/5 border border-white/10 relative min-h-[300px]">
               {/* Map Placeholder */}
               <div className="absolute inset-0 flex items-center justify-center grayscale opacity-50 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=New+Delhi,India&zoom=10&size=600x400&maptype=roadmap&style=feature:all|element:labels.text.fill|color:0x8a8a8a&style=feature:all|element:labels.text.stroke|visibility:on|color:0x000000|lightness:16&style=feature:all|element:labels.icon|visibility:off&style=feature:administrative|element:geometry.fill|color:0x000000|lightness:20&style=feature:administrative|element:geometry.stroke|color:0x000000|lightness:17|weight:1.2&style=feature:landscape|element:geometry|color:0x000000|lightness:20&style=feature:poi|element:geometry|color:0x000000|lightness:21&style=feature:road.highway|element:geometry.fill|color:0x000000|lightness:17&style=feature:road.highway|element:geometry.stroke|color:0x000000|lightness:29|weight:0.2&style=feature:road.arterial|element:geometry|color:0x000000|lightness:18&style=feature:road.local|element:geometry|color:0x000000|lightness:16&style=feature:transit|element:geometry|color:0x000000|lightness:19&style=feature:water|element:geometry|color:0x000000|lightness:17&style=feature:water|element:labels.text.stroke|lightness:100')] bg-cover bg-center">
                  <span className="font-cinzel text-xl text-white tracking-widest gold-glow-strong bg-bg-dark/80 px-4 py-2">GLOBAL HQ</span>
               </div>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-8 text-sm font-poppins">
              <div>
                <h6 className="text-gold-main font-cinzel font-bold tracking-widest uppercase mb-2">Corporate Office</h6>
                <p className="text-gray-400">100 Luxury Avenue, Suite 400<br/>New Delhi, India 110001</p>
              </div>
              <div>
                <h6 className="text-gold-main font-cinzel font-bold tracking-widest uppercase mb-2">Direct Line</h6>
                <p className="text-gray-400">+91 98765 43210<br/>info@njrealestate.com</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
