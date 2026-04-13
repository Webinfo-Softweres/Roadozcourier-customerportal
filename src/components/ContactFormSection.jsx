import React from 'react';
import { MapPin, Phone, MessageSquare, ArrowRight } from 'lucide-react';

const ContactFormSection = () => {
  const inputStyle = "w-full bg-[#E5E7EB] border-none rounded-lg p-3 text-sm focus:ring-2 focus:ring-[#E9D16D] outline-none";

  return (
    <section className="py-20 px-6 md:px-20 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-16">
        
        {/* Left Column: Contact Details */}
        <div className="lg:w-1/2 space-y-10">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900">Precision in Communication</h2>
            <p className="text-gray-600">
              Reach out to us through any of our channels. Our dedicated support team ensures your queries are handled with professional urgency.
            </p>
          </div>

          <div className="space-y-8">
            {/* Headquarters */}
            <div className="flex gap-4">
              <div className="bg-blue-50 p-3 rounded-xl h-fit"><MapPin className="text-blue-900" size={20}/></div>
              <div>
                <h4 className="font-bold text-gray-900">Our Headquarters</h4>
                <p className="text-gray-500 text-sm">Roadoz Logistics Center, 4th Floor<br/>Business District, KL, 682024</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="bg-blue-50 p-3 rounded-xl h-fit"><Phone className="text-blue-900" size={20}/></div>
              <div>
                <h4 className="font-bold text-gray-900">Phone Support</h4>
                <p className="text-gray-500 text-sm">Main: 94475 49256<br/>Support: 0484 290 8800</p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex gap-4">
              <div className="bg-green-50 p-3 rounded-xl h-fit"><MessageSquare className="text-green-600" size={20}/></div>
              <div>
                <h4 className="font-bold text-gray-900">WhatsApp Business</h4>
                <p className="text-gray-500 text-sm italic">Instant support available 24/7</p>
                <p className="text-gray-500 text-sm">+91 94475 49256</p>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-100">
            <h4 className="font-bold text-gray-900 mb-2">Franchise Inquiries</h4>
            <p className="text-gray-500 text-sm mb-4">Join our growing network of professional couriers.</p>
            <a href="#" className="text-[#B29E53] font-bold flex items-center gap-2 hover:underline">
              Learn More <ArrowRight size={16}/>
            </a>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="lg:w-1/2">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold mb-2">Name</label>
                <input type="text" placeholder="Name" className={inputStyle} />
              </div>
              <div>
                <label className="block text-xs font-bold mb-2">Email id</label>
                <input type="email" placeholder="Email id" className={inputStyle} />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold mb-2">Subject</label>
              <select className={inputStyle}>
                <option>General Inquiry</option>
                <option>Support</option>
                <option>Franchise</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold mb-2 uppercase text-gray-400">Message</label>
              <textarea rows="6" placeholder="How can we help you?" className={inputStyle}></textarea>
            </div>

            <div className="flex justify-end">
              <button className="bg-[#E9D16D] hover:bg-[#d4bd5a] text-gray-900 font-bold py-3 px-10 rounded-full shadow-md transition-all text-sm">
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;