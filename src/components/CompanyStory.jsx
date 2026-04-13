import React from 'react';
import Logo from '../assets/images/forklift-operator-taking-notes-while-examining-stock-packages-warehouse.jpg';

const CompanyStory = () => {
  return (
    <section className="py-20 px-6 md:px-20 flex flex-col md:flex-row items-center gap-12 bg-white">
      <div className="md:w-1/2">
        <img 
          src={Logo}
          alt="Warehouse worker" 
          className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
        />
      </div>
      <div className="md:w-1/2 space-y-6">
        <h3 className="text-[#0056b3] font-semibold text-xl">Redefining Speed with Absolute Precision</h3>
        <p className="text-gray-700 leading-relaxed text-lg">
          Roadoz Courier emerged from a simple vision: making logistics more than just moving boxes. 
          We treat every parcel as a commitment, a promise delivered with technological sophistication and human care.
        </p>
        <p className="text-gray-700 leading-relaxed text-lg">
          With our advanced tracking systems and an expansive network of franchise partners, 
          we ensure that your business never misses a beat. We are the backbone of your supply chain, 
          designed for the modern economy.
        </p>
      </div>
    </section>
  );
};

export default CompanyStory;