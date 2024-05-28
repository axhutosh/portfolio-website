// src/components/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-white text-gray-800 py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Contact</h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
            <input className="w-full px-3 py-2 border rounded" type="text" id="name" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input className="w-full px-3 py-2 border rounded" type="email" id="email" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
            <textarea className="w-full px-3 py-2 border rounded" id="message" rows="5"></textarea>
          </div>
          <div className="text-center">
            <button className="bg-blue-500 text-white py-2 px-4 rounded" type="submit">Send</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
