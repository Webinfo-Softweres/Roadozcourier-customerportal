import React from 'react';
import { Zap, ShieldCheck, Banknote, MapPin } from 'lucide-react';

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="flex items-start sm:items-center gap-3 sm:gap-4 group">

      <div className="bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-sm flex items-center justify-center transition-transform group-hover:scale-105">
        {icon}
      </div>

      <div>
        <h4 className="font-bold sm:font-extrabold text-[#1a1a1a] text-sm sm:text-[15px] leading-tight">
          {title}
        </h4>
        <p className="text-gray-500 text-xs sm:text-[13px] mt-1 leading-snug">
          {desc}
        </p>
      </div>

    </div>
  );
}

export default function Features() {
  return (
    <section className="bg-[#f1f3f5] border-t border-gray-200 py-10 sm:py-12 md:py-14 lg:py-16 px-5 sm:px-6 md:px-10 lg:px-16">

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 sm:gap-y-10 md:gap-y-12 gap-x-6">

        <FeatureCard 
          icon={<Zap size={20} className="text-[#dec06c]" />} 
          title="24hr Delivery" 
          desc="Express Timeline" 
        />

        <FeatureCard 
          icon={<ShieldCheck size={20} className="text-[#dec06c]" />} 
          title="Safe Handling" 
          desc="Zero Damage Policy" 
        />

        <FeatureCard 
          icon={<Banknote size={20} className="text-[#dec06c]" />} 
          title="COD Service" 
          desc="Secure Transactions" 
        />

        <FeatureCard 
          icon={<MapPin size={20} className="text-[#dec06c]" />} 
          title="Kerala Wide" 
          desc="Every Village Covered" 
        />

      </div>

    </section>
  );
}