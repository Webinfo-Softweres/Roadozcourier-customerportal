import React from 'react';
import { Flag, Lightbulb } from 'lucide-react';

const VisionMission = () => {
  return (
    <section className="bg-[#EFEEE0] py-20 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className="bg-white p-10 rounded-2xl border border-dashed border-[#B29E53] space-y-4">
          <div className="bg-[#FFFBE6] w-12 h-12 flex items-center justify-center rounded-lg">
            <Flag className="text-[#B29E53]" size={24} />
          </div>
          <h2 className="text-[#B29E53] text-3xl font-bold">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            To empower global commerce by providing seamless, transparent, and ultra-reliable logistics solutions 
            that bridge the gap between businesses and their customers through innovation and integrity.
          </p>
        </div>

        <div className="bg-white p-10 rounded-2xl border border-dashed border-[#B29E53] space-y-4">
          <div className="bg-[#FFFBE6] w-12 h-12 flex items-center justify-center rounded-lg">
            <Lightbulb className="text-[#B29E53]" size={24} />
          </div>
          <h2 className="text-[#B29E53] text-3xl font-bold">Our Vision</h2>
          <p className="text-gray-600 leading-relaxed">
            To empower global commerce by providing seamless, transparent, and ultra-reliable logistics solutions 
            that bridge the gap between businesses and their customers through innovation and integrity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;