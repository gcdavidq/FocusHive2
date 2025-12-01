import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: 'Conócenos', href: '/sobre-nosotros' },
    { name: 'Contáctanos', href: '/contactanos' },
    { name: 'Inicia sesión', href: '/login' },
  ];

  return (
    <header className="bg-[#1e3a5f] text-white shadow-lg sticky top-0 z-50">
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-[#1e3a5f] font-bold text-xl">F</span>
            </div>
            <span className="text-xl font-bold font-display">FocusHive</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-white hover:text-blue-300 transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
            
            {/* CTA Button */}
            <Link
              to="/registro"
              className="bg-white text-[#1e3a5f] px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Regístrate gratis
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-[#2a4a6f] transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-[#2a4a6f] pt-4 animate-slide-down">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-white hover:text-blue-300 transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile CTA Button */}
              <Link
                to="/registro"
                className="bg-white text-[#1e3a5f] px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 text-center shadow-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Regístrate gratis
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;