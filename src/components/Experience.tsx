
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Training in C Language",
      organization: "Royal Computer and Coaching Institute",
      duration: "2 Months",
      description: "Completed intensive training in C programming language, focusing on algorithm development and problem-solving.",
      location: "Ludhiana"
    },
    {
      title: "Training in Python Language",
      organization: "Infosys",
      duration: "4 Weeks",
      description: "Learned Python fundamentals, data structures, and applications in real-world scenarios.",
      location: "Mohali Hybrid"
    },
    {
      title: "Training in React and Angular",
      organization: "Infosys",
      duration: "4 Weeks",
      description: "Gained hands-on experience with frontend frameworks, component-based architecture, and modern web development practices.",
      location: "Mohali Hybrid"
    }
  ];

  const educationInfo = {
    degree: "B.Tech in Information Technology",
    institution: "Guru Nanak Dev Engineering College",
    duration: "2022 - Present (3rd Year)",
    location: "Ludhiana",
    description: "Currently pursuing my bachelor's degree with a focus on information technology, software development, and system design."
  };

  const awards = [
    {
      title: "First Position in Poster Making Competition",
      organization: "Rotract club of Ludhiana",
      year: "2022"
    },
    {
      title: "Second Position in AI Project Demonstration",
      organization: "Inter-College Competition, Chitkara University",
      year: "2024"
    },
    {
      title: "Second Position in Coding Competition",
      organization: "Inter-College Competition, TIET",
      year: "2024"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title">
          Experience & <span className="gradient-text">Education</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div id="education" className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">Education</h3>
            
            <Card className="card-hover">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold text-gray-800">{educationInfo.degree}</h4>
                <p className="text-portfolio-primary font-medium mt-1">{educationInfo.institution}</p>
                
                <div className="flex items-center gap-4 text-gray-500 text-sm mt-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{educationInfo.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    <span>{educationInfo.location}</span>
                  </div>
                </div>
                
                <p className="mt-4 text-gray-600">
                  {educationInfo.description}
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">Work Experience</h3>
            
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <Card key={index} className="card-hover">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold text-gray-800">{exp.title}</h4>
                    <p className="text-portfolio-primary font-medium mt-1">{exp.organization}</p>
                    
                    <div className="flex items-center gap-4 text-gray-500 text-sm mt-3">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{exp.duration}</span>
                      </div>
                      {exp.location && (
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                      )}
                    </div>
                    
                    <p className="mt-4 text-gray-600">
                      {exp.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Achievements & Awards</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {awards.map((award, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-gray-800">{award.title}</h4>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-gray-600">{award.organization}</span>
                    <span className="text-portfolio-primary font-medium">{award.year}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
