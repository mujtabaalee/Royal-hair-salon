import React, { useState, useEffect } from 'react';
import { Menu, X, Scissors } from 'lucide-react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'Services', to: 'services' },
    { name: 'TikTok', to: 'tiktok' },
    { name: 'Location', to: 'location' },
    { name: 'Hours', to: 'hours' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-primary/90 backdrop-blur-md py-4 shadow-lg border-b border-white/10' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="hero" smooth={true} duration={500} className="flex items-center gap-2 cursor-pointer group">
          <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
            <Scissors size={20} className="text-primary" />
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-serif font-bold tracking-wider text-white">ROYAL</h1>
            <p className="text-[10px] tracking-[0.2em] text-accent font-sans mt-[-4px]">HAIR SALON</p>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-80}
              className="nav-link cursor-pointer font-sans text-sm font-medium tracking-wide"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://wa.me/923026657666"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold !py-2 !px-6 text-sm"
          >
            BOOK NOW
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white hover:text-accent transition-colors duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-primary/95 z-[60] flex flex-col items-center justify-center gap-8 transition-transform duration-500 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button
          className="absolute top-6 right-6 text-white hover:text-accent"
          onClick={() => setIsOpen(false)}
        >
          <X size={32} />
        </button>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.to}
            smooth={true}
            duration={500}
            offset={-80}
            onClick={() => setIsOpen(false)}
            className="text-2xl font-serif hover:text-accent transition-colors duration-300"
          >
            {link.name}
          </Link>
        ))}
        <a
          href="https://wa.me/923026657666"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold mt-4"
          onClick={() => setIsOpen(false)}
        >
          BOOK APPOINTMENT
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
