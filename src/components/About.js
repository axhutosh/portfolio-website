// src/components/About.js
import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-white text-gray-800 py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img src="your-photo-url.jpg" alt="Profile" className="w-64 h-64 rounded-full mx-auto md:mx-0" />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg mb-4">Aspiring computer science engineer with a solid foundation in programming languages such as C, Python, and Java. Experienced in web development and familiar with MySQL database management.</p>
          <p className="text-lg">Currently in the 4th year of my computer science engineering degree, actively seeking new opportunities to enhance my skills and gain practical experience in the industry. Open to working on projects that challenge me and drive my passion for technology and problem-solving.</p>
        </div>
      </div>
    </section>
  );
};

export default About;

