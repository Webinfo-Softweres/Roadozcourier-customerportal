import React from "react";
import { Box, ShoppingCart, Settings } from "lucide-react";

export default function BusinessSolutions() {
  const solutions = [
    {
      title: "Bulk Shipping",
      desc: "High-volume logistics management for manufacturers and distributors with dedicated account oversight.",
      icon: <Box size={24} className="text-blue-600" />,
      bgColor: "bg-blue-50",
    },
    {
      title: "eCommerce Support",
      desc: "Seamless API integration for Shopify, WooCommerce, and custom platforms with real-time tracking.",
      icon: <ShoppingCart size={24} className="text-orange-600" />,
      bgColor: "bg-orange-50",
    },
    {
      title: "Custom Logistics",
      desc: "Tailored delivery frameworks for specialized industries including healthcare, jewelry, and electronics.",
      icon: <Settings size={24} className="text-blue-800" />,
      bgColor: "bg-blue-100",
    },
  ];

  return (
    <section className="bg-white py-14 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-20">
      
      <div className="max-w-7xl mx-auto text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
          Business Solutions
        </h2>

        <p className="text-gray-500 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto">
          Scalable logistics infrastructure designed to grow alongside your enterprise
        </p>
      </div>

      
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {solutions.map((item, index) => (
          <div
            key={index}
            className="p-6 sm:p-8 md:p-10 lg:p-12 border border-gray-200 rounded-[1.5rem] sm:rounded-[2rem] hover:shadow-xl transition-all duration-300 group bg-white"
          >
            <div
              className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 ${item.bgColor} rounded-xl sm:rounded-2xl flex items-center justify-center mb-6 sm:mb-8`}
            >
              {item.icon}
            </div>

            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              {item.title}
            </h3>

            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}
