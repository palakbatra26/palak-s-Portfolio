import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#" className="text-xl font-bold gradient-text">
              Palak Batra
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 space-x-8">
            <a href="#home" className="text-gray-600 hover:text-portfolio-primary whitespace-nowrap">
              Home
            </a>
            <a href="#about" className="text-gray-600 hover:text-portfolio-primary whitespace-nowrap">
              About
            </a>
            <a href="#skills" className="text-gray-600 hover:text-portfolio-primary whitespace-nowrap">
              Skills
            </a>
            <a href="#projects" className="text-gray-600 hover:text-portfolio-primary whitespace-nowrap">
              Projects
            </a>
            <a href="#experience" className="text-gray-600 hover:text-portfolio-primary whitespace-nowrap">
              Experience
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-portfolio-primary whitespace-nowrap">
              Testimonials
            </a>
            <a href="#contact" className="text-gray-600 hover:text-portfolio-primary whitespace-nowrap">
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-full w-full bg-white shadow-lg md:hidden animate-fade-in">
          <div className="pt-2 pb-4 px-4 space-y-1">
            <a 
              href="#home" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-portfolio-primary hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-portfolio-primary hover:bg-gray-50"
              onClick={toggleMenu}
            >
              About
            </a>
            <a 
              href="#skills" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-portfolio-primary hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Skills
            </a>
            <a 
              href="#projects" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-portfolio-primary hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Projects
            </a>
            <a 
              href="#experience" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-portfolio-primary hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Experience
            </a>
            <a 
              href="#testimonials" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-portfolio-primary hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-portfolio-primary hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
