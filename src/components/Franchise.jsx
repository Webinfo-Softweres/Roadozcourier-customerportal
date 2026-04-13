import React from 'react';
import { Headset, TrendingUp } from 'lucide-react';
import HandshakeImg from '../assets/images/handshake.jpg';

export default function Franchise() {
  return (
    <section className="py-12 sm:py-14 md:py-16 lg:py-20 px-5 sm:px-6 md:px-10 lg:px-16 bg-[#f5f3e8]">

      <div className="max-w-7xl mx-auto bg-[#3b3b30] rounded-2xl sm:rounded-3xl overflow-hidden grid md:grid-cols-2 shadow-lg">

        <div className="p-6 sm:p-8 md:p-10 lg:p-14 flex flex-col justify-center text-white text-center md:text-left">

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Start Your Own <br />
            Courier Business
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-gray-300 mb-6 max-w-md mx-auto md:mx-0 leading-relaxed">
            Join the fastest-growing logistics network in Kerala. We provide
            training, technology, and branding to set you up for success.
          </p>

          <button className="bg-[#dec06c] text-[#1a1a1a] px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold w-fit mx-auto md:mx-0 hover:bg-white transition">
            Apply Now
          </button>

        </div>

        <div className="relative h-[260px] sm:h-[300px] md:h-auto">

          <img
            src={HandshakeImg}
            alt="Business Partnership"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 flex flex-row md:flex-col justify-center md:justify-center items-center md:items-end gap-4 md:gap-5 px-4 md:px-0 md:pr-6">

            <div className="bg-white/20 backdrop-blur-md px-4 sm:px-5 py-3 rounded-xl sm:rounded-2xl flex flex-col items-center shadow-md">
              <Headset className="text-blue-600 mb-1" size={18} />
              <p className="text-[10px] sm:text-xs font-semibold text-black text-center">
                24/7 Support
              </p>
            </div>

            <div className="bg-white/20 backdrop-blur-md px-4 sm:px-5 py-3 rounded-xl sm:rounded-2xl flex flex-col items-center shadow-md md:mr-6">
              <TrendingUp className="text-blue-600 mb-1" size={18} />
              <p className="text-[10px] sm:text-xs font-semibold text-black text-center">
                High ROI
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}