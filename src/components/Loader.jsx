import React from 'react';
import { motion } from 'framer-motion';
import GlitchText from './GlitchText';
import CountUp from './CountUp';

const Loader = ({ theme = 'dark' }) => {
  const isLight = theme === 'light';

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={`fixed inset-0 z-50 flex items-center justify-center ${isLight ? 'bg-[#F0F6FC]' : 'bg-[#0e0e0e]'}`}
    >
          <div className="flex flex-col items-center space-y-8">
            {/* GlitchText Portfolio Title */}
            <GlitchText
              speed={1}
              enableShadows={true}
              enableOnHover={false}
              className={`text-center ${isLight ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#2E5E99] to-[#7BA4D0]' : ''}`}
              theme={theme}
            >
              Portfolio
            </GlitchText>

            {/* CountUp Loading Percentage */}
            <div className="text-center">
              <p className={`${isLight ? 'text-[#0D2440]' : 'text-neutral-400'} text-lg mb-2`}>Loading</p>
              <CountUp
                from={0}
                to={100}
                separator=""
                direction="up"
                duration={4}
                className={`${isLight ? 'text-[#2E5E99]' : 'text-[#4cdef5]'} text-2xl font-bold`}
              />
              <span className={`${isLight ? 'text-[#2E5E99]' : 'text-[#4cdef5]'} text-2xl font-bold`}>%</span>
            </div>

            {/* Loading Dots */}
            <div className="flex space-x-2">
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: "easeInOut"
                  }}
                  className={`w-3 h-3 rounded-full shadow-lg ${isLight ? 'bg-[#2E5E99] shadow-[#2E5E99]/50' : 'bg-[#4cdef5] shadow-[#4cdef5]/50'}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
  );
};

export default Loader; 

