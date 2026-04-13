import React from 'react';
import Contact from '../assets/images/contact.jpg';

const ContactHero = () => {
  return (
    <section className="relative h-[500px] flex items-center px-6 md:px-20 text-white">
      <div className="absolute inset-0 z-0">
        <img 
          src={Contact}
          alt="Support Team" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 max-w-2xl">
        <p className="text-[#E9D16D] font-medium mb-4">Get In Touch</p>
        <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6">
          CONTACT US
        </h2>
        <p className="text-gray-200 text-lg leading-relaxed max-w-lg">
          A journey of excellence, moving beyond boundaries to connect people and businesses across the globe with precision kinetic energy.
        </p>
      </div>
    </section>
  );
};

export default ContactHero;