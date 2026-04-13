import React from "react";
import { PiggyBank, TrendingUp, Headphones, Timer } from "lucide-react";

const features = [
  {
    icon: <PiggyBank size={24} className="text-blue-900" />,
    title: "Low Investment",
    desc: "Start your own business journey without the heavy capital burden of traditional shipping hubs.",
    color: "bg-blue-100",
  },
  {
    icon: <TrendingUp size={24} className="text-orange-900" />,
    title: "High Demand",
    desc: "The e-commerce boom ensures a constant stream of packages and high-volume courier needs.",
    color: "bg-orange-100",
  },
  {
    icon: <Headphones size={24} className="text-blue-900" />,
    title: "Full Support",
    desc: "From technical training to marketing collateral, our corporate team stands right behind you.",
    color: "bg-blue-100",
  },
  {
    icon: <Timer size={24} className="text-orange-900" />,
    title: "Quick ROI",
    desc: "Benefit from established systems that accelerate your break-even point and maximize profit.",
    color: "bg-orange-100",
  },
];

const Features = () => {
  return (
    <section className="bg-[#FFFBE6] py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-8 md:px-12 lg:px-20">
      
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12">

          {features.map((f, i) => (
            <div
              key={i}
              className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-4"
            >
              
              <div
                className={`${f.color} w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl sm:rounded-2xl shadow-sm`}
              >
                {f.icon}
              </div>

              <div className="space-y-2 max-w-sm">
                <h4 className="font-bold text-lg sm:text-xl text-gray-900">
                  {f.title}
                </h4>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-medium">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>

    </section>
  );
};

export default Features;
