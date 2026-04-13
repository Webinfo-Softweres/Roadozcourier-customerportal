import React from 'react';
import Hero from '../assets/images/young-manual-worker-talking-his-female-colleague-while-sorting-packages-shipment-delivery-van.jpg';

const AboutHero = () => {
  return (
    <section className="relative h-[600px] flex items-center px-6 md:px-20 text-white">
      <div className="absolute inset-0 z-0">
        <img 
          src={Hero}
          alt="Logistics Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 max-w-3xl space-y-4">
        <p className="text-[#E9D16D] font-semibold tracking-widest text-sm uppercase">Precision Logistics</p>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Delivering the <br /> Future of Logistics
        </h1>
        <p className="text-gray-200 text-lg md:text-xl max-w-xl leading-relaxed">
          A journey of excellence, moving beyond boundaries to connect people and businesses across the globe with precision kinetic energy.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;