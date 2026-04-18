import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/images/Roadoz Golden.png';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const phoneNumber = "9447549256";

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Franchise', path: '/franchise' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header className="bg-[#3e4450] text-white sticky top-0 z-50 shadow-md">
        <div className="flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-20 py-3">
          <Link to="/">
            <img
              src={Logo}
              alt="ROADOZ"
              className="h-9 sm:h-10 md:h-12 lg:h-14"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item, i) => (
              <Link
                key={i}
                to={item.path}
                className={`text-sm font-medium transition ${location.pathname === item.path
                    ? 'text-[#dec06c]'
                    : 'hover:text-[#dec06c]'
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={`tel:+91${phoneNumber}`}
              className="flex items-center gap-1 border border-[#dec06c] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold text-[#dec06c] hover:bg-[#dec06c] hover:text-[#3e4450] transition"
            >
              <Phone size={16} />
              <span className="hidden sm:inline">Call</span>
            </a>

            <Link
              to="/franchise"
              className="border border-[#dec06c] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold text-[#dec06c] hover:bg-[#dec06c] hover:text-[#3e4450] transition"
            >
              Apply
            </Link>

            <a
              href="https://admin.roadozcourier.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#dec06c] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold text-[#dec06c] hover:bg-[#dec06c] hover:text-[#3e4450] transition"
            >
              Login
            </a>

            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden text-[#dec06c] ml-1"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-50 transition ${isOpen ? 'visible' : 'invisible'
          }`}
      >
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'
            }`}
          onClick={() => setIsOpen(false)}
        />

        <div
          className={`absolute top-0 right-0 h-full w-[75%] max-w-[300px] bg-[#3e4450] p-6 transform transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          <div className="flex justify-end mb-8">
            <button onClick={() => setIsOpen(false)}>
              <X size={26} className="text-[#dec06c]" />
            </button>
          </div>

          <nav className="flex flex-col gap-6">
            {navItems.map((item, i) => (
              <Link
                key={i}
                to={item.path}
                className={`text-base font-medium transition ${location.pathname === item.path
                    ? 'text-[#dec06c]'
                    : 'text-white hover:text-[#dec06c]'
                  }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-10">
            <a
              href={`tel:+91${phoneNumber}`}
              className="flex items-center justify-center gap-2 border border-[#dec06c] px-4 py-3 rounded-full text-sm font-semibold text-[#dec06c] hover:bg-[#dec06c] hover:text-[#3e4450] transition"
            >
              <Phone size={18} />
              Call {phoneNumber}
            </a>
          </div>

          <Link
            to="/franchise"
            onClick={() => setIsOpen(false)}
            className="mt-4 block text-center border border-[#dec06c] px-4 py-3 rounded-full text-sm font-semibold text-[#dec06c] hover:bg-[#dec06c] hover:text-[#3e4450] transition"
          >
            Apply Franchise
          </Link>

          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="mt-4 block text-center border border-[#dec06c] px-4 py-3 rounded-full text-sm font-semibold text-[#dec06c] hover:bg-[#dec06c] hover:text-[#3e4450] transition"
          >
            Login
          </Link>
        </div>
      </div>
    </>
  );
}
