import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#121212]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center">
              <span className="text-white font-bold text-xl">RF</span>
            </div>
            <div>
              <h1 className="text-white font-bold text-lg tracking-tight">Richmond Financial</h1>
              <p className="text-emerald-400 text-xs">Expert Advice</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-300 hover:text-emerald-400 transition-colors text-sm font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('why-us')}
              className="text-gray-300 hover:text-emerald-400 transition-colors text-sm font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('booking')}
              className="px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg font-medium hover:from-emerald-600 hover:to-emerald-700 transition-all hover:scale-105 shadow-lg shadow-emerald-500/25"
            >
              Book Free Consultation
            </button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-[#121212]/95 backdrop-blur-xl border-t border-white/5">
          <div className="px-4 py-6 space-y-4">
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left text-gray-300 hover:text-emerald-400 transition-colors py-2"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('why-us')}
              className="block w-full text-left text-gray-300 hover:text-emerald-400 transition-colors py-2"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('booking')}
              className="w-full px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg font-medium"
            >
              Book Free Consultation
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
