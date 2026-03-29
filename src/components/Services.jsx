import React from 'react';
import { Scissors, Zap, Wind, User, Droplets, Smile } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <Scissors className="text-accent" size={32} />,
    title: "Signature Haircuts",
    price: "From PKR 800",
    description: "Our master barbers will craft a look tailored to your face shape and personal style. Includes wash and style.",
    tags: ["Fade", "Classic", "Modern", "Taper"]
  },
  {
    icon: <User className="text-accent" size={32} />,
    title: "Beard Sculpture",
    price: "From PKR 400",
    description: "Meticulous beard trimming and shaping to define your jawline. Finished with premium beard oil.",
    tags: ["Lineup", "Grooming", "Fade"]
  },
  {
    icon: <Zap className="text-accent" size={32} />,
    title: "The Royal Treatment",
    price: "From PKR 2500",
    description: "The ultimate grooming package: Haircut, Beard Trim, Facial, and relaxing head massage.",
    tags: ["Premium", "Full", "VIP"]
  },
  {
    icon: <Droplets className="text-accent" size={32} />,
    title: "Facial & Spa",
    price: "From PKR 1000",
    description: "Deep cleansing facial treatments to rejuvenate your skin. Perfect for refreshing your look.",
    tags: ["Cleansing", "Steam", "Mask"]
  },
  {
    icon: <Wind className="text-accent" size={32} />,
    title: "Hair Coloring",
    price: "From PKR 1200",
    description: "Professional grey coverage or highlights using high-end, scalp-friendly dyes.",
    tags: ["Black", "Brown", "Highlights"]
  },
  {
    icon: <Smile className="text-accent" size={32} />,
    title: "Kids' Styling",
    price: "From PKR 500",
    description: "Patience and care for our youngest clients. We make the haircut experience fun and stress-free.",
    tags: ["Gentle", "Quick", "Fun"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="text-accent text-sm font-bold tracking-[0.3em] uppercase mb-4">Craftsmanship</h4>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Our Premium Services</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-white/60 max-w-2xl mx-auto font-sans">
            Every service at Royal Hair Salon is performed with precision and artistic flair. We use only the finest products to ensure your hair and skin receive the best treatment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card flex flex-col items-start text-left group"
            >
              <div className="mb-6 p-4 bg-primary rounded-lg border border-white/5 transition-transform duration-500 group-hover:rotate-6 group-hover:border-accent group-hover:bg-accent/5">
                {service.icon}
              </div>
              <div className="flex justify-between items-center w-full mb-2">
                <h3 className="text-xl font-bold text-white font-serif">{service.title}</h3>
                <span className="text-accent font-sans font-bold text-sm tracking-tighter">{service.price}</span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed mb-6 font-sans">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {service.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-primary/50 text-[10px] text-white/40 border border-white/5 uppercase tracking-widest font-sans">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-white/40 text-sm italic mb-8">
            * All prices are starting estimates and may vary based on hair length and complexity.
          </p>
          <a 
            href="https://wa.me/923026657666?text=Interested in your services!"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            CUSTOM REQUEST
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
