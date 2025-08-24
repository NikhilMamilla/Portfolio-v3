import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { About, Contact, Experience, Hero, Navbar, Profile, Tech, Works, StarsCanvas } from "./components";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

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

  return (
    <BrowserRouter>
      <div className="bg-black min-h-screen">
        <AnimatePresence mode="wait">
          {isLoading && <Loader key="loader" />}
        <motion.div 
          key="main-content"
          className="relative z-0 bg-black min-h-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoading ? 0 : 1 }}
          transition={{ 
            duration: 0.8, 
            ease: "easeInOut",
            delay: isLoading ? 0 : 0.1
          }}
          style={{ 
            backgroundColor: '#000000',
            minHeight: '100vh'
          }}
        >
        <Navbar />
        <Hero />
        <div className="bg-[#0e0e0e] relative z-0 px-4">
          <About />
          <Profile />
        </div>
        <div className="bg-[#1a1a1a] relative z-0 px-4">
          <Experience />
          <Tech />
          <Works />
        </div>
        <div className="bg-[#1a1a1a] relative z-0 px-4">
          <Contact />
        </div>
        <Footer />
        </motion.div>
        </AnimatePresence>
      </div>
    </BrowserRouter>
  );
};

export default App; 