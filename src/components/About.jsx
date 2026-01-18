import React from "react";
import { Tilt } from "react-tilt";

import { styles } from "../styles";
import { services } from "../constants";
import { photo } from "../assets";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ title, icon, theme = "dark" }) => {
  const isLight = theme === "light";

  // Check if icon is a React component (function) or an image path (string)
  const isReactIcon = typeof icon === 'function';

  return (
    <Tilt className="xs:w-[250px] w-full">
      <div className={`w-full ${isLight ? "bg-gradient-to-r from-[#2E5E99]/20 via-[#2E5E99]/10 to-[#2E5E99]/20 border border-[#2E5E99]/40" : "bg-gradient-to-r from-[#4cdef5]/20 via-[#1b7bb3]/20 to-[#1e3a8a]/20 shadow-[0_0_20px_0_rgba(76,222,245,0.3)] hover:shadow-[0_0_30px_0_rgba(76,222,245,0.5)]"} p-[1px] rounded-[20px] transition-all duration-300`}>
        <div className={`${isLight ? "bg-[#F0F6FC] hover:bg-[#e2e8f0]" : "bg-[#0e0e0e] hover:bg-[#1a1a1a]"} rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col transition-colors duration-300`}>
          {isReactIcon ? (
            <div className={`w-16 h-16 ${isLight ? "text-[#2E5E99]" : "text-[#4cdef5]"} hover:scale-110 transition-transform duration-300`}>
              {React.createElement(icon, { className: "w-full h-full" })}
            </div>
          ) : (
            <img src={icon} alt="web-development" className="w-16 h-16 object-contain hover:scale-110 transition-transform duration-300" />
          )}
          <h3 className={`text-[20px] font-bold text-center transition-colors duration-300 ${isLight ? "text-[#0D2440] hover:text-[#2E5E99]" : "text-white hover:text-[#4cdef5]"}`}>{title}</h3>
        </div>
      </div>
    </Tilt>
  );
};

const About = ({ theme = "dark" }) => {
  const isLight = theme === "light";

  return (
    <>
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Left side - Heading and Text */}
        <div className="flex-1 text-left">
          {isLight ? (
            <>
              <p className="sm:text-[18px] text-[14px] uppercase tracking-wider text-[#7BA4D0]">Introduction</p>
              <h2 className="font-black text-[#0D2440] md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Overview.</h2>
            </>
          ) : (
            <>
              <p className={`${styles.sectionSubText}`}>Introduction</p>
              <h2 className={`${styles.sectionHeadText}`}>Overview.</h2>
            </>
          )}

          <p
            className={`mt-4 text-[17px] max-w-3xl leading-[30px] ${isLight ? "text-[#0D2440]" : "text-neutral-300"}`}
          >
            I’m a Computer Science and Engineering student at BVRIT, passionate about AI/ML and full-stack development. I specialize in React, Python, and modern web technologies, building AI-powered applications and scalable web solutions. I’m also the GDG on Campus Organizer and President of CBB, where I lead tech communities, organize events, and collaborate with teams to build impactful initiatives. I’m a quick learner who loves working on innovative projects that solve real-world problems.
          </p>
        </div>

        {/* Right side - Photo */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative">
            <div className={`w-80 h-80 rounded-full overflow-hidden border-4 ${isLight ? "border-[#2E5E99]/30" : "border-[#4cdef5]/20 shadow-[0_0_30px_0_rgba(76,222,245,0.3)] hover:shadow-[0_0_50px_0_rgba(76,222,245,0.5)]"} transition-all duration-300`}>
              <img
                src={photo}
                alt="Profile"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} theme={theme} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

