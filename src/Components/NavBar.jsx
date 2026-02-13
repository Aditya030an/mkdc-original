import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi"; // hamburger and close icons

const NavBar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const linkStyle = (path) =>
    `uppercase tracking-[0.25em] bg-white text-sm font-semibold transition-colors duration-200 ${
      location.pathname === path
        ? "text-black"
        : "text-gray-400 hover:text-black"
    }`;

  return (
    <nav className="flex items-center justify-between bg-white py-4 px-6 w-full">
      {/* Left menu */}
      <div className="hidden md:flex gap-12">
        <Link to="/" className={linkStyle("/")}>
          Work
        </Link>
      </div>

      {/* Center logo */}
      <div className="text-xl md:text-2xl font-bold tracking-widest bg-white">
        <Link to="/" className="text-black bg-white ">
          MKDC
        </Link>
      </div>

      {/* Right menu */}
      <div className="hidden md:flex gap-12 bg-white">
        <Link to="/recognition" className={linkStyle("/recognition")}>
          Recognition
        </Link>
        <Link to="/story" className={linkStyle("/story")}>
          Story
        </Link>
        <Link to="/contact" className={linkStyle("/contact")}>
          Contact
        </Link>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#000000] text-white flex flex-col items-center py-6 space-y-6 md:hidden shadow-lg">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className={linkStyle("/")}
          >
            Work
          </Link>
          <Link
            to="/story"
            onClick={() => setMenuOpen(false)}
            className={linkStyle("/story")}
          >
            Story
          </Link>
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className={linkStyle("/contact")}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
