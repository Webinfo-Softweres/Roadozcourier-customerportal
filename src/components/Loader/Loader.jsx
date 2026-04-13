import React from "react";
import { motion } from "framer-motion"; 
import logo from "../../assets/images/Roadoz Golden.png";

export function Loader() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#FFFBE6] z-[9999]">
      <div className="relative flex items-center justify-center">
        <motion.div
          className="w-32 h-32 border-4 border-[#B29E53]/20 border-t-[#B29E53] rounded-full"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />
        
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <motion.img
            src={logo}
            alt="Loading..."
            className="w-20 h-20 object-contain"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          />
        </div>
      </div>

      <div className="text-center mt-8 space-y-2">
        <h2 className="text-2xl font-bold text-[#0F172A] tracking-tight">Roadoz Logistics</h2>
        <div className="flex items-center justify-center gap-1">
            <span className="text-xs text-gray-500 font-medium uppercase tracking-[0.3em]">
              Initialising
            </span>
            <motion.span 
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-[#B29E53] font-bold"
            >...</motion.span>
        </div>
      </div>
    </div>
  );
}