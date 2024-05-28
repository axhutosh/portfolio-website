// src/components/Hero.js
import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gray-900 text-white h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Ashutosh Kumar Sah</h1>
        <p className="text-2xl mb-8">Final year student</p>
        <a href="#projects" className="bg-blue-500 text-white py-2 px-4 rounded">View My Work</a>
      </div>
    </section>
  );
};

export default Hero;
