import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { navLinks } from "../constants";

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    const offset = 80; // Adjust for navbar height
    const elementPosition = el.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const hideTimeoutRef = useRef(null);
  const showNavbarRef = useRef(true);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      if (mobileMenuOpen) return setShowNavbar(true);

      // Hide navbar when scrolling down, show when scrolling up
      if (current > lastScrollY && current > 100) {
        setShowNavbar(false);
        showNavbarRef.current = false;
      } else {
        setShowNavbar(true);
        showNavbarRef.current = true;
      }
      setLastScrollY(current);
    };

    const handleMouseMove = () => {
      // Always show navbar on mouse move
      setShowNavbar(true);
      showNavbarRef.current = true;

      // Clear existing timeout
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }

      // Set new timeout to hide navbar after 2.5s of inactivity
      // only if we are scrolled down (scrollY > 100)
      hideTimeoutRef.current = setTimeout(() => {
        if (window.scrollY > 100 && !mobileMenuOpen) {
          setShowNavbar(false);
          showNavbarRef.current = false;
        }
      }, 2500);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    };
  }, [lastScrollY, mobileMenuOpen]);

  return (
    <>
      {/* Desktop Navbar */}
      <div
        className={`fixed top-5 left-1/2 -translate-x-1/2 z-[70] hidden lg:block transition-all duration-300
        ${showNavbar ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"}`}
      >
        <SlideTabs />
      </div>

      {/* Mobile Hamburger */}
      <div className="fixed top-5 left-5 z-[70] lg:hidden">
        <HamburgerButton
          open={mobileMenuOpen}
          setOpen={() => setMobileMenuOpen(!mobileMenuOpen)}
          theme={theme}
        />
      </div>

      {/* Mobile Theme Toggle */}
      <div className="fixed top-5 right-5 z-[70] lg:hidden">
        <button
          onClick={toggleTheme}
          className={`p-3 rounded-full backdrop-blur-md border ${theme === "dark"
            ? "bg-zinc-900/70 text-yellow-400 border-zinc-700/50"
            : "bg-white/80 text-orange-500 shadow-lg border-gray-200/50"
            }`}
        >
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed inset-0 z-[60] backdrop-blur-xl flex items-center justify-center lg:hidden ${theme === "dark" ? "bg-zinc-950/90" : "bg-white/95"
              }`}
          >
            <ul
              className={`space-y-6 text-2xl text-center font-bold ${theme === "dark" ? "text-white" : "text-gray-900"
                }`}
            >
              {navLinks.map((nav) => (
                <motion.li
                  key={nav.id}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`cursor-pointer transition uppercase tracking-widest ${theme === "dark"
                    ? "hover:text-[#4cdef5]"
                    : "hover:text-[#2E5E99]"
                    }`}
                  onClick={() => {
                    scrollToSection(nav.id);
                    setMobileMenuOpen(false);
                  }}
                >
                  {nav.title}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const SlideTabs = () => {
  const { theme, toggleTheme } = useTheme();
  const tabRefs = useRef([]);
  const [active, setActive] = useState("Home");
  const [cursor, setCursor] = useState({ left: 0, width: 0, opacity: 0 });

  useEffect(() => {
    // Current active section detection logic can be added here
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const nav of navLinks) {
        const section = document.getElementById(nav.id);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActive(nav.title);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const titles = navLinks.map(n => n.title);
    const index = titles.indexOf(active);
    const el = tabRefs.current[index];
    if (el) {
      setCursor({
        left: el.offsetLeft,
        width: el.offsetWidth,
        opacity: 1,
      });
    }
  }, [active]);

  return (
    <div className="flex items-center gap-3">
      <ul
        className={`relative flex items-center px-1.5 py-1.5 rounded-full border backdrop-blur-md ${theme === "dark"
          ? "bg-zinc-900/70 border-zinc-700/50"
          : "bg-white/80 border-gray-200/50 shadow-xl"
          }`}
      >
        {navLinks.map((nav, i) => (
          <li
            key={nav.id}
            ref={(el) => (tabRefs.current[i] = el)}
            onClick={() => {
              setActive(nav.title);
              scrollToSection(nav.id);
            }}
            className={`relative px-4 lg:px-6 h-10 flex items-center uppercase cursor-pointer z-10 transition-colors duration-300 font-bold text-xs tracking-widest ${active === nav.title
              ? "text-white"
              : theme === "dark"
                ? "text-zinc-400 hover:text-zinc-200"
                : "text-gray-500 hover:text-gray-800"
              }`}
          >
            {nav.title}
          </li>
        ))}
        <motion.li
          animate={cursor}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className={`absolute h-10 rounded-full z-0 ${theme === "dark" ? "bg-zinc-600/80" : "bg-[#2E5E99]"
            }`}
        />
      </ul>

      <button
        onClick={toggleTheme}
        className={`p-3 rounded-full border backdrop-blur-md transition-all duration-300 ${theme === "dark"
          ? "bg-zinc-900/70 text-yellow-400 border-zinc-700/50 hover:bg-zinc-800"
          : "bg-white/80 text-orange-500 border-gray-200/50 shadow-xl hover:bg-gray-50"
          }`}
      >
        {theme === "dark" ? <FaSun className="text-lg" /> : <FaMoon className="text-lg" />}
      </button>
    </div>
  );
};

const HamburgerButton = ({ open, setOpen, theme }) => (
  <button
    onClick={setOpen}
    className={`p-3 rounded-full border backdrop-blur-md transition-all duration-300 ${theme === "dark"
      ? "bg-zinc-900/70 text-white border-zinc-700/50 hover:bg-zinc-800"
      : "bg-white/80 text-gray-900 border-gray-200/50 shadow-lg hover:bg-gray-50"
      }`}
  >
    {open ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
  </button>
);

export default Navbar;

