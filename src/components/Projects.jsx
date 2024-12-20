import React from 'react'

function Projects() {
    const projects = [
      {
        name: "Portfolio",
        description: "A responsive personal website showcasing projects, skills, and contact details.",
        link: "https://github.com/mondal15/Portfolio",
      },
      {
        name: "Budget App",
        description: "A dynamic budget tracker built with React and Node.js.",
        link: "https://github.com/mondal15/Budget-App",
      },
      {
        name: "To-Do List",
        description: "A task management app using React with features like adding, deleting, and completing tasks.",
        link: "https://github.com/mondal15/To-Do-List",
      },
    ];
  
    return (
      <div name="Projects" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
        <h1 className="text-3xl font-bold mb-5">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="border p-4 rounded-lg shadow-lg">
              <h2 className="font-semibold text-xl">{project.name}</h2>
              <p className="text-gray-600 mb-3">{project.description}</p>
              <a href={project.link} target="_blank" className="text-blue-500 hover:underline">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Projects;

  
  