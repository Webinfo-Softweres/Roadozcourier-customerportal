import React from 'react';
import { Instagram, Facebook, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#98977c] text-white pt-16 pb-8 px-6 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* BRAND */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-5">
              Roadoz Courier
            </h2>

            <div className="text-sm text-white/90 space-y-1 leading-relaxed mb-6">
              <p>Roadoz Pvt Ltd</p>
              <p>Couriers & Cargo</p>
              <p>Room No. 122, Building No: 55/2055</p>
              <p>DD Vyapar Bhavan, K.P. Vallon Road</p>
              <p>Kadavantra, Cochin, Kerala - 682020</p>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/roadoz_couriers?igsh=Z3Azc2Y3YWpxOXpw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="text-[#dec06c] hover:opacity-70" size={20} />
              </a>

              <a
                href="https://www.facebook.com/roadozlogistics?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="text-[#dec06c] hover:opacity-70" size={20} />
              </a>

              <a href="tel:+919496630687">
                <Phone className="text-[#dec06c] hover:opacity-70" size={20} />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link to="/" className="text-[#dec06c]">Home</Link></li>
              <li><Link to="/services" className="hover:text-[#dec06c]">Services</Link></li>
              <li><Link to="/franchise" className="hover:text-[#dec06c]">Franchise</Link></li>
              <li><Link to="/about" className="hover:text-[#dec06c]">About</Link></li>
              <li><Link to="/contact" className="hover:text-[#dec06c]">Contact</Link></li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-5">
              Services
            </h3>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link to="/services" className="hover:text-[#dec06c]">Delivery</Link></li>
              <li><Link to="/franchise" className="hover:text-[#dec06c]">Franchise</Link></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-5">
              Connect Us
            </h3>

            <ul className="space-y-3 text-sm text-white/90 mb-6">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-[#dec06c]" />
                +91 9496630687
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-[#dec06c]" />
                roadozcourierhr7@gmail.com
              </li>
            </ul>

            <div className="flex items-center bg-[#b1b094] rounded-full p-1 shadow-inner">
              <input
                type="email"
                placeholder="Email address"
                className="bg-transparent outline-none px-4 py-2 text-xs flex-grow placeholder:text-white/70"
              />
              <button className="bg-[#804000] text-white px-4 py-2 rounded-full text-xs font-semibold hover:bg-[#603000] transition">
                Join
              </button>
            </div>
          </div>

        </div>

        <div className="border-t border-white/20 mt-12 pt-6 text-center text-xs text-white/70">
          © {new Date().getFullYear()} Roadoz Pvt Ltd. All rights reserved.
        </div>

      </div>
    </footer>
  );
}