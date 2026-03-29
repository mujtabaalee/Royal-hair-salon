import React from 'react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { motion } from 'framer-motion';

const LocationHours = () => {
  const hours = [
    { day: 'Monday', time: '8:00 AM - 11:45 PM' },
    { day: 'Tuesday', time: '8:00 AM - 11:45 PM' },
    { day: 'Wednesday', time: '8:00 AM - 11:45 PM' },
    { day: 'Thursday', time: '8:00 AM - 1:00 AM', special: true },
    { day: 'Friday', time: '8:00 AM - 11:30 PM' },
    { day: 'Saturday', time: '8:00 AM - 11:45 PM' },
    { day: 'Sunday', time: '8:00 AM - 11:45 PM' },
  ];

  return (
    <section id="location" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Column: Hours & Info */}
          <div className="lg:w-1/2">
            <h4 className="text-accent text-sm font-bold tracking-[0.3em] uppercase mb-4">Visit Us</h4>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-10">Where Royalty Meets Style</h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-accent" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 font-serif">Our Location</h4>
                  <p className="text-white/50 text-sm font-sans">GTS Rd, Shah Hussain, Gujrat, 50700, Pakistan</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-accent" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 font-serif">Contact Us</h4>
                  <p className="text-white/50 text-sm font-sans">+92 302 6657666</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="text-accent" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 font-serif">Current Status</h4>
                  <p className="text-green-500 text-sm font-sans flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    Open and taking appointments
                  </p>
                </div>
              </div>
            </div>

            <div id="hours" className="bg-primary/40 rounded-2xl p-8 border border-white/5">
              <h3 className="text-2xl font-serif font-bold text-white mb-6 underline decoration-accent/30 underline-offset-8 decoration-2">Weekly Schedule</h3>
              <div className="space-y-4">
                {hours.map((item, index) => (
                  <div key={index} className={`flex justify-between items-center pb-3 border-b border-white/5 last:border-0 ${item.day === 'Monday' ? 'text-accent' : ''}`}>
                    <span className="font-sans font-medium">{item.day}</span>
                    <span className={`font-sans ${item.special ? 'text-accent font-bold italic' : 'text-white/60'}`}>{item.time}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-white/40 text-xs text-center font-sans tracking-wide">
                  * Note: We recommend booking in advance for weekend afternoon slots.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Map Embed */}
          <div className="lg:w-1/2 flex flex-col">
            <div className="flex-grow w-full h-[400px] lg:h-full min-h-[500px] rounded-2xl overflow-hidden grayscale contrast-125 border border-white/10 shadow-2xl relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6724.785368305096!2d74.0733154!3d32.5690796!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f1bc97c1c18d3:0x6c4959e097aa9d3f!2sRoyal%20Hair%20Salon!5e0!3m2!1sen!2s!4v1743231317521!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="group-hover:grayscale-0 transition-all duration-1000"
              ></iframe>
              <div className="absolute top-6 right-6">
                <a 
                  href="https://maps.app.goo.gl/dvkDU9Vr1qERUmGx7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-primary p-3 rounded-full flex items-center gap-2 font-bold shadow-lg hover:bg-accent hover:text-white transition-all transform hover:-translate-y-1"
                >
                  <Navigation size={18} />
                  <span className="text-sm font-sans">Get Directions</span>
                </a>
              </div>
            </div>
            
            <div className="mt-8 flex items-center justify-between p-6 bg-accent rounded-xl">
               <div className="text-primary">
                 <h4 className="font-bold font-serif leading-none mb-1">Still haven't booked?</h4>
                 <p className="text-primary/70 text-sm">Send us a message on WhatsApp now!</p>
               </div>
               <a 
                  href="https://wa.me/923026657666" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-primary text-white px-6 py-2 rounded-lg font-bold hover:bg-secondary transition-colors shadow-lg"
               >
                 BOOK NOW
               </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationHours;
