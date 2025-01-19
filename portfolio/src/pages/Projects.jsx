import React from 'react';

const ProjectCard = ({ title, description, onClick }) => (
  <div 
    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
    onClick={onClick}
  >
    <div className="space-y-3">
      <h4 className="text-xl font-semibold text-gray-800">{title}</h4>
      <p className="text-gray-600">{description}</p>
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
      onClick: () => openQuiz()
    },
    {
      title: "Med Harmony",
      description: "A Website which tells us about medical interaction between two medicines",
      onClick: () => errInfo()
    },
    {
      title: "Calculator",
      description: "A simple calculator using HTML, CSS, and JavaScript",
      onClick: () => refTO()
    },
    {
      title: "Logic Gates",
      description: "A learning website which demonstrates working of logic gates. (not uploaded yet)",
      onClick: () => errInfo()
    },
    {
      title: "Message Guard",
      description: "A website which encrypts texts to maintain security while delivering any sensitive information",
      onClick: () => message_guard()
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
              onClick={project.onClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;