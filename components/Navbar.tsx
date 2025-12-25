
import React, { useState, useEffect } from 'react';
import { WHATSAPP_LINK } from '../constants';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const scrollToSection = (id: string) => {
    closeMenu();
    const element = document.getElementById(id);
    if (element) {
      const offset = 70;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled || isMenuOpen ? 'glass shadow-sm py-2.5 md:py-3' : 'bg-transparent py-5 md:py-6'}`}>
      <div className="max-w-7xl mx-auto px-5 flex justify-between items-center">
        <div 
          className="flex items-center space-x-3 group cursor-pointer" 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        >
          {/* Logo Branding */}
          <div className="transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
            <Logo className="w-10 h-10 md:w-12 md:h-12" />
          </div>
          <span className="text-xl md:text-2xl font-extrabold tracking-tighter text-slate-900">
            JAbd<span className="text-blue-600">Tech</span>
          </span>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {['layanan', 'harga', 'kontak'].map((item) => (
            <button 
              key={item}
              onClick={() => scrollToSection(item)} 
              className="text-slate-600 hover:text-blue-600 font-bold capitalize transition-all relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </button>
          ))}
          <a 
            href={WHATSAPP_LINK} 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-900 text-white px-7 py-3 rounded-full font-bold hover:bg-blue-600 transition-all shadow-md active:scale-95"
          >
            Konsultasi
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={toggleMenu}
          className="md:hidden p-2 text-slate-900"
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-4 relative flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 glass border-t border-slate-100 overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-[350px] opacity-100 shadow-xl' : 'max-h-0 opacity-0'}`}>
        <div className="p-6 flex flex-col space-y-5">
          {['layanan', 'harga', 'kontak'].map((item) => (
            <button 
              key={item}
              onClick={() => scrollToSection(item)} 
              className="text-left text-slate-900 text-lg font-bold border-b border-slate-50 pb-2 active:text-blue-600"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
          <a 
            href={WHATSAPP_LINK} 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white w-full text-center py-4 rounded-xl font-black text-lg shadow-lg active:scale-95"
          >
            Konsultasi Sekarang
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
