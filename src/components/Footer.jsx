import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "profile", label: "Journey" },
  { id: "work", label: "Experience" },
  { id: "tech", label: "Skills" },
  { id: "works", label: "Projects" },
  { id: "contact", label: "Contact" },
];

// smooth scroll helper
const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const Footer = ({ theme = 'dark' }) => {
  const isLight = theme === 'light';

  return (
    <footer
      className={`relative z-10 w-full transition-colors duration-300 ${isLight
        ? "bg-[#FFFFFF] text-[#0D2440]"
        : "bg-black text-zinc-500"
        }`}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Created By (TOP) */}
        <div className={`pt-12 pb-6 text-center text-xs tracking-[0.2em] uppercase font-medium ${isLight ? "text-[#2E5E99]" : "text-zinc-400"}`}>
          Created by Nikhil Mamilla
        </div>

        {/* Divider */}
        <div
          className={`h-[1px] w-full ${isLight ? "bg-[#2E5E99]/20" : "bg-white/10"
            }`}
        />

        {/* Footer Content */}
        <div className="py-10 flex flex-col gap-8">

          {/* Footer Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`transition-colors duration-300 ${isLight
                  ? "hover:text-[#2E5E99] text-[#0D2440]"
                  : "hover:text-[#4cdef5] text-zinc-400"
                  }`}
              >
                {section.label}
              </button>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex justify-center gap-8 text-xl">
            <a
              href="https://github.com/NikhilMamilla"
              target="_blank"
              rel="noreferrer"
              className={`transition-all duration-300 hover:scale-125 ${isLight ? "text-gray-900 hover:text-black" : "text-gray-400 hover:text-white"}`}
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/nikhil-mamilla-823922289"
              target="_blank"
              rel="noreferrer"
              className={`transition-all duration-300 hover:scale-125 text-[#0077b5] hover:text-[#006097]`}
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://instagram.com/nikhil.mamilla"
              target="_blank"
              rel="noreferrer"
              className={`transition-all duration-300 hover:scale-125 text-[#E1306C] hover:text-[#C13584]`}
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>

          {/* Copyright */}
          <div className={`text-center text-[10px] sm:text-xs tracking-wider ${isLight ? "text-[#0D2440]/70" : "text-zinc-600"}`}>
            © {new Date().getFullYear()} Nikhil Mamilla. All rights reserved.
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

