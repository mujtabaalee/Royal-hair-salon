import React from 'react';
import { Scissors, Instagram, Facebook, Twitter, MessageCircle } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-primary pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <Scissors size={20} className="text-primary" />
              </div>
              <h1 className="text-2xl font-serif font-bold tracking-wider text-white uppercase">Royal Salon</h1>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-8 font-sans">
              Royal Hair Salon is Gujrat's premier destination for men's grooming. We combine traditional barbering techniques with modern style to help you look and feel your absolute best.
            </p>
            <div className="flex gap-4">
              <a href="https://www.tiktok.com/@royalhairsalon6" target="_blank" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-accent hover:text-accent transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-accent hover:text-accent transition-all duration-300">
                <Facebook size={18} />
              </a>
              <a href="https://wa.me/923026657666" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-accent hover:text-accent transition-all duration-300">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          <div>
             <h4 className="text-white font-serif font-bold text-lg mb-8">Quick Links</h4>
             <ul className="space-y-4">
                {['Home', 'Services', 'TikTok', 'Location', 'Hours'].map(item => (
                  <li key={item}>
                    <Link to={item.toLowerCase()} smooth={true} duration={500} className="text-white/40 hover:text-accent text-sm transition-colors cursor-pointer font-sans">
                      {item}
                    </Link>
                  </li>
                ))}
             </ul>
          </div>

          <div>
            <h4 className="text-white font-serif font-bold text-lg mb-8">Service Areas</h4>
            <ul className="space-y-4">
              {['Signature Haircuts', 'Beard Sculpting', 'Facial Grooming', 'Hair Coloring', 'Royal Ritual'].map(item => (
                <li key={item} className="text-white/40 text-sm font-sans hover:text-white transition-colors cursor-default">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
             <h4 className="text-white font-serif font-bold text-lg mb-8">Newsletter</h4>
             <p className="text-white/40 text-sm mb-6 font-sans">Subscribe to get tips on grooming and exclusive offers.</p>
             <form className="relative flex">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full bg-secondary border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors" 
                />
                <button 
                  type="submit" 
                  className="absolute right-2 top-2 bottom-2 bg-accent text-primary px-4 rounded-md text-xs font-bold hover:bg-gold-light transition-colors"
                >
                  JOIN
                </button>
             </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-[10px] items-center gap-2 flex font-sans leading-none uppercase tracking-[0.2em]">
            &copy; 2024 Royal Hair Salon GTS Rd Gujrat. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-white/20 text-[10px] uppercase tracking-widest hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/20 text-[10px] uppercase tracking-widest hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
