import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ title, description, projectUrl, onClick }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="space-y-4">
      <h4 className="text-xl font-semibold text-gray-800">{title}</h4>
      <p className="text-gray-600">{description}</p>
      <div className="flex justify-between items-center pt-4">
        <button
          onClick={onClick}
          className="text-grey-600 hover:text-blue-800 font-medium"
        >
          Learn More
        </button>
        {projectUrl && (
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white-600 text-black rounded-lg hover:bg-blue-300 transition-colors duration-200 shadow-lg"
          >
            Visit Project <ArrowUpRight size={16} />
          </a>
        )}
      </div>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "Quizzy World",
      description: (
        <>
          Quiz application which is made by using{" "}
          <a 
            href="https://opentb.com" 
            className="text-blue-600 hover:text-blue-800 underline"
            target="_blank" 
            rel="noopener noreferrer"
          >
            opentb
          </a>{" "}
          api.
        </>
      ),
      projectUrl: "https://quizzy-world.netlify.app/",
      onClick: () => openQuiz()
    },
    {
      title: "Med Harmony",
      description: "A Website which tells us about medical interaction between two medicines",
      projectUrl: "https://your-med-harmony-url.com",
    },
    {
      title: "Calculator",
      description: "A simple calculator using HTML, CSS, and JavaScript",
      projectUrl: "https://haren-calc.netlify.app/",
    },
    {
      title: "Logic Gates",
      description: "A learning website which demonstrates working of logic gates. (not uploaded yet)",
      projectUrl: "",  // Empty string for projects not yet deployed
    },
    {
      title: "Message Guard",
      description: "A website which encrypts texts to maintain security while delivering any sensitive information",
      projectUrl: "https://your-message-guard-url.com",
    }
  ];

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              projectUrl={project.projectUrl}
              onClick={project.onClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;