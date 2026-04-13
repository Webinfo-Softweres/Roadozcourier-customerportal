import React from 'react';
import courier from '../assets/images/courier-handshake.jpg';

const Hero = () => {
  return (
    <section className="bg-[#FFFBE6] px-6 py-16 md:px-20 lg:py-24 flex flex-col md:flex-row items-center justify-between overflow-hidden">
      <div className="md:w-1/2 space-y-6 z-10">
        <p className="text-gray-800 font-medium text-sm">Partner With Us</p>
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight">
          Drive Your Future <br /> with Roadoz.
        </h1>
        <p className="text-gray-600 max-w-md text-lg leading-relaxed pt-2">
          Join the logistics revolution. Roadoz Courier offers a high-precision franchise model 
          designed for entrepreneurs who demand efficiency and growth.
        </p>
        <div className="pt-4">
          <button className="bg-[#E9D16D] hover:bg-[#d4bd5a] text-gray-900 font-bold py-4 px-10 rounded-xl shadow-sm transition-all text-sm">
            Get Start Today
          </button>
        </div>
      </div>
      <div className="md:w-1/2 mt-12 md:mt-0 relative flex justify-end">
        <div className="bg-[#FFA500] rounded-none overflow-hidden w-full max-w-lg aspect-square md:aspect-[4/5] lg:aspect-square flex items-end">
          <img 
            src={courier}
            alt="Delivery Partner" 
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;