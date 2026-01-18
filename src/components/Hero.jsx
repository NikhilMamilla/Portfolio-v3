import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import Hyperspeed from "./Hyperspeed";
import LightRays from "./LightRays";
import SplashCursor from "./SplashCursor";
import TextType from "./TextType";
// Use public asset for stable filename download
const resumePublicPath = "/Nikhil_Mamilla.pdf";

const Hero = ({ theme = "dark" }) => {
  const isLight = theme === "light";
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={`relative w-full min-h-screen mx-auto overflow-hidden flex flex-col`}>
      {/* LightRays overlay */}
      <div className="absolute inset-0 pointer-events-none z-10" style={{ opacity: isLight ? 0.15 : 0.22 }}>
        <LightRays
          raysColor={isLight ? "#2E5E99" : "#4cdef5"}
          raysOrigin="top-center"
          raysSpeed={0.5}
          lightSpread={0.7}
          rayLength={1.5}
          pulsating={false}
          fadeDistance={1.2}
          saturation={0.7}
          followMouse={false}
          mouseInfluence={0}
          noiseAmount={0.05}
          distortion={0.05}
        />
      </div>
      {!isLight && (
        <div className="absolute inset-0 pointer-events-none z-10" style={{ opacity: 0.45 }}>
          <SplashCursor
            SPLAT_FORCE={800}
            SPLAT_RADIUS={0.06}
            DENSITY_DISSIPATION={6}
            COLOR_UPDATE_SPEED={3}
          />
        </div>
      )}
      {/* Hyperspeed effect - dark theme & desktop only */}
      {!isMobile && (
        <div className="absolute inset-0 z-0" style={{ transform: 'translateY(-15%)' }}>
          <Hyperspeed
            effectOptions={{
              distortion: 'turbulentDistortion',
              length: 400,
              roadWidth: 10,
              islandWidth: 2,
              lanesPerRoad: 4,
              fov: 90,
              fovSpeedUp: 150,
              speedUp: 2,
              carLightsFade: 0.4,
              totalSideLightSticks: 20,
              lightPairsPerRoadWay: 40,
              shoulderLinesWidthPercentage: 0.05,
              brokenLinesWidthPercentage: 0.1,
              brokenLinesLengthPercentage: 0.5,
              lightStickWidth: [0.12, 0.5],
              lightStickHeight: [1.3, 1.7],
              movingAwaySpeed: [60, 80],
              movingCloserSpeed: [-120, -160],
              carLightsLength: [400 * 0.03, 400 * 0.2],
              carLightsRadius: [0.05, 0.14],
              carWidthPercentage: [0.3, 0.5],
              carShiftX: [-0.8, 0.8],
              carFloorSeparation: [0, 5],
              colors: isLight ? {
                roadColor: 0xffffff,
                islandColor: 0xffffff,
                background: 0xffffff,
                shoulderLines: 0x1A3C6E, // Dark Blue (Clear Blue, not Black)
                brokenLines: 0x2E5E99, // Primary Brand Blue
                leftCars: [0x2E5E99, 0x1E4066, 0x7BA4D0],
                rightCars: [0x7BA4D0, 0x2E5E99, 0x0D2440],
                sticks: 0x1A3C6E, // Dark Blue
              } : {
                roadColor: 0x080808,
                islandColor: 0x0a0a0a,
                background: 0x000000,
                shoulderLines: 0x4cdef5,
                brokenLines: 0x4cdef5,
                leftCars: [0x4cdef5, 0x1b7bb3, 0x1e3a8a],
                rightCars: [0x4cdef5, 0x1b7bb3, 0x1e3a8a],
                sticks: 0x4cdef5,
              }
            }}
          />
        </div>
      )}

      <div
        className={`relative z-20 pt-[120px] pb-10 max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-stretch gap-5 w-full flex-1`}
      >
        <div className='flex flex-col items-center mt-28 md:mt-5'>
          <div className={`w-5 h-5 rounded-full ${isLight ? "bg-[#2E5E99] shadow-[0_0_12px_0_rgba(15,163,177,0.3)]" : "bg-[#4cdef5] shadow-[0_0_12px_0_rgba(76,222,245,0.5)]"}`} />
          <div className={`w-1 h-[480px] sm:h-[480px] bg-gradient-to-b ${isLight ? "from-[#2E5E99]" : "from-[#4cdef5]"} to-transparent`} />
        </div>

        <div className="mt-28 md:mt-5">
          <h1 className={`${styles.heroHeadText} ${isLight ? "!text-[#0D2440]" : "text-white"}`}>
            Hi, I'm{" "}
            <span className="relative inline-block whitespace-nowrap">
              {/* Invisible placeholder with extra space for cursor to prevent wrapping */}
              <span className="invisible">Nikhil Mamilla |</span>
              <div className="absolute inset-0">
                <TextType
                  text={["Nikhil Mamilla", "Nikhil Mamilla"]}
                  typingSpeed={100}
                  initialDelay={1000}
                  pauseDuration={2000}
                  deletingSpeed={50}
                  showCursor={true}
                  cursorCharacter="|"
                  cursorClassName={isLight ? "text-[#0D2440]" : "text-[#4cdef5]"}
                  className={isLight ? "text-[#2E5E99]" : "text-[#4cdef5]"}
                  loop={true}
                  textColors={[isLight ? "#2E5E99" : "#4cdef5"]}
                />
              </div>
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 ${isLight ? "!text-[#0D2440]" : "text-neutral-300"}`}>
            I am a Full Stack web Developer <br />
          </p>

          {/* Stats Cards Layout */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-8 w-full max-w-[500px]">
            {[
              { label: 'Built', val: '10+', sub: 'Projects Built' },
              { label: 'Available', val: 'Now', sub: 'Available' },
              { label: 'Core Stack', val: 'MERN', sub: 'Core Stack' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="h-full rounded-2xl border transition-all duration-300 font-mono"
                style={{
                  background: isLight ? '#F0F6FC' : '#0e0e0e',
                  borderColor: isLight ? '#7BA4D0' : 'rgba(76, 222, 245, 0.2)',
                  boxShadow: isLight ? '0 0 20px 0 rgba(46, 94, 153, 0.25)' : '0 0 20px 0 rgba(76, 222, 245, 0.1)',
                }}
              >
                <div className="px-2 py-3 sm:px-6 sm:py-4 flex flex-col items-center justify-center h-full text-center">
                  <span className={`text-sm sm:text-2xl font-bold block ${isLight ? "text-[#2E5E99]" : "text-white"}`}>{stat.val}</span>
                  <span className={`text-[7px] sm:text-[10px] uppercase tracking-[0.1em] sm:tracking-[0.2em] font-medium leading-tight ${isLight ? "text-[#0D2440]" : "text-neutral-400"}`}>{stat.sub}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col gap-6 sm:gap-8 mt-10">
            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/nikhil-mamilla-823922289"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 group bg-[#0077b5]/10 border border-[#0077b5]/20 hover:bg-[#0077b5]/20 hover:border-[#0077b5]/40`}
              >
                <svg className={`text-[#0077b5] w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300`} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://github.com/NikhilMamilla"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 group ${isLight ? "bg-gray-900/10 border border-gray-900/20 hover:bg-gray-900/20 hover:border-black/40" : "bg-white/10 border border-white/20 hover:bg-white/20 hover:border-white/40"}`}
              >
                <svg className={`${isLight ? "text-gray-900" : "text-white"} w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300`} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/nikhil.mamilla"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 group bg-[#E1306C]/10 border border-[#E1306C]/20 hover:bg-[#E1306C]/20 hover:border-[#E1306C]/40`}
              >
                <svg className={`text-[#E1306C] w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300`} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>

            <div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`font-semibold transition-all duration-300 flex items-center justify-center gap-2 w-fit text-xs sm:text-sm rounded-full ${isLight
                  ? "py-3.5 px-7 text-white bg-[#2E5E99] border border-[#2E5E99]/50 shadow-[0_4px_15px_rgba(46,94,153,0.3)]"
                  : "animated-border outline-none text-white shadow-[0_0_20px_0_rgba(76,222,245,0.3)] hover:shadow-[0_0_30px_0_rgba(76,222,245,0.5)]"
                  }`}
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = resumePublicPath;
                  link.setAttribute('download', 'Nikhil_Mamilla.pdf');
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <div className={`flex items-center gap-2 ${!isLight ? "relative z-10" : ""}`}>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download my Resume
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </div>



      {/* Remove the scroll-to-about button at the bottom */}
    </section>
  );
};

export default Hero;

