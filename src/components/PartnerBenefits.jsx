import React from "react";
import { QrCode, Monitor, Users } from "lucide-react";
import Partner from "../assets/images/two-smiling-partners-shaking-hands-lounge.jpg";

const PartnerBenefits = () => {
  return (
    <section className="bg-[#F3F3F3] py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-8 md:px-12 lg:px-20">
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 md:gap-14 lg:gap-16">
        
        <div className="lg:w-1/2 w-full space-y-6 sm:space-y-8 text-center lg:text-left">

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            What You Get as a <br className="hidden sm:block" />
            Partner
          </h2>

          <div className="space-y-6 sm:space-y-8">

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
              
              <div className="bg-gray-200 p-3 rounded-md flex items-center justify-center">
                <QrCode size={20} className="text-gray-800" />
              </div>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-md">
                Real-time tracking, inventory management, and automated manifesting systems at your fingertips.
              </p>

            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
              
              <div className="bg-gray-200 p-3 rounded-md flex items-center justify-center">
                <Monitor size={20} className="text-gray-800" />
              </div>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-md">
                Everything from uniforms and signage to digital marketing assets and local SEO support.
              </p>

            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
              
              <div className="bg-gray-200 p-3 rounded-md flex items-center justify-center">
                <Users size={20} className="text-gray-800" />
              </div>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-md">
                A personal point of contact to help optimize routes and handle operational escalations.
              </p>

            </div>

          </div>
        </div>

        <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">

          <div className="w-full max-w-[300px] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-[240px] sm:h-[300px] md:h-[360px] lg:h-[420px] xl:h-[460px] overflow-hidden rounded-2xl shadow-md">

            <img
              src={Partner}
              alt="Handshake Partner"
              className="w-full h-full object-cover"
            />

          </div>

        </div>

      </div>

    </section>
  );
};

export default PartnerBenefits;
