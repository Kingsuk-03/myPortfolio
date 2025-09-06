import React, {useState} from "react";
import {Menu, X} from "lucide-react";
import logo from "../assets/kb_logo.png";

const NAV_ITEMS = ["Home", "About", "Skills", "Projects", "Contact"];

export default function Navbar(): React.JSX.Element {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-3 left-0 w-full z-50">
      {/* centered container so navbar content stays within max width */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-24 py-3">
        {/* actual visual bar (fixed height, rounded bottom) */}
        <div className="h-15 text-7xl relative flex items-center justify-between bg-white/8 backdrop-blur-md border-b border-white/10 rounded-4xl overflow-hidden group">
          {/* shimmer (absolute inside the relative wrapper) */}
          <div
            className="absolute top-0 left-[-110%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent
                          transition-all duration-700 group-hover:left-[110%] pointer-events-none"
          />

          {/* Logo */}
          <a
            href="#"
            className="relative z-20 text-white text-base sm:text-lg md:text-xl font-semibold px-10 py-2 md:ml-5 lg:ml-15"
            onClick={() => setOpen(false)}>
            <img
              src={logo}
              alt="Logo"
              className="h-6.5 sm:h-4 lg:h-6 w-auto object-contain"
            />
          </a>

          {/* Desktop nav (hidden on small screens) */}
          <nav className="hidden md:flex z-20 gap-8 items-center pr-4 ml-30">
            {NAV_ITEMS.map((item) => (
              <a
                key={item}
                href={"#" + item.toLowerCase()}
                className="text-white text-sm md:text-base lg:text-lg hover:text-slate-100 transition-colors">
                {item}
              </a>
            ))}
          </nav>

          {/* Right side: mobile menu button (hidden on md+) */}
          <div className="relative z-20 flex items-center pr-2">
            <button
              type="button"
              aria-controls="mobile-menu"
              aria-expanded={open}
              onClick={() => setOpen((s) => !s)}
              className="md:hidden text-white p-2">
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

          {/* Desktop spacer to balance layout on large screens */}
          <div className="hidden md:block w-8" />
        </div>

        {/* Mobile menu — absolute below the bar, animates open/close */}
        <div
          id="mobile-menu"
          className={`md:hidden absolute left-0 right-0 top-full bg-white/6 backdrop-blur-md border-t border-white/10 overflow-hidden transition-[max-height,opacity] duration-300 ${
            open ? "max-h-60 opacity-100 py-4 mx-4 rounded-xl" : "max-h-0 opacity-0"
          }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center gap-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item}
                href={"#" + item.toLowerCase()}
                className="w-full text-center text-white text-base py-2 hover:text-slate-100 transition-colors"
                onClick={() => setOpen(false)}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
