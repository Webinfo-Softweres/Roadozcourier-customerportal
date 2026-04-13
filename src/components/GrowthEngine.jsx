import React from 'react';
import { Network, BarChart3 } from 'lucide-react';
import IndiaMap from '../assets/images/IndiaMap.jpeg';

const GrowthEngine = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-white">
      <div className="text-center mb-16">
        <p className="text-[#B29E53] uppercase tracking-widest text-xs font-bold mb-2">Strategic Roadmap</p>
        <h2 className="text-4xl font-extrabold text-gray-900">The Roadoz Growth Engine</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="md:col-span-2 bg-[#0F172A] text-white p-10 rounded-3xl space-y-4">
          <h3 className="text-6xl font-bold">100+</h3>
          <p className="text-[#B29E53] font-bold tracking-widest">FRANCHISE GOAL BY 2026</p>
          <p className="text-gray-400">We are aggressively expanding our footprint. Our growth plan focuses on deep regional penetration and creating entrepreneurship opportunities across the nation.</p>
        </div>

        {/* Hyper Local Hubs */}
        <div className="bg-white border p-8 rounded-3xl flex flex-col justify-center space-y-4 shadow-sm">
          <Network className="text-[#92400E]" size={32} />
          <h4 className="font-bold text-xl">Hyper-Local Hubs</h4>
          <p className="text-gray-500 text-sm">Decentralizing sorting to ensure 4-hour local delivery windows.</p>
        </div>

        {/* AI Intelligence */}
        <div className="bg-[#0266CC] text-white p-8 rounded-3xl flex flex-col justify-center space-y-4">
          <BarChart3 size={32} />
          <h4 className="font-bold text-xl">AI Intelligence</h4>
          <p className="text-blue-100 text-sm">Implementing predictive route analytics to reduce carbon footprint by 30%.</p>
        </div>

        {/* Map Card */}
        <div className="md:col-span-2 bg-[#E2E8F0] p-10 rounded-3xl flex flex-col md:flex-row gap-8 items-center">
          <img src={IndiaMap} alt="India Map" className="w-40 opacity-50" />
          <div className="space-y-4">
            <h4 className="font-bold text-xl">Pan-India Domination</h4>
            <p className="text-gray-600 text-sm leading-relaxed">From urban centers to rural frontiers, Roadoz is bridging the connectivity gap. Our infrastructure is designed to reach the last mile, no matter how remote.</p>
            <div className="flex items-center gap-2">
               <div className="flex -space-x-2">
                 <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white"></div>
                 <div className="w-8 h-8 rounded-full bg-red-500 border-2 border-white"></div>
                 <div className="w-8 h-8 rounded-full bg-green-500 border-2 border-white"></div>
               </div>
               <span className="text-xs font-bold text-gray-500">+5k Trusted Businesses</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthEngine;