import React from "react";

const ApplicationForm = () => {
  const inputStyle =
    "w-full bg-[#E5E7EB] border-none rounded-xl p-3 sm:p-4 text-sm sm:text-base focus:ring-2 focus:ring-[#E9D16D] outline-none placeholder-gray-400 text-gray-700 font-medium";

  const labelStyle =
    "block text-sm sm:text-base font-bold mb-2 text-gray-800";

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-8 md:px-12 lg:px-20">
      
      <div className="max-w-4xl mx-auto bg-[#FFFBE6] rounded-2xl sm:rounded-3xl lg:rounded-[3rem] p-6 sm:p-8 md:p-12 lg:p-16 shadow-sm border border-[#F3E6C8]">
        
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-gray-900 tracking-tight">
            Franchise Application
          </h2>

          <p className="text-gray-600 text-sm sm:text-base font-medium">
            Fill out the form below to start your journey.
          </p>
        </div>

        <form className="space-y-6 sm:space-y-8">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            
            <div>
              <label className={labelStyle}>Name</label>
              <input type="text" placeholder="Name" className={inputStyle} />
            </div>

            <div>
              <label className={labelStyle}>Phone Number</label>
              <input type="text" placeholder="Phone Number" className={inputStyle} />
            </div>

          </div>

          <div>
            <label className={labelStyle}>Email id</label>
            <input type="email" placeholder="Email id" className={inputStyle} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            
            <div>
              <label className={labelStyle}>Location</label>
              <input type="text" placeholder="Location" className={inputStyle} />
            </div>

            <div>
              <label className={labelStyle}>Area Type</label>
              <input type="text" placeholder="Area Type" className={inputStyle} />
            </div>

          </div>

          <div>
            <label className="block text-sm sm:text-base font-bold mb-3 text-gray-800">
              Investment Ready?
            </label>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-10">
              
              <label className="flex items-center gap-3 cursor-pointer font-semibold text-gray-700">
                <input
                  type="radio"
                  name="ready"
                  className="accent-[#B29E53] w-5 h-5"
                />
                Yes
              </label>

              <label className="flex items-center gap-3 cursor-pointer font-semibold text-gray-700">
                <input
                  type="radio"
                  name="ready"
                  className="accent-[#B29E53] w-5 h-5"
                />
                No
              </label>

            </div>
          </div>

          <div>
            <label className="block text-[11px] sm:text-xs font-black mb-2 uppercase text-gray-500 tracking-widest">
              Message
            </label>

            <textarea
              rows="5"
              placeholder="Tell us about your background..."
              className={inputStyle}
            ></textarea>
          </div>

          <div className="flex justify-center pt-4 sm:pt-6">
            <button className="w-full sm:w-auto bg-[#E9D16D] hover:bg-[#d4bd5a] text-gray-900 font-black py-3 sm:py-4 px-10 sm:px-16 rounded-xl shadow-md transition-all uppercase text-xs tracking-widest">
              Submit Application
            </button>
          </div>

        </form>
      </div>
    </section>
  );
};

export default ApplicationForm;
