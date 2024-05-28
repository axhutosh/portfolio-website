// src/components/Projects.js
import React from 'react';

const projects = [
  {
    title: "PGLife",
    description: "PGLife is a web application designed to simplify the search for Paying Guest (PG) accommodations in new cities.",
    image: "/images/pglife.png",
    link: "https://example.com/ecommerce",
    tags: ["HTML", "CSS", "Javascript", "Bootstrap", "React.js", "MySql", "Php"],
  },
  {
    title: "Medicine Database App",
    description: "The Medicine Database App is an Android application developed with Android Studio.",
    image: "/images/medicine.jpg",
    link: "https://example.com/portfolio",
    tags: ["Java", "SQlite"],
  },
  {
    title: "Simple GUI Calculator",
    description: "Developed using Python and Tkinter, the Simple GUI Calculator offers users a sleek and intuitive interface for basic arithmetic calculations.",
    image: "/images/calculator.jpg",
    link: "https://example.com/portfolio",
    tags: ["Python", "Tkinter"],
  }
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section id="projects" className="py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img className="w-full h-48 object-cover object-center" src={project.image} alt={project.title} />
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-2">{project.description}</p>
                <div className="flex flex-wrap gap-2"> {/* Adjusted alignment */}
                  {project.tags.map((tag, index) => (
                    <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="mt-2"> {/* Adjusted alignment */}
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
