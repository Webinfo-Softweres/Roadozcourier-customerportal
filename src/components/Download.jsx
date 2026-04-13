import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import BrochureImg from '../assets/images/brochure-mockup.jpeg'; 

export default function Download() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6 md:px-12 bg-[#fdfcf5]">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">

        <div className="flex flex-col items-start text-center md:text-left">

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-extrabold text-[#1a1a1a] leading-tight mb-6 sm:mb-8 tracking-tight">
            Download Our 2024 Service Guide
          </h2>

          <p className="text-sm sm:text-[15px] md:text-[17px] text-gray-700 mb-6 sm:mb-8 max-w-md md:max-w-xl leading-relaxed font-medium">
            Get detailed insights into our delivery timelines, pricing tiers, 
            franchise benefits, and the full list of our service locations across 
            Kerala.
          </p>

          <ul className="space-y-4 sm:space-y-5 mb-6 sm:mb-10">
            {[
              "Complete Service Portfolio",
              "District-wise Pin Code Coverage",
              "Franchise Success Roadmap"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2 sm:gap-3 font-bold text-[#1a1a1a] text-sm sm:text-[15px]">
                <CheckCircle2 className="text-[#dec06c]" size={20} />
                {item}
              </li>
            ))}
          </ul>

          <button className="bg-[#dec06c] hover:bg-[#cfaf55] text-[#1a1a1a] px-6 sm:px-10 py-3 sm:py-4 rounded-2xl font-bold text-sm sm:text-[15px] transition-all shadow-md active:scale-95">
            Download PDF Brochure
          </button>

        </div>

        <div className="flex justify-center md:justify-end mt-8 md:mt-0">
          <div className="relative w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px] aspect-square bg-[#e2e2d8] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] flex items-center justify-center overflow-hidden shadow-sm">

            <div className="relative w-[70%] sm:w-[75%] transform -rotate-6 hover:rotate-0 transition-transform duration-700 ease-in-out cursor-pointer">
              <img 
                src={BrochureImg} 
                alt="Roadoz 2024 Service Guide" 
                className="w-full h-auto shadow-[10px_10px_40px_rgba(0,0,0,0.15)] sm:shadow-[15px_15px_45px_rgba(0,0,0,0.2)] rounded-sm"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}