import { Heart, Github, Instagram, Linkedin, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h3 className="text-xl font-bold text-white">Palak Batra</h3>
            <p className="mt-1">Full Stack Developer</p>
          </div>
          
          <div className="flex gap-4 mt-4 md:mt-0">
            <a 
              href="https://github.com/palakbatra26" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/palak-batra-718b31302/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://www.instagram.com/404palaknotfound/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="https://www.facebook.com/profile.php?id=61562280483740" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a 
              href="https://x.com/PalakBatra26_" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
          </div>
          
          <div className="mt-4 md:mt-0">
            <p className="flex items-center text-sm">
              Made with <Heart size={14} className="mx-1 text-red-500" /> in {currentYear}
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-center text-gray-500">
          <p>© {currentYear} Palak Batra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
