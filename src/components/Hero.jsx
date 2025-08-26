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

  return (
    <section className={`relative w-full h-screen mx-auto overflow-hidden`}>
      {/* LightRays overlay */}
      <div className="absolute inset-0 pointer-events-none z-10" style={{ opacity: isLight ? 0.15 : 0.22 }}>
        <LightRays
          raysColor={isLight ? "#0FA3B1" : "#4cdef5"}
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
        <SplashCursor 
          SPLAT_FORCE={800}
          SPLAT_RADIUS={0.06}
          DENSITY_DISSIPATION={6}
          COLOR_UPDATE_SPEED={3}
        />
      )}
      {/* Hyperspeed effect - dark theme only */}
      {!isLight && (
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
            colors: {
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
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-28 md:mt-5 lg:5'>
          <div className={`w-5 h-5 rounded-full ${isLight ? "bg-[#0FA3B1] shadow-[0_0_12px_0_rgba(15,163,177,0.3)]" : "bg-[#4cdef5] shadow-[0_0_12px_0_rgba(76,222,245,0.5)]"}`} />
          <div className={`w-1 sm:h-80 h-40 bg-gradient-to-b ${isLight ? "from-[#0FA3B1]" : "from-[#4cdef5]"} to-transparent`} />
        </div>

        <div className="mt-28 md:mt-5 lg:5">
                     <h1 className={`${styles.heroHeadText} ${isLight ? "!text-[#4a4a4a]" : "text-white"}`}>
             Hi, I'm{" "}
                           <TextType
                text={["Nikhil Mamilla", "Nikhil Mamilla"]}
                typingSpeed={100}
                initialDelay={1000}
                pauseDuration={2000}
                deletingSpeed={50}
                showCursor={true}
                cursorCharacter="|"
                cursorClassName={isLight ? "text-[#0FA3B1]" : "text-[#4cdef5]"}
                className={isLight ? "text-[#0FA3B1]" : "text-[#4cdef5]"}
                loop={true}
                textColors={[isLight ? "#0FA3B1" : "#4cdef5"]}
              />
           </h1>
          <p className={`${styles.heroSubText} mt-2 ${isLight ? "!text-[#6b9080]" : "text-neutral-300"}`}>
            I am a Full Stack web Developer <br/>
          </p>
          
          {/* Social Media Icons */}
          <div className="flex items-center gap-4 mt-6">
            <a 
              href="https://www.linkedin.com/in/nikhil-mamilla-823922289" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group ${isLight ? "bg-[#0FA3B1]/10 border border-[#0FA3B1]/20 hover:bg-[#0FA3B1]/20 hover:border-[#0FA3B1]/40" : "bg-[#4cdef5]/20 border border-[#4cdef5]/30 hover:bg-[#4cdef5]/30 hover:border-[#4cdef5]/50"}`}
            >
              <svg className={`${isLight ? "text-[#0FA3B1]" : "text-[#4cdef5]"} w-5 h-5 group-hover:scale-110 transition-transform duration-300`} fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a 
              href="https://github.com/NikhilMamilla" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group ${isLight ? "bg-[#0FA3B1]/10 border border-[#0FA3B1]/20 hover:bg-[#0FA3B1]/20 hover:border-[#0FA3B1]/40" : "bg-[#4cdef5]/20 border border-[#4cdef5]/30 hover:bg-[#4cdef5]/30 hover:border-[#4cdef5]/50"}`}
            >
              <svg className={`${isLight ? "text-[#0FA3B1]" : "text-[#4cdef5]"} w-5 h-5 group-hover:scale-110 transition-transform duration-300`} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a 
              href="https://instagram.com/nikhil.mamilla" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group ${isLight ? "bg-[#0FA3B1]/10 border border-[#0FA3B1]/20 hover:bg-[#0FA3B1]/20 hover:border-[#0FA3B1]/40" : "bg-[#4cdef5]/20 border border-[#4cdef5]/30 hover:bg-[#4cdef5]/30 hover:border-[#4cdef5]/50"}`}
            >
              <svg className={`${isLight ? "text-[#0FA3B1]" : "text-[#4cdef5]"} w-5 h-5 group-hover:scale-110 transition-transform duration-300`} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>

          {/* Download Resume Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`mt-6 ${isLight ? "py-3 px-8 rounded-full text-white bg-gradient-to-r from-[#0FA3B1] to-[#9CAF88]" : "animated-border py-3 px-8 outline-none text-white shadow-[0_0_20px_0_rgba(76,222,245,0.3)] hover:shadow-[0_0_30px_0_rgba(76,222,245,0.5)]"} font-bold transition-all duration-300 flex items-center gap-2`}
            onClick={() => {
              const link = document.createElement('a');
              link.href = resumePublicPath; // served from public/ without hashing
              link.setAttribute('download', 'Nikhil_Mamilla.pdf');
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            <div className="relative flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download my Resume
            </div>
          </motion.button>
        </div>
      </div>

      

      {/* Remove the scroll-to-about button at the bottom */}
    </section>
  );
};

export default Hero; 