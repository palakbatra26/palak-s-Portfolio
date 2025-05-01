import { Button } from '@/components/ui/button';
import { ArrowDown, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-white via-portfolio-light/30 to-portfolio-accent/20 pt-16 md:pt-20">
      <div className="container mx-auto px-4 md:px-6 py-4 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
          <div className="space-y-6 md:space-y-8 animate-fade-in flex flex-col justify-center h-full">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Hi, I'm <span className="gradient-text">Palak Batra</span>
              </h1>
              <h2 className="text-2xl md:text-3xl mt-4 text-gray-700">
                Full Stack Developer
              </h2>
            </div>
            
            <p className="text-lg text-gray-600">
              A passionate developer currently pursuing B.Tech in IT at Guru Nanak Dev Engineering College, Ludhiana. 
              Specializing in MERN/Java Full stack and creating impactful digital solutions.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-portfolio-primary hover:bg-portfolio-primary/90"
                size="lg"
                onClick={() => window.open('#contact', '_self')}
              >
                Contact Me
              </Button>
              <Button 
                variant="outline"
                size="lg"
                onClick={() => window.open('#about', '_self')}
                className="border-portfolio-primary text-portfolio-primary hover:bg-portfolio-light"
              >
                Learn More
              </Button>
            </div>
            
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/404palaknotfound/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-portfolio-primary hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61562280483740" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-portfolio-primary hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/palak-batra-718b31302/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-portfolio-primary hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://x.com/PalakBatra26_" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-portfolio-primary hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-portfolio-primary/10 rounded-full blur-3xl"></div>
            <div className="relative bg-white shadow-xl rounded-2xl overflow-hidden animate-fade-in mt-12">
              <div className="aspect-[9/12] bg-gradient-to-br from-portfolio-primary/20 to-portfolio-secondary/20">
                <img
                  src="/Missbatra.jpg"
                  alt="Palak Batra"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" className="flex flex-col items-center text-gray-500 hover:text-portfolio-primary">
            <span className="text-sm font-medium mb-2">Scroll Down</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
