import React from "react";

export default function ReadyToShip() {
  return (
    <section className="bg-[#E5E5E5] py-12 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-20">
      
      <div className="max-w-7xl mx-auto bg-[#0E6AD2] rounded-[2rem] sm:rounded-[3rem] lg:rounded-[4rem] p-8 sm:p-10 md:p-16 lg:p-20 text-center text-white relative overflow-hidden shadow-2xl">
        
        <div className="absolute top-0 right-0 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-white/10 rounded-full -mr-20 sm:-mr-30 md:-mr-40 -mt-20 sm:-mt-30 md:-mt-40 blur-3xl"></div>

        <div className="absolute bottom-0 left-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-blue-900/40 rounded-full -ml-16 sm:-ml-24 md:-ml-32 -mb-16 sm:-mb-24 md:-mb-32 blur-2xl"></div>

        <div className="relative z-10">
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-5 sm:mb-6 md:mb-8 leading-tight">
            Ready to Ship with <br className="hidden sm:block" />
            Precision?
          </h2>

          <p className="text-blue-100 text-sm sm:text-base md:text-lg lg:text-xl mb-8 sm:mb-10 md:mb-12 max-w-xl md:max-w-2xl mx-auto">
            Join thousands of businesses that trust Roadoz for their most 
            critical logistics needs.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            
            <button className="bg-[#78350F] hover:bg-[#5a270b] text-white font-bold py-3 sm:py-4 md:py-5 px-8 sm:px-10 md:px-14 rounded-xl sm:rounded-2xl text-sm sm:text-base md:text-lg shadow-lg transform transition active:scale-95">
              Open an Account
            </button>

            <button className="border-2 border-white/40 hover:bg-white/10 text-white font-bold py-3 sm:py-4 md:py-5 px-8 sm:px-10 md:px-14 rounded-xl sm:rounded-2xl text-sm sm:text-base md:text-lg backdrop-blur-sm transition-all">
              Contact Sales
            </button>

          </div>
        </div>
      </div>

    </section>
  );
}
