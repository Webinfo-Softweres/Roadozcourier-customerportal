import React from "react";

const Investment = () => {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-8">

      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-10 sm:mb-14 md:mb-16 tracking-tight">
          Investment Structures
        </h2>

        <div className="max-w-md sm:max-w-lg md:max-w-2xl mx-auto rounded-3xl overflow-hidden border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.08)]">

          <div className="bg-[#B29E53] text-white py-4 sm:py-5 text-lg sm:text-xl md:text-2xl font-bold tracking-tight">
            Your Investment is 100% Secure
          </div>

          <div className="bg-white p-6 sm:p-8 md:p-12 space-y-4 sm:space-y-6">

            <p className="text-[#FFA500] font-extrabold tracking-[0.12em] sm:tracking-[0.15em] text-xs sm:text-sm uppercase">
              Refundable Security Deposit
            </p>

            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#FFA500] tracking-tight">
              ₹50,000 /-
            </h3>

            <p className="text-gray-500 text-[10px] sm:text-xs mt-4 sm:mt-6 font-medium tracking-widest uppercase">
              100% Refundable Security Deposit Policy Applies
            </p>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Investment;
