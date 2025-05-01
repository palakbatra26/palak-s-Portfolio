import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const technicalSkills = [
    { name: 'HTML/CSS', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Express', level: 80 },
    { name: 'Spring Boot', level: 80 },
    { name: 'MongoDB', level: 75 },
    { name: 'Python', level: 70 },
    { name: 'Java', level: 65 },
    { name: 'C/C++', level: 75 },
  ];

  const tools = [
    'Visual Studio Code', 
    'GitHub', 
    'Notion', 
    'PyCharm',
    'Tailwind CSS',
    'Bootstrap',
    'DaisyUI',
    'Canva',
    'APIs',
    'Firebase',
    'Netlify',
    'Formspree',
    'Git',
    'Postman',
    'Vercel',
    'Mongoose',
    'Material UI',
    'Chakra UI',
  ];

  return (
    <section id="skills" className="py-12 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title mb-6">
          My <span className="gradient-text">Skills</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4 animate-fade-in">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Technical Skills</h3>
            {technicalSkills.map((skill, index) => (
              <div key={index} className="space-y-1.5">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">{skill.name}</span>
                  <span className="text-gray-500">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2 bg-gray-200" 
                  indicatorClassName="bg-gradient-to-r from-portfolio-primary to-portfolio-secondary" 
                />
              </div>
            ))}
          </div>
          
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <span key={index} className="skill-badge">
                    {tool}
                  </span>
                ))}
              </div>
              
              <div className="mt-6">
                <h4 className="font-semibold text-gray-800 mb-2">Additional Strengths</h4>
                <ul className="space-y-1.5 text-gray-700">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-portfolio-primary rounded-full"></div>
                    Strong grasp of core design principles
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-portfolio-primary rounded-full"></div>
                    Problem-solving skills
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-portfolio-primary rounded-full"></div>
                    Effective communication
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-portfolio-primary rounded-full"></div>
                    Team collaboration
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
