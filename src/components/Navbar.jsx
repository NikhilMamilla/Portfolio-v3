import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";

const Navbar = ({ theme: externalTheme, onToggleTheme }) => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = externalTheme || "dark";
  const isLight = theme === "light";

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${
        isLight ? "bg-[#fff5f2]/80 border-[#e2e8f0]" : "bg-[#0e0e0e]/80 border-white/10"
      } backdrop-blur-md border-b`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto relative'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className={`${isLight ? "text-[#4a4a4a]" : "text-white"} text-[18px] font-bold cursor-pointer flex`}>
            Portfolio
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10 absolute left-1/2 -translate-x-1/2'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                isLight
                  ? active === nav.title
                    ? "text-[#0FA3B1]"
                    : "text-[#6b9080]"
                  : active === nav.title
                  ? "text-[#4cdef5]"
                  : "text-neutral-300"
              } ${isLight ? "hover:text-[#0FA3B1]" : "hover:text-[#4cdef5]"} text-[18px] font-medium cursor-pointer transition-colors duration-300`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className='flex justify-end items-center gap-4'>
          <button
            aria-label={isLight ? "Switch to dark theme" : "Switch to light theme"}
            onClick={onToggleTheme}
            className={`inline-flex items-center justify-center w-9 h-9 rounded-full border ${
              isLight ? "border-[#e2e8f0] bg-[#fff5f2]" : "border-white/10 bg-transparent"
            }`}
            title={isLight ? "Dark" : "Light"}
          >
            {isLight ? (
              <FaMoon className="w-5 h-5 text-[#4a4a4a]" />
            ) : (
              <FaSun className="w-5 h-5 text-white" />
            )}
          </button>

          <div className='sm:hidden flex items-center'>
          {toggle ? (
              <FaTimes
                className={`w-7 h-7 ${isLight ? "text-[#4a4a4a]" : "text-white"} cursor-pointer`}
                onClick={() => setToggle(!toggle)}
              />
          ) : (
              <FaBars
                className={`w-7 h-7 ${isLight ? "text-[#4a4a4a]" : "text-white"} cursor-pointer`}
                onClick={() => setToggle(!toggle)}
              />
          )}
          </div>

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 ${
              isLight
                ? "bg-[#fff5f2]/95 border-[#e2e8f0]"
                : "bg-[#0e0e0e]/95 border-[#4cdef5]/20"
            } backdrop-blur-md absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl border`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    isLight
                      ? active === nav.title
                        ? "text-[#0FA3B1]"
                        : "text-[#6b9080]"
                      : active === nav.title
                      ? "text-[#4cdef5]"
                      : "text-neutral-300"
                  } ${isLight ? "hover:text-[#0FA3B1]" : "hover:text-[#4cdef5]"} transition-colors duration-300`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
