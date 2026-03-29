import React from 'react';
import { Star, Scissors } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background with Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-[-2]"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")' }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary z-[-1]"></div>

      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-8 backdrop-blur-sm">
            <div className="flex text-accent">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill={i < 5 ? "#D4AF37" : "none"} />
              ))}
            </div>
            <span className="text-accent text-xs font-bold tracking-widest uppercase">4.9 STAR RATED EXPERIENCE</span>
          </div>

          <h2 className="text-5xl md:text-8xl font-serif font-bold text-white mb-6 leading-tight">
            Elevate Your <span className="text-gradient-gold italic">Style</span> <br className="hidden md:block" /> with Royalty
          </h2>
          
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 font-sans leading-relaxed">
            Experience the finest men's grooming in Gujrat. At Royal Hair Salon, we blend classic craftsmanship with modern techniques to give you a look that commands respect.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://wa.me/923026657666?text=Hi! I'd like to book an appointment at Royal Hair Salon."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold min-w-[220px]"
            >
              BOOK APPOINTMENT
            </a>
            <a 
              href="#services" 
              className="btn-outline min-w-[220px]"
            >
              OUR SERVICES
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto border-t border-white/10 pt-10">
            <div>
              <p className="text-accent text-2xl font-serif font-bold">15+</p>
              <p className="text-white/50 text-[11px] uppercase tracking-wider font-sans">Years Experience</p>
            </div>
            <div>
              <p className="text-accent text-2xl font-serif font-bold">10k+</p>
              <p className="text-white/50 text-[11px] uppercase tracking-wider font-sans">Happy Clients</p>
            </div>
            <div>
              <p className="text-accent text-2xl font-serif font-bold">50700</p>
              <p className="text-white/50 text-[11px] uppercase tracking-wider font-sans">GTS Rd Location</p>
            </div>
            <div>
              <p className="text-accent text-2xl font-serif font-bold">8AM-Midnight</p>
              <p className="text-white/50 text-[11px] uppercase tracking-wider font-sans">Open Daily</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 hidden md:block"
      >
        <div className="w-[1px] h-12 bg-white/20 mx-auto mb-2"></div>
        <p className="text-[10px] uppercase tracking-widest rotate-90 origin-left mt-8">SCROLL</p>
      </motion.div>
    </section>
  );
};

export default Hero;
