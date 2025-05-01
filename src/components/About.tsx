
import { Card, CardContent } from '@/components/ui/card';
import { CodeIcon, GraduationCap, BriefcaseIcon, Medal } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title">
          About <span className="gradient-text">Me</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-4">
                Hello, I'm Palak Batra, a passionate  MERN Stack/Java Full Stack. 
                With a background in IT, I strive to create impactful and visually stunning software 
                solutions that leave a lasting impression.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Currently pursuing my B.Tech in Information Technology at Guru Nanak Dev Engineering College, 
                Ludhiana. I'm originally from Fazilka and now living in Ludhiana to pursue my academic and 
                professional goals.
              </p>
              <p className="text-lg text-gray-700">
                My mission is to leverage my skills and creativity to deliver innovative IT solutions 
                that exceed client expectations and contribute positively to the digital landscape. 
                I am committed to continuous learning and growth, always seeking new challenges and 
                opportunities to expand my horizons.
              </p>
            </div>
          </div>
          
          <div className="space-y-4">
            <InfoCard 
              icon={<CodeIcon size={24} />}
              title="Full Stack Developer"
              description="Currently working on MERN/Java Full stack projects"
            />
            <InfoCard 
              icon={<GraduationCap size={24} />}
              title="Education"
              description="B.Tech in Information Technology, 3rd year"
            />
            <InfoCard 
              icon={<BriefcaseIcon size={24} />}
              title="Experience"
              description="Training in C, Python, React, and Angular"
            />
            <InfoCard 
              icon={<Medal size={24} />}
              title="Achievements"
              description="First and second positions in competitions"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const InfoCard = ({ icon, title, description }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) => {
  return (
    <Card className="card-hover">
      <CardContent className="p-4 flex items-start gap-3">
        <div className="text-portfolio-primary mt-1">{icon}</div>
        <div>
          <h3 className="font-semibold text-gray-900">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default About;
