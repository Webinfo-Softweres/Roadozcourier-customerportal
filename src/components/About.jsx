import React from 'react';
import Logo from '../assets/images/Hero1.jpg';

export default function About() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6 md:px-12 bg-[#e9ecef]">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

        <div className="flex flex-col items-center md:items-start text-center md:text-left">

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-snug sm:leading-tight md:leading-tight mb-6 uppercase text-[#1a1a1a]">
            REDEFINING <br />
            LOGISTICS THROUGH <br />
            <span className="text-[#dec06c]">PRECISION</span> & SPEED
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed max-w-md md:max-w-lg">
            Roadoz Courier has emerged as the most trusted logistical backbone in Kerala.
            With a massive fleet and a state-of-the-art sorting hub network, we ensure that
            your emotions—packaged as parcels—reach their destination with absolute care and timing.
          </p>

        </div>

        <div className="relative w-full flex justify-center md:justify-end mt-8 md:mt-0">

          <div className="rounded-[35px] sm:rounded-[45px] md:rounded-[55px] overflow-hidden shadow-[0_20px_60px_-10px_rgba(0,0,0,0.25)] sm:shadow-[0_25px_65px_-12px_rgba(0,0,0,0.3)] md:shadow-[0_30px_70px_-15px_rgba(0,0,0,0.35)] border-[6px] sm:border-8 md:border-10 border-white bg-white max-w-[350px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px]">
            <img 
              src={Logo}
              alt="Logistics Precision" 
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="absolute -top-6 -right-6 w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-[#dec06c]/10 rounded-full blur-3xl -z-10"></div>
        </div>

      </div>
    </section>
  );
}