import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Star } from "lucide-react";

const projectsData = [
  {
    id: 1,
    title: "GNDEC Hostel No. 4",
    description: "A full-fledged hostel management system for GNDEC's Girls Hostel No. 4. Features include room allocation, complaint management, mess management, and student dashboard.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    githubUrl: "https://github.com/palakbatra26/PalwinderMam",
    liveUrl: "https://gndechostelno4.vercel.app/"
  },
  {
    id: 2,
    title: "Word to PDF Converter",
    description: "A web application that allows users to easily convert Word documents to PDF format. Features a clean interface and efficient conversion process.",
    technologies: ["React", "Node.js", "Express", "Document Processing APIs"],
    githubUrl: "https://github.com/palakbatra26/WordToPdf",
    liveUrl: null
  },
  {
    id: 3,
    title: "AI Plagiarism Checker",
    description: "An advanced AI-powered plagiarism detection tool that helps users check content originality. Built with modern technologies for accurate results.",
    technologies: ["TypeScript", "Next.js", "AI/ML", "SaaS"],
    githubUrl: "https://github.com/palakbatra26/Plagrism-checker",
    liveUrl: null
  }
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-50 py-12">
      <div className="section-container">
        <h2 className="section-title gradient-text mb-4">Projects</h2>
        <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
          Here are some of my recent projects that showcase my skills and experience.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
          {projectsData.map((project) => (
            <Card key={project.id} className="card-hover overflow-hidden border border-gray-200">
              <CardHeader className="p-4">
                <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                <CardDescription className="text-sm text-gray-500">
                  {project.technologies.join(" • ")}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-gray-600">{project.description}</p>
              </CardContent>
              <CardFooter className={`flex ${project.liveUrl ? 'justify-between' : 'justify-center'} border-t p-4`}>
                <Button variant="outline" size="sm" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github size={16} className="mr-1" /> Code
                  </a>
                </Button>
                {project.liveUrl && (
                  <Button size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-1" /> Live Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="outline" className="border-portfolio-primary text-portfolio-primary hover:bg-portfolio-light" asChild>
            <a href="https://github.com/palakbatra26" target="_blank" rel="noopener noreferrer">
              View More Projects on GitHub <Star className="ml-2" size={16} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
