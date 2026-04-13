import React from 'react';

import ExpressImg from '../assets/images/express-delivery.jpg';
import PickupImg from '../assets/images/pickup-delivery.jpg';
import CodImg from '../assets/images/cod-service.jpg';
import ProtectionImg from '../assets/images/parcel-protection.jpg';

export default function Services() {

  const services = [
    { 
      title: "Express Delivery", 
      desc: "Guaranteed 24-hour delivery for urgent documents and parcels across all major cities in Kerala.",
      img: ExpressImg
    },
    { 
      title: "Pickup & Delivery", 
      desc: "Convenient doorstep pickup service. Just book through our app or website, and our rider arrives.",
      img: PickupImg
    },
    { 
      title: "COD Service", 
      desc: "Reliable Cash on Delivery handling for E-commerce businesses with fast remittance cycles.",
      img: CodImg
    },
    { 
      title: "Parcel Protection", 
      desc: "Comprehensive insurance and premium packaging options for fragile and high-value shipments.",
      img: ProtectionImg
    },
  ];

  return (
    <section className="py-12 sm:py-14 md:py-16 lg:py-20 px-5 sm:px-6 md:px-10 lg:px-16 bg-[#e9ecef]">

      <div className="max-w-6xl mx-auto text-center mb-10 sm:mb-12 md:mb-14">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a1a1a]">
          Our Professional Services
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mt-3 max-w-xl mx-auto">
          Fast, reliable, and secure logistics solutions designed for individuals and businesses across Kerala.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 md:gap-8">

        {services.map((service, i) => (
          <div
            key={i}
            className="bg-[#dec06c] rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-sm hover:shadow-xl transition duration-300 flex flex-col"
          >
            
            <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 mb-4 sm:mb-5 flex items-center justify-center h-[120px] sm:h-[140px]">
              <img
                src={service.img}
                alt={service.title}
                className="max-h-full object-contain"
              />
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[#1a1a1a] mb-2 sm:mb-3">
              {service.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#1a1a1a] leading-relaxed flex-grow">
              {service.desc}
            </p>

          </div>
        ))}

      </div>
    </section>
  );
}