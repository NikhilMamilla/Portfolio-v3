import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { About, Contact, Experience, Hero, Navbar, Profile, Tech, Works, StarsCanvas } from "./components";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = window.localStorage.getItem("theme");
      if (stored === "light" || stored === "dark") return stored;
    }
    return "dark";
  });

  const isLight = theme === "light";

  useEffect(() => {
    // Check if this is a page refresh
    const isRefresh = performance.navigation.type === 1 || 
                     document.readyState === 'complete' && 
                     !sessionStorage.getItem('hasLoaded');

    if (isRefresh) {
      // Show loader for 4 seconds on refresh
      const timer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem('hasLoaded', 'true');
      }, 4000);

      return () => clearTimeout(timer);
    } else {
      // No loader for normal navigation
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("theme", theme);
    }
    if (typeof document !== "undefined") {
      const root = document.documentElement;
      if (theme === "light") {
        root.classList.add("theme-light");
      } else {
        root.classList.remove("theme-light");
      }
    }
  }, [theme]);

  return (
    <BrowserRouter>
      <div className={`${isLight ? "bg-[#F7F3E9]" : "bg-black"} min-h-screen`}>
        <AnimatePresence mode="wait">
          {isLoading && <Loader key="loader" theme={theme} />}
        <motion.div 
          key="main-content"
          className={`relative z-0 ${isLight ? "bg-[#F7F3E9]" : "bg-black"} min-h-screen`}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoading ? 0 : 1 }}
          transition={{ 
            duration: 0.8, 
            ease: "easeInOut",
            delay: isLoading ? 0 : 0.1
          }}
          style={{ 
            backgroundColor: isLight ? '#F7F3E9' : '#000000',
            minHeight: '100vh'
          }}
        >
        <Navbar theme={theme} onToggleTheme={() => setTheme(isLight ? "dark" : "light")} />
        <Hero theme={theme} />
        <div className={`${isLight ? "bg-[#F7F3E9]" : "bg-[#0e0e0e]"} relative z-0 px-4`}>
          <About theme={theme} />
          <Profile theme={theme} />
        </div>
        <div className={`${isLight ? "bg-[#F7F3E9]" : "bg-[#1a1a1a]"} relative z-0 px-4`}>
          <Experience theme={theme} />
          <Tech theme={theme} />
          <Works theme={theme} />
        </div>
        <div className={`${isLight ? "bg-[#F7F3E9]" : "bg-[#1a1a1a]"} relative z-0 px-4`}>
          <Contact theme={theme} />
        </div>
        <Footer theme={theme} />
        </motion.div>
        </AnimatePresence>
      </div>
    </BrowserRouter>
  );
};

export default App; 