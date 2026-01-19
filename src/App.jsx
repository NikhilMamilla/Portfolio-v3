import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { About, Contact, Experience, Hero, Navbar, Profile, Tech, Works, CallToAction, PortfolioChatbot } from "./components";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

const AppContent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { theme } = useTheme();
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

  return (
    <div className={`${isLight ? "bg-[#FFFFFF]" : "bg-black"} min-h-screen`}>
      <AnimatePresence mode="wait">
        {isLoading && <Loader key="loader" theme={theme} />}
        <motion.div
          key="main-content"
          className={`relative z-0 ${isLight ? "bg-[#FFFFFF]" : "bg-black"} min-h-screen`}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoading ? 0 : 1 }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            delay: isLoading ? 0 : 0.1
          }}
          style={{
            backgroundColor: isLight ? '#FFFFFF' : '#000000',
            minHeight: '100vh'
          }}
        >
          <Navbar />
          <div id="home">
            <Hero theme={theme} />
          </div>
          <div className={`${isLight ? "bg-[#FFFFFF]" : "bg-[#0e0e0e]"} relative z-0 px-4 flex flex-col gap-10`}>
            <About theme={theme} />
            <CallToAction theme={theme} />
            <Profile theme={theme} />
          </div>
          <div className={`${isLight ? "bg-[#FFFFFF]" : "bg-[#1a1a1a]"} relative z-0 px-4`}>
            <Experience theme={theme} />
            <Tech theme={theme} />
            <Works theme={theme} />
          </div>
          <div className={`${isLight ? "bg-[#FFFFFF]" : "bg-[#1a1a1a]"} relative z-0 px-4`}>
            <Contact theme={theme} />
          </div>
          <Footer theme={theme} />
          <PortfolioChatbot />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;