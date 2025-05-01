import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Mail, Phone, MapPin, Send, Linkedin, Instagram, Facebook, Twitter } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/mldbgvop', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for contacting me. I'll get back to you soon.",
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">
          Get in <span className="gradient-text">Touch</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Let's Connect</h3>
              <p className="text-gray-600">
                Feel free to reach out for collaborations, opportunities, or just to say hello! 
                I'm always open to discussing new projects and ideas.
              </p>
            </div>
            
            <div className="space-y-4">
              <ContactItem 
                icon={<Mail />} 
                title="Email" 
                content="palakbatra79@gmail.com" 
                href="mailto:palakbatra79@gmail.com" 
              />
              <ContactItem 
                icon={<Phone />} 
                title="Phone" 
                content="+91 7986904164" 
                // href="tel:+919999999999" 
              />
              <ContactItem 
                icon={<MapPin />} 
                title="Location" 
                content="Ludhiana, Punjab, India" 
              />
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Follow Me:</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/in/palak-batra-718b31302/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white text-gray-600 hover:text-portfolio-primary hover:bg-portfolio-light rounded-full border border-gray-200 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a 
                  href="https://www.instagram.com/404palaknotfound/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white text-gray-600 hover:text-portfolio-primary hover:bg-portfolio-light rounded-full border border-gray-200 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a 
                  href="https://www.facebook.com/profile.php?id=61562280483740"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white text-gray-600 hover:text-portfolio-primary hover:bg-portfolio-light rounded-full border border-gray-200 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a 
                  href="https://x.com/PalakBatra26_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white text-gray-600 hover:text-portfolio-primary hover:bg-portfolio-light rounded-full border border-gray-200 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={18} />
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-sm">
              <div>
                <Input 
                  name="name"
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Input 
                  type="email"
                  name="email"
                  placeholder="Your Email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Input 
                  name="subject"
                  placeholder="Subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Textarea 
                  name="message"
                  placeholder="Your Message" 
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                />
              </div>
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-portfolio-primary hover:bg-portfolio-primary/90"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'} 
                {!isSubmitting && <Send size={16} className="ml-2" />}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactItem = ({ 
  icon, 
  title, 
  content, 
  href 
}: { 
  icon: React.ReactNode; 
  title: string; 
  content: string; 
  href?: string;
}) => {
  return (
    <div className="flex items-start gap-3">
      <div className="p-2 bg-portfolio-light text-portfolio-primary rounded-full">
        {icon}
      </div>
      <div>
        <h4 className="font-medium text-gray-800">{title}</h4>
        {href ? (
          <a href={href} className="text-gray-600 hover:text-portfolio-primary">
            {content}
          </a>
        ) : (
          <p className="text-gray-600">{content}</p>
        )}
      </div>
    </div>
  );
};

const SocialButton = ({ 
  icon, 
  href, 
  label 
}: { 
  icon: React.ReactNode; 
  href: string; 
  label: string;
}) => {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 bg-white text-gray-600 hover:text-portfolio-primary hover:bg-portfolio-light rounded-full border border-gray-200 transition-colors"
      aria-label={label}
    >
      {icon}
    </a>
  );
};

export default Contact;
