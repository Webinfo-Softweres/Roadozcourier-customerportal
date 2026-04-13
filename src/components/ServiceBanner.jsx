import React from "react";
import heroImage from "../assets/images/delivery-image.jpeg";

const ServiceBanner = () => {
  return (
    <section className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px] overflow-hidden font-sans">
      
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/20"></div>
      </div>

      <div className="relative z-10 flex items-center h-full px-5 sm:px-8 md:px-16 lg:px-28">
        <div className="max-w-xl md:max-w-2xl text-white">

          <h1 className="mb-3 sm:mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
            Our Services
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed opacity-90">
            Precision logistics engineered for the modern world. 
            From rapid express delivery to complex enterprise solutions.
          </p>

        </div>
      </div>
    </section>
  );
};

export default ServiceBanner;
