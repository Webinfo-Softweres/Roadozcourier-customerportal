import React from "react";
import PickupImg from "../assets/images/caucasian-man-receiving-his-order-from-deliverywoman-latin-courier-delivering-order-holding-parcels-clipboard-wearing-red-cap-shirt-express-delivery-service-online-shopping-concept.jpg";

export default function PickupService() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      <div className="bg-[#FBF9F7] rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] max-w-[1440px] mx-auto py-10 sm:py-14 md:py-20 px-5 sm:px-10 md:px-16 lg:px-20 flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12 lg:gap-16">
        
        <div className="flex-1 space-y-4 sm:space-y-6 text-center md:text-left">
          
          <p className="text-[#925514] font-bold text-xs sm:text-sm tracking-widest uppercase">
            At Your Doorstep
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
            Pickup Service
          </h2>

          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
            Convenience redefined. Schedule a pickup from your home or office 
            with a single tap. Our couriers arrive ready to pack and process 
            your shipments on-site.
          </p>

        </div>

        <div className="flex-1 w-full">
          <img
            src={PickupImg}
            alt="Pickup Service"
            className="w-full h-[220px] sm:h-[280px] md:h-[320px] lg:h-[380px] xl:h-[420px] rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] object-cover shadow-md"
          />
        </div>

      </div>
    </section>
  );
}
