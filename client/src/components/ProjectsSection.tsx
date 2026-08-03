import { FaLink } from "react-icons/fa";
import { projectsData } from "@/data/portfolioData";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Portfolio</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img 
                src={project.image} 
                alt={`${project.title} screenshot`} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {
                  project.isFeatured ? (
                    <>
                    <a href={project.v_demoLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors">
                      <FaLink className="inline-block mr-1" /> Vendor Demo
                    </a>
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors">
                      <FaLink className="inline-block mr-1" /> Admin Demo
                    </a>
                    </>
                 
                  ) : (
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors">
                      <FaLink className="inline-block mr-1" /> Demo
                    </a>
                  )
                  }
                  {/* {project.codeLink && (
                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors">
                      <FaGithub className="inline-block mr-1" /> Code
                    </a>
                  )} */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
