import React from 'react';
import { Download } from 'lucide-react';

const BrochureSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto bg-gradient-to-r from-[#78350F] to-[#92400E] rounded-[40px] p-12 text-center text-white relative overflow-hidden">
        {/* Abstract Background circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="relative z-10 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">Detailed Business <br /> Plan</h2>
          <p className="text-gray-200 max-w-xl mx-auto">
            Download our comprehensive franchise brochure to understand ROI projections and operational workflows.
          </p>
          <button className="bg-white text-[#78350F] font-bold py-4 px-10 rounded-full flex items-center gap-2 mx-auto hover:bg-gray-100 transition-all">
            <Download size={20} /> Download Brochure
          </button>
        </div>
      </div>
    </section>
  );
};

export default BrochureSection;