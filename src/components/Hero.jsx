import React from 'react';
import { motion } from 'framer-motion';
import HeroImg from '../assets/images/caucasian-man-receiving-his-order-from-deliverywoman-latin-courier-delivering-order-holding-parcels-clipboard-wearing-red-cap-shirt-express-delivery-service-online-shopping-concept.jpg';

export default function Hero() {
  return (
    <section className="relative bg-[#e9ecef] overflow-hidden pt-10 sm:pt-14 md:pt-20">

      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10 lg:px-16 pb-16 md:pb-20 grid md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center md:text-left"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight mb-5 text-[#1a1a1a] uppercase">
            FAST & RELIABLE <br />
            <span className="text-[#dec06c]">COURIER</span> ACROSS <br />
            KERALA
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 md:mb-8 max-w-md mx-auto md:mx-0 leading-relaxed">
            Experience lightning-fast <b>24-hour</b> delivery and seamless doorstep
            pickup services tailored for your convenience. From parcels
            to heavy shipments, we handle it all with precision.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
            <button className="bg-[#dec06c] hover:bg-[#cfaf55] text-[#1a1a1a] px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 rounded-lg md:rounded-xl font-semibold text-sm sm:text-base transition">
              Book Pickup
            </button>

            <button className="bg-[#dec06c] hover:bg-[#cfaf55] text-[#1a1a1a] px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 rounded-lg md:rounded-xl font-semibold text-sm sm:text-base transition">
              Franchise Opportunity
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center md:justify-end"
        >
          <div className="w-full max-w-[320px] sm:max-w-[420px] md:max-w-[500px] lg:max-w-[560px] rounded-[24px] sm:rounded-[30px] md:rounded-[40px] overflow-hidden shadow-lg">
            <img
              src={HeroImg}
              alt="Courier Delivery Service"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}